import React from "react";
import {FaPython, FaReact} from "react-icons/fa";
import {LuGraduationCap} from "react-icons/lu";
import TheLastShowImg from "@/public/TheLastShowImage.jpg";
import BandistLogo from "@/public/BandistLogo.png";
import CampusBuddyLogo from "@/public/CampusBuddyIcon.png";
import DataStructs from "@/public/datastructures.jpg";
import wordle from "@/public/wordle.jpg";
import doomsday from "@/public/JohnConway.jpg";
import flames from "@/public/flames.png";
import balancr from "@/public/balancr.png";
import Deer from "@/public/deer.jpg";
import Tether from "@/public/tether.png"
import ReliefMap from "@/public/ReliefMap.png"
import CleanCraving from "@/public/CleanCraving.png"

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
            "3.92/4.00 GPA. Schulich School of Engineering Deans List (2021 - 2024)." +
            " Extra-Curriculars: TechStartUCalgary, Relectric",
        icon: React.createElement(LuGraduationCap),
        date: "2021 - Present",
    },
    {
        title: "Software Engineer, Intern - MedMe Health (YC W21)",
        location: "Calgary, AB",
        description:
            "Writing full stack features to support pharmacists to become community healthcare hubs.",
        icon: React.createElement(FaReact),
        date: "May 2025 - Aug 2025",
    },
    {
        title: "Undergraduate Researcher - SE-ALL Lab (U of C)",
        location: "Calgary, AB",
        description:
            "Leading research on using LLMs to support software engineers with ADHD. Results accepted to 40th IEEE/ACM International Conference on Automated Software Engineering, ASE 2025.",
        icon: React.createElement(FaReact),
        date: "May 2025 - Aug 2025",
    },
    {
        title: "President - Tech Start UCalgary",
        location: "Calgary, AB",
        description:
            "Building a space for 200+ student entrepreneurs to create innovative, cutting-edge startups that solve real problems.",
        icon: React.createElement(FaReact),
        date: "May 2024 - May 2025",
    },
    {
        title: "Software Engineer, Intern - Arcurve Inc.",
        location: "Calgary, AB",
        description:
            "Mission critical client project using .NET, C#, and MS SQL. As well as Python and Databricks for data engineering.",
        icon: React.createElement(FaReact),
        date: "May 2024 - April 2025",
    },
    {
        title: "Software Engineer, Intern - Arcurve Inc.",
        location: "Calgary, AB",
        description:
            "End to end, full stack development for a client facing project in an Agile environment.",
        icon: React.createElement(FaReact),
        date: "May 2023 - Aug 2023",
    },
    {
        title: "Project Manager - Tech Start UCalgary",
        location: "Calgary, AB",
        description:
            "Led a team of 8 engineers, business strategists and UI designers to build a CampusBuddy, a mobile app connecting university students.",
        icon: React.createElement(FaReact),
        date: "Sept 2023 - June 2024",
    },
    {
        title: "Software & Geomatics Engineer - Relectric Car Team",
        location: "Calgary, AB",
        description:
            "Electrifying a 1966 Volvo P220.",
        icon: React.createElement(FaReact),
        date: "Jan 2022 - Dec 2022",
    },
    {
        title: "Data & Analytics Intern - Olsen Consulting",
        location: "Calgary, AB",
        description:
            "Creating custom SQL integrations & a data portal using Python, Tkinter, and OpenAI.",
        icon: React.createElement(FaPython),
        date: "June 2022 - Aug 2022",
    },
];

export const projectsData = [
    {
        title: "CampusBuddy",
        description:
            "A React Native application connecting university student together through events, posts exclusive initiatives.",
        tags: ["React Native", "TypeScript", "MySQL", "Prisma", "Node.js", "Express", "AWS"],
        imageUrl: CampusBuddyLogo,
        link: "https://github.com/AarshShah9/CampusBuddy/",
    },
    {
        title: "Tether",
        description: "A dock created with React, TypeScript, Electron and Flask to support SWE's with ADHD.",
        tags: ["Electron", "TypeScript", "Flask", "Python", "LangChain", "React", "Gemini"],
        imageUrl: Tether,
        link: "https://github.com/SeallLab/Tether"
        
    },
    {
        title: "Hack the Change 2024",
        description: "A global map that identifies crisies going on and the organizations that are supporting.",
        tags: ["Next.js", "Gemini", "OpenStreetMap"],
        imageUrl: ReliefMap,
        link: "https://github.com/AarshShah9/Relief-Map"
    },
    {
        title: "nwHacks2025",
        description: "CleanCraving, an all in one solution for recipes, food tracking and food waste.",
        tags: ["React Native", "Flask", "Python", "TypeScript", "Gemini"],
        imageUrl: CleanCraving,
        link: "https://github.com/AarshShah9/nwHacks2025"
    },
    {
        title: "Bandist",
        description:
            "Collaboratively built an open-source social app streamlining event awareness using Flutter, Dart, Python & Django using OAuth 2.0 with Spotify's REST Web API.",
        tags: ["Flutter", "Dart", "SQLite", "Django", "Python"],
        imageUrl: BandistLogo,
        link: "https://github.com/techstartucalgary/Bandist/tree/dev",
    },
    {
        title: "Doomsday Program",
        description:
            "As a kid I had this trick where you give me any date in the past or future and I could give you the day of the week. I recreated the algorithm I did in my head in Python.",
        tags: ["Python"],
        imageUrl: doomsday,
        link: "https://github.com/AarshShah9/DoomsdayProgram",

    },
    {
        title: "Wordle Game",
        description:
            "A recreation of the popular NY Times Wordle game.",
        tags: ["JavaScript", "HTML", "CSS"],
        imageUrl: wordle,
        link: "https://github.com/AarshShah9/Wordle-Game",

    },
    {
        title: "Wildlife Rescue Scheduler",
        description:
            "A Java application using Java Swing that schedules tasks based on a MySQL database.",
        tags: ["Java", "MySQL", "Java Swing"],
        imageUrl: Deer,
        link: "https://github.com/AarshShah9/Wildlife-Rescue-Scheduler/",

    },
    {
        title: "The Last Show",
        description:
            "Full stack application with React and AWS that generates obituaries for people.",
        tags: ["React", "JavaScript", "AWS Lambda", "DynamoDB", "Cloudinary", "AWS Polly"],
        imageUrl: TheLastShowImg,
        link: "https://github.com/AarshShah9/The-Last-Show",

    },
    {
        title: "Calgary Flame Sports Bank Fundraiser",
        description:
            "Raised $2200 for the Calgary Flames Sports Banks through a CSR project; hosted a soccer event, which brought awareness to hundreds in the community, and collected essential items such as hockey skates.",
        tags: [],
        imageUrl: flames,
        link: "https://www.linkedin.com/posts/aarsh-shah-0a84161a9_for-the-past-3-months-while-interning-at-activity-7097055653717831680-L9Fi?utm_source=share&utm_medium=member_desktop",

    },

    {
        title: "Calgary Hacks 2022",
        description:
            "Led my team in the development of an application with Firebase and Svelte called ‘Balancr’ that targets youth in prioritizing their mental and physical health.",
        tags: ["Firebase", "Svelte", "JavaScript", "HTML", "CSS"],
        imageUrl: balancr,
        link: "https://github.com/AarshShah9/calgary-hacks",

    },

    {
        title: "Data Structure Library",
        description:
            "Crafted a versatile custom library, with JUnit test suite.",
        tags: ["Java", "JUnit", "Maven"],
        imageUrl: DataStructs,
        link: "https://github.com/AarshShah9/Data-Structures-Library",

    },

] as const;

export const skillsData = [
    "TypeScript",
    "React",
    "Node.js",
    "PostgreSQL",
    "Python",
    "Flask",
    "Next.js",
    "Nest.js",
    ".NET",
    "C#",
    "Git",
    "TailwindCSS",
    "Prisma",
    "REST",
    "GraphQL",
    "Express",
    "Spring",
    "Java",
    "Flutter",
    "Dart",
    "tRPC",
    "AWS",
    "Linux",
    "Figma",
    "HTML",
    "CSS",
] as const;

export type RecruiterBannerData = {
    name: string;
    colors: string[];
    backgroundColor: string[];
    companyWhy?: string;
    demoLink?: string;
}

export const recruiterBannerData: RecruiterBannerData[] = [
    {
        name: "figma",
        // figmas colors: #f24e1e, #ff7262, #a259ff, #1abcfe, #0acf83
        colors: ["#f24e1e", "#ff7262", "#a259ff", "#1abcfe", "#0acf83"],
        backgroundColor: ["#a259ff"],
        companyWhy: "I love building pixel perfect designs and am excited to join a company that has enabled me to do so.",
    },
    {
        name: "abridge",
        colors: ["#e92d24", "#faf5f2"],
        backgroundColor: ["#e92d24"],
        companyWhy: "Health tech is a passion of mine as its important to me I make a difference.",
    }
];