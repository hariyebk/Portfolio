import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import worldwise from "../../Assets/Projects/worldwise.png";
import natours from "../../Assets/Projects/natours.png";
import pizza from "../../Assets/Projects/pizza.png";
import forkify from "../../Assets/Projects/forkify.png";
import wildoasis from "../../Assets/Projects/wildoasis.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white", paddingTop: "10px" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={worldwise}
              title="Worldwise"
              description="A platform where you keep track of your adventures Every where you travel around the world."
              ghLink="https://github.com/hariyebk/WorldWise"
              demoLink="https://world-wise-harun.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={wildoasis}
              title="The wild oasis"
              description="An Internal Boutique Hotel Management App with a dedicated analytics on the dashboard"
              ghLink="https://github.com/hariyebk/The-Wild-Oasis"
              demoLink="https://the-wild-oasis-hariyebk.vercel.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={natours}
              title="Natours"
              description="A tour booking web app powered by Stripe's seamless payment processing Checkout Session"
              ghLink="https://github.com/hariyebk/Natours"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pizza}
              title="Fast React Pizza"
              description="An online Restaurant where you can make orders for delicious pizzas"
              ghLink="https://github.com/hariyebk/Fast-React-Pizza"
              demoLink="https://fast-react-pizza-hariyebk.vercel.app/"
            />
          </Col>  

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={forkify}
              title="Forkify"
              description="   A Food recipe search engine from A database of over 1 million recipes."
              ghLink="https://github.com/hariyebk/forkify"
              demoLink="https://forkify-harun.netlify.app/"
            />
          </Col>  
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
