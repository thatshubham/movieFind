import Link from "next/link";
import Image from "next/image";

export default async function Movie({ title, id, poster_path, release_date }) {
    const imagePath = "https://image.tmdb.org/t/p/original";

    /*     This function takes in a string representing a date in yyyy-mm-dd format and uses the built-in JavaScript Date object to create a new Date object. It then uses the Intl.DateTimeFormat object to format the date into the desired format with the specified options. */

    function formatDate(dateString) {
        const date = new Date(dateString);
        const options = { day: 'numeric', month: 'short', year: 'numeric' };
        return new Intl.DateTimeFormat('en-US', options).format(date);
    }


    release_date = formatDate(release_date);
    return (
        <div className="flex md:inline-block md:justify-center justify-start bg-gray-100 md:bg-white flex-col items-center p-2 ">

            <Link href={`/${id}`}>
                <Image
                    className="rounded-t-xl mx-auto hover:scale-110 transition ease-in-out delay-25"
                    src={imagePath + poster_path}
                    alt={title}
                    height={200}
                    width={300}
                />
            </Link>
            <h1 className="text-center text-black text-lg font-bold">{title}</h1>
            <h2 className="bg-gray-800 text-center text-gray-100 shadow-md">Released on {release_date}</h2>
        </div>

    )
}