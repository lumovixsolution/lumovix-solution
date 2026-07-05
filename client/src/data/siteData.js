import { Monitor, Smartphone, FolderOpen, GraduationCap, PartyPopper } from 'lucide-react'

export const services = [
  {
    id: 'web-development',
    icon: Monitor,
    title: 'Web Development',
    description:
      'Custom websites and web applications built with modern frameworks. Responsive, fast, and tailored to your business needs.',
    longDescription:
      'We build powerful, scalable websites and web applications that help your business stand out online. From landing pages to full-stack platforms, every project is crafted with clean code, modern design, and performance in mind.',
    color: 'purple',
    features: [
      'Responsive & mobile-friendly design',
      'Custom UI/UX tailored to your brand',
      'Fast loading & SEO optimized',
      'Admin dashboards & CMS integration',
      'E-commerce & payment gateways',
      'Ongoing maintenance & support',
    ],
    technologies: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS', 'Express'],
  },
  {
    id: 'mobile-development',
    icon: Smartphone,
    title: 'Mobile Application Development',
    description:
      'Native and cross-platform mobile apps for iOS and Android. Seamless user experiences that engage your audience.',
    longDescription:
      'Reach your customers on the go with beautifully designed mobile apps. We develop native and cross-platform applications that deliver smooth performance, intuitive navigation, and engaging user experiences.',
    color: 'indigo',
    features: [
      'iOS & Android development',
      'Cross-platform with React Native',
      'Push notifications & real-time updates',
      'Offline mode & data sync',
      'App Store & Play Store deployment',
      'API integration & backend setup',
    ],
    technologies: ['React Native', 'Firebase', 'Node.js', 'MongoDB', 'Expo'],
  },
  {
    id: 'portfolio',
    icon: FolderOpen,
    title: 'Portfolio',
    description:
      'Showcase your work with stunning portfolio websites. Stand out with creative designs that highlight your achievements.',
    longDescription:
      'Make a lasting first impression with a portfolio website that showcases your skills, projects, and personality. Perfect for developers, designers, freelancers, and students who want to stand out to employers and clients.',
    color: 'violet',
    features: [
      'Personal branding & unique design',
      'Project gallery with case studies',
      'Skills & experience timeline',
      'Downloadable resume/CV section',
      'Contact form integration',
      'Dark/light mode toggle',
    ],
    technologies: ['React', 'Tailwind CSS', 'Vite', 'Framer Motion'],
  },
  {
    id: 'assignment-support',
    icon: GraduationCap,
    title: 'Assignment Support',
    description:
      'Expert guidance for academic and technical projects. Get professional help with coding assignments and research work.',
    longDescription:
      'Struggling with a coding assignment or final year project? Our team provides expert guidance on programming assignments, research projects, and technical documentation — helping you understand concepts while delivering quality work on time.',
    color: 'deep',
    features: [
      'Programming assignment help',
      'Final year project guidance',
      'Code review & debugging',
      'Report & documentation writing',
      'Database design & ER diagrams',
      'Presentation & demo preparation',
    ],
    technologies: ['Java', 'Python', 'C#', 'React', 'MySQL', 'MongoDB'],
  },
  {
    id: 'creative-e-invitation',
    icon: PartyPopper,
    title: 'Creative E-Invitation',
    description:
      'Beautiful digital invitations for weddings, birthdays, and special events. Animated, shareable, and designed to impress your guests.',
    longDescription:
      'Make your special moments unforgettable with stunning digital e-invitations. Share via WhatsApp, social media, or email — complete with animations, RSVP forms, event details, and personalized designs that wow your guests.',
    color: 'purple',
    features: [
      'Wedding & birthday invitations',
      'Animated intro & transitions',
      'RSVP form with guest count',
      'Event schedule & venue map',
      'Photo gallery & love story section',
      'WhatsApp & social media sharing',
    ],
    technologies: ['React', 'Tailwind CSS', 'Framer Motion', 'CSS Animations'],
  },
]

export const projects = [
  {
    id: 'royal-wedding-invite',
    title: 'Royal Wedding E-Invitation',
    category: 'Creative E-Invitation',
    serviceId: 'creative-e-invitation',
    description:
      'An elegant animated wedding invitation with RSVP form, event schedule, photo gallery, and shareable link for guests.',
    gradient: 'from-pink-500 to-lumovix-purple',
    image: '/assets/projects/project-wedding-invite.png',
    technologies: ['React', 'Tailwind CSS', 'Framer Motion'],
    features: ['Animated intro', 'RSVP form', 'Event timeline', 'Photo gallery', 'WhatsApp share'],
    demoUrl: null,
    demoVideo: '/assets/demos/wedding-invitation.mp4', // MP4 file හෝ YouTube link
    year: '2025',
  },
  {
    id: 'opening-ceremony-invite',
    title: 'Opening Ceremony Invitation',
    category: 'Creative E-Invitation',
    serviceId: 'creative-e-invitation',
    description:
      'An elegant digital opening ceremony invitation with event schedule, venue details, and shareable link — perfect for shop launches and corporate events.',
    gradient: 'from-amber-400 to-lumovix-violet',
    image: '/assets/projects/project-opening-ceremony.png',
    technologies: ['React', 'Tailwind CSS', 'CSS Animations'],
    features: ['Animated intro', 'Event schedule', 'Venue map', 'RSVP form', 'WhatsApp share'],
    demoUrl: null,
    demoVideo: '/assets/demos/opening-invitation.mp4',
    year: '2025',
  },
  {
    id: 'lumovix-website',
    title: 'Lumovix Solution Website',
    category: 'Web Development',
    serviceId: 'web-development',
    description:
      'Modern corporate website for Lumovix Solution with responsive design, service showcase, and contact integration.',
    gradient: 'from-lumovix-purple to-lumovix-violet',
    image: '/assets/projects/project-lumovix-website.png',
    technologies: ['React', 'Vite', 'Tailwind CSS'],
    features: ['Responsive layout', 'Service sections', 'Contact form', 'Smooth navigation'],
    demoUrl: '/',
    year: '2026',
  },
  {
    id: 'coffee-shop',
    title: 'Coffee Shop Website',
    category: 'Web Development',
    serviceId: 'web-development',
    description:
      'A warm and inviting coffee shop website with online menu, location map, gallery, and contact integration for local cafes.',
    gradient: 'from-amber-700 to-lumovix-purple',
    image: '/assets/projects/project-coffee-shop.png',
    technologies: ['React', 'Tailwind CSS', 'Vite'],
    features: ['Online menu', 'Location & hours', 'Photo gallery', 'Contact form', 'Mobile responsive'],
    demoUrl: null,
    demoVideo: '/assets/demos/coffee-shop.mp4',
    year: '2025',
  },
  {
    id: 'developer-portfolio',
    title: 'Developer Portfolio Site',
    category: 'Portfolio',
    serviceId: 'portfolio',
    description:
      'A sleek personal portfolio for a software developer featuring project gallery, skills section, and downloadable resume.',
    gradient: 'from-lumovix-deep to-lumovix-violet',
    image: '/assets/projects/project-developer-portfolio.png',
    technologies: ['React', 'Tailwind CSS', 'Vite'],
    features: ['Project showcase', 'Skills timeline', 'Contact form', 'Dark mode'],
    demoUrl: null,
    demoVideo: '/assets/demos/portfolio.mp4',
    year: '2025',
  },
  {
    id: 'fashion-store',
    title: 'Fashion Store Website',
    category: 'Web Development',
    serviceId: 'web-development',
    description:
      'A stylish fashion boutique website with product catalog, category filters, and modern e-commerce layout for clothing brands.',
    gradient: 'from-pink-500 to-lumovix-violet',
    image: '/assets/projects/project-fashion-store.png',
    technologies: ['React', 'Tailwind CSS', 'Vite'],
    features: ['Product catalog', 'Category filters', 'Responsive design', 'Brand showcase', 'Contact integration'],
    demoUrl: null,
    demoVideo: '/assets/demos/fashion-store.mp4',
    year: '2025',
  },
]

export const processSteps = [
  {
    step: '01',
    title: 'Consult',
    description:
      'We discuss your ideas, goals, and requirements. Share your vision and we\'ll understand exactly what you need.',
  },
  {
    step: '02',
    title: 'Design',
    description:
      'We create wireframes and visual designs tailored to your brand. You review and approve before development begins.',
  },
  {
    step: '03',
    title: 'Develop',
    description:
      'Our team builds your project using modern technologies. Regular updates keep you informed throughout the process.',
  },
  {
    step: '04',
    title: 'Deliver',
    description:
      'We launch your project, provide training if needed, and offer ongoing support to ensure your success.',
  },
]
export const testimonials = [
  {
    id: 1,
    name: 'Kasun Perera',
    project: 'Wedding E-Invitation',
    review:
      'Lumovix created a beautiful digital wedding invitation for us. Our guests loved the animations and RSVP feature. Highly recommended!',
    rating: 5,
  },
  {
    id: 2,
    name: 'Dilani Fernando',
    project: 'Portfolio Website',
    review:
      'They built my developer portfolio from scratch. Clean design, fast loading, and exactly what I envisioned. Great team to work with.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Ravindu Jayawardena',
    project: 'Mobile App Development',
    review:
      'Professional service from start to finish. The SmartShop app they built for my business has increased our online orders significantly.',
    rating: 5,
  },
  {
    id: 4,
    name: 'Nethmi Silva',
    project: 'Assignment Support',
    review:
      'Got excellent help with my final year project. They explained everything clearly and delivered on time. Thank you Lumovix!',
    rating: 5,
  },
]

export const faqs = [
  {
    question: 'How much does a project cost?',
    answer:
      'Pricing depends on the scope and complexity of your project. A simple portfolio website starts from around LKR 15,000, while custom web apps and mobile apps are quoted based on your requirements. Contact us for a free estimate.',
  },
  {
    question: 'How long does a project take?',
    answer:
      'Timeline varies by project type. E-invitations typically take 3–5 days, portfolio websites 1–2 weeks, and larger web/mobile apps 3–6 weeks. We\'ll provide a clear timeline during our initial consultation.',
  },
  {
    question: 'What payment methods do you accept?',
    answer:
      'We accept bank transfers, eZ Cash, and other popular Sri Lankan payment methods. Typically 50% upfront to start the project and 50% upon delivery. Flexible payment plans available for larger projects.',
  },
  {
    question: 'Do you offer revisions?',
    answer:
      'Yes! We include 2–3 rounds of revisions during the design phase and minor adjustments after delivery. We want you to be fully satisfied with the final product.',
  },
  {
    question: 'Can I see progress during development?',
    answer:
      'Absolutely. We share regular updates via WhatsApp or email, and you can preview your project at key milestones before final delivery.',
  },
  {
    question: 'Do you provide support after launch?',
    answer:
      'Yes, we offer 30 days of free support after delivery for bug fixes and minor tweaks. Extended maintenance packages are also available.',
  },
]

export function scrollToContact() {
  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
}
