import Link from "next/link"
import Image from "next/image"
import styles from "./card.module.css"
import { ChevronLeftCircle, ChevronRightCircle } from "lucide-react";
import { fetchMovieDetails, fetchOMDb, fetchPopular } from "@/lib/data/api-data";
import { MovieDetails, MovieImages, MovieVideos, OMDb, Popular } from "@/lib/interfaces";

const movie_id = 550
const title = "Mr. Robot"
const page_nr = 1

export default async function Card() {
  const popular: Popular | null = await fetchPopular(page_nr);

  if (!popular) {
    return
      <section className="absolute">
        <h4>Popular</h4>
        <div className="relative border">
          <p>No movie data available.</p>
        </div>
      </section>;
  }

  return (
    <section className={styles.section}>
      <h4>Popular</h4>
      <ChevronLeftCircle size={20} className={styles.bi_chevron_left} />
      <ChevronRightCircle size={20} className={styles.bi_chevron_right} />
      <div className={styles.cards}>
        {popular.results.map((data, index) => (
          <Link
            key={index}
            className={styles.card}
            href={`/movies/${data.title}`}
          > 
            <Image
            loading="eager"
            className={styles.poster}
            src={`https://image.tmdb.org/t/p/original/${data.poster_path}`}
            alt={`${data.title} poster`}
            width={2000}
            height={3000}
          />
          <div className={styles.rest_card}>
            <Image
              loading="eager"
              src={`https://image.tmdb.org/t/p/original/${data.backdrop_path}`}
              alt={`${data.title} cover`}
              width={5000}
              height={3000}
            />
            <div className={styles.cont}>
              <h4>{data.title}</h4>
              <div className={styles.sub}>
                <p>{data.genre_ids}, {data.release_date}</p>
                <h3><span>IMDb</span><i></i> {data.vote_average}</h3>
              </div>
            </div>
          </div>
          </Link>
        ))}
      </div>
    </section>
  )
}