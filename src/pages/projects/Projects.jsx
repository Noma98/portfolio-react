import React, { useRef } from 'react'
import styles from './Projects.module.scss';
import Project from '../../components/project/Project';
import data from '../../data/projects';

function Projects({ tabRefs }) {
    const boxRef = useRef();
    return (
        <article
            ref={(el) => (tabRefs.current[4] = el)}
            className={styles.Projects}>
            <h1>Projects</h1>
            <div
                ref={boxRef}
            >
                {
                    data && data.map((v, i) => <Project data={v} key={i} />)
                }
            </div>
        </article>
    )
}

export default Projects
