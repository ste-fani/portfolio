import styles from './header.module.css';
import Link from 'next/link'

export default function Header() {
    return(
        <header className={styles.header}>
            <nav className={styles.navbar}>
                <h1 className={styles.nav_brand}>
                <Link href="/">
                    <a>.stefani barros</a>
                </Link>
                </h1>
                <ul className={styles.nav_container}>
                    <li className={styles.nav_item}>sobre</li>
                    <li className={styles.nav_item}>portfólio</li>
                    <li className={styles.nav_item}>contato</li>
                </ul>
            </nav>
        </header>
    )
}