import type { Metadata } from "next";
import Image from "next/image";
import styles from "@/app/page.module.css"
import NavBar from "@/components/navbar";
import { SearchSerieResults, SeriePopular } from "@/lib/interfaces";
import { fetchSearchSerie, fetchSeriePopular } from "@/lib/data/api-data";
import CardSerie from "@/components/card-serie";
import Scroller from "@/components/scroller";
import { getRandomNumber } from "@/lib/utils";
import SearchSerie from "@/components/search-serie";

export const metadata: Metadata = {
  title: "Serie | CMDB",
  description: "Serie overview page.",
};

// const searchQuerySerie = [
// const test_array = [
//   {
//   page: 1,
//   results: [
//     {
//       adult: false,
//       backdrop_path: '/yUOFocKDW7MCC5isx4FK8A68QFp.jpg',
//       genre_ids: [
//         1,
//         2
//       ],
//       id: 4607,
//       origin_country: [
//         "us",
//         "se"
//       ],
//       original_language: 'en',
//       original_name: 'Lost',
//       overview: 'Stripped of everything, the survivors of a horrific plane crash  must work together to stay alive. But the island holds many secrets.',
//       popularity: 55.5663,
//       poster_path: 'https://image.tmdb.org/t/p/w185/og6S0aTZU6YUJAbqxeKjCa3kY1E.jpg',
//       first_air_date: '2004-09-22',
//       name: 'Lost',
//       vote_average: 7.9,
//       vote_count: 4711
//     },
//     {
//       adult: false,
//       backdrop_path: '/yUOFocKDW7MCC5isx4FK8A68QFp.jpg',
//       genre_ids: [
//         1,
//         2
//       ],
//       id: 66732,
//       origin_country: [
//         "us",
//         "se"
//       ],
//       original_language: 'en',
//       original_name: 'Stranger Things',
//       overview: 'Stripped of everything, the survivors of a horrific plane crash  must work together to stay alive. But the island holds many secrets.',
//       popularity: 55.5663,
//       poster_path: 'https://image.tmdb.org/t/p/w185/og6S0aTZU6YUJAbqxeKjCa3kY1E.jpg',
//       first_air_date: '2016-09-22',
//       name: 'Stranger Things',
//       vote_average: 8.7,
//       vote_count: 4711
//     }
//   ],
//   total_pages: 24,
//   total_results: 467,
//   }
// ]

const query = "lost"
const page_nr = 1
const popular: SeriePopular | null = await fetchSeriePopular(page_nr);
const searchQuerySerie: SeriePopular | null = await fetchSearchSerie(query)
// const searchQuerySerie: SearchSerieResults[] | null = await fetchSearchSerie(query)
console.log(searchQuerySerie)

export default async function SeriePage() {  
  return (
      (popular !== null && searchQuerySerie !== null) ?
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
          <div className={styles.nav}>
            <NavBar />
            {/* <SearchSerie data={test_array}/> */}
            {/* <SearchSerie data={[searchQuerySerie]}/> */}
            {/* <SearchSerie results={searchQuerySerie}/> */}
          </div>
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