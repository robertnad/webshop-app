import React, { useEffect, useReducer } from 'react';
import { productsReducer } from '../reducers/productsReducer';
import { filtersReducer } from '../reducers/filtersReducer';
import FilterComponent from './filterComponents/FilterComponent';
import ProductsList from './ProductsList';
import ProductAddForm from './ProductAddForm';
import ProductsContext from '../context/products-context';
import { Pagination } from 'antd';


const ShoppingPage = () => {

    // const [products, setProducts] = useState([]);
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

    return (
        <div>
            <ProductsContext.Provider value={{ products, dispatchProducts, filters, dispatchFilters }}>
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