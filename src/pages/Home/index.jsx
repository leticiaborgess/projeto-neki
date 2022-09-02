import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import { useState } from "react";
import { Container } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export const Home = () => {
  const [id, setId] = useState("");

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const setData = (id) => {
    setId(id);
    {
      handleShow();
    }
  };
  return (
    <>
      <Row className="justify-content-center">
        <Col xs="8" sm="6" md="5" lg="4" xl="3">
          <Container style={{ textAlign: "center" }}>
            <h1 id="titulo">Home</h1>
            <Button
              variant="primary"
              type="submit"
              onClick={() => handleShow()}
            >
              + Adicionar Skill
            </Button>
            <br />
          </Container>
        </Col>
      </Row>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Adicionar Skill</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Label>Selecionar Skill</Form.Label>
            <Form.Select
              aria-label="Default select example"
              // onChange={(e) =>
              //   setDataProduto({
              //     ...dataProduto,
              //     categoria: e.target.value,
              //   })
              // }
              // value={dataProduto.categoria}
            >
              <option value="">Selecione</option>
              <option>ahiduhas</option>
              {/* {categorias.map((categoria, i) => {
                      return (
                        <option key={i} value={categoria.nome}>
                          {categoria?.nome}
                        </option> */}
              {/* ); */}
              {/* })} */}
            </Form.Select>
            <Form.Group className="mb-3">
              <Form.Label>Descrição</Form.Label>
              <Form.Control
                placeholder="Descrição da Skill"
                as="textarea"
                rows={3}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Level</Form.Label>
              <Form.Control type="number" placeholder="Level da Skill" autoFocus />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Fechar
          </Button>
          <Button variant="success" type="submit" onClick={handleClose}>
            Salvar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
