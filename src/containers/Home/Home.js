import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Home.module.css";
import Events from "../Events/Event";
import Test from "../Test/Event"
import Image from '@bit/zubi-io.core.image';
import Experience from "../Experience/Experience";
import Partners from "../Partners";
// import PartnershipForm from "../PartnerWithUs/PartnershipForm";
// import PartnerWithUs from "../PartnerWithUs/PartnerWithUs";
const emailIcon = "https://zubi.sgp1.cdn.digitaloceanspaces.com/Z.Community/assets/email.svg";
const rightArrowS = "https://zubi.sgp1.cdn.digitaloceanspaces.com/Z.Community/assets/right_arrow.svg";
const subscribeIcon = "https://zubi.sgp1.cdn.digitaloceanspaces.com/Z.Community/assets/subscribe.svg";

const why1 = "https://zubi.sgp1.cdn.digitaloceanspaces.com/Z.Community/assets/why1.svg";
const why2 = "https://zubi.sgp1.cdn.digitaloceanspaces.com/Z.Community/assets/why2.svg";
const why3 = "https://zubi.sgp1.cdn.digitaloceanspaces.com/Z.Community/assets/why3.svg";
const why4 = "https://zubi.sgp1.cdn.digitaloceanspaces.com/Z.Community/assets/why4.svg";
const heroPhoto = "https://zubi.sgp1.cdn.digitaloceanspaces.com/Z.Community/assets/heroPhoto.jpg";
const heroPic = "https://zubi.sgp1.cdn.digitaloceanspaces.com/Z.Community/assets/heroPic.jpg";
// import Navbar from "../Navbar/Navbar";

var Airtable = require('airtable');
var base = new Airtable({ apiKey: 'keyoTMTdFmvRySSnm' }).base('appoTINaKhS6Lhn80');
// import a from "https://zubi.sgp1.cdn.digitaloceanspaces.com/Z.Community/assets/logo.png"

const b =
  "https://zubi.sgp1.cdn.digitaloceanspaces.com/Z.Community/assets/i1.png";
const c =
  "https://zubi.sgp1.cdn.digitaloceanspaces.com/Z.Community/assets/i2.png";
const d =
  "https://zubi.sgp1.cdn.digitaloceanspaces.com/Z.Community/assets/i3.png";
const e =
  "https://zubi.sgp1.cdn.digitaloceanspaces.com/Z.Community/assets/i4.png";
// const f = "https://zubi.sgp1.cdn.digitaloceanspaces.com/Z.Community/assets/i5.png"
const g =
  "https://zubi.sgp1.cdn.digitaloceanspaces.com/Z.Community/assets/i6.png";
// const h = "https://zubi.sgp1.cdn.digitaloceanspaces.com/Z.Community/assets/lpage.png"
// const i = "https://zubi.sgp1.cdn.digitaloceanspaces.com/Z.Community/assets/programs.png"
const j =
  "https://zubi.sgp1.cdn.digitaloceanspaces.com/Z.Community/assets/s3.svg";
const k =
  "https://zubi.sgp1.cdn.digitaloceanspaces.com/Z.Community/assets/f2.svg";
const l =
  "https://zubi.sgp1.cdn.digitaloceanspaces.com/Z.Community/assets/f3.svg";
const m =
  "https://zubi.sgp1.cdn.digitaloceanspaces.com/Z.Community/assets/f4.svg";
// const n = "https://zubi.sgp1.cdn.digitaloceanspaces.com/Z.Community/assets/Capture.PNG"
// const o = "https://zubi.sgp1.cdn.digitaloceanspaces.com/Z.Community/assets/left.png"
// const p = "https://zubi.sgp1.cdn.digitaloceanspaces.com/Z.Community/assets/right.png"
const q =
  "https://zubi.sgp1.cdn.digitaloceanspaces.com/Z.Community/assets/btn.svg";
const r =
  "https://zubi.sgp1.cdn.digitaloceanspaces.com/Z.Community/assets/w7.png";

function Home() {
  const [email, setEmail] = useState('');

  const submitHandler = () => {
    base('Subscribers').create([
      {
        "fields": {
          "Email": email
        }
      }
    ],  {typecast: true}, function(err, records) {
      if (err) {
        console.error(err);
        return;
      }
      else {
        setEmail('')
        alert("Thank you for subscribing.")
      }
    });
  }
  return (
    <div className={styles.home}>

      <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap"
            rel="stylesheet"
             />
      <div className={styles.hero}>
        <div className={styles.vis}>
          <p className={styles.wss_welcome}> Welcome To </p>
          <p className={styles.wss_zCommunity}> Z.Community </p>
          <p className={styles.description}>
            {" "}
            Be a part of Zubi Community and never miss any update on our
            exclusive events, initiatives, and opportunities.{" "}
          </p>
          <div className={styles.cnt}>
            <form>
              <Image src={emailIcon} alt="" />
              <label>
                <input
                  type="text"
                  name="name"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}

                  placeholder="Enter your Email"
                  className={styles.email}
                />
              </label>
              <a href="#">
                <input
                  type="button"
                  onClick={submitHandler}
                  value="Join Now"
                  className={`${styles.sbn} ${styles.joinNow}`}
                />{" "}
              </a>
            </form>
          </div>
        </div>
        <div className={styles.st}>

        <Image src={heroPhoto} style={{ width: "100%", position:"relative",  zIndex:"0", marginTop:"0"}} className={styles.heroPhoto}/>
        <Image src={heroPic} style={{ width: "100%", position:"relative",  zIndex:"0", marginTop:"0"}} className={styles.heroPic} />

        </div>
      </div>
      <Experience/>
      <section id="event"> </section> <br />
      <div className={styles.eve}>
        <hr style={{ border: "1px solid #db4437", width: "20%" }} />
        <span> Events </span>
        <hr style={{ border: "1px solid #db4437", width: "20%" }} />
      </div>
      <Events />
      <section id="prog"> </section>
      {/* <div> <Letcon /> </div> */}
      <div className={styles.prog}>
        <hr style={{ border: "1px solid #2ba4dc", width: "15%" }} />
        <span> Our Programs</span>
        <hr style={{ border: "1px solid #2ba4dc", width: "15%" }} />
      </div>
      <br />{" "}
      <div className={styles.fl}>
        <center>
          <div className={styles.our}>
          <p className={styles.eme}> EmergeTech Student Influencers </p>
          <p className={styles.des} style={{ textAlign: "start" }}>
            {" "}
            Become a Student Influencer and lead the Emerging Tech Revolution
            across the globe.
            <br />
            <br />
            Apply now and start your journey.{" "}
          </p>
          <br />
          <Link to="/tech" className={styles.applyNow}>
            <div>
              <span className={styles.btn_txt}>Know More</span>
              <img src={rightArrowS} alt="" />
            </div>
          </Link>{" "}
          <br />{" "}
          <p className={styles.des} style={{ textAlign: "start" }}>
            {" "}
            <br />
            Applications are open {" "}
            </p>
          </div>{" "}
        </center>
        {/* <div className={styles.our}>
          <p className={styles.eme}> Community Mentors </p>
          <p className={styles.des} style={{ textAlign: "start" }}>
            {" "}
            Mentor others on their journey and empower them towards their dreams.
            <br />
            <br />
            Apply now and forge the next generation of leaders.{" "}
          </p>
          <br />
          <a href="https://forms.gle/arcpCLacr2SroPpbA" target="_blank" rel="noopener noreferrer" className={styles.applyNow}>
            <div>
              <span className={styles.btn_txt}>Know More</span>
              <img src={rightArrowS} alt="" />
            </div>
          </a>{" "}
          <br />{" "}
          <p className={styles.des} style={{ textAlign: "start" }}>
            {" "}
            <br />
            Applications are open {" "}
          </p>
        </div>{" "} */}
      </div>
      {/* <div className={styles.com}>
        {" "}
        <center> More Coming Soon ! </center>{" "}
      </div>{" "} */}
      <br /> <br />
      <section id="res"> </section>
      <div className={styles.whyus}>
        <hr
          style={{
            border: "1px solid #45b14f",
            width: "20%",
          }}
        />
        <span>Why Us? </span>{" "}
        <hr
          style={{
            border: "1px solid #45b14f",
            width: "20%",
          }}
        />
      </div>
      <div className={styles.w}>
        <Image src={why1} alt="" style={{marginBottom:"5px"}}/>
        <Image src={why2} alt="" style={{marginBottom:"5px"}} />
        <Image src={why3} alt="" style={{marginBottom:"5px"}} />
        <Image src={why4} alt="" style={{marginBottom:"5px"}} />
      </div>
      <div><Test />
      </div>
      <div className={styles.part}> Our Partners</div>
      <center>
      <div style={{width:1000}}>
        <Partners /> 
      </div>
      </center>
      <br /> <br />
      <div className={styles.sub}>
        {" "}
        <div className={styles.container}>
          <p className={styles.wasss}>Subscribe for a weekly meal now.</p>
          <p className={styles.des}>
            Start your day with an Emergetech Breakfast.
            <br /> Made using finely chopped scholarships and hand-picked news,
            flavoured with freshly prepared events and cooked finely for days by
            our expert emegetech chefs.
          </p>
          <div className={styles.cnt} style={{ marginTop: "40px" }}>
            <form>
              <label>
                <input
                  type="text"
                  name="name"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your Email"
                  className={styles.email}
                />
              </label>
              <a href="#" className={styles.subs}>
                <button type="button" onClick={submitHandler} className={styles.sbn}>
                  <Image src={subscribeIcon} />
                </button>
              </a>
            </form>
          </div>{" "}
        </div>{" "}
      </div>
      <section id="foot"> </section>
      <br></br>
      <br></br>
      <br></br>
      <div> 
        {/* <center>
        <h1>Partner With Us</h1>
        </center> */}
      </div>
    </div>
  );
}

export default Home;
