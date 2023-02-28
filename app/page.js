import Movie from './movie';


export default async function Home() {
  const data = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`);
  const response  = await data.json();
  return (
    <main>
      <h1 className="mb-4 text-xl font-bold text-center bg-gray-800 text-white p-2">
        Read about some popular movies from recent weeks.
      </h1>
      <div className='grid md:grid-cols-4 md:gap-4 grid-cols-2 gap-1 container w-full'>
          {response.results.map((movie) => (
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
