import Image from 'next/image';
import styles from "@/components/index.module.css"
import RedirectToLogin from './redirect-to-login';

export default async function Index() {
    return (
        <main className={styles.main}>
            <Image
                src="/logo.png"
                alt="Movie Logo"
                width={500}
                height={500}
                className={styles.splash_logo}
            />
        <RedirectToLogin />
        </main>
        
    )
}
