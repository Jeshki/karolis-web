import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiGit,
} from "react-icons/di";
import { FaHtml5 } from "react-icons/fa";
import { BsBootstrapFill } from "react-icons/bs";
import { SiJquery } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { TbSeo } from "react-icons/tb";
import { SiCanva } from "react-icons/si";
import { SiAdobepremierepro } from "react-icons/si";



function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>   
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>     
      <Col xs={4} md={2} className="tech-icons">
      <FaHtml5 />
      </Col> 
      <Col xs={4} md={2} className="tech-icons">
      <BsBootstrapFill />
      </Col> 
      <Col xs={4} md={2} className="tech-icons">
      <SiJquery />
      </Col> 
      <Col xs={4} md={2} className="tech-icons">
      <SiTypescript />
      </Col> 
      <Col xs={4} md={2} className="tech-icons">
      <TbSeo />
      </Col> 
      <Col xs={4} md={2} className="tech-icons">
      <SiCanva />
      </Col> 
      <Col xs={4} md={2} className="tech-icons">
      <SiAdobepremierepro />
      </Col> 
    </Row>
  );
}

export default Techstack;
