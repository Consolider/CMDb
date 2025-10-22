import type { Metadata } from "next";
import Image from "next/image";
import styles from "@/app/page.module.css"
import NavBar from "@/components/navbar";
import { MoviePopular } from "@/lib/interfaces";
import { fetchMoviePopular } from "@/lib/data/api-data";
import CardMovie from "@/components/card-movie";
import Scroller from "@/components/scroller";
import { getRandomNumber } from "@/lib/utils";
import Skeleton from "@/components/skeleton";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Movie | CMDB",
  description: "Movie overview page.",
};

const page_nr = 1
const popular: MoviePopular | null = await fetchMoviePopular(page_nr);
const loading = false;

export default async function MoviePage() {
  return (
      popular !== null ?
      <header className={styles.header}>
          <Image
            loading="eager"
            className={styles.backdrop}
            src={`https://image.tmdb.org/t/p/original${popular.results[getRandomNumber()].backdrop_path}`}
            alt={`${popular.results[getRandomNumber()].title} backdrop`}
            width={5000}
            height={3000}
          />
          <NavBar />
          <h2 className={styles.container_heading}>Popular Movies</h2>
          <section className={styles.container}>
              <Scroller>
              {popular.results.map((data: any, index: number) => (
                <Suspense key={index} fallback={<Skeleton />}>
                  <CardMovie key={index} data={data} loading={loading} />
                </Suspense>
              ))}
              </Scroller>
          </section>
      </header>
      :
      <header className="relative w-[90%] h-[90%] rounded-[20px] overflow-hidden shadow-[0_10px_25px_8px_rgba(0,0,0,0.25)] before:content-[''] before:absolute before:w-[100%] before:h-[100%] before:bg-[url(@/public/bg-error.jpg)] before:bg-center before:bg-no-repeat before:bg-cover before:opacity-[.6] before:z-[-1] after:content-[''] after:absolute after:w-[100%] after:h-[100%] after:bg-linear-[180deg,transparent,black] after:z-[-1]">
          <NavBar />
      </header>
  )
}