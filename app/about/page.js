
import Link from "next/link"
export default function About() {
    return (
        <div className="subpixel-antialiased mx-auto max-w-4xl tracking-tight px-4 md:px-0 mb-8">
            <Link href="/">
                <div className="text-center bg-blue-200 hover:bg-blue-500 rounded-xl text-lg font-bold mt-6 mb-2 p-2 flex flex-row items-center justify-center md:justify-start mx-8 md:mx-0 md:inline-flex">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
                    </svg> &nbsp; Go Back
                </div>
            </Link>

            <h1 className="text-gray-600 text-5xl mt-12 mb-4">Welcome to Find a Movie</h1>
            <p className="text-lg text-gray-700 ">
                Hello, my name is Shubham and this mini-project is to try my hands with Next.js.
            </p>

            <h2 className="text-xl text-gray-700 font-bold mt-6">Technology used</h2>
            <h3 className="text-gray-600 text-lg mt-2 mb-2 font-bold">Next.js 13</h3>
            <p className="text-lg text-gray-700 ">
                The new app directory makes it easy to lay out complex interfaces that maintain state across navigations, avoid expensive re-renders and enable advanced routing patterns. In this project, I&apos;ve made use of both - Server and Client Components. The home page which consumes an API is a server component while the movie page is a client component.
            </p>

            <h3 className="text-gray-600 text-lg mt-6 mb-2 font-bold">API Integration</h3>
            <p className="text-lg text-gray-700 ">
                This project consumes The Movie Database (TMDB) API. I am thankful to them for providing such an easy-to-follow documentation and stable API.
            </p>

            <h3 className="text-gray-600 text-lg mt-6 mb-2 font-bold">GitHub Integration</h3>
            <p className="text-lg text-gray-700 ">
                I am hosting this project on Vercel. I&apos;ve used other hosting platforms and VPS in the past, deploying to Vercel is really effortless. The platform automatically detects Next.js, runs next build and optimizes the build output for me. The code lives on a github repo and all changes are synced automatically.
            </p>

            <h3 className="text-gray-600 text-lg mt-6 mb-2 font-bold">TailwindCSS</h3>
            <p className="text-lg text-gray-700 ">
                It helps me design and develop responsive and mobile-friendly web applications quickly. I can leverage its power to create custom styles and layouts quickly and it&apos;s integration with Next.js is as easy as it gets.
            </p>

            <h2 className="text-gray-600 text-lg mt-6 mb-2 font-bold">My personal webpage</h2>
            <p className="text-lg text-gray-700 ">
                You can find my <Link href="https://thatshubham.com"
                    className="underline underline-offset-2 decoration-4 decoration-blue-700 font-bold">personal website here</Link> where I list out my other mini-projects and a firefox addon that I maintain! Thanks.
            </p>

        </div >
    )
}

