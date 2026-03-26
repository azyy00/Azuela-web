import heroPortrait from "../../ChatGPT Image Mar 12, 2026, 07_26_13 AM (1).png";
import aboutPortrait from "../../about-me.png";
import attendanceMonitoringShot from "../../attendance-monitoring.png";

import cloudComputingPdf from "../../Cloud Computing.pdf";
import dataEngineerPdf from "../../Data Engineer.pdf";
import dataSciencePdf from "../../Data Science.pdf";
import dataVisualizationPdf from "../../Data Visualization.pdf";
import gitPdf from "../../Git.pdf";
import intermediateSqlPdf from "../../Intermediate SQL.pdf";
import machineLearningPdf from "../../Machine Learning.pdf";
import pythonCertPdf from "../../Python Cert.pdf";
import sqlPdf from "../../SQL.pdf";

export const navigationLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About me" },
  { id: "projects", label: "Project" },
  { id: "skills", label: "Skills" },
  { id: "certificates", label: "Certificate" },
];

export const profile = {
  brand: "AZZY",
  name: "Anthony Azuela",
  introBadge: "Computer Science Graduate",
  titleLines: ["Graphic Designer,", "Web development"],
  heroDescription: "Turn ideas into visually appealing and functional digital experiences through",
  heroHighlights: ["WEB DEVELOPMENT", "GRAPHIC DESIGN"],
  aboutText:
    "I am a Computer Science graduate with a strong passion for graphic design and building modern, responsive, user-focused web applications. My foundation in React, JavaScript, Chakra UI, Python, and SQL helps me move comfortably between design thinking, frontend development, and data-oriented work.",
  aboutTextExtended:
    "I enjoy transforming ideas into polished digital products while continuously challenging myself through real-world projects, certifications, and new technologies.",
  heroImage: heroPortrait,
  aboutImage: aboutPortrait,
};

export const heroStats = [
  { value: "9", label: "Certificates Earned" },
  { value: "2", label: "Featured UI Projects" },
  { value: "React", label: "Built with Chakra UI" },
];

export const heroPills = [
  "React JS",
  "Chakra UI",
  "Python",
  "SQL",
  "Canva",
  "Figma",
];

export const aboutHighlights = [
  {
    title: "Main Focus",
    description: "Frontend development, responsive UI, and clean user experiences.",
  },
  {
    title: "Design Edge",
    description: "Graphic design thinking with Canva and Figma-driven layouts.",
  },
  {
    title: "Data Side",
    description: "SQL, Python, machine learning, and data storytelling foundations.",
  },
  {
    title: "Work Style",
    description: "Curious, detail-oriented, and always improving through hands-on builds.",
  },
];

export const projects = [
  {
    title: "Attendance Monitoring Interface",
    subtitle: "Student check-in and library attendance tracking",
    description:
      "A full-stack attendance monitoring system built for library operations, combining analytics dashboards, visitor tracking, book import support, and cloud-based deployment into one practical workflow.",
    image: attendanceMonitoringShot,
    imageAlt: "Attendance monitoring dashboard preview",
    tech: [
      "React.js",
      "CSS",
      "Axios",
      "Node.js",
      "Express.js",
      "TiDB Cloud",
      "Vercel",
      "Cloudinary",
      "XLSX / Excel",
      "GitHub",
    ],
    highlights: [
      "Built the frontend with React.js, custom CSS, and Axios for a responsive dashboard experience.",
      "Developed the backend with Node.js and Express.js connected to TiDB Cloud as a MySQL-compatible database.",
      "Integrated Cloudinary for image storage and XLSX parsing for Excel-based book import workflows.",
      "Managed version control with GitHub and deployed the project through Vercel.",
    ],
  },
];

export const skillGroups = [
  {
    title: "Frontend Development",
    description: "Building responsive and user-centered interfaces.",
    items: ["React JS", "HTML5", "CSS3", "JavaScript", "Chakra UI", "Bootstrap"],
  },
  {
    title: "Programming & Data",
    description: "Working with structured data and analytical problem solving.",
    items: ["Python", "SQL", "Intermediate SQL", "Data Science", "Data Engineering", "Machine Learning"],
  },
  {
    title: "Design & Visualization",
    description: "Turning concepts into polished and communicative visuals.",
    items: ["Graphic Design", "Canva", "Figma", "UI Layouts", "Data Visualization", "Presentation Design"],
  },
  {
    title: "Tools & Workflow",
    description: "Supporting clean collaboration and iterative delivery.",
    items: ["Git", "GitHub", "Cloud Computing", "Problem Solving", "Documentation", "Continuous Learning"],
  },
];

export const focusAreas = [
  "Frontend interfaces that feel clean and modern",
  "Design systems and graphics with strong visual identity",
  "Data-focused learning in SQL, Python, and machine learning",
  "Academic and administrative dashboard experiences",
];

export const certificates = [
  {
    title: "Cloud Computing",
    category: "Infrastructure",
    summary: "Foundations in cloud services, platforms, and modern computing environments.",
    file: cloudComputingPdf,
  },
  {
    title: "Data Engineer",
    category: "Data",
    summary: "Concepts related to organizing, moving, and preparing data pipelines.",
    file: dataEngineerPdf,
  },
  {
    title: "Data Science",
    category: "Analytics",
    summary: "Core ideas around data exploration, insight generation, and applied analysis.",
    file: dataSciencePdf,
  },
  {
    title: "Data Visualization",
    category: "Visualization",
    summary: "Communicating patterns and findings through visual storytelling.",
    file: dataVisualizationPdf,
  },
  {
    title: "Git",
    category: "Workflow",
    summary: "Version control fundamentals for collaborative and organized development.",
    file: gitPdf,
  },
  {
    title: "Intermediate SQL",
    category: "Database",
    summary: "Deeper query skills for filtering, grouping, and working with relational data.",
    file: intermediateSqlPdf,
  },
  {
    title: "Machine Learning",
    category: "AI",
    summary: "Introductory machine learning concepts and model-oriented thinking.",
    file: machineLearningPdf,
  },
  {
    title: "Python Certificate",
    category: "Programming",
    summary: "Python skills that support automation, analysis, and general problem solving.",
    file: pythonCertPdf,
  },
  {
    title: "SQL",
    category: "Database",
    summary: "Core database querying skills for working with structured information.",
    file: sqlPdf,
  },
];

export const closingCards = [
  {
    title: "Frontend Builds",
    description: "Landing pages, dashboards, and polished responsive interfaces.",
  },
  {
    title: "Visual Design",
    description: "Layouts, graphics, and presentation-ready digital assets.",
  },
  {
    title: "Data Learning",
    description: "SQL, Python, and machine learning foundations for data-driven growth.",
  },
  {
    title: "Continuous Growth",
    description: "Focused on improving through certifications and real project experience.",
  },
];
