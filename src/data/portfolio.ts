export const personalInfo = {
  name: "Gil Bernard F. Maglinte",
  role: "Software Engineer \\ IoT & Edge AI Researcher",
  location: "Hilongos, Eastern Visayas, Philippines",
  email: "hello@example.com",
  about: [
    "I'm a full-stack software engineer specializing in developing solutions that bridge web technologies and the Internet of Things. I focus on developing full-stack web applications and integrating them seamlessly with hardware and sensor modules.",
    "My work heavily involves architectural design, database management, and leveraging embedded systems to capture and process real-time data for advanced monitoring systems.",
    "Lately, I've been diving deeper into Edge AI, focusing on integrating machine learning directly onto microcontrollers to optimize predictive healthcare analysis and deliver cutting-edge wearable technology."
  ]
};

export const projects = [
  {
    title: "KneuraSense (Research Thesis)",
    description: "An IoT wearable device utilizing Edge AI and IMU sensors to monitor and predict knee osteoarthritis risks. Features a full-stack dashboard powered by Next.js, Prisma, and PostgreSQL.",
    link: "kneurasense.dev",
    tags: ["Thesis", "Edge AI", "IoT"]
  },
  {
    title: "Smart Environment Monitor",
    description: "Real-time tracking of environmental data using ESP32-S3 and MQTT protocols with sub-second latency data pipelines.",
    link: "github.com/gil/smart-env",
    tags: ["Hardware", "MQTT"]
  }
];

export const experience = [
  {
    role: "IoT Research Developer",
    company: "University Lab",
    year: "2025",
    achievements: [
      "Designed and developed the KneuraSense wearable prototype using C++ and microcontrollers.",
      "Implemented Edge AI models for real-time predictive healthcare analysis directly on device.",
      "Architected the database schema and API integration using PostgreSQL and Prisma."
    ],
    highlight: true,
  },
  {
    role: "Software Engineer",
    company: "Tech Solutions",
    year: "2024",
    achievements: [
      "Built and maintained scalable web applications using Next.js and TypeScript.",
      "Engineered robust backend services with Node.js to support high-throughput sensor data.",
      "Optimized database queries, reducing average API response times by 30%."
    ]
  },
  {
    role: "Full-Stack Developer",
    company: "Freelance",
    year: "2023",
    achievements: [
      "Delivered custom web and IoT solutions for clients.",
      "Integrated hardware components like GPS modules and IMU sensors with web dashboards."
    ]
  }
];

export const techStack = {
  frontend: ["JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS"],
  backend: ["Node.js", "Python", "C++", "Prisma", "PostgreSQL"],
  iot: ["ESP32-S3", "MQTT", "IMU Sensors", "GPS Modules", "Edge AI", "Circuit Design"]
};

export const certifications = [
  { title: "Huawei Developer Expert", issuer: "Huawei" },
  { title: "Generative AI Leader", issuer: "Google" },
  { title: "Software Engineering", issuer: "TestDome" },
  { title: "Generative AI Professional", issuer: "Oracle" }
];

export const recommendations = [
  {
    quote: "Gil's work on the KneuraSense project demonstrated an exceptional grasp of both hardware constraints and advanced machine learning. His ability to deploy Edge AI models onto microcontrollers is truly impressive and forward-thinking.",
    name: "Dr. Example",
    role: "Research Director, University Lab"
  }
];

export const affiliations = [
  { name: "Analytics & Artificial Intelligence Association of the Philippines (AAP)", link: "#" },
  { name: "Philippine Software Industry Association", link: "#" }
];

export const socialLinks = [
  { name: "LinkedIn", link: "#", icon: "Linkedin" },
  { name: "GitHub", link: "#", icon: "Github" },
  { name: "Instagram", link: "#", icon: "Instagram" }
];

export const speaking = {
  description: "Available for speaking at events about software development and emerging technologies.",
  link: "#"
};