import Link from "next/link";
import Image from "next/image";

export default async function Movie({ title, id, poster_path, release_date }) {
    const imagePath = "https://image.tmdb.org/t/p/original";

    function formatDate(dateString) {
        const date = new Date(dateString);
        const options = { day: 'numeric', month: 'short', year: 'numeric' };
        return new Intl.DateTimeFormat('en-US', options).format(date);
    }


    release_date = formatDate(release_date);
    return (
        <div className="subpixel-antialiased flex flex-col justify-start items-stretch bg-white hover:-translate-y-2 duration-300 group">

            <Link href={`/${id}`}>
                <Image
                    className="rounded-t-xl h-auto max-w-96 mx-auto transition ease-in-out "
                    src={imagePath + poster_path}
                    alt={title}
                    height={500}
                    width={500}
                />
            </Link>
            <p className="text-xs md:text-base bg-gray-700 text-center text-gray-100 shadow-md p-2 md:p-0">Released on {release_date}</p>
            <p className="text-center text-gray-700 textsm md:text-xl font-bold group-hover:bg-amber-200 group-hover:shadow-md pt-1 pb-2 leading-tight">{title}</p>
           
        </div>

    )
}