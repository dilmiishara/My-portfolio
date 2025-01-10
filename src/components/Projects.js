import { Container, Row, Col, Tab, Nav, Modal } from "react-bootstrap";
import { useState } from "react";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/ecommerce.jpg";
import projImg2 from "../assets/img/bookreview.png";
import projImg3 from "../assets/img/planease.png";
import projImg4 from "../assets/img/sms.png";
import projImg5 from "../assets/img/sanake.png";
import projImg6 from "../assets/img/portfolio.png";

import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';


export const Projects = () => {

  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleShow = (project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  const handleClose = () => {
    setSelectedProject(null);
    setShowModal(false);
  };

  const projects = [
    {
      title: "Forever Ecommerce Website",
      description: "Development",
      imgUrl: projImg1,
    },
    {
      title: "LitLens Book Rating web",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Plan Ease Todo App",
      description: "Design & Development",
      imgUrl: projImg3,
    },
    {
      title: "School Management System",
      description: "Design & Development",
      imgUrl: projImg4,
    },
    {
      title: "Sanake Game",
      description: "Design & Development",
      imgUrl: projImg5,
    },
    {
      title: "Personal Portfolio",
      description: "Development",
      link:"#",
      imgUrl: projImg6,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Showcasing My Work: A Collection of Projects</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">All</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Web Applications</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Mobile Applications</Nav.Link>
                    </Nav.Item>
                    
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                                {projects.map((project, index) => (
            <Col size={12} sm={6} md={4} key={index}>
              <ProjectCard
                {...project}
                onClick={() => handleShow(project)}
              />
            </Col>
          ))} 
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p></p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p></p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="background-image"></img>

      {/* Modal for expanded project image */}
      <Modal show={showModal} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>{selectedProject?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="d-flex justify-content-center align-items-center">
          <img
            src={selectedProject?.imgUrl}
            alt={selectedProject?.title}
            className="modal-image"
            
          />
        </Modal.Body>
      </Modal>
    </section>
  )
}

