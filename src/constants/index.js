import {
  mobile,
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
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,

  hack1,
  hack2,
  hack3,
  hack4,
  hack5,
  hack6,


} from "../assets";


export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },

  
];

const services = [
  {
    title: "Electrical Engineer",
    icon: web,
  },
  {
    title: "Open Source",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Frontend Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Electrical Engineering Student",
    company_name: "SATI , Vidisha",
    
    icon: img5,
    iconBg: "#383E56",
    
    date: "june 2019 - july 2023",
    points: [
      "Developing closed-loop control systems by integrating high-performance embedded hardware with real-time software architectures.",
      "Bridging the gap between power electronics and digital control to create responsive, hardware-aware automation systems.",
    ],
  },
  {
    title: "Volvo - Functional Trainee Engineer",
    company_name: "Volvo",
     
    
    icon: img6,
    iconBg: "#383E56",
    

    date: "July 2023 - Aug 2023",
    points: [
      "Developing and refining integrated HMI design systems to provide critical real-time vehicle data, directly enhancing driver situational awareness and operational safety in commercial trucks and passenger vehicles.",
      "Collaborating on the development of advanced safety-critical software architectures, focusing on robust design systems that monitor vehicle health and mitigate risks in automotive electronic control units.",
    ],
  },
 
];

export const hackathons = [
  {
    name: "Cummins Scholarship 2022",
    description:
      "Vidisha",
   
    image: hack3,
   
  },
  {
    name: "Student Of The Year 2024",
    description:
      "Vidisha",
   
    image: hack2,
   
  },
  {
    name: " Proxcellence Academy Internship",
    description:
      "Bhopal",
   
    image: hack1,
   
  },
  {
    name: "Hack The Mountains 5.0 ",
    description:
      "RAjkot",
   
    image: hack6,
   
  },
  {
    name: "Social Achievements",
    description:
      "On-Campus",
   
    image: hack5,
 
  },
  {
    name: "Smart India Hackathon 2023 ",
    description:
      "On-Campus",
   
    image: hack4,
   
  },
];







const projects = [

  {
    name: "Automatic Parking Brake",
    description:
      "Engineered an automated safety system utilizing seat-integrated pressure sensors to prevent accidental vehicle movement. Developed control logic for a VECU to process real-time telemetry and command motor actuators for autonomous braking",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: img2,
    deployment_link: "https://mindscool.netlify.app/",
    source_code_link: "https://github.com/Kunwar-awadhiya/mind-scool",
  },

  {
    name: "Ultrasonic Based Fuel Monitoring System",
    description:
      "Engineered a non-invasive measurement solution using ultrasonic waves to eliminate the mechanical wear associated with traditional float sensors. Programmed complex geometric and time-of-flight algorithms to provide real-time liquid volume and percentage calculations.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: img3,
    deployment_link: "https://bailreckonerr.netlify.app/",
    source_code_link: "https://github.com/Kunwar-awadhiya/Bail_Recknor",
  },

  {
    name: "Advance login Authentication",
    description:
      "Secure authentication system techniques like authentication and token-based validation to ensure robust user account protection and prevent unauthorized access.",
    tags: [
      {
        name: "React.js",
        color: "blue-text-gradient",
      },
      {
        name: "Mongodb",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: img4,
    deployment_link: "",
    source_code_link: "https://github.com/Kunwar-awadhiya/Advance-login-authentication",
  },
];

export { services, technologies, experiences,  projects };
