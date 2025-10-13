import Link from "next/link"
import Image from "next/image"
import styles from "./card.module.css"
import { roundToNearest, toURL } from "@/lib/utils";
import { ChevronLeftCircle, ChevronRightCircle } from "lucide-react";
import { fetchPopular, fetchPopularNOTnull } from "@/lib/data/api-data";
import { Popular } from "@/lib/interfaces";
import Skeleton from "./skeleton";

const page_nr = 1

export default async function CardDev() {
  const popular: Popular | null = await fetchPopular(page_nr);
  const popResults: Popular | null = await fetchPopular(page_nr);
  // const popular = await fetch("https://api.not-found.com");

  return (
    <section className={styles.section}>
      <h4>Popular</h4>
      <ChevronLeftCircle size={20} className={styles.bi_chevron_left} />
      <ChevronRightCircle size={20} className={styles.bi_chevron_right} />
      <div className={styles.cards}>
        {(popular !== null && popular.total_results === 0) ?
        <Skeleton count={popular.total_results} />
        :
          popular?.results.map((data: any, index: number) => (
          //{/* {popular !== null && popular.results.map((data: any, index: number) => ( */}
            <Link
              key={index}
              className={styles.card}
              href={`/movie/${toURL(data.title)}`}
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
                    <p>{data.release_date}</p>
                    <h3><span>IMDb</span><i></i>{roundToNearest(data.vote_average, 1)}</h3>
                  </div>
                </div>
              </div>
            </Link>
          ))
        }
      </div>
    </section>
  )
}