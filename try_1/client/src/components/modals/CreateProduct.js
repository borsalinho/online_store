import React, { useContext, useState } from "react";
import {Form, Button} from "react-bootstrap";
import Modal from "react-bootstrap/Modal"
import { createProduct } from "../../http/productApi";
import { Context } from "../../index";

const CreateProduct = ({show, onHide}) => {
    const {product} = useContext(Context)
    const [name,setName] = useState('')
    const [price,setPrice] = useState('')
    const [size,setSize] = useState('')
    const [file,setFile] = useState(null)

    const selectFile = e => {
      setFile(e.target.files[0])
    }

    const addProduct = () => {
      const formData = new FormData()
      formData.append('name',name)
      formData.append('price',price)
      formData.append('size',size)
      formData.append('img',file)
      createProduct(formData).then(data => onHide())
    }
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
                value={name}
                onChange={e =>setName(e.target.value)}
                placeholder={"Введите название кросовки"}
              />
              <Form.Control
                value={price}
                onChange={e =>setPrice(Number(e.target.value))}
                className="mt-3"
                placeholder={"Введите стоимость"}
                type="number"
              />
              <Form.Control
                value={size}
                onChange={e =>setSize(e.target.value)}
                className="mt-3"
                placeholder={"Введите размер"}
              />
              <Form.Control
                className="mt-3"
                type="file"
                onChange={selectFile}
              />
          </Form>
        </Modal.Body>
        <Modal.Footer>
            <Button variant="outline-success" onClick={addProduct}>Добавить</Button>
            <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
        </Modal.Footer>
      </Modal>
    );
};

export default CreateProduct