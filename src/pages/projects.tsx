import "../styles/projects.css";
import FGB from "../projects/fgb";
import Capstone from "../projects/capstone";


function Projects(props) {
  const hoverShadow = props.hoverShadow;
  return (
    <>
      <h2>My Projects</h2>
      <div className="projects-container">
        <FGB hoverShadow={hoverShadow} />
        <Capstone hoverShadow={hoverShadow} />
      </div>
    </>
  );
}

export default Projects;
