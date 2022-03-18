import React from 'react';
import { Card } from 'react-bootstrap';
import ReactModal from '../ReactModal/ReactModal';
import './SingleProduct.css'

const SingleProduct = (props) => {
    // const { product } = props;
    const { title, id, image, price, description } = props.product;
    // console.log(id, title)
    return (
        <div className="col-md-4 col-sm-6 col-12">
            <Card className="shadow p-3">
                <Card.Img className="w-50 product-image m-auto" variant="top" src={image} />
                <Card.Body>
                    <Card.Title>{title.slice(0, 20)}</Card.Title>
                    <h4><span>$ </span>{price}</h4>
                    <Card.Text>
                        {description.slice(0, 50)}
                    </Card.Text>
                    <button onClick={props.getCount} className="ms-2 btn btn-primary">Add to Cart</button>
                    <button className="ms-2 btn btn-danger">Delete</button>
                    <button className="ms-2 btn "><ReactModal product={props.product}></ReactModal></button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default SingleProduct;