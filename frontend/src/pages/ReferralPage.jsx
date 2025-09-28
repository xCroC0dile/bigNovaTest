import React, { useState } from "react";
import { Form, Row, Col, Container, Button, Card } from "react-bootstrap";
import { useParams } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const ReferralPage = () => {
  const { ID } = useParams();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("http://localhost:4000/api/referral/add", {
        ...formData,
        referralId: ID,
      });

      if (data.success) {
        setFormData({ name: "", email: "", phone: "" });
        toast.success("Parrainage soumis avec succès !");
      }
    } catch (err) {
      console.error(err);
      toast.error("Échec de la soumission du parrainage");
    }
  };

  return (
    <Container
      className="d-flex justify-content-center"
      style={{ marginTop: "90px", marginBottom: "80px" }}
    >
      <Row className="w-100">
        <Col md={6} lg={5} className="mx-auto">
          <Card className="shadow-lg p-4 rounded bg-white">
            <Card.Body>
              <h4 className="text-center mb-3 text-primary">Formulaire de Parrainage</h4>
              <p className="text-center text-muted mb-4">
                ID de parrainage : <strong>{ID}</strong>
              </p>

              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formName">
                  <Form.Label>Nom</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    placeholder="Votre nom complet"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    placeholder="Votre adresse email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </Form.Group>

                <Form.Group className="mb-4" controlId="formPhone">
                  <Form.Label>Téléphone</Form.Label>
                  <Form.Control
                    type="text"
                    name="phone"
                    placeholder="Votre numéro de téléphone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </Form.Group>

                <div className="d-grid">
                  <Button variant="primary" type="submit">
                    Soumettre
                  </Button>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ReferralPage;
