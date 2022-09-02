import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export const Login = () => {
  return (
    <>
      <Row className="justify-content-center">
        <Col xs="8" sm="6" md="5" lg="4" xl="3">
          <Container>
            <h1 id="titulo">Login</h1>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>E-mail</Form.Label>
                <Form.Control type="email" placeholder="Digite seu e-mail" />
              </Form.Group>

              <Form.Group className="mb-1">
                <Form.Label>Senha</Form.Label>
                <Form.Control type="password" placeholder="Digite sua senha" />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Check type="checkbox" label="Lembrar minha senha" />
              </Form.Group>
            </Form>
          </Container>
          <Container style={{ textAlign: "center" }}>
            <Button variant="primary" type="submit">
              Entrar
            </Button>
            <br />
            <a href="/Cadastro" className="cadastro">
              Cadastre-se
            </a>
          </Container>
        </Col>
      </Row>
    </>
  );
};
