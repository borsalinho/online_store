import React, { useState } from 'react';
import {Container,Button} from 'react-bootstrap'
import ProductList from '../components/ProductList';
import CreateProduct from '../components/modals/CreateProduct'

const Main = () => {
    const [productVisible, setProductVisible] = useState(false)
    return (
        <Container>
            <Button variant={"outline-dark"} className='my-2'
            onClick={()=>setProductVisible(true)}
            >Добавить кросовку</Button>
            <ProductList/>
            <CreateProduct show={productVisible} onHide={() => setProductVisible(false)}/>
        </Container>
    );
};

export default Main;