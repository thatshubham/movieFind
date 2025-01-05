import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
    return (
        <>
            <header className="container text-gray-600 body-font border-gray-200 border-b-2 mb-2 md:mb-6 w-full">
                <div className="flex px-2 md:py-2 flex-row flex-nowrap justify-between items-center">
                    <nav className="w-1/2 text-base">
                        <Link
                            className="text-sm md:text-lg uppercase tracking-widest font-bold text-gray-700"
                            href="/"
                        >
                            Movie finder
                        </Link>
                    </nav>
                    <Link href="https://buymeacoffee.com/ppheonix" className="max-w-1/4 py-2 md:py-0">
                        <Image
                            width="200"
                            height="150"
                            className="rounded-lg max-h-6 md:max-h-10 w-auto hover:shadow-amber-400 hover:shadow-lg duration-150"
                            src="/c.png"
                        />
                    </Link>
                </div>
            </header>
        </>
    );
}
