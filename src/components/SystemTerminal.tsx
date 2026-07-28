import React, { useState, useEffect, useRef } from 'react';
import { TerminalLog } from '../types';
import { SYSTEM_METRICS, COMMITTEE_MEMBERS, EVENTS_ORBIT, PROJECTS } from '../data/mockData';
import { Terminal as TerminalIcon, Cpu, Activity, ShieldCheck, RefreshCw, Send, CheckCircle2, CornerDownLeft, Sparkles, X } from 'lucide-react';

interface SystemTerminalProps {
  isOpenModal?: boolean;
  onCloseModal?: () => void;
}

export const SystemTerminal: React.FC<SystemTerminalProps> = ({
  isOpenModal = false,
  onCloseModal,
}) => {
  const [inputCommand, setInputCommand] = useState('');
  const [logs, setLogs] = useState<TerminalLog[]>([
    {
      id: '1',
      type: 'system',
      content: 'MMIT IEEE ENGINEERING OS [Version 1.0.4-release]',
      timestamp: '18:00:00',
    },
    {
      id: '2',
      type: 'system',
      content: 'Kernel: Linux 6.8.0-ieee-node-x86_64 | Architecture: x86_64 Cloud Native',
      timestamp: '18:00:01',
    },
    {
      id: '3',
      type: 'success',
      content: 'All 8 Executive Nodes Online. Region 10 STB60226400 Handshake Verified.',
      timestamp: '18:00:02',
    },
    {
      id: '4',
      type: 'output',
      content: 'Type "help" to list available terminal commands.',
      timestamp: '18:00:03',
    },
  ]);

  const [metrics, setMetrics] = useState(SYSTEM_METRICS);
  const logContainerRef = useRef<HTMLDivElement | null>(null);

  // Auto-scroll terminal output
  useEffect(() => {
    if (logContainerRef.current) {
      logContainerRef.current.scrollTop = logContainerRef.current.scrollHeight;
    }
  }, [logs]);

  // Simulate real-time metric updates
  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics((prev) => ({
        ...prev,
        latencyMs: Math.floor(12 + Math.random() * 6),
        cpuUsagePercent: Number((10 + Math.random() * 8).toFixed(1)),
      }));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleRunCommand = (cmd: string) => {
    const trimmed = cmd.trim();
    if (!trimmed) return;

    const timestamp = new Date().toLocaleTimeString('en-US', { hour12: false });

    // Append user input
    const newLogs: TerminalLog[] = [
      ...logs,
      {
        id: Date.now().toString(),
        type: 'input',
        content: `mmit-ieee-os:~$ ${trimmed}`,
        timestamp,
      },
    ];

    const args = trimmed.toLowerCase().split(' ');
    const mainCommand = args[0];

    switch (mainCommand) {
      case 'help':
        newLogs.push({
          id: (Date.now() + 1).toString(),
          type: 'output',
          content: `AVAILABLE COMMANDS:
  help              - Show this command reference
  init              - Execute system diagnostics & telemetry boot sequence
  team              - Display Executive Committee roster & branch counsel
  events            - Output Events Orbit mission log
  projects          - List active ecosystem research & hardware projects
  stats             - Query real-time node uptime and CPU metrics
  contact <message> - Send direct dispatch transmission to branch officers
  clear             - Clear terminal display buffer`,
          timestamp,
        });
        break;

      case 'init':
        newLogs.push({
          id: (Date.now() + 1).toString(),
          type: 'system',
          content: '[INITIALIZATION PROTOCOL LAUNCHED]...',
          timestamp,
        });
        setTimeout(() => {
          setLogs((prev) => [
            ...prev,
            {
              id: Date.now().toString(),
              type: 'success',
              content: `✓ Region 10 Mesh: CONNECTED
✓ Branch ID: STB60226400 Active
✓ School Code: 60227769 Active
✓ Encryption: 256-bit TLS Active
✓ System Status: 100% OPERATIONAL`,
              timestamp: new Date().toLocaleTimeString('en-US', { hour12: false }),
            },
          ]);
        }, 600);
        break;

      case 'team':
        const teamText = COMMITTEE_MEMBERS.map(
          (m) => `• [${m.role.toUpperCase()}] ${m.name} (${m.department})`
        ).join('\n');
        newLogs.push({
          id: (Date.now() + 1).toString(),
          type: 'output',
          content: `EXECUTIVE COMMITTEE ROSTER:\n${teamText}`,
          timestamp,
        });
        break;

      case 'events':
        const eventsText = EVENTS_ORBIT.map(
          (e) => `• [${e.formattedDate}] ${e.title} - ${e.location}`
        ).join('\n');
        newLogs.push({
          id: (Date.now() + 1).toString(),
          type: 'output',
          content: `EVENTS ORBIT MISSION LOG:\n${eventsText}`,
          timestamp,
        });
        break;

      case 'projects':
        const projText = PROJECTS.map(
          (p) => `• [${p.status}] ${p.title} (${p.category}) - Lead: ${p.lead}`
        ).join('\n');
        newLogs.push({
          id: (Date.now() + 1).toString(),
          type: 'output',
          content: `ECOSYSTEM PROJECTS ARCHIVE:\n${projText}`,
          timestamp,
        });
        break;

      case 'stats':
        newLogs.push({
          id: (Date.now() + 1).toString(),
          type: 'output',
          content: `SYSTEM TELEMETRY METRICS:
  Uptime:       ${metrics.uptime}%
  Latency:      ${metrics.latencyMs} ms
  Active Nodes: ${metrics.activeNodes}
  Memory:       ${metrics.memoryUsageGB} GB / 16.0 GB
  CPU Load:     ${metrics.cpuUsagePercent}%
  Build Ver:    ${metrics.buildVersion}`,
          timestamp,
        });
        break;

      case 'contact':
        const msg = args.slice(1).join(' ');
        if (!msg) {
          newLogs.push({
            id: (Date.now() + 1).toString(),
            type: 'error',
            content: 'Usage: contact <your message text here>',
            timestamp,
          });
        } else {
          newLogs.push({
            id: (Date.now() + 1).toString(),
            type: 'success',
            content: `DISPATCH TRANSMITTED to MMIT IEEE Officers: "${msg}". Response ticket generated!`,
            timestamp,
          });
        }
        break;

      case 'clear':
        setLogs([]);
        setInputCommand('');
        return;

      default:
        newLogs.push({
          id: (Date.now() + 1).toString(),
          type: 'error',
          content: `Command not recognized: "${trimmed}". Type "help" for command list.`,
          timestamp,
        });
        break;
    }

    setLogs(newLogs);
    setInputCommand('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleRunCommand(inputCommand);
    }
  };

  const content = (
    <div className="w-full max-w-[1280px] mx-auto relative z-10">
      {/* Header & Control Cards */}
      <div className="text-center mb-10">
        <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mb-2 flex items-center justify-center gap-3">
          <TerminalIcon className="w-8 h-8 text-[#2fd9f4]" /> Control Center & CLI
        </h2>
        <div className="h-1 w-24 bg-gradient-to-r from-[#2fd9f4] via-[#3b82f6] to-[#7c3aed] mx-auto rounded-full mb-3 shadow-[0_0_12px_#2fd9f4]" />
        <p className="font-body text-[#c2c6d6] text-sm max-w-xl mx-auto">
          Monitor system metrics, access live telemetry, or type commands into the interactive Engineering OS terminal.
        </p>
      </div>

      {/* Telemetry Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div className="glass-panel p-4 rounded-xl border border-white/10">
          <div className="flex justify-between items-center text-xs font-mono text-[#8c909f] mb-1">
            <span>SYSTEM UPTIME</span>
            <Activity className="w-3.5 h-3.5 text-emerald-400" />
          </div>
          <div className="text-xl font-display font-bold text-white">{metrics.uptime}%</div>
          <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden mt-2">
            <div className="h-full bg-gradient-to-r from-[#3b82f6] to-[#2fd9f4] w-[99.98%]" />
          </div>
        </div>

        <div className="glass-panel p-4 rounded-xl border border-white/10">
          <div className="flex justify-between items-center text-xs font-mono text-[#8c909f] mb-1">
            <span>LATENCY</span>
            <Cpu className="w-3.5 h-3.5 text-[#2fd9f4]" />
          </div>
          <div className="text-xl font-display font-bold text-[#2fd9f4]">{metrics.latencyMs} ms</div>
          <div className="text-[10px] font-mono text-[#8c909f] mt-1">Region 10 Direct Pipe</div>
        </div>

        <div className="glass-panel p-4 rounded-xl border border-white/10">
          <div className="flex justify-between items-center text-xs font-mono text-[#8c909f] mb-1">
            <span>ACTIVE NODES</span>
            <ShieldCheck className="w-3.5 h-3.5 text-[#d2bbff]" />
          </div>
          <div className="text-xl font-display font-bold text-[#d2bbff]">{metrics.activeNodes}</div>
          <div className="text-[10px] font-mono text-[#8c909f] mt-1">Branch Mesh Connected</div>
        </div>

        <div className="glass-panel p-4 rounded-xl border border-white/10">
          <div className="flex justify-between items-center text-xs font-mono text-[#8c909f] mb-1">
            <span>CPU LOAD</span>
            <RefreshCw className="w-3.5 h-3.5 text-amber-300 animate-spin" />
          </div>
          <div className="text-xl font-display font-bold text-amber-300">{metrics.cpuUsagePercent}%</div>
          <div className="text-[10px] font-mono text-[#8c909f] mt-1">x86_64 Cloud Worker</div>
        </div>
      </div>

      {/* Terminal Screen Container */}
      <div className="rounded-2xl bg-[#0a0d1c] border border-white/15 overflow-hidden shadow-[0_0_40px_rgba(0,0,0,0.8)] relative scanlines">
        {/* Terminal Window Header Bar */}
        <div className="bg-[#171b2a] px-4 py-3 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-amber-500/80" />
            <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
            <span className="ml-2 font-mono text-xs text-[#c2c6d6] flex items-center gap-1.5">
              <TerminalIcon className="w-3.5 h-3.5 text-[#2fd9f4]" /> bash — mmit-ieee-os@cluster:~
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => handleRunCommand('init')}
              className="text-[11px] font-mono px-2.5 py-1 rounded bg-[#2fd9f4]/10 text-[#2fd9f4] hover:bg-[#2fd9f4]/20 border border-[#2fd9f4]/30 flex items-center gap-1"
            >
              <Sparkles className="w-3 h-3" /> Boot Diagnost
            </button>
            <button
              onClick={() => handleRunCommand('clear')}
              className="text-[11px] font-mono text-[#8c909f] hover:text-white"
            >
              Clear
            </button>
            {isOpenModal && onCloseModal && (
              <button onClick={onCloseModal} className="text-[#8c909f] hover:text-white p-1">
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* Logs Output Screen */}
        <div
          ref={logContainerRef}
          className="p-5 font-mono text-xs leading-relaxed max-h-[380px] min-h-[260px] overflow-y-auto flex flex-col gap-2 selection:bg-[#2fd9f4]/30"
        >
          {logs.map((log) => (
            <div key={log.id} className="flex items-start gap-2">
              <span className="text-[#8c909f] select-none text-[10px] mt-0.5">[{log.timestamp}]</span>
              <div
                className={`whitespace-pre-wrap ${
                  log.type === 'input'
                    ? 'text-white font-semibold'
                    : log.type === 'success'
                    ? 'text-emerald-400 font-mono'
                    : log.type === 'error'
                    ? 'text-rose-400 font-mono'
                    : log.type === 'system'
                    ? 'text-[#2fd9f4]'
                    : 'text-[#c2c6d6]'
                }`}
              >
                {log.content}
              </div>
            </div>
          ))}
        </div>

        {/* Input Bar */}
        <div className="bg-[#121625] px-4 py-3 border-t border-white/10 flex items-center gap-2">
          <span className="font-mono text-xs text-[#2fd9f4] font-bold select-none">
            mmit-ieee-os:~$
          </span>
          <input
            type="text"
            value={inputCommand}
            onChange={(e) => setInputCommand(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type command (e.g. 'help', 'team', 'events', 'stats', 'init')..."
            className="flex-1 bg-transparent font-mono text-xs text-white placeholder-[#8c909f] focus:outline-none"
            autoFocus={isOpenModal}
          />
          <button
            onClick={() => handleRunCommand(inputCommand)}
            className="p-1.5 rounded-lg bg-[#3b82f6]/20 text-[#2fd9f4] hover:bg-[#3b82f6]/40 transition-colors"
            title="Execute Command"
          >
            <CornerDownLeft className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );

  if (isOpenModal) {
    return (
      <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xl flex items-center justify-center p-4 animate-in fade-in">
        <div className="w-full max-w-4xl max-h-[90vh] overflow-y-auto">
          {content}
        </div>
      </div>
    );
  }

  return <section id="logistics" className="py-20 px-6">{content}</section>;
};
