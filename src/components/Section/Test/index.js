import React from "react";
import useMediaQuery from "../../../utils/useMediaQuery";
import styles from "./EventCard.module.css";
import { eventCardColors } from "../../../data/colors";
import Image from '@bit/zubi-io.core.image';
function EventCard({ eventContent, currentCard }) {
    return (
        <div className={styles.eventCardMain}>

                <Card image={eventContent[currentCard].image} date={eventContent[currentCard].date} title={eventContent[currentCard].title} content={eventContent[currentCard].content} backgroundColor={eventCardColors[currentCard % 3]} />

        </div>
    )
};

function Card({ image, date, title, content, backgroundColor }) {
    return (
        <div>
        <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap"
              rel="stylesheet"
               />
        <div className={styles.our}>
        <div className={styles.texts}>
            <p>{content}</p>
            <p className={styles.nam}><b>{title}</b></p>
        </div>
        <div>
        <Image src={image} alt="" className={styles.igs} /> </div>
        <div className={styles.blueBox}> </div>
        </div>
        </div>
    )
}
export default EventCard;
