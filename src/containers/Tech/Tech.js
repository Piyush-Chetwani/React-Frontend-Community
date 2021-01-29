import React from "react";
import { Link } from "react-router-dom";
import styles from "./Tech.module.css";
import Image from '@bit/zubi-io.core.image';
const a = "https://zubi.sgp1.cdn.digitaloceanspaces.com/Z.Community/assets/logo.png";
const b = "https://zubi.sgp1.cdn.digitaloceanspaces.com/Z.Community/assets/tech.svg";
const c = "https://zubi.sgp1.cdn.digitaloceanspaces.com/Z.Community/assets/w1.svg";
const d = "https://zubi.sgp1.cdn.digitaloceanspaces.com/Z.Community/assets/w2.svg";
const e = "https://zubi.sgp1.cdn.digitaloceanspaces.com/Z.Community/assets/w3.svg";
const f = "https://zubi.sgp1.cdn.digitaloceanspaces.com/Z.Community/assets/w4.svg";
const g = "https://zubi.sgp1.cdn.digitaloceanspaces.com/Z.Community/assets/w5.svg";
const h = "https://zubi.sgp1.cdn.digitaloceanspaces.com/Z.Community/assets/w6.svg";
const i = "https://zubi.sgp1.cdn.digitaloceanspaces.com/Z.Community/assets/i1.svg";
const j = "https://zubi.sgp1.cdn.digitaloceanspaces.com/Z.Community/assets/i2.svg";
const k = "https://zubi.sgp1.cdn.digitaloceanspaces.com/Z.Community/assets/i3.svg";
const l = "https://zubi.sgp1.cdn.digitaloceanspaces.com/Z.Community/assets/Group29.svg";
const m = "https://zubi.sgp1.cdn.digitaloceanspaces.com/Z.Community/assets/a1.svg";
const n = "https://zubi.sgp1.cdn.digitaloceanspaces.com/Z.Community/assets/a2.svg";
const o = "https://zubi.sgp1.cdn.digitaloceanspaces.com/Z.Community/assets/a3.svg";
const p = "https://zubi.sgp1.cdn.digitaloceanspaces.com/Z.Community/assets/a4.svg";
const q = "https://zubi.sgp1.cdn.digitaloceanspaces.com/Z.Community/assets/a5.svg";

function Tech() {
  return (
    <div>
    <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap"
          rel="stylesheet"
           />
      <div className={styles.a}>
        <div>
          <a href="/"> <Image src={a} /> </a>{" "}
        </div>
        <div>
          {" "}
          <Link to="/emergetech">
            <input type="submit" value="Apply Now" className={styles.b} />{" "}
          </Link>{" "}
        </div>
      </div>
      <br/> <br/><br/> <br/><br/>
      <div className={styles.influence}>
      <p className={styles.wasz} style={{ color: "#f89920" }}>
        EmergeTech
        <br />
        Influencer
      </p>
      </div>
      <div className={styles.hero}>
        <div className={styles.top}>

        </div>
        <div className={styles.box}>
          <div className={styles.vis}>
            <p className={styles.wasz} style={{ color: "#f89920" }}>
              {" "}
              EmergeTech Influencer{" "}
            </p>
          </div>
          <p className={styles.des}>
            Do you have the zeal to learn and lead others into the future of
            technology?
            <br />
            Buckle up for a journey of becoming leaders and steer the Emerging
            Technology wheel towards revolution.
            <br /> <br />
            <b>Hop in, we are looking for you!</b>{" "}
          </p>
          <br />
          <Link to="/emergetech">
          <button className={styles.cc}>
            Apply Now
          </button>
          </Link>
          <div></div>
        </div>
        <div className={styles.box1}>
          {" "}
          <Image src={b} className={styles.im} />{" "}
        </div>
      </div>
      <p className={styles.wwyd}>
        <center> Perks & Opportunities </center>{" "}
      </p>
      <center>
      <div className={styles.d}>
        <div className={styles.crd}>
          <center>
            <Image src={c} />
            <p
              className={styles.wsz}
              style={{
                fontSize: "18px",
                fontWeight: "700",
                lineHeight: "1.52",
              }}
            >
              {" "}
              Grow with us{" "}
            </p>
            <p
              className={styles.wss}
              style={{
                fontSize: "16px",
                fontWeight: "400",
                lineHeight: "1.52",
              }}
            >
              {" "}
              Get a chance to explore and learn from exclusive Zubi Courses on
              new-age technologies.{" "}
            </p>
          </center>
        </div>

        <div className={styles.crd}>
          <center>
            <Image src={d} />
            <p
              className={styles.wsz}
              style={{
                fontSize: "18px",
                fontWeight: "700",
                lineHeight: "1.52",
              }}
            >
              {" "}
              Forge a Network{" "}
            </p>
            <p
              className={styles.wss}
              style={{
                fontSize: "15px",
                fontWeight: "400",
                lineHeight: "1.52",
              }}
            >
              {" "}
              Engage, Organize, and Speak at events around the globe and network
              with top industry leaders, organizations, and peers.{" "}
            </p>
          </center>
        </div>

        <div className={styles.crd}>
          <center>
            <Image src={e} />
            <p
              className={styles.wsz}
              style={{
                fontSize: "18px",
                fontWeight: "700",
                lineHeight: "1.52",
              }}
            >
              {" "}
              Amplify your experience{" "}
            </p>
            <p
              className={styles.wss}
              style={{
                fontSize: "16px",
                fontWeight: "400",
                lineHeight: "1.52",
              }}
            >
              {" "}
              Be a marvellous influencer, get a chance to intern with Zubi, and
              add to your experience.{" "}
            </p>
          </center>
        </div>

        <div className={styles.crd}>
          <center>
            <Image src={f} />
            <p
              className={styles.wsz}
              style={{
                fontSize: "18px",
                fontWeight: "700",
                lineHeight: "1.52",
              }}
            >
              {" "}
              Get Proof of knowledge{" "}
            </p>
            <p
              className={styles.wss}
              style={{
                fontSize: "16px",
                fontWeight: "400",
                lineHeight: "1.52",
              }}
            >
              {" "}
              Earn a Letter of appreciation for your work and get exclusive zubi
              swags. Don’t hesitate to show off.{" "}
            </p>
          </center>
        </div>

        <div className={styles.crd}>
          <center>
            <Image src={g} />
            <p
              className={styles.wsz}
              style={{
                fontSize: "18px",
                fontWeight: "700",
                lineHeight: "1.52",
              }}
            >
              {" "}
              Not Enough?{" "}
            </p>
            <p
              className={styles.wss}
              style={{
                fontSize: "16px",
                fontWeight: "400",
                lineHeight: "1.52",
              }}
            >
              {" "}
              Develop your personality and knowledge through multiple Zubi
              initiatives across the globe.{" "}
            </p>
          </center>
        </div>
      </div>
      </center>
      <center>
        {" "}
        <p style={{ fontWeight: "700" }} className={styles.cls}>
          {" "}
          Let’s go on a EmergeTech mission together!{" "}
        </p> <br/>
        <div className={styles.roadmap}>
          <p className={styles.wwyd}> What will you do? </p>
          <div className={styles.pi}>
            {" "}
            <Image src={l} />{" "}
          </div>
          <div className={styles.ai}>
            <div>
              {" "}
              <Image src={m} />{" "}
            </div>
            <div className={styles.write}>
              <b> Assemble an army </b>
            </div>
            <div className={styles.write}>
              {" "}
              Bring together a family of technology enthusiasts who can help
              each other learn and grow.{" "}
            </div>

            <div>
              {" "}
              <Image src={n} style={{ marginTop: "10%" }} />{" "}
            </div>
            <div className={styles.write}>
              <b> Prepare it for battle </b>
            </div>
            <div className={styles.write}>
              Organize insightful events like workshops, meetups, hackathons,
              and more in your community.{" "}
            </div>

            <div>
              {" "}
              <Image src={o} style={{ marginTop: "10%" }} />{" "}
            </div>
            <div className={styles.write}>
              <b> Move beyond the conventional </b>
            </div>
            <div className={styles.write}>
              {" "}
              Think of innovative ways to grow along with your friends. We
              always have your back in case you fall.
            </div>

            <div>
              {" "}
              <Image src={p} style={{ marginTop: "10%" }} />{" "}
            </div>
            <div className={styles.write}>
              <b> Strengthen your kingdom </b>
            </div>
            <div className={styles.write}>
              {" "}
              Reach out to communities and organizations with similar vision and
              do events in association.{" "}
            </div>

            <div>
              {" "}
              <Image src={q} style={{ marginTop: "10%" }} />{" "}
            </div>
            <div className={styles.write}>
              <b> Prepare the new warriors </b>
            </div>
            <div className={styles.write}>
              {" "}
              Become leaders and help others in their journey towards the
              emerging technology future.{" "}
            </div>
          </div>
        </div> <br/>
        <p className={styles.wwyd}> Who can apply? </p>
      </center>

      <div className={styles.hero}>
        <div className={styles.box}>
          <p
            style={{
              fontStyle: "Roboto",
              fontSize: "17px",
              lineHeight: "1.32",
            }}
          >
            <ul className={styles.nob}>
              <li>
                People who have a vision for the future with a passion to learn
                and help others.
              </li>
              <br />
              <li>
                A drive to contribute to the community and succeed in life is
                necessary.
              </li>{" "}
              <br />
              <li>
                Already being into the emerging tech space is not must, although
                a plus point.
              </li>{" "}
              <br />{" "}
            </ul>
            <ul className={styles.uli}>
              <li>
                <b>
                  Join us to be a part of Zubi Family, and start your journey
                  towards the future!
                </b>
                <br />
                <br />{" "}
              </li>
            </ul>
            <Link to="/emergetech">
              <input type="submit" value="Apply Now" className={styles.cc} />{" "}
            </Link>{" "}
          </p>
        </div>
        <div className={styles.box1}>
          {" "}
          <Image src={h} className={styles.im} />{" "}
        </div>
      </div>
    </div>
  );
}

export default Tech;
