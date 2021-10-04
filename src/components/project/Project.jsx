import React from 'react'
import styles from './Project.module.scss';

import { FaCat } from 'react-icons/fa';

function Project({ data }) {
    const { name, period, domain, desc, features, callout, experience, github, imgArray, front, back, deploy } = data;
    return (
        <div className={styles.Project}>
            <h2>{name}</h2>
            <p>{period}</p>
            <div className={styles.container}>
                <div className={styles.imgs}>
                    <a className={styles.btn} href={domain} target="_blank" rel="noopener noreferrer">{`Go to ${domain.slice(8)}`}</a>
                    {imgArray.map((v, i) => <a key={i} href={domain} target="_blank" rel="noopener noreferrer">
                        <img src={v} alt="project" />
                    </a>)}
                </div>
                <div className={styles.desc}>
                    {desc.map((v, i) => <p key={i}>{v}</p>)}
                    <div className={styles.item}>
                        <h4>주요 기능 </h4>
                        <ul>
                            {features.map((v, i) => <li key={i}>{v}</li>)}

                        </ul>
                    </div>
                    {callout && <div className={styles.callout}>
                        <FaCat size='40px' color='rgb(243, 106, 243)' />
                        <p>{callout}</p>
                    </div>}
                    <div className={styles.item}>
                        <h4>새로운 경험 </h4>
                        <p>
                            {experience}
                        </p>
                    </div>
                    <div className={styles.item}>
                        <h4>Github</h4>
                        <a href={github} target="_blank" rel="noopener noreferrer">README.md</a>
                    </div>
                    <div className={styles.item}>
                        <h4>Front-end </h4>
                        <p>{front}</p>
                    </div>
                    {back && <div className={styles.item}>
                        <h4>Back-end </h4>
                        <p>{back}</p>
                    </div>}
                    <div className={styles.item}>
                        <h4>Deployment </h4>
                        <p>{deploy}</p>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Project
