import Image from 'next/image';
import Link from 'next/link';
import styles from "@/components/card.module.css"
import { roundToNearest, toURL } from "@/lib/utils";

export default function CardMedia({ data }: { data: any }) {
    return (
        // <section className={styles.container}>
        // <div className={styles.cards}>
        <Link className={styles.card} href={`/movie/${data.id}-${toURL(data.title)}`}>
            <Image
                className={styles.poster}
                src={`https://image.tmdb.org/t/p/original/${data.poster_path}`}
                alt={`${data.title} poster`}
                width={2000}
                height={3000}
            />
            <div className={styles.rest_card}>
                <Image
                    src={`https://image.tmdb.org/t/p/original/${data.backdrop_path}`}
                    alt={`${data.title} cover`}
                    width={5000}
                    height={3000}
                />
                <div className={styles.cont}>
                    <h3>{data.title}</h3>
                    <div className={styles.sub}>
                        <p>{data.release_date}</p>
                        <h4>
                            <span>IMDb</span><i></i>{roundToNearest(data.vote_average, 1)}
                        </h4>
                    </div>
                </div>
            </div>
        </Link>
        // </div>
    // </section>
    );
};