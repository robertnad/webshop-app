import React, { useReducer, useState } from 'react';
import { filtersReducer } from '../../reducers/filtersReducer';
import { Input } from 'antd';

const { Search } = Input;

const SearchProduct = () => {

    const { dispatchFilters } = useReducer(filtersReducer, []);

    const [searchText, setSearchText] = useState('');

    const searchProduct = (e) => {
        // e.preventDefault();
        const text = setSearchText(e.target.value);
        dispatchFilters({
            type: 'SEARCH_PRODUCT',
            searchText: text
        });
        console.log(text);
        // setSearchText(searchText);
    }

    return (
        <div>
            <Search
                style={{ width: 500, height: '50px', marginBottom: '10px' }}
                type="text"
                value={searchText}
                placeholder="Search products"
                // onChange={searchProduct}
                onSearch={searchProduct}
            />
        </div>
    );
}

export default SearchProduct;

