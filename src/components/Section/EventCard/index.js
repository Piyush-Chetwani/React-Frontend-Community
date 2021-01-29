import React from "react";
import useMediaQuery from "../../../utils/useMediaQuery";
import styles from "./EventCard.module.css";
import { eventCardColors } from "../../../data/colors";
import Image from '@bit/zubi-io.core.image';
function EventCard({ eventContent, currentCard }) {
    const isMobile = useMediaQuery("(max-width: 1199px)");
    return (
        <div className={styles.eventCardMain}>
            {isMobile ?
                <Card image={eventContent[currentCard].banner} date={eventContent[currentCard].startTime.split('T')[0]} title={eventContent[currentCard].title} content={eventContent[currentCard].description.agenda} backgroundColor={eventCardColors[currentCard % 3]} />
                :
                <>
                    {eventContent.map(({ banner, startTime, title, description }, index) => {
                        const backgroundColor = eventCardColors[index % 3];
                        return <Card image={banner} date={startTime.split('T')[0]} title={title} content={description.agenda} backgroundColor={backgroundColor} />
                    })}
                </>
            }
        </div>
    )
};

function Card({ image, date, title, content, backgroundColor }) {
    return (
        <div className={styles.cardContainer}>
            <div className={styles.eventInfo}>
                <Image src={image} alt="" />
                <div className={styles.text}>
                    <div className={styles.title}>{title}</div>
                    <p>{content}</p>
                    <p><b>Date:</b>{date}</p>
                </div>
                <button style={{ backgroundColor }}>
                    Know More
            </button>
            </div>
        </div>
    )
}
export default EventCard;