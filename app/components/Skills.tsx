export default function Skills() {
  return (
    <section className="text-center">
      <div>
        <h3 className="text-4xl text-center font-extrabold text-gray-900 dark:text-gray-100">Skill Set👓</h3>
        <ul className="max-w-3xl mx-auto pt-5 text-xl leading-7 text-gray-800 dark:text-gray-100">
          <li key="pro">
            {/* Software: Proficient - JavaScript, HTML5, CSS3, TypeScript, React, Redux, Vue, Vuex, Bootstrap, Git, */}
            <span className="flex">Software(Proficient):</span>
            <span className="flex">JavaScript, HTML5, CSS3, TypeScript, React, Redux, Vue, Vuex, Bootstrap, Git.</span>
          </li>
          <li key="fam" className="flex">
            <span>Software(Familiar):</span>
            <span>Node.JS, Express, Next.js, TanStack, Prisma, PostgreSQL.</span>
          </li>
          <li key="lan" className="flex">
            <span>Languages:</span>
            <span>Fluent in English, Cantonese, and Mandarin.</span>
          </li>
        </ul>
      </div>
    </section>
  );
}
