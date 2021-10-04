import React from 'react'
import styles from './Skill.module.scss';

function Skill({ name, percent }) {
    return (
        <div className={styles.Skill}>
            <p>{name}</p>
            <div className={styles.skillBar}>
                <div
                    style={{ width: `${percent}%` }}
                    className={styles.barValue}></div>
            </div>
        </div >
    )
}

export default Skill
