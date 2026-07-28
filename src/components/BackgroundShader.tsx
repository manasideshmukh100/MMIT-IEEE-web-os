import React, { useEffect, useRef } from 'react';

export const BackgroundShader: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl') as WebGLRenderingContext | null;
    if (!gl) return;

    let animationFrameId: number;

    const vs = `
      attribute vec2 a_position;
      varying vec2 v_texCoord;
      void main() {
        v_texCoord = a_position * 0.5 + 0.5;
        gl_Position = vec4(a_position, 0.0, 1.0);
      }
    `;

    const fs = `
      precision highp float;
      varying vec2 v_texCoord;
      uniform float u_time;
      uniform vec2 u_resolution;
      uniform vec2 u_mouse;

      float hash(vec2 p) {
        return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
      }

      void main() {
        vec2 uv = v_texCoord;
        vec2 centered_uv = (uv - 0.5) * (u_resolution.xy / min(u_resolution.x, u_resolution.y));
        
        // Deep Space Base
        vec3 color = mix(vec3(0.04, 0.06, 0.12), vec3(0.01, 0.02, 0.05), length(centered_uv));
        
        // Mouse glow influence
        vec2 mouse_uv = (u_mouse / u_resolution - 0.5) * (u_resolution.xy / min(u_resolution.x, u_resolution.y));
        float mouse_dist = length(centered_uv - mouse_uv);
        float mouse_glow = exp(-mouse_dist * 3.0) * 0.15;
        
        // Colorful Blurred Spiral / Nebula Effect
        float angle = atan(centered_uv.y, centered_uv.x);
        float dist = length(centered_uv);
        
        // Create a rotating spiral influence
        float spiral = sin(dist * 10.0 - u_time * 0.4 + angle * 3.0);
        
        // Primary Nebula (Blue/Cyan)
        float nebula1 = smoothstep(0.4, 0.0, abs(spiral)) * (1.0 - dist * 1.5);
        vec3 color1 = vec3(0.23, 0.51, 0.96); // IEEE Blue
        
        // Secondary Glow (Purple/Magenta)
        float spiral2 = cos(dist * 8.0 - u_time * 0.25 + angle * 2.0);
        float nebula2 = smoothstep(0.5, 0.0, abs(spiral2)) * (1.0 - dist * 1.2);
        vec3 color2 = vec3(0.48, 0.22, 0.93); // Purple Accent
        
        // Apply blur/softness
        color += color1 * nebula1 * 0.18;
        color += color2 * nebula2 * 0.14;
        color += vec3(0.18, 0.85, 0.96) * mouse_glow;
        
        // Center Glow
        color += vec3(0.13, 0.83, 0.93) * 0.06 / (dist + 0.12);
        
        // Distant Stars (The "Sparkle")
        vec2 star_uv = uv * 110.0;
        vec2 ipos = floor(star_uv);
        vec2 fpos = fract(star_uv);
        float h = hash(ipos);
        if (h > 0.994) {
            float size = (sin(u_time * 2.5 + h * 6.28) * 0.5 + 0.5) * 0.25;
            float d = length(fpos - 0.5);
            color += vec3(0.9, 0.95, 1.0) * smoothstep(size, 0.0, d);
        }
        
        // Vignette
        color *= 1.0 - smoothstep(0.5, 1.5, dist);
        
        gl_FragColor = vec4(color, 1.0);
      }
    `;

    function compileShader(type: number, source: string) {
      const shader = gl!.createShader(type);
      if (!shader) return null;
      gl!.shaderSource(shader, source);
      gl!.compileShader(shader);
      if (!gl!.getShaderParameter(shader, gl!.COMPILE_STATUS)) {
        console.error('Shader compilation error:', gl!.getShaderInfoLog(shader));
        gl!.deleteShader(shader);
        return null;
      }
      return shader;
    }

    const vertexShader = compileShader(gl.VERTEX_SHADER, vs);
    const fragmentShader = compileShader(gl.FRAGMENT_SHADER, fs);
    if (!vertexShader || !fragmentShader) return;

    const program = gl.createProgram();
    if (!program) return;
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);

    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.error('Program link error:', gl.getProgramInfoLog(program));
      return;
    }

    gl.useProgram(program);

    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]),
      gl.STATIC_DRAW
    );

    const positionAttributeLocation = gl.getAttribLocation(program, 'a_position');
    gl.enableVertexAttribArray(positionAttributeLocation);
    gl.vertexAttribPointer(positionAttributeLocation, 2, gl.FLOAT, false, 0, 0);

    const uTime = gl.getUniformLocation(program, 'u_time');
    const uRes = gl.getUniformLocation(program, 'u_resolution');
    const uMouse = gl.getUniformLocation(program, 'u_mouse');

    let mousePos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };

    const handleMouseMove = (event: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      if (rect.width && rect.height) {
        const nx = (event.clientX - rect.left) / rect.width;
        const ny = 1.0 - (event.clientY - rect.top) / rect.height;
        mousePos.x = nx * canvas.width;
        mousePos.y = ny * canvas.height;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    const resize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      if (canvas.width !== width || canvas.height !== height) {
        canvas.width = width;
        canvas.height = height;
        gl.viewport(0, 0, width, height);
      }
    };

    window.addEventListener('resize', resize);
    resize();

    let startTime = performance.now();

    const render = (time: number) => {
      const elapsed = (time - startTime) * 0.001;
      gl.viewport(0, 0, canvas.width, canvas.height);
      if (uTime) gl.uniform1f(uTime, elapsed);
      if (uRes) gl.uniform2f(uRes, canvas.width, canvas.height);
      if (uMouse) gl.uniform2f(uMouse, mousePos.x, mousePos.y);

      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full opacity-70 transition-opacity duration-1000"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B0F19]/50 via-[#030712]/80 to-[#0F1321]" />
    </div>
  );
};
