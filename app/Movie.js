import Link from "next/link";
import Image from "next/image";

export default async function Movie({ title, id, poster_path, release_date }) {
    const imagePath = "https://image.tmdb.org/t/p/original";
    return (
        <div className="flex md:justify-between justify-start bg-gray-100 md:bg-white flex-col items-center p-2">
            
            <Link href={`/${id}`}>
                <Image
                className="rounded-lg"
                    src={imagePath + poster_path}
                    alt={title}
                    height={600}
                    width={400}
                />
            </Link>
            <h1 className="text-center text-2xl">{title}</h1>
            <h2 className="text-center text-gray-600">Release Date = {release_date}</h2>
        </div>

    )
}