import {
  SkillCategory,
  ServiceItem,
  ProjectItem,
  CertificateItem,
  TimelineItem,
  WorkingApproachItem,
} from '../types';

export const PERSONAL_INFO = {
  fullName: 'Karan Khandelwal',
  shortName: 'Karan',
  location: 'Ahmedabad, Gujarat, India',
  email: 'khandelwalkaran67@gmail.com',
  education: {
    degree: 'Bachelor of Technology (B.Tech)',
    branch: 'Computer Engineering',
    status: 'Third-year undergraduate student',
    institution: 'Indus University, Ahmedabad',
  },
  roles: [
    'Aspiring Generative AI Developer',
    'AI-Assisted Digital Creator',
    'Web Developer',
    'Python Developer',
    'Freelance Digital Service Provider',
    'Technology & Creative Enthusiast',
  ],
  heroTaglines: [
    'Generative AI Developer',
    'Web Developer',
    'Python Developer',
    'Digital Creator',
  ],
  heroIntro:
    "Hi, I'm Karan Khandelwal. I turn ideas into digital experiences through programming, artificial intelligence, and creative technology.",
  professionalIntro:
    'I am Karan Khandelwal, a Computer Engineering student and aspiring Generative AI Developer passionate about building digital experiences through programming, artificial intelligence, and creativity.\n\nI enjoy developing websites, experimenting with AI-powered tools, creating digital designs, and transforming ideas into practical solutions.\n\nMy journey includes working on web development projects, Python applications, e-commerce concepts, management platforms, and AI-assisted creative solutions.\n\nI am continuously learning new technologies and developing my skills to work with businesses, startups, and international clients.',
  aboutMeText:
    'I am currently pursuing my B.Tech in Computer Engineering at Indus University, Ahmedabad.\n\nI have an interest in Generative AI, web development, Python programming, and digital creativity. I enjoy learning by building practical projects and experimenting with modern technologies.\n\nOver time, I have worked on different concepts, including e-commerce websites, productivity applications, asset management platforms, community websites, Python games, and AI-assisted websites.\n\nApart from programming, I enjoy creating presentations, digital posters, promotional graphics, and AI-assisted content.\n\nMy current focus is to strengthen my technical skills, explore AI-powered development, and provide valuable digital services to clients.',
  availability: 'Available for Freelance & Collaborative Projects',
  socialLinks: {
    github: 'https://github.com/Karankhandelwal18',
    linkedin: 'https://www.linkedin.com/in/karan-khandelwal-placeholder', // editable placeholder
    fiverr: 'https://www.fiverr.com/', // editable placeholder
    freelancer: 'https://www.freelancer.in/dashboard', // editable placeholder
  },
};

export const ABOUT_CARDS = [
  {
    title: 'Education',
    value: 'B.Tech Computer Engineering',
    subtitle: 'Indus University, Ahmedabad (3rd Year)',
    icon: 'GraduationCap',
    accent: 'blue',
  },
  {
    title: 'Location',
    value: 'Ahmedabad, India',
    subtitle: 'Gujarat, India (IST / UTC+5:30)',
    icon: 'MapPin',
    accent: 'cyan',
  },
  {
    title: 'Primary Focus',
    value: 'Generative AI & Web Dev',
    subtitle: 'Practical AI-Assisted Workflows',
    icon: 'Sparkles',
    accent: 'purple',
  },
  {
    title: 'Work & Services',
    value: 'Freelance Digital Services',
    subtitle: 'Open to International Clients & Startups',
    icon: 'Briefcase',
    accent: 'emerald',
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'programming',
    title: 'Programming Languages',
    description: 'Core languages learned through coursework, certification, and project implementations.',
    iconName: 'Code',
    skills: [
      { name: 'Python', levelDescription: 'Certified Training & Game/Web Dev', highlight: true },
      { name: 'C++', levelDescription: 'Academic Data Structures & Algorithms' },
      { name: 'HTML5', levelDescription: 'Semantic Layouts & Modern Web Standards', highlight: true },
      { name: 'CSS3', levelDescription: 'Responsive Styling & Modern Layouts', highlight: true },
      { name: 'JavaScript', levelDescription: 'Frontend DOM & Interactive Logic', highlight: true },
      { name: 'PHP', levelDescription: 'Basic Server-Side Scripting' },
    ],
  },
  {
    id: 'web-development',
    title: 'Web Development',
    description: 'Building responsive, modern, user-friendly digital web applications.',
    iconName: 'Layout',
    skills: [
      { name: 'Responsive Web Design', levelDescription: 'Mobile-first, Flexbox & CSS Grid', highlight: true },
      { name: 'Frontend Development', levelDescription: 'Component-driven user interfaces', highlight: true },
      { name: 'Website Development', levelDescription: 'End-to-end site structure & styling', highlight: true },
      { name: 'Basic PHP Development', levelDescription: 'Form processing & dynamic scripts' },
      { name: 'UI Implementation', levelDescription: 'Translating concepts into clean code', highlight: true },
      { name: 'AI-Assisted Development', levelDescription: 'Accelerating builds with AI tools', highlight: true },
    ],
  },
  {
    id: 'artificial-intelligence',
    title: 'Artificial Intelligence',
    description: 'Harnessing Generative AI tools and prompt engineering to build intelligent digital experiences.',
    iconName: 'Bot',
    skills: [
      { name: 'Generative AI', levelDescription: 'Core generative models & practical use', highlight: true },
      { name: 'Prompt Engineering', levelDescription: 'Iterative, structured prompt design', highlight: true },
      { name: 'AI-Assisted Development', levelDescription: 'Code generation, debugging, refactoring', highlight: true },
      { name: 'AI Image Generation', levelDescription: 'Visual asset concept creation', highlight: true },
      { name: 'AI Content Creation', levelDescription: 'Copywriting, marketing & summaries' },
      { name: 'AI Tools & Workflows', levelDescription: 'Integrating AI tools into pipelines' },
    ],
  },
  {
    id: 'creative-skills',
    title: 'Creative Skills',
    description: 'Visual communication, graphic design, and engaging digital media assets.',
    iconName: 'Palette',
    skills: [
      { name: 'Graphic Design', levelDescription: 'Digital visuals & marketing materials', highlight: true },
      { name: 'Poster Design', levelDescription: 'Promotional posters & event creative', highlight: true },
      { name: 'Presentation Design', levelDescription: 'Structured, visually clear decks', highlight: true },
      { name: 'Product Description Writing', levelDescription: 'Clear, compelling e-commerce copy' },
      { name: 'Content Writing', levelDescription: 'Articles, web copy & documentation' },
      { name: 'Basic Video Editing', levelDescription: 'Short-form promotional clips' },
      { name: 'Social Media Creatives', levelDescription: 'Instagram, LinkedIn & banners' },
    ],
  },
  {
    id: 'tools',
    title: 'Tools & Environments',
    description: 'Essential software, version control, and productivity tools used in day-to-day work.',
    iconName: 'Cpu',
    skills: [
      { name: 'ChatGPT', levelDescription: 'Research, scripting & creative brainstorming', highlight: true },
      { name: 'Google Antigravity', levelDescription: 'Agentic AI development platform', highlight: true },
      { name: 'Canva', levelDescription: 'Graphic design & presentation decks', highlight: true },
      { name: 'GitHub', levelDescription: 'Version control & project repositories', highlight: true },
      { name: 'Visual Studio Code', levelDescription: 'Primary coding environment', highlight: true },
      { name: 'AI Image Generation Tools', levelDescription: 'Midjourney/DALL-E/Canva AI concepts' },
    ],
  },
];

export const TARGET_CLIENTS = [
  { name: 'Restaurants & Cafes', icon: 'UtensilsCrossed', desc: 'Promotional posters, menus, website menus & social media' },
  { name: 'Small Businesses', icon: 'Store', desc: 'Professional online presence, digital marketing & brand assets' },
  { name: 'Startups', icon: 'Rocket', desc: 'Landing pages, pitch presentation decks & early web presence' },
  { name: 'Online Businesses', icon: 'ShoppingCart', desc: 'E-commerce product visuals, descriptions & banners' },
  { name: 'Individual Entrepreneurs', icon: 'UserCheck', desc: 'Personal portfolios, AI content & creative branding' },
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'content-creation',
    number: '01',
    title: 'AI-Powered Content Creation',
    tagline: 'High-impact copy tailored to your brand voice with AI assistance',
    description:
      'Leverage intelligent AI workflows to produce engaging, clear, and audience-tailored content for your brand, business, or marketing campaigns.',
    iconName: 'FileText',
    badge: 'Popular',
    features: [
      'AI-assisted content writing with human curation',
      'Website content & landing page headlines',
      'E-commerce product descriptions',
      'Social media captions & engagement posts',
      'Promotional copy & marketing blurbs',
      'Professional business content & memos',
    ],
    deliverables: 'Ready-to-publish text documents formatted for web and social distribution.',
  },
  {
    id: 'graphic-design',
    number: '02',
    title: 'Graphic Design',
    tagline: 'Eye-catching visual designs for commercial & social media promotions',
    description:
      'Custom visual creatives crafted to capture attention, communicate value, and elevate the visual identity of businesses, cafes, and shops.',
    iconName: 'Palette',
    badge: 'Creative',
    features: [
      'Social media posts (Instagram, Facebook, LinkedIn)',
      'High-impact business & event posters',
      'Restaurant & cafe promotional flyers',
      'Cafe marketing creatives & seasonal menus',
      'Online advertising banners & digital ads',
      'Product promotional graphics & showcases',
    ],
    deliverables: 'High-resolution PNG/JPG files and editable Canva or vector assets.',
  },
  {
    id: 'website-development',
    number: '03',
    title: 'Website Development',
    tagline: 'Modern, responsive, user-friendly websites designed for results',
    description:
      'Custom web development for businesses, personal brands, and food establishments. Fast-loading, mobile-friendly, and visually engaging.',
    iconName: 'Globe',
    badge: 'Core Service',
    features: [
      'Business websites with clean layouts',
      'Restaurant & cafe websites with digital menu views',
      'Personal portfolio websites for professionals',
      'Conversion-focused landing pages',
      'Responsive design across mobile, tablet, and desktop',
      'Clean HTML5, CSS3, JavaScript & modern frameworks',
    ],
    deliverables: 'Production-ready website source code, deployment setup, and launch support.',
  },
  {
    id: 'ai-image-generation',
    number: '04',
    title: 'AI Image Generation',
    tagline: 'Creative visual concepts generated with state-of-the-art AI prompts',
    description:
      'Produce creative, unique visual assets and concept art for marketing campaigns, digital products, and brand storytelling.',
    iconName: 'Sparkles',
    badge: 'Next-Gen',
    features: [
      'Promotional visuals & campaign themes',
      'Product concept mockups & contextual settings',
      'Creative image concepts & artistic backgrounds',
      'Digital marketing graphics & website hero art',
      'Social media visual hooks & stylized banners',
      'Custom prompt engineering for consistent aesthetic',
    ],
    deliverables: 'Curated high-resolution image packages and prompt recipe documentation.',
  },
  {
    id: 'presentation-design',
    number: '05',
    title: 'Presentation Design',
    tagline: 'Compelling pitch decks and educational slide decks',
    description:
      'Transform raw information and ideas into structured, visually engaging presentation decks that leave a lasting impression on your audience.',
    iconName: 'Presentation',
    badge: 'Business',
    features: [
      'Professional PowerPoint & Google Slides presentations',
      'Educational & seminar presentations',
      'Business pitch decks for startups',
      'Academic project presentation decks',
      'Attractive slide layouts, typography & data visualization',
      'Cohesive visual branding & color palettes',
    ],
    deliverables: 'Fully editable PowerPoint (.pptx) or Google Slides decks with PDF export.',
  },
  {
    id: 'video-editing',
    number: '06',
    title: 'Video Editing',
    tagline: 'Engaging short-form videos optimized for digital platforms',
    description:
      'Crisp video cuts, smooth pacing, and engaging captions designed for social media feeds, reels, and business promotions.',
    iconName: 'Video',
    badge: 'Trending',
    features: [
      'Short-form video editing for Reels, Shorts & TikTok',
      'Promotional video clips for events and products',
      'Social media video teasers & announcements',
      'Basic business promotional videos',
      'Audio leveling, caption syncing & dynamic transitions',
      'Brand watermarks & call-to-action overlays',
    ],
    deliverables: 'Exported MP4 video clips in 9:16 or 16:9 aspect ratios ready for publishing.',
  },
  {
    id: 'digital-marketing-creatives',
    number: '07',
    title: 'Digital Marketing Creatives',
    tagline: 'Cohesive visual packages designed to drive online engagement',
    description:
      'Comprehensive digital creative packages tailored to marketing campaigns, seasonal discounts, and brand awareness for local and online businesses.',
    iconName: 'Megaphone',
    badge: 'Full Suite',
    features: [
      'Promotional graphics across all social formats',
      'Seasonal promotional campaigns (festivals, offers)',
      'Digital advertising visuals for targeted ads',
      'Digital business creatives & brand kits',
      'Email newsletter header banners',
      'Consistent brand tone & typography standards',
    ],
    deliverables: 'Multi-platform graphic asset suites with consistent color styling.',
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'gym-ecommerce',
    title: 'Gym E-Commerce Website',
    category: 'Web Development / E-Commerce',
    categoryTag: 'ecommerce',
    shortDescription:
      'A gym-focused e-commerce website concept designed to provide a digital shopping experience for fitness-related products.',
    fullDescription:
      'A comprehensive fitness and e-commerce portal concept created to showcase interest in modern website development, product catalog presentation, and seamless online shopping experiences. The platform features structured product categories (supplements, workout gear, apparel), dynamic shopping cart management, user review sections, and an integrated workout guide to engage fitness enthusiasts.',
    keyFeatures: [
      'Product catalog with categorized fitness items and detailed product views',
      'Interactive shopping cart with quantity adjustment and order summary calculations',
      'Customer review system and ratings breakdown',
      'Workout guide section providing fitness routines alongside relevant products',
      'Clean responsive layout styled for modern dark-themed aesthetics',
      'Demonstrates practical interest in e-commerce workflows and user experience design',
    ],
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Python / Flask', 'SQLite', 'Responsive Design'],
    accentColor: '#38BDF8',
    isMockupPreview: true,
    demoUrl: '#',
    githubUrl: 'https://github.com/Karankhandelwal18',
  },
  {
    id: 'taskmasterpro',
    title: 'TaskMasterPro',
    category: 'Web Development / Productivity',
    categoryTag: 'productivity',
    shortDescription:
      'A task management application concept focused on organizing tasks and improving productivity.',
    fullDescription:
      'TaskMasterPro is a practical productivity tool concept created to demonstrate interest in developing software solutions for everyday efficiency. The application provides an intuitive task dashboard where users can create, categorize, schedule, and track tasks by priority. It explores how thoughtful interface design can reduce cognitive load and help individuals manage daily workflows.',
    keyFeatures: [
      'Interactive task dashboard with status columns (To Do, In Progress, Completed)',
      'Priority tags (High, Medium, Low) and due date reminders',
      'User authentication structure for individual task organization',
      'Clean, minimalist user interface with distraction-free layout',
      'Lightweight database persistence to store task states',
      'Focus on usability, quick task entry, and responsive layout',
    ],
    technologies: ['Python', 'Flask', 'HTML5', 'CSS3', 'JavaScript', 'SQLite'],
    accentColor: '#A855F7',
    isMockupPreview: true,
    demoUrl: '#',
    githubUrl: 'https://github.com/Karankhandelwal18',
  },
  {
    id: 'assetflow',
    title: 'AssetFlow',
    category: 'Web Development / Management',
    categoryTag: 'web',
    shortDescription:
      'An asset management project designed to organize and manage business or digital assets through a structured application interface.',
    fullDescription:
      'AssetFlow is a business asset and resource management system concept designed to bring order to workplace inventory. Inspired by modern SaaS design principles (Notion, Stripe), it provides structured tracking for physical equipment, software licenses, and shared resources. The project showcases how database-backed applications can handle dynamic depreciation, status tracking, and reporting.',
    keyFeatures: [
      'Centralized asset registry with search, category filtering, and status badges',
      'Dynamic valuation and asset lifecycle tracking over time',
      'Resource scheduling module to prevent overlapping reservations',
      'QR Code integration concept for physical asset tagging',
      'Role-based permissions structure (Admin, Manager, User)',
      'Exportable reporting center with client-side document generation concepts',
    ],
    technologies: ['Python', 'Flask', 'SQLite', 'CSS3 Glassmorphic UI', 'JavaScript', 'Chart.js'],
    accentColor: '#06B6D4',
    isMockupPreview: true,
    demoUrl: '#',
    githubUrl: 'https://github.com/Karankhandelwal18',
  },
  {
    id: 'community-website',
    title: 'Community Website',
    category: 'Web Development / Community',
    categoryTag: 'web',
    shortDescription:
      'A community-oriented website concept designed to provide a digital platform for users to interact, explore information, and engage with a community.',
    fullDescription:
      'A community web platform concept developed to explore how digital spaces can bring people together, organize collective announcements, and provide a central directory for members. The site features announcements, an interactive member directory, event listings, and community discussion boards, showcasing social interface design and community data structures.',
    keyFeatures: [
      'Community announcement board for notices, updates, and upcoming events',
      'Searchable member directory with profile overview cards',
      'Event calendar showcasing past achievements and future gatherings',
      'Discussion forum concept for collaborative communication',
      'Accessible responsive layout designed for community members across all age groups',
      'Demonstrates community data modeling and relational storage concepts',
    ],
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Python / Flask', 'SQLite', 'Bootstrap / Tailwind'],
    accentColor: '#10B981',
    isMockupPreview: true,
    demoUrl: '#',
    githubUrl: 'https://github.com/Karankhandelwal18',
  },
  {
    id: 'python-racing-game',
    title: 'Python Car Racing Game',
    category: 'Python / Game Development',
    categoryTag: 'python',
    shortDescription:
      'A Python-based car racing game featuring player name entry, high-score tracking, a top-five leaderboard, and vehicle selection.',
    fullDescription:
      'A complete 2D highway racing game built from scratch using Python and Pygame. It features an arcade physics engine, procedural graphics, persistent JSON high-score leaderboard, dynamic traffic AI with near-miss bonuses, and 5 distinct vehicles with unique handling profiles. The project represents deep hands-on programming logic, game loops, event handling, and data persistence in Python.',
    keyFeatures: [
      'Interactive Main Menu with player username entry and audio feedback',
      '5 Selectable Vehicles: Normal Car, Heavy Truck, Superbike, Bugatti Hypercar, and Ferrari Scuderia',
      'Arcade physics with steering tilt, tire skids, exhaust particles, and progressive speed scaling',
      'Persistent JSON leaderboard tracking Top 5 all-time high scores and personal bests',
      'Dynamic multi-lane enemy traffic AI with near-miss overtake combo score bonuses',
      'Pure Python architecture with zero external binary dependencies',
    ],
    vehicleRoster: ['Normal Sports Car', 'Heavy Hauler Truck', 'Lightning Superbike', 'Bugatti Hypercar', 'Ferrari Scuderia'],
    technologies: ['Python 3', 'Pygame', 'NumPy', 'JSON Data Storage', 'Arcade Physics', 'Game Loop Architecture'],
    accentColor: '#F59E0B',
    isMockupPreview: true,
    demoUrl: '#',
    githubUrl: 'https://github.com/Karankhandelwal18',
  },
  {
    id: 'ai-car-service',
    title: 'AI-Assisted Car Service Website',
    category: 'AI-Assisted Web Development',
    categoryTag: 'ai',
    shortDescription:
      'An automotive service website developed with assistance from AI tools, demonstrating how AI can support website development and digital business solutions.',
    fullDescription:
      'An advanced automotive service and workshop platform concept created by integrating modern web development with AI-assisted engineering tools. The project demonstrates how generative AI and AI coding assistants can accelerate complex system architecture, including supervisory vehicle diagnostic flows, automated service package selection, and real-time customer status monitoring.',
    keyFeatures: [
      'AI-assisted development workflow leveraging modern LLM tools for architecture & code generation',
      'Automated service decision flow for vehicle inspection, maintenance packages, and diagnostic pricing',
      'Interactive digital telemetry and station status dashboard concept',
      'Service booking portal with vehicle type, model, and service history selection',
      'Optimized responsive dark-mode interface with industrial tech aesthetics',
      'Demonstrates practical exploration of combining AI workflows with full-stack web applications',
    ],
    technologies: ['FastAPI / Python', 'React / HTML5', 'Tailwind CSS', 'AI Prompt Engineering', 'WebSocket Concepts', 'RESTful APIs'],
    accentColor: '#EC4899',
    isMockupPreview: true,
    demoUrl: '#',
    githubUrl: 'https://github.com/Karankhandelwal18',
  },
];

export const CERTIFICATIONS: CertificateItem[] = [
  {
    id: 'cert-python-reliance',
    numberTitle: 'CERTIFICATE 01',
    title: 'Python Development Certification Course',
    organization: 'Skill India – Reliance Foundation Skilling Academy',
    completionDate: 'March 14, 2026',
    duration: '90 Hours',
    description:
      'Completed an intensive 90-hour online skilling course covering foundational Python programming, core data structures, algorithms, object-oriented concepts, and software development foundations offered by Reliance Foundation Skilling Academy through Skill India Digital Hub (NSDC accredited).',
    modules: [
      'Python Syntax, Variables & Data Types',
      'Control Flow, Conditionals & Loops',
      'Functions, Arguments & Scope',
      'Data Structures: Lists, Dictionaries, Sets & Tuples',
      'File Handling & Exception Handling',
      'Object-Oriented Programming (OOP) in Python',
    ],
    verificationUrl: 'https://www.skillindiadigital.gov.in/',
    hasOriginalFile: true,
    pdfPath: '/certificates/internship_certificate.pdf', // fallback link
    badge: '90 Hours Certified',
  },
  {
    id: 'cert-datascience-internshala',
    numberTitle: 'CERTIFICATE 02',
    title: 'Data Science Certification Course',
    organization: 'Internshala Trainings',
    completionDate: 'Completed',
    duration: 'Multi-week Course',
    description:
      'Completed comprehensive Data Science training through Internshala, gaining introductory and foundational exposure to data science methodologies, analytical concepts, data exploration, and practical numerical libraries.',
    modules: [
      'Introduction to Data Science & Analytical Thinking',
      'Python for Data Science (NumPy & Pandas fundamentals)',
      'Data Cleaning, Exploration & Preprocessing',
      'Basic Statistical Analysis & Metrics',
      'Introductory Data Visualization Concepts',
    ],
    verificationUrl: 'https://trainings.internshala.com/',
    hasOriginalFile: false,
    badge: 'Data Science Foundation',
  },
  {
    id: 'cert-internship-jobprep',
    numberTitle: 'CERTIFICATE 03',
    title: 'Internship & Job Preparation – Certificate of Training',
    organization: 'Internshala Trainings',
    institution: 'Indus University',
    duration: '4-week online training',
    completionDate: '15 August 2025',
    certificateNumber: 'h6wj7mig6j1',
    description:
      'Successfully completed a 4-week online training program on Internship & Job Preparation. The training covered end-to-end career readiness skills including portfolio building, interview preparation, communication, and professional project execution.',
    modules: [
      'Getting Started with the Job Hunt',
      'Building up your Gears (Resume & Online Presence)',
      'Going at the Front (Interviews & Professional Communication)',
      'The Final Project (Comprehensive Career Assessment)',
    ],
    verificationUrl: 'https://trainings.internshala.com/verify_certificate',
    pdfPath: '/certificates/internship_certificate.pdf',
    hasOriginalFile: true,
    badge: 'Verified Credential',
  },
];

export const TIMELINE_JOURNEY: TimelineItem[] = [
  {
    year: 'Present • 3rd Year',
    title: 'B.Tech in Computer Engineering',
    subtitle: 'Indus University, Ahmedabad',
    description:
      'Pursuing third-year undergraduate engineering degree with a focus on core computer science subjects, algorithms, database systems, software engineering, and applied computing.',
    tag: 'Academic Foundation',
    iconName: 'GraduationCap',
  },
  {
    year: 'Skilling & Training',
    title: 'Python Development Mastery',
    subtitle: 'Reliance Foundation & Skill India (90 Hours)',
    description:
      'Completed formal 90-hour certification in Python programming. Applied theoretical concepts into real software projects including an arcade 2D car racing game and backend application logic.',
    tag: 'Core Programming',
    iconName: 'Code',
  },
  {
    year: 'Projects & Exploration',
    title: 'Full-Stack Web Development',
    subtitle: 'Practical Concept Implementations',
    description:
      'Developed multiple web applications across diverse domains: Gym E-commerce portal, TaskMasterPro productivity tool, AssetFlow management platform, and a Community website.',
    tag: 'Web Solutions',
    iconName: 'Layout',
  },
  {
    year: 'Emerging Tech',
    title: 'Generative AI & Modern Workflows',
    subtitle: 'AI-Assisted Development & Tools',
    description:
      'Deepening practical knowledge in Generative AI, structured prompt engineering, AI coding assistants (ChatGPT, Google Antigravity), and creative AI image generation workflows.',
    tag: 'AI Exploration',
    iconName: 'Sparkles',
  },
  {
    year: 'Client Services',
    title: 'Freelance Digital Services',
    subtitle: 'Serving Businesses, Startups & Online Brands',
    description:
      'Launched freelance offerings across AI-assisted content writing, graphic design, presentation decks, website development, and promotional media, aiming to collaborate with international clients.',
    tag: 'Freelance & Business',
    iconName: 'Rocket',
  },
];

export const WORKING_APPROACH: WorkingApproachItem[] = [
  {
    number: '01',
    title: 'Continuous Learning',
    description:
      'Technology evolves rapidly. I actively stay updated by studying new frameworks, exploring AI advancements, and turning curiosity into practical coding projects.',
    iconName: 'BookOpen',
    tag: 'Mindset',
  },
  {
    number: '02',
    title: 'Creative Problem Solving',
    description:
      'Combining analytical engineering thinking with creative design sensibilities to build solutions that not only work reliably but look visually compelling.',
    iconName: 'Lightbulb',
    tag: 'Strategy',
  },
  {
    number: '03',
    title: 'AI-Assisted Workflows',
    description:
      'Leveraging cutting-edge AI tools to accelerate development speed, brainstorm creative angles, refine code quality, and deliver high-value results faster.',
    iconName: 'Cpu',
    tag: 'Efficiency',
  },
  {
    number: '04',
    title: 'Client-Focused Approach',
    description:
      'Listening closely to client requirements, understanding target audiences, and prioritizing clear communication to deliver outcomes that align with business goals.',
    iconName: 'Users',
    tag: 'Collaboration',
  },
  {
    number: '05',
    title: 'Attention to Detail',
    description:
      'Focusing on responsive spacing, clean typography, accessible color contrast, and smooth interactive micro-states to ensure polished final deliveries.',
    iconName: 'CheckCircle2',
    tag: 'Quality',
  },
  {
    number: '06',
    title: 'Practical Development',
    description:
      'Prioritizing functional, maintainable, and readable code over unnecessary complexity. Building things that real users can easily navigate and benefit from.',
    iconName: 'Wrench',
    tag: 'Execution',
  },
];

export const FUTURE_INTERESTS = [
  { name: 'AI Engineering', desc: 'Building scalable software systems augmented with AI capabilities', icon: 'Cpu' },
  { name: 'Generative AI Applications', desc: 'Developing practical apps utilizing multi-modal LLMs', icon: 'Sparkles' },
  { name: 'AI Agents & Automation', desc: 'Exploring autonomous agent architectures and tool use', icon: 'Bot' },
  { name: 'Workflow Automation', desc: 'Streamlining repetitive digital tasks with smart pipelines', icon: 'RefreshCw' },
  { name: 'Advanced Web Development', desc: 'Building high-performance, modern full-stack web applications', icon: 'Globe' },
  { name: 'Python Systems & Backend', desc: 'Creating robust APIs, microservices, and automation scripts', icon: 'Terminal' },
  { name: 'AI-Powered Business Solutions', desc: 'Helping small businesses adopt accessible AI tools', icon: 'TrendingUp' },
  { name: 'Creative Technology', desc: 'Blending digital art, UI design, and generative media', icon: 'Palette' },
];
