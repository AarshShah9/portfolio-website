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
    {
        title: "Software Developer Intern - Arcurve Inc.",
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
        title: "Software Developer Intern - Arcurve Inc.",
        location: "Calgary, AB",
        description:
            "Mission critical client project using .NET, C#, and MS SQL. As well as Python and Databricks for data engineering.",
        icon: React.createElement(FaReact),
        date: "May 2024 - Dec 2024",
    },
    {
        title: "President - Tech Start UCalgary",
        location: "Calgary, AB",
        description:
            "Building a space for 60 student entrepreneurs to create innovative, cutting-edge startups that solve real problems.",
        icon: React.createElement(FaReact),
        date: "May 2024 - Present",
    },

] as const;

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
        title: "Bandist",
        description:
            "Collaboratively built an open-source social app streamlining event awareness using Flutter, Dart, Python & Django using OAuth 2.0 with Spotify’s REST Web API.",
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
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Go",
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
