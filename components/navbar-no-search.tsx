import Image from "next/image";
import Link from "next/link";
// import Search from "./search";
import styles from "./navbar.module.css"

export default function NavBarNoSearch() {
    return (
    <nav className={styles.nav}>
        <div className={styles.logo_ul}>
            <ul className={styles.logo_ul}>
                <Image
                    src="/logo.png"
                    alt="Movie logo"
                    width={80}
                    height={80}
                />
                <li className={styles.logo_ul}>
                    <Link href={"/movie"}>Movies</Link>
                    <Link href={"/serie"}>Series</Link>
                    <Link href={"/actor"}>Actors</Link>
                </li>
            </ul>
        </div>
    {/* <Search/> */}
    </nav>
    )
}