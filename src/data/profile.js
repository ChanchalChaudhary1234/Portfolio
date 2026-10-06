import {
  BarChart3,
  BrainCircuit,
  BriefcaseBusiness,
  Code2,
  LayoutDashboard,
} from "lucide-react";

export const profile = [
  {
    id: "data-analyst",
    title: "Data Analyst",
    description:
      "Transform raw data into clear insights through analysis, visualization and business-focused reporting.",
    path: "/data-analyst",
    icon: BarChart3,
    skills: ["Python", "SQL", "Pandas", "EDA"],
  },
  {
    id: "bi",
    title: "BI Developer",
    description:
      "Build interactive dashboards, data models and KPI reporting systems for better business decisions.",
    path: "/bi",
    icon: LayoutDashboard,
    skills: ["Power BI", "DAX", "SQL", "Power Query"],
  },
  {
    id: "python-developer",
    title: "Python Developer",
    description:
      "Develop APIs, backend systems, automation workflows and practical Python applications.",
    path: "/python-developer",
    icon: Code2,
    skills: ["Python", "FastAPI", "Django", "REST APIs"],
  },
  {
    id: "data-scientist",
    title: "Data Scientist",
    description:
      "Explore data, engineer features and build machine-learning solutions for prediction and discovery.",
    path: "/data-scientist",
    icon: BrainCircuit,
    skills: ["ML", "Statistics", "Scikit-learn", "EDA"],
  },
  {
    id: "freelance",
    title: "Freelance",
    description:
      "Help clients solve practical data, dashboard, automation and Python development problems.",
    path: "/freelance",
    icon: BriefcaseBusiness,
    skills: ["Analytics", "Dashboards", "Automation", "Python"],
  },
];