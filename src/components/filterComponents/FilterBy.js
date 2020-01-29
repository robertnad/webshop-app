import React, { useState, /*useReducer*/ } from 'react';
// import { filtersReducer } from '../../reducers/filtersReducer';
import { Radio } from 'antd';

const FilterBy = () => {

    // const [filters, dispatchFilters] = useReducer(filtersReducer, []);

    const [value, setValue] = useState();

    const onChange = (e) => {
        console.log(`${e.target.value}`);
        setValue(e.target.value);
    }

    const radioStyle = {
        display: 'block',
        height: '30px',
        lineHeight: '30px',
      };

    return(
        <div>
            <p>Filter by:</p>
            <Radio.Group onChange={onChange} value={value}>
                <Radio style={radioStyle} value={'priceAscending'}>
                    Price ascending
                </Radio>
                <Radio style={radioStyle} value={'priceDescending'}>
                    Price descending
                </Radio>
                <Radio style={radioStyle} value={'byManufacturer'}>
                    Manufacturer
                </Radio>
                <Radio style={radioStyle} value={'newest'}>
                    Newest
                </Radio>
            </Radio.Group>
        </div>
    );
}

export default FilterBy;