import type { Metadata } from "next";
import Image from "next/image";
import styles from "@/app/page.module.css"
import NavBar from "@/components/navbar";
import { PeoplePopular } from "@/lib/interfaces";
import { fetchPeoplePopular } from "@/lib/data/api-data";
import CardActor from "@/components/card-actor";
import Scroller from "@/components/scroller";
import { getRandomNumber } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Actor | CMDB",
  description: "Actor details page.",
};

const popular: PeoplePopular | null = await fetchPeoplePopular();

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
      // <header className={styles.header}>
      <header className="relative w-[90%] h-[90%] rounded-[20px] overflow-hidden shadow-[0_10px_25px_8px_rgba(0,0,0,0.25)] before:content-[''] before:absolute before:w-[100%] before:h-[100%] before:bg-black before:bg-center before:bg-no-repeat before:bg-cover before:opacity-[.6] before:z-[-1] after:content-[''] after:absolute after:w-[100%] after:h-[100%] after:bg-linear-[180deg,transparent,black] after:z-[-1]">
          <Image
            loading="eager"
            className="absolute bg-center bg-no-repeat bg-cover opacity-[.6] z-[-1] bg-linear-[180deg,transparent,black]"
            // className={styles.header}
            src={`https://image.tmdb.org/t/p/original${popular.results[getRandomNumber()].known_for[0].backdrop_path}`}
            alt={`${popular.results[getRandomNumber()].name} backdrop`}
            width={5000}
            height={3000}
          />
          <NavBar />
          <h2 className={styles.container_heading}>Popular Actors</h2>
          <section className={styles.container}>
            {/* <div className={styles.cards}> */}
              <Scroller>
              {popular.results.map((data: any, index: number) => (
                <CardActor key={index} data={data} />
              ))}
              </Scroller>
            {/* </div> */}
          </section>
      </header>
      :
      <header className="relative w-[90%] h-[90%] rounded-[20px] overflow-hidden shadow-[0_10px_25px_8px_rgba(0,0,0,0.25)] before:content-[''] before:absolute before:w-[100%] before:h-[100%] before:bg-[url(@/public/bg-error.jpg)] before:bg-center before:bg-no-repeat before:bg-cover before:opacity-[.6] before:z-[-1] after:content-[''] after:absolute after:w-[100%] after:h-[100%] after:bg-linear-[180deg,transparent,black] after:z-[-1]">
        <Image
          loading="eager"
          className="absolute bg-center bg-no-repeat bg-cover opacity-[.6] z-[-1] bg-linear-[180deg,transparent,black]"
          // className={styles.header}
          src={`https://image.tmdb.org/t/p/original${popular.results[0].known_for[0].backdrop_path}`}
          alt={`${popular.results[0].name} backdrop`}
          width={5000}
          height={3000}
        />
        <NavBar />
        <h2 className={styles.container_heading}>Popular Actors</h2>
        <section className={styles.container}>
          {/* <div className={styles.cards}> */}
            <Scroller>
            {popular.results.map((data: any, index: number) => (
              <CardActor key={index} data={data} />
            ))}
            </Scroller>
          {/* </div> */}
        </section>
      </header>
  )
}