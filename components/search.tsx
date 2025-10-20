import Image from "next/image";
import Link from "next/link";
import styles from "@/components/search.module.css"

export default function Search() {
    return (
        <div className={styles.search_user}>
            <input type="text" placeholder="Search..." id="search_input" />
            <Image
                className={styles.search_user}
                src="/user.jpg"
                alt="User Image"
                width={23}
                height={23}
            />
            <div className={styles.search}>
                <Link
                    className={styles.card}
                    href="/actors"
                >
                <Image
                    className={styles.card}
                    src="/movie.jpg"
                    alt="Movie Thumbnail"
                    width={28}
                    height={90}
                />
                <div className={styles.cont}>
                    <h3>Title</h3>
                    <p>Studio, Type, Year, <span>IMDb</span><i className="bi bi-star-fill"></i> 1.3</p>
                </div>
                </Link>
            </div>
        </div>
    )
}    
                {/* 
                <Link
                    className={styles.card}
                    href="/actors"
                >
                <Image
                    className={styles.card}
                    src="/movie.jpg"
                    alt="Movie Thumbnail"
                    width={28}
                    height={90}
                />
                <div className={styles.cont}>
                    <h3>Title</h3>
                    <p>Studio, Type, Year, <span>IMDb</span><i className="bi bi-star-fill"></i> 1.3</p>
                </div>
                </Link>
            </div>
        </div>
    ) 
}
*/}