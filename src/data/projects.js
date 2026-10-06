import { BarChart3, Filter, Globe2, TrendingUp } from "lucide-react";

export const featuredProject = {
  id: "meta-ad-performance",
  title: "Meta Ad Performance Dashboard",
  category: "Business Intelligence · Data Analytics",
  status: "Dashboard Project",

  description:
    "An interactive Power BI dashboard designed to analyze advertising performance across Facebook and Instagram, bringing campaign metrics, audience insights and performance trends into one reporting experience.",

  highlights: [
    { icon: BarChart3, text: "Campaign performance and KPI reporting" },
    { icon: Filter, text: "Interactive campaign and measure filters" },
    { icon: Globe2, text: "Audience and geographic analysis" },
    { icon: TrendingUp, text: "Weekly and hourly performance trends" },
  ],

  skills: ["Power BI", "Data Analytics", "Data Visualization", "Dashboard Design"],

  images: [
    "/images/projects/meta-dashboard-facebook.png",
    "/images/projects/meta-dashboard-instagram.png",
  ],

  path: "/projects/meta-ad-performance",
  github: null,
  live: null,
};