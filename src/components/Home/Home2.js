import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/profile-pic.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              UM POUCO <span className="blue"> SOBRE </span> MIM
            </h1>
            <p className="home-about-body">
              Sempre fui apaixonado por Tecnologia desde criança, mas conheci a programação
              no começo de 2021 e desde lá venho me aprofundando nesse mundo incrível de possibilidades.
              <br />
              <br />A área que tenho mais afinidade é o 
              <i>
                <b className="blue"> Desenvolvimento Web. </b>
              </i>
              <br />
              <br />
              Tive a Experiência de trabalhar em projetos de grandes empresas como:
              <i>
                <b className="blue"> <br /> iFood, <br /> Secretaria da Mulher, <br /> Fundação 1° de maio, <br /> Partido Solidariedade entre outros...</b>
              </i>
              <br />
              <br />
              Nesses projetos utilizei várias ferramentas como:
              <b className="blue"><br /> HTML, <br /> CSS, <br /> JavaScript, <br /> React, <br /> Next.js, <br /> Node.js, <br />
              Gatsby, <br /> PHP, <br /> WordPress <br /> SASS, <br /> BootStrap...</b>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>Contate-me</h1>
            <p>
              Minhas redes para <span className="blue">Contato </span>
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Gabrielgs0"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/gabriel-gon%C3%A7alves07/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
