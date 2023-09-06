export default function Skills() {
  return (
    <section className="text-center">
      <div>
        <h3 className="text-4xl text-center font-extrabold text-gray-900 dark:text-gray-100">Skill Set👓</h3>
        <ul className="max-w-3xl mx-auto p-4 text-xl text-left leading-7 text-gray-800 dark:text-gray-100">
          <li key="pro" className="mt-2 lg:flex lg:justify-between lg:gap-x-4">
            <span className="w-full lg:w-1/4">Software(Proficient): </span>
            <span className="w-full lg:w-3/4">
              JavaScript, HTML5, CSS3, TypeScript, React, Redux, Vue, Vuex, Next.js, Bootstrap, Tailwind CSS, Git,
              Webpack.
            </span>
          </li>
          <li key="fam" className="mt-2 lg:flex lg:justify-between lg:gap-x-4">
            <span className="w-full lg:w-1/4">Software(Familiar): </span>
            <span className="w-full lg:w-3/4">Node.JS, Express, TanStack, Prisma, PostgreSQL.</span>
          </li>
          <li key="lan" className="mt-2 lg:flex lg:justify-between lg:gap-x-4">
            <span className="w-full lg:w-1/4">Languages: </span>
            <span className="w-full lg:w-3/4">Fluent in English, Cantonese, and Mandarin.</span>
          </li>
        </ul>
      </div>
    </section>
  );
}
