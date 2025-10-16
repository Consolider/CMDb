import type { Metadata } from "next";
import Image from "next/image";
import styles from "@/app/page.module.css"
import NavBar from "@/components/navbar";
import { SeriePopular } from "@/lib/interfaces";
import { fetchSeriePopular } from "@/lib/data/api-data";
import CardSerie from "@/components/card-serie";
import Scroller from "@/components/scroller";
import { getRandomNumber } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Serie | CMDB",
  description: "Serie overview page.",
};

const page_nr = 1
const popular: SeriePopular | null = await fetchSeriePopular(page_nr);

export default async function SeriePage() {  
  return (
      popular !== null ?
      // <header className={styles.header}>
      <header className="relative w-[90%] h-[90%] rounded-[20px] overflow-hidden shadow-[0_10px_25px_8px_rgba(0,0,0,0.25)] before:content-[''] before:absolute before:w-[100%] before:h-[100%] before:bg-black before:bg-center before:bg-no-repeat before:bg-cover before:opacity-[.6] before:z-[-1] after:content-[''] after:absolute after:w-[100%] after:h-[100%] after:bg-linear-[180deg,transparent,black] after:z-[-1]">
          <Image
            loading="eager"
            className="absolute bg-center bg-no-repeat bg-cover opacity-[.6] z-[-1] bg-linear-[180deg,transparent,black]"
            // className={styles.header}
            src={`https://image.tmdb.org/t/p/original${popular.results[getRandomNumber()].backdrop_path}`}
            alt={`${popular.results[getRandomNumber()].name} backdrop`}
            width={5000}
            height={3000}
          />
          <NavBar />
          <h2 className={styles.container_heading}>Popular Series</h2>
          <section className={styles.container}>
            {/* <div className={styles.cards}> */}
              <Scroller>
              {popular.results.map((data: any, index: number) => (
                <CardSerie key={index} data={data} />
              ))}
              </Scroller>
            {/* </div> */}
          </section>
      </header>
      :
      <header className="relative w-[90%] h-[90%] rounded-[20px] overflow-hidden shadow-[0_10px_25px_8px_rgba(0,0,0,0.25)] before:content-[''] before:absolute before:w-[100%] before:h-[100%] before:bg-[url(@/public/bg-error.jpg)] before:bg-center before:bg-no-repeat before:bg-cover before:opacity-[.6] before:z-[-1] after:content-[''] after:absolute after:w-[100%] after:h-[100%] after:bg-linear-[180deg,transparent,black] after:bg-linear-[-90deg,transparent,black] after:z-[-1]">
          <NavBar />
      </header>
  )
}