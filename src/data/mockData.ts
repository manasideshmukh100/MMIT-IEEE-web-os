import { CommitteeMember, EventItem, ProjectItem, SystemMetrics } from '../types';

export const COMMITTEE_MEMBERS: CommitteeMember[] = [
  {
    id: 'monika-dangore',
    name: 'Dr. Monika Dangore',
    role: 'Branch Counselor',
    category: 'counsel',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCZPf2p_lV5srKtsh1tnY7Q48sUbOeFqSkJC4r6EfTbJVn9AOG2SHNMKpI_jk-oNk9EoBY88I63VKk7sHOgWkNXr69g7N8XCZBcObusPSC3pfEBfPTKCtKwb6N7vZfcgFXhd-W6aXfYvjQ9xxUSm10MoToDcxTn0lmamwGAkSammscv4h_th4ZLs5N2PRrvrRRgPEY0xVnPa7Ylo3ACRID6vmdlqG-g8zmjr0CpQCNXQtapToNLQ2C4jGxlmD0B2V1XfNkHV_iHVfw',
    borderColor: 'primary',
    animationDelay: '0s',
    email: 'monika.dangore@mmit.edu.in',
    linkedin: 'https://linkedin.com',
    bio: 'Senior Faculty Advisor guiding MMIT IEEE Student Branch towards research excellence, industry collaborations, and technical innovation.',
    department: 'Computer Engineering',
    achievements: ['IEEE Senior Member', 'Published 25+ International Journals', 'Branch Guidance Award 2025']
  },
  {
    id: 'sankalp-indish',
    name: 'Sankalp Indish',
    role: 'Chairperson',
    category: 'executive',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCFet6sq6ojsyKjzuHU_LJuVxiPT5MbyNszKNAtAN8C7QZhopmaiu59j0M2UEigDUxVIfM_C4DhqSV5cz8wi0VXp5p3krIZ6hjfi-d9YOel7i8g7eVbYXZ93eHOS_wp707IH99PYZApknz1fZAaVg1kHeThp3Yqo4GOttq8HgT_Le_QdvfXK13owm15DTedZKnxZ7UKLzYsh8E-SoUoMG8CMxX9aDc40qQfQMBxVqjkj7VTpvCzmLGm2r0wv7dZEeMcDsNE9E8TzA0',
    borderColor: 'secondary',
    animationDelay: '0.5s',
    email: 'sankalp.indish@mmit.ieee.org',
    linkedin: 'https://linkedin.com',
    github: 'https://github.com',
    bio: 'Leading the IEEE Student Branch vision, overseeing strategic operations, technical initiatives, and university partnerships.',
    department: 'Artificial Intelligence & Data Science',
    achievements: ['National Hackathon Finalist', 'Published IEEE Conference Paper', 'Led 15+ Technical Workshops']
  },
  {
    id: 'soham-shinde',
    name: 'Soham Shinde',
    role: 'Vice Chair',
    category: 'executive',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA16SbLb-YZeklLzbnsqNXZ6WmIHsgup-f3r3z0XCw9j2P9p7YYRNZ7_yq1vhtk2TCpGr4DACs2JNmG7jCrPP3GZcM97t7NtucbkN60LHJWUS5aGXwy2rvG6E1H9sWB9nS_t2OkAWpzRTr4YxThOIf7FGXm_DbRgWPluXQQwdQQxCA-PTZiANb7G8XAG6ES3hCyUGXlQrvN4sC2gCfFDlWvufKPJ4XZjIOlvWJwWKf6axrIBOqkXn7bmA8GLs_eOu5q8meRCe66JQ4',
    borderColor: 'primary',
    animationDelay: '1s',
    email: 'soham.shinde@mmit.ieee.org',
    linkedin: 'https://linkedin.com',
    github: 'https://github.com',
    bio: 'Managing branch logistics, inter-departmental operations, and co-directing research and hardware labs.',
    department: 'Robotics & Automation',
    achievements: ['Robocon Team Captain', 'Embedded Hardware Specialist', 'IEEE Region 10 Student Delegate']
  },
  {
    id: 'maithilee-kedare',
    name: 'Maithilee Kedare',
    role: 'Secretary',
    category: 'executive',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAF34xPezPDiI9oegXkrH22AbBxKGg96W_ebtxw6kA66K6hD08kNirRUGReIUDeyqqUbQuVgSp4kywrQXB_a0V4EL98kRp6biJmdB1vPhjYm4klCl4wv7u8UNrs8jH5jzzRh6MNWKQxFZc68yJtLzPWPl15lifW1uhyvN--toKRlzq76wAc2yyWEe9QqdYye1r39c6Ie2oYut6qus8dD1FxNLa_kdJY9JxC2oV4jERI63yE3KRVCnHvyLMRI9C0Y49od2sTxZYplUE',
    borderColor: 'secondary',
    animationDelay: '1.5s',
    email: 'maithilee.kedare@mmit.ieee.org',
    linkedin: 'https://linkedin.com',
    bio: 'Overseeing official IEEE branch documentation, communications, compliance, and event record management.',
    department: 'Computer Engineering',
    achievements: ['Best Paper Presenter', 'IEEE WIE Lead Coordinator', 'Organized National PRAXIS Summit']
  },
  {
    id: 'tanmayi-gadge',
    name: 'Tanmayi Gadge',
    role: 'Webmaster',
    category: 'leads',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBrBhB9NnEgJ9iS4m54Um1hajcVRafP57aTyDt7HdWCknaQcLM3UbVX9D4R_oK3SfPBmhHixm9dXdHFmYA68H0n-Qq4bDUuwxCbWkh4wcvCB9DXDrrt3aGk7DtMfokeObCkDta8_YXRrNMZGkfrxrqYS4JOP8hXhv_OWEN-TU1eH-pJy6hMUjXBpZHMqdvg6cMbM-osUYBR7GOut31RifdsfcRhl8Fhc2KWuPJ7_NuWdh-mFO6JZDHNXpTxPVhyWKpS4jKH7TsbHxU',
    borderColor: 'primary',
    animationDelay: '0.2s',
    email: 'tanmayi.gadge@mmit.ieee.org',
    linkedin: 'https://linkedin.com',
    github: 'https://github.com',
    bio: 'Architect of the MMIT IEEE Engineering OS, digital platforms, cloud infrastructure, and interactive web interfaces.',
    department: 'Information Technology',
    achievements: ['Full Stack Architect', 'UI/UX Design Award Winner', 'Cloud Infrastructure Contributor']
  },
  {
    id: 'gargi-shinde',
    name: 'Gargi Shinde',
    role: 'Membership Chair',
    category: 'leads',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB7K6L-S-WJ2qbFyJeAlTvxZSb_WZ2ZIX14kw4RlgeWB9J5zTmvDADYIKwSDjIyql_jOuvPv_exV4CNKWmqLUj3X2NsPcHGQJj4idxuDkYJ-TOC0Jguajutuv3IDYGDEKBU9lRfzXsNlgYUhKZaupxi6zlDPVFevNRfVgofwSqS-N6_OJ8SD-pv52P3oyachXllr8z0LpuO3I4C84fvh44PVC3O88l2rCjeFCeP2PYV5zB_UXrwpjDFKnwm07GZioK3izxIWNohI5g',
    borderColor: 'secondary',
    animationDelay: '0.7s',
    email: 'gargi.shinde@mmit.ieee.org',
    linkedin: 'https://linkedin.com',
    bio: 'Driving student engagement, membership onboarding, IEEE benefits orientation, and community growth.',
    department: 'Electronics & Telecommunication',
    achievements: ['Achieved 40% Membership Growth', 'Community Building Champion', 'Student Network Director']
  },
  {
    id: 'satyam-patil',
    name: 'Satyam Patil',
    role: 'Treasurer',
    category: 'leads',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCZYJZjvNYDg5FWXPY8fcSwLRVDvccW_Im5FnYrqVhuaAsLUFkuj-8HBagk-EcZdsX2OZ57LJQrjEZ1kuQASzwrjYfaU56xr5aYUc5ZzBvmioPNteH2fHChddwTuPVETFDlja8j3rQdsT6rht_5GiMRdqCZ1DZjUeO0G-iK5klxn0AM-EWp0cx5_-KvXMAN_A7VB1gRN3ARE0ohHg6TBICMrx9fqcW0eXNjdoSUCwqprS9GWY87xt4THkrkK2Trf6vdefmy-_0M-48',
    borderColor: 'primary',
    animationDelay: '1.2s',
    email: 'satyam.patil@mmit.ieee.org',
    linkedin: 'https://linkedin.com',
    bio: 'Managing branch finances, event budgeting, IEEE funding grants, and corporate sponsorship pipelines.',
    department: 'Computer Engineering',
    achievements: ['Managed $15k+ Branch Grant Budget', 'Corporate Sponsorship Lead', 'Fintech Innovator']
  },
  {
    id: 'geet-jamdal',
    name: 'Geet Jamdal',
    role: 'Event Head',
    category: 'leads',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA6C-cITAmqs3cgxIkc_Ym4JZLOP5W5aiVvMRtN52z8kgn5k02f0GL786fNWpVw7DnO4q7pWmR2Bzb91bsGB9_ZI9rzXmoZBWu7p2kn-Zoj9owhGDAUN7TQW9q7aYibRY6jxHHgL_FqwSWtF29bDeY1XvOiWea7t_z5_8vtczGqR98e1iTTzPl6lUWHqF4o1EsFJOq1PR2uFoaGSZGrSE8xzKlMCKjLcY-m8GX-F5UpryCsE2Put7puiWAOeM-kfAJWIv_BVVQiwtI',
    borderColor: 'secondary',
    animationDelay: '1.7s',
    email: 'geet.jamdal@mmit.ieee.org',
    linkedin: 'https://linkedin.com',
    bio: 'Directing technical summits, hackathons, guest lectures, industrial visits, and hands-on hardware workshops.',
    department: 'Mechanical & Automation',
    achievements: ['Lead Organizer for PRAXIS 2026', '500+ Event Attendee Coordinator', 'Event Excellence Award']
  }
];

export const EVENTS_ORBIT: EventItem[] = [
  {
    id: 'param-supercomputing',
    title: 'Industrial Visit: PARAM Supercomputing',
    date: '2026-05-08',
    formattedDate: 'MAY 08, 2026',
    category: 'Industrial Visit',
    description: 'Deep dive into India\'s fastest computing cluster and its architecture.',
    fullDescription: 'Join MMIT IEEE for an exclusive technical delegation visit to the PARAM Supercomputing facility. Gain direct access to high-performance computing clusters, liquid cooling systems, petascale architecture, and real-time parallel computing pipelines.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBlTWP8jt2CAdRzmrzb_PBBZ6WK8Lh-opiaMrTDE1M7YPzXmiCbnXFQ1adXmV7M3nr1KM08EXmCgWsmX0oXv7u-M6yt5gj0l7oNzx5KUPeNla7Q-u1orN9hokEqQZuXgPsvKqT4aIubKkqvrvxV2XBs3QdXsy-NjTuuxyKR-x33hTbFTQ4Tt4JQeNS-tNQmNMRrdfvgSbuayzDoN7123m0RmUNlH3K4bs5OMMjOzmRUY6nNSpJotwFgYjAW5nAQsH8U3wsI2z9EuRM',
    location: 'C-DAC PARAM Supercomputing Hub, Pune',
    speaker: 'Dr. V. Bhatkar & Senior HPC Research Engineers',
    capacity: 60,
    registeredCount: 48,
    agenda: [
      '09:00 AM - Security clearance & Briefing',
      '10:30 AM - Supercomputer Architecture Lecture',
      '01:00 PM - HPC Server Room Guided Tour',
      '03:00 PM - Q&A with Lead Systems Scientists'
    ]
  },
  {
    id: 'ai-agents-workshop',
    title: 'Building AI Agents Workshop',
    date: '2026-04-30',
    formattedDate: 'APRIL 30, 2026',
    category: 'Workshop',
    description: 'A hands-on session on autonomous LLM agent frameworks and deployment.',
    fullDescription: 'Master the next generation of artificial intelligence by constructing custom multi-agent workflows, autonomous tool-calling agents, and real-time LLM reasoning engines using Gemini API and TypeScript.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD4mzTJAf9_JznwGoXNcTOMKCnWub3rF86ru_PBvvG8kQHmFubuKXgSwILo7-edsGWY0XjV6Cg5mbVJ-l9dYANBPsafeBUZpA1Cf8WdkxZANRb-g67-k0DRc5WhAJIR7-kA2Wzscy2qff2vNydGQNsERebat2qcmG9q3iAi-arP-fAMrOZ8TwDnHPr330oDQL8UTg7U7os3P9i0kXYBT3Ztt6LPqH_P-nUesNR4-LyUPNFGYRxHWQ4xqQu4kM87jeQSKxWkVZ6MHYw',
    location: 'MMIT Advanced AI Laboratory & Online Stream',
    speaker: 'Sankalp Indish & IEEE AI Research Group',
    capacity: 120,
    registeredCount: 112,
    agenda: [
      '02:00 PM - Agentic Architecture Core Concepts',
      '03:00 PM - Hands-on Code: Gemini Tool Calling',
      '04:30 PM - Deploying Serverless Agent Endpoints',
      '05:30 PM - Project Showcase & Certificates'
    ]
  },
  {
    id: 'praxis-program',
    title: 'PRAXIS Program 2026',
    date: '2026-03-27',
    formattedDate: 'MARCH 27, 2026',
    category: 'Flagship',
    description: 'Annual flagship event showcasing student innovation and leadership skills.',
    fullDescription: 'PRAXIS is MMIT IEEE\'s premier annual innovation symposium. Featuring project exhibitions, keynote sessions from global IEEE leaders, research paper tracks, and industry networking hubs.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCLubDD8VL_8LisXVsV7Gk9YL6YuoFCtOInYlqvN3r2JmSkFM4lBbxL8RlB0_TbbOMZoX1w5RnyOZ-p2xwmJnEV6ndEmiLtKWGpQCT3cRS0qi65JKtLk2Rn40v-ow6wq2NTxK-8Z2GbS3sdfVYJHw4Vpm-TkoTgT0P0E7VxF5fZkDvXRdwR3W1uv72FWpUeVXfTrhLt4n-kXywcUk3nMJSWDl7jhY476hjr9a3Exe5DTHNwcZ7dpWy8UJP3Ot5JW8sSW7kSJQUafRk',
    location: 'MMIT Grand Auditorium & Tech Pavilion',
    speaker: 'IEEE Region 10 Executives & Tech Founders',
    capacity: 500,
    registeredCount: 430,
    agenda: [
      '09:30 AM - Inauguration & Keynote Address',
      '11:00 AM - Student Project Expo & Judging',
      '02:00 PM - Research Paper Presentation Track',
      '04:30 PM - Awards Ceremony & Closing Protocol'
    ]
  },
  {
    id: 'innovation-sprint',
    title: 'Innovation Sprint Hackathon',
    date: '2026-02-15',
    formattedDate: 'FEB 15, 2026',
    category: 'Hackathon',
    description: '48-hour challenge to build hardware solutions for sustainable cities.',
    fullDescription: 'An intense 48-hour hardware and software sprint focusing on IoT smart cities, renewable energy management, autonomous logistics, and assistive technologies.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDpZDpHJIeTuUR6gYNfizN7_6kZ-aR5vgUEqXcKqt-dCE9Y5flkFbclHT7o2BwYaxsQ4IZfJYGOy89PD452T1ka8EhiMjew-K9yJof2jOl5kY8KHlDp2fdPD_a-i2Ja4Cykct6Sb8NR2q5T9q_daoDz_PVM34RqmN8srIUvk1rNa884f0-BUb1J0JTDCrQNWA0SsiB6i9GdDpPv51jt1dceF023vElfG5JZalbfRZ-xL7HcFBlOgvS8T-D6hPmcQYWWbn1DuVO7AmI',
    location: 'MMIT Innovation Incubator & Hardware Arena',
    speaker: 'Industry Mentors from Google, Texas Instruments, Intel',
    capacity: 200,
    registeredCount: 200,
    agenda: [
      'Day 1 - 06:00 PM: Hackathon Kickoff & Problem Statements',
      'Day 2 - All Day: Hacking, Mentorship & Prototype Printing',
      'Day 3 - 03:00 PM: Pitching to Investor Panel'
    ]
  },
  {
    id: 'hardware-lab-101',
    title: 'Hardware Lab 101: Embedded Systems',
    date: '2026-01-10',
    formattedDate: 'JAN 10, 2026',
    category: 'Lab',
    description: 'Fundamental workshop on PCB design and embedded system prototyping.',
    fullDescription: 'Learn surface-mount soldering, KiCAD PCB routing, micro-controller firmware in Rust/C++, and logic analyzer diagnostics in a hands-on laboratory environment.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBdOfj-a2-WT07Pv5RP6NIzcKWKeY5LiFv84H5PHEu76h4O8xleBiCozxJdyJ3X-qYbaU70KUw4fwqpldZQn6HUen_3T25pKiCAM4tSckXLAFWMG7Gy5U9D8CVab4spOCROidbI1aS17pZfI0_-ciBq5Jx2Nt2yKvpoZs7O5F1glB1uC3_vPY4437Hcvm3QeFgmigAArjaTvvt4kbUzHtXM6UtWAhNFIqlzK1R19-CrUYjVq-EIJx4mVz2UkMnKvYgLq5t5_2PI_Ls',
    location: 'MMIT Hardware & Circuit Prototyping Lab',
    speaker: 'Soham Shinde & Hardware Engineers',
    capacity: 50,
    registeredCount: 50,
    agenda: [
      '10:00 AM - Schematic Design in KiCad',
      '11:30 AM - PCB Trace Routing & DRC',
      '02:00 PM - Reflow Soldering & Oscilloscope Testing'
    ]
  }
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'param-analytics',
    title: 'PARAM Cluster Telemetry Matrix',
    subtitle: 'Real-time HPC Cluster Health & Energy Profiler',
    category: 'Cloud & HPC',
    status: 'Deployed',
    description: 'An open-source node monitoring platform for supercomputing clusters, measuring thermal dynamics, GPU memory throughput, and power efficiency.',
    stars: 184,
    techStack: ['TypeScript', 'Express', 'D3.js', 'WebGL', 'Docker'],
    lead: 'Tanmayi Gadge',
    githubUrl: 'https://github.com/mmit-ieee/param-telemetry',
    demoUrl: 'https://param.mmit.ieee.org'
  },
  {
    id: 'swarm-robotics',
    title: 'Autonomous Drone Swarm Network',
    subtitle: 'Decentralized Mesh Routing for Search & Rescue',
    category: 'IoT & Embedded',
    status: 'In Development',
    description: 'Ad-hoc wireless mesh communication protocol allowing autonomous aerial drones to map disaster zones without reliance on cellular towers.',
    stars: 142,
    techStack: ['C++', 'Rust', 'ESP32-S3', 'LoRaWAN', 'ROS2'],
    lead: 'Soham Shinde',
    githubUrl: 'https://github.com/mmit-ieee/swarm-mesh'
  },
  {
    id: 'mmit-engineering-os',
    title: 'MMIT IEEE Engineering OS',
    subtitle: 'Next-Gen Student Branch Digital Operating System',
    category: 'Web & OS',
    status: 'Deployed',
    description: 'The central digital hub for MMIT IEEE, featuring interactive 3D event orbits, real-time command line terminal, and member networking.',
    stars: 256,
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Three.js', 'Framer Motion'],
    lead: 'Tanmayi Gadge',
    githubUrl: 'https://github.com/mmit-ieee/mmit-ieee-os',
    demoUrl: 'https://os.mmit.ieee.org'
  },
  {
    id: 'edge-vision-ai',
    title: 'Neural Vision Edge Processor',
    subtitle: 'Ultra-low Latency Traffic & Industrial Vision',
    category: 'AI / ML',
    status: 'Prototype',
    description: 'Compact YOLOv10 object recognition system optimized for microcontrollers and edge hardware to analyze traffic flow and manufacturing defects.',
    stars: 98,
    techStack: ['Python', 'TensorFlow Lite', 'OpenCV', 'Raspberry Pi 5'],
    lead: 'Sankalp Indish',
    githubUrl: 'https://github.com/mmit-ieee/edge-vision-ai'
  }
];

export const SYSTEM_METRICS: SystemMetrics = {
  uptime: 99.98,
  latencyMs: 14,
  activeNodes: 128,
  memoryUsageGB: 4.2,
  cpuUsagePercent: 12.4,
  buildVersion: 'v1.0.4-release',
  region: 'REGION 10',
  branchCode: 'STB60226400',
  schoolCode: '60227769'
};
