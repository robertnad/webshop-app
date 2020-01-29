import React, { useReducer, useState } from 'react';
import { filtersReducer } from '../../reducers/filtersReducer';
import { Input } from 'antd';

const { Search } = Input;

const SearchProduct = () => {

    const { dispatchFilters } = useReducer(filtersReducer, []);

    const [searchText, setSearchText] = useState('');

    const searchProduct = (e) => {
        e.preventDefault();
        // setSearchText(searchText);
        dispatchFilters({
            type: 'SEARCH_PRODUCT',
            searchText
        });
        console.log(searchText);
        setSearchText(searchText);
    }

    return (
        <div>
            <Search
                style={{ width: 500, height: '50px', marginBottom: '10px' }}
                type="text"
                value={searchText}
                placeholder="Search products"
                onChange={(e) => setSearchText(e.target.value)}
                onSearch={searchProduct}
            />
        </div>
    );
}

export default SearchProduct;