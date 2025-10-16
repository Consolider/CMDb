import type { Metadata } from "next";
import Image from "next/image";
import NavBar from "@/components/navbar";
import styles from "./page.module.css"
import { getRandomNumber, roundToNearest, runtimeConv, toURL } from "@/lib/utils";
import { fetchPeople, fetchPeopleCombinedCredits } from "@/lib/data/api-data";
import { People, PeopleCombinedCredits } from "@/lib/interfaces";
import Scroller from "@/components/scroller";
import CardMovie from "@/components/card-movie";

export const metadata: Metadata = {
  title: "Actor | CMDB",
  description: "Actor details page.",
};

export default async function Actor({
  params
  }: {
  params: { name: string } 
  }) {
  const awaitedParams = await params; // Ensure params is awaited   ERROR: Error: Route "/movie/[name]" used `params.name`. `params` should be awaited before using its properties. Learn more: https://nextjs.org/docs/messages/sync-dynamic-apis
  const [person_id] = awaitedParams.name.split('-'); // 'id-title' => ['id', 'title']
  // const [person_id] = await params.name.split('-'); // 'id-title' => ['id', 'title']
  const peopleCombinedCredits: PeopleCombinedCredits | null = await fetchPeopleCombinedCredits(Number(person_id));
  const people: People | null = await fetchPeople(Number(person_id));

  // "Needed" for "possibly null" prevention
  if (!people) {
    return (
      <section className="absolute text-center">
        <h4>Page - Actor</h4>
        <div className="relative">
          <p>No actor data available.</p>
        </div>
      </section>
    )
  }

  if (!peopleCombinedCredits) {
    return (
      <section className="absolute text-center">
        <h4>Page - Actor</h4>
        <div className="relative">
          <p>No movie data available.</p>
        </div>
      </section>
    )
  }

  if (!peopleCombinedCredits.cast[getRandomNumber()].backdrop_path) {
    return (
      <section className="absolute text-center">
        <h4>Page - Actor</h4>
        <div className="relative">
          <p>No movie backdrop available.</p>
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
        src={`https://image.tmdb.org/t/p/original${peopleCombinedCredits.cast[getRandomNumber()].backdrop_path}`}
        alt={`${peopleCombinedCredits.cast[getRandomNumber()].title} backdrop`}
        width={5000}
        height={3000}
      />
      <NavBar />

      <div className={styles.content}>
        <h1>{people.name}</h1>
        <p>{people.biography}</p>
        <div className={styles.details}>
          <h2>Actor</h2>
          <h3>{people.birthday}</h3>
          <h5>{people.place_of_birth}</h5>
          <h5><span>Popularity</span> {roundToNearest(people.popularity, 1)}</h5>
        </div>
      </div>

      <h2 className={styles.container_heading}>Known For</h2>
        <section className={styles.container}>
          <Scroller>
          {peopleCombinedCredits.cast.map((data: any, index: number) => (
            <CardMovie key={index} data={data} />
          ))}
          </Scroller>
        </section>
    </header>
  )
}