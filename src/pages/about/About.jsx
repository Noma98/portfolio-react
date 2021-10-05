import React from 'react'
import styles from './About.module.scss';
import me from '../../images/about/avatar.png';
import og from '../../images/about/og.png';

function About({ tabRefs }) {
    return (
        <article ref={(el) => (tabRefs.current[1] = el)} className={styles.About}>
            <h1>About me</h1>
            <div className={styles.container}>
                <div className={`${styles.item} ${styles.left}`}>
                    <h3>Ha Jinheui (Noma)</h3>
                    <p>안녕하세요, 프론트엔드 개발자 <span>하진희</span>입니다.😊<br /><br />
                        저는 개발하는 것을 좋아하고 잘하고 싶다는 욕심이 강합니다. 그렇기 때문에 조금이라도 어제보다 더 성장한 개발자가 되기 위해, 매일 부단히 노력 중입니다. <span>그 과정속에서 새롭게 배운 것들이 있다면</span> 단순히 머리로 기억하는 것이 아니라 <span>블로그와 노션, 깃허브를 사용해 꾸준히 기록</span>해나가고 있습니다.
                        사이드 프로젝트 중에는 좀더 좋은 UI/UX를 위해 계속해서 수정해 나가는 조금 완벽 주의적 성향을 가지고 있습니다.
                        <br />
                    </p>
                    <h3>Interest</h3>
                    <p>노션, 슬랙과 같이 사용자가 쉽고 편하게 쓸 수 있는 서비스를 제공하는 데에 관심이 있습니다.</p>
                    <h3>Personality</h3>
                    <div className={styles.tagBox}>
                        <div>성실한 노력파(주 6일 공부)</div>
                        <div>잘 웃는 밝은 성격</div>
                        <div>배려심多</div>
                        <div>책임감 강함</div>
                        <div>주변 사람에게도 전달되어지는 열정 🔥 </div>
                        <div>조금 완벽주의적 성향(디테일 중요시)</div>
                        <div>주체적으로 할 일을 찾는 타입</div>
                    </div>

                </div>
                <div className={`${styles.item} ${styles.right}`}>
                    <img className={styles.avatar} src={me} alt="" />
                    <h3>College</h3>
                    <p>선문대학교 산업경영공학과 전공(4.4/4.5)</p>
                    <p>스마트제조 빅데이터응용(E-special)</p>
                    <h3>Certificate</h3>
                    <p>정보처리기사(2020)<br />데이터분석준전문가(2019)<br /> 컴퓨터활용능력 1급(2019)</p>
                    <hr />
                    <h3>Contact Me !</h3>
                    <p>wiostz98kr@gmail.com</p>
                </div>
                <img src={og} alt="og" style={{ display: 'none' }} />
            </div>
        </article>
    )
}

export default About
