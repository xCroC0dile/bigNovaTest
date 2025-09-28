import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { AppContext } from "../context/AppContext";

function Signup() {
  const { token, setToken, navigate, serverUrl } = useContext(AppContext);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      if (password !== confirmPassword) {
        toast.error("Vos mots de passe ne correspondent pas !");
        return null;
      }
      const res = await axios.post(serverUrl + "/api/auth/signup", {
        name,
        email,
        password,
      });
      if (res.data.success) {
        setToken(res.data.token);
        localStorage.setItem("token", res.data.token);
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    if (token && token !== null && token !== "undefined") {
      navigate("/dashboard");
    }
  }, [token]);

  return (
    <Container
      className="d-flex justify-content-center"
      style={{ marginTop: "90px", marginBottom: "80px" }}
    >
      <Row className="w-100">
        <Col md={6} lg={4} className="mx-auto shadow-lg p-4 rounded bg-white">
          <h3 className="text-center mb-4">Inscription</h3>
          <Form onSubmit={onSubmitHandler}>
            <Form.Group className="mb-3" controlId="formName">
              <Form.Label>Nom</Form.Label>
              <Form.Control
                type="text"
                placeholder="Votre nom complet"
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Votre adresse email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formPassword">
              <Form.Label>Mot de passe</Form.Label>
              <Form.Control
                type="password"
                placeholder="Entrez un mot de passe"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formConfirmPassword">
              <Form.Label>Confirmer le mot de passe</Form.Label>
              <Form.Control
                type="password"
                placeholder="Répétez le mot de passe"
                onChange={(e) => setConfirmPassword(e.target.value)}
                value={confirmPassword}
              />
            </Form.Group>

            <div className="d-grid">
              <Button variant="primary" type="submit">
                S'inscrire
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Signup;
