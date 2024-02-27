import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import tasklist from "../../Assets/Projects/task-list.png";
import gamegueser from "../../Assets/Projects/game-gueser.png";
import weather from "../../Assets/Projects/oras.png";
import dovilescv from "../../Assets/Projects/doviles-cv.png";
import kms from "../../Assets/Projects/kms-skaiciuokle.png";
import tasks from "../../Assets/Projects/task.list.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tasklist}
              isBlog={false}
              title="To Do task"
              ghLink="https://github.com/Jeshki/to-do-task"
              demoLink="https://todo-task-weld.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weather}
              isBlog={false}
              title="Weather"
              ghLink="https://github.com/Jeshki/town-weather"
              demoLink="https://town-weather.vercel.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gamegueser}
              isBlog={false}
              title="Game Guesser"
              ghLink="https://github.com/Jeshki/game-guesser"
              demoLink="https://game-guesser.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tasks}
              isBlog={false}
              title="Tasks List"
              ghLink="https://github.com/Jeshki/task-list"
              demoLink="https://task-teal.vercel.app/" 
          />
              </Col>

              <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dovilescv}
              isBlog={false}
              title="Doviles CV"
              ghLink="https://github.com/Jeshki/DovilesCV"
              demoLink="https://doviles.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={kms}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
                             ghLink="https://github.com/Jeshki/kms-index"
              demoLink="https://kms-index.vercel.app/"    
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
