import React, { useEffect, useReducer, useState } from 'react';
import axios from 'axios';
import { productsReducer } from '../reducers/productsReducer';
import { filtersReducer } from '../reducers/filtersReducer';
import FilterComponent from './filterComponents/FilterComponent';
import ProductsList from './ProductsList';
import ProductAddForm from './ProductAddForm';
import ProductsContext from '../context/products-context';
import { Pagination } from 'antd';


const ShoppingPage = () => {

    const [products, dispatchProducts] = useReducer(productsReducer, []);
    const [filters, dispatchFilters] = useReducer(filtersReducer, []);

    /*  CODE FOR PERSISTING DATA TO LOCAL STORAGE AFTER REFRESH  */
    useEffect(() => {
        const products = JSON.parse(localStorage.getItem('products'));
        if (products) {
            // setProducts(products)
            dispatchProducts({ 
                type: 'POPULATE_PRODUCTS',
                products: products
            })
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('products', JSON.stringify(products))
    }, [products]);

    const [rate, setRate] = useState(1);
    const [symbol, setSymbol] = useState('€');

     const getData = async ({currency='EUR'}) => {
        let response = await axios
            .get(`https://api.openrates.io/latest?base=EUR&symbols=${currency}`)
        console.log(response.data.rates[currency]);  
        return response.data.rates[currency];
    }

    const currencyHandler = ({currency='EUR'}) => {
        return products.map((product) => {  
            if (currency === 'EUR') {
                // setRate(1);
                // setSymbol('€');
            } else if (currency === 'USD') {
                // setRate(response.data.rates[currency]);
                // setSymbol('$');
            } else if (currency === 'GBP') {
                // setRate(response.data.rates[currency]);
                // setSymbol('£');
            }
        })
    }

    const highestPrice = Math.max.apply(
        Math, products.map((highest) => {
        return Math.floor(highest.price)+1;
        })
    );
    const selectProducts = (products, 
        {
            searchText='',
            filterBy='dateAdded',
            priceRangeLow=0,
            priceRangeHigh=highestPrice
        }) => {
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
        })
    }

    return (
        <div>
            <ProductsContext.Provider value={{ 
                    products,
                    dispatchProducts,
                    filters,
                    dispatchFilters,
                    selectProducts,
                    currencyHandler
                }}>
                <FilterComponent />
                <h3 style={{display:'flex', justifyContent:'center', padding:'10px'}}>PRODUCTS</h3>
                <ProductAddForm />
                <ProductsList />
                <Pagination style={{display: 'flex', justifyContent: 'center', marginBottom: '30px'}} defaultCurrent={1} total={10} />
            </ProductsContext.Provider>
        </div>
    );
};

export default ShoppingPage;