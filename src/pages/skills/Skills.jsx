import React from 'react'
import styles from './Skills.module.scss';
import versionControl from '../../images/skills/versionControl.PNG';
import etc from '../../images/skills/etc.PNG';
import deployment from '../../images/skills/deployment.PNG';
import { RiMacbookLine, RiBookOpenLine, RiThumbUpLine } from 'react-icons/ri';

function Skills({ tabRefs }) {
    return (
        <article ref={(el) => (tabRefs.current[2] = el)} className={styles.Skills}>
            <h1>Skills</h1>
            <div>
                <div className={`${styles.container} ${styles.first}`}>
                    <div className={styles.item}>
                        <h2>Strong</h2>
                        <div className={styles.icon}>
                            <RiThumbUpLine size='3rem' />
                        </div>
                        <p>HTML5/CSS3, JavaScript, React, NodeJS</p>

                    </div>
                    <div className={styles.item}>
                        <h2>Experienced</h2>
                        <div className={styles.icon}>
                            <RiMacbookLine size='3rem' />
                        </div>
                        <p>Firebase, MongoDB, Sass, PostCSS</p>

                    </div>
                    <div className={styles.item}>
                        <h2>Studying</h2>
                        <div className={styles.icon}>
                            <RiBookOpenLine size='3rem' />
                        </div>
                        <p>Redux,  Redux-Saga, Redux-Thunk</p>
                    </div>
                </div>
                <div className={styles.container}>
                    <div className={styles.item}>
                        <h2>Version Control</h2>
                        <img src={versionControl} alt="versionControl" />
                    </div>
                    <div className={styles.item}>
                        <h2>Deployment</h2>
                        <img src={deployment} alt="deployment" />
                    </div>
                    <div className={styles.item}>
                        <h2>Etc</h2>
                        <img src={etc} alt="etc" />
                    </div>
                </div>
            </div>
        </article >
    )
}

export default Skills
