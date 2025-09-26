import React from 'react'
import { Form, Row,Col,Container,Button } from 'react-bootstrap';

const ReferralPage = () => {
    return (
        <Container className="d-flex justify-content-center" style={{ marginTop: "80px" }}>
          <Row className="w-100">
            <h1>you have been sponsored by .....</h1>
            <Col md={6} lg={4} className="mx-auto">
              <h3 className="text-center mb-4">referral form</h3>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Nom</Form.Label>
                  <Form.Control type="email" placeholder="Votre Nom" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
    
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Téléphone</Form.Label>
                  <Form.Control type="number" placeholder="Votre Téléphone" />
                </Form.Group>
    
            
    
                <div className="d-grid">
                  <Button variant="primary" type="submit">
                  Soumettre
                  </Button>
                </div>
              </Form>
            </Col>
          </Row>
        </Container>
      );
}

export default ReferralPage