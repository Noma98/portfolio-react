import React, { useRef, useState, useEffect } from 'react'
import styles from './Header.module.scss';
import { FaBars, FaTimes } from 'react-icons/fa';

const lists = ['About me', 'Skills', 'DevLog', 'Projects'];

function Header({ tabRefs }) {
    const [mQuery, setMQuery] = useState(false);
    const [coord, setCoord] = useState(0);
    const [currentTab, setCurrentTab] = useState();
    const [open, setOpen] = useState(false);
    const documentRef = useRef(document);

    const handleScroll = () => {
        setCoord(window.pageYOffset);
    }
    const handleClick = (e) => {
        const id = e.target.id;
        tabRefs.current[id].scrollIntoView({ behavior: "smooth" });
        setCurrentTab(tabRefs.current[id]);
        mQuery && setOpen(false);
    }
    const handleToggle = () => {
        setOpen(!open);
    }

    useEffect(() => {
        documentRef.current.addEventListener('scroll', handleScroll);
    }, []);
    useEffect(() => {
        const mql = window.matchMedia('screen and (max-width:650px)');
        mql.matches && setMQuery(mql.matches);
        const handleChange = (event) => {
            setMQuery(event.matches);
        };
        mql.addEventListener('change', handleChange);
        return () => mql.removeEventListener('change', handleChange);
    }, []);

    useEffect(() => {
        const changeTab = entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setCurrentTab(entry.target);
                }
            })
        }
        const option = { threshold: 0.1 };
        const tabObserver = new IntersectionObserver(changeTab, option);
        tabRefs.current.forEach(tab => tabObserver.observe(tab));

        return () => tabObserver.disconnect();
    }, [tabRefs])

    return (
        <header className={`${styles.Header} ${mQuery || coord > 100 ? styles.colored : ''}`}>
            <h2>JH's Portfolio</h2>
            <nav className={styles.nav}>
                {mQuery &&
                    <button className={open && styles.toggled} onClick={handleToggle}>
                        {open ? <FaTimes size='1.5rem' /> : <FaBars size='1.5rem' />}
                    </button>
                }
                <ul className={`${mQuery && styles.mobileMenu} ${open && styles.open}`} onClick={handleClick}>
                    {lists.map((v, i) =>
                        <li key={i} id={i + 1} onClick={handleClick} className={tabRefs.current[i + 1] === currentTab && styles.highlight}>
                            {v}
                        </li>)}
                </ul>
            </nav>
        </header>
    )
}

export default Header
