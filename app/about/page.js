
import Link from "next/link"
export default function About() {
    return (
        <div className="mx-auto max-w-prose container text-justify px-2 md:px-0 mb-8">
            <Link href="/">
                <div className="text-center bg-blue-200 hover:bg-blue-500 rounded-xl text-lg font-bold my-2 p-2 flex flex-row items-center justify-center md:justify-start mx-8 md:mx-0 md:inline-flex">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
                    </svg> &nbsp; Go Back
                </div>
            </Link>

            <h1 className="text-3xl my-4">Welcome to Find a Movie</h1>
            <p className="text-lg text-gray-900 antialiased">
                Hello, my name is Shubham and this mini-project is to try my hands with the, still in beta, Next.js 13.
            </p>

            <h2 className="text-xl my-4">Technology used</h2>
            <h3 className="font-bold text-lg mb-2">Next.js 13</h3>
            <p className="text-lg text-gray-900 antialiased">
                {`The new app directory makes it easy to lay out complex interfaces that maintain state across navigations, avoid expensive re-renders, and enable advanced routing patterns. In this project, I've made use of both - Server and Client Components. The home page which consumes an API is a server component while the Movie page is a client component.`}
            </p>

            <h3 className="text-lg my-2 font-bold">API Integration</h3>
            <p className="text-lg text-gray-900 antialiased">
                This project consumes The Movie Database (TMDB) API. I am thankful to them for providing such an easy-to-follow documentation and stable API.
            </p>

            <h3 className="text-lg my-2 font-bold">GitHub Integration</h3>
            <p className="text-lg text-gray-900 antialiased">
                {`As a developer, I understand the importance of collaboration and version control. I am hosting this project on Vercel. I've used other hosting platforms and VPS in the past, deploying to Vercel is really effortless. The platform automatically detects Next.js, runs next build, and optimizes the build output for me. The code lives on a github repo and all changes are synced automatically.`}
            </p>

            <h3 className="text-lg my-2 font-bold">TailwindCSS</h3>
            <p className="text-lg text-gray-900 antialiased">
                {` Being a utility-first CSS framework, it helps me design and develop responsive and mobile-friendly web applications quickly. I can leverage the power of TailwindCSS to create custom styles and layouts quickly and it's integration with Next.Js 13 is as easy as it gets. `}
            </p>

            <h2 className="text-lg my-2 font-bold">My personal webpage</h2>
            <p className="text-lg text-gray-900 antialiased">
                You can find my <Link href="https://thatshubham.com"
                    className="underline underline-offset-2 decoration-4 decoration-blue-700 font-bold">personal website here</Link> where I list out my other mini-projects and a firefox addon that I maintain! Thanks.
            </p>

        </div >
    )
}

