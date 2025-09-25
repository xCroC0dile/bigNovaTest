import React, { useState } from "react";
import { Card, Form, Button, Row, Col } from "react-bootstrap";

const Profile = () => {
  const [user, setUser] = useState({
    name: "Yacine",
    email: "yacine@example.com",
  });



  return (
    <Card style={{ maxWidth: "600px", margin: "auto" }}>
      <Card.Body>
        <Card.Title>My Profile</Card.Title>
        <Form>
          <Form.Group as={Row} className="mb-3" controlId="formName">
            <Form.Label column sm={3}>Name:</Form.Label>
            <Col sm={9}>
              <Form.Control
                type="text"
                name="name"
                value={user.name}
               
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3" controlId="formEmail">
            <Form.Label column sm={3}>Email:</Form.Label>
            <Col sm={9}>
              <Form.Control
                type="email"
                name="email"
                value={user.email}
               
              />
            </Col>
          </Form.Group>

          <Button variant="primary" type="submit">
            Save Changes
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default Profile;
