import Link from "next/link"
import Image from "next/image"
import styles from "./card-actor.module.css"
import { toURL } from "@/lib/utils";
import { ChevronLeftCircle, ChevronRightCircle } from "lucide-react";
import { fetchMovieCredits } from "@/lib/data/api-data";
import { MovieCredits } from "@/lib/interfaces";

interface CardActorProps {
    movie_id: number;
}

export default async function CardActor({ movie_id }: CardActorProps) {
  const credits: MovieCredits | null = await fetchMovieCredits(movie_id);

  // "Needed" for "possibly null" prevention
  if (!credits) {
    return (
      // <section className="absolute text-center">
      <section className={styles.section}>
        <h4>Card-Actor</h4>
        <div className="relative">
          <p>No actor data available.</p>
        </div>
      </section>
    )
  }

  return (
    <section className={styles.section}>
      <h4>Actors</h4>
      <ChevronLeftCircle size={20} className={styles.bi_chevron_left} />
      <ChevronRightCircle size={20} className={styles.bi_chevron_right} />
      <div className={styles.cards}>
        {credits.cast.map((data, index) => (
            <Link
              key={index}
              className={styles.card}
              href={`/actor/${toURL(data.name)}`}
            > 
              <Image
              className={styles.poster}
              src={`https://image.tmdb.org/t/p/original/${data.profile_path}`}
              alt={`${data.name} poster`}
              width={2000}
              height={3000}
            />
            <div className={styles.rest_card}>
              <Image
                src={`https://image.tmdb.org/t/p/original/${data.profile_path}`}
                alt={`${data.name} cover`}
                width={5000}
                height={3000}
              />
              <div className={styles.cont}>
                <h4>{data.name}</h4>
                <div className={styles.sub}>
                  <p>{data.character}</p>
                </div>
              </div>
            </div>
            </Link>
        ))}
      </div>
    </section>
  )
}