import type { Metadata } from "next";
import Image from "next/image";
import NavBar from "@/components/navbar";
import styles from "@/app/movie/[name]/page.module.css"
import { Star } from 'lucide-react';
import { extractYear, roundToNearest } from "@/lib/utils";
import { fetchSerieCredits, fetchSerieDetails } from "@/lib/data/api-data";
import { MovieCredits, SerieDetails } from "@/lib/interfaces";
import Scroller from "@/components/scroller";
import CardActor from "@/components/card-actor";

export const metadata: Metadata = {
  title: "Serie | CMDB",
  description: "Serie details page.",
};

export default async function Serie({
  params
  }: {
  params: { name: string } 
  }) {
  const awaitedParams = await params; // Ensure params is awaited   ERROR: Error: Route "/serie/[name]" used `params.name`. `params` should be awaited before using its properties. Learn more: https://nextjs.org/docs/messages/sync-dynamic-apis
  const [serie_id] = awaitedParams.name.split('-'); // 'id-title' => ['id', 'title']
  // const [serie_id] = params.name.split('-'); // 'id-title' => ['id', 'title']
  const serieDetails: SerieDetails | null = await fetchSerieDetails(Number(serie_id));  
  const serieCredits: MovieCredits | null = await fetchSerieCredits(Number(serie_id));  
  
  // "Needed" for "possibly null" prevention
  if (!serieDetails) {
    return (
      <section className="absolute text-center">
        <h4>Page - Serie</h4>
        <div className="relative">
          <p>No serie data available.</p>
        </div>
      </section>
    )
  }
  if (!serieCredits) {
    return (
      <section className="absolute text-center">
        <h4>Page - Serie</h4>
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
        src={`https://image.tmdb.org/t/p/original${serieDetails.backdrop_path}`}
        alt={`${serieDetails.name} backdrop`}
        width={5000}
        height={3000}
      />
      <NavBar />

      <div className={styles.content}>
        <h1>{serieDetails.name}</h1>
        <p>{serieDetails.overview}</p>
        <div className={styles.details}>
          <h2>Serie</h2>
          <h3>{`${extractYear(serieDetails.first_air_date)}-${extractYear(serieDetails.last_air_date)}`}</h3>
          {serieDetails.genres.map((genre, index) => (
            <h4 key={index}>{genre.name},</h4>
          ))}
          <h5>Seasons: {serieDetails.number_of_seasons}</h5>
          <h5><span>IMDb</span><i><Star size={12} fill='yellow'/></i>{roundToNearest(serieDetails.vote_average, 1)}</h5>
        </div>
      </div>

      <h2 className={styles.container_heading}>Actors</h2>
        <section className={styles.container}>
        {/* <div className={styles.cards}> */}
          <Scroller>
          {serieCredits.cast.map((data: any, index: number) => (
            <CardActor key={index} data={data} />
          ))}
          </Scroller>
        {/* </div> */}
        </section>
      {/* <CardActor movie_id={Number(movie_id)}/> */}
    </header>
  )
}