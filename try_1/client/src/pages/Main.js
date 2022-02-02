import React, { useContext, useEffect, useState } from 'react';
import {Container,Button} from 'react-bootstrap'
import ProductList from '../components/productList';
import CreateProduct from '../components/modals/CreateProduct';
import { Context } from '../index';
import { observer } from 'mobx-react-lite'
import { fetchProducts } from '../http/productApi';

const Main = observer(() => {
    const {product} = useContext(Context)
    const [productVisible, setProductVisible] = useState(false)

    useEffect(()=>{
        fetchProducts().then(data =>product.setProducts(data))
    })

    return (
        <Container>
            <Button 
                variant={"outline-dark"}
                className='my-2'
                onClick={()=>setProductVisible(true)}
            >
                Добавить кросовку
            </Button>
            <ProductList/>
            <CreateProduct 
                show={productVisible} 
                onHide={() => setProductVisible(false)}
            />
        </Container>
    );
});

export default Main;