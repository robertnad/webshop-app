import React, { useContext } from 'react';
import Product from './Product';
import ProductsContext from '../context/products-context';
import selectProducts from '../selectors/selectProducts';

const ProductsList = () => {

    const { products, filters } = useContext(ProductsContext);

    /* get products filtered by text */
    const productsFiltered = selectProducts(products, filters);

    return (
        <div>
        {products.length === 0 ? (
            <h2 style={{display:'flex', justifyContent:'center', padding:'10px'}}>No products found</h2>
        ) : (
            productsFiltered.map((product) => (
                <Product key={product.id} product={product} />
            ))
        )}
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

// const products = [
//     {
//     name:'Pila',price:5.99,discount:0,manufacturer:'Viking',description:'Za drvo i metal'
//     },
//     {
//     name:'Kosilica',price:250.00,discount:10,manufacturer:'Stihl',description:'3kW motor'
//     },
//     {
//     name:'Busilica',price:120.00,discount:20,manufacturer:'Skil',description:'250W sa svrdlima'
//     }
// ];