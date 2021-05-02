import React from "react";
import {
  Card,
  Button,
  CardHeader,
  CardFooter,
  CardTitle,
  CardText,
  CardImg,
} from "reactstrap";
import "./style.css";

export default function Portfolio(props) {
  return (
    <div classname="Portfolio">
      <Card>
        <CardImg top width="100%" src={props.img} alt={props.name} />
        <CardTitle>{props.name}</CardTitle>
        <CardText>{props.description}</CardText>
        <Button></Button>
      </Card>
    </div>
  );
}
