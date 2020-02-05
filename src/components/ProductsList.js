import React, { useContext } from 'react';
import Product from './Product';
import ProductsContext from '../context/products-context';
// import selectProducts from '../selectors/selectProducts';

const ProductsList = () => {

    const { products, filters } = useContext(ProductsContext);

    const highestPrice = Math.max.apply(
        Math, products.map((highest) => {
        return Math.floor(highest.price)+1;
        })
    );

    // const { searchText='', filterBy, priceRangeLow, priceRangeHigh=highestPrice } = filters;

    // const productsFiltered = selectProducts(products, {
    //     searchText:'',
    //     filterBy:'price',
    //     priceRangeLow:0,
    //     priceRangeHigh:highestPrice
    // });

    /* copied this from selector folder */
    const selectProducts = (products, 
            {searchText='', filterBy='dateAdded', priceRangeLow=0, priceRangeHigh=highestPrice}) => {
        return products.filter((product) => {
            const nameMatch = product.name.toLowerCase().includes(searchText.toLowerCase());
            const priceMatch = product.price >= priceRangeLow && product.price <= priceRangeHigh;
            return nameMatch && priceMatch;
        }).sort((a, b) => {
            if (filterBy === 'priceDescending') {
                return (a.price*100) < (b.price*100) ? 1 : -1;
            } else if (filterBy === 'priceAscending') {
                return (a.price*100) < (b.price*100) ? -1 : 1;
            } else if (filterBy === 'dateAdded') {
                return a.createdAt < b.createdAt ? 1 : -1;
            } else if (filterBy === 'discount') {
                return a.discount < b.discount ? 1 : -1;
            }
            return 1;
        });
    }

    const productsFiltered = selectProducts(products, filters);

    return (
        <div>
        {products.length === 0 ? (
            <h2 style={{display:'flex', justifyContent:'center', padding:'10px'}}>
                No products found
            </h2>
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