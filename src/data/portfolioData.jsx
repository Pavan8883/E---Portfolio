// Portfolio Data extracted from resume
export const portfolioData = {
  personalInfo: {
    name: 'Sai Pavan Kumar Mutyala',
    title: 'Computer Science and Engineering Student',
    bio: 'I am a passionate web developer and machine learning enthusiast pursuing my B.Tech in CSE.',
    email: 'saipavankumar.m23@iiits.in',
    phone: '+91 88856 31348',
    location: 'Bapatla, Andhra Pradesh, India',
    age: 20,
    education: 'Bachelor of Technology in Computer Science and Engineering (UG - 3)',
    profileImage: '/profile2.jpeg',
    github: 'https://github.com/Pavan8883',
    linkedin: 'https://www.linkedin.com/in/pavan157/'
  },
  education: [
    {
      degree: 'Bachelor of Technology in Computer Science and Engineering',
      institution: 'Indian Institute of Information Technology, Sri City, Andhra Pradesh',
      year: '08/2023 – Present',
      gpa: '9.02',
      description: 'Actively learning and exploring new technologies. Coursework includes Data Structures and Algorithms, Operating Systems, Computer Networks, Database Management Systems, and Web Development.'
    },
    {
      degree: '12th Standard',
      institution: 'Sri Chaitanya Junior College, Bapatla, Andhra Pradesh',
      year: '07/2021 – 03/2023',
      gpa: '98.6%',
      description: 'Completed intermediate with focus on Mathematics, Physics, and Chemistry. Developed strong analytical and problem-solving skills.'
    },
    {
      degree: '10th Standard',
      institution: 'Sri Chaitanya Techno School, Bapatla, Andhra Pradesh',
      year: '04/2020 – 06/2021',
      gpa: '99.0%',
      description: 'Completed 10th standard with strong performance across all subjects.'
    }
  ],
  skills: {
    programming: ['C', 'Java', 'JavaScript'],
    frameworks: ['React.js', 'Node.js', 'Express.js', 'Redux', 'Git', 'GitHub', 'Postman'],
    databases: ['MySQL', 'MongoDB'],
    os: ['Linux', 'Ubuntu'],
    coursework: [
      'Database Management Systems',
      'Object-Oriented Programming',
      'Data Structures and Algorithms',
      'Operating Systems',
      'Computer Communication Networks'
    ]
  },
  projects: [
    {
      title: 'MediQuick',
      duration: '08/2025 – Present',
      description: 'Responsive healthcare platform for online consultations and medicine delivery',
      details: [
        'Built a full-stack telemedicine application using React.js, Node.js, Express, and MongoDB, enabling seamless appointment booking, e-prescriptions, and medicine ordering for 100+ concurrent users.',
        'Implemented real-time doctor-patient chat, JWT-based secure authentication, and role-based dashboards supporting 5 user roles, reducing unauthorized access by 100%.'
      ],
      technologies: ['React.js', 'Node.js', 'Express', 'MongoDB', 'JWT', 'WebSocket']
    },
    {
      title: 'ABC Load Balancer Simulator',
      duration: '08/2025 – 11/2025',
      description: 'Java-based load balancing simulation using CloudSim Plus',
      details: [
        'Designed and implemented Artificial Bee Colony (ABC) optimization algorithm for dynamic task scheduling, achieving 98% load distribution efficiency across 6 virtual machines.',
        'Simulated 3 load balancing algorithms (Round Robin, Throttled, ABC) processing 30+ cloudlets, demonstrating 25% improvement in execution time and resource utilization through ABC optimization.'
      ],
      technologies: ['Java', 'CloudSim Plus', 'Artificial Bee Colony Algorithm']
    },
    {
      title: 'Drone-Based Crowd Anomaly Detection',
      duration: '12/2025 – Present',
      description: 'Real-time UAV crowd monitoring using RGB-Thermal fusion',
      details: [
        'Developed a Dual-stream Flounder-Net architecture with SE-Attention fusion module, achieving 92% accuracy in crowd density estimation on edge-deployed UAV systems.',
        'Implemented optical flow-based motion analysis integrated with GRU temporal modeling, enabling real-time anomaly detection with <500ms inference latency for crowd behavior classification.'
      ],
      technologies: ['Python', 'TensorFlow', 'OpenCV', 'GRU', 'Optical Flow']
    }
  ],
  achievements: [
    {
      title: 'LeetCode',
      description: 'Solved 100+ problems, strengthening data structures and algorithmic problem-solving skills.',
      icon: 'fas fa-code'
    },
    {
      title: 'Career Essentials in Generative AI',
      description: 'Certified by Microsoft and LinkedIn Learning.',
      icon: 'fas fa-certificate'
    },
    {
      title: 'INTSO Aptitude Olympiad',
      description: 'Secured Gold Medal in INTSO, ranking in top 30% among 10,000+ participants.',
      icon: 'fas fa-medal'
    }
  ],
  experience: [
    {
      title: 'Full Stack Developer',
      company: 'MediQuick (Current Project)',
      duration: '08/2025 – Present',
      description: 'Working on healthcare platform development with React and Node.js',
      achievements: ['Real-time features', 'JWT authentication', 'Role-based dashboards']
    }
  ]
};
