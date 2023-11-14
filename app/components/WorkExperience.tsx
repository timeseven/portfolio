export default function WorkExperience() {
  const wData = [
    {
      id: 1,
      date: "Jul.2021 - Oct.2022",
      company: "EVENEN PTY LTD",
      position: "Full Stack Developer/Director",
      description: `I built the e-commerce website using JavaScript,React and Next.js and implemented Prisma and PostgreSQL on backend
      to create and access database.`,
    },
    {
      id: 2,
      date: "Aug.2018 - Jun.2020",
      company: "XINSHENGSHI NETWORK TECHNOLOGY",
      position: "Front End Developer",
      description: `I developed web apps using HTML, JavaScript, and Vue based on UX designs, collaborated with teams for product
      success, managed daily site maintenance, and used Gitlab for workflow and version control.`,
    },
    {
      id: 3,
      date: "Jul.2015 - Dec.2016",
      company: "AUTO-ID LABS",
      position: "Embedded Systems Technician",
      description: `I programmed sensor tags as beacons for multi-role Bluetooth localization using C language and tested the beacons 
      using multimeter and logic analyzer.`,
    },
  ];
  return (
    <section className="bg-no-repeat bg-cover bg-center">
      <div className="text-4xl text-center font-extrabold text-gray-900 dark:text-gray-100">Work Experience💼</div>
      {wData.map((item) => (
        <div key={item.id} className="px-4 sm:mx-[5.55555%] xl:mx-[11.1111%] pt-12 pb-12">
          <div className="mb-4">
            <div className="flex justify-center items-center">
              <span className="text-lg font-extrabold uppercase inline-block min-w-[120px] text-center text-sky-500 dark:text-sky-400">
                {item.date}
              </span>
            </div>
          </div>
          <div className="max-w-lg mx-auto text-gray-800 dark:text-white">
            <h1 className="mt-0 text-center text-2xl leading-7 md:text-[32px] md:leading-tight font-extrabold mb-4 text-gray-900 dark:text-white">
              {item.company}
            </h1>
            <h2 className="mt-0 text-center text-xl leading-7 md:leading-tight font-extrabold mb-4 text-gray-900 dark:text-white">
              {item.position}
            </h2>
          </div>
          <p className="text-lg max-w-3xl mx-auto text-left leading-6 text-gray-700 dark:text-white">
            {item.description}
          </p>
        </div>
      ))}
    </section>
  );
}
