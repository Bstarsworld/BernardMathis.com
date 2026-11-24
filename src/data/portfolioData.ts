import { WorkItem, ProductionStill, ExperienceItem, SoftwareTool, BuiltTool, CameraGear, AudioGear, ServiceCapability } from '../types';

export const PERSONAL_INFO = {
  name: "Bernard Mathis",
  nameTitle: "Bernard Mathis",
  alias: "Bstar",
  trademarkNote: "BSTAR® (Reg. No. 6826240, Class 009)",
  company: "Intrepid Media Giant, LLC",
  brand: "Intrepid Cloud",
  headline: "Filmmaker, Editor & Recording Artist",
  location: "Los Angeles Area, CA",
  domains: {
    cloud: "https://intrepidcloud.net",
    videoDelivery: "https://videos.intrepidcloud.net",
    course: "https://course.intrepidcloud.net",
  },
  socials: {
    linkedin: "https://www.linkedin.com/in/bstarsworld/",
    imdb: "https://www.imdb.com/name/nm13919806/",
    instagram: "https://www.instagram.com/bstarsworld",
  },
  heroImage: "https://assets.zyrosite.com/BOJNKSHI76bv9ceB/img_4249-XxR1T3dNtGWam1Pz.jpg",
  email: "bstarmathis4@gmail.com",
  phone: "+1-352-434-2445",

  // Confirmed bio in plain, confident, first-person voice:
  bio: "I am a filmmaker, video editor, and recording artist (singer/songwriter/rapper) based in the Los Angeles area. I run Intrepid Media Giant, LLC and the brand Intrepid Cloud. My work spans music videos, podcasts, explainer videos, motivational talking-head content, a kids' science series, and a TV pilot in development. In post-production, DaVinci Resolve Studio is my main tool, alongside custom plugins and workflow utilities I build myself.",
  
  bioParagraphs: [
    "I am a filmmaker, video editor, and recording artist (singer/songwriter/rapper) based in the Los Angeles area. I operate through Intrepid Media Giant, LLC and Intrepid Cloud.",
    "My production work spans music videos, podcasts, explainer videos, motivational talking-head content, a kids' science series, and a TV pilot in development.",
    "My primary camera is the Panasonic Lumix GH6, shooting V-Log 4K 10-bit internal and ProRes RAW for commercial and wedding work. In post-production, DaVinci Resolve Studio is my main editing and color grading platform, supported by custom plugins, false-color exposure LUTs, and automation tools I build myself."
  ],

  // 2-sentence verified description for Intrepid Cloud:
  cloudSummary: "Self-hosted media infrastructure I run: private storage, client delivery at videos.intrepidcloud.net, and an AI filmmaking course at course.intrepidcloud.net.",

  musicRelease: {
    title: "The Body",
    artist: "Bstar",
    distributor: "CmdShft",
    note: "Latest release by Bstar, distributed through CmdShft. Recorded with vocal chain at Pirate Rehearsal Studios in Silver Lake."
  }
};

// Verified Custom Tools Built
export const BUILT_TOOLS: BuiltTool[] = [
  {
    id: 'lenslook',
    name: 'LensLook',
    type: 'DaVinci Resolve Plugin',
    description: 'Original lens-character plugin for DaVinci Resolve simulating vintage optical attributes.',
    specs: ['Halation & Bloom', 'Optical Glare & Vignette', 'Chromatic Aberration', '8 Built-in Presets'],
    badge: 'Resolve Plugin'
  },
  {
    id: 'fc-gh6',
    name: 'FC_GH6',
    type: 'Exposure Calibration LUT',
    description: 'False-color LUT for the Panasonic Lumix GH6, mathematically verified against Panasonic\'s GH6 manual.',
    specs: ['18% Middle Gray = 42 IRE', '90% White = 61 IRE', 'Sensor-calibrated V-Log mapping'],
    badge: 'Exposure LUT'
  },
  {
    id: 'safezonespro',
    name: 'SafeZonesPro',
    type: 'Framing Overlay Utility',
    description: 'Accurate safe-zone overlay templates for social video production.',
    specs: ['TikTok Safe Framing', 'Instagram Reels', 'YouTube Shorts', 'LinkedIn Video'],
    badge: 'Social Video Tool'
  },
  {
    id: 'autopod-pro',
    name: 'AutoPod Pro',
    type: 'DaVinci Resolve Tool',
    description: 'Free multicam podcast auto-editor built for DaVinci Resolve to speed up conversational cuts.',
    specs: ['Multicam Switching Automation', 'Speech-Activity Detection', 'Resolve Timeline Integration'],
    badge: 'Editorial Automation'
  },
  {
    id: 'timeshiftpro',
    name: 'TimeshiftPro',
    type: 'Look Effect',
    description: 'Shutter-desync look effect plugin for stylized motion cadence.',
    specs: ['Shutter Desynchronization', 'Stylized Motion Blur', 'Temporal Offset Control'],
    badge: 'Motion Effect'
  },
  {
    id: 'vega',
    name: 'Vega',
    type: 'AI Editing Assistant',
    description: 'Local AI video-editing assistant designed to operate inside DaVinci Resolve workflows.',
    specs: ['Local Execution', 'Resolve Workflow Companion', 'Private & Offline-Ready'],
    badge: 'Local AI'
  },
  {
    id: 'auto-captioning',
    name: 'Vertical Auto-Caption Pipeline',
    type: 'Workflow Pipeline',
    description: 'Automated captioning pipeline specifically engineered for rapid vertical short-form delivery.',
    specs: ['High-accuracy Speech-to-Text', '9:16 Kinetic Subtitles', 'Automated Rendering'],
    badge: 'Pipeline'
  },
  {
    id: 'interchange',
    name: 'INTERCHANGE',
    type: 'Browser-based Converter',
    description: 'Browser-based DAW session converter for translating session data across digital audio workstations.',
    specs: ['Browser Execution', 'DAW Session Translation', 'Clean Data Mapping'],
    badge: 'Audio Utility'
  }
];

// Verified Camera Systems
export const CAMERA_GEAR: CameraGear[] = [
  {
    name: 'Panasonic Lumix GH6',
    role: 'Primary Camera (Owned)',
    specs: 'V-Log 4K 10-bit internal capture. Apple ProRes RAW via external recorder for commercial and wedding work.',
    useCase: 'Primary A-camera for narrative work, music videos, interviews, and client deliverables.',
    format: 'V-Log 4K 10-bit / ProRes RAW'
  },
  {
    name: 'DJI Spark',
    role: 'Aerial Drone (Owned)',
    specs: 'Compact aerial system for dynamic establishing angles and outdoor aerial shots.',
    useCase: 'Aerial footage and outdoor location cinematography.',
    format: 'Stabilized Aerial'
  },
  {
    name: 'DJI Osmo Pocket (1st gen)',
    role: 'Micro-Gimbal Camera (Owned)',
    specs: '3-axis stabilized compact camera for agile, low-profile handheld tracking.',
    useCase: 'Agile handheld movement and tight-space camera maneuvers.',
    format: '3-Axis Gimbal 4K'
  }
];

// Verified Audio Chain
export const AUDIO_GEAR: AudioGear[] = [
  {
    name: 'Neumann TLM 102',
    role: 'Vocal Microphone',
    specs: 'Large-diaphragm cardioid condenser microphone.',
    useCase: 'Lead vocal tracking, songwriting sessions, and voice recordings.',
    chainOrder: '1. Microphone'
  },
  {
    name: 'Golden Age PRE-73 Jr',
    role: 'Analog Preamplifier',
    specs: 'Discrete vintage-style microphone preamplifier.',
    useCase: 'Warmth and analog saturation on vocal captures.',
    chainOrder: '2. Preamp'
  },
  {
    name: 'Focusrite Clarett 4Pre',
    role: 'Audio Interface & AD/DA Converter',
    specs: 'High-headroom audio interface with clean digital conversion.',
    useCase: 'Vocal and session tracking into DAW.',
    chainOrder: '3. Conversion'
  },
  {
    name: 'TDR Nova',
    role: 'Dynamic EQ Polish',
    specs: 'Parallel dynamic equalization and frequency control.',
    useCase: 'De-essing, tonal balance, and master vocal finish.',
    chainOrder: '4. Dynamic EQ'
  }
];

// Verified Capabilities / Services
export const SERVICES: ServiceCapability[] = [
  {
    id: 'camera-cinematography',
    title: 'Camera Systems & Cinematography',
    headline: 'Panasonic Lumix GH6 V-Log & ProRes RAW Production',
    description: 'Shooting primarily on the Panasonic Lumix GH6 in 4K 10-bit V-Log, with Apple ProRes RAW deployed for commercial and wedding work. Also operating DJI Spark for aerial shots and DJI Osmo Pocket (1st gen) for agile gimbal moves.',
    bullets: [
      'Panasonic Lumix GH6: 4K 10-bit V-Log internal capture',
      'Apple ProRes RAW workflow for commercial and wedding productions',
      'DJI Spark aerial drone cinematography',
      'DJI Osmo Pocket (1st gen) 3-axis agile tracking shots',
      'Mathematically verified exposure monitoring with FC_GH6 (18% gray at 42 IRE, 90% white at 61 IRE)'
    ],
    keySpecs: ['Panasonic GH6 V-Log 4K 10-bit', 'ProRes RAW', 'DJI Spark', 'DJI Osmo Pocket'],
    badge: 'Camera Systems'
  },
  {
    id: 'post-production-color',
    title: 'Editing & Color in DaVinci Resolve',
    headline: 'DaVinci Resolve Studio Post-Production Pipeline',
    description: 'DaVinci Resolve Studio is my main editing and color grading platform. Workflows are built around standardized export presets, including H.265 social deliverables and ProRes 422 HQ client masters.',
    bullets: [
      'Primary NLE and grading suite: DaVinci Resolve Studio',
      'Standardized deliverables: ProRes 422 HQ client masters and H.265 social deliverables',
      'Clean color pipelines with sensor-verified exposure mapping',
      'Original DaVinci Resolve plugins built in-house, including LensLook and AutoPod Pro',
      'Photo and still graphic editing in Affinity Photo'
    ],
    keySpecs: ['DaVinci Resolve Studio', 'ProRes 422 HQ Client Master', 'H.265 Social Presets', 'Affinity Photo'],
    badge: 'Editorial & Color'
  },
  {
    id: 'audio-music-production',
    title: 'Music Recording & Vocal Engineering',
    headline: 'Artist & Audio Production Chain',
    description: 'Recording artist (singer/songwriter/rapper) tracking at Pirate Rehearsal Studios in Silver Lake. Dedicated vocal chain combining discrete analog preamplification with precision digital processing.',
    bullets: [
      'Recording artist performing and writing under the name Bstar',
      'Hardware chain: Neumann TLM 102 → Golden Age PRE-73 Jr → Focusrite Clarett 4Pre',
      'In-the-box processing: TDR Nova dynamic EQ and iZotope restoration & polish',
      'Recording location: Pirate Rehearsal Studios in Silver Lake, Los Angeles',
      'DAWs owned and used: Pro Tools and Studio One',
      'Latest release: "The Body" by Bstar, distributed through CmdShft'
    ],
    keySpecs: ['Neumann TLM 102', 'Golden Age PRE-73 Jr', 'Pro Tools & Studio One', 'iZotope Suite'],
    badge: 'Audio & Music'
  },
  {
    id: 'custom-tools-pipelines',
    title: 'Custom Tools & Post-Production Utilities',
    headline: 'In-House Software, LUTs & Workflow Automation',
    description: 'I design and build custom tools for DaVinci Resolve, social media safe-zone alignment, and DAW session management to streamline production and eliminate repetitive manual tasks.',
    bullets: [
      'LensLook: Original DaVinci Resolve optical character plugin (halation, bloom, glare, vignette, chromatic aberration, 8 presets)',
      'FC_GH6: False-color LUT verified against the Panasonic GH6 manual (18% gray = 42 IRE, 90% white = 61 IRE)',
      'SafeZonesPro: Aspect ratio and UI overlay guide for TikTok, Instagram Reels, YouTube Shorts, and LinkedIn',
      'AutoPod Pro: Free multicam podcast auto-editor for DaVinci Resolve',
      'Vega: Local AI video-editing assistant for DaVinci Resolve',
      'INTERCHANGE: Browser-based DAW session file converter, plus automated vertical video captioning pipeline'
    ],
    keySpecs: ['LensLook Plugin', 'FC_GH6 LUT', 'AutoPod Pro', 'SafeZonesPro'],
    badge: 'Custom Tools'
  }
];

// Verified Work Items and Grid
export const WORK_ITEMS: WorkItem[] = [
  // 1. The Sour Truth (Verified Original Project)
  {
    id: 'sour-truth-podcast',
    title: 'The Sour Truth — Independent Music Artist Interview Podcast',
    category: 'podcasts-series',
    categoryLabel: 'Podcast Series',
    description: 'An interview podcast where I interview independent music artists and push for honest, sometimes uncomfortable answers.',
    detailedNote: 'Hosted and produced by Bstar. Cut in DaVinci Resolve Studio.',
    videoId: 'cwJEbC3WOhI',
    videoType: 'regular',
    tags: ['Podcast', 'Interviews', 'Music Business'],
    software: ['Panasonic GH6', 'DaVinci Resolve Studio'],
    thumbnailUrl: 'https://i.ytimg.com/vi/cwJEbC3WOhI/hqdefault.jpg',
    featured: true
  },
  // 2. Science with Violet (Verified Original Project)
  {
    id: 'science-with-violet',
    title: 'Science with Violet (Kids\' Science Series)',
    category: 'podcasts-series',
    categoryLabel: 'Kids Science Series',
    description: 'Kids\' science series featuring my daughter Violet, exploring hands-on science concepts and real-world experiments.',
    detailedNote: 'Created, filmed, and produced by Bernard Mathis.',
    videoId: '26jqBzR2NXs',
    videoType: 'regular',
    tags: ['Kids Science', 'Original Series', 'Family', 'Education'],
    software: ['Panasonic GH6', 'DaVinci Resolve Studio'],
    thumbnailUrl: 'https://i.ytimg.com/vi/26jqBzR2NXs/hqdefault.jpg',
    featured: true
  },
  // 3. "How To Survive in LA" TV Pilot (Verified Original Project)
  {
    id: 'how-to-survive-in-la',
    title: '"How To Survive in LA" (TV Pilot in Development)',
    category: 'podcasts-series',
    categoryLabel: 'Narrative TV Pilot',
    description: 'An original television pilot currently in active development.',
    detailedNote: 'Original drama series project in development by Bernard Mathis (Bstar).',
    videoId: 'ZlmQNDF6uB4',
    videoType: 'regular',
    tags: ['TV Pilot', 'Narrative Drama', 'In Development'],
    software: ['Panasonic GH6', 'DaVinci Resolve Studio'],
    thumbnailUrl: 'https://i.ytimg.com/vi/ZlmQNDF6uB4/hqdefault.jpg',
    featured: true
  },
  // 4. The Presser's Rookie Class Cypher
  {
    id: 'pressers-cypher-2024',
    title: 'The Presser\'s Rookie Class Cypher',
    category: 'music-videos',
    categoryLabel: 'Music Video / Cypher',
    description: 'Cypher production featuring independent music artists, filmed with stylized lighting and multi-angle performance coverage.',
    videoId: 'lwpFjt9YLD8',
    videoType: 'regular',
    tags: ['Cypher', 'Music Video', 'Performance'],
    software: ['Panasonic GH6', 'DaVinci Resolve Studio'],
    thumbnailUrl: 'https://i.ytimg.com/vi/lwpFjt9YLD8/hqdefault.jpg',
    featured: true
  },
  // 5. Childish Music Video
  {
    id: 'childish-official-video',
    title: 'Childish — Music Video',
    category: 'music-videos',
    categoryLabel: 'Music Video',
    description: 'Music video production for Bstar x Hi_Fii, filmed on location and graded in DaVinci Resolve Studio.',
    videoId: 'kztjddN3YKk',
    videoType: 'regular',
    tags: ['Music Video', 'Hip Hop'],
    software: ['Panasonic GH6', 'DaVinci Resolve Studio'],
    thumbnailUrl: 'https://i.ytimg.com/vi/kztjddN3YKk/hqdefault.jpg'
  },
  // 6. TimothyMac "So Tired"
  {
    id: 'timothymac-so-tired',
    title: 'TimothyMac — "So Tired"',
    category: 'music-videos',
    categoryLabel: 'Music Video',
    description: 'Stylized performance music video visual with atmospheric color and dynamic cutting.',
    videoId: 'yodsLURSlMc',
    videoType: 'regular',
    tags: ['Music Video'],
    software: ['Panasonic GH6', 'DaVinci Resolve Studio'],
    thumbnailUrl: 'https://i.ytimg.com/vi/yodsLURSlMc/hqdefault.jpg'
  },
  // 7. Content 101 Ep.2 Greenscreen
  {
    id: 'content-101-greenscreen',
    title: 'Content 101: Ep.2 Greenscreen',
    category: 'explainers-shorts',
    categoryLabel: 'Explainer Video',
    description: 'Educational breakdown covering green screen lighting, key pulling techniques, and background integration.',
    videoId: '26jqBzR2NXs',
    videoType: 'regular',
    tags: ['Explainer', 'Greenscreen'],
    software: ['Panasonic GH6', 'DaVinci Resolve Studio'],
    thumbnailUrl: 'https://i.ytimg.com/vi/26jqBzR2NXs/hqdefault.jpg'
  },
  // 8. "Tiny Clone" Skit
  {
    id: 'tiny-clone-skit',
    title: '"Tiny Clone" Skit',
    category: 'explainers-shorts',
    categoryLabel: 'Skit / Compositing Demo',
    description: 'Comedic visual effects sketch demonstrating multi-pass compositing, rotoscoping, and audio timing in DaVinci Resolve.',
    videoId: 'rvtSQ1Iz4yo',
    videoType: 'regular',
    tags: ['Skit', 'Compositing'],
    software: ['DaVinci Resolve Studio'],
    thumbnailUrl: 'https://i.ytimg.com/vi/rvtSQ1Iz4yo/hqdefault.jpg'
  },
  // 9. Apple ProRes RAW Grading Demo
  {
    id: 'prores-raw-color-grade',
    title: 'Apple ProRes RAW Grading Demo',
    category: 'color-post',
    categoryLabel: 'Color Grading Demo',
    description: '12-bit Apple ProRes RAW color grading demonstration showcasing highlight roll-off and node-based tonal curves.',
    videoId: '2NrwKyWEUqs',
    videoType: 'regular',
    tags: ['ProRes RAW', 'Color Grading'],
    software: ['DaVinci Resolve Studio'],
    thumbnailUrl: 'https://i.ytimg.com/vi/2NrwKyWEUqs/hqdefault.jpg'
  },
  // 10. Live Pipeline Testing
  {
    id: 'camlink-ue55-virtual',
    title: 'Live Pipeline Testing',
    category: 'color-post',
    categoryLabel: 'Pipeline Testing',
    description: 'Real-time camera feed testing, HDMI capture latency checks, and color space transformations.',
    videoId: '0kc7KvvRXqU',
    videoType: 'regular',
    tags: ['Pipeline Testing', 'Monitoring'],
    software: ['DaVinci Resolve Studio'],
    thumbnailUrl: 'https://i.ytimg.com/vi/0kc7KvvRXqU/hqdefault.jpg'
  }
];

// Production Stills
export const PRODUCTION_STILLS: ProductionStill[] = [
  {
    id: 'still-rig-1',
    url: 'https://assets.zyrosite.com/BOJNKSHI76bv9ceB/img_2806-CxJno1QXCnJ2ZWvw.JPG',
    caption: 'Cinema rig: Panasonic Lumix GH6 caged with top handle, monitor mount, and wireless transmitter.',
  },
  {
    id: 'still-stage-setup',
    url: 'https://assets.zyrosite.com/BOJNKSHI76bv9ceB/img_0302-Mt5k1jglMmgXt1MR.jpg',
    caption: 'Production stage: Lighting grid, green screen cyc, and multicam monitoring station.',
  },
  {
    id: 'still-focus-monitor',
    url: 'https://assets.zyrosite.com/BOJNKSHI76bv9ceB/img_0321-1O9AWyBjLfQaClsN.jpg',
    caption: 'Field monitor running false-color exposure checks on set for middle-gray consistency.',
  },
  {
    id: 'still-stage-monitor',
    url: 'https://assets.zyrosite.com/BOJNKSHI76bv9ceB/img_0318-ruDiM4ZhsG9MgglC.jpg',
    caption: 'Live multitrack audio and camera feed monitoring.',
  },
];

// Experience / Background Items (Verified production backgrounds)
export const EXPERIENCE_ITEMS: ExperienceItem[] = [
  {
    id: 'intrepid-media-giant',
    title: 'Filmmaker, Editor & Recording Artist',
    facility: 'Intrepid Media Giant, LLC / Intrepid Cloud',
    period: '2020 — Present',
    category: 'Production & Enterprise',
    description: [
      'Operating as Intrepid Cloud through Intrepid Media Giant, LLC in the Los Angeles area.',
      'Self-hosted media infrastructure I run: private storage, client delivery at videos.intrepidcloud.net, and an AI filmmaking course at course.intrepidcloud.net.',
      'Active productions include music videos, podcasts, explainer videos, motivational talking-head content, a kids\' science series ("Science with Violet"), and a TV pilot in development ("How To Survive in LA").',
      'Recording artist releasing music as Bstar (latest release: "The Body", distributed through CmdShft).'
    ],
    tools: ['Panasonic Lumix GH6', 'DaVinci Resolve Studio', 'Pro Tools', 'Studio One', 'iZotope', 'Affinity Photo'],
    photoUrl: 'https://assets.zyrosite.com/BOJNKSHI76bv9ceB/img_4238-XaXqsh3AHYWRO2fL.jpg'
  },
  {
    id: 'bstar-music-audio',
    title: 'Recording Artist & Vocal Production',
    facility: 'Pirate Rehearsal Studios (Silver Lake)',
    period: 'Active',
    category: 'Music & Audio Production',
    description: [
      'Recording artist writing, performing, and tracking lead vocals and harmonies under the artist name Bstar.',
      'Hardware tracking chain utilizing the Neumann TLM 102 large-diaphragm condenser, discrete Golden Age PRE-73 Jr analog preamp, and Focusrite Clarett 4Pre audio interface.',
      'Vocal polishing and spectral processing handled in Pro Tools and Studio One with TDR Nova parallel dynamic EQ and iZotope restoration.',
      'Commercial distribution handled through CmdShft, including the latest single "The Body".'
    ],
    tools: ['Neumann TLM 102', 'Golden Age PRE-73 Jr', 'Focusrite Clarett 4Pre', 'Pro Tools', 'Studio One', 'TDR Nova'],
    photoUrl: 'https://assets.zyrosite.com/BOJNKSHI76bv9ceB/img_0318-ruDiM4ZhsG9MgglC.jpg'
  }
];

// Software Stack: Plain, unranked tool list with NO percentage bars
export const SOFTWARE_STACK: SoftwareTool[] = [
  { name: 'DaVinci Resolve Studio', category: 'Editing & Color', role: 'Main tool for editorial, color grading, and custom plugin development', status: 'confirmed' },
  { name: 'Pro Tools', category: 'Audio & Music', role: 'DAW for multitrack recording and vocal engineering', status: 'confirmed' },
  { name: 'Studio One', category: 'Audio & Music', role: 'DAW for music production, tracking, and mixing', status: 'confirmed' },
  { name: 'iZotope', category: 'Audio & Music', role: 'Audio restoration, vocal cleanup, and spectral processing', status: 'confirmed' },
  { name: 'Affinity Photo', category: 'Graphics & Post', role: 'Still image processing, graphic assets, and thumbnail creation', status: 'confirmed' },
  { name: 'Blackmagic ATEM Mini', category: 'Video Hardware', role: 'Owned video hardware unit (ATEM Mini, not Mini Pro), currently not in regular use', status: 'confirmed' },
];
