import Image from "next/image";
import Link from "next/link";

export async function generateStaticParams() {
    const data = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`);
    const response = await data.json();
    return response.results.map((movie) => ({
        movie: toString(movie.id),
    }))
}

export default async function MovieDetail({ params }) {
    const { movie } = params;
    const imagePath = "https://image.tmdb.org/t/p/original";
    const data = await fetch(`https://api.themoviedb.org/3/movie/${movie}?api_key=${process.env.API_KEY}`);
    const response = await data.json();
    const imdb = "https://www.imdb.com/title/" + response.imdb_id;
    function formatDate(dateString) {
        const date = new Date(dateString);
        const options = { day: 'numeric', month: 'short', year: 'numeric' };
        return new Intl.DateTimeFormat('en-US', options).format(date);
    }
    response.release_date = formatDate(response.release_date);
    if (response.budget == 0) {
        response.budget = "Not Available"
    }
    else {
        response.budget = formatMoney(response.budget);
    }
    /*     This function takes in a number and uses a while loop to divide it by 1000 until it is less than 1000, keeping track of the number of divisions with the unit variable. It then uses the Intl.NumberFormat object to format the number as USD currency with no decimal places and at most 1 decimal place. Finally, it appends the appropriate unit based on the number of divisions. */

    function formatMoney(number) {
        const units = ['Thousand', 'Million', 'Billion', 'Trillion'];
        let unit = -1;
        while (Math.abs(number) >= 1000 && unit < units.length - 1) {
            number /= 1000;
            unit++;
        }
        const formattedNumber = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 0,
            maximumFractionDigits: 1,
        }).format(number);
        return `${formattedNumber} ${units[unit] || ''}`;
    }

    return (
        <>
            <div className="container">
                <Link href="/">
                    <div className="text-center bg-blue-200 hover:bg-blue-400 rounded-xl text-2xl font-bold mb-8 mt-2 p-2 flex flex-row items-center justify-center md:justify-start mx-8 md:mx-0 md:inline-flex">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
                        </svg> &nbsp; Go Back
                    </div>
                </Link>

                <div className="bg-teal-200 mx-auto md:px-8">
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
                            <p className="p-2 m-1 md:m-0  bg-slate-200 inline-block">Released on {response.release_date}</p>
                            <p className="p-2 m-1 md:m-0  bg-blue-200 inline-block">Budget = {response.budget}</p>

                            <p className="p-2 m-1 md:m-0  bg-slate-200 inline-block">Language : {response.original_language}</p>
                            <p className="p-2 m-1 md:m-0  bg-blue-200 inline-block">Runtime : {response.runtime} minutes</p>
                            <p className="p-2 m-1 md:m-0  bg-slate-200 inline-block"><Link href={imdb} className="font-bold">Go to IMDb</Link> </p>
                        </div>

                        <div className="col-span-3 font-serif subpixel-antialiased  place-self-center">
                            <h1 className="text-6xl text-center md:text-left font-bold text-gray-800 mb-4 p-2 md:p-0">{response.title}</h1>
                            <p className="p-2 bg-teal-100 text-xl leading-relaxed mx-auto bg-gray-100 font-base text-center md:text-left "> {response.overview}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}