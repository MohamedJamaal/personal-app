import { Container, Row, Col } from "react-bootstrap";
import MailSubscripe from "./MailSubscripe";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <MailSubscripe />
          {/* <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col> */}
          <Col size={12} sm={12} className="text-center text-sm-end">
            <div className="footer-style">
              <div className="social-icon">
                <a
                  href="https://www.linkedin.com/in/mohamed-gamal-0777108b/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={navIcon1} alt="" />
                </a>
                <a
                  href="https://www.facebook.com/mohamed.gamal.7739814/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={navIcon2} alt="" />
                </a>
                <a
                  href="https://www.instagram.com/mohamaadjamal/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={navIcon3} alt="" />
                </a>
              </div>
              <p>Copyright &copy; 2023. All Rights Reserved</p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
