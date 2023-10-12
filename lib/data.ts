import React from "react";
import {FaPython, FaReact} from "react-icons/fa";
import {LuGraduationCap} from "react-icons/lu";
import TheLastShowImg from "@/public/TheLastShowImage.jpg";
import BandistLogo from "@/public/BandistLogo.png";

export const links = [
    {
        name: "Home",
        hash: "#home",
    },
    {
        name: "About",
        hash: "#about",
    },
    {
        name: "Projects",
        hash: "#projects",
    },
    {
        name: "Skills",
        hash: "#skills",
    },
    {
        name: "Experience",
        hash: "#experience",
    },
    {
        name: "Contact",
        hash: "#contact",
    },
] as const;

export const experiencesData = [
    {
        title: "Software Engineering",
        location: "Calgary, AB",
        description:
            "3.89/4.00 GPA. Schulich School of Engineering Deans List (2021 - 2023). " +
            "Extra-Curriculars: TechStartUCalgary, Relectric",
        icon: React.createElement(LuGraduationCap),
        date: "2021 - Present",
    },
    {
        title: "Data & Analytics Intern - Olsen Consulting",
        location: "Calgary, AB",
        description:
            "Creating custom SQL integrations & a data portal using Python, Tkinter, and OpenAI.",
        icon: React.createElement(FaPython),
        date: "June 2022 - Aug 2022",
    },
    {
        title: "Software Developer Intern - Arcurve Inc.",
        location: "Calgary, AB",
        description:
            "End to end, full stack development for a client facing project in an Agile environment.",
        icon: React.createElement(FaReact),
        date: "2021 - present",
    },
] as const;

export const projectsData = [
    {
        title: "Bandist",
        description:
            "Front-end developer building an entertainment focused social app.",
        tags: ["Flutter", "Dart", "SQLite", "Django", "Python"],
        imageUrl: BandistLogo,
        link: "https://github.com/techstartucalgary/Bandist/tree/dev",
    },
    {
        title: "The Last Show",
        description:
            "Full stack application with React and AWS that generates obituaries for people.",
        tags: ["React", "JavaScript", "AWS Lambda", "DynamoDB", "Cloudinary", "AWS Polly"],
        imageUrl: TheLastShowImg,
        link: "https://github.com/AarshShah9/The-Last-Show",

    },
] as const;

export const skillsData = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    ".NET",
    "C#",
    "C/C++",
    "Next.js",
    "Node.js",
    "Git",
    "Tailwind CSS",
    "Prisma",
    "MongoDB",
    "REST",
    "Express",
    "Python",
  "Java",
  "MySQL",
  "Flutter",
  "Dart",
  "Bootstrap",
  "Entity Framework",
  "tRPC",
  "AWS",
  "Linux",
  "Figma"
] as const;
