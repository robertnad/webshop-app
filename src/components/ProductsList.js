import React, { useContext } from 'react';
import Product from './Product';
import ProductsContext from '../context/products-context';
// import selectProducts from '../selectors/selectProducts';

const ProductsList = () => {

    const { products, filters } = useContext(ProductsContext);

    const selectProducts = () => {
        return products.filter((product) => {
            const nameMatch = product.name.toLowerCase().includes(searchText().toLowerCase());
            return nameMatch;
        })
    }

    // get products filtered by text
    const productsFiltered = selectProducts(products, filters);

    return (
        <div>
            {products.length === 0 ? (
                <p>No products</p>
            ) : (
                productsFiltered.map((product) => (
                    <Product key={product.id} product={product} />
            ))
        )}
        </div>
    )
}

export default ProductsList;

// products.map((product) => (
//     <Product key={product.id} product={product} />
