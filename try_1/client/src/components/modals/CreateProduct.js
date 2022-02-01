import React, { useContext } from "react";
import {Form, Button} from "react-bootstrap";
import Modal from "react-bootstrap/Modal"
import { Context } from "../../index";

const CreateProduct = ({show, onHide}) => {
    const {product} = useContext(Context)

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
              <Form.Control
              className="mt-3"
              placeholder={"Введите стоимость"}
              type="number"
              />
              <Form.Control
              className="mt-3"
              placeholder={"Введите размер"}
              />
              <Form.Control
              className="mt-3"
              type="file"
              />
          </Form>
          <hr/>
          
        </Modal.Body>
        <Modal.Footer>
            <Button variant="outline-success" onClick={onHide}>Добавить</Button>
            <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
        </Modal.Footer>
      </Modal>
    );
};

export default CreateProduct