import React from 'react'
import styles from './About.module.scss';
import me from '../../images/about/avatar.svg';

function About({ tabRefs }) {
    return (
        <article ref={(el) => (tabRefs.current[1] = el)} className={styles.About}>
            <h1>About me</h1>
            <div className={styles.content}>
                <div className={styles.item}>
                    <img className={styles.avatar} src={me} alt="" />
                    <h3>Ha Jinheui (Noma)</h3>
                    <p>안녕하세요, 프론트엔드 개발자 하진희입니다.<br /><br />
                        많은 사람들에게 선한 영향력을 줄 수 있는  서비스를 만들고,<br />
                        좋은 UX를 제공하기 위해 끊임 없이 고민하고, <br />이를 위해 꾸준히 공부하고 도전하는 개발자가 되고 싶습니다.<br />
                        <br />
                        아직 부족함이 많다는 것을 잘 알기에 매일 꾸준히 공부하고 있습니다. 끈기, 성실, 열정. 이 세가지로 저의 부족함들을 반드시 메꿔나가겠습니다.<br />
                    </p>
                </div>
                <div className={styles.item}>
                    <h3>College</h3>
                    <p>선문대학교 산업경영공학과 전공(4.4/4.5)</p>
                    <p>스마트제조 빅데이터응용(E-special)</p>
                    <h3>Certificate</h3>
                    <p>정보처리기사(2020)<br />데이터분석준전문가(2019)<br /> 컴퓨터활용능력 1급(2019)</p>
                </div>
            </div>
        </article>
    )
}

export default About
