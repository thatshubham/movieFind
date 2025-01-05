import Movie from "./Movie";

export default async function Home() {
    let d_popular = await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`
    );
    let r_popular = await d_popular.json();

    return (
        <main>
            <div className="pt-4 pb-12 md:pt-0 md:pb-6">
                <h1 className="mb-4 text-2xl font-bold text-center text-gray-800 leading-tight">
                    Explore the must-watch movies of the week, every week.
                </h1>
                <h2 className="text-center text-black text-sm"></h2>
                <span className="relative flex justify-center">
                    <div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-75"></div>

                    <span className="relative z-10 bg-white px-6">
                        IMDb & Info? Click the Poster!
                    </span>
                </span>
            </div>

            <div className="px-2 grid grid-cols-3 md:grid-cols-4 gap-x-4 gap-y-12 md:gap-x-16 md:gap-y-8 container w-full">
                {r_popular.results.map((movie) => (
                    <Movie
                        key={movie.id}
                        id={movie.id}
                        title={movie.title}
                        poster_path={movie.poster_path}
                        release_date={movie.release_date}
                    />
                ))}
            </div>
        </main>
    );
}
