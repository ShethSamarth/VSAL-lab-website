import Link from "next/link"

function Footer() {
  return (
    <footer className="text-gray-600 bg-[#242424] border-t-4 border-[#F7AB0A]">
      <div className="container px-20 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <Link
          href={"/"}
          className="flex items-center md:justify-start justify-center text-2xl text-[#F7AB0A] font-bold hover:scale-110 transition-all duration-200 ease-out"
        >
          <span className="ml-3 text-xl">VSAL</span>
        </Link>
        <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-500 sm:py-2 sm:mt-0 mt-4">
          © 2023 VSAL
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          <Link
            href="https://www.linkedin.com/in/kumaraswamy-adepu-6987ba1a"
            target="_blank"
            className="ml-3 text-gray-500"
          >
            <svg
              fill="currentColor"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="0"
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path
                stroke="none"
                d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
              ></path>
              <circle cx="4" cy="4" r="2" stroke="none"></circle>
            </svg>
          </Link>
        </span>
      </div>
    </footer>
  )
}

export default Footer
