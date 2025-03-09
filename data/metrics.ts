import { subjects } from "./data";

type InstituteMetricsType = {
  institute: string;
  shortName: string;
  users: number;
  views: number;
}

export const instituteMetrics: InstituteMetricsType[] = [
  {
    institute: 'IIT Kharagpur',
    shortName: 'IITKGP',
    users: 5600000/1000000,
    views: 26000000/1000000
  },
  {
    institute: 'IIT Kanpur',
    shortName: 'IITK',
    users: 500000/1000000,
    views: 4000000/1000000
  },
  {
    institute: 'IIT Bombay',
    shortName: 'IITB',
    users: 400000/1000000,
    views: 2400000/1000000
  },
  {
    institute: 'IIT Delhi',
    shortName: 'IITD',
    users: 200000/1000000,
    views: 1800000/1000000
  },
  {
    institute: 'NITK Surathkal',
    shortName: 'NITK',
    users: 2300000/1000000,
    views: 20200000/1000000
  },
  {
    institute: 'IIT Roorkee',
    shortName: 'IITR',
    users: 3000000/1000000,
    views: 27600000/1000000
  },
  {
    institute: 'IIIT Hyderabad',
    shortName: 'IIITH',
    users: 2200000/1000000,
    views: 19500000/1000000
  },
  {
    institute: 'IIT Guwahati',
    shortName: 'IITG',
    users: 500000/1000000,
    views: 3600000/1000000
  },
  {
    institute: 'DLBG',
    shortName: 'DLBG',
    users: 600000/1000000,
    views: 4600000/1000000
  },
  {
    institute: 'AMRT',
    shortName: 'AMRT',
    users: 900000/1000000,
    views: 3900000/1000000
  },
  {
    institute: 'COEP',
    shortName: 'COEP',
    users: 1300000/1000000,
    views: 12100000/1000000
  }
]

type DisciplineMetricsType = {
  discipline: string;
  users: number;
  views: number;
}

export const disciplineMetrics: DisciplineMetricsType[] = [
  {
    discipline: subjects[0].fieldName,
    users: 6454277,
    views: 38745215
  },
  {
    discipline: subjects[1].fieldName,
    users: 277849,
    views: 1865344
  },
  {
    discipline: subjects[2].fieldName,
    users: 2452192,
    views: 21081945
  },
  {
    discipline: subjects[3].fieldName,
    users: 2340552,
    views: 22086856
  },
  {
    discipline: subjects[4].fieldName,
    users: 3076829,
    views: 24887209
  },
  {
    discipline: subjects[5].fieldName,
    users: 838271,
    views: 4400109
  },
  {
    discipline: subjects[6].fieldName,
    users: 943977,
    views: 5713386
  },
  {
    discipline: subjects[7].fieldName,
    users: 329222,
    views: 1669439
  },
  {
    discipline: subjects[8].fieldName,
    users: 294202,
    views: 1523155
  }
]

type CourseMetricsType = {
  courseName: string;
  users: number;
  views: number;
}

export const courseMetrics: CourseMetricsType[] = [
  {
    courseName: 'Machine Learning',
    users: 1600000,
    views: 6500000
  },
  {
    courseName: 'Data Structures and Algorithms',
    users: 1500000,
    views: 6000000
  },
  {
    courseName: 'Digital Signal Processing',
    users: 1200000,
    views: 4500000
  },
  {
    courseName: 'Quantum Mechanics',
    users: 1100000,
    views: 4400000
  },
  {
    courseName: 'Thermodynamics',
    users: 950000,
    views: 3800000
  },
  {
    courseName: 'Power Systems',
    users: 900000,
    views: 3600000
  },
  {
    courseName: 'Organic Chemistry',
    users: 850000,
    views: 3400000
  },
  {
    courseName: 'Microbiology',
    users: 800000,
    views: 3200000
  },
  {
    courseName: 'Chemical Reaction Engineering',
    users: 780000,
    views: 3100000
  },
  {
    courseName: 'Structural Analysis',
    users: 700000,
    views: 2800000
  }
]