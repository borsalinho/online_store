import React from "react";
import {Form, Button} from "react-bootstrap";
import Modal from "react-bootstrap/Modal"

const CreateProduct = ({show, onHide}) => {
    return (
        <Modal
        show={show}
        onHide={onHide}
        size="lg"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Добавить новую кросовку
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
              <Form.Control
              placeholder={"Введите название кросовки"}
              />
          </Form>
        </Modal.Body>
        <Modal.Footer>
            <Button variant="outline-success" onClick={onHide}>Добавлять</Button>
            <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
        </Modal.Footer>
      </Modal>
    );
};

export default CreateProduct