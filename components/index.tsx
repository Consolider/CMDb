import Image from 'next/image';
import Link from 'next/link';
import styles from "@/components/index.module.css"
import { Star } from 'lucide-react';
import { capitalizeFirstLetter, extractYear, roundToNearest, switchValue, toURL } from "@/lib/utils";
import { MoviePopular, PeoplePopular, SeriePopular } from "@/lib/interfaces";
import { fetchMoviePopular, fetchPeoplePopular, fetchSeriePopular } from "@/lib/data/api-data";

const page_nr = 1
const moviePopular: MoviePopular | null = await fetchMoviePopular(page_nr);
const popular: SeriePopular | null = await fetchSeriePopular(page_nr);
const peoplePopular: PeoplePopular | null = await fetchPeoplePopular();

export default async function Index() {
    return (
        <div className={styles.container}>
            <div className={styles.cards}>
                <Link
                    className={styles.card}
                    // href={`/movie/${moviePopular?.results[0].}-${toURL(data.title)}`}
                    // href={`/movie/${data.id}-${data.title}`}
                    href="/movie"
                >
                    {/* <Image
                        className={styles.poster}
                        // src={`https://image.tmdb.org/t/p/original/${data.poster_path}`}
                        src="/movie-bg.jpg"
                        // alt={`${data.title} poster`}
                        alt="Bild"
                        width={2000}
                        height={3000}
                    /> */}
                    <div className={styles.rest_card}>
                        <div className={styles.cont}>
                            {/* <h3>MOVIES</h3> */}
                        </div>
                    </div>
                </Link>

                {/* <Link
                    className={styles.card}
                    // href={`/movie/${moviePopular?.results[0].}-${toURL(data.title)}`}
                    // href={`/movie/${data.id}-${data.title}`}
                    href="/movie"
                >
                    <Image
                        className={styles.poster}
                        // src={`https://image.tmdb.org/t/p/original/${data.poster_path}`}
                        src="/bg-error.jpg"
                        // alt={`${data.title} poster`}
                        alt="Bild"
                        width={2000}
                        height={3000}
                    />
                    <div className={styles.rest_card}>
                        <div className={styles.cont}>
                            <h3>SERIES</h3>
                        </div>
                    </div>
                </Link> */}

                {/* <Link
                    className={styles.card}
                    // href={`/movie/${moviePopular?.results[0].}-${toURL(data.title)}`}
                    // href={`/movie/${data.id}-${data.title}`}
                    href="/movie"
                >
                    <Image
                        className={styles.poster}
                        // src={`https://image.tmdb.org/t/p/original/${data.poster_path}`}
                        src="/bg-error.jpg"
                        // alt={`${data.title} poster`}
                        alt="Bild"
                        width={2000}
                        height={3000}
                    />
                    <div className={styles.rest_card}>
                        <div className={styles.cont}>
                            <h3>ACTORS</h3>
                        </div>
                    </div>
                </Link> */}
            </div>
        </div>
    )
}