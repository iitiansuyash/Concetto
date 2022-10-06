import styles from "../styles/Events.module.css"
import styled from "styled-components"

const StyledHr = styled.hr`
    color: white;
`
const StyledSubTitle = styled.h2`
    font-size: 32px;
    padding-top: 0px 4px 0px 4px;
    font-weight: 'bold';
    font-family: 'vanguardcf', sans-serif;
    margin-left: 35px;
    margin-top: 25px;
    color: #ccc;
    -webkit-text-stroke: 0.5px cyan;
    text-decoration: underline;
    text-align: center;
    color: white;
`


const Events = () => {
    return ( 
        <>
            <StyledHr />
            <div style={{ height: "10vh", width: "100%" }}>
                <div>
                    <StyledSubTitle><h1>EVENTS</h1></StyledSubTitle>
                </div>
                
            </div>

            <ul className={styles.cards}>
                <li>
                    <a href="" className={styles.card}>
                    <img src="https://i.imgur.com/oYiTqum.jpg" className={styles.card__image} alt="" />
                    <div className={styles.card__overlay}>
                        <div className={styles.card__header}>
                        <svg className={styles.card__arc} xmlns="http://www.w3.org/2000/svg">
                            <path />
                        </svg>
                        <img class={styles.card__thumb} src="https://i.imgur.com/7D7I6dI.png" alt="" />
                        <div class="card__header-text">
                            <h3 class={styles.card__title}>EVENT NAME</h3>
                            <span class={styles.card__status}>1 hour ago</span>
                        </div>
                        </div>
                        <p class={styles.card__description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?</p>
                    </div>
                    </a>
                </li>
                <li>
                    <a href="" className={styles.card}>
                    <img src="https://i.imgur.com/oYiTqum.jpg" className={styles.card__image} alt="" />
                    <div className={styles.card__overlay}>
                        <div className={styles.card__header}>
                        <svg className={styles.card__arc} xmlns="http://www.w3.org/2000/svg">
                            <path />
                        </svg>
                        <img class={styles.card__thumb} src="https://i.imgur.com/7D7I6dI.png" alt="" />
                        <div class="card__header-text">
                            <h3 class={styles.card__title}>EVENT NAME</h3>
                            <span class={styles.card__status}>1 hour ago</span>
                        </div>
                        </div>
                        <p class={styles.card__description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?</p>
                    </div>
                    </a>
                </li><li>
                    <a href="" className={styles.card}>
                    <img src="https://i.imgur.com/oYiTqum.jpg" className={styles.card__image} alt="" />
                    <div className={styles.card__overlay}>
                        <div className={styles.card__header}>
                        <svg className={styles.card__arc} xmlns="http://www.w3.org/2000/svg">
                            <path />
                        </svg>
                        <img class={styles.card__thumb} src="https://i.imgur.com/7D7I6dI.png" alt="" />
                        <div class="card__header-text">
                            <h3 class={styles.card__title}>EVENT NAME</h3>
                            <span class={styles.card__status}>1 hour ago</span>
                        </div>
                        </div>
                        <p class={styles.card__description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?</p>
                    </div>
                    </a>
                </li><li>
                    <a href="" className={styles.card}>
                    <img src="https://i.imgur.com/oYiTqum.jpg" className={styles.card__image} alt="" />
                    <div className={styles.card__overlay}>
                        <div className={styles.card__header}>
                        <svg className={styles.card__arc} xmlns="http://www.w3.org/2000/svg">
                            <path />
                        </svg>
                        <img class={styles.card__thumb} src="https://i.imgur.com/7D7I6dI.png" alt="" />
                        <div class="card__header-text">
                            <h3 class={styles.card__title}>EVENT NAME</h3>
                            <span class={styles.card__status}>1 hour ago</span>
                        </div>
                        </div>
                        <p class={styles.card__description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?</p>
                    </div>
                    </a>
                </li>
                <li>
                    <a href="" className={styles.card}>
                    <img src="https://i.imgur.com/oYiTqum.jpg" className={styles.card__image} alt="" />
                    <div className={styles.card__overlay}>
                        <div className={styles.card__header}>
                        <svg className={styles.card__arc} xmlns="http://www.w3.org/2000/svg">
                            <path />
                        </svg>
                        <img class={styles.card__thumb} src="https://i.imgur.com/7D7I6dI.png" alt="" />
                        <div class="card__header-text">
                            <h3 class={styles.card__title}>EVENT NAME</h3>
                            <span class={styles.card__status}>1 hour ago</span>
                        </div>
                        </div>
                        <p class={styles.card__description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?</p>
                    </div>
                    </a>
                </li>
            </ul>
        </>
     );
}
 
export default Events;