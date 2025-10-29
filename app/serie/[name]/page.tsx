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
import SearchSerie from "@/components/search-serie";
import Skeleton from "@/components/skeleton-card";
import { Suspense } from "react";

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
  const [serie_id] = awaitedParams.name.split('-'); // Split value,'id-title' => ['id', 'title']
  const serieDetails: SerieDetails | null = await fetchSerieDetails(Number(serie_id));  
  const serieCredits: MovieCredits | null = await fetchSerieCredits(Number(serie_id));  
  const loading = false;

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
      className={styles.header}>
      <Image
        loading="eager"
        className={styles.backdrop}
        src={`https://image.tmdb.org/t/p/original${serieDetails.backdrop_path}`}
        alt={`${serieDetails.name} backdrop`}
        width={5000}
        height={3000}
      />
      <div className={styles.nav}>
        <NavBar />
        <SearchSerie />
      </div>
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
          <Scroller>
          {serieCredits.cast.map((data: any, index: number) => (
            <Suspense key={index} fallback={<Skeleton />}>
              <CardActor key={index} data={data} loading={loading} />
            </Suspense>
          ))}
          </Scroller>
        </section>
    </header>
  )
}