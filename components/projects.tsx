"use client";

import React from "react";
import SectionHeading from "./section-heading";
import {projectsData} from "@/lib/data";
import Project from "./project";
import {useSectionInView} from "@/lib/hooks";
import Link from "next/link";

export default function Projects({num = 3}) {
  const { ref } = useSectionInView("Projects", 0.5);

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
      <SectionHeading>My projects</SectionHeading>
      <div>
        {projectsData.slice(0, num).map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
        <div className={"flex flex-col items-center pt-8"}>
        <Link
            href={"/blog"}
            className="group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 dark:bg-white dark:bg-opacity-10 disabled:scale-100 disabled:bg-opacity-65"
        >
               More
        </Link>
        </div>
    </section>
  );
}
