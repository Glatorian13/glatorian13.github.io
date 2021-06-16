import React from "react";
import { Card, Button } from "react-bootstrap";
//import Card from 'react-bootstrap/Card';
//import Button from 'react-bootstrap/Button';

export default function PortfolioCard(props) {
  // let loadFile = this.props.portfolioConfig;
  return (
    <div>
      <Card
        //key={portfolioConfig.projects.id}
        style={{ width: "20rem" }}
      >
        <Card.Img
          variant="top"
          src={props.img}
          href={props.imgLink}
          alt={props.name}
        ></Card.Img>
        <Card.Body>
          <Card.Title>{props.name}</Card.Title>
          <Card.Text>{props.description}</Card.Text>
          <Button
            variant="primary"
            href={props.respositoryLink}
            target="_blank"
            rel="noreferrer"
          >
            Repository Link
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}
