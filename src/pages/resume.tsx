import "../styles/resume.css";

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
  <div className="resume" style={{boxShadow: props.shadow}}>
    <div className="resume-text">
      <div className="resume-header">
        <b>
          <h2 className="resume-header-name">Joshua Golonka</h2>
        </b>
        <span className="resume-header-contact">
          <p>Columbus, OH, 43201</p>
          <p>+1 (802) 498 7105</p>
          <a href="mailto: jtgolonka@outlook.com" target="_blank">
            jtgolonka@outlook.com{" "}
          </a>
          <a href="https://www.joshuagolonka.com" target="_blank">
            https://joshuagolonka.com
          </a>
        </span>
      </div>
      <div className="resume-education">
        <h3>Education</h3>
        <span className="in-line">
          <p>
            <b>Bachelor of Science: Electrical and Computer Engineering</b>
          </p>
          <p><b>May 2024</b></p>
        </span>
        <span className="in-line">
          <p>
            <b>The Ohio State University</b>
          </p>
          <p>Columbus, OH</p>
        </span>
        <p>
          <ul>
            <li>Dean's List: Spring 2020, Fall 2022</li>
          </ul>
        </p>
      </div>
      <div className="resume-summary">
        <h3>Professional Summary</h3>
        <p>
          Aspiring Software Engineer specializing in front-end web development,
          holding a Bachelor of Science degree in Electrical and Computer
          Engineering, and a minor in Creative Writing. Extensive experience in
          collaborative project design and implementation, with a keen eye for
          detail and excellence in observational, organizational, and
          communication skills. Actively seeking front-end software development
          opportunities starting in May 2024.
        </p>
      </div>
      <div className="resume-technical">
        <h3>Technical Qualifications</h3>
        <p>
          <ul>
            <li>
              <b>Programming languages:</b> HTML, CSS, JavaScript, React, Node,
              Java, C, C++, Python, AWS, and VHDL.
            </li>
            <li>
              <b>Hardware Skills:</b> Constructed circuits, signals and systems,
              continuous and discrete, microcontroller-based systems, electronic
              schematics, filter implementation, frequency domain analysis.
            </li>
            <li>
              <b>Coursework:</b> Software I, II; Fund. of Engineering I, II;
              Intro Digital Logic; Fund. of Digital Sys Design; Eng. Statistics;
              Intro Electronics/Lab; Adv. Digital Design; Eng. Econ, Ethics;
              Comp Arch/Design, Systems and Signals, Intro Cybersecurity,
              Parallel Computing, Capstone Design I, II.
            </li>
          </ul>
        </p>
      </div>
      <div className="resume-projects">
        <h3>Software Engineering Projects</h3>
        <p>
          <ul>
            <li>
              <span className="in-line">
                <p>
                  <b>FGB Theaters Website Development: Full Stack</b>
                </p>
                <p>
                  <b>January 2024 - May 2024</b>
                </p>
              </span>
              <ul>
                <li>
                  <p>
                    <b>Front-End: </b>ReactJS/Vite
                  </p>
                </li>
                <li>
                  <p>
                    <b>Back-End: </b> AWS S3, Lamda, Amplify, and Python.
                  </p>
                </li>
                <li>
                  <p>
                    Implementation of Full Stack capabilities - autonomous
                    synchronization with scheduling software.
                  </p>
                </li>
                <li>
                  <p>
                    AWS S3, Lambda, and Amplify Integration with admin backend
                    for easy access to announcements and movie information.
                  </p>
                </li>
              </ul>
            </li>
            <li>
              <span className="in-line">
                <p>
                  <b>ECE Capstone: Gas Sensor Calibration Chamber</b>
                </p>
                <p>
                  <b>August 2023 - April 2024</b>
                </p>
              </span>
              <ul>
                <li>
                  <p>
                    Team Member for senior capstone project working with
                    Marathon Gas Company to develop a containment chamber for
                    harmful gases.
                  </p>
                </li>
                <li>
                  <p>
                    Tasked with designing and implementing the Human Machine
                    Interface to control the system.
                  </p>
                </li>
              </ul>
            </li>
            <li>
              <span className="in-line">
                <p>
                  <b>Simon Game Design Project</b>
                </p>
                <p>
                  <b>August 2021 - December 2021</b>
                </p>
              </span>
              <ul>
                <li>
                  <p>
                    Programmed DE2 using VHDL, Quartus Prime, and ModelSIM
                    software to develop a working Simon Game with four colored
                    buttons.
                  </p>
                </li>
                <li>
                  <p>
                    Required weekly and thorough lab reports documenting
                    progress made throughout the semester.
                  </p>
                </li>
              </ul>
            </li>
          </ul>
        </p>
      </div>
      <div className="resume-experience">
        <h3>Professional Experience</h3>
        <p>
          <span className="in-line">
            <p>
              <b>
                <i>Website Developer and Manager / Projectionist</i>
              </b>
            </p>
            <p>
              <b>June 2022 - present</b>
            </p>
          </span>
          <p>FGB Theaters, Montpelier, VT</p>
          <ul>
            <li>
              <p>
                Developed and managed the website for a local movie theater.
                Created a new front-end design for the website, and implemented
                a new back-end system for easy access to movie schedules and
                announcements. Actively maintain the website to ensure any
                technical issues are resolved quickly.
              </p>
            </li>
            <li>
              <p>
                Works as a Projectionist when needed. Ensuring all servers were
                communicating properly and systems within the theater had no
                issues for customers.
              </p>
            </li>
          </ul>
        </p>
        <p>
          <span className="in-line">
            <p>
              <b>
                <i>Student Assistant</i>
              </b>
            </p>
            <p>
              <b>February 2020 - April 2024</b>
            </p>
          </span>
          <p>Curl Market, Columbus, OH</p>
          <ul>
            <li>
              <p>
              Worked as a Student Assistant and Cashier within the dining services team provided for student at The Ohio State University.
              </p>
            </li>
          </ul>
        </p>
      </div>
      <div className="resume-interests">
        <h3>Activities and Interests</h3>
        <p>
          <ul>
            <li>
              <span className="in-line">
                <p>
                  <b>The Ohio State of Mind A Cappella</b>
                </p>
                <p>
                  <b>August 2019 - May 2024</b>
                </p>
              </span>
              <ul>
                <li>
                  <p>
                    Member of The Ohio State of Mind A Cappella group: 2024,
                    2023 and 2022 International Competition of Collegiate A
                    Cappella Finalists.
                  </p>
                </li>
              </ul>
            </li>
          </ul>
        </p>
      </div>
    </div>
  </div>
);

export default Resume;
