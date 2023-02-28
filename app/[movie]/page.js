import Image from "next/image";
import Link from "next/link";

/* export async function generateStaticParams() {
    const data = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`);
    const response = await data.json();
    return response.results.map((movie) => ({
        movie: toString(movie.id),
    }))
} */

export default async function MovieDetail({ params }) {
    const { movie } = params;
    const imagePath = "https://image.tmdb.org/t/p/original";
    const data = await fetch(`https://api.themoviedb.org/3/movie/${movie}?api_key=${process.env.API_KEY}`);
    const response = await data.json();
    const imdb = "https://www.imdb.com/title/" + response.imdb_id;
    return (
        <div className="container bg-teal-200 mx-auto md:px-8">
            <div className="md:grid grid-cols-5 mb-6 md:mb-0 bg-gray-100">
                <div className="col-span-1 md:px-0 px-4">
                    <Image
                        className="mx-auto"
                        src={imagePath + response.poster_path}
                        alt={response.title}
                        height={600}
                        width={400}
                        priority
                    />
                </div>

                <div className="col-span-1 flex-wrap text-md flex md:flex-col flex-row md:items-start justify-center md:justify-center font-bold">
                    <p className="p-2 m-1 md:m-0 bg-blue-200 inline-block">{response.status}</p>
                    <p className="p-2 m-1 md:m-0  bg-slate-200 inline-block">Release Date = {response.release_date}</p>
                    <p className="p-2 m-1 md:m-0  bg-blue-200 inline-block">Budget = ${response.budget}</p>

                    <p className="p-2 m-1 md:m-0  bg-slate-200 inline-block">Language : {response.original_language}</p>
                    <p className="p-2 m-1 md:m-0  bg-blue-200 inline-block">Runtime : {response.runtime} minutes</p>
                    <p className="p-2 m-1 md:m-0  bg-slate-200 inline-block"><Link href={imdb} className="text-violet-600 font-bold">Go to IMDb</Link> </p>
                </div>

                <div className="col-span-3 font-serif subpixel-antialiased  place-self-center">
                    <h1 className="text-6xl text-center md:text-left font-bold text-gray-800 mb-4 p-2 md:p-0">{response.title}</h1>
                    <p className="p-2 bg-teal-100 text-xl leading-relaxed mx-auto bg-gray-100 font-base text-center md:text-left "> {response.overview}</p>
                </div>
            </div>
        </div>
    )
}