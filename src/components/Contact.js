import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import linkedin from '../assets/img/linkedinIcon.png'
import email from '../assets/img/emailicon.png'

export const Contact = () => {
  const handleLinkedInClick = () => {
    window.open("http://www.linkedin.com/in/dilmi-ishara-wimalaweera-9891752a2", "_blank");
  };
  const handleEmailClick = () => {
    window.open("gmail.com", "_blank");
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <img
                  className={isVisible ? "animate__animated animate__zoomIn" : ""}
                  src={contactImg}
                  alt="Contact Us"
                />
              )}
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Get In Touch</h2>
                  <div className="new-email-bx">
                    <button
                      type="button"
                      onClick={handleLinkedInClick}
                      className="linkedin-btn"
                    >
                        <img src={linkedin} alt="linkedin"/>
                      LinkedIn
                    </button>
                    <button
                      type="button"
                      onClick={handleEmailClick}
                      className="linkedin-btn"
                    >
                    <img src={email} alt="email"/>
                      dilmiishara2000@gmail.com
                    </button>
                  </div>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
