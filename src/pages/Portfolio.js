import React, { useState, useEffect } from "react";
//import Wrapper from "../components/Wrapper";
import { Col, Row, Container } from "../components/Grid";
import portfolioConfig from "../assets/json/portfolioConfig.json";
import PortfolioCard from "../components/PortfolioCard";

function Portfolio() {
  const [myProjects, setmyProjects] = useState([]);

  useEffect(() => {
    loadmyProjects();
  }, []);

  function loadmyProjects() {
    setmyProjects(portfolioConfig);
  }

  return (
    <Container>
      <h1 className="underline">Portfolio</h1>
      <Row>
        {myProjects.map((project) => (
          <Col size="md-6" className="project-col">
            <PortfolioCard
              key={project.id}
              name={project.name}
              img={project.img}
              imgLink={project.imgLink}
              repositoryLink={project.repositoryLink}
              deployLink={project.deployLink}
              description={project.description}
              />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Portfolio;
