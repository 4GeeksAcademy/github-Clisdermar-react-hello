import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css'

const CardGeneral = (props) => {
  return (
    <Col xs={12} md={3} className="mb-3">
      <Card>
        <Card.Img variant="top" src={props.img} />
        <Card.Body>
          <Card.Title className="text-center">Card Title</Card.Title>
          <Card.Text>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae quod et doloremque praesentium
          </Card.Text>
          <div className="text-center"> {/* Aquí se añade la clase text-center */}
            <Button variant="primary">Find Out More!</Button>
          </div>
        </Card.Body>
      </Card>
    </Col>
  )
}

const Cards = () => {
  return (
    <Container className="container" >
      <Row className="row">
        <CardGeneral img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZfXHrUGqG0zbupTXBVizgKoxQrHortHhy-w&usqp=CAU" />
        <CardGeneral img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZfXHrUGqG0zbupTXBVizgKoxQrHortHhy-w&usqp=CAU" />
        <CardGeneral img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZfXHrUGqG0zbupTXBVizgKoxQrHortHhy-w&usqp=CAU" />
        <CardGeneral img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZfXHrUGqG0zbupTXBVizgKoxQrHortHhy-w&usqp=CAU" />
      </Row>
    </Container>
  );
}

export default Cards;