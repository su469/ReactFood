import React from 'react'
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { Card } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Cards = ({ details }) => {
  return (
    <div className='main-div'>
      <Container>
        <Row className="cards-gap">
          {!details?'': details?.map((item) => (
            <Col xs={12} md={4}>
              <Card className='cards'>
                <img style={{width:'100%',borderTopLeftRadius:'11px',borderTopRightRadius:'11px'}} src={item?.strMealThumb} />
                <Card.Body>
                  <Card.Title>{item?.strMeal}</Card.Title>

                 <NavLink to={`/${item.idMeal}`}> <Button variant="warning">Recipe</Button></NavLink>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  )
}

export default Cards;
