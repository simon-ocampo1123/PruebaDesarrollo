import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

function SobreMi() {
  return (
    <Container className="my-5">
      <Row className="justify-content-center">
        <Col md={8}>
          <Card>
            <Card.Body>
              <Card.Title className="text-center mb-4">Sobre Mí</Card.Title>
              <Card.Text>
                ¡Hola! Mi nombre es Simón Ocampo. Soy desarrollador web y me encanta aprender nuevas tecnologías.
              </Card.Text>
              <Card.Text>
                En mi tiempo libre, disfruto explorar proyectos, así como otras herramientas que ayudan a crear experiencias de usuario atractivas.
              </Card.Text>
              <Card.Text>
                ¡Gracias por visitar mi página!
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default SobreMi;
