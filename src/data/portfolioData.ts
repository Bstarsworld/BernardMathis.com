import { WorkItem, ProductionStill, ExperienceItem, SoftwareTool, CustomSystemPlugin, CameraGear, AudioGear, ServiceCapability, CameraCertification } from '../types';

export const PERSONAL_INFO = {
  name: "Bernard Mathis",
  alias: "Bstar (Bernard Mathis)",
  brand: "Intrepid Cloud",
  company: "Intrepid Media Giant, LLC",
  founderTitle: "Founder of Intrepid Media Giant, LLC & The Intrepid Cloud",
  affiliation: "The Los Angeles Film School Alumnus (Film Science)",
  tagline: "Dynamic Tech Enthusiast & Creative Professional",
  role: "Technology & Media Production Professional",
  email: "bstarmathis4@gmail.com",
  phone: "+1-352-434-2445",
  location: "Los Angeles, CA",
  domains: {
    cloud: "https://intrepidcloud.net",
    course: "https://course.intrepidcloud.net",
  },
  socials: {
    linkedin: "https://www.linkedin.com/in/bstarsworld/",
    imdb: "https://www.imdb.com/name/nm13919806/",
    instagram: "https://www.instagram.com/bstarsworld",
  },
  heroImage: "https://assets.zyrosite.com/BOJNKSHI76bv9ceB/img_4249-XxR1T3dNtGWam1Pz.jpg",
  philosophy: "Equally comfortable in live AV environments, studio production, and post-production pipelines — bridging creative vision with reliable, technically sound execution.",
  bio: "I’m Bernard Mathis, a dynamic tech enthusiast and creative professional with a comprehensive skill set in technology and media production. I’m proficient in a wide array of software and tools, including Avid Media Composer, DaVinci Resolve, Premiere Pro, After Effects, Pro Tools, Studio One, Studio One Live, DCP-o-matic, Final Cut Pro, Blender, Unreal Engine, Aximmetry, and the Blackmagic ATEM system. I own and operate a Blackmagic ATEM Mini Pro for live podcast shooting and live chroma keying. Additionally, I’m trained on a 16-channel mixing board, enabling me to run entire live sound venues and perform live sound mixing during concerts. I’m also certified in multiple camera systems, including Blackmagic, Sony, Panasonic, ARRI, RED, Fuji, and Atomos. I’m proficient in handling and color grading raw files, such as Blackmagic RAW, LUMIX RAW, RED RAW, and more, and can set up professional color grading pipelines in DaVinci Resolve for any desired color space.",
  bioParagraphs: [
    "I’m Bernard Mathis, a dynamic tech enthusiast and creative professional with a comprehensive skill set in technology and media production. I’m proficient in a wide array of software and tools, including Avid Media Composer, DaVinci Resolve, Premiere Pro, After Effects, Pro Tools, Studio One, Studio One Live, DCP-o-matic, Final Cut Pro, Blender, Unreal Engine, Aximmetry, and the Blackmagic ATEM system.",
    "I own and operate a Blackmagic ATEM Mini Pro for live podcast shooting and live chroma keying. Additionally, I’m trained on a 16-channel mixing board, enabling me to run entire live sound venues and perform live sound mixing during concerts.",
    "I’m also certified in multiple camera systems, including Blackmagic, Sony, Panasonic, ARRI, RED, Fuji, and Atomos. I’m proficient in handling and color grading raw files, such as Blackmagic RAW, LUMIX RAW, RED RAW, and more, and can set up professional color grading pipelines in DaVinci Resolve for any desired color space.",
    "Together, these experiences have shaped me into a well-rounded technical professional—equally comfortable in live AV environments, studio production, and post-production pipelines—capable of bridging creative vision with reliable, technically sound execution."
  ],
  experienceMattersIntro: "My career has bridged rigorous studio education, live high-pressure nightclub audio and visual systems, virtual production environments, and independent media enterprise.",
  cameraCertifications: [
    "Blackmagic",
    "Sony",
    "Panasonic",
    "ARRI",
    "RED",
    "Fuji",
    "Atomos"
  ],
  rawFormats: [
    "Blackmagic RAW (BRAW)",
    "Panasonic / LUMIX RAW",
    "RED RAW (R3D)",
    "Sony RAW",
    "Apple ProRes RAW"
  ],
  colorSpaces: ["ACES (ACEScc / ACEScct)", "Rec.709", "Rec.2020 / HDR", "DaVinci Wide Gamut"],
  workflowNote: "I've built custom workflow automation tools (multicam podcast auto-editor and Resolve plugins) to streamline turnaround speed, always in service of delivering higher quality faster.",
  musicRelease: {
    title: "The Body",
    artist: "Bstar",
    distributor: "CmdShft",
    note: "Commercial music written, recorded, and mixed by Bstar, distributed via CmdShft."
  }
};

export const CAMERA_CERTIFICATIONS: CameraCertification[] = [
  {
    name: 'Blackmagic Cinema Systems',
    brand: 'Blackmagic Design',
    level: 'Certified Operator & Color Pipeline',
    rawFormats: ['Blackmagic RAW (BRAW) 12-bit', 'ProRes 422 HQ'],
    note: 'Certified across Blackmagic cinema cameras, ATEM live switchers, Ultimatte, and DaVinci Resolve integration.'
  },
  {
    name: 'Sony Cinema Line',
    brand: 'Sony',
    level: 'Certified Camera Operator',
    rawFormats: ['Sony RAW / X-OCN', 'S-Log3 / S-Gamut3.Cine'],
    note: 'High-speed cine operation, electronic variable ND handling, and dual native ISO calibration.'
  },
  {
    name: 'Panasonic Cinema & LUMIX',
    brand: 'Panasonic',
    level: 'Certified Cinema Operator',
    rawFormats: ['LUMIX RAW 12-bit', 'V-Log / V-Gamut', 'ProRes 422 HQ'],
    note: 'Primary personal kit: Panasonic GH6. High-frame-rate sync, anamorphic shooting, and HDMI ProRes RAW workflows.'
  },
  {
    name: 'ARRI Systems',
    brand: 'ARRI',
    level: 'Certified Camera Systems',
    rawFormats: ['ARRIRAW', 'LogC3 / LogC4', 'ProRes'],
    note: 'Industry-standard large-format cine exposure index, optical filtration, and high-dynamic-range latitude control.'
  },
  {
    name: 'RED Digital Cinema',
    brand: 'RED',
    level: 'Certified Operator & RAW Pipeline',
    rawFormats: ['RED RAW (R3D)', 'IPP2 Color Pipeline'],
    note: 'Compressed raw ratio optimization, IPP2 image processing, and precision highlight roll-off.'
  },
  {
    name: 'Fujifilm Cine Systems',
    brand: 'Fujifilm',
    level: 'Certified Systems',
    rawFormats: ['F-Log / F-Log2', '12-bit RAW via HDMI'],
    note: 'Dynamic range expansion, precision color science, and optical character.'
  },
  {
    name: 'Atomos Monitor/Recorders',
    brand: 'Atomos',
    level: 'Certified Monitoring & External RAW',
    rawFormats: ['ProRes RAW', 'CDNG', 'HDR Monitoring'],
    note: 'False color exposure calibration, waveform/vectorscope monitoring, and high-bitrate external RAW capture.'
  }
];

export const SERVICES: ServiceCapability[] = [
  {
    id: 'camera-raw-pipelines',
    title: 'Camera Systems & RAW Color Grading',
    headline: 'Certified Multi-Camera Systems & Precision DaVinci Resolve Color Pipelines',
    description: 'Certified across Blackmagic, Sony, Panasonic, ARRI, RED, Fuji, and Atomos camera systems. Proficient in handling and grading raw camera files—Blackmagic RAW, LUMIX RAW, RED RAW, and Sony RAW—and building color grading pipelines in DaVinci Resolve for any color space including ACES and Rec.709.',
    bullets: [
      'Certified across 7 camera systems: Blackmagic, Sony, Panasonic, ARRI, RED, Fuji, and Atomos',
      'Handling and grading RAW formats: Blackmagic RAW, LUMIX RAW, RED RAW, Sony RAW, and ProRes RAW',
      'Professional DaVinci Resolve color pipelines: Built for required industry standards including ACES and Rec.709',
      'Primary personal kit: Panasonic GH6 (V-Log 4K 10-bit internal, Apple ProRes RAW via HDMI)',
      'Aerial & mobile perspectives: DJI Spark drone aerials and DJI Osmo Pocket agile gimbal coverage',
      'Disciplined exposure monitoring: False color, waveform verification, and optical filter calibration'
    ],
    keySpecs: ['Blackmagic / RED / Sony / LUMIX RAW', 'ACES & Rec.709 Color Science', 'Panasonic GH6 V-Log', 'Atomos Monitoring'],
    badge: 'Camera Systems & RAW'
  },
  {
    id: 'virtual-production-studio',
    title: 'Virtual Production & Studio Operations',
    headline: 'Unreal Engine Real-Time In-Camera VFX, Blackmagic Ultimatte & Live Compositing',
    description: 'Hands-on virtual production experience from My Studio Montrose. Integrating real-time Unreal Engine 3D environments with green screen talent, Blackmagic Ultimatte hardware compositing, and Blackmagic DeckLink video pipelines for broadcast-ready results.',
    bullets: [
      'Real-time virtual production: Integrating Unreal Engine environments with green screen talent',
      'Hardware compositing: Blackmagic Ultimatte real-time keying and edge refinement',
      'Video I/O & capture: Blackmagic DeckLink hardware pipelines and VR system operation',
      'Live podcast shooting: Owned & operated Blackmagic ATEM Mini Pro for multi-camera live switching and real-time chroma keying',
      'Aximmetry virtual studio workflows and Blender 3D environment asset staging',
      'Complete studio pipeline from multi-camera capture through live broadcast delivery'
    ],
    keySpecs: ['Unreal Engine Virtual Production', 'Blackmagic Ultimatte', 'Blackmagic DeckLink & VR', 'ATEM Mini Pro Chroma Keying'],
    badge: 'Virtual Production & Studio'
  },
  {
    id: 'live-av-sound-mixing',
    title: 'Live AV & 16-Channel Sound Mixing',
    headline: 'Concert Sound Engineering, 16-Channel Board Operation & Live AV Systems',
    description: 'Trained on 16-channel mixing boards with real-world experience running entire live sound venues and mixing live concerts. Veteran of high-pressure nightclub AV environments, diagnosing and resolving complex audio and visual issues in real time.',
    bullets: [
      '16-channel mixing board mastery: Running entire live sound venues and mixing live concerts with clarity and punch',
      'Micing performers & instruments: Precision acoustic placement for vocals, drums, instruments, and stage monitors',
      'High-pressure nightclub AV: Real-world experience operating and troubleshooting live audio/visual infrastructure',
      'Live system reliability: Diagnosing and resolving equipment issues on the fly during active performances',
      'Studio podcast engineering: Operating Pro Tools in dedicated studio environments for broadcast-standard voice',
      'Studio One & Studio One Live: Multitrack concert recording, stage playback, and dynamic live mixing'
    ],
    keySpecs: ['16-Channel Mixing Board', 'Concert Sound & Instrument Micing', 'Nightclub AV Systems', 'Pro Tools & Studio One Live'],
    badge: 'Live AV & Sound'
  },
  {
    id: 'post-production-editorial',
    title: 'Post-Production & Editorial Mastery',
    headline: 'Avid Media Composer, DaVinci Resolve, Premiere Pro & DCP Theatrical Mastering',
    description: 'Comprehensive mastery across the industry’s leading NLEs and post-production software: Avid Media Composer, DaVinci Resolve, Adobe Premiere Pro, After Effects, Pro Tools, Final Cut Pro, and DCP-o-matic for theatrical mastering.',
    bullets: [
      'Multi-NLE fluency: Avid Media Composer, DaVinci Resolve Studio, Adobe Premiere Pro, and Final Cut Pro',
      'Theatrical mastering: DCP-o-matic for standard DCI theatrical cinema packaging and screenings',
      'Motion graphics & VFX: Adobe After Effects rotoscoping, compositing, and Blender 3D animation',
      'Sound design & multitrack post: Pro Tools and Studio One for broadcast vocal polish and master mixing',
      'Multi-platform deliverables: Master long-form cuts alongside high-retention 9:16 vertical edits for social channels',
      'Workflow acceleration: Custom-built multicam sync automation and aspect ratio framing tools'
    ],
    keySpecs: ['Avid Media Composer', 'DaVinci Resolve Studio', 'Adobe Premiere & After Effects', 'DCP-o-matic Theatrical'],
    badge: 'Post-Production & NLE'
  }
];

export const CAMERA_GEAR: CameraGear[] = [
  {
    name: 'Panasonic Lumix GH6',
    role: 'Primary Cinema & Commercial A-Camera',
    specs: 'V-Log 4K 10-bit 4:2:2 internal, 5.7K ProRes HQ, 12-bit Apple ProRes RAW via HDMI',
    useCase: 'Commercial shoots, narrative shorts, music videos, interviews, and premium talking-head content.',
    format: 'V-Log / Apple ProRes RAW'
  },
  {
    name: 'Blackmagic ATEM Mini Pro',
    role: 'Live Podcast Switcher & Real-Time Chroma Keying',
    specs: 'Owned & operated: 4x HDMI In, Hardware Chroma Keyer, Multi-View, Direct USB-C Broadcast',
    useCase: 'Live podcast production ("The Sour Truth"), real-time green screen switching, and multi-camera events.',
    format: '1080p60 Live Multicam'
  },
  {
    name: 'Blackmagic Ultimatte & DeckLink',
    role: 'Virtual Production Compositing & Studio I/O',
    specs: 'Hardware-accelerated 12G-SDI video capture/playback and real-time Ultimatte optical keying',
    useCase: 'My Studio Montrose virtual production, integrating real-time Unreal Engine 3D sets with talent.',
    format: 'Real-Time In-Camera VFX'
  },
  {
    name: 'DJI Spark & Osmo Pocket',
    role: 'Aerial Cinematography & Agile Handheld Movement',
    specs: 'Stabilized 2-axis aerial drone + 3-axis motorized micro-gimbal 4K camera',
    useCase: 'Establishing aerials, outdoor music videos, and agile, low-profile dynamic tracking shots.',
    format: 'Aerial & 4K Mobile'
  }
];

export const AUDIO_GEAR: AudioGear[] = [
  {
    name: '16-Channel Live Mixing Board',
    role: 'Live Venue Sound & Concert Mixing Console',
    specs: '16 analog/digital mic preamps, flexible aux sends, dynamic inserts, monitor bus routing',
    useCase: 'Running entire live sound venues, mixing live concerts, and balancing multitrack instrument feeds.',
    chainOrder: '1. Live Venue Console'
  },
  {
    name: 'Pro Tools Studio Podcast Station',
    role: 'Dedicated Studio Podcast & Dialogue Suite',
    specs: 'Industry-standard multitrack DAW, low-latency DSP tracking, broadcast loudness metering',
    useCase: 'Recording and engineering studio podcasts, vocal overdubs, and post-production dialogue cleanup.',
    chainOrder: '2. Studio DAW & Tracking'
  },
  {
    name: 'Neumann TLM 102 & Golden Age PRE-73 Jr',
    role: 'Discrete Analog Vocal Chain (Studio & Mobile Rigs)',
    specs: 'Large-diaphragm cardioid condenser + Class-A transformer-coupled discrete vintage preamp',
    useCase: 'Imparts warmth, weight, and pristine transient presence for music vocals and dialogue.',
    chainOrder: '3. Acoustic & Analog Preamp'
  },
  {
    name: 'Focusrite Clarett 4Pre & TDR Nova',
    role: 'High-Fidelity Conversion & Dynamic EQ Polish',
    specs: '192kHz/24-bit AD/DA conversion + precision parallel dynamic EQ and frequency de-essing',
    useCase: 'Eliminating sibilance, sculpting body, and mastering to broadcast and commercial streaming standards.',
    chainOrder: '4. Digital Conversion & Polish'
  }
];

export const WORK_ITEMS: WorkItem[] = [
  // PODCASTS & SERIES
  {
    id: 'sour-truth-podcast',
    title: 'The Sour Truth — Independent Music Artist Interview Podcast',
    category: 'podcasts-series',
    categoryLabel: 'Podcast Series',
    description: 'An interview podcast where Bstar sits down with independent music artists to unpack their creative process, business, and industry reality.',
    detailedNote: 'Multicam production switched live on Blackmagic ATEM Mini and edited with sharp conversational pacing in DaVinci Resolve.',
    videoId: 'cwJEbC3WOhI',
    videoType: 'regular',
    tags: ['Podcast', 'Multicam', 'Interviews', 'ATEM Mini', 'Pacing'],
    software: ['Panasonic GH6', 'Blackmagic ATEM Mini', 'DaVinci Resolve', 'Pro Tools'],
    thumbnailUrl: 'https://i.ytimg.com/vi/cwJEbC3WOhI/hqdefault.jpg',
    featured: true,
  },
  {
    id: 'science-with-violet',
    title: 'Science with Violet (Kids\' Educational Science Series)',
    category: 'podcasts-series',
    categoryLabel: 'Original Series',
    description: 'A fun, engaging kids\' educational science series featuring Bstar\'s daughter Violet. Written, shot, and animated with colorful visual effects and real-world experiments.',
    detailedNote: 'Demonstrating educational storytelling, family-friendly pacing, and accessible science concepts.',
    videoId: '26jqBzR2NXs',
    videoType: 'regular',
    tags: ['Kids Science', 'Original Series', 'Family', 'Education'],
    software: ['Panasonic GH6', 'DaVinci Resolve', 'Fusion Motion Graphics'],
    thumbnailUrl: 'https://i.ytimg.com/vi/26jqBzR2NXs/hqdefault.jpg',
    featured: true,
  },
  {
    id: 'los-tv-pilot',
    title: '"LO\'S" (Original TV Pilot in Development)',
    category: 'podcasts-series',
    categoryLabel: 'Narrative TV Pilot',
    description: 'An original narrative television pilot currently in active development. Blending sharp character drama with rich cinematic visual texture.',
    detailedNote: 'Scripted look-book developed with cinematic lenses, practical lighting, and GH6 V-Log exposure tests.',
    videoId: 'Qe5NPYlH83k',
    videoType: 'regular',
    tags: ['TV Pilot', 'Narrative Drama', 'Development', 'Cinematography'],
    software: ['Panasonic GH6', 'DaVinci Resolve Studio', 'Pro Tools'],
    thumbnailUrl: 'https://i.ytimg.com/vi/Qe5NPYlH83k/hqdefault.jpg',
    featured: true,
  },

  // MUSIC VIDEOS & NARRATIVE
  {
    id: 'pressers-cypher-2024',
    title: 'The Pressers Rookie Class Cypher',
    category: 'music-videos',
    categoryLabel: 'Music Video / 3D Stage',
    description: 'Virtual reproduction of the NBA draft for independent music artists. Shot, edited, colored, and mixed by Bstar (Bernard Mathis).',
    detailedNote: 'Combining Panasonic V-Log camera capture with stylized stage design, dynamic cutting, and audio-reactive pacing.',
    videoId: 'lwpFjt9YLD8',
    videoType: 'regular',
    tags: ['Music Video', 'Directing', 'Color Grading', 'DaVinci Resolve'],
    software: ['Panasonic GH6', 'DaVinci Resolve', 'Pro Tools'],
    thumbnailUrl: 'https://i.ytimg.com/vi/lwpFjt9YLD8/hqdefault.jpg',
    featured: true,
  },
  {
    id: 'childish-official-video',
    title: 'Childish — Official Music Video',
    category: 'music-videos',
    categoryLabel: 'Music Video Production',
    description: 'Full narrative music video for Bstar x Hi_Fii. Directed, filmed, and edited with custom rotoscoping and color grading.',
    detailedNote: 'Filmed on location in LA. Hand-graded in DaVinci Resolve with film emulation texture and lens bloom.',
    videoId: 'kztjddN3YKk',
    videoType: 'regular',
    tags: ['Music Video', 'Directing', 'Color Grading', 'Rotoscoping'],
    software: ['Panasonic GH6', 'DaVinci Resolve', 'Premiere Pro'],
    thumbnailUrl: 'https://i.ytimg.com/vi/kztjddN3YKk/hqdefault.jpg',
  },
  {
    id: 'timothymac-so-tired',
    title: 'TimothyMac — "So Tired"',
    category: 'music-videos',
    categoryLabel: 'Music Video / Visuals',
    description: 'Stylized performance music video with atmospheric grading, dynamic cuts, and precision audio-synced editing.',
    videoId: 'yodsLURSlMc',
    videoType: 'regular',
    tags: ['Music Video', 'Color Science', 'V-Log Grading'],
    software: ['Panasonic GH6', 'DaVinci Resolve', 'Premiere Pro'],
    thumbnailUrl: 'https://i.ytimg.com/vi/yodsLURSlMc/hqdefault.jpg',
  },
  {
    id: 'childish-visualizer',
    title: 'Childish (Visualizer Video) — Bstar x Hi_Fii',
    category: 'music-videos',
    categoryLabel: 'Music Visualizer',
    description: 'Creative visualizer combining live action performance with 3D backdrop motion graphics.',
    videoId: 'skn-fY3CgwA',
    videoType: 'regular',
    tags: ['Visualizer', 'Hip Hop', 'Motion Graphics'],
    software: ['DaVinci Resolve', 'After Effects'],
    thumbnailUrl: 'https://i.ytimg.com/vi/skn-fY3CgwA/hqdefault.jpg',
  },
  {
    id: 'flick-visualizer-freestyle',
    title: 'Flick Visualizer (Practice & Improve Freestyle)',
    category: 'music-videos',
    categoryLabel: 'VFX & Performance Visualizer',
    description: 'High-energy visualizer written, filmed, and edited by Bstar, showcasing rotoscoping and stylized effects.',
    videoId: 'bbPkntW9Azk',
    videoType: 'regular',
    tags: ['Rotoscoping', 'VFX', 'Performance'],
    software: ['After Effects', 'DaVinci Resolve'],
    thumbnailUrl: 'https://i.ytimg.com/vi/bbPkntW9Azk/hqdefault.jpg',
  },

  // EXPLAINERS & TALKING HEADS
  {
    id: 'how-pressers-is-made',
    title: 'How Pressers is Made — Green Screen & Production Breakdown',
    category: 'explainers-shorts',
    categoryLabel: 'Explainer / Behind The Scenes',
    description: 'Technical breakdown showing how green screen lighting, camera matching, and sound were synchronized for The Pressers Draft.',
    videoId: 'XP3makxDOYc',
    videoType: 'regular',
    tags: ['Explainer', 'Green Screen', 'Tutorial', 'Behind The Scenes'],
    software: ['DaVinci Resolve', 'GH6 V-Log'],
    thumbnailUrl: 'https://i.ytimg.com/vi/XP3makxDOYc/hqdefault.jpg',
  },
  {
    id: 'content-101-greenscreen',
    title: 'Content 101: Ep.2 Greenscreen Masterclass',
    category: 'explainers-shorts',
    categoryLabel: 'Explainer / Tutorial',
    description: 'Comprehensive breakdown on proper green screen lighting, key pulling, edge preservation, and audio synchronization.',
    videoId: '26jqBzR2NXs',
    videoType: 'regular',
    tags: ['Greenscreen', 'Lighting', 'Education'],
    software: ['Panasonic GH6', 'DaVinci Resolve', 'Blackmagic ATEM'],
    thumbnailUrl: 'https://i.ytimg.com/vi/26jqBzR2NXs/hqdefault.jpg',
  },
  {
    id: 'tiny-clone-skit',
    title: '"Tiny Clone" Skit — DaVinci Resolve',
    category: 'explainers-shorts',
    categoryLabel: 'VFX Comedy Short',
    description: 'Comedic clone sketch demonstrating seamless multi-pass compositing, rotoscoping, and sound design inside DaVinci Resolve.',
    videoId: 'rvtSQ1Iz4yo',
    videoType: 'regular',
    tags: ['Clone VFX', 'Comedy', 'Resolve Fusion'],
    software: ['DaVinci Resolve', 'Panasonic GH6'],
    thumbnailUrl: 'https://i.ytimg.com/vi/rvtSQ1Iz4yo/hqdefault.jpg',
  },

  // COLOR & POST
  {
    id: 'prores-raw-color-grade',
    title: 'Apple ProRes RAW Grading & Cinematic Relight',
    category: 'color-post',
    categoryLabel: 'Color Science & Post',
    description: '12-bit Apple ProRes RAW grading demonstration using node-based curves and Resolve studio relighting.',
    videoId: '2NrwKyWEUqs',
    videoType: 'regular',
    tags: ['ProRes RAW', 'Color Grading', 'Relight'],
    software: ['DaVinci Resolve Studio', 'ProRes RAW'],
    thumbnailUrl: 'https://i.ytimg.com/vi/2NrwKyWEUqs/hqdefault.jpg',
  },
  {
    id: 'camlink-ue55-virtual',
    title: 'Live Camera Capture & Studio Monitoring',
    category: 'color-post',
    categoryLabel: 'Live Pipeline Testing',
    description: 'Testing HDMI capture latency, real-time color space transforms, and camera synchronization.',
    videoId: '0kc7KvvRXqU',
    videoType: 'regular',
    tags: ['Camera Tracking', 'Live Capture', 'Monitoring'],
    software: ['CamLink 4K', 'DaVinci Resolve'],
    thumbnailUrl: 'https://i.ytimg.com/vi/0kc7KvvRXqU/hqdefault.jpg',
  }
];

export const PRODUCTION_STILLS: ProductionStill[] = [
  {
    id: 'still-rig-1',
    url: 'https://assets.zyrosite.com/BOJNKSHI76bv9ceB/img_2806-CxJno1QXCnJ2ZWvw.JPG',
    caption: 'Cinema rig: Panasonic GH6 caged with top handle, monitor mount, and wireless video transmitter.',
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
    caption: 'Live multitrack audio and Blackmagic ATEM Mini video feed monitoring.',
  },
];

export const EXPERIENCE_ITEMS: ExperienceItem[] = [
  {
    id: 'studio-montrose-virtual',
    title: 'Studio & Virtual Production Specialist',
    facility: 'My Studio Montrose',
    period: 'Virtual & Studio Production',
    category: 'Virtual Production',
    description: [
      'Transitioned into studio-based and immersive production at My Studio Montrose, a fully equipped green screen and virtual production studio.',
      'Worked hands-on with VR systems, Blackmagic DeckLink hardware, and Blackmagic Ultimatte for real-time compositing.',
      'Supported live virtual productions using Unreal Engine, helping integrate real-time environments with green screen talent for broadcast-ready results.',
      'Supported professional audio workflows, including podcast production in a fully equipped studio using Pro Tools.',
      'Operated the Blackmagic ATEM system, including my own Blackmagic ATEM Mini Pro, for live podcast shooting, switching, and real-time chroma keying—strengthening live production pipelines from capture through delivery.'
    ],
    tools: ['Unreal Engine', 'Blackmagic Ultimatte', 'Blackmagic DeckLink', 'VR Systems', 'Pro Tools', 'Blackmagic ATEM Mini Pro', 'Green Screen Cyc'],
    photoUrl: 'https://assets.zyrosite.com/BOJNKSHI76bv9ceB/img_0302-Mt5k1jglMmgXt1MR.jpg'
  },
  {
    id: 'nightclub-av-technician',
    title: 'AV Technician & Live Sound Engineer',
    facility: 'Nightclub & Live Event Venues',
    period: 'Live AV & High-Pressure Venue Sound',
    category: 'Live AV & Sound',
    description: [
      'Worked as an AV Technician in a nightclub environment, gaining real-world experience operating and troubleshooting professional audio and visual systems in live, high-pressure settings.',
      'Managed live sound using a 16-channel mixing board, enabling running entire live sound venues and performing live sound mixing during concerts.',
      'Properly mic’d performers and instruments to deliver a polished, professional live show with pristine acoustic balance and zero feedback.',
      'Diagnosed and resolved equipment issues under live concert conditions, sharpening the ability to think quickly, adapt on the fly, and maintain rock-solid system reliability.'
    ],
    tools: ['16-Channel Mixing Board', 'Live Sound Venue Management', 'Instrument & Vocal Micing', 'AV Diagnostics & Troubleshooting', 'Studio One Live'],
    photoUrl: 'https://assets.zyrosite.com/BOJNKSHI76bv9ceB/img_0318-ruDiM4ZhsG9MgglC.jpg'
  },
  {
    id: 'film-school-rigor',
    title: 'Film Science Associate of Arts Program',
    facility: 'The Los Angeles Film School',
    period: 'Studio Training & Production Discipline',
    category: 'Education & Rigor',
    description: [
      'Studio training began at LA Film School, studying in the Film Science Associate of Arts program.',
      'Built a strong technical foundation in production workflows, camera systems, audio, lighting, and post-production.',
      'The program emphasized both the creative and technical sides of filmmaking, providing early exposure to industry-standard tools, professional set environments, and disciplined production processes.'
    ],
    tools: ['Production Workflows', 'Camera Systems', 'Audio Engineering', 'Lighting Science', 'Editorial Discipline'],
    photoUrl: 'https://assets.zyrosite.com/BOJNKSHI76bv9ceB/img_4249-XxR1T3dNtGWam1Pz.jpg'
  },
  {
    id: 'intrepid-media-giant',
    title: 'Founder, Producer & Director',
    facility: 'Intrepid Media Giant, LLC / Intrepid Cloud',
    period: '2020 — Present',
    category: 'Production & Directing',
    description: [
      'Founder and lead producer at Intrepid Media Giant, LLC and Intrepid Cloud, bridging creative vision with reliable, technically sound execution.',
      'Certified across 7 camera systems (Blackmagic, Sony, Panasonic, ARRI, RED, Fuji, Atomos); proficient in handling and grading RAW files (BRAW, RED RAW, Sony RAW, LUMIX RAW).',
      'Builds professional color grading and transcoding pipelines in DaVinci Resolve for any color space, including ACES and Rec.709 standards.',
      'Directed, filmed, and edited commercial projects, original podcast "The Sour Truth", kids\' science series "Science with Violet", and original TV pilot "LO\'S" in development.'
    ],
    tools: ['Panasonic GH6 V-Log / ProRes RAW', 'DaVinci Resolve (ACES & Rec.709)', 'Avid Media Composer', 'Pro Tools', 'ATEM Mini Pro'],
    photoUrl: 'https://assets.zyrosite.com/BOJNKSHI76bv9ceB/img_4238-XaXqsh3AHYWRO2fL.jpg'
  }
];

export const SOFTWARE_STACK: SoftwareTool[] = [
  { name: 'Avid Media Composer', category: 'Editing & Color', role: 'Feature Film & Broadcast Offline/Online Editorial', proficiency: 94 },
  { name: 'DaVinci Resolve Studio', category: 'Editing & Color', role: 'RAW Color Grading (ACES / Rec.709), Multicam Sync & Post', proficiency: 98 },
  { name: 'Adobe Premiere Pro', category: 'Editing & Color', role: 'Commercial & Narrative Multi-Camera Timeline Editorial', proficiency: 93 },
  { name: 'Final Cut Pro', category: 'Editing & Color', role: 'High-Efficiency Magnetic Timeline Video Editing', proficiency: 90 },
  { name: 'DCP-o-matic', category: 'Editing & Color', role: 'Theatrical Digital Cinema Package (DCP) Mastering & Distribution', proficiency: 92 },
  { name: 'Adobe After Effects', category: 'Motion & Delivery', role: 'Motion Graphics, Titles, Rotoscoping & 2D/3D VFX', proficiency: 91 },
  { name: 'Pro Tools', category: 'Audio & Live', role: 'Studio Podcast Production, Dialogue Editing & Multitrack Post', proficiency: 94 },
  { name: 'Studio One & Studio One Live', category: 'Audio & Live', role: 'Concert Multitrack Capture, Live Mixing & Music Production', proficiency: 93 },
  { name: '16-Channel Mixing Board', category: 'Audio & Live', role: 'Live Venue Sound Mixing, Concert Audio & Performer Micing', proficiency: 96 },
  { name: 'Blackmagic ATEM Mini Pro & ATEM System', category: 'Audio & Live', role: 'Live Podcast Switching & Real-Time Chroma Keying', proficiency: 97 },
  { name: 'Unreal Engine', category: 'Virtual Production & 3D', role: 'Real-Time Virtual Production, In-Camera VFX & 3D Environments', proficiency: 92 },
  { name: 'Aximmetry', category: 'Virtual Production & 3D', role: 'Virtual Studio Broadcast Compositing & Real-Time Graphics', proficiency: 89 },
  { name: 'Blender', category: 'Virtual Production & 3D', role: '3D Scene Modeling, Camera Tracking & Visual Asset Creation', proficiency: 88 },
];
