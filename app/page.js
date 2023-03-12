import Movie from './Movie';


export default async function Home() {

  let d_popular = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`);
  let r_popular = await d_popular.json();

  return (
    <main>
      <h1 className="mb-4 text-4xl bg-gray-200 shadow-md font-bold text-center text-gray-800 p-2">
        Explore the must-watch movies of the week, every week.
      </h1>




      <div className='grid md:grid-cols-4 md:gap-x-16 md:gap-y-8 grid-cols-2 gap-x-1 gap-y-1 container w-full'>
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
  )
}
