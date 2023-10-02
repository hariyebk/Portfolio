import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hey there, folks! Brace yourselves, Introducing the one and only... me! cue applause. I am <span className="purple">Harun Bekri </span> but You can call me Hari for short, a self-proclaimed coding wizard and a learning machine from the quirky city of
            <i>
              <span className="purple"> Dire Dawa, Ethiopia.</span>
            </i>
            &nbsp; With a mischievous grin on my face and a keyboard at my fingertips, I craft lines of code that dance and sing, creating Web apps that will make your jaw drop.
            <br />
            
            <br />
            <br />
            Apart from coding, I am highly interested in these Topics
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> &nbsp; GeoPolitics
            </li>
            <li className="about-activity">
              <ImPointRight /> &nbsp; Evolutionary and Social Psycology
            </li>
            <li className="about-activity">
              <ImPointRight /> &nbsp; Chess
            </li>
            <li className="about-activity">
              <ImPointRight /> &nbsp; Tech Startups
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "We have two lives, and the second begins when we realize we only have one." ― Confucius
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
