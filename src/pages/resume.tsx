import "../styles/resume.css";
import resume from "../assets/resume.png";

function Resume(props) {
  const boxShadow = props.shadow;

  return (
    <>
      <h2>My Resume</h2>
      <div className="resume-container">
        <MyResume shadow={boxShadow} />
      </div>
    </>
  );
}

const MyResume = (props) => (
  <div className="resume">
    <img src={resume} alt="resume" style={{boxShadow: props.shadow}} />
  </div>
);

export default Resume;
