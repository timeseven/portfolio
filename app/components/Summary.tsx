import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import Image from "next/image";
import me from "../../public/me.png";

interface SummaryProps {
  darkMode: boolean;
  setDarkMode: () => void;
}
export default function Summary({ darkMode, setDarkMode }: SummaryProps) {
  return (
    <section className="min-h-screen">
      <nav className="py-10 mb-12 flex justify-between">
        <h1 className="text-xl font-burtons text-gray-800 dark:text-gray-100">Portfolio</h1>
        <ul className="flex items-center">
          <li key="1" className="text-gray-700 dark:text-gray-100">
            {darkMode ? (
              <BsFillSunFill onClick={() => setDarkMode()} className="cursor-pointer text-xl" />
            ) : (
              <BsFillMoonStarsFill onClick={() => setDarkMode()} className="cursor-pointer text-xl" />
            )}
          </li>
          <li key="2">
            <a
              className="bg-gradient-to-r from-cyan-500 to-teal-500 bg-cyan-500 dark:from-purple-500 dark:to-pink-500 dark:bg-purple-500 text-white px-4 py-2 rounded-md ml-8"
              href="/resume.pdf"
              download="Even Qian-Resume"
            >
              Resume
            </a>
          </li>
        </ul>
      </nav>
      <div className="text-center p-10">
        <h2 className="text-5xl py-2 text-cyan-600 dark:text-purple-600 font-medium md:text-6xl">Even Qian</h2>
        <h3 className="text-2xl py-2 text-gray-800 dark:text-gray-100">Web Developer</h3>
        <p className="text-xl max-w-xl mx-auto text-left py-5 leading-8  text-gray-800 dark:text-gray-100">
          I like to build amazing web applications using HTML5, CSS3 and JavaScript. Also, I am a big fan of TypeScript,
          React.js, Tailwind CSS and Node.js.
        </p>
      </div>
      <div className="text-5xl flex justify-center gap-16 py-3 text-gray-700 dark:text-gray-100">
        <a href="https://www.linkedin.com/in/even-qian/" target="_blank">
          <AiFillLinkedin />
        </a>
        <a href="https://github.com/timeseven" target="_blank">
          <AiFillGithub />
        </a>
      </div>
      <div className="relative mx-auto bg-gradient-to-r from-cyan-500 to-teal-500 dark:from-purple-500 dark:to-pink-500 rounded-full w-60 h-60 mt-20 overflow-hidden">
        <Image src={me} alt="me" width={300} height={300} sizes="100vh" priority={true} />
      </div>
    </section>
  );
}
