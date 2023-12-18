import React from "react";
import { Col, Nav } from "react-bootstrap";

function ProjectCard({ title, description, imgUrl, projectUrl }) {
  return (
    <Col sm={6} md={4}>
      <div className="proj-imgbx h-auto">
        <Nav.Link href={projectUrl}>
          <img src={imgUrl} alt="img" />

          <div className="proj-txtx">
            <h4>{title}</h4>
            <span>{description}</span>
          </div>
        </Nav.Link>
      </div>
    </Col>
  );
}

export default ProjectCard;
