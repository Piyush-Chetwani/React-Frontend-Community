import React from "react";
import styles from "./PartnerWithUs.module.css";
import PartnerCard from "../../components/PartnerCard/PartnerCard";
import { ReactComponent as SchoolSvg } from "../../assets/icons8_school_building.svg";
import { ReactComponent as CollegeSvg } from "../../assets/icons8_school_house.svg";
import { ReactComponent as OrganizationSvg } from "../../assets/icons8_organization.svg";
import { ReactComponent as SchoolBgSvg } from "../../assets/partnerBg.svg";
import { ReactComponent as CollegeBgSvg } from "../../assets/College.svg";
import { ReactComponent as OrganizationBgSvg } from "../../assets/Organizations.svg";


// const PartnerWithUs = () => {
//   // style={{height:"200px"}}
//   const data = [
//     {
//       heading: "School",
//       description:
//         "Upskill your students and help them become leaders of tomorrow.",
//       symbol: <SchoolSvg />,
//       background: <SchoolBgSvg style={{ height: "200px" }} />,
//       right: "-26px",
//       link: "/partnership",
//     },
//     {
//       heading: "College",
//       description: "Help your students land a high paying internship or job.",
//       symbol: <CollegeSvg />,
//       background: <CollegeBgSvg style={{ height: "200px" }} />,
//       right: "-29px",
//       link: "/partnership",
//     },
//     {
//       heading: "Organization",
//       description:
//         "Give your team the knowledge and experience they need to tackle any problem.",
//       symbol: <OrganizationSvg />,
//       background: <OrganizationBgSvg style={{ height: "200px" }} />,
//       right: "-37px",
//       link: "/partnership",
//     },
//   ];

//   const displayCards = () =>
//     data.map((item) => (
//       <div>
//         <PartnerCard
//           heading={item.heading}
//           description={item.description}
//           symbol={item.symbol}
//           background={item.background}
//           right={item.right}
//           link={item.link}
//         />
//       </div>
//     ));
//   return (
//     <div className={styles.container}>
//       <div className={styles.heading}>Partner with us</div>
//       <div className={styles.description}>
//         Unlock the potential of emerging technologies and move your institutions
//         a step closer to the future.
//       </div>
//       <div className={styles.cardsWrapper}>{displayCards()}</div>
//     </div>
//   );
// };


const {PartnerWithUs} = () => {
  const data = [
    {
      heading: "School",
      description:
        "Upskill your students and help them become leaders of tomorrow.",
      
    }
  ]
}

export default PartnerWithUs;
