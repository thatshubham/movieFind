import Image from "next/image"
import Link from "next/link"
export default function Footer() {
    return (
        <>
            <footer className="relative bottom-0 w-full body-font border-t-2 border-gray-200">
                <div className="container py-8 mx-auto flex items-center justify-between sm:flex-row flex-col">
                    <div className="flex flex-row md:flex-col items-center md:items-start md:justify-start pr-2 sm:border-r-4 sm:border-gray-200 sm:py-2">
                        <p className="text-xl text-gray-700 font-bold"> Powered by </p>
                        <Link href="https://www.themoviedb.org/">
                            <Image
                                className="px-2 md:px-0 py-0 md:py-2"
                                src="/tmdb.svg"
                                width={200}
                                height={50}
                                alt="Logo of the The Movie Database" />
                        </Link>
                    </div>

                    <span className="my-2 text-center md:text-right flex flex-col justify-end align-center md:mx-0 mx-2">
                        <Link href="/about"
                            className="my-2 font-bold text-gray-700 inline-block 
                            hover:underline underline-offset-2 decoration-4 decoration-blue-700">
                            About this project
                        </Link>

                        <p className="font-bold text-gray-400">Made with Next.JS and tailwindcss
                            <Link
                                href="https://thatshubham.com/"
                                className="md:ml-2 inline-block font-bold text-gray-700 bg-amber-400 hover:bg-green-300"
                            >by thatshubham
                            </Link>
                        </p>
                    </span>
                </div>
                <img src="https://vercel.goatcounter.com/count?p=/test" alt="pixel" />
            </footer>

        </>
    )
}