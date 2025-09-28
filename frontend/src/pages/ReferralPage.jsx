import React, { useState } from "react";
import { Form, Row, Col, Container, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import axios from "axios";
import {toast} from "react-toastify";

const ReferralPage = () => {
  const { ID } = useParams(); // 👈 get referral ID from URL
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  // handle form changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("http://localhost:4000/api/referral/add", {
        ...formData,
        referralId: ID,
      });

      if(data.success){
        setFormData({ name: "", email: "", phone: "" });
        toast.success("Referral submitted successfully!");
      }
      
    } catch (err) {
      console.error(err);
      toast.error("Failed to submit referral");
    }
  };

  return (
    <Container className="d-flex justify-content-center" style={{ marginTop: "80px" }}>
      <Row className="w-100">
        <h1>Referral ID: {ID}</h1>
        <Col md={6} lg={4} className="mx-auto">
          <h3 className="text-center mb-4">Referral Form</h3>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formName">
              <Form.Label>Nom</Form.Label>
              <Form.Control
                type="text"
                name="name"
                placeholder="Votre Nom"
                value={formData.name}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="Enter email"
                value={formData.email}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formPhone">
              <Form.Label>Téléphone</Form.Label>
              <Form.Control
                type="text"
                name="phone"
                placeholder="Votre Téléphone"
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
        </Col>
      </Row>
    </Container>
  );
};

export default ReferralPage;
