import React, { useContext } from 'react';
import Product from './Product';
import ProductsContext from '../context/products-context';
// import selectProducts from '../selectors/selectProducts';

const ProductsList = () => {

    const { products/*, filters*/ } = useContext(ProductsContext);

    /* get products filtered by text */
    // const productsFiltered = selectProducts(products, filters);

    return (
        <div>
        {
            products.map((product) => (
                <Product key={product.id} product={product} />
            ))
        }
        </div>
    )
}

export default ProductsList;

// {products.length === 0 ? (
//     <p>No products</p>
// ) : (
//     productsFiltered.map((product) => (
//         <Product key={product.id} product={product} />
//     ))
// )}


// {
//     products.map((product) => (
//     <Product key={product.id} product={product} />
//     ))
// }