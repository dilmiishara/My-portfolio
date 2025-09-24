import { Container, Row, Col, Tab, Nav, Modal } from "react-bootstrap";
import { useState } from "react";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/ecommerce.jpg";
import projImg11 from "../assets/img/ecommerce-1.png";
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
  const [currentIndex, setCurrentIndex] = useState(0);

  const projects = [
    {
      id: 1,
      title: "Forever Ecommerce Website",
      description: "Development",
      category: "web",
      images: [projImg1, projImg11],
    },
    {
      id: 2,
      title: "LitLens Book Rating web",
      description: "Design & Development",
      category: "web",
      images: [projImg2],
    },
    {
      id: 3,
      title: "Plan Ease Todo App",
      description: "Design & Development",
      category: "mobile",
      images: [projImg3],
    },
    {
      id: 4,
      title: "School Management System",
      description: "Design & Development",
      category: "web",
      images: [projImg4],
    },
    {
      id: 5,
      title: "Sanake Game",
      description: "Design & Development",
      category: "web",
      images: [projImg5],
    },
    {
      id: 6,
      title: "Personal Portfolio",
      description: "Development",
      category: "web",
      images: [projImg6],
    },
  ];

  // Filter functions
  const webProjects = projects.filter(project => project.category === "web");
  const mobileProjects = projects.filter(project => project.category === "mobile");


  const handleShow = (project) => {
    setSelectedProject(project);
    setCurrentIndex(0);
    setShowModal(true);
    document.body.classList.add("hide-navbar");
  };

  const handleClose = () => {
    setSelectedProject(null);
    setShowModal(false);
    document.body.classList.remove("hide-navbar");
  };

  const nextImage = () => {
    setCurrentIndex((prevIndex) =>
        (prevIndex + 1) % selectedProject.images.length
    );
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
        (prevIndex - 1 + selectedProject.images.length) % selectedProject.images.length
    );
  };

  return (
      <section className="project" id="projects">
        <Container>
          <Row>
            <Col size={12}>
              <TrackVisibility>
                {({ isVisible }) =>
                    <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
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
                          {/* All projects */}
                          <Tab.Pane eventKey="first">
                            <Row>
                              {projects.map((project) => (
                                  <Col size={12} sm={6} md={4} key={project.id}>
                                    <ProjectCard
                                        title={project.title}
                                        description={project.description}
                                        imgUrl={project.images[0]}
                                        onClick={() => handleShow(project)}
                                    />
                                  </Col>
                              ))}
                            </Row>
                          </Tab.Pane>

                          {/* Web Applications */}
                          <Tab.Pane eventKey="second">
                            <Row>
                              {webProjects.length > 0 ? (
                                  webProjects.map((project) => (
                                      <Col size={12} sm={6} md={4} key={project.id}>
                                        <ProjectCard
                                            title={project.title}
                                            description={project.description}
                                            imgUrl={project.images[0]}
                                            onClick={() => handleShow(project)}
                                        />
                                      </Col>
                                  ))
                              ) : (
                                  <Col>
                                    <p className="text-center">No web projects found</p>
                                  </Col>
                              )}
                            </Row>
                          </Tab.Pane>

                          {/* Mobile Applications */}
                          <Tab.Pane eventKey="third">
                            <Row>
                              {mobileProjects.length > 0 ? (
                                  mobileProjects.map((project) => (
                                      <Col size={12} sm={6} md={4} key={project.id}>
                                        <ProjectCard
                                            title={project.title}
                                            description={project.description}
                                            imgUrl={project.images[0]}
                                            onClick={() => handleShow(project)}
                                        />
                                      </Col>
                                  ))
                              ) : (
                                  <Col>
                                    <p className="text-center">No mobile projects found</p>
                                  </Col>
                              )}
                            </Row>
                          </Tab.Pane>
                        </Tab.Content>
                      </Tab.Container>
                    </div>}
              </TrackVisibility>
            </Col>
          </Row>
        </Container>

        <img className="background-image-right" src={colorSharp2} alt="background-image" />

        {/* Modal for image slider */}
        <Modal
            show={showModal}
            onHide={handleClose}
            centered
            size="lg"
            dialogClassName="image-only-modal"
        >
          <button className="close-btn" onClick={handleClose}>&times;</button>

          {selectedProject && (
              <div className="image-slider-container">
                {selectedProject.images.length > 1 && (
                    <button
                        className="nav-arrow"
                        onClick={prevImage}
                    >
                      &#10094;
                    </button>
                )}

                <img
                    src={selectedProject.images[currentIndex]}
                    alt={selectedProject.title}
                    className="slider-image"
                />

                {selectedProject.images.length > 1 && (
                    <button
                        className="nav-arrow"
                        onClick={nextImage}
                    >
                      &#10095;
                    </button>
                )}
              </div>
          )}
        </Modal>
      </section>
  );
};
