import React, { useState, useEffect, useContext } from "react";
import { Card, Form, Button, Row, Col } from "react-bootstrap";
import axios from "axios";
import { AppContext } from "../context/AppContext";

const Profile = () => {
  const [user, setUser] = useState(null);
  const { token, serverUrl } = useContext(AppContext);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const { data } = await axios.get(`${serverUrl}/api/auth/get`, {
          headers: { token },
        });
        if (data.success) {
          setUser(data.user);
        }
      } catch (err) {
        console.error("Error fetching user profile:", err);
      }
    };
    fetchUser();
  }, [serverUrl, token]);

  if (!user) return <p>Loading profile...</p>;

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
                value={user.name || ""}
                readOnly
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3" controlId="formEmail">
            <Form.Label column sm={3}>Email:</Form.Label>
            <Col sm={9}>
              <Form.Control
                type="email"
                name="email"
                value={user.email || ""}
                readOnly
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3" controlId="formReferralId">
            <Form.Label column sm={3}>Referral ID:</Form.Label>
            <Col sm={9}>
              <Form.Control
                type="text"
                name="referralId"
                value={user.referralId || ""}
                readOnly
              />
            </Col>
          </Form.Group>

          {/* <Button variant="primary" type="submit" disabled>
            Save Changes
          </Button> */}
        </Form>
      </Card.Body>
    </Card>
  );
};

export default Profile;
