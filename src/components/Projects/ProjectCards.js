import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BsGithub } from "react-icons/bs";
import {HiOutlineArrowTopRightOnSquare} from "react-icons/hi2"

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title className="purple" style={{marginBottom: "20px"}}>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify"}}>
          {props.description}
        </Card.Text>
        <Button style={{marginTop: "18px", marginBottom: "10px"}} variant="primary" href={props.ghLink} target="_blank">
          <BsGithub /> &nbsp;
          GitHub
        </Button>
        {"\n"}
        {"\n"}

        {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}

        {props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{ marginLeft: "20px", marginTop: "18px", marginBottom: "10px" }}
          >
            <HiOutlineArrowTopRightOnSquare /> &nbsp;
            Preview
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
