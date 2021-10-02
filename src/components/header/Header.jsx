import React, { useRef, useState, useEffect } from 'react'
import styles from './Header.module.scss';

const lists = ['About me', 'Skills', 'DevLog', 'Projects'];
function Header({ tabRefs }) {
    const [coord, setCoord] = useState(0);
    const documentRef = useRef(document);

    const handleScroll = () => {
        setCoord(window.pageYOffset);
    }
    const handleClick = (e) => {
        const id = e.target.id;
        tabRefs.current[id].scrollIntoView({ behavior: "smooth" });
    }

    useEffect(() => {
        documentRef.current.addEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`${styles.Header} ${coord > 100 ? styles.colored : ''}`}>
            <h2>JH's Portfolio</h2>
            <nav className={styles.nav}>
                <ul onClick={handleClick}>
                    {lists.map((v, i) =>
                        <li key={i} id={i} onClick={handleClick}>
                            {v}
                        </li>)}
                </ul>
            </nav>
        </header>
    )
}

export default Header
