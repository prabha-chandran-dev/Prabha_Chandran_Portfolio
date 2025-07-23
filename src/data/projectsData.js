// src/data/projectsData.js
import blog from "../assets/blog.png";
import weather from "../assets/weather.png";
import ATM from "../assets/ATM.png";
import DataShare from "../assets/DataShare.png";
import wireless from "../assets/wireless.png";
import IBM from "../assets/IBM.jpg";


const projects = [

  {
    title: "BB Creation – YouTube Channel Hub",

    description: "A static website showcasing top YouTube learning channels in English, Tamil, and Hindi. Built for frontend practice with a focus on clean layout.",
    image: blog,
    github: "https://github.com/BB-Design/Self-Learning-Projects/tree/main/BB%20creations%20Pages",
    tech: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
  },

  {
    title: "CRUD App with RESTful APIs",
    description: "A collection of web applications demonstrating CRUD operations using RESTful APIs. These apps showcase skills in frontend-backend integration, state management, and API handling.",
    image: weather, // Make sure this path is correct
    github: "https://github.com/BB-Design/Xebia-Internship-Project/tree/main/PGB-2023-prabha_CRUD_API",
    tech: ["React", "JavaScript", "Spring Boot", "REST API"],
  },
  {
    title: "IBM - Expense Tracker Application",
    description: "A cloud-based app built with Flask to help users manage daily finances. Deployed with IBM Cloud services for secure and scalable performance.",
    image: IBM,
    github: "https://github.com/BB-Design/College-Projects/tree/main/IBM-Expense-Tracker",
    tech: ["IBM Cloud", "Flask (Python)", "IBM DB2", "HTML", "JavaScript", "Docker", "IBM Container Registry"

    ],
  },

  {
    title: "FingerPrint Authentication ATM ",
    description: "A fingerprint-based ATM system enabling secure, card-less transactions using biometric authentication. It prevents fraud and enhances user convenience.",
    image: ATM,// Make sure this path is correct
    github: "https://github.com/BB-Design/College-Projects/tree/main/Fingerprint%20Authentication%20Django",
    tech: ["Django(Python)", "Django Templates", "SQLite/PostgreSQL", "Django Authentication", "Fingerprint Module Integration"],
  },
  {
    title: "Secure Multi-Owner Cloud Sharing System",
    description: "A cloud-based system enabling secure data sharing for dynamic groups using hybrid (AES) encryption and role-based access control.",
    image: DataShare, // Make sure this path is correct
    github: "https://github.com/BB-Design/College-Projects/tree/main/Secure-Data-Sharing-System",
    tech: ["HTML", "CSS", "JS", "jQuery", "AJAX", "Servlet", "Java", "MySQL"],
  },
  {
    title: "Wireless Car Charging System",
    description: "A wireless electric vehicle (EV) charging system using inductive power transfer to eliminate charging cable hassles. It enhances convenience, reduces EV battery size, and supports sustainable mobility.",
    image: wireless, // Make sure this path is correct
    github: "https://github.com/BB-Design/College-Projects/tree/main/Wireless-Car-Charging-System",
    tech: ["Embedded Systems", "Inductive Charging", "Battery"],
  },

  // Add 4 more
];

export default projects;
