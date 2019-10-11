import React from 'react';
import {
    Card, CardText, CardBody,
    CardTitle, Col
  } from 'reactstrap';
  import { Alert } from 'reactstrap';
  import styled from'styled-components';


 export default function CharacterCard(props) {

    return (
        <Col sm="6"  md="4" offset-md="3">

        <MainDiv>


        <Card className="description"  key={props.key} > <CardOne>

        <CardText> <Alert color="success"> {props.name} </Alert>  </CardText> 
        <CardTitle> <Alert color="warning">{props.gender} </Alert> </CardTitle>
        <CardBody>  <Alert color="info">  {props.height} </Alert> </CardBody>
        </CardOne>
        </Card>
       
        </MainDiv>
        </Col> 

    )
};

const MainDiv= styled.div `
display:flex;
flex-direction:column;
align-items: center;
background-color: lavender;
width:100%;
height: 100%;
margin-left: 400px;`

const CardOne = styled.div `
background: beige;`