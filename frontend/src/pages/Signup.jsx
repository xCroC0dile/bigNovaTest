import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { AppContext} from "../context/AppContext";

function Singup() {
  const { token, setToken, navigate, serverUrl } = useContext(AppContext);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const onSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      if (password !== ConfirmPassword) {
        toast.error("your passwords does not match!");
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
    if (token) {
      navigate("/dashboard");
    }
  }, [token]);
  return (
    <Container
      className="d-flex justify-content-center"
      style={{ marginTop: "90px", marginBottom: "80px" }}
    >
      <Row className="w-100">
        <Col md={6} lg={4} className="mx-auto">
          <h3 className="text-center mb-4">Inscription</h3>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Nom</Form.Label>
              <Form.Control
                type="text"
                placeholder="Votre Nom"
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Mot de passe</Form.Label>
              <Form.Control type="password" placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                value={password} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Confirmer le Mot de passe</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                onChange={(e) => setConfirmPassword(e.target.value)}
                value={ConfirmPassword}
              />
            </Form.Group>

            <div className="d-grid">
              <Button variant="primary" type="submit" onClick={onSubmitHandler}>
                Inscription
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Singup;
