import Image from "next/image";
import Link from "next/link";
export default function Footer() {
    return (
        <>
            <footer className="mt-12 relative bottom-0 w-full body-font border-t-2 border-gray-200">
                <div className="container py-2 mx-auto flex items-center justify-between sm:flex-row flex-col gap-4 md:gap-0">
                    <div className="flex flex-row md:flex-col items-center md:items-start md:justify-start pr-2 sm:border-r-4 sm:border-gray-200 sm:py-2">
                        <p className="text-lg text-gray-600 font-bold">
                            {" "}
                            Powered by{" "}
                        </p>
                        <Link href="https://www.themoviedb.org/">
                            <Image
                                className="px-2 md:px-0 py-0 md:py-2"
                                src="/tmdb.svg"
                                width={200}
                                height={50}
                                alt="Logo of the The Movie Database"
                            />
                        </Link>
                    </div>

                    <span className="text-center md:text-right flex flex-col justify-end align-center md:mx-0 mx-2 md:gap-1">
                        <p className="text-gray-500 dark:text-gray-400">
                            <Link
                                href="/about"
                                className="inline-flex items-center font-bold text-blue-900 hover:underline"
                            >
                                About this project
                                <svg
                                    className="w-2 h-2 ml-1 rtl:rotate-180"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 14 10"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M1 5h12m0 0L9 1m4 4L9 9"
                                    />
                                </svg>
                            </Link>
                        </p>

                        <p className="text-sm md:text-base text-gray-700">
                            Made with Next.JS and tailwindcss by{" "}
                            <Link
                                href="https://thatshubham.com/"
                                className="inline-block font-bold text-gray-700 hover:bg-green-300"
                            >
                                thatshubham
                            </Link>
                            .
                        </p>
                    </span>
                </div>
            </footer>
        </>
    );
}
