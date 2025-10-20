import Image from "next/image";
import Link from "next/link";
//import data from "@/lib/pages.json";
import Search from "./search";
import styles from "./navbar.module.css"

export default function NavBar() {
    return (
    <nav className={styles.nav}>
        <div className={styles.logo_ul}>
            <ul className={styles.logo_ul}>
                <Image
                    // className={styles.logo_ul}
                    src="/logo.png"
                    alt="Movie logo"
                    width={80}
                    height={80}
                />
                <li className={styles.logo_ul}>
                    {/* <Link href={"/"}>Home</Link> */}
                    {/* <p>|</p> */}
                    <Link href={"/movie"}>Movies</Link>
                    <Link href={"/serie"}>Series</Link>
                    <Link href={"/actor"}>Actors</Link>
                </li>
                
                {/* {data["pages"].map((link, index) => (
                <li key={index}>
                    <Link
                        className="p-3 block hover:bg-sky-600"
                        href={link.href}
                    >
                        {link.label}
                    </Link>
                </li>
                ))} */}
            </ul>
        </div>
    {/* <Search/> */}
    </nav>
    )
}