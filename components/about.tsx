"use client";

import React from "react";
import SectionHeading from "./section-heading";
import {motion} from "framer-motion";
import {useSectionInView} from "@/lib/hooks";

export default function About() {
    const {ref} = useSectionInView("About");


    return (
        <motion.section
            ref={ref}
            className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
            initial={{opacity: 0, y: 100}}
            animate={{opacity: 1, y: 0}}
            transition={{delay: 0.175}}
            id="about"
        >
            <SectionHeading>About me</SectionHeading>
            <p className="mb-3">
                I am a SWE Student (currently on my internship year) at the University of Calgary
            </p>

            <p>
                <span className="italic">When I'm not coding</span>, I enjoy playing
                video games, watching rom-coms, and playing basketball. I also enjoy{" "}
                <span className="font-medium">learning new things</span>. I am currently
                learning how to play the guitar, specifically
                <span className="font-medium">{" "}Stay</span>{" "}by{" "}
                <span className="font-medium">Post Malone</span>

            </p>
        </motion.section>
    );
}
