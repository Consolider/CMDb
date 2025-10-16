import type { Metadata } from "next";
import Image from "next/image";
import NavBar from "@/components/navbar";
import styles from "@/app/movie/[name]/page.module.css"
import { roundToNearest, runtimeConv } from "@/lib/utils";
import { fetchMovieCredits, fetchMovieDetails } from "@/lib/data/api-data";
import { MovieCredits, MovieDetails } from "@/lib/interfaces";
import Scroller from "@/components/scroller";
import CardActor from "@/components/card-actor";

export const metadata: Metadata = {
  title: "Movie | CMDB",
  description: "Movie details page.",
};

export default async function Movie({
  params
  }: {
  params: { name: string } 
  }) {
  const awaitedParams = await params; // Ensure params is awaited   ERROR: Error: Route "/movie/[name]" used `params.name`. `params` should be awaited before using its properties. Learn more: https://nextjs.org/docs/messages/sync-dynamic-apis
  const [movie_id] = awaitedParams.name.split('-'); // 'id-title' => ['id', 'title']
  // const [movie_id] = params.name.split('-'); // 'id-title' => ['id', 'title']
  const movieDetails: MovieDetails | null = await fetchMovieDetails(Number(movie_id));  
  const movieCredits: MovieCredits | null = await fetchMovieCredits(Number(movie_id));  
  
  // "Needed" for "possibly null" prevention
  if (!movieDetails) {
    return (
      <section className="absolute text-center">
        <h4>Page - Movie</h4>
        <div className="relative">
          <p>No movie data available.</p>
        </div>
      </section>
    )
  }
  if (!movieCredits) {
    return (
      <section className="absolute text-center">
        <h4>Page - Movie</h4>
        <div className="relative">
          <p>No actor data available.</p>
        </div>
      </section>
    )
  }

  return (
    <header
      className="relative w-[90%] h-[90%] rounded-[20px] overflow-hidden shadow-[0_10px_25px_8px_rgba(0,0,0,0.25)] before:content-[''] before:absolute before:w-[100%] before:h-[100%] before:bg-black before:bg-center before:bg-no-repeat before:bg-cover before:opacity-[.6] before:z-[-1] after:content-[''] after:absolute after:w-[100%] after:h-[100%] after:bg-linear-[180deg,transparent,black] after:z-[-1]">
      <Image
        loading="eager"
        className="absolute bg-center bg-no-repeat bg-cover opacity-[.6] z-[-1] bg-linear-[180deg,transparent,black]"
        src={`https://image.tmdb.org/t/p/original${movieDetails.backdrop_path}`}
        alt={`${movieDetails.title} backdrop`}
        width={5000}
        height={3000}
      />
      <NavBar />

      <div className={styles.content}>
        <h1>{movieDetails.title}</h1>
        <p>{movieDetails.overview}</p>
        <div className={styles.details}>
          <h2>Movie</h2>
          <h3>{movieDetails.release_date}</h3>
          {movieDetails.genres.map((genre, index) => (
            <h4 key={index}>{genre.name},</h4>
          ))}
          <h5>{runtimeConv(movieDetails.runtime)}</h5>
          <h5><span>IMDb</span> {roundToNearest(movieDetails.vote_average, 1)}</h5>
        </div>
      </div>

      <h2 className={styles.container_heading}>Actors</h2>
        <section className={styles.container}>
        {/* <div className={styles.cards}> */}
          <Scroller>
          {movieCredits.cast.map((data: any, index: number) => (
            <CardActor key={index} data={data} />
          ))}
          </Scroller>
        {/* </div> */}
        </section>
      {/* <CardActor movie_id={Number(movie_id)}/> */}
    </header>
  )
}