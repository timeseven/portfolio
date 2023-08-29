export default function Contact() {
  const telephone: string = "+61 0451989400";
  const email: string = "evenwin88@gmail.com";
  return (
    <section className="bg-no-repeat bg-cover bg-center pb-20">
      <div>
        <h3 className="text-4xl text-center font-extrabold text-gray-900 dark:text-gray-100">Contact Me📞</h3>
        <ul className="max-w-xs mx-auto pt-5 text-xl text-center leading-7 text-gray-800 dark:text-gray-100">
          <li>
            <a href="tel:+1(555) 423-5786" className="flex gap-x-4">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                version="1"
                viewBox="0 0 48 48"
                enableBackground="new 0 0 48 48"
                height="28px"
                width="28px"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="#009688"
                  d="M39.1,7l-3.7,0C22.2,7.2,7.1,24.1,7,35.4l0,3.7c0,1,0.8,1.9,1.9,1.9l7.5-0.1c1,0,1.9-0.9,1.9-1.9l0.2-8.2 l-4.7-4c0-2.6,10.5-13.1,13.2-13.2l4.3,4.7l7.9-0.2c1,0,1.9-0.9,1.9-1.9L41,8.9C41,7.8,40.2,7,39.1,7z"
                ></path>
              </svg>
              <span>{telephone}</span>
            </a>
          </li>
          <li>
            <a
              href="mailto:evenwin88@gmail.com"
              className="flex gap-x-4 mt-5 text-sky-500 hover:text-sky-600 hover:-translate-y-px transition-all ease-out duration-150"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                version="1"
                viewBox="0 0 48 48"
                enableBackground="new 0 0 48 48"
                height="28px"
                width="28px"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="#2196F3"
                  d="M40,22h-8l-4,4V12c0-2.2,1.8-4,4-4h8c2.2,0,4,1.8,4,4v6C44,20.2,42.2,22,40,22z"
                ></path>
                <circle fill="#FFA726" cx="17" cy="19" r="8"></circle>
                <path fill="#607D8B" d="M30,36.7c0,0-3.6-6.7-13-6.7S4,36.7,4,36.7V40h26V36.7z"></path>
              </svg>
              <span>{email}</span>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
