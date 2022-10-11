import React from "react";
import { Container } from "react-bootstrap";
import Particle from "../Particle";
import Techstack from "./Techstack";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Minhas <strong className="blue">Skills </strong>
        </h1>
        <Techstack />
      </Container>
    </Container>
  );
}

export default About;
