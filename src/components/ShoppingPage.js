import React, { useEffect, useReducer } from 'react';
import { productsReducer } from '../reducers/productsReducer';
import MainFilter from './filterComponents/MainFilter';
import ProductsList from './ProductsList';
import ProductAddForm from './ProductAddForm';
import ProductsContext from '../context/products-context';
import { Pagination } from 'antd';


const ShoppingPage = () => {

    // const [products, setProducts] = useState([]);
    const [products, dispatch] = useReducer(productsReducer, []);

    /*  CODE FOR PERSISTING DATA TO LOCAL STORAGE AFTER REFRESH  */
    useEffect(() => {
        const products = JSON.parse(localStorage.getItem('products'));
        if (products) {
            // setProducts(products)
            dispatch({ 
                type: 'POPULATE_PRODUCTS',
                products: products
            })
        }
    }, []);
    useEffect(() => {
        localStorage.setItem('products', JSON.stringify(products))
    }, [products]);

    return (
        <div>
            <MainFilter/>
            <h3>PRODUCTS</h3>
            <ProductsContext.Provider value={{ products, dispatch }}>
                <ProductAddForm />
                <ProductsList />
                <Pagination style={{display: 'flex', justifyContent: 'center', marginBottom: '30px'}} defaultCurrent={1} total={10} />
            </ProductsContext.Provider>
        </div>
    );
};

export default ShoppingPage;