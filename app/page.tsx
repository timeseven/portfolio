"use client";
import { useState } from "react";

import ProjectExperience from "./components/ProjectExperience";
import HorizontalRule from "./components/HorizontalRule";
import Summary from "./components/Summary";
import Skills from "./components/Skills";
import WorkExperience from "./components/WorkExperience";
import Education from "./components/Educstion";
import Contact from "./components/Contact";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <main className="bg-white px-10 dark:bg-gray-900">
        {/* Summary */}
        <Summary
          setDarkMode={() => {
            setDarkMode(!darkMode);
          }}
          darkMode={darkMode}
        />
        {/* Skills */}
        <Skills />
        {/* horizontal rule */}
        <HorizontalRule />
        {/* Projects */}
        <ProjectExperience />
        {/* horizontal rule */}
        <HorizontalRule />
        {/* work experience */}
        <WorkExperience />
        {/* horizontal rule */}
        <HorizontalRule />
        {/* Education */}
        <Education />
        <HorizontalRule />
        <Contact />
      </main>
    </div>
  );
}
