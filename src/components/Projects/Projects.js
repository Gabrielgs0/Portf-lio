import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Project_1 from "../../Assets/Projects/project_1.png";
import Project_2 from "../../Assets/Projects/project_2.png";
import Project_3 from "../../Assets/Projects/project_3.png";
import Project_4 from "../../Assets/Projects/project_4.png";
import Project_5 from "../../Assets/Projects/project_5.png";
import Project_6 from "../../Assets/Projects/project_6.png";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Meus <strong className="blue">Projetos </strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Project_1}
              isBlog={false}
              title="Jogo Das Sequencias"
              description=""
              ghLink="https://github.com/Gabrielgs0/ggsSequencesGame"
              demoLink="https://gabrielgs0.github.io/ggsSequencesGame/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Project_2}
              isBlog={false}
              title="Site de Assinaturas"
              description=""
              ghLink="https://github.com/Gabrielgs0/Sitedeassinaturas"
              demoLink="https://ggsvideos.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Project_3}
              isBlog={false}
              title="Gerador de QrCode"
              description=""
              ghLink="https://github.com/Gabrielgs0/GeradorQrCode"
              demoLink="https://ggsgeradorqrcode.netlify.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Project_4}
              isBlog={false}
              title="Site de Viagens"
              description=""
              ghLink="https://github.com/Gabrielgs0/Caravan"
              demoLink="https://caravanggs.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Project_5}
              isBlog={false}
              title="Sistema de Finanças"
              description=""
              ghLink="https://github.com/Gabrielgs0/sitema_financa"
              demoLink="https://sistemafinanca.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Project_6}
              isBlog={false}
              title="Lading Page"
              description=""
              ghLink="https://github.com/Gabrielgs0/portifolio"
               demoLink="https://gabrielgoncalveslading.netlify.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
