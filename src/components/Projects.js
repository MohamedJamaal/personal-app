import React from "react";
import pro1 from "../assets/img/pro1.png";
import pro2 from "../assets/img/pro2.png";
import pro3 from "../assets/img/pro3.png";
// import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import ColorSharp2 from "../assets/img/color-sharp2.png";
import { Col, Container, Nav, Row, Tab } from "react-bootstrap";
import ProjectCard from "./ProjectCard";

function Projects() {
  const projects = [
    {
      title: "Restaurant App",
      description: "Web Development",
      imgUrl: pro1,
      projectUrl: "https://food-shop-tau.vercel.app/",
    },
    {
      title: "Travel Agency",
      description: "Design & Development",
      imgUrl: pro2,
      projectUrl: "https://travel-agency-iti-final-project.vercel.app/",
    },
    {
      title: "Burger Builder",
      description: "Design & Development",
      imgUrl: pro3,
      projectUrl: "https://burger-builder-react-js-six.vercel.app/",
    },
  ];
  return (
    <div>
      <section className="project" id="projects">
        <Container>
          <Row>
            <Col>
              <h2>Projects</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s.
              </p>
              <Tab.Container id="projects-tabs" defaultActiveKey="first">
                <Nav
                  variant="pills"
                  className="nav-pills mb-5 justify-content-center align-items-center"
                  id="pills-tab"
                >
                  {/* <Nav.Item>
                    <Nav.Link eventKey="first">Tab One</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second">Tab Two</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="third">Tab Three</Nav.Link>
                  </Nav.Item> */}
                </Nav>
                <Tab.Content>
                  <Tab.Pane eventKey="first">
                    <Row>
                      {projects.map((project, index) => {
                        return <ProjectCard key={index} {...project} />;
                      })}
                    </Row>
                  </Tab.Pane>
                  {/* <Tab.Pane eventKey="second">lorem</Tab.Pane>
                  <Tab.Pane eventKey="third">ipsum</Tab.Pane> */}
                </Tab.Content>
              </Tab.Container>
            </Col>
          </Row>
        </Container>
        <img
          className="background-image-right"
          alt="projImg"
          src={ColorSharp2}
        />
      </section>
    </div>
  );
}

export default Projects;
