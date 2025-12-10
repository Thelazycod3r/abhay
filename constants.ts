

import { 
  Palette, 
  Monitor, 
  Video, 
  Layout, 
  Share2,
  Box,
  Smartphone,
  PenTool,
  Search,
  Code
} from 'lucide-react';

export const NAV_LINKS = [
  { name: 'Work', href: '#projects' },
  { name: 'Services', href: '#services' },
  { name: 'About', href: '#skills' },
  { name: 'Contact', href: '#contact' },
];

export const PROJECTS = [
  {
    id: 1,
    title: 'Neon Flux Shop',
    category: 'E-Commerce',
    topic: 'WEB DESIGN',
    description: 'A futuristic e-commerce experience for streetwear fashion brands featuring 3D product previews and WebGL interactions.',
    image: 'https://blogger.googleusercontent.com/img/a/AVvXsEgI52KqD1crK3DWmHeiwq2RsyxsetvKKMkCsz7o2qG9NReh409y2mJ-0P1oBQuhIStWc5VQqtLeafdyq-nN3dKS_phBNrWfUe9oiPTBU5pYIFp2XWot51iwtqrQyXEzXr4cD3pjaySgA-ewScNmsrwfLR-TwB4b_15fWH6rb7svW_EqYRD4nBwDbVBzyC_t',
    link: '#'
  },
  {
    id: 2,
    title: 'Vertex Finance',
    category: 'Fintech',
    topic: 'PRODUCT DESIGN',
    description: 'Complete dashboard redesign for a fintech startup focusing on data visualization, clarity, and real-time trading metrics.',
    image: 'https://blogger.googleusercontent.com/img/a/AVvXsEgniEOcuARmDnN9OPo8zC1WLsF1cDq-EW_vkMm1Cdp1keaFS4dHo9Uew9RTXdDcYDreERS4yi6ikGwS2vkg_MMnig_5slPGrLH18GOe02Z_KylKyrJPC7lhGcxnbwzJAZdZn--YvHJYIkemInf3JvYeiW62-ZHAYWpmwJbnRqzHgWVg1BcCr9OExUoB2nWU',
    link: '#'
  },
  {
    id: 3,
    title: 'Aura Festival',
    category: 'Events',
    topic: 'BRANDING',
    description: 'Digital identity and ticket booking platform for an international electronic music festival, featuring immersive scrolling.',
    image: 'https://blogger.googleusercontent.com/img/a/AVvXsEhnVSXI-2IbtCpR0rl3J8c-z_pFD0AwUipnvle-mN9pPaJr7m8UeRjZwX3IJe-B3R9gP-RQnonHye4CNtiXjfOs7ceNulxAUTxMSo2aOzKgqSN3q6HvGwv8KBeZCehmIF7hcYhGq_eL7Ns7T24CAJSmGa5lv2b1l8viNgSYWtY7Qh_kMO5en5UqC4tGsZiu',
    link: '#'
  },
  {
    id: 4,
    title: 'Cyber Portfolio',
    category: 'Personal',
    topic: 'DEVELOPMENT',
    description: 'An experimental portfolio template built with Three.js and React Fiber, pushing the boundaries of browser performance.',
    image: 'https://blogger.googleusercontent.com/img/a/AVvXsEipTgEL5v-BAXJgRaW2cbxxo7xe031jvqylxSzR5CMM2sVR3SAzH7hyY5HLsNZI90dVGKbiaIfZqk3dXx5xK191_jX0C8ZFN8hE6lFj5HxSK3WRJbVmRBYkCIcSy0IJ3E3PQWhI3d_WTlESB4dRC4f9ZPtV-tR5bcDiSAI6w2w94HvZg-mAfdSpLkp_zQfF',
    link: '#'
  },
  {
    id: 5,
    title: 'Abstract Realities',
    category: 'Art Direction',
    topic: 'VISUALS',
    description: 'Explorations in digital surrealism and texture generation using procedural workflows.',
    image: 'https://blogger.googleusercontent.com/img/a/AVvXsEiyT7gZbyVq0MWYDaJw9AzLqlfZX_ov-equrbFq29juSEKmYZlEkWym1TiMuQTx8ZYqFcBut7dBWDXPEDoL3qTVKqL9lbVWSkd-jOw3w5dm_jsb2PYmObK2ld5QMk54ehnK0AKeWQ0Qm1WxAMZRrlW0B993pWuew01glDQcbm0O9eSjJYRf2_qSNDHqwMYD',
    link: '#'
  }
];

export const DESIGN_GALLERY = [
  'https://blogger.googleusercontent.com/img/a/AVvXsEhdhBHg0bXGOQ5-EI3DgIo3UVJiC-LOuZMVwjFXYRzZRpgpMQUZQ4z4-a2TxjxHs5cWMGfWyhKXquajWpnwaCmSbGLUdfTYobhfYK6_TNeredRwwkGBQK3LOkdMEQUPkqp--UJVP1u6jdXlFZ2iTFizgDuduDqiwhkrZsM-hVfN54FlMJ3GfwzdG33YcHYl',
  'https://blogger.googleusercontent.com/img/a/AVvXsEgPD3e09iCpu3FUV-oEpf5HvcV8Rc6F7_MAPcRMiiTYgswqapotgKlTaU8eJ4BV1yKxmWrGzc1gjhxe8Csi0bzmyiWIkuwX8Vh4ZD50KYRXneY-skEMX2TaPFJNLn8WIi7zcP3HweJ0Ht0eFwEZw5J2vhPQmSZOE8L5Sb2fEdcgO9AuAESaw4SS6tzvI8Xf',
  'https://blogger.googleusercontent.com/img/a/AVvXsEjYPQvX1ydW2XkY1USU391Pd6120HuzX2-BeWcrVZOC44YQGIH40BJcuR6hZrF1MTJJLi0E_OrC7NM0jy_ZtFyEGTotR4pbqI79Woxng_oRzuOTu0l8dN8zDthtKy1J0chPCSp4_M873Py9Hnfyc7Ag5T5bd6bkK5cQHtgmWTcDgfGstJ2idbQRpvIlZnX',
  'https://blogger.googleusercontent.com/img/a/AVvXsEi4qNZWh3UaKXOqzhregPBegPIW4Lspt4E7McAI59lB2dmZ5dHkYD-I799YFLt8uan4dS14eACsf5PoWEE6RTcSGeS03BegzP1eSYuX4obgCRwik-OwtSDOLe_kDkajOI3HwvnPDUEWTKmXLmpwFBI_VSqM_xxXyHCF75Q3dwy09bwhRLFQ0GM74aB2XtLB',
  'https://blogger.googleusercontent.com/img/a/AVvXsEi18aLcqh0KPDtrmGXZggSG1GP0PediS_7Wm9Z7oAjBoaYjhJLze7eb2qKs9q05V1oe3qRwfpc-ODhxsPD_UMszmXpn-hRahxHb-wxLQ_fffRDBn7FIVAoLRvyjGKtp3-TEPD1JvdF48C1JGJzHx6r94tSOPaalZ8hQD-6cYb3T-lI0yOgmaab8t2UqtEah',
  'https://blogger.googleusercontent.com/img/a/AVvXsEgG-9Nn2OWuLwxlJvMAOn6MA-2_0LiDUN-ENhlYqj_yloqepUqSy4PTOg_yrzgo-up0aIJT8bLhLk7AHqtxfHbPsaFrYV5TJZdMdPAX-1_JPJfLsiT2xk6eBlJz_4ddLx3c2_esjdvQgBlLe0TGvxJnxFqa_P2j3p0P_YVVIpVrjwBSvzytWrIhnSS_-qOd',
  'https://blogger.googleusercontent.com/img/a/AVvXsEjcjZ-zTQf1yyNs4fEvTuEcylR-Hcggx3_yfS4AJV1TIRoL5hajM_2MFdVEFoe-WjA6B-Lng3MyTqP-xm3ivjznyzH8tMlmkIiMHmF3LcQxovR5ePsKyqV4u7a05NlJf2P_6Sxdkam5qmnfRweEk7WSTzA1ohTc0CK6ziwh5W5ok2IEXMeMQAQBIa0Zaa_-',
  'https://blogger.googleusercontent.com/img/a/AVvXsEhsbw7sTA201i-1IONBvkaG6GQGr2wAWdYQ3XngmhmQkicDnJKEN5U4-08QNJcQHnpBUwOyzQNT3RTR5yYey8oHqxTPRrzXfjkwawqZ8Q79dXIv30JhJKt6qVAfI1fD1hIqA_DqL8HaEdmTeNtZbt7MlC2JFiWGHQBR0ZsT0Gz9qzv9qlPXUb1rK-vPFhWI',
  'https://blogger.googleusercontent.com/img/a/AVvXsEheFhS8X6fxWUIRCp2gLDThat1sPG7X3jOeCHs0NkbmpDu8iwvJmCgnhbe-PL0g091QWd7GjE0eaErm7PcqhG1MEb8BPK8yMlBbYTeNlZWfaMpScdxIfvyl25quIz9ccAC4S8s6eIQSsiFTw76d1LN4Yuejgm3XuojBBRvIC410x9z-rzoBl0OFJ2xIajbM'
];

export const SERVICES = [
  {
    title: 'Web Design',
    description: 'Responsive, accessible, and high-performance websites.',
    icon: Monitor
  },
  {
    title: 'UI/UX Design',
    description: 'User-centric interfaces designed for conversion and delight.',
    icon: Layout
  },
  {
    title: 'Motion Graphics',
    description: 'Bringing brands to life with smooth animations and transitions.',
    icon: Video
  },
  {
    title: 'Branding',
    description: 'Building memorable identities that resonate with audiences.',
    icon: Palette
  },
  {
    title: '3D Visuals',
    description: 'Abstract and realistic 3D modeling for modern digital aesthetics.',
    icon: Box
  },
  {
    title: 'App Design',
    description: 'Native mobile application design for iOS and Android.',
    icon: Smartphone
  },
  {
    title: 'Art Direction',
    description: 'Guiding visual strategy for campaigns and products.',
    icon: PenTool
  },
  {
    title: 'Social Media',
    description: 'Engaging creative content for social platforms.',
    icon: Share2
  },
  {
    title: 'Strategy',
    description: 'Product thinking and roadmap planning.',
    icon: Search
  },
  {
    title: 'Development',
    description: 'Frontend implementation with React and Modern CSS.',
    icon: Code
  }
];

export const SKILLS = [
  'Figma', 'Adobe XD', 'Photoshop', 'Illustrator', 
  'After Effects', 'Premiere Pro', 'HTML5', 'CSS3', 
  'JavaScript', 'React', 'Tailwind CSS', 'Blender'
];

export const CONTACT_INFO = {
  email: 'abhaykay11@gmail.com',
  phone: '+91 7795180891',
  location: 'India'
};
