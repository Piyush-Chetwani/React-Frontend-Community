import React, { useState } from "react";
import styles from "./Navbar.module.css";
import useMediaQuery from "../../UseMediaQuery";
import { HashLink as Link } from 'react-router-hash-link';
import { NavbarContent } from "../../utils/content";
import Image from '@bit/zubi-io.core.image';
// import {IconContent} from "C:\Users\Admin\Downloads\Zubi.io community\Z.community\src\utils\Icon.js";
const logo = "https://zubi.sgp1.cdn.digitaloceanspaces.com/Z.Community/assets/logo.png";

function Navbar(props) {
  const [isNavOpen, setNavOpen] = useState(false);
  const [clicked, setClicked] = useState(false);
  const isMobile = useMediaQuery("(max-width: 990px)");
  const renderDropDown = (menuList) => (
    isMobile ?
      <>
        {menuList.map(item => (
          <div onClick={() => window.open(item.link, '_blank')}>{item.title}</div>
        ))}
      </> :
      <div className={styles.dropdown_container}>
        {menuList.map(item => (
          <div
            className={styles.dropdown_item}
            onClick={() => window.open(item.link, '_blank')}
          >
            <span>{item.title}</span>
            <span>{item.icon}</span>
          </div>
        ))}
      </div>

  )

  const renderLinks = NavbarContent.map(item => (
    <Link to={item.link}>{item.menu ?
      <div
        className={styles.dropdown_parent_container}
        onMouseEnter={() => setClicked(true)}
        onMouseLeave={() => setClicked(false)}
        onClick={() => setClicked(!clicked)}
      >
        <span className="dropdownHeader">{item.title}</span>
        {(clicked || isNavOpen) && renderDropDown(item.menu)}
      </div> :
      <div>{item.title}</div>}
    </Link>
  ))

  // const renderIcons = IconsContent.map(item => (
  //   <Link to={item.link}>{item.menu ?
  //     <div
  //       className={styles.dropdown_parent_container}
  //       onMouseEnter={() => setClicked(true)}
  //       onMouseLeave={() => setClicked(false)}
  //       onClick={() => setClicked(!clicked)}
  //     >
  //       <span className="dropdownHeader">{item.icon}</span>
  //       {(clicked || isNavOpen) && renderDropDown(item.menu)}
  //     </div> :
  //     <div>{item.title}</div>}
  //   </Link>
  // ))


  const toggleNav = () => {
    setNavOpen(!isNavOpen);
  };
  return (
    <nav className={styles.Nav}>
      {(!isMobile || isNavOpen) && (
        <>
          <div className={styles.logoContainer}>
            <Image src={logo} alt="logo" className={styles.logos} />
          </div>
          <div className={styles.routes} onClick={toggleNav}>
            <Link to="/">
              <Image src={logo} alt="logo" className={styles.logo} style={{ paddingLeft: "0%", paddingRight: "40px" }} />
            </Link>
            {renderLinks}
          </div>
        </>
      )}
      {isMobile ? (
        <div className={styles.left}>
          <div className={styles.logoContainer}>
            <Image src={logo} alt="logo" className={styles.logos} />
          </div>
          <button
            className={`${styles.btn} ${isNavOpen ? styles.open : ""}`}
            onClick={toggleNav}
            type="button"
            aria-label="open menu"
          />
        </div>
      ) : (
          ""
        )}
    </nav>
  );
}

export default Navbar;
