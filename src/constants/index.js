import {
  beginner,
  cs50p,
  cs50x,
  hack,
  intermediate,
  tournament,
  ai,
  search,
  businesscard,
  firewithin,
  mern1,
  mern2,
  path,
  pong,
  quizzical,
  sonarqube,
  sort,
  stockexchange,
  sudoku,
  tenzies,
  tictactoe,
  travelreact,
  react,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  electron,
  tensorflow,
  threejs,
  greenieweb,
  chs,
  projectflux,
} from '../assets';

import beginnerpdf from '../pdf/beginner.pdf'
import intermediatepdf from '../pdf/intermediate.pdf'
import tournamentpdf from '../pdf/tournament.pdf'



export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'project',
    title: 'Project',
  },
  {
    id: 'certificate',
    title: 'Certificate',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Web Developer',
    icon: web,
  },
  {
    title: 'React Developer',
    icon: react,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'Content Creator',
    icon: creator,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'MongoDB',
    icon: mongodb,
  },
  {
    name: 'Three JS',
    icon: threejs,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'electron',
    icon: electron,
  },
  {
    name: 'tensorflow',
    icon: tensorflow,
  },
];

const experiences = [
  {
    title: 'Student',
    company_name: 'Cabramatta High School',
    icon: chs,
    iconBg: '#383E56',
    date: 'Aug 2019 - May 2023',
    points: [
      'Actively participated in and made valuable contributions to a Hackathon at Cabramatta High School.',
      'Demonstrated exceptional talent and skill by winning an international web competition.',
      'Achieved a distinguished academic standing, reflecting a strong commitment to learning and outstanding performance in web development, placing among the top 5% of students.',
      'Displayed a high level of professionalism, integrity, and teamwork, earning the respect and admiration of peers and mentors throughout the Hackathon and web competition.',
    ],
  },
  {
    title: 'Software Engineer',
    company_name: 'Project Flux',
    icon: projectflux,
    iconBg: '#E6DEDD',
    date: 'May 2022 - Aug 2023',
    points: [
      'Developed and deployed a web extension that increased user engagement by 50% and resulted in a 30% boost in overall revenue for the client.',
      'Implemented a web application using HTML, CSS, and JavaScript, resulting in a 20% reduction in page load time and a 15% increase in user retention.',
      'As a team lead at Project Flux, successfully delivered 10 major releases within strict timelines, achieving a 95% customer satisfaction rate.',
      'Ensured top-notch security for the app at Project Flux, reducing security incidents by 70% and receiving zero data breach incidents during my tenure.',
    ],
  },
  {
    title: 'Tech Manager / Director',
    company_name: 'Greenie Web',
    icon: greenieweb,
    iconBg: '#383E56',
    date: 'Aug 2022 - Present',
    points: [
      'Led a team of 30 developers at Greenie Web, ensuring the successful design and delivery of high-quality web applications, while identifying and preventing over 35 potentially fatal issues.',
      'Collaborated with international organizations and government agencies to decarbonize their digital infrastructure, resulting in an average 45% reduction in carbon emissions across all digital operations.',
      'Developed websites, chrome extensions, and desktop applications using HTML, CSS, JavaScript, and Electron.js, consistently meeting and exceeding client requirements.',
      'Demonstrated consistent professional growth, acquiring advanced skills in Electron.js, resulting in a 30% improvement in coding efficiency and effectiveness.',
    ],
  },
];

const testimonials = [
  {
    testimonial:
      'Your unwavering work ethic and remarkable collaboration skills served as a source of inspiration to the entire team.',
    name: 'Pratikshya Poudel',
    designation: 'SWE',
    company: 'Greenie Web',
    image:
      'https://api.dicebear.com/6.x/micah/svg?seed=Cali&baseColor=f9c9b6&earrings[]&ears=attached&eyeShadowColor[]&eyes=eyes,eyesShadow,round&facialHairProbability=0&glasses[]&glassesProbability=0&hair=pixie,full&mouth=laughing,smile,smirk&nose=pointed&shirt=crew&shirtColor=6bd9e9,9287ff,d2eff3,e0ddff,f4d150,f9c9b6,fc909f,ffeba4,ffedef,ffffff',
  },
  {
    testimonial:
      'Such a talented leader with strong technical skills. His skills and attitude motivate me to keep trying my best.',
    name: 'Aye Thu Zar Tun',
    designation: 'SWE',
    company: 'Greenie Web',
    image:
      'https://api.dicebear.com/6.x/micah/svg?seed=Snickers&baseColor=f9c9b6&earrings[]&ears=attached&eyeShadowColor[]&eyes=smiling&facialHairProbability=0&glasses[]&glassesProbability=0&hair=pixie&mouth=laughing&nose=pointed&shirt=crew&shirtColor=6bd9e9,9287ff,d2eff3,e0ddff,f4d150,f9c9b6,fc909f,ffeba4,ffedef,ffffff',
  },
  {
    testimonial:
      "Minh has a strong ability to motivate and inspire his team. He leads by example, setting high standards for professionalism, quality, and dedication.",
    name: 'Aboo',
    designation: 'SWE',
    company: 'Greenie Web',
    image:
      'https://api.dicebear.com/6.x/micah/svg?seed=Cali&baseColor=f9c9b6&earrings[]&ears=attached&eyeShadowColor[]&facialHairProbability=0&glasses[]&glassesProbability=0&hair=fonze&mouth=laughing,smile,smirk&nose=curve&shirt=collared&shirtColor=6bd9e9,9287ff,d2eff3,e0ddff,f4d150,f9c9b6,fc909f,ffeba4,ffedef,ffffff',
  },
];

const projects = [
  {
    name: 'Futuris Exchange',
    description:
      'Experience the future of trading with our MERN Stack platform. Seamlessly trade stocks and cryptocurrencies, empowering users to navigate the world of finance with ease and precision.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'express',
        color: 'pink-text-gradient',
      },
    ],
    image: stockexchange,
    source_code_link: 'https://github.com/minhvyha/Stock-Market',
  },
  {
    name: 'NoteX',
    description:
      'Simplify your life with our MERN Stack note-taking application. Seamlessly create, store, and organize your notes in one place, ensuring your ideas and important information are always at your fingertips.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'express',
        color: 'pink-text-gradient',
      },
    ],
    image: mern2,
    source_code_link: 'https://github.com/minhvyha/mern-note-page',
  },
  {
    name: 'MERN Test Lab',
    description:
      'Kickstart my MERN Stack journey with the hands-on testing project. Build, experiment, and sharpen your skills in full-stack development using MongoDB, Express.js, React, and Node.js.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'express',
        color: 'pink-text-gradient',
      },
    ],
    image: mern1,
    source_code_link: 'https://github.com/minhvyha/full-stack-mern',
  },
  {
    name: 'Tenzies',
    description:
      'Inspired by Scrimba, dive into my React-powered dice game. Challenge yourself to align all 10 dice with the same number, testing your strategy and luck in this captivating and addictive experience.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'typescript',
        color: 'orange-text-gradient',
      },
      {
        name: 'css',
        color: 'green-text-gradient',
      },
    ],
    image: tenzies,
    source_code_link: 'https://github.com/minhvyha/Tenzies',
  },
  {
    name: 'SearchSim',
    description:
      'A Python Flask-powered website that mimics the Google search page. Discover, explore, and perform advanced searches for images and keywords, all in a familiar and user-friendly interface.',
    tags: [
      {
        name: 'python',
        color: 'blue-text-gradient',
      },
      {
        name: 'flask',
        color: 'green-text-gradient',
      },
      {
        name: 'html',
        color: 'pink-text-gradient',
      },
    ],
    image: search,
    source_code_link: 'https://github.com/minhvyha/google-search',
  },
  {
    name: 'Quizzical',
    description:
      'Get ready to test your tech knowledge with our Scrimba-inspired website. Answer 5 multiple-choice questions about tech-related topics and challenge yourself to earn the highest score. Are you up for the challenge?',
    tags: [
      {
        name: 'javascript',
        color: 'green-text-gradient',
      },
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'html',
        color: 'pink-text-gradient',
      },
    ],
    image: quizzical,
    source_code_link: 'https://github.com/minhvyha/Quizzical',
  },
  {
    name: 'Sudoku Master',
    description:
      'Kickstart my MERN Stack journey with the hands-on testing project. Build, experiment, and sharpen your skills in full-stack development using MongoDB, Express.js, React, and Node.js.',
    tags: [
      {
        name: 'python',
        color: 'blue-text-gradient',
      },
      {
        name: 'pygame',
        color: 'green-text-gradient',
      },
      {
        name: 'game',
        color: 'pink-text-gradient',
      },
    ],
    image: sudoku,
    source_code_link: 'https://github.com/minhvyha/Sudoku',
  },
  {
    name: 'AI Pong Pro',
    description:
      'Witness the future of gaming as our Python Pygame-powered project takes Pong to new heights. Experience four levels of AI opponents, powered by TensorFlow, in this thrilling and challenging arcade classic.',
    tags: [
      {
        name: 'python',
        color: 'blue-text-gradient',
      },
      {
        name: 'tensorflow',
        color: 'pink-text-gradient',
      },
      {
        name: 'pygame',
        color: 'green-text-gradient',
      },
    ],
    image: ai,
    source_code_link: 'https://github.com/minhvyha/AI_Play_Pong',
  },
  {
    name: 'TicTacPy',
    description:
      "Experience the classic game of Tic Tac Toe on your desktop. Our Python Pygame-powered project lets you challenge friends or AI opponents in this timeless battle of X's and O's.",
    tags: [
      {
        name: 'python',
        color: 'blue-text-gradient',
      },
      {
        name: 'game',
        color: 'green-text-gradient',
      },
      {
        name: 'pygame',
        color: 'pink-text-gradient',
      },
    ],
    image: tictactoe,
    source_code_link: 'https://github.com/minhvyha/Tic-Tac-Toe-Game',
  },
  {
    name: 'SortVis',
    description:
      'Dive into the world of sorting algorithms with our Python Pygame-powered software. Experience the mesmerizing visualizations as random lists are sorted, gaining insights into the efficiency and elegance of different sorting techniques.',
    tags: [
      {
        name: 'python',
        color: 'blue-text-gradient',
      },
      {
        name: 'pygame',
        color: 'green-text-gradient',
      },
      {
        name: 'sorting',
        color: 'pink-text-gradient',
      },
    ],
    image: sort,
    source_code_link: 'https://github.com/minhvyha/Sorting/',
  },
  {
    name: 'Business Card',
    description:
      'Showcase your professional identity with our React-powered website. Display your business card digitally, providing an engaging and modern way for others to connect with you and explore your professional information.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'vitejs',
        color: 'green-text-gradient',
      },
      {
        name: 'html',
        color: 'pink-text-gradient',
      },
    ],
    image: businesscard,
    source_code_link: 'https://github.com/minhvyha/Business-Card-React',
  },
  {
    name: 'Wanderlust',
    description:
      'Explore captivating destinations with our React-powered travel website. Immerse yourself in stunning visuals and comprehensive information about various locations, inspiring travelers to embark on unforgettable journeys.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'vite',
        color: 'orange-text-gradient',
      },
      {
        name: 'javascript',
        color: 'green-text-gradient',
      },
    ],
    image: travelreact,
    source_code_link: 'https://github.com/minhvyha/React-Travel',
  },
  {
    name: 'Pong Duel',
    description:
      'Step into the world of retro gaming with our Python Pygame-powered desktop project. Engage in thrilling 2-player Pong matches, testing your skills and reflexes in this classic arcade game.',
    tags: [
      {
        name: 'python',
        color: 'blue-text-gradient',
      },
      {
        name: 'game',
        color: 'pink-text-gradient',
      },
      {
        name: 'pygame',
        color: 'green-text-gradient',
      },
    ],
    image: pong,
    source_code_link: 'https://github.com/minhvyha/Pong',
  },
  {
    name: 'Fire Within',
    description:
      'Ignite your online presence with our award-winning website. Built for the prestigious web competition by Grok Learning, we proudly clinched the first place, delivering a captivating and innovative digital experience.',
    tags: [
      {
        name: 'web comp',
        color: 'blue-text-gradient',
      },
      {
        name: 'html',
        color: 'orange-text-gradient',
      },
      {
        name: 'css',
        color: 'green-text-gradient',
      },
    ],
    image: firewithin,
    source_code_link: 'https://github.com/minhvyha/grok-competition',
  },
  {
    name: 'Sonarqube',
    description:
      'Unleash the power of code quality with our Greenie Web interview-inspired clone website. Explore innovative features that enhance code analysis and ensure optimal software development practices.',
    tags: [
      {
        name: 'clone',
        color: 'blue-text-gradient',
      },
      {
        name: 'html',
        color: 'orange-text-gradient',
      },
      {
        name: 'sonarqube',
        color: 'green-text-gradient',
      },
    ],
    image: sonarqube,
    source_code_link: 'https://github.com/minhvyha/SonarQube',
  },
  {
    name: 'PathViz',
    description:
      'Dive into the world of pathfinding algorithms with our Python Pygame-powered software. Visualize the exploration of shortest paths from a start point to an end point, unraveling the intricacies of efficient navigation.',
    tags: [
      {
        name: 'python',
        color: 'blue-text-gradient',
      },
      {
        name: 'pygame',
        color: 'orange-text-gradient',
      },
      {
        name: 'visualisation',
        color: 'green-text-gradient',
      },
    ],
    image: path,
    source_code_link: 'https://github.com/minhvyha/Path_Finding',
  },
];

const certificate = [
  {
    name: 'CS50 Python',
    description:
      'An introduction course to programming using Python. Learn how to read and write code as well as how to test and "debug" it. Hands-on opportunities for lots of practice. Exercises inspired by real-world problems.',
    tags: [
      {
        name: 'cs50',
        color: 'blue-text-gradient',
      },
      {
        name: 'harvard',
        color: 'green-text-gradient',
      },
      {
        name: 'python',
        color: 'pink-text-gradient',
      },
    ],
    image: cs50p,
    source_code_link: 'https://certificates.cs50.io/579f49c5-1ee4-4d63-8d3e-580b65fb1b22.pdf?size=letter',
  },
  {
    name: 'CS50: Introduction to Computer Science',
    description:
      'Languages include C, Python, SQL, and HTML | CSS | JS. I finished the course with 𝟑𝟎% less time and more challenging problem sets that under 𝟐𝟓% of students attending the course completed.',
    tags: [
      {
        name: 'cs50',
        color: 'blue-text-gradient',
      },
      {
        name: 'harvard',
        color: 'green-text-gradient',
      },
      {
        name: 'web development',
        color: 'pink-text-gradient',
      },
    ],
    image: cs50x,
    source_code_link: 'https://certificates.cs50.io/a7cbd9c7-98c6-4478-aca8-3f1c747bcb5a.png?size=A4',
  },
  {
    name: 'Hackathon: AI for Inclusion',
    description:
      "I led and supported the design and presentation of my team's idea and I helped my team achieve the score 30% higher than other students' team.",
    tags: [
      {
        name: 'hackathon',
        color: 'blue-text-gradient',
      },
      {
        name: 'ai',
        color: 'green-text-gradient',
      },
      {
        name: 'team building',
        color: 'pink-text-gradient',
      },
    ],
    image: hack,
    source_code_link: 'https://photos.app.goo.gl/NaZ6uvMkN2yUNFTZ9',
  },
  {
    name: 'Web Competition Tournament',
    description:
      'A web competition hosted on Grok Learning with 100+ international participants, and I won this tournament with a win rate of 84%.',
    tags: [
      {
        name: 'web comp',
        color: 'blue-text-gradient',
      },
      {
        name: 'grok',
        color: 'green-text-gradient',
      },
      {
        name: 'international',
        color: 'pink-text-gradient',
      },
    ],
    image: tournament,
    source_code_link: tournamentpdf,
  },
  {
    name: 'NCSS Intermediate Challenge',
    description:
      'An intermediate Python competition hosted on Grok Learning with more than 6600+ international participants. I completed this competition with a perfect score and ranked first in this competition.',
    tags: [
      {
        name: 'challenge',
        color: 'blue-text-gradient',
      },
      {
        name: 'grok',
        color: 'green-text-gradient',
      },
      {
        name: 'international',
        color: 'pink-text-gradient',
      },
    ],
    image: intermediate,
    source_code_link: intermediatepdf,
  },
  
  {
    name: 'NCSS Beginner Challenge',
    description:
      'A Python competition hosted on Grok Learning with more than 15000+ international participants. I completed this competition with a perfect score and ranked first in this competition.',
    tags: [
      {
        name: 'challenge',
        color: 'blue-text-gradient',
      },
      {
        name: 'grok',
        color: 'green-text-gradient',
      },
      {
        name: 'international',
        color: 'pink-text-gradient',
      },
    ],
    image: beginner,
    source_code_link: beginnerpdf,
  },
];

export {
  services,
  technologies,
  experiences,
  testimonials,
  projects,
  certificate,
};
