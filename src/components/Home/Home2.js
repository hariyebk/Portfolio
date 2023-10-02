import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "1.8rem" }}>
            <span className="purple"> LET ME </span> walk you through my Story
            </h1>
            <p className="home-about-body">
            Imagine A chemical engineering student at Dire Dawa University, meticulously studying compounds, equations, and reactions. Now, imagine that same student, fueled by a caffeine-induced frenzy, embarking on a secret mission to conquer the world of coding. Yes, you heard that right—I was the one juggling chemicals by day and coding commands by night. I couldn't resist the allure of crafting codes and understanding how Technologies work. So I decided to pursue a computer science degree in the evenings while dutifully attending my chemical engineering classes during the day.
              <br /> <br />
              To further fuel my coding obsession, I ventured into the realm of <span className="purple">
              <a href = "https://www.alxethiopia.com/" rel = "noreferrer" target="_blank">Alx Academy</a></span>, thinking I could conquer any curriculum that came my way, Little did I know that those months would be akin to a mad dash through an obstacle course. I felt like Indiana Jones outrunning a boulder, except the boulder was a relentless stream of assignments and the occasional bug that seemed determined to thwart my progress. <br /> <br />
              <i>
              Eventually <span className="purple"> I embraced a self-directed solo approach </span> 
              </i>
              to learn coding, seizing every opportunity in the arsenal of online resources to expand my knowledge and refine my skills. It was a journey of self-discovery, where I became my own teacher, mentor, and occasional therapist. I mean, who knew debugging could sometimes feel like therapy sessions with a stubborn program?
              <br />
              <br />
              My favorite coding language has been
              <i>
                <b className="purple"> Javascript and it's Frameworks.</b>
              </i>
              &nbsp;
              I am also conversant with Java, Python and sometimes C 🤯 I know!
              <br />
              <br />
              My field of Interest's are building new &nbsp;
              <i>
                <b className="purple">Web Technologies and Products </b> and
                also in areas related to{" "}
                <b className="purple">
                  Ethical Hacking.
                </b>
              </i>
              <br />
            </p>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/hariyebk"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/Hariyebk"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/soum/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/hariyebk"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
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
