import Image from 'next/image';
import Link from 'next/link';
import styles from "@/components/card.module.css"
import { Star } from 'lucide-react';
import { capitalizeFirstLetter, extractYear, roundToNearest, switchValue, toURL } from "@/lib/utils";

export default function CardMedia({ data }: { data: any }) {

    if (!data.name) {
    return (
        <Link
            className={styles.card}
            href={`/movie/${data.id}-${toURL(data.title)}`}
            // href={`/movie/${data.id}-${data.title}`}
        >
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
                        <p><span>{capitalizeFirstLetter(data.media_type)}</span></p>
                        <h4>
                            <span>IMDb</span><i><Star size={15} fill='yellow'/></i>{roundToNearest(data.vote_average, 1)}
                        </h4>
                    </div>
                </div>
            </div>
        </Link>
    )
    }
    return (
        <Link
            className={styles.card}
            href={`/serie/${data.id}-${toURL(data.name)}`}
        >
            <Image
                className={styles.poster}
                src={`https://image.tmdb.org/t/p/original/${data.poster_path}`}
                alt={`${data.name} poster`}
                width={2000}
                height={3000}
            />
            <div className={styles.rest_card}>
                <Image
                    src={`https://image.tmdb.org/t/p/original/${data.backdrop_path}`}
                    alt={`${data.name} cover`}
                    width={5000}
                    height={3000}
                />
                <div className={styles.cont}>
                    <h3>{data.name}</h3>
                    <div className={styles.sub}>
                        <p>{extractYear(data.first_air_date)}</p>
                        <p><span>{switchValue(data.media_type)}</span></p>
                        <h4>
                            <span>IMDb</span><i><Star size={15} fill='yellow'/></i>{roundToNearest(data.vote_average, 1)}
                        </h4>
                    </div>
                </div>
            </div>
        </Link>
    )
};