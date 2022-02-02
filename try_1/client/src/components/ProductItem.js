import React from 'react';
import {Card,Col,Image} from 'react-bootstrap';

const ProductItem = ({product}) =>{
    return (
        <Col md={4} className={"mt-3"}>
            <Card style={{width: 150, cursor:'pointer'}} border={"light"}>
                <Image
                    width={150}
                    height={150}
                    src={process.env.REACT_APP_API_URL + product.img}
                />
                <div>
                    <div>{product.name}</div>
                    <div>Цена: {product.price}</div>
                    <div>Размер: {product.size}</div>
                </div>
            </Card>
        </Col>
    );
};

export default ProductItem;