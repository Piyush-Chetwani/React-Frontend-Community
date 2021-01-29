import React, { useState } from "react";
import styles from "./Footer.module.css";

import { FooterData } from "../../utils/content";
import Button from "../../components/Button/Button";
import useMediaQuery from "../../utils/useMediaQuery";
// import BackDrop from "../../components/Backdrop/Backdrop";
// import LoginModal from "../RegisterModal/RegisterModal";
import Image from "../../components/Image/Image";
const facebook = "https://zubi.sgp1.cdn.digitaloceanspaces.com/Zubi-Website/assets/facebook.svg";
const telegram = "https://zubi.sgp1.cdn.digitaloceanspaces.com/Zubi-Website/assets/telegram.svg";
const instagram = "https://zubi.sgp1.cdn.digitaloceanspaces.com/Zubi-Website/assets/instagram.svg";
const linkedin = "https://zubi.sgp1.cdn.digitaloceanspaces.com/Zubi-Website/assets/linkedin.svg";
const twitter = "https://zubi.sgp1.cdn.digitaloceanspaces.com/Zubi-Website/assets/twitter.svg";
const youtube = "https://zubi.sgp1.cdn.digitaloceanspaces.com/Zubi-Website/assets/youtube.svg";
const discord = "";
const logo = "https://zubi.sgp1.cdn.digitaloceanspaces.com/Zubi-Website/assets/logo-bright.svg";

function Footer() {
  const isSmallMobile = useMediaQuery("(max-width: 450px)");
  const [clicked, setClicked] = useState(false);
  const alter = () => {
    setClicked(false);
  };

  const company = FooterData.Company.map((el) => (
    <li>
      <a href={el?.link} target={el?.target}>{el.name}</a>
    </li>
  ));
  const Products = FooterData.Products.map((el) => (
    <li>
      <a href={el?.link} target="_blank" rel="noopener noreferrer">
        {el.name}
      </a>
    </li>
  ));
  const FollowUs = FooterData.FollowUs.map((el) => <li>{el}</li>);
  FooterData.policies = isSmallMobile
    ? FooterData.policies.slice(2, 6)
    : FooterData.policies;
  const policies = FooterData.policies.map((el) => {
    let logo;
    if (el.name === "facebook") logo = facebook;
    if (el.name === "telegram") logo = telegram;
    if (el.name === "instagram") logo = instagram;
    if (el.name === "linkedin") logo = linkedin;
    if (el.name === "twitter") logo = twitter;
    if (el.name === "youtube") logo = youtube;
    if (el.name === "discord") logo = discord;
     return (
      <div>
        <a href={el.link} target="_blank" rel="noopener noreferrer">
          <Image src={logo} alt={el} />
        </a>
      </div>
    );
  });

  return (
    <div className={styles.FooterContainer}>
      <div className={styles.footer}>
        <div className={styles.F1}>
          <a href="/#Home">
            <Image src={logo} alt="logo" />
          </a>
          <h2>Zubi.io</h2>
        </div>
        <div className={styles.functions}>
          <div className={styles.F2}>
            <ul>{company}</ul>
          </div>
          <div className={styles.F3}>
            <ul>{Products}</ul>
          </div>
          <div className={styles.F4}>
            <ul>{FollowUs}</ul>
          </div>
        </div>
      </div>
      <div className={styles.base}>
        <div className={styles.companyName}>{FooterData.name}</div>
        <div className={styles.policies}>{policies}</div>
      </div>
      {/* {clicked && <BackDrop alter={alter} />} */}
      {/* {clicked && <LoginModal alter={alter} />} */}
    </div>
  );
}

export default Footer;
