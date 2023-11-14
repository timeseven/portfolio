import { BsGithub } from "react-icons/bs";
import Image, { StaticImageData } from "next/image";
import insImage from "../../public/instagram.jpg";
import petImage from "../../public/evenenpets.jpg";
import ebayImage from "../../public/ebayclone.jpg";
import movieImage from "../../public/movie.jpg";
import postImage from "../../public/post.jpg";
import homepageImage from "../../public/homepage.jpg";
import crawlerImage from "../../public/crawler.jpg";

export default function ProjectExperience() {
  const projData = [
    {
      id: 7,
      projectName: "Instagram Clone",
      projectIntro: `Developed a mobile-first responsive social media application to allow users to register, login, reset password, and use various features such as uploading pictures and videos, following other users, commenting and liking
        on posts, editing profile, and sending real-time messages, etc.`,
      githubLink: [{ name: "Github Repo", link: "https://github.com/timeseven/instagram-clone" }],
      demoLink: "http://ec2-54-66-16-198.ap-southeast-2.compute.amazonaws.com/",
      skills: ["TypeScript", "React.js", "MongoDB", "Express", "Tailwind CSS", "AWS"],
      projectImg: insImage,
    },
    {
      id: 6,
      projectName: "E-commerce Website + Admin Dashboard(CMS)",
      projectIntro: `Designed an E-commerce website to allow customers to browse products in different categories, add/remove
        products to/from cart, checkout using Stripe, and show purchased orders. Also, An admin dashboard is
        available for various features such as creating the corresponding dashboard for the store, monitoring the sales
        and orders info of the store, and adding/updating/removing billboards, categories and products for it.`,
      githubLink: [
        { name: "Github Store Repo", link: "https://github.com/timeseven/ecommerce-store" },
        { name: "Github Dashboard Repo", link: "https://github.com/timeseven/ecommerce-admin" },
      ],
      demoLink: "https://ecommerce-store-gamma-snowy.vercel.app/",
      skills: ["Next.js", "Headless UI", "Prisma", "MySQL", "Tailwind CSS", "Stripe"],
      projectImg: petImage,
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
                  className="h-full mt-10 mb-0 max-w-[700px] md:w-1/2 md:mr-7 md:mt-0 md:mb-0 ring-4 ring-black rounded-lg overflow-hidden"
                  title={item.demoLink || item.githubLink[0].link}
                >
                  <Image
                    src={item.projectImg}
                    alt="project1"
                    className="py-2 aspect-video object-cover object-center"
                    sizes="100vw"
                  />
                </a>
              )}
              <div className="w-full mt-5 md:w-1/2 lg:pr-[5%] flex flex-col">
                <h2 className="mt-0 text-center md:text-left text-2xl leading-7 md:text-[32px] md:leading-tight font-extrabold mb-4 text-gray-900 dark:text-white">
                  {item.projectName}
                </h2>
                <p className="leading-7 mb-3 text-left text-xl md:leading-8 text-gray-700 dark:text-white">
                  {item.projectIntro}
                </p>
                {/* {item.githubLink &&
                  item.githubLink.map((git) => {
                    return (
                      <h2 key={git.name} className="flex justify-start text-xl text-gray-700 dark:text-gray-100">
                        <BsLink45Deg className="text-2xl" />
                        <a href={git.link} target="_blank">
                          {git.name}
                        </a>
                      </h2>
                    );
                  })} */}
                {item.skills.length > 0 && (
                  <div className="mt-4 grid grid-cols-2 gap-x-10 md:gap-x-8 lg:gap-x-4 gap-y-1">
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
                <div className="flex items-center justify-start gap-x-8 mt-4">
                  {item.demoLink && (
                    <a
                      className="font-semibold h-12 w-28 p-3 bg-sky-500 text-center rounded-full hover:scale-110"
                      href={item.demoLink}
                      target="_blank"
                      title={item.demoLink}
                    >
                      Demo
                    </a>
                  )}
                  {item.githubLink &&
                    item.githubLink.map((git) => {
                      return (
                        <a
                          key={git.link}
                          className="relative h-12 w-28 p-3 bg-neutral-200 border rounded-full hover:scale-110"
                          href={git.link}
                          target="_blank"
                          title={git.name}
                        >
                          <BsGithub className="absolute top-2 left-9 h-8 w-8" />
                        </a>
                      );
                    })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
