import React, { useEffect, useState } from 'react';
import SingleProduct from '../SingleProduct/SingleProduct';
import './AllProducts.css'



const AllProducts = (props) => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <div>

            <div className="container mt-5">
                <div className="row g-3 d-flex">
                    {
                        // products.map((product, index) => <SingleProduct key={index}></SingleProduct>)
                        products.map(product => <SingleProduct getCount={props.getCount} key={product.id} product={product}></SingleProduct>)

                    }
                </div>
            </div>

        </div>
    );
};

export default AllProducts;