import React, { useState, useEffect } from "react";
import styles from "./eve.module.css";
import EventCard from "../../components/Section/Test";
import { EventContent } from "../../utils/EventContent";
import Image from '@bit/zubi-io.core.image';
const arrowLeft = "https://zubi.sgp1.cdn.digitaloceanspaces.com/Z.Community/assets/arrowLeft.svg";
const arrowRight = "https://zubi.sgp1.cdn.digitaloceanspaces.com/Z.Community/assets/arrowRight.svg";
const left = "https://zubi.sgp1.cdn.digitaloceanspaces.com/Z.Community/assets/TestimonialArrowL.svg";
const right = "https://zubi.sgp1.cdn.digitaloceanspaces.com/Z.Community/assets/TestimonialArrowR.svg";


const Pagination = {
    min: 0,
    max: 3,
};
function Test() {
    const [currentCard, setCurrentCard] = useState(0);

    const [eventContent, setEventContent] = useState([]);



    const onClickLeft = () => {
        const prevCard = currentCard - 1;
        if (prevCard < Pagination.min) {
            setCurrentCard(Pagination.max);
        } else {
            setCurrentCard(prevCard);
        }
    };

    const onClickRight = () => {
        const nextCard = currentCard + 1;
        if (nextCard > Pagination.max) {
            setCurrentCard(Pagination.min);
        } else {
            setCurrentCard(nextCard);
        }
    };

    return (
        <div className={styles.mainContainers} style={{ clear: "both", width: "100%" }}>
            <div className={styles.subContainers}>
                <div className={styles.datas}>
                    <div className={styles.card}>

                        <div style={{marginRight:"2%"}} className={styles.arrow}>
                        <img src={left} onClick={onClickLeft}/>
                         </div>
                        <div>
                        {EventContent.length > 0 && <EventCard eventContent={EventContent} currentCard={currentCard} />}
                        </div>
                        <div style={{marginLeft:"5%"}} className={styles.arrow}>

                        <img src={right} onClick={onClickRight}/>
                         </div>

                    </div>
                    <div className={styles.paginationContainer}>
                        {eventContent.length > 0 && eventContent.map((_, index) => <PaginationDot key={index} paginationIndex={index} currentCard={currentCard} />)}
                    </div>
                    <div className={styles.buttons}>
                        <div className={styles.arrowButton}>

                                <img src={left} alt="" onClick={onClickLeft} style={{width:"10%"}}/>

                                <img src={right} alt=""onClick={onClickRight} style={{width:"10%"}} />

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

function PaginationDot({ paginationIndex, currentCard }) {
    const isActive = paginationIndex === currentCard;
    return <div className={`${styles.paginationDot} ${isActive ? styles.paginationDotActive : styles.paginationDotInactive}`} />
}

export default Test;
