"use client";
import { useState } from "react";
import { BsFillMoonStarsFill, BsLink45Deg } from "react-icons/bs";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import Image from "next/image";
import me from "../public/me.png";
import proj1 from "../public/post.jpg";
export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <main className="bg-white px-10 dark:bg-gray-900">
        {/* Summary */}
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl font-burtons">Even Qian</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => {
                    setDarkMode(!darkMode);
                    console.log("3333");
                  }}
                  className="cursor-pointer text-xl"
                />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-purple-500 to-pink-500 bg-purple-500 text-white px-4 py-2 rounded-md ml-8"
                  href="#"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10">
            <h2 className="text-5xl py-2 text-purple-600 font-medium md:text-6xl">Even Qian</h2>
            <h3 className="text-2xl py-2">Front End Web Developer</h3>
            <p className="text-md py-5 leading-8 text-gray-800">
              I like to build amazing web applications using HTML5, CSS3 and JavaScript. Also, I am a big fan of
              TypeScript, React.JS and Tailwind CSS.
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
            <AiFillLinkedin />
            <AiFillGithub />
          </div>
          <div className="relative mx-auto bg-gradient-to-r from-purple-500 to-pink-500 rounded-full w-60 h-60 mt-20 overflow-hidden">
            <Image src={me} alt="me" layout="fill" objectFit="cover" />
          </div>
        </section>
        {/* About Me */}
        <section>
          <div>
            <h3 className="text-2xl py-2">Skill Set</h3>
            <p className="text-md py-5 leading-8 text-gray-800">asdfadfadfadfasdgadfadfasdfadf</p>
          </div>
        </section>
        {/* Projects */}
        <section className="bg-white dark:bg-gray-900 bg-no-repeat bg-cover bg-center">
          <div className="text-5xl text-center"> My Coding Projects</div>
          <div className="px-5 sm:mx-[5.55555%] xl:mx-[11.1111%] pt-12 lg:pt-16 pb-12 lg:pb-16">
            <div className="flex sm:justify-between items-center flex-col md:flex-row-reverse">
              <div className="w-full md:w-2/5 lg:pr-[5%] flex flex-col">
                <h2 className="mt-0 text-center md:text-left text-2xl leading-7 md:text-[32px] md:leading-tight font-extrabold mb-4 text-gray-900 dark:text-white">
                  Live Posting and Commenting System
                </h2>
                <p className="leading-7 mb-3 text-center md:text-left md:text-xl md:leading-8 text-gray-700 dark:text-white">
                  A full stack posting and commenting system using NextJS, TanStack React Query between client and
                  server, Prisma and PostgreSQL for creating and accessing database, and authentication with Next Auth.
                </p>
                <h2 className="flex justify-start text-xl">
                  <BsLink45Deg className="text-2xl" />
                  <a href="#">Github Repo</a>
                </h2>
                <div className="mt-4 grid grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-x-4 gap-y-1">
                  <div className="flex justify-center md:justify-start items-center text-lg">
                    <div className="flex-shrink-0 flex justify-center items-center w-5 h-5 rounded-full mr-3 text-sm bg-sky-500 text-white">
                      <svg
                        stroke="currentColor"
                        fill="none"
                        stroke-width="2"
                        viewBox="0 0 24 24"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <div>
                      <span className="text-gray-700 dark:text-gray-100 leading-tight inline-block min-w-[120px]">
                        NextJS
                      </span>
                    </div>
                  </div>
                  <div className="flex justify-center md:justify-start items-center text-lg">
                    <div className="flex-shrink-0 flex justify-center items-center w-5 h-5 rounded-full mr-3 text-sm bg-sky-500 text-white">
                      <svg
                        stroke="currentColor"
                        fill="none"
                        stroke-width="2"
                        viewBox="0 0 24 24"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <div>
                      <span className="text-gray-700 dark:text-gray-100 leading-tight inline-block min-w-[120px]">
                        Tanstack
                      </span>
                    </div>
                  </div>
                  <div className="flex justify-center md:justify-start items-center text-lg">
                    <div className="flex-shrink-0 flex justify-center items-center w-5 h-5 rounded-full mr-3 text-sm bg-sky-500 text-white">
                      <svg
                        stroke="currentColor"
                        fill="none"
                        stroke-width="2"
                        viewBox="0 0 24 24"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <div>
                      <span className="text-gray-700 dark:text-gray-100 leading-tight inline-block min-w-[120px]">
                        Prisma
                      </span>
                    </div>
                  </div>
                  <div className="flex justify-center md:justify-start items-center text-lg">
                    <div className="flex-shrink-0 flex justify-center items-center w-5 h-5 rounded-full mr-3 text-sm bg-sky-500 text-white">
                      <svg
                        stroke="currentColor"
                        fill="none"
                        stroke-width="2"
                        viewBox="0 0 24 24"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <div>
                      <span className="text-gray-700 dark:text-gray-100 leading-tight inline-block min-w-[120px]">
                        PostgreSQL
                      </span>
                    </div>
                  </div>
                  <div className="flex justify-center md:justify-start items-center text-lg">
                    <div className="flex-shrink-0 flex justify-center items-center w-5 h-5 rounded-full mr-3 text-sm bg-sky-500 text-white">
                      <svg
                        stroke="currentColor"
                        fill="none"
                        stroke-width="2"
                        viewBox="0 0 24 24"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <div>
                      <span className="text-gray-700 dark:text-gray-100 leading-tight inline-block min-w-[120px]">
                        Next Auth
                      </span>
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <button className="bg-sky-500 py-2 px-4 rounded-md">View Demo</button>
                </div>
              </div>
              <div className="w-full mt-10 mb-0 md:w-1/2 md:mt-0 md:mb-0">
                <Image src={proj1} alt="project1" width={1080} height={717} sizes="100vh" />
              </div>
            </div>
          </div>
        </section>

        {/* education */}
        <section>
          <div>
            <div></div>
            <div></div>
          </div>
        </section>
        {/* contact */}
        <section>
          <div>
            <div></div>
            <div></div>
          </div>
        </section>
      </main>
    </div>
  );
}
