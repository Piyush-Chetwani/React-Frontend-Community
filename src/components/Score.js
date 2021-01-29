import React from 'react';
import styles from "./Score.module.css"
import a from "../assets/Layer_2.png"
import b from "../assets/arrow.png"
import c from "../assets/clock.png"
import d from "../assets/Plane_2.png"


function Score() {
  return(
<div style={{paddingTop:"3%"}}>
<p className={styles.text}><center> Assessment Results</center> </p>
<p className={styles.cong}> <center> Congratulations !! </center> </p>
<p className={styles.des}> <center>  You have successfully passed the assessment.</center>  </p>
<div> <Image src={d} style={{marginLeft:"95%", width:"50px"}}/> </div>
<div className={styles.lef}><Image src={a} style={{marginRight:"0"}} className={styles.img}/></div>
<div className={styles.dip} style={{paddingTop:"1%"}}> <p className={styles.assess}> Assessment Details </p>
 <hr style={{borderColor : '#4db054', width:"30%"}}/>
<p className={styles.score}> Score : <span className={styles.gren}> 16/20 </span> <br/> Time Taken: <span className={styles.gren}> 16 min.24 sec </span> <br/> Date: <span className={styles.gren}> Frontend </span> <br/> Date:  <span className={styles.gren}>  12th April 2020 </span> </p>
<a href="#"><div className={styles.but}> <div className={styles.dash} style={{float:"left"}}> DASHBOARD </div><div> <Image src={b} style={{paddingLeft:"6%", paddingTop:"3%"}}/> </div></div> </a> </div>
<div> <Image src={d} style={{width:"50px"}}/> </div>
<div className={styles.inter}> <div style={{float:"left", width:"1%", marginTop:"2%", marginLeft:"4%"}}> <Image src={c}/> </div> <div className={styles.dash} style={{fontSize:"16px", width:"60%", paddingTop:"2%", float:"left"}}> SCHEDULE INTERVIEW </div> <div> <Image src={b} style={{paddingLeft:"6%", paddingTop:"3%"}}/> </div></div>
</div>
);
}

export default Score;
