type ImageProp = {
  src: string
  alt: string
}

type FieldProp = {
  fieldId: string
  fieldName: string
  fieldRouteName: string
}

export type CourseProp = {
  courseId: string
  courseName: string
  courseDescription: string
  courseField: FieldProp
  courseImage: ImageProp
  courseRating: number
  courseUpdationDate: Date
  courseFavourite: boolean
  courseRouteUrl: string
}

export const subjects: FieldProp[] = [
  {
    fieldId: 'ECE',
    fieldName: 'Electronics and Communications Engineering',
    fieldRouteName: 'electronics',
  },
  {
    fieldId: 'BIO',
    fieldName: 'Biotechnology and Biomedical Engineering',
    fieldRouteName: 'biotechnology',
  },
  {
    fieldId: 'CSE',
    fieldName: 'Computer Science Engineering',
    fieldRouteName: 'computer-science',
  },
  {
    fieldId: 'CIV',
    fieldName: 'Civil Engineering',
    fieldRouteName: 'civil',
  },
  {
    fieldId: 'ELE',
    fieldName: 'Electrical Engineering',
    fieldRouteName: 'electrical',
  },
  {
    fieldId: 'PHY',
    fieldName: 'Physical Sciences',
    fieldRouteName: 'physical-science',
  },
  {
    fieldId: 'MECH',
    fieldName: 'Mechanical Engineering',
    fieldRouteName: 'mechanical',
  },
  {
    fieldId: 'CHEM',
    fieldName: 'Chemical Sciences',
    fieldRouteName: 'chemical-science',
  },
  {
    fieldId: 'CHE',
    fieldName: 'Chemical Engineering',
    fieldRouteName: 'chemical',
  }
]

const courses: CourseProp[] = [
  {
    courseId: 'ECE101',
    courseName: 'Introduction to Electronics',
    courseDescription: 'Basics of electronics and communication systems.',
    courseField: subjects[0],
    courseImage: {
      src: "/images/ece101.jpg",
      alt: "Introduction to Electronics"
    },
    courseRating: 4.5,
    courseUpdationDate: new Date('2023-01-15'),
    courseFavourite: true,
    courseRouteUrl: '/learn/electronics/introduction-to-electronics'
  },
  {
    courseId: 'BIO201',
    courseName: 'Biomedical Engineering Fundamentals',
    courseDescription: 'Introduction to biomedical engineering principles.',
    courseField: subjects[1],
    courseImage: {
      src: "/images/bio201.jpg",
      alt: "Biomedical Engineering Fundamentals"
    },
    courseRating: 4.7,
    courseUpdationDate: new Date('2023-02-20'),
    courseFavourite: false,
    courseRouteUrl: '/learn/biotechnology/biomedical-engineering-fundamentals'
  },
  {
    courseId: 'CSE301',
    courseName: 'Advanced Computer Science',
    courseDescription: 'In-depth study of computer science concepts.',
    courseField: subjects[2],
    courseImage: {
      src: "/images/cse301.jpg",
      alt: "Advanced Computer Science"
    },
    courseRating: 4.8,
    courseUpdationDate: new Date('2023-03-10'),
    courseFavourite: true,
    courseRouteUrl: '/learn/computer-science/advanced-computer-science'
  },
  {
    courseId: 'CIV401',
    courseName: 'Civil Engineering Basics',
    courseDescription: 'Fundamentals of civil engineering.',
    courseField: subjects[3],
    courseImage: {
      src: "/images/civ401.jpg",
      alt: "Civil Engineering Basics"
    },
    courseRating: 4.3,
    courseUpdationDate: new Date('2023-04-05'),
    courseFavourite: false,
    courseRouteUrl: '/learn/civil/civil-engineering-basics'
  },
  {
    courseId: 'ELE501',
    courseName: 'Electrical Systems',
    courseDescription: 'Study of electrical systems and circuits.',
    courseField: subjects[4],
    courseImage: {
      src: "/images/ele501.jpg",
      alt: "Electrical Systems"
    },
    courseRating: 4.6,
    courseUpdationDate: new Date('2023-05-12'),
    courseFavourite: true,
    courseRouteUrl: '/learn/electrical/electrical-systems'
  },
  {
    courseId: 'PHY601',
    courseName: 'Physical Sciences Overview',
    courseDescription: 'Comprehensive overview of physical sciences.',
    courseField: subjects[5],
    courseImage: {
      src: "/images/phy601.jpg",
      alt: "Physical Sciences Overview"
    },
    courseRating: 4.4,
    courseUpdationDate: new Date('2023-06-18'),
    courseFavourite: false,
    courseRouteUrl: '/learn/physical-science/physical-sciences-overview'
  },
  {
    courseId: 'MECH701',
    courseName: 'Mechanical Engineering Principles',
    courseDescription: 'Core principles of mechanical engineering.',
    courseField: subjects[6],
    courseImage: {
      src: "/images/mech701.jpg",
      alt: "Mechanical Engineering Principles"
    },
    courseRating: 4.7,
    courseUpdationDate: new Date('2023-07-22'),
    courseFavourite: true,
    courseRouteUrl: '/learn/mechanical/mechanical-engineering-principles'
  },
  {
    courseId: 'CHEM801',
    courseName: 'Chemical Sciences Introduction',
    courseDescription: 'Introduction to chemical sciences.',
    courseField: subjects[7],
    courseImage: {
      src: "/images/chem801.jpg",
      alt: "Chemical Sciences Introduction"
    },
    courseRating: 4.5,
    courseUpdationDate: new Date('2023-08-30'),
    courseFavourite: false,
    courseRouteUrl: '/learn/chemical-science/chemical-sciences-introduction'
  },
  {
    courseId: 'CHE802',
    courseName: 'Chemical Engineering Basics',
    courseDescription: 'Fundamentals of chemical engineering.',
    courseField: subjects[8],
    courseImage: {
      src: "/images/che802.jpg",
      alt: "Chemical Engineering Basics"
    },
    courseRating: 4.6,
    courseUpdationDate: new Date('2023-09-15'),
    courseFavourite: true,
    courseRouteUrl: '/learn/chemical/chemical-engineering-basics'
  },
  {
    courseId: 'ECE102',
    courseName: 'Advanced Electronics',
    courseDescription: 'Advanced concepts in electronics and communication systems.',
    courseField: subjects[0],
    courseImage: {
      src: "/images/ece102.jpg",
      alt: "Advanced Electronics"
    },
    courseRating: 4.6,
    courseUpdationDate: new Date('2023-10-01'),
    courseFavourite: false,
    courseRouteUrl: '/learn/electronics/advanced-electronics'
  },
  {
    courseId: 'BIO202',
    courseName: 'Genetic Engineering',
    courseDescription: 'Principles and applications of genetic engineering.',
    courseField: subjects[1],
    courseImage: {
      src: "/images/bio202.jpg",
      alt: "Genetic Engineering"
    },
    courseRating: 4.8,
    courseUpdationDate: new Date('2023-11-05'),
    courseFavourite: true,
    courseRouteUrl: '/learn/biotechnology/genetic-engineering'
  },
  {
    courseId: 'CSE302',
    courseName: 'Machine Learning',
    courseDescription: 'Introduction to machine learning algorithms and techniques.',
    courseField: subjects[2],
    courseImage: {
      src: "/images/cse302.jpg",
      alt: "Machine Learning"
    },
    courseRating: 4.9,
    courseUpdationDate: new Date('2023-12-10'),
    courseFavourite: false,
    courseRouteUrl: '/learn/computer-science/machine-learning'
  },
  {
    courseId: 'CIV402',
    courseName: 'Structural Engineering',
    courseDescription: 'Study of structural engineering principles.',
    courseField: subjects[3],
    courseImage: {
      src: "/images/civ402.jpg",
      alt: "Structural Engineering"
    },
    courseRating: 4.4,
    courseUpdationDate: new Date('2023-01-15'),
    courseFavourite: true,
    courseRouteUrl: '/learn/civil/structural-engineering'
  },
  {
    courseId: 'ELE502',
    courseName: 'Power Systems',
    courseDescription: 'Comprehensive study of power systems and their applications.',
    courseField: subjects[4],
    courseImage: {
      src: "/images/ele502.jpg",
      alt: "Power Systems"
    },
    courseRating: 4.7,
    courseUpdationDate: new Date('2023-02-20'),
    courseFavourite: false,
    courseRouteUrl: '/learn/electrical/power-systems'
  },
  {
    courseId: 'PHY602',
    courseName: 'Quantum Mechanics',
    courseDescription: 'Introduction to the principles of quantum mechanics.',
    courseField: subjects[5],
    courseImage: {
      src: "/images/phy602.jpg",
      alt: "Quantum Mechanics"
    },
    courseRating: 4.5,
    courseUpdationDate: new Date('2023-03-10'),
    courseFavourite: true,
    courseRouteUrl: '/learn/physical-science/quantum-mechanics'
  },
  {
    courseId: 'MECH702',
    courseName: 'Thermodynamics',
    courseDescription: 'Fundamentals of thermodynamics and its applications.',
    courseField: subjects[6],
    courseImage: {
      src: "/images/mech702.jpg",
      alt: "Thermodynamics"
    },
    courseRating: 4.6,
    courseUpdationDate: new Date('2023-04-05'),
    courseFavourite: false,
    courseRouteUrl: '/learn/mechanical/thermodynamics'
  },
  {
    courseId: 'CHEM802',
    courseName: 'Organic Chemistry',
    courseDescription: 'Study of organic chemistry principles and reactions.',
    courseField: subjects[7],
    courseImage: {
      src: "/images/chem802.jpg",
      alt: "Organic Chemistry"
    },
    courseRating: 4.8,
    courseUpdationDate: new Date('2023-05-12'),
    courseFavourite: true,
    courseRouteUrl: '/learn/chemical-science/organic-chemistry'
  },
  {
    courseId: 'CHE803',
    courseName: 'Process Engineering',
    courseDescription: 'Introduction to process engineering and its applications.',
    courseField: subjects[8],
    courseImage: {
      src: "/images/che803.jpg",
      alt: "Process Engineering"
    },
    courseRating: 4.7,
    courseUpdationDate: new Date('2023-06-18'),
    courseFavourite: false,
    courseRouteUrl: '/learn/chemical/process-engineering'
  },
  {
    courseId: 'ECE103',
    courseName: 'Digital Electronics',
    courseDescription: 'Study of digital electronic circuits and systems.',
    courseField: subjects[0],
    courseImage: {
      src: "/images/ece103.jpg",
      alt: "Digital Electronics"
    },
    courseRating: 4.5,
    courseUpdationDate: new Date('2023-07-01'),
    courseFavourite: true,
    courseRouteUrl: '/learn/electronics/digital-electronics'
  },
  {
    courseId: 'BIO203',
    courseName: 'Biomaterials',
    courseDescription: 'Introduction to materials used in biomedical applications.',
    courseField: subjects[1],
    courseImage: {
      src: "/images/bio203.jpg",
      alt: "Biomaterials"
    },
    courseRating: 4.6,
    courseUpdationDate: new Date('2023-08-15'),
    courseFavourite: false,
    courseRouteUrl: '/learn/biotechnology/biomaterials'
  },
  {
    courseId: 'CSE303',
    courseName: 'Data Structures',
    courseDescription: 'Study of data structures and their applications.',
    courseField: subjects[2],
    courseImage: {
      src: "/images/cse303.jpg",
      alt: "Data Structures"
    },
    courseRating: 4.8,
    courseUpdationDate: new Date('2023-09-20'),
    courseFavourite: true,
    courseRouteUrl: '/learn/computer-science/data-structures'
  },
  {
    courseId: 'CIV403',
    courseName: 'Geotechnical Engineering',
    courseDescription: 'Fundamentals of soil mechanics and foundation engineering.',
    courseField: subjects[3],
    courseImage: {
      src: "/images/civ403.jpg",
      alt: "Geotechnical Engineering"
    },
    courseRating: 4.4,
    courseUpdationDate: new Date('2023-10-05'),
    courseFavourite: false,
    courseRouteUrl: '/learn/civil/geotechnical-engineering'
  },
  {
    courseId: 'ELE503',
    courseName: 'Control Systems',
    courseDescription: 'Study of control systems and their applications.',
    courseField: subjects[4],
    courseImage: {
      src: "/images/ele503.jpg",
      alt: "Control Systems"
    },
    courseRating: 4.7,
    courseUpdationDate: new Date('2023-11-10'),
    courseFavourite: true,
    courseRouteUrl: '/learn/electrical/control-systems'
  },
  {
    courseId: 'PHY603',
    courseName: 'Astrophysics',
    courseDescription: 'Introduction to the principles of astrophysics.',
    courseField: subjects[5],
    courseImage: {
      src: "/images/phy603.jpg",
      alt: "Astrophysics"
    },
    courseRating: 4.6,
    courseUpdationDate: new Date('2023-12-15'),
    courseFavourite: false,
    courseRouteUrl: '/learn/physical-science/astrophysics'
  },
  {
    courseId: 'MECH703',
    courseName: 'Fluid Mechanics',
    courseDescription: 'Study of fluid mechanics and its applications.',
    courseField: subjects[6],
    courseImage: {
      src: "/images/mech703.jpg",
      alt: "Fluid Mechanics"
    },
    courseRating: 4.5,
    courseUpdationDate: new Date('2023-01-20'),
    courseFavourite: true,
    courseRouteUrl: '/learn/mechanical/fluid-mechanics'
  },
  {
    courseId: 'CHEM803',
    courseName: 'Inorganic Chemistry',
    courseDescription: 'Study of inorganic chemistry principles and reactions.',
    courseField: subjects[7],
    courseImage: {
      src: "/images/chem803.jpg",
      alt: "Inorganic Chemistry"
    },
    courseRating: 4.7,
    courseUpdationDate: new Date('2023-02-25'),
    courseFavourite: false,
    courseRouteUrl: '/learn/chemical-science/inorganic-chemistry'
  },
  {
    courseId: 'CHE804',
    courseName: 'Chemical Process Control',
    courseDescription: 'Introduction to chemical process control and instrumentation.',
    courseField: subjects[8],
    courseImage: {
      src: "/images/che804.jpg",
      alt: "Chemical Process Control"
    },
    courseRating: 4.8,
    courseUpdationDate: new Date('2023-03-30'),
    courseFavourite: true,
    courseRouteUrl: '/learn/chemical/chemical-process-control'
  },
  {
    courseId: 'ECE104',
    courseName: 'Microprocessors',
    courseDescription: 'Study of microprocessor architecture and programming.',
    courseField: subjects[0],
    courseImage: {
      src: "/images/ece104.jpg",
      alt: "Microprocessors"
    },
    courseRating: 4.6,
    courseUpdationDate: new Date('2023-04-15'),
    courseFavourite: false,
    courseRouteUrl: '/learn/electronics/microprocessors'
  },
  {
    courseId: 'BIO204',
    courseName: 'Tissue Engineering',
    courseDescription: 'Principles and applications of tissue engineering.',
    courseField: subjects[1],
    courseImage: {
      src: "/images/bio204.jpg",
      alt: "Tissue Engineering"
    },
    courseRating: 4.7,
    courseUpdationDate: new Date('2023-05-20'),
    courseFavourite: true,
    courseRouteUrl: '/learn/biotechnology/tissue-engineering'
  },
  {
    courseId: 'CSE304',
    courseName: 'Operating Systems',
    courseDescription: 'Study of operating system principles and design.',
    courseField: subjects[2],
    courseImage: {
      src: "/images/cse304.jpg",
      alt: "Operating Systems"
    },
    courseRating: 4.9,
    courseUpdationDate: new Date('2023-06-25'),
    courseFavourite: false,
    courseRouteUrl: '/learn/computer-science/operating-systems'
  },
  {
    courseId: 'CIV404',
    courseName: 'Transportation Engineering',
    courseDescription: 'Fundamentals of transportation engineering and planning.',
    courseField: subjects[3],
    courseImage: {
      src: "/images/civ404.jpg",
      alt: "Transportation Engineering"
    },
    courseRating: 4.5,
    courseUpdationDate: new Date('2023-07-30'),
    courseFavourite: true,
    courseRouteUrl: '/learn/civil/transportation-engineering'
  },
  {
    courseId: 'ELE504',
    courseName: 'Renewable Energy Systems',
    courseDescription: 'Study of renewable energy systems and technologies.',
    courseField: subjects[4],
    courseImage: {
      src: "/images/ele504.jpg",
      alt: "Renewable Energy Systems"
    },
    courseRating: 4.8,
    courseUpdationDate: new Date('2023-08-05'),
    courseFavourite: false,
    courseRouteUrl: '/learn/electrical/renewable-energy-systems'
  },
  {
    courseId: 'PHY604',
    courseName: 'Nuclear Physics',
    courseDescription: 'Introduction to the principles of nuclear physics.',
    courseField: subjects[5],
    courseImage: {
      src: "/images/phy604.jpg",
      alt: "Nuclear Physics"
    },
    courseRating: 4.7,
    courseUpdationDate: new Date('2023-09-10'),
    courseFavourite: true,
    courseRouteUrl: '/learn/physical-science/nuclear-physics'
  },
  {
    courseId: 'MECH704',
    courseName: 'Manufacturing Processes',
    courseDescription: 'Study of manufacturing processes and techniques.',
    courseField: subjects[6],
    courseImage: {
      src: "/images/mech704.jpg",
      alt: "Manufacturing Processes"
    },
    courseRating: 4.6,
    courseUpdationDate: new Date('2023-10-15'),
    courseFavourite: false,
    courseRouteUrl: '/learn/mechanical/manufacturing-processes'
  },
  {
    courseId: 'CHEM804',
    courseName: 'Analytical Chemistry',
    courseDescription: 'Study of analytical chemistry techniques and applications.',
    courseField: subjects[7],
    courseImage: {
      src: "/images/chem804.jpg",
      alt: "Analytical Chemistry"
    },
    courseRating: 4.8,
    courseUpdationDate: new Date('2023-11-20'),
    courseFavourite: true,
    courseRouteUrl: '/learn/chemical-science/analytical-chemistry'
  },
  {
    courseId: 'CHE805',
    courseName: 'Polymer Engineering',
    courseDescription: 'Introduction to polymer engineering and its applications.',
    courseField: subjects[8],
    courseImage: {
      src: "/images/che805.jpg",
      alt: "Polymer Engineering"
    },
    courseRating: 4.7,
    courseUpdationDate: new Date('2023-12-25'),
    courseFavourite: false,
    courseRouteUrl: '/learn/chemical/polymer-engineering'
  },
  {
    courseId: 'ECE105',
    courseName: 'Analog Electronics',
    courseDescription: 'Study of analog electronic circuits and systems.',
    courseField: subjects[0],
    courseImage: {
      src: "/images/ece105.jpg",
      alt: "Analog Electronics"
    },
    courseRating: 4.5,
    courseUpdationDate: new Date('2023-01-30'),
    courseFavourite: true,
    courseRouteUrl: '/learn/electronics/analog-electronics'
  },
  {
    courseId: 'BIO205',
    courseName: 'Neuroengineering',
    courseDescription: 'Principles and applications of neuroengineering.',
    courseField: subjects[1],
    courseImage: {
      src: "/images/bio205.jpg",
      alt: "Neuroengineering"
    },
    courseRating: 4.6,
    courseUpdationDate: new Date('2023-02-05'),
    courseFavourite: false,
    courseRouteUrl: '/learn/biotechnology/neuroengineering'
  },
  {
    courseId: 'CSE305',
    courseName: 'Database Systems',
    courseDescription: 'Study of database systems and their applications.',
    courseField: subjects[2],
    courseImage: {
      src: "/images/cse305.jpg",
      alt: "Database Systems"
    },
    courseRating: 4.8,
    courseUpdationDate: new Date('2023-03-10'),
    courseFavourite: true,
    courseRouteUrl: '/learn/computer-science/database-systems'
  },
  {
    courseId: 'CIV405',
    courseName: 'Environmental Engineering',
    courseDescription: 'Fundamentals of environmental engineering and sustainability.',
    courseField: subjects[3],
    courseImage: {
      src: "/images/civ405.jpg",
      alt: "Environmental Engineering"
    },
    courseRating: 4.4,
    courseUpdationDate: new Date('2023-04-15'),
    courseFavourite: false,
    courseRouteUrl: '/learn/civil/environmental-engineering'
  },
  {
    courseId: 'ELE505',
    courseName: 'Electrical Machines',
    courseDescription: 'Study of electrical machines and their applications.',
    courseField: subjects[4],
    courseImage: {
      src: "/images/ele505.jpg",
      alt: "Electrical Machines"
    },
    courseRating: 4.7,
    courseUpdationDate: new Date('2023-05-20'),
    courseFavourite: true,
    courseRouteUrl: '/learn/electrical/electrical-machines'
  },
  {
    courseId: 'PHY605',
    courseName: 'Optics',
    courseDescription: 'Study of optics principles and applications.',
    courseField: subjects[5],
    courseImage: {
      src: "/images/phy605.jpg",
      alt: "Optics"
    },
    courseRating: 4.6,
    courseUpdationDate: new Date('2023-06-25'),
    courseFavourite: false,
    courseRouteUrl: '/learn/physical-science/optics'
  },
  {
    courseId: 'MECH705',
    courseName: 'Robotics',
    courseDescription: 'Introduction to robotics and its applications.',
    courseField: subjects[6],
    courseImage: {
      src: "/images/mech705.jpg",
      alt: "Robotics"
    },
    courseRating: 4.8,
    courseUpdationDate: new Date('2023-07-30'),
    courseFavourite: true,
    courseRouteUrl: '/learn/mechanical/robotics'
  },
  {
    courseId: 'CHE805',
    courseName: 'Chemical Reaction Engineering',
    courseDescription: 'Study of chemical reaction engineering principles.',
    courseField: subjects[7],
    courseImage: {
      src: "/images/che805.jpg",
      alt: "Chemical Reaction Engineering"
    },
    courseRating: 4.7,
    courseUpdationDate: new Date('2023-08-05'),
    courseFavourite: false,
    courseRouteUrl: '/learn/chemical-science/chemical-reaction-engineering'
  },
  {
    courseId: 'CHE806',
    courseName: 'Petroleum Engineering',
    courseDescription: 'Introduction to petroleum engineering and its applications.',
    courseField: subjects[8],
    courseImage: {
      src: "/images/che806.jpg",
      alt: "Petroleum Engineering"
    },
    courseRating: 4.9,
    courseUpdationDate: new Date('2023-09-10'),
    courseFavourite: true,
    courseRouteUrl: '/learn/chemical/petroleum-engineering'
  },
  {
    courseId: 'ECE106',
    courseName: 'Digital Signal Processing',
    courseDescription: 'Study of digital signal processing techniques and applications.',
    courseField: subjects[0],
    courseImage: {
      src: "/images/ece106.jpg",
      alt: "Digital Signal Processing"
    },
    courseRating: 4.6,
    courseUpdationDate: new Date('2023-10-15'),
    courseFavourite: false,
    courseRouteUrl: '/learn/electronics/digital-signal-processing'
  },
  {
    courseId: 'BIO206',
    courseName: 'Bioinformatics',
    courseDescription: 'Introduction to bioinformatics principles and applications.',
    courseField: subjects[1],
    courseImage: {
      src: "/images/bio206.jpg",
      alt: "Bioinformatics"
    },
    courseRating: 4.8,
    courseUpdationDate: new Date('2023-11-20'),
    courseFavourite: true,
    courseRouteUrl: '/learn/biotechnology/bioinformatics'
  },
  {
    courseId: 'CSE306',
    courseName: 'Computer Networks',
    courseDescription: 'Study of computer networks and their applications.',
    courseField: subjects[2],
    courseImage: {
      src: "/images/cse306.jpg",
      alt: "Computer Networks"
    },
    courseRating: 4.7,
    courseUpdationDate: new Date('2023-12-25'),
    courseFavourite: false,
    courseRouteUrl: '/learn/computer-science/computer-networks'
  },
  {
    courseId: 'CIV406',
    courseName: 'Hydraulic Engineering',
    courseDescription: 'Fundamentals of hydraulic engineering and design.',
    courseField: subjects[3],
    courseImage: {
      src: "/images/civ406.jpg",
      alt: "Hydraulic Engineering"
    },
    courseRating: 4.5,
    courseUpdationDate: new Date('2023-01-30'),
    courseFavourite: true,
    courseRouteUrl: '/learn/civil/hydraulic-engineering'
  },
  {
    courseId: 'ELE506',
    courseName: 'Renewable Energy Technologies',
    courseDescription: 'Study of renewable energy technologies and applications.',
    courseField: subjects[4],
    courseImage: {
      src: "/images/ele506.jpg",
      alt: "Renewable Energy Technologies"
    },
    courseRating: 4.6,
    courseUpdationDate: new Date('2023-02-05'),
    courseFavourite: false,
    courseRouteUrl: '/learn/electrical/renewable-energy-technologies'
  },
  {
    courseId: 'PHY606',
    courseName: 'Particle Physics',
    courseDescription: 'Introduction to the principles of particle physics.',
    courseField: subjects[5],
    courseImage: {
      src: "/images/phy606.jpg",
      alt: "Particle Physics"
    },
    courseRating: 4.8,
    courseUpdationDate: new Date('2023-03-10'),
    courseFavourite: true,
    courseRouteUrl: '/learn/physical-science/particle-physics'
  },
  {
    courseId: 'MECH706',
    courseName: 'Materials Science',
    courseDescription: 'Study of materials science principles and applications.',
    courseField: subjects[6],
    courseImage: {
      src: "/images/mech706.jpg",
      alt: "Materials Science"
    },
    courseRating: 4.7,
    courseUpdationDate: new Date('2023-04-15'),
    courseFavourite: false,
    courseRouteUrl: '/learn/mechanical/materials-science'
  },
  {
    courseId: 'CHEM806',
    courseName: 'Physical Chemistry',
    courseDescription: 'Study of physical chemistry principles and reactions.',
    courseField: subjects[7],
    courseImage: {
      src: "/images/chem806.jpg",
      alt: "Physical Chemistry"
    },
    courseRating: 4.5,
    courseUpdationDate: new Date('2023-05-20'),
    courseFavourite: true,
    courseRouteUrl: '/learn/chemical-science/physical-chemistry'
  },
  {
    courseId: 'CHE807',
    courseName: 'Chemical Plant Design',
    courseDescription: 'Introduction to chemical plant design and operations.',
    courseField: subjects[8],
    courseImage: {
      src: "/images/che807.jpg",
      alt: "Chemical Plant Design"
    },
    courseRating: 4.6,
    courseUpdationDate: new Date('2023-06-25'),
    courseFavourite: false,
    courseRouteUrl: '/learn/chemical/chemical-plant-design'
  },
  {
    courseId: 'ECE107',
    courseName: 'Wireless Communication',
    courseDescription: 'Study of wireless communication systems and technologies.',
    courseField: subjects[0],
    courseImage: {
      src: "/images/ece107.jpg",
      alt: "Wireless Communication"
    },
    courseRating: 4.8,
    courseUpdationDate: new Date('2023-07-30'),
    courseFavourite: true,
    courseRouteUrl: '/learn/electronics/wireless-communication'
  },
  {
    courseId: 'BIO207',
    courseName: 'Biophysics',
    courseDescription: 'Introduction to biophysics principles and applications.',
    courseField: subjects[1],
    courseImage: {
      src: "/images/bio207.jpg",
      alt: "Biophysics"
    },
    courseRating: 4.7,
    courseUpdationDate: new Date('2023-08-05'),
    courseFavourite: false,
    courseRouteUrl: '/learn/biotechnology/biophysics'
  },
  {
    courseId: 'CSE307',
    courseName: 'Software Engineering',
    courseDescription: 'Study of software engineering principles and practices.',
    courseField: subjects[2],
    courseImage: {
      src: "/images/cse307.jpg",
      alt: "Software Engineering"
    },
    courseRating: 4.5,
    courseUpdationDate: new Date('2023-09-10'),
    courseFavourite: true,
    courseRouteUrl: '/learn/computer-science/software-engineering'
  },
  {
    courseId: 'CIV407',
    courseName: 'Construction Management',
    courseDescription: 'Fundamentals of construction management and planning.',
    courseField: subjects[3],
    courseImage: {
      src: "/images/civ407.jpg",
      alt: "Construction Management"
    },
    courseRating: 4.6,
    courseUpdationDate: new Date('2023-10-15'),
    courseFavourite: false,
    courseRouteUrl: '/learn/civil/construction-management'
  },
  {
    courseId: 'ELE507',
    courseName: 'High Voltage Engineering',
    courseDescription: 'Study of high voltage engineering principles and applications.',
    courseField: subjects[4],
    courseImage: {
      src: "/images/ele507.jpg",
      alt: "High Voltage Engineering"
    },
    courseRating: 4.8,
    courseUpdationDate: new Date('2023-11-20'),
    courseFavourite: true,
    courseRouteUrl: '/learn/electrical/high-voltage-engineering'
  },
  {
    courseId: 'PHY607',
    courseName: 'Solid State Physics',
    courseDescription: 'Introduction to the principles of solid state physics.',
    courseField: subjects[5],
    courseImage: {
      src: "/images/phy607.jpg",
      alt: "Solid State Physics"
    },
    courseRating: 4.7,
    courseUpdationDate: new Date('2023-12-25'),
    courseFavourite: false,
    courseRouteUrl: '/learn/physical-science/solid-state-physics'
  },
  {
    courseId: 'MECH707',
    courseName: 'Aerospace Engineering',
    courseDescription: 'Introduction to aerospace engineering and its applications.',
    courseField: subjects[6],
    courseImage: {
      src: "/images/mech707.jpg",
      alt: "Aerospace Engineering"
    },
    courseRating: 4.5,
    courseUpdationDate: new Date('2023-01-30'),
    courseFavourite: true,
    courseRouteUrl: '/learn/mechanical/aerospace-engineering'
  },
  {
    courseId: 'CHE807',
    courseName: 'Chemical Thermodynamics',
    courseDescription: 'Study of chemical thermodynamics principles and applications.',
    courseField: subjects[7],
    courseImage: {
      src: "/images/che807.jpg",
      alt: "Chemical Thermodynamics"
    },
    courseRating: 4.6,
    courseUpdationDate: new Date('2023-02-05'),
    courseFavourite: false,
    courseRouteUrl: '/learn/chemical-science/chemical-thermodynamics'
  },
  {
    courseId: 'CHE808',
    courseName: 'Chemical Safety Engineering',
    courseDescription: 'Introduction to chemical safety engineering and regulations.',
    courseField: subjects[8],
    courseImage: {
      src: "/images/che808.jpg",
      alt: "Chemical Safety Engineering"
    },
    courseRating: 4.8,
    courseUpdationDate: new Date('2023-03-10'),
    courseFavourite: true,
    courseRouteUrl: '/learn/chemical/chemical-safety-engineering'
  },
  {
    courseId: 'ECE108',
    courseName: 'Embedded Systems',
    courseDescription: 'Study of embedded systems design and programming.',
    courseField: subjects[0],
    courseImage: {
      src: "/images/ece108.jpg",
      alt: "Embedded Systems"
    },
    courseRating: 4.7,
    courseUpdationDate: new Date('2023-04-15'),
    courseFavourite: false,
    courseRouteUrl: '/learn/electronics/embedded-systems'
  },
  {
    courseId: 'BIO208',
    courseName: 'Biomedical Imaging',
    courseDescription: 'Introduction to biomedical imaging techniques and applications.',
    courseField: subjects[1],
    courseImage: {
      src: "/images/bio208.jpg",
      alt: "Biomedical Imaging"
    },
    courseRating: 4.5,
    courseUpdationDate: new Date('2023-05-20'),
    courseFavourite: true,
    courseRouteUrl: '/learn/biotechnology/biomedical-imaging'
  },
  {
    courseId: 'CSE308',
    courseName: 'Computer Architecture',
    courseDescription: 'Study of computer architecture principles and design.',
    courseField: subjects[2],
    courseImage: {
      src: "/images/cse308.jpg",
      alt: "Computer Architecture"
    },
    courseRating: 4.9,
    courseUpdationDate: new Date('2023-06-25'),
    courseFavourite: false,
    courseRouteUrl: '/learn/computer-science/computer-architecture'
  },
  {
    courseId: 'CIV408',
    courseName: 'Urban Planning',
    courseDescription: 'Fundamentals of urban planning and design.',
    courseField: subjects[3],
    courseImage: {
      src: "/images/civ408.jpg",
      alt: "Urban Planning"
    },
    courseRating: 4.4,
    courseUpdationDate: new Date('2023-07-30'),
    courseFavourite: true,
    courseRouteUrl: '/learn/civil/urban-planning'
  },
  {
    courseId: 'ELE508',
    courseName: 'Renewable Energy Management',
    courseDescription: 'Study of renewable energy management and policies.',
    courseField: subjects[4],
    courseImage: {
      src: "/images/ele508.jpg",
      alt: "Renewable Energy Management"
    },
    courseRating: 4.7,
    courseUpdationDate: new Date('2023-08-05'),
    courseFavourite: false,
    courseRouteUrl: '/learn/electrical/renewable-energy-management'
  },
  {
    courseId: 'PHY608',
    courseName: 'Plasma Physics',
    courseDescription: 'Introduction to the principles of plasma physics.',
    courseField: subjects[5],
    courseImage: {
      src: "/images/phy608.jpg",
      alt: "Plasma Physics"
    },
    courseRating: 4.6,
    courseUpdationDate: new Date('2023-09-10'),
    courseFavourite: true,
    courseRouteUrl: '/learn/physical-science/plasma-physics'
  },
  {
    courseId: 'MECH708',
    courseName: 'Mechatronics',
    courseDescription: 'Introduction to mechatronics systems and applications.',
    courseField: subjects[6],
    courseImage: {
      src: "/images/mech708.jpg",
      alt: "Mechatronics"
    },
    courseRating: 4.8,
    courseUpdationDate: new Date('2023-10-15'),
    courseFavourite: false,
    courseRouteUrl: '/learn/mechanical/mechatronics'
  },
  {
    courseId: 'CHE808',
    courseName: 'Chemical Kinetics',
    courseDescription: 'Study of chemical kinetics principles and applications.',
    courseField: subjects[7],
    courseImage: {
      src: "/images/che808.jpg",
      alt: "Chemical Kinetics"
    },
    courseRating: 4.7,
    courseUpdationDate: new Date('2023-11-20'),
    courseFavourite: true,
    courseRouteUrl: '/learn/chemical-science/chemical-kinetics'
  },
  {
    courseId: 'CHE809',
    courseName: 'Food Processing Engineering',
    courseDescription: 'Introduction to food processing engineering and technologies.',
    courseField: subjects[8],
    courseImage: {
      src: "/images/che809.jpg",
      alt: "Food Processing Engineering"
    },
    courseRating: 4.5,
    courseUpdationDate: new Date('2023-12-25'),
    courseFavourite: false,
    courseRouteUrl: '/learn/chemical/food-processing-engineering'
  },
  {
    courseId: 'ECE109',
    courseName: 'VLSI Design',
    courseDescription: 'Study of VLSI design principles and applications.',
    courseField: subjects[0],
    courseImage: {
      src: "/images/ece109.jpg",
      alt: "VLSI Design"
    },
    courseRating: 4.6,
    courseUpdationDate: new Date('2023-01-30'),
    courseFavourite: true,
    courseRouteUrl: '/learn/electronics/vlsi-design'
  },
  {
    courseId: 'BIO209',
    courseName: 'Stem Cell Engineering',
    courseDescription: 'Introduction to stem cell engineering and applications.',
    courseField: subjects[1],
    courseImage: {
      src: "/images/bio209.jpg",
      alt: "Stem Cell Engineering"
    },
    courseRating: 4.8,
    courseUpdationDate: new Date('2023-02-05'),
    courseFavourite: false,
    courseRouteUrl: '/learn/biotechnology/stem-cell-engineering'
  },
  {
    courseId: 'CSE309',
    courseName: 'Artificial Intelligence',
    courseDescription: 'Study of artificial intelligence principles and applications.',
    courseField: subjects[2],
    courseImage: {
      src: "/images/cse309.jpg",
      alt: "Artificial Intelligence"
    },
    courseRating: 4.7,
    courseUpdationDate: new Date('2023-03-10'),
    courseFavourite: true,
    courseRouteUrl: '/learn/computer-science/artificial-intelligence'
  },
  {
    courseId: 'CIV409',
    courseName: 'Structural Engineering',
    courseDescription: 'Fundamentals of structural engineering and design.',
    courseField: subjects[3],
    courseImage: {
      src: "/images/civ409.jpg",
      alt: "Structural Engineering"
    },
    courseRating: 4.6,
    courseUpdationDate: new Date('2023-04-15'),
    courseFavourite: false,
    courseRouteUrl: '/learn/civil/structural-engineering'
  },
  {
    courseId: 'ELE509',
    courseName: 'Power Electronics',
    courseDescription: 'Study of power electronics principles and applications.',
    courseField: subjects[4],
    courseImage: {
      src: "/images/ele509.jpg",
      alt: "Power Electronics"
    },
    courseRating: 4.8,
    courseUpdationDate: new Date('2023-05-20'),
    courseFavourite: true,
    courseRouteUrl: '/learn/electrical/power-electronics'
  },
  {
    courseId: 'PHY609',
    courseName: 'Quantum Mechanics',
    courseDescription: 'Introduction to the principles of quantum mechanics.',
    courseField: subjects[5],
    courseImage: {
      src: "/images/phy609.jpg",
      alt: "Quantum Mechanics"
    },
    courseRating: 4.7,
    courseUpdationDate: new Date('2023-06-25'),
    courseFavourite: false,
    courseRouteUrl: '/learn/physical-science/quantum-mechanics'
  },
  {
    courseId: 'MECH709',
    courseName: 'Thermal Engineering',
    courseDescription: 'Study of thermal engineering principles and applications.',
    courseField: subjects[6],
    courseImage: {
      src: "/images/mech709.jpg",
      alt: "Thermal Engineering"
    },
    courseRating: 4.5,
    courseUpdationDate: new Date('2023-07-30'),
    courseFavourite: true,
    courseRouteUrl: '/learn/mechanical/thermal-engineering'
  },
  {
    courseId: 'CHE809',
    courseName: 'Chemical Separation Processes',
    courseDescription: 'Introduction to chemical separation processes and technologies.',
    courseField: subjects[7],
    courseImage: {
      src: "/images/che809.jpg",
      alt: "Chemical Separation Processes"
    },
    courseRating: 4.6,
    courseUpdationDate: new Date('2023-08-05'),
    courseFavourite: false,
    courseRouteUrl: '/learn/chemical-science/chemical-separation-processes'
  },
  {
    courseId: 'CHE810',
    courseName: 'Corrosion Engineering',
    courseDescription: 'Study of corrosion engineering principles and applications.',
    courseField: subjects[8],
    courseImage: {
      src: "/images/che810.jpg",
      alt: "Corrosion Engineering"
    },
    courseRating: 4.8,
    courseUpdationDate: new Date('2023-09-10'),
    courseFavourite: true,
    courseRouteUrl: '/learn/chemical/corrosion-engineering'
  },
  {
    courseId: 'ECE110',
    courseName: 'Digital Electronics',
    courseDescription: 'Study of digital electronic circuits and systems.',
    courseField: subjects[0],
    courseImage: {
      src: "/images/ece110.jpg",
      alt: "Digital Electronics"
    },
    courseRating: 4.7,
    courseUpdationDate: new Date('2023-10-15'),
    courseFavourite: false,
    courseRouteUrl: '/learn/electronics/digital-electronics'
  },
  {
    courseId: 'BIO210',
    courseName: 'Genetic Engineering',
    courseDescription: 'Introduction to genetic engineering principles and applications.',
    courseField: subjects[1],
    courseImage: {
      src: "/images/bio210.jpg",
      alt: "Genetic Engineering"
    },
    courseRating: 4.5,
    courseUpdationDate: new Date('2023-11-20'),
    courseFavourite: true,
    courseRouteUrl: '/learn/biotechnology/genetic-engineering'
  },
  {
    courseId: 'CSE310',
    courseName: 'Computer Graphics',
    courseDescription: 'Study of computer graphics principles and applications.',
    courseField: subjects[2],
    courseImage: {
      src: "/images/cse310.jpg",
      alt: "Computer Graphics"
    },
    courseRating: 4.9,
    courseUpdationDate: new Date('2023-12-25'),
    courseFavourite: false,
    courseRouteUrl: '/learn/computer-science/computer-graphics'
  },
  {
    courseId: 'CIV410',
    courseName: 'Geotechnical Engineering',
    courseDescription: 'Fundamentals of geotechnical engineering and design.',
    courseField: subjects[3],
    courseImage: {
      src: "/images/civ410.jpg",
      alt: "Geotechnical Engineering"
    },
    courseRating: 4.4,
    courseUpdationDate: new Date('2023-01-30'),
    courseFavourite: true,
    courseRouteUrl: '/learn/civil/geotechnical-engineering'
  },
  {
    courseId: 'ELE510',
    courseName: 'Power System Analysis',
    courseDescription: 'Study of power system analysis principles and applications.',
    courseField: subjects[4],
    courseImage: {
      src: "/images/ele510.jpg",
      alt: "Power System Analysis"
    },
    courseRating: 4.7,
    courseUpdationDate: new Date('2023-02-05'),
    courseFavourite: false,
    courseRouteUrl: '/learn/electrical/power-system-analysis'
  },
  {
    courseId: 'PHY610',
    courseName: 'Astrophysics',
    courseDescription: 'Introduction to the principles of astrophysics.',
    courseField: subjects[5],
    courseImage: {
      src: "/images/phy610.jpg",
      alt: "Astrophysics"
    },
    courseRating: 4.6,
    courseUpdationDate: new Date('2023-03-10'),
    courseFavourite: true,
    courseRouteUrl: '/learn/physical-science/astrophysics'
  },
  {
    courseId: 'MECH710',
    courseName: 'Fluid Mechanics',
    courseDescription: 'Study of fluid mechanics principles and applications.',
    courseField: subjects[6],
    courseImage: {
      src: "/images/mech710.jpg",
      alt: "Fluid Mechanics"
    },
    courseRating: 4.8,
    courseUpdationDate: new Date('2023-04-15'),
    courseFavourite: false,
    courseRouteUrl: '/learn/mechanical/fluid-mechanics'
  },
  {
    courseId: 'CHE810',
    courseName: 'Chemical Process Design',
    courseDescription: 'Introduction to chemical process design and operations.',
    courseField: subjects[7],
    courseImage: {
      src: "/images/che810.jpg",
      alt: "Chemical Process Design"
    },
    courseRating: 4.7,
    courseUpdationDate: new Date('2023-05-20'),
    courseFavourite: true,
    courseRouteUrl: '/learn/chemical-science/chemical-process-design'
  },
  {
    courseId: 'CHE811',
    courseName: 'Biochemical Engineering',
    courseDescription: 'Study of biochemical engineering principles and applications.',
    courseField: subjects[8],
    courseImage: {
      src: "/images/che811.jpg",
      alt: "Biochemical Engineering"
    },
    courseRating: 4.5,
    courseUpdationDate: new Date('2023-06-25'),
    courseFavourite: false,
    courseRouteUrl: '/learn/chemical/biochemical-engineering'
  },
  {
    courseId: 'ECE111',
    courseName: 'Communication Systems',
    courseDescription: 'Study of communication systems principles and applications.',
    courseField: subjects[0],
    courseImage: {
      src: "/images/ece111.jpg",
      alt: "Communication Systems"
    },
    courseRating: 4.6,
    courseUpdationDate: new Date('2023-07-30'),
    courseFavourite: true,
    courseRouteUrl: '/learn/electronics/communication-systems'
  },
  {
    courseId: 'BIO211',
    courseName: 'Biochemical Engineering',
    courseDescription: 'Introduction to biochemical engineering principles and applications.',
    courseField: subjects[1],
    courseImage: {
      src: "/images/bio211.jpg",
      alt: "Biochemical Engineering"
    },
    courseRating: 4.8,
    courseUpdationDate: new Date('2023-08-05'),
    courseFavourite: false,
    courseRouteUrl: '/learn/biotechnology/biochemical-engineering'
  },
  {
    courseId: 'CSE311',
    courseName: 'Operating Systems',
    courseDescription: 'Study of operating systems principles and applications.',
    courseField: subjects[2],
    courseImage: {
      src: "/images/cse311.jpg",
      alt: "Operating Systems"
    },
    courseRating: 4.7,
    courseUpdationDate: new Date('2023-09-10'),
    courseFavourite: true,
    courseRouteUrl: '/learn/computer-science/operating-systems'
  },
  {
    courseId: 'CIV411',
    courseName: 'Transportation Engineering',
    courseDescription: 'Fundamentals of transportation engineering and design.',
    courseField: subjects[3],
    courseImage: {
      src: "/images/civ411.jpg",
      alt: "Transportation Engineering"
    },
    courseRating: 4.6,
    courseUpdationDate: new Date('2023-10-15'),
    courseFavourite: false,
    courseRouteUrl: '/learn/civil/transportation-engineering'
  },
  {
    courseId: 'ELE511',
    courseName: 'Renewable Energy Economics',
    courseDescription: 'Study of renewable energy economics and policies.',
    courseField: subjects[4],
    courseImage: {
      src: "/images/ele511.jpg",
      alt: "Renewable Energy Economics"
    },
    courseRating: 4.8,
    courseUpdationDate: new Date('2023-11-20'),
    courseFavourite: true,
    courseRouteUrl: '/learn/electrical/renewable-energy-economics'
  },
  {
    courseId: 'PHY611',
    courseName: 'Nuclear Physics',
    courseDescription: 'Introduction to the principles of nuclear physics.',
    courseField: subjects[5],
    courseImage: {
      src: "/images/phy611.jpg",
      alt: "Nuclear Physics"
    },
    courseRating: 4.7,
    courseUpdationDate: new Date('2023-12-25'),
    courseFavourite: false,
    courseRouteUrl: '/learn/physical-science/nuclear-physics'
  },
  {
    courseId: 'MECH711',
    courseName: 'Mechanical Design',
    courseDescription: 'Study of mechanical design principles and applications.',
    courseField: subjects[6],
    courseImage: {
      src: "/images/mech711.jpg",
      alt: "Mechanical Design"
    },
    courseRating: 4.5,
    courseUpdationDate: new Date('2023-01-30'),
    courseFavourite: true,
    courseRouteUrl: '/learn/mechanical/mechanical-design'
  },
  {
    courseId: 'CHE811',
    courseName: 'Chemical Engineering Thermodynamics',
    courseDescription: 'Study of chemical engineering thermodynamics principles.',
    courseField: subjects[7],
    courseImage: {
      src: "/images/che811.jpg",
      alt: "Chemical Engineering Thermodynamics"
    },
    courseRating: 4.6,
    courseUpdationDate: new Date('2023-02-05'),
    courseFavourite: false,
    courseRouteUrl: '/learn/chemical-science/chemical-engineering-thermodynamics'
  },
  {
    courseId: 'CHE812',
    courseName: 'Chemical Process Control',
    courseDescription: 'Introduction to chemical process control systems and applications.',
    courseField: subjects[8],
    courseImage: {
      src: "/images/che812.jpg",
      alt: "Chemical Process Control"
    },
    courseRating: 4.8,
    courseUpdationDate: new Date('2023-03-10'),
    courseFavourite: true,
    courseRouteUrl: '/learn/chemical/chemical-process-control'
  },
  {
    courseId: 'ECE112',
    courseName: 'Control Systems',
    courseDescription: 'Study of control systems principles and applications.',
    courseField: subjects[0],
    courseImage: {
      src: "/images/ece112.jpg",
      alt: "Control Systems"
    },
    courseRating: 4.7,
    courseUpdationDate: new Date('2023-04-15'),
    courseFavourite: false,
    courseRouteUrl: '/learn/electronics/control-systems'
  },
  {
    courseId: 'BIO212',
    courseName: 'Bioinformatics',
    courseDescription: 'Introduction to bioinformatics principles and applications.',
    courseField: subjects[1],
    courseImage: {
      src: "/images/bio212.jpg",
      alt: "Bioinformatics"
    },
    courseRating: 4.5,
    courseUpdationDate: new Date('2023-05-20'),
    courseFavourite: true,
    courseRouteUrl: '/learn/biotechnology/bioinformatics'
  },
  {
    courseId: 'CSE312',
    courseName: 'Data Structures',
    courseDescription: 'Study of data structures and algorithms principles.',
    courseField: subjects[2],
    courseImage: {
      src: "/images/cse312.jpg",
      alt: "Data Structures"
    },
    courseRating: 4.9,
    courseUpdationDate: new Date('2023-06-25'),
    courseFavourite: false,
    courseRouteUrl: '/learn/computer-science/data-structures'
  },
  {
    courseId: 'CIV412',
    courseName: 'Environmental Engineering',
    courseDescription: 'Fundamentals of environmental engineering and sustainability.',
    courseField: subjects[3],
    courseImage: {
      src: "/images/civ412.jpg",
      alt: "Environmental Engineering"
    },
    courseRating: 4.4,
    courseUpdationDate: new Date('2023-07-30'),
    courseFavourite: true,
    courseRouteUrl: '/learn/civil/environmental-engineering'
  },
  {
    courseId: 'ELE512',
    courseName: 'Electrical Machines',
    courseDescription: 'Study of electrical machines and their applications.',
    courseField: subjects[4],
    courseImage: {
      src: "/images/ele512.jpg",
      alt: "Electrical Machines"
    },
    courseRating: 4.7,
    courseUpdationDate: new Date('2023-08-05'),
    courseFavourite: false,
    courseRouteUrl: '/learn/electrical/electrical-machines'
  },
  {
    courseId: 'PHY612',
    courseName: 'Optics',
    courseDescription: 'Introduction to the principles of optics and photonics.',
    courseField: subjects[5],
    courseImage: {
      src: "/images/phy612.jpg",
      alt: "Optics"
    },
    courseRating: 4.6,
    courseUpdationDate: new Date('2023-09-10'),
    courseFavourite: true,
    courseRouteUrl: '/learn/physical-science/optics'
  },
  {
    courseId: 'MECH712',
    courseName: 'Robotics',
    courseDescription: 'Study of robotics principles and applications.',
    courseField: subjects[6],
    courseImage: {
      src: "/images/mech712.jpg",
      alt: "Robotics"
    },
    courseRating: 4.8,
    courseUpdationDate: new Date('2023-10-15'),
    courseFavourite: false,
    courseRouteUrl: '/learn/mechanical/robotics'
  },
  {
    courseId: 'CHE812',
    courseName: 'Chemical Reaction Engineering',
    courseDescription: 'Introduction to chemical reaction engineering principles.',
    courseField: subjects[7],
    courseImage: {
      src: "/images/che812.jpg",
      alt: "Chemical Reaction Engineering"
    },
    courseRating: 4.7,
    courseUpdationDate: new Date('2023-11-20'),
    courseFavourite: true,
    courseRouteUrl: '/learn/chemical-science/chemical-reaction-engineering'
  },
  {
    courseId: 'CHE813',
    courseName: 'Chemical Plant Operations',
    courseDescription: 'Study of chemical plant operations and safety procedures.',
    courseField: subjects[8],
    courseImage: {
      src: "/images/che813.jpg",
      alt: "Chemical Plant Operations"
    },
    courseRating: 4.5,
    courseUpdationDate: new Date('2023-12-25'),
    courseFavourite: false,
    courseRouteUrl: '/learn/chemical/chemical-plant-operations'
  }
]

export default courses