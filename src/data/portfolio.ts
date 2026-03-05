export const personalInfo = {
  name: "Gil Bernard F. Maglinte",
  role: "Software Engineer \\ IoT & Edge AI Researcher",
  location: "Hilongos, Eastern Visayas, Philippines",
  email: "mgilbernard@gmail.com",
  about: [
    "I'm a full-stack software engineer specializing in developing solutions that bridge web technologies and the Internet of Things. I focus on developing full-stack web applications and integrating them seamlessly with hardware and sensor modules.",
    "My work heavily involves architectural design, database management, and leveraging embedded systems to capture and process real-time data for advanced monitoring systems.",
    "Lately, I've been diving deeper into Edge AI, focusing on integrating machine learning directly onto microcontrollers to optimize predictive healthcare analysis and deliver cutting-edge wearable technology."
  ]
};

export const projects = [
  {
    title: "KneuraSense (Research Thesis)",
    description: "An IoT wearable device utilizing Edge AI and sensors to monitor and predict knee osteoarthritis risks. Features a full-stack dashboard powered by Next.js, Prisma, and PostgreSQL.",
    link: "kneura-sense-koa.vercel.app",
    tags: ["Next.js", "Edge AI", "IoT", "XIAO ESP32-S3", "PostgreSQL"]
  },
  {
    title: "Student Tracking System",
    description: "A comprehensive N-Tier web application serving as a Learning Management and Student Information System. Features role-based portals for managing student enrollments, automated scheduling, and an interactive grading system.",
    link: "github.com/loydamt/asi.basecode",
    tags: ["C#", "ASP.NET Core", "MVC", "Entity Framework"]
  },
  {
    title: "Smart Autonomous Fire Detection and Active Suppression System",
    description: "An IoT-based fire safety platform for real-time hazard monitoring. I was responsible for the cloud infrastructure, setting up AWS IoT Core for device connectivity and developing AWS Lambda functions to trigger emergency email alerts via SES.",
    link: "github.com/Berot1/Capstone-project-Zuitt/blob/main/Capstone-project/project%20files/BEC0017-maglinte-gilbernard.md",
    tags: ["ESP32", "MQTT", "C++", "AWS IoT Core", "AWS Lambda", "AWS SES"]
  },
  {
    title: "Portfolio v1.0",
    description: "My first professional portfolio highlighting my journey as a computer engineering student. It showcases technical expertise in software development and system optimization through an interactive and responsive design.",
    link: "gil-portfolio-v1.vercel.app",
    tags: ["Next.js", "React", "JavaScript", "Tailwind CSS"]
  },
  {
    title: "WILDFind",
    description: "A lost and found tracking system for school environments. Originally developed as a C# Windows Forms application, now migrated to a modern web-based platform using React and Firebase for improved accessibility and real-time updates.",
    link: "github.com/AspireSpartan/WILDFind_webapp",
    tags: ["React", "Vite", "Firebase", "JavaScript", "HTML/CSS"]
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
    company: "Fusion BPO Services Philippines Inc.",
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
  "Frontend": [
    "Next.js", "React", "Tailwind CSS", "HTML", "CSS", "JavaScript", 
    "Vue.js", "Vite", "Webpack", "ESLint", "Prettier"
  ],
  "Backend & Cloud": [
    "Node.js", "Python", "ASP.NET", "PostgreSQL", "Supabase", "Firebase", 
    "Vercel", "AWS Lambda", "AWS IoT", "MQTT.js", "HiveMQ", "XIAO ESP32-S3", 
    "JWT", "Zod", "Gemini", "OpenWeather", "SMTP"
  ],
  "Languages & Systems": [
    "C", "C++", "C#", "Cisco", "MatLab"
  ],
  "Engineering & Design": [
    "Arduino IDE", "Wokwi", "AutoCAD", "Fusion 360", "Inventor", 
    "KiCad", "PCB Design", "3D Design", "Figma", "Canva"
  ],
  "Developer Tools": [
    "Git", "GitHub", "VS Code", "Visual Studio", "Sourcetree", 
    "ChatGPT", "Claude", "Copilot", "Discord", "Teams"
  ]
};

export const certifications = [
  { 
    slug: "jumpstart",
    title: "Jumpstart Training Program — C# Web Development", 
    issuer: "Alliance Software Inc.",
    date: "Dec 2025",
    description: "Completed the intensive Jumpstart Training Program specializing in C# Web Development, gaining hands-on experience in building, structuring, and deploying web applications.",
    image: "/image/jumpstart-cert.svg" 
  },
  { 
    slug: "ojt",
    title: "IT Support Specialist (OJT)", 
    issuer: "Fusion BPO Services Philippines Inc.",
    date: "May 2025 - Jul 2025",
    description: "Completed on-the-job training focusing on diagnostic testing, network configuration, and IT infrastructure maintenance.",
    image: "/image/ojt-cert.svg" 
  }
];

export const recommendations = [
  {
    quote: "Gil's work on the KneuraSense project demonstrated an exceptional grasp of both hardware constraints and advanced machine learning. His ability to deploy Edge AI models onto microcontrollers is truly impressive and forward-thinking.",
    name: "Dr. Example",
    role: "Research Director, University Lab"
  }
];

export const affiliations = [
  { name: "Google Developer Groups on Campus CIT-U (GDGoC - CITU)", link: "https://www.facebook.com/gdgoc.citu" },
  { name: "Cebu Institute of Computer Engineers of the Philippines CIT-U Chapter (ICpEP.SE)", link: "https://www.facebook.com/cituicpep/" },
];

export const socialLinks = [
  { name: "LinkedIn", link: "https://www.linkedin.com/in/gil-bernard-maglinte-4a1a70358/", icon: "Linkedin" },
  { name: "GitHub", link: "https://github.com/Berot1", icon: "Github" },
  { name: "Instagram", link: "https://www.instagram.com/itsgilb__?igsh=YWU2aHZ2d3Blb2ps", icon: "Instagram" }
];