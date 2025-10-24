import Image from 'next/image';
import Link from 'next/link';
import styles from "@/components/card.module.css"
import { Star } from 'lucide-react';
import { extractYear, roundToNearest, toURL } from "@/lib/utils";
import SkeletonCard from '@/components/skeleton-card'

export default function CardSerie({ data, loading }: { data: any; loading: boolean }) {
    if (loading) {
        return <SkeletonCard />;
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
                        <h4>
                            <span>IMDb</span><i><Star size={15} fill='yellow'/></i>{roundToNearest(data.vote_average, 1)}
                        </h4>
                    </div>
                </div>
            </div>
        </Link>
    );
};