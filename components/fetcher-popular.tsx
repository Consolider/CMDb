import styles from "./fetcher.module.css";
import CardMediaDev from "./card-media-dev";
import { fetchPopular } from "@/lib/data/api-data";
import { Popular } from "@/lib/interfaces";
import Scroller from "./scroller";
import ScrollerLeft from "./scroller-left";
import ScrollerRight from "./scroller-right";


const page_nr = 1
const popular: Popular | null = await fetchPopular(page_nr);

export default function FetcherPopular() {
  if (!popular) {
    return (
      // <section className="absolute text-center">
      <section className={styles.container}>
        <h4>Missing Movies</h4>
        <div className="relative">
        {/* // <div className={styles.cards}> */}
          <p>No movie data available.</p>
        </div>
      </section>
    )
  }

  return (
    <section className={styles.container}>
      <h4>Popular</h4>
      <div className={styles.cards}>
      {/* <Scroller /> */}
      <ScrollerLeft />
      {/* </div> */}
      {/* <div ref={cardsRef} className={styles.cards}> */}
      
      {/* <div className={styles.cards}> */}
      {popular.results.map((data: any, index: number) => (
        <CardMediaDev key={index} data={data} />
      ))}
      {/* </div> */}
      {/* </Scroller> */}
      <ScrollerRight />
      </div>
    </section>
  );
};

// export default Scroller;
