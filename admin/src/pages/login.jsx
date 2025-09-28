import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState(localStorage.getItem("Admintoken") || "");
 
  const serverUrl = "http://localhost:4000";

  const navigate = useNavigate();

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
        toast.success("Connexion réussie!");
        navigate("/admin");
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
      navigate("/admin");
    }
  }, [token, navigate]);

  return (
    <Container className="d-flex justify-content-center" style={{ marginTop: "80px" }}>
      <Row className="w-100">
        <Col md={6} lg={4} className="mx-auto">
          <h3 className="text-center mb-4">Connexion</h3>
          <Form onSubmit={onSubmitHandler}>
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
              <Form.Control
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
            </Form.Group>

            <div className="d-grid">
              <Button variant="primary" type="submit">
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
