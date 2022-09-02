import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Container } from "react-bootstrap";
// import { useState } from "react";
// import { useForm } from "react-hook-form";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";

export const Cadastro = () => {

    // const [data, setData] = useState({
    //   email: "",
    //   senha: ""
    // })
    // const { register, setValue, setFocus, handleSubmit } = useForm();

    // function confirmaSenha() {
    //     if (senha === senha2) {
    //       enviar();
    //     } else {
    //       console.log("Senhas nao coincidem");
    //     }
    //   }
    
  return (
    <>
      <Row className="justify-content-center">
        <Col xs="8" sm="6" md="5" lg="4" xl="3">
          <Container>
            <h1 id="titulo">Cadastro</h1>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>E-mail</Form.Label>
                <Form.Control type="email" placeholder="Digite seu e-mail" />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Senha</Form.Label>
                <Form.Control type="password" placeholder="Digite sua senha" 
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label> Confirmar Senha</Form.Label>
                <Form.Control type="password" placeholder="Digite sua senha novamente" 
                />
              </Form.Group>

            </Form>
          </Container>
          <Container style={{textAlign: "center"}}>
              <Button variant="primary" type="submit">
                Salvar
              </Button>
              </Container>
        </Col>
      </Row>
    </>
  );
};
