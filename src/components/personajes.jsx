import React, { useEffect, useState } from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';

function Personajes() {
  const [datos, setDatos] = useState([]);

  const fetchData = () => {
    fetch('https://rickandmortyapi.com/api/character')
      .then(response => response.json())
      .then(result => {
        setDatos(result.results);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Container>
      <h1 className="my-4">Personajes de Rick and Morty</h1>
      <Row>
        {datos.map((item) => (
          <Col key={item.id} sm={6} md={4} lg={3} className="mb-4">
            <Card>
              <Card.Img variant="top" src={item.image} alt={item.name} />
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>
                  <strong>Estado:</strong> {item.status} <br />
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Personajes;
