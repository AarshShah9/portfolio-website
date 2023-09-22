import React from "react";
import {FaPython, FaReact} from "react-icons/fa";
import {LuGraduationCap} from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

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
        title: "CorpComment",
        description:
            "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
        tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
        imageUrl: corpcommentImg,
    },
    {
        title: "rmtDev",
        description:
            "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
        tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
        imageUrl: rmtdevImg,
    },
    {
        title: "Word Analytics",
        description:
            "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
        tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
        imageUrl: wordanalyticsImg,
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
    "Tailwind",
    "Prisma",
    "MongoDB",
    "REST",
    "Express",
    "Python",
] as const;
