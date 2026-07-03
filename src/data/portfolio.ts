export const personalInfo = {
  name: "Gil Bernard F. Maglinte",
  role: "Computer Engineer \\ Software Developer \\ IT Specialist \\ AI Enthusiast",
  location: "Cebu City, Central Visayas, Philippines",
  email: "mgilbernard@gmail.com",
  about: [
    "I'm a full-stack software engineer specializing in developing solutions that bridge web technologies and the Internet of Things. I focus on developing full-stack web applications and integrating them seamlessly with hardware and sensor modules.",
    "My work heavily involves architectural design, database management, and leveraging embedded systems to capture and process real-time data for advanced monitoring systems.",
    "Lately, I've been diving deeper into Edge AI, focusing on integrating machine learning directly onto microcontrollers to optimize predictive healthcare analysis and deliver cutting-edge wearable technology."
  ]
};

export interface Project {
  title: string;
  description: string;
  link: string;
  tags: string[];
  image?: string;
  category: string;
}

export const projects = [
  {
    title: "KneuraSense",
    description: "An IoT wearable knee support utilizing a 4-axis sensor fusion configuration and Edge AI to predict early-onset osteoarthritis risks in real-time. It dynamically adjusts to incline context and features a full-stack Next.js dashboard with live telemetry, haptic interventions, and a clinical AI assistant.",
    link: "kneura-sense-koa.vercel.app",
    tags: ["Next.js", "Edge AI", "XIAO ESP32-S3", "PostgreSQL", "MQTT"],
    image: "/projects/KneuraSense.png",
    category: "IoT"
  },
  {
    title: "Portfolio v2.0",
    description: "The second iteration of my professional portfolio reflects a refined approach to modern web design and user experience. Built as a central hub for my technical journey, this version emphasizes high performance and visual storytelling. It features a responsive, Bento-style grid layout, sophisticated motion design, and a custom-built AI chatbot that allows visitors to query my professional experience and project history dynamically.",
    link: "gil-bernard.vercel.app",
    tags: ["Next.js", "Framer Motion", "Tailwind CSS", "TypeScript"],
    image: "/projects/portfolio-v2.png",
    category: "Web"
  },
  {
    title: "Student Tracking System",
    description: "An N-Tier enterprise web application developed during the Alliance Software Inc. training program. It serves as a Learning Management and Student Information System featuring complex role-based access control, automated academic scheduling, and an interactive grading architecture built on ASP.NET Core MVC.",
    link: "github.com/loydamt/asi.basecode",
    tags: ["C#", "ASP.NET Core", "MVC", "Entity Framework", "SQL Server"],
    image: "/projects/learnoxa.png",
    category: "Web App"
  },
  {
    title: "Smart Autonomous Fire Detection and Active Suppression System",
    description: "An IoT-based fire safety platform for real-time hazard monitoring. I was responsible for the cloud infrastructure, setting up AWS IoT Core for device connectivity and developing AWS Lambda functions to trigger emergency email alerts via SES.",
    link: "github.com/Berot1/Capstone-project-Zuitt/blob/main/Capstone-project/project%20files/BEC0017-maglinte-gilbernard.md",
    tags: ["ESP32", "MQTT", "C++", "AWS IoT Core", "AWS Lambda", "AWS SES"],
    image: "/projects/Fire.png",
    category: "Embedded"
  },
  {
    title: "Portfolio v1.0",
    description: "A professional, responsive portfolio website showcasing my foundational software engineering and systems development projects. Designed to highlight key academic and technical achievements, it features a modern, component-based UI built with Next.js and interactive motion design.",
    link: "gil-portfolio-v1.vercel.app",
    tags: ["Next.js", "React", "Tailwind CSS", "JavaScript", "Framer Motion"],
    image: "/projects/portfolio-v1.png",
    category: "Web"
  },
  {
    title: "WildFind",
    description: "A lost and found tracking system for school environments. Originally developed as a C# Windows Forms application, now migrated to a modern web-based platform using React and Firebase for improved accessibility and real-time updates.",
    link: "github.com/AspireSpartan/WILDFind_webapp",
    tags: ["React", "Vite", "Firebase", "JavaScript", "HTML/CSS"],
    image: "/projects/wildfind.png",
    category: "Software"
  }
];

export const experience = [
    {
    role: "Cebu Institute of Technology - University",  
    company: "Bachelor of Science in Computer Engineering",
    year: "May 2026",
    highlight: true,
  },
  {
    role: "Jumpstart Trainee — C# Web Development",
    company: "Alliance Software Inc.",
    year: "December 2025",
    achievements: [
      "Completed the intensive Jumpstart Training Program specializing in C# Web Development.",
      "Gained hands-on experience in building, structuring, and deploying web applications."
    ],
  },
  {
    role: "IT Support Specialist (OJT)",
    company: "Fusion CX",
    year: "May - July 2025",
    achievements: [
      "Performed diagnostic testing and system checks on workstations, network devices, and peripherals to ensure operational integrity and user safety.",
      "Monitored and documented the delivery and inventory of IT equipment and consumables, ensuring accuracy and readiness for deployment.",
      "Configured and maintained core network services, including FTP server, DNS records, and ticketing system to support secure access, issue tracking, and reliable domain resolution.",
      "Collaborated with IT team members to integrate services into existing infrastructure, troubleshoot technical issues, and uphold service level standards."
    ]
  },
  {
    role: "Hello World!",
    company: "Proudly wrote my very first line of code!",
    year: "November 2022",
  },
];

export const techStack = {
  "Frontend & UI": [
    "Next.js", "React", "Tailwind CSS", "JavaScript", "HTML", "CSS", "Figma", "Canva"
  ],
  "Backend & Cloud": [
    "Node.js", "ASP.NET", "PostgreSQL", "Supabase", "Vercel", "AWS Lambda", "Gemini API", "OpenWeather API", "Render", "HiveMQ"
  ],
  "IoT & Embedded": [
    "C", "C++", "XIAO ESP32-S3", "AWS IoT", "MQTT.js", "Arduino IDE", "PlatformIO", "FreeRTOS", "TensorFlow Lite Micro", "Edge Impulse (TinyML)"
  ],
  "Hardware & Engineering": [
    "KiCad", "PCB Design", "Circuit Schematics", "Fusion 360", "AutoCAD", "Inventor", "3D Design", "MatLab", "I2C Multiplexing (PCA9548A)", "Sensor Fusion (IMU / FSR)"
  ],
  "Tools & Architecture": [
    "Git", "GitHub", "VS Code", "Visual Studio", "C#", "Cisco", "Vite", "JWT", "Zod", "ESLint", "Prisma", "SPIFFS File System"
  ]
};

export const certifications = [
  { 
    slug: "google-cloud-ai-infrastructure", 
    title: "Google Cloud AI Infrastructure", 
    issuer: "Google", 
    date: "Mar 2026",
    credentialUrl: "https://coursera.org/share/4d45b2ae84e3d833e14ed7319ad91fdb", 
    icon: "/icons/google.webp"
  },
  { 
    slug: "edge-ai-for-microcontrollers", 
    title: "Edge AI for Microcontrollers", 
    issuer: "Edge Impulse", 
    date: "Mar 2026",
    credentialUrl: "https://coursera.org/share/20dbdaa85b75a0c9d0d1229619effcc0", 
    icon: "/icons/edge-impulse.webp"
  },
  { 
    slug: "google-ux-design", 
    title: "Google UX Design", 
    issuer: "Google", 
    date: "Mar 2026",
    credentialUrl: "https://coursera.org/share/0e921177ea63de7b2b636bb9dc936d91", 
    icon: "/icons/google.webp"
  },
  { 
    slug: "google-ai-essentials", 
    title: "Google AI Essentials", 
    issuer: "Google", 
    date: "Mar 2026",
    credentialUrl: "https://coursera.org/share/505d64e8b0fd6d5c3144c42e78425280", 
    icon: "/icons/google.webp"
  },
  { 
    slug: "career-essentials-in-generative-ai", 
    title: "Career Essentials in Generative AI by Microsoft and LinkedIn", 
    issuer: "Microsoft", 
    date: "Mar 2026",
    credentialUrl: "https://www.linkedin.com/learning/certificates/49d3149f9c339423ae3366724a27bb6117fe6b5e02217ed0b78fb0dd0fa5c1c0?trk=share_certificate",
    icon: "/icons/microsoft.webp"
  },
  { 
    slug: "introduction-to-modern-ai", 
    title: "Introduction to Modern AI", 
    issuer: "Cisco", 
    date: "Mar 2026",
    credentialUrl: "https://www.credly.com/badges/8e5bbf76-a078-45b9-9bfd-597b2cf9deeb/public_url",
    icon: "/icons/cisco-icon.webp"
  },
    { 
    slug: "getting-started-with-ai-on-jetson-nano", 
    title: "Getting Started with AI on Jetson Nano", 
    issuer: "NVIDIA", 
    date: "Mar 2026",
    credentialUrl: "https://learn.nvidia.com/certificates?id=W_8mYBxtTSutdPte7lj4Bg", 
    icon: "/icons/nvidia.webp"
  },
  { 
    slug: "foundational-c-sharp-with-microsoft", 
    title: "Foundational C# with Microsoft", 
    issuer: "freeCodeCamp / Microsoft", 
    date: "Mar 2026",
    credentialUrl: "https://www.freecodecamp.org/certification/gilbernardmaglinte/foundational-c-sharp-with-microsoft",
    icon: "/icons/microsoft.webp"
  },  
  { 
    slug: "matlab-onramp", 
    title: "MATLAB Onramp", 
    issuer: "MathWorks", 
    date: "Mar 2026",
    credentialUrl: "https://matlabacademy.mathworks.com/progress/share/certificate.html?id=d94142ea-4114-41c8-9d8a-70b25eed5a9a&",
    icon: "/icons/mathlab.webp" 
  },
  { 
    slug: "graphic-design-essentials", 
    title: "Graphic Design Essentials", 
    issuer: "Canva", 
    date: "Mar 2026",
    credentialUrl: "https://www.canva.com/design-school/certification-award/71f9d516-305c-4fb9-9092-f5c8ca29dbb6?",
    icon: "/icons/canva-logo.webp"
  },
  { 
    slug: "Monitoring-AWS", 
    title: "Introduction to Monitoring AWS", 
    issuer: "Datadog", 
    date: "Feb 2026",
    credentialUrl: "https://learn.datadoghq.com/certificates/cqrngxkbzo",
    icon: "/icons/datadog.webp"
  },
  { 
    slug: "Cloud-SIEM", 
    title: "Introduction to Cloud SIEM", 
    issuer: "Datadog", 
    date: "Feb 2026",
    credentialUrl: "https://learn.datadoghq.com/certificates/irgl0w0zue",
    icon: "/icons/datadog.webp"
  },
  { 
    slug: "jumpstart",
    title: "Jumpstart Training Program — C# Web Development", 
    issuer: "Alliance Software Inc.",
    date: "Dec 2025",
    description: "Completed the intensive Jumpstart Training Program specializing in C# Web Development, gaining hands-on experience in building, structuring, and deploying web applications.",
    image: "/image/jumpstart-cert.jpg",
    credentialUrl: "https://your-public-link-here.com",
    icon: "/icons/alliance-soft-inc.webp"
  },
  { 
    slug: "ojt",
    title: "IT Support Specialist (OJT)",
    issuer: "Fusion BPO Services Philippines Inc.",
    date: "May 2025 - Jul 2025",
    description: "Completed on-the-job training focusing on diagnostic testing, network configuration, and IT infrastructure maintenance.",
    image: "/image/ojt-cert.jpg",
    credentialUrl: "https://your-public-link-here.com",
    icon: "/icons/fusion-bpo-cx.webp"
  },
  { 
    slug: "cisco", 
    title: "Introduction to Packet Tracer", 
    issuer: "Cisco Networking Academy",
    date: "September 2024",
    credentialUrl: "https://www.credly.com/badges/85bbbec6-7117-44ea-80c0-6d6251211ade/public_url",
    icon: "/icons/cisco-icon.webp"
  }
];

export const affiliations = [
  { name: "Google Developer Groups on Campus CIT-U (GDGoC - CITU)", link: "https://www.facebook.com/gdgoc.citu" },
  { name: "Cebu Institute of Computer Engineers of the Philippines CIT-U Chapter (ICpEP.SE)", link: "https://www.facebook.com/cituicpep/" },
];

export const socialLinks = [
  { name: "LinkedIn", link: "https://www.linkedin.com/in/gil-bernard-maglinte-4a1a70358/", icon: "/icons/linkedin.webp" },
  { name: "GitHub", link: "https://github.com/Berot1", icon: "/icons/github-.webp" },
  { name: "Instagram", link: "https://www.instagram.com/itsgilb__?igsh=YWU2aHZ2d3Blb2ps", icon: "/icons/instagram-icon.webp" }
];