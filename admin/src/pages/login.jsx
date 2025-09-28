import React, { useState, useEffect } from "react";
import { Button, Form, Container, Row, Col } from "react-bootstrap";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState(localStorage.getItem("Admintoken") || "");

  const serverUrl = "http://localhost:4000";
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      navigate("/admin");
    }
  }, [token, navigate]);

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      const res = await axios.post(`${serverUrl}/api/auth/adminauth`, {
        email,
        password,
      });
      if (res.data.success) {
        setToken(res.data.token);
        localStorage.setItem("Admintoken", res.data.token);
        toast.success("Connexion réussie !");
        navigate("/admin");
      } else {
        toast.error(res.data.message || "Échec de la connexion");
      }
    } catch (error) {
      console.error(error);
      toast.error("Erreur lors de la connexion : " + error.message);
    }
  };

  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{
        marginTop: "80px",
        minHeight: "80vh",
        backgroundColor: "#f7f9fc",
        padding: "20px",
        borderRadius: "10px",
      }}
    >
      <Row className="w-100">
        <Col md={6} lg={4} className="mx-auto">
          <h3 className="text-center mb-4" style={{ color: "#333" }}>
            Connexion Admin
          </h3>
          <Form onSubmit={onSubmitHandler} style={{ backgroundColor: "#fff", padding: "20px", borderRadius: "10px", boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Entrez votre email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Mot de passe</Form.Label>
              <Form.Control
                type="password"
                placeholder="Entrez votre mot de passe"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                required
              />
            </Form.Group>

            <div className="d-grid">
              <Button
                variant="primary"
                type="submit"
                style={{ backgroundColor: "#007bff", border: "none", fontWeight: "bold" }}
              >
                Connexion
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;
