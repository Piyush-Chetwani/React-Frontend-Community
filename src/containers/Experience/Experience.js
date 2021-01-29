import React from "react";
import styles from "./Experience.module.css";
import Button from "../../components/Button/Button";
import useMediaQuery from "../../utils/useMediaQuery";
import { ReactComponent as Circle} from "../../assets/circleexp.svg";


const Experience = () => {
  const isSmallMobile = useMediaQuery("(max-width: 600px)");
  const isSmallIphone = useMediaQuery("(max-width: 370px)");
  const dataButton = [
    {
      data: "30,000+",
      content: "People Impacted",
    },
    { data: "30+", content: "Events Conducted" },
    { data: "5000+", content: "People in the Community" },
    { data: "10+", content: "Hackathons Supported"},
    { data: "15+", content: "Countries reached" },
  ];

  const dataButtonSmall = [
    {
      data: "30,000+",
      content: "People Impacted",
    },
    { data: "30+", content: "Events Conducted" },
    { data: "5000+", content: "People in the Community" },
    { data: "10+", content: "Hackathons Supported"},
    { data: "15+", content: "Countries reached" },
  ];

  const buttonsDisplay = () =>
    dataButton.map((item, key) => (
      <div className={styles.buttonWrapper}>
        <Button
          className={styles.buttonBody}
          fontSize={"1.2em"}
          padding={"15px 3.5em"}
          bgColor={"#f89920"}
          borderRadius={"10px"}
          textColor={"#ffffff"}
          fontWeight="bold"
          width={"10vw"}
        >
          {item.data}
        </Button>
        <div className={styles.buttonContent}>{item.content}</div>
      </div>
    ));

  const buttonsDisplaySmall = () =>
    dataButtonSmall.map((item, key) => (
      <div className={styles.buttonWrapper}>
        <Button
          className={styles.buttonBody}
          fontSize={"1em"}
          padding={"15px 2.5em"}
          bgColor={"#f89920"}
          borderRadius={"8px"}
          textColor={"#ffffff"}
          fontWeight="bold"
          width={isSmallIphone ? "35vw" : "40vw"}
        >
          {item.data}
        </Button>
        <div className={styles.buttonContent}>{item.content}</div>
      </div>
    ));

  return (
    <div className={styles.container}>
      <div className={styles.headingWrapper}>
        <Circle className={styles.circle} />
        <div className={styles.heading}>Experience so far...</div>
      </div>

      {isSmallMobile ? (
        <div className={styles.buttonContainer}>{buttonsDisplaySmall()}</div>
      ) : (
        <div className={styles.buttonContainer}>{buttonsDisplay()}</div>
      )}
    </div>
  );
};

export default Experience;
