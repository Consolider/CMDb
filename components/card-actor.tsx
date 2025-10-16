import Link from "next/link"
import Image from "next/image"
import styles from "@/components/card-actor.module.css"
import { toURL } from "@/lib/utils";

export default function CardActor({ data }: { data: any }) {
  return (
    <Link
      className={styles.card}
      href={`/actor/${data.id}-${toURL(data.name)}`}
    > 
      <Image
      className={styles.poster}
      src={`https://image.tmdb.org/t/p/original/${data.profile_path}`}
      alt={`${data.name} poster`}
      width={2000}
      height={3000}
    />
      <div className={styles.rest_card}>
        <div className={styles.cont}>
          <h4>{data.name}</h4>
          <div className={styles.sub}>
            <p>{data.character}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}