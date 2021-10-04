import React from 'react'
import styles from './Skills.module.scss';
import versionControl from '../../images/skills/versionControl.PNG';
import backend from '../../images/skills/backend.PNG';
import etc from '../../images/skills/etc.PNG';
import deployment from '../../images/skills/deployment.PNG';
import Skill from '../../components/skill/Skill';

const front = [
    { name: 'HTML/CSS', percent: '90' },
    { name: 'JavaScript', percent: '80' },
    { name: 'React', percent: '80' },
    { name: 'Redux', percent: '30' },
    { name: 'Sass/PostCSS', percent: '40' }
];
const back = [
    { name: 'Node JS', percent: '50' },
    { name: 'MongoDB', percent: '40' }
];

function Skills({ tabRefs }) {
    return (
        <article ref={(el) => (tabRefs.current[2] = el)} className={styles.Skills}>
            <h1>Skills</h1>

            <div className={styles.container}>
                <div className={styles.frontBack}>
                    <div>
                        <h3>Front-end</h3>
                        {
                            front.map(skill => <Skill name={skill.name} percent={skill.percent} />)
                        }
                    </div>
                    <div>
                        <h3>Back-end</h3>
                        {back.map(skill => <Skill name={skill.name} percent={skill.percent} />)}
                    </div>
                </div>
                <div className={styles.item}>
                    <h3>Version Control</h3>
                    <img src={versionControl} alt="versionControl" />
                </div>
                <div className={styles.item}>
                    <h3>Deployment</h3>
                    <img src={deployment} alt="deployment" />
                </div>
                <div className={styles.item}>
                    <h3>Etc</h3>
                    <img src={etc} alt="etc" />
                </div>
            </div>
        </article >
    )
}

export default Skills
