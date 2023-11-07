import { BsLink45Deg } from "react-icons/bs";
import Image, { StaticImageData } from "next/image";
import insImage from "../../public/instagram.jpg";
import ebayImage from "../../public/ebayclone.jpg";
import movieImage from "../../public/movie.jpg";
import postImage from "../../public/post.jpg";
import homepageImage from "../../public/homepage.jpg";
import crawlerImage from "../../public/crawler.jpg";
import { useState } from "react";

export default function ProjectExperience() {
  const projData = [
    {
      id: 6,
      projectName: "Instagram Clone",
      projectIntro: `Developed a mobile-first responsive social media application to allow users to register, login, reset password, and use various features such as uploading pictures and videos, following other users, commenting and liking
        on posts, editing profile, and sending real-time messages, etc.`,
      githubLink: [{ name: "Github Repo", link: "https://github.com/timeseven/instagram-clone" }],
      demoLink: "http://ec2-54-66-16-198.ap-southeast-2.compute.amazonaws.com/",
      skills: ["TypeScript", "React.js", "MongoDB", "Express", "Tailwind CSS", "AWS"],
      projectImg: insImage,
    },
    {
      id: 5,
      projectName: "Ebay Clone",
      projectIntro:
        "Built an Ebay clone website to allow users to login, browse products, add products to cart, add/modify address, checkout and show purchased orders.",
      githubLink: [{ name: "Github Repo", link: "https://github.com/timeseven/ebay-clone" }],
      demoLink: "https://even-ebay-clone.vercel.app/",
      skills: ["Next.js", "React.js", "Prisma", "PostgreSQL", "Supabase", "Stripe"],
      projectImg: ebayImage,
    },
    {
      id: 4,
      projectName: "Movie Gallery App",
      projectIntro:
        "Developed a react native application that allows users to browse and search movies, check the movie's detailsand its trailer.",
      githubLink: [{ name: "Github Repo", link: "https://github.com/timeseven/movie-gallery" }],
      demoLink: "http://ec2-3-27-250-91.ap-southeast-2.compute.amazonaws.com/",
      skills: ["React Native", "TypeScript", "GraphQL", "AWS", "Jenkins", "Docker"],
      projectImg: movieImage,
    },
    {
      id: 3,
      projectName: "Live Posting and Commenting System",
      projectIntro:
        "A full stack posting and commenting system using Next.js, TanStack React Query between client and server, Prisma and PostgreSQL for creating and accessing database, and authentication with Next Auth.",
      githubLink: [{ name: "Github Repo", link: "https://github.com/timeseven/easy-post" }],
      demoLink: "https://easy-post-eosin.vercel.app/",
      skills: ["Next.js", "Tanstack", "Prisma", "PostgreSQL", "Next Auth"],
      projectImg: postImage,
    },
    {
      id: 2,
      projectName: "Global News Administration System",
      projectIntro:
        "A comprehensive global news admin system with features including access management, data analysis, user roles, and news publication using React and Ant Design.",
      githubLink: [{ name: "Github Repo", link: "https://github.com/timeseven/press-admin" }],
      demoLink: "https://press-admin.netlify.app/",
      skills: ["React", "React Router", "Redux", "Ant Design"],
      projectImg: homepageImage,
    },
    {
      id: 1,
      projectName: "Basic Web Crawler",
      projectIntro:
        "A web crawler to navigate a specific website, utilizing Puppeteer to extract titles and text, then display the data on a webpage. Involved in both frontend and backend development",
      githubLink: [
        { name: "Github Frontend Repo", link: "https://github.com/timeseven/crawler-frontend" },
        { name: "Github Backend Repo", link: "https://github.com/timeseven/crawler-backend" },
      ],
      demoLink: "",
      skills: ["React", "TypeScript", "Node.js", "RESTful APIs", "Express", "Echarts"],
      projectImg: crawlerImage,
    },
  ];
  return (
    <section className="bg-no-repeat bg-cover bg-center">
      <div className="text-4xl text-center font-extrabold text-gray-900 dark:text-gray-100">My Coding Projects🚀</div>
      <div className="flex justify-between flex-col p-5 mt-10 sm:mx-[5.55555%] xl:mx-[11.1111%]">
        {projData.map((item) => {
          return (
            <div key={item.id} className="flex sm:justify-between items-center flex-col pb-10 md:flex-row">
              {item.projectImg && (
                <a
                  href={item.demoLink || item.githubLink[0].link}
                  target="_blank"
                  className="w-full mt-10 mb-0 md:w-2/5 md:mr-7 md:mt-0 md:mb-0"
                >
                  <Image src={item.projectImg} alt="project1" width={1080} height={717} sizes="100vh" />
                </a>
              )}
              <div className="w-full md:w-3/5 lg:pr-[5%] flex flex-col">
                <h2 className="mt-0 text-center md:text-left text-2xl leading-7 md:text-[32px] md:leading-tight font-extrabold mb-4 text-gray-900 dark:text-white">
                  {item.projectName}
                </h2>
                <p className="leading-7 mb-3 text-left text-xl md:leading-8 text-gray-700 dark:text-white">
                  {item.projectIntro}
                </p>
                {item.githubLink &&
                  item.githubLink.map((git) => {
                    return (
                      <h2 key={git.name} className="flex justify-start text-xl text-gray-700 dark:text-gray-100">
                        <BsLink45Deg className="text-2xl" />
                        <a href={git.link} target="_blank">
                          {git.name}
                        </a>
                      </h2>
                    );
                  })}
                {item.skills.length > 0 && (
                  <div className="mt-4 grid grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-x-4 gap-y-1">
                    {item.skills.map((skill) => {
                      return (
                        <div key={skill} className="flex justify-center md:justify-start items-center text-lg">
                          <div className="flex-shrink-0 flex justify-center items-center w-5 h-5 rounded-full mr-3 text-sm bg-sky-500 text-white">
                            <svg
                              stroke="currentColor"
                              fill="none"
                              strokeWidth="2"
                              viewBox="0 0 24 24"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              height="1em"
                              width="1em"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                          </div>
                          <div>
                            <span className="text-gray-700 dark:text-gray-100 leading-tight inline-block min-w-[120px]">
                              {skill}
                            </span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
                {item.demoLink && (
                  <div className="mt-4">
                    <a href={item.demoLink} target="_blank">
                      <button className="bg-sky-500 py-2 px-4 rounded-md">View Demo</button>
                    </a>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
