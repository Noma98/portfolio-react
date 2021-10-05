import React from 'react'
import styles from './Home.module.scss';

function Home({ tabRefs }) {
    return (
        <article ref={(el) => (tabRefs.current[0] = el)} className={styles.Home}>
            <p><b>Hello! I'm Jinheui,<br />a front-end developer.</b></p>
        </article>
    )
}

export default Home
