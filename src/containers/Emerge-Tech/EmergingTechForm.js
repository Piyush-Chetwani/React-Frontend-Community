import React, { useState, useRef } from "react";

import Styles from "./EmergingTechForm.module.scss";
import { ReactComponent as HeaderBoxSVG } from "../../assets/g12.svg";

import Input from "../Input/Input";
import Textarea from "../../components/Textarea/Textarea";
import Checkbox from "../../components/Checkbox/Checkbox";
import RadioBtn from "../../components/RadioBtn/RadioBtn";

import { emailValidation, phoneValidation } from "../../utils/validations";
import { techArray, universityStudent } from "./mutipleOptions";
var Airtable = require('airtable');
var base = new Airtable({apiKey: 'keyoTMTdFmvRySSnm'}).base('appoTINaKhS6Lhn80');

const EmergingTech = (props) => {
  const [formState, setFormState] = useState({
    email: "",
    name: "",
    contact: "",
    city: "",
    uniStudent: "Yes",
    university: "",
    enrolledCourse: "",
    gradYear: "",
    linkedin: "",
    github: "",
    interestedTech: [],
    forteTech: [],
    experience: "",
    perfectForRole: "",
    anythingElse: ""
  });
  const [showNameWarning, setShowNameWarning] = useState(false);
  const [showContactWarning, setShowContactWarning] = useState(false);
  const [showEmailWarning, setShowEmailWarning] = useState(false);
  const [formFilled, setFormFilled] = useState(false);
  const [showCityWarning, setShowCityWarning] = useState(false);
  const [showTechWarning, setShowTechWarning] = useState(false);
  const [showForteWarning, setShowForteWarning] = useState(false);

  const emailRef = useRef(null);
  const forteRef = useRef(null);
  const techRef = useRef(null);
  const contactRef = useRef(null);

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "name" && value.length > 0) setShowNameWarning(false);
    if (name === "email" && value.length > 0) setShowEmailWarning(false);
    if (name === "contact" && value.length > 0) setShowContactWarning(false);
    if (name === "city" && value.length > 0) setShowCityWarning(false);
    setFormState((formState) => ({ ...formState, [name]: value }));
  };

  const scrollToRef = (ref) => {
    window.scrollTo(0, ref.current.offsetTop);
  };

  const checkStateArray = (index, arrayType) => {
    let arr = null;
    if (arrayType === "interestedTech") {
      arr = [...formState.interestedTech];
    } else if (arrayType === "forteTech") {
      arr = [...formState.forteTech];
    }
    if (arr.includes(techArray[index])) return true;
    else return false;
  };

  const togglStateArray = (event, arrayType) => {
    let arr = null;
    if (arrayType === "interestedTech") {
      arr = [...formState.interestedTech];
    } else if (arrayType === "forteTech") {
      arr = [...formState.forteTech];
    }
    if (arr.includes(event.target.name)) {
      // console.log(event.target.name);
      const newArr = arr.filter((tech, i) => tech !== event.target.name);
      setFormState((formState) => ({ ...formState, [arrayType]: [...newArr] }));
    } else {
      const newArr = [...arr, event.target.name];
      setFormState((formState) => ({ ...formState, [arrayType]: [...newArr] }));
    }
  };

  const checkRadioBtn = (index) => {
    if (formState.uniStudent === universityStudent[index]) return true;
    else return false;
  };

  const handleInvalid = () => {
    // console.log(e);
    const { email, contact, name, city, forteTech, interestedTech } = formState;
    if (name.length === 0) setShowNameWarning(true);
    if (email.length === 0) setShowEmailWarning(true);
    if (contact.length === 0) setShowContactWarning(true);
    if (city.length === 0) setShowCityWarning(true);
    if (forteTech.length === 0) setShowForteWarning(true);
    if (interestedTech.length === 0) setShowTechWarning(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, contact, forteTech, interestedTech } = formState;
    if (!emailValidation(email)) {
      scrollToRef(emailRef);
    } else if (!phoneValidation(contact)) {
      scrollToRef(contactRef);
    } else if (interestedTech.length === 0) {
      alert('"Which Emerging Technologies are you interested in?" can not be left blank')
    } else if (forteTech.length === 0) {
      alert('"Which technologies among these is/are your forte?" can not be left blank')
    }
      else {
      console.log(formState.interestedTech);
      base('Responses').create([
        {
          "fields": {
            "Name": formState.name,
            "Email": formState.email,
            "Contact Number": formState.contact,
            "City": formState.city,
            "Are you a university student?": formState.uniStudent,
            "University": formState.university,
            "Enrolled Course": formState.enrolledCourse,
            "Year of completion": formState.gradYear,
            "Which Emerging Technologies are you interested in?": formState.interestedTech,
            "Which technologies among these is/are your forte?": formState.forteTech,
            "Linkedin Profile": formState.linkedin,
            "Github Profile": formState.github,
            "Why do you think you are perfect for this role?": formState.perfectForRole,
            "Do you have any prior experience leading/participating in a community? If yes, please elaborate.": formState.experience,
            "Anything else which you would like to let us know?": formState.anythingElse
          }
        }
      ],  {typecast: true}, function(err, records) {
        if (err) {
          console.error(err);
          return;
        }
        else {
          setFormFilled(true)
        }
      });
    }
  };

  return (

    <div className={Styles.page}>
    <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap"
          rel="stylesheet"
           />
      <div className={Styles.headerBox}>
        <div className={Styles.heading}>
          <h2 className={Styles.heading__primary}>EmergeTech Influencers</h2>
          <p className={Styles.description}>
            Apply Now and Start your journey !
          </p>
        </div>
        <div className={Styles.svg_box}>
          <HeaderBoxSVG className={Styles.svg} />
        </div>
      </div>
      {!formFilled ? <form onSubmit={handleSubmit} onInvalid={handleInvalid}>
        <div className={Styles.formGroup}>
          <Input
            type="text"
            placeholder="Enter Full Name"
            id="name"
            name="name"
            label="Name"
            handleChange={handleChange}
            value={formState.name}
            isRequired
            showWarning={showNameWarning}
          />
          <Input
            type="email"
            placeholder="Ex@Ex.com"
            id="email"
            name="email"
            label="Email"
            handleChange={handleChange}
            footNote="We'll never share your email with anyone else."
            value={formState.email}
            isRequired
            refProp={emailRef}
            showWarning={showEmailWarning}
          />
          <Input
            type="text"
            placeholder="Enter Contact Number"
            id="contact"
            name="contact"
            label="Contact Number"
            handleChange={handleChange}
            value={formState.contact}
            isRequired
            refProp={contactRef}
            showWarning={showContactWarning}
          />
          <Input
            type="text"
            placeholder="Enter City"
            id="city"
            name="city"
            label="City"
            handleChange={handleChange}
            value={formState.city}
            isRequired
            showWarning={showCityWarning}
          />
        </div>
        <div className={Styles.formGroup}>
          <div className={Styles.questionRadioBtn}>
            <p className={Styles.question}>Are you a university student? <span style={{color:"#db4437"}}> * </span></p>
            {universityStudent.map((Ans, index) => (
              <RadioBtn
                label={Ans}
                key={Ans}
                name="uniStudent"
                value={Ans}
                checked={checkRadioBtn(index)}
                toggleCheck={handleChange}
                isRequired
              />
            ))}
          </div>
          <Input
            type="text"
            placeholder="e.g IIT Bombay"
            id="university"
            name="university"
            label="University"
            handleChange={handleChange}
            value={formState.university}
          />
          <Input
            type="text"
            placeholder="Enter your course name e.g BTech CSE"
            id="enrolledCourse"
            name="enrolledCourse"
            label="Enrolled Course"
            handleChange={handleChange}
            value={formState.enrolledCourse}
          />
          <Input
            type="text"
            placeholder="Enter year of graduation"
            id="gradYear"
            name="gradYear"
            label="Year of completion"
            handleChange={handleChange}
            value={formState.gradYear}
          />
        </div>
        <div className={Styles.formGroup}>
          <div className={Styles.questionCheckBox}>
            <p className={Styles.question} isRequired>
              Which Emerging Technologies are you interested in?<span style={{color:"#db4437"}}> * </span>
            </p>
            {techArray.map((tech, index) => (
              <Checkbox
                key={`interested-${index}`}
                label={tech}
                onInvalid={handleInvalid}
                checked={checkStateArray(index, "interestedTech")}
                isRequired
                refProp={techRef}
                showWarning={showTechWarning}
                toggleCheck={(event) =>
                  togglStateArray(event, "interestedTech")

                }
              />
            ))}
            <div style={{float:"left", marginRight:"3%"}}>If in other technology, then specify: </div> <input/>
          </div>
          <section id="id"> <div className={Styles.questionCheckBox}>
            <p className={Styles.question}>
              Which technologies among these is/are your forte?<span style={{color:"#db4437"}}> * </span>
            </p>
            {techArray.map((tech, index) => (
              <Checkbox
                key={`Forte-${index}`}
                label={tech}
                checked={checkStateArray(index, "forteTech")}
                toggleCheck={(event) => togglStateArray(event, "forteTech")}
                isRequired
                refProp={forteRef}
                showWarning={showForteWarning}
                handleChange={handleChange}
              />
            ))}
            <div style={{float:"left", marginRight:"3%"}}>If other technology, then specify: </div> <input/>
          </div>
          </section>
        </div>

        <div className={Styles.formGroup}>
          <Input
            type="text"
            placeholder="Enter link"
            id="linkedin"
            name="linkedin"
            label="Linkedin Profile"
            handleChange={handleChange}
            value={formState.linkedin}
            isRequired
          />
          <Input
            type="text"
            placeholder="Enter link"
            id="github"
            name="github"
            label="Github Profile"
            handleChange={handleChange}
            value={formState.github}
            isRequired
          />
          Do you have any prior experience leading/participating in a community? If yes, please elaborate.(Less than 100 words) <span style={{color:"#db4437"}}> * </span>
          <Textarea
            id="experience"
            name="experience"
            label=""
            handleChange={handleChange}
            value={formState.experience}
            rows={7}
            isRequired
          />
          Why do you think you are perfect for this role?(Less than 100 words) <span style={{color:"#db4437"}}> * </span>
          <Textarea
            id="perfectForRole"
            name="perfectForRole"
            label=""
            handleChange={handleChange}
            value={formState.perfectForRole}
            rows={7}
            isRequired

          />
          Anything else which you would like to let us know?
          <Textarea
            id="anythingElse"
            name="anythingElse"
            label=""
            handleChange={handleChange}
            value={formState.anythingElse}
            rows={7}
          />
        </div>
        <center> <button className={Styles.btn}>Submit</button> </center>
      </form>: <>Your response has been successfully received. Thank you.</>}
    </div>
  );
};

export default EmergingTech;
