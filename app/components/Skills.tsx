export default function Skills() {
  return (
    <section className="text-center">
      <div>
        <h3 className="text-4xl text-center font-extrabold text-gray-900 dark:text-gray-100">Skill Set👓</h3>
        <ul className="max-w-3xl mx-auto p-4 text-xl text-left leading-7 text-gray-800 dark:text-gray-100">
          <li key="lan" className="mt-2 lg:flex lg:justify-between lg:gap-x-4">
            <span className="w-full lg:w-1/4">Language: </span>
            <span className="w-full lg:w-3/4">
              <strong>JavaScript, TypeScript,</strong> Python, HTML5, CSS3
            </span>
          </li>
          <li key="fe" className="mt-2 lg:flex lg:justify-between lg:gap-x-4">
            <span className="w-full lg:w-1/4">Front End: </span>
            <span className="w-full lg:w-3/4">
              <strong>React, Redux, Next.js, Tailwind CSS,</strong> Headless UI, Shadcn UI, React Native, Bootstrap
            </span>
          </li>
          <li key="be" className="mt-2 lg:flex lg:justify-between lg:gap-x-4">
            <span className="w-full lg:w-1/4">Back End: </span>
            <span className="w-full lg:w-3/4">
              <strong>Node.js, Express,</strong> Restful API, Prisma, NestJS, GraphQL, TanStack
            </span>
          </li>
          <li key="db" className="mt-2 lg:flex lg:justify-between lg:gap-x-4">
            <span className="w-full lg:w-1/4">DB: </span>
            <span className="w-full lg:w-3/4">
              <strong>SQL, MySQL, MongoDB,</strong> PostgreSQL
            </span>
          </li>
          <li key="tools" className="mt-2 lg:flex lg:justify-between lg:gap-x-4">
            <span className="w-full lg:w-1/4">Tools: </span>
            <span className="w-full lg:w-3/4">
              <strong>AWS, Jenkins, Docker,</strong> Git, Webpack, Jest, Cypress
            </span>
          </li>
        </ul>
      </div>
    </section>
  );
}
