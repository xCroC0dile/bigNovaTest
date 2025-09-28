import React, { useState, useEffect, useContext } from "react";
import { Card, Form, Row, Col, Button } from "react-bootstrap";
import axios from "axios";
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const [user, setUser] = useState(null);
  const { token, serverUrl } = useContext(AppContext);
  const navigate = useNavigate();

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

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  if (!user) return <p>Chargement du profil...</p>;

  return (
    <Card style={{ maxWidth: "600px", margin: "auto", backgroundColor: "#f9f9f9", borderRadius: "10px", padding: "20px" }}>
      <Card.Body>
        <Card.Title>Mon Profil</Card.Title>
        <Form>
          <Form.Group as={Row} className="mb-3" controlId="formName">
            <Form.Label column sm={3}>Nom:</Form.Label>
            <Col sm={9}>
              <Form.Control type="text" value={user.name || ""} readOnly />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3" controlId="formEmail">
            <Form.Label column sm={3}>Email:</Form.Label>
            <Col sm={9}>
              <Form.Control type="email" value={user.email || ""} readOnly />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3" controlId="formReferralId">
            <Form.Label column sm={3}>Referral ID:</Form.Label>
            <Col sm={9}>
              <Form.Control type="text" value={user.referralId || ""} readOnly />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3" controlId="formReferralLink">
            <Form.Label column sm={3}>Lien de parrainage:</Form.Label>
            <Col sm={9}>
              <Form.Control 
                type="text" 
                value={`http://localhost:3000/r/${user.referralId}`} 
                readOnly 
              />
            </Col>
          </Form.Group>

          <div className="d-grid mt-3">
            <Button variant="danger" onClick={handleLogout}>
              Déconnexion
            </Button>
          </div>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default Profile;
