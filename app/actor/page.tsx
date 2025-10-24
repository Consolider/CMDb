import type { Metadata } from "next";
import Image from "next/image";
import styles from "@/app/page.module.css"
import NavBar from "@/components/navbar";
import { PeoplePopular } from "@/lib/interfaces";
import { fetchPeoplePopular } from "@/lib/data/api-data";
import CardActor from "@/components/card-actor";
import Scroller from "@/components/scroller";
import { getRandomNumber } from "@/lib/utils";
import Skeleton from "@/components/skeleton";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Actor | CMDB",
  description: "Actor details page.",
};

const popular: PeoplePopular | null = await fetchPeoplePopular();
const loading = false;

export default async function ActorPage() {

  if (!popular) {
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
      popular.results[getRandomNumber()].known_for[0].backdrop_path !== null ?
      <header className={styles.header}>
          <Image
            loading="eager"
            className={styles.backdrop}
            src={`https://image.tmdb.org/t/p/original${popular.results[getRandomNumber()].known_for[0].backdrop_path}`}
            alt={`${popular.results[getRandomNumber()].name} backdrop`}
            width={5000}
            height={3000}
          />
          <NavBar />
          <h2 className={styles.container_heading}>Popular Actors</h2>
          <section className={styles.container}>
              <Scroller>
              {popular.results.map((data: any, index: number) => (
                <Suspense key={index} fallback={<Skeleton />}>
                  <CardActor key={index} data={data} loading={loading} />
                </Suspense>
              ))}
              </Scroller>
          </section>
      </header>
      :
      <header className={styles.header}>
        <Image
          loading="eager"
          className={styles.backdrop}
          src={`https://image.tmdb.org/t/p/original${popular.results[0].known_for[0].backdrop_path}`}
          alt={`${popular.results[0].name} backdrop`}
          width={5000}
          height={3000}
        />
        <NavBar />
        <h2 className={styles.container_heading}>Popular Actors</h2>
        <section className={styles.container}>
            <Scroller>
            {popular.results.map((data: any, index: number) => (
              <Suspense key={index} fallback={<Skeleton />}>
                <CardActor key={index} data={data} loading={loading} />
              </Suspense>
            ))}
            </Scroller>
        </section>
      </header>
  )
}