import React, { useState, useEffect } from "react";
import styles from "./Events.module.css";
import EventCard from "../../components/Section/EventCard";
import Image from '@bit/zubi-io.core.image';
const arrowLeft = "https://zubi.sgp1.cdn.digitaloceanspaces.com/Z.Community/assets/arrowLeft.svg";
const arrowRight = "https://zubi.sgp1.cdn.digitaloceanspaces.com/Z.Community/assets/arrowRight.svg";
const rightArrowS = "https://zubi.sgp1.cdn.digitaloceanspaces.com/Z.Community/assets/right_arrow.svg";


const Pagination = {
    min: 0,
    max: 1,
};
function UpcomingEvents() {
    const [currentCard, setCurrentCard] = useState(0);

    const [eventContent, setEventContent] = useState([]);
    useEffect(() => {
        fetch('https://events-api.zubi.io/webinars?role=student')
            .then(res => res.json())
            .then(data => setEventContent(data.webinars.slice(0, 3)))
    }, [])


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
    <div> 
        <div className={styles.mainContainer} style={{ clear: "both", width: "100%", height: "0px" }}>
            <div className={styles.subContainer}>
                {/* <div className={styles.data}> */}
                    {/* <div className={styles.card}>
                        {eventContent.length > 0 && <EventCard eventContent={eventContent} currentCard={currentCard} />}
                    </div>
                    <div className={styles.paginationContainer}>
                        {eventContent.length > 0 && eventContent.map((_, index) => <PaginationDot key={index} paginationIndex={index} currentCard={currentCard} />)}
                    </div> */}
                    <div className={styles.buttons}>
                        {/* <div className={styles.arrowButton}>
                            <button onClick={onClickLeft}>
                                <Image src={arrowLeft} alt="" />
                            </button>
                            <button onClick={onClickRight}>
                                <Image src={arrowRight} alt="" />
                            </button>
                        </div> */}
                        <div className={styles.exploreButton}>
                            <a href="https://www.youtube.com/c/Zubi-io " target = "_blank"><button>
                                Explore all events
                        <Image src={arrowRight} alt="" />
                            </button></a>
                        </div>
                    {/* </div> */}
                </div>
            </div>
        </div>
        <div className={styles.fl}>
        {/* <center> */}
          <div className={styles.our}>
          <p className={styles.eme}> LETCON 2020 </p>
          <p className={styles.des} style={{ textAlign: "start" }}>
            {" "}
            Leaders of Emerging Technology Conference was a 3 days immersive virtual conference on Emerging Technologies
            that consisted talks, workshops and panel discussion by top industy stalwarts!
            <br />
            <br />
          </p>
          <br />
            <a href="https://letcon.zubi.io/" target="_blank" rel="noopener noreferrer" className={styles.applyNow}>
            <div>
              <span className={styles.btn_txt}>Know More</span>
              <img src={rightArrowS} alt="" />
            </div>
          </a>{" "}
          </div>{" "}
        {/* </center> */}
        <div className={styles.our}>
          <p className={styles.eme}> LETHACK 2020 </p>
          <p className={styles.des} style={{ textAlign: "start" }}>
            {" "}
            Leaders of Emerging Technology Hackathon brought the leaders of Emerging Technologies under one roof
            for building a great future.
            <br />
            <br />
          </p>
          <br></br>
          <br></br>
          <br />
            <a href="https://letshack.zubi.io/" target="_blank" rel="noopener noreferrer" className={styles.applyNow}>
            <div>
              <span className={styles.btn_txt}>Know More</span>
              <img src={rightArrowS} alt="" />
            </div>
          </a>{" "}
        </div>{" "}
      </div>
    </div>
    )
};

function PaginationDot({ paginationIndex, currentCard }) {
    const isActive = paginationIndex === currentCard;
    return <div className={`${styles.paginationDot} ${isActive ? styles.paginationDotActive : styles.paginationDotInactive}`} />
}

export default UpcomingEvents;
