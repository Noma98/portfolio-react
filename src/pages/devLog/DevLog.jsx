import React from 'react'
import styles from './DevLog.module.scss';
import github from '../../images/logs/github.PNG';
import velog from '../../images/logs/velog.PNG';

function DevLog({ tabRefs }) {
    return (
        <article ref={(el) => (tabRefs.current[3] = el)} className={styles.DevLog}>
            <h1>DevLog</h1>
            <div className={styles.container}>
                <section>
                    <h2>Github</h2>
                    <img src={github} alt="github" />
                    <a href="https://velog.io/@wiostz98kr" target="_blank" rel="noopener noreferrer">바로가기
                    </a>
                </section>
                <section>
                    <h2>Dev Blog</h2>
                    <img src={velog} alt="velog" />
                    <a href="https://github.com/Noma98" target="_blank" rel="noopener noreferrer">
                        바로가기
                    </a>
                </section>
            </div>
        </article>
    )
}

export default DevLog
