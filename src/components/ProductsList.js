import React, { useContext } from 'react';
import Product from './Product';
import ProductsContext from '../context/products-context';

const ProductsList = () => {

    const { products } = useContext(ProductsContext);

    return (
        <div>
            {products.map((product) => (
            <Product key={product.id} product={product} />
            ))}
        </div>
    )
}

export default ProductsList;
