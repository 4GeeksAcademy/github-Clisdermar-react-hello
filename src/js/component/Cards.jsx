import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css'

const CardGeneral=(props)=>{
  return (
    <Card style={{ width: '14rem', border:'none' }}>
      <Card.Img  variant="top" src={props.img} />
      <Card.Body >
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
         Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae quod et doloremque praesentium
        </Card.Text>
        <Button variant="primary">Find Out More!</Button>
      </Card.Body>
    </Card>
    
  )
}

const Cards = () =>{
    return ( 
      <div className="container" >
    <div className="row row-cols-1 row-cols-md-3 g-4">
      <CardGeneral img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZfXHrUGqG0zbupTXBVizgKoxQrHortHhy-w&usqp=CAU"/>,
      <CardGeneral img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZfXHrUGqG0zbupTXBVizgKoxQrHortHhy-w&usqp=CAU"/>,
      <CardGeneral img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZfXHrUGqG0zbupTXBVizgKoxQrHortHhy-w&usqp=CAU"/>,
      <CardGeneral img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZfXHrUGqG0zbupTXBVizgKoxQrHortHhy-w&usqp=CAU"/>,
       </div> 
     </div>
     );
  
  }
  
  
  export default Cards;