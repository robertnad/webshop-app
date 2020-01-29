import React, { useReducer } from 'react';
import SearchProduct from './SearchProduct';
import FilterBy from './FilterBy';
import PriceRangeSelector from './PriceRangeSelector';
import CurrencySelection from '../CurrencySelection';
import { filtersReducer } from '../../reducers/filtersReducer';
import FiltersContext from '../../context/filters-context';
import { Collapse, Row, Col } from 'antd';
const { Panel } = Collapse;

const FilterComponent = () => {

    const [filters, dispatchFilters] = useReducer(filtersReducer, []);

    /* DONT NEED THIS CAUSE THERES ONLY ONE KEY (ONE HEADER) ? */
    // const callback = (key) => {
    //     console.log(key);        
    // }

    
    return (
        <FiltersContext.Provider value={{ filters, dispatchFilters }}>
            <Row type="flex" justify="space-between" align="middle">
                <Col xs={{ span: 2, offset: 0 }} lg={{span: 2, offset: 0 }} style={{padding: '10px'}}>
                    <SearchProduct />
                    <Collapse accordion style={{width: '500px'}} >
                        <Panel header="Filter products" key="1">
                            <PriceRangeSelector />
                            <FilterBy />
                        </Panel>
                    </Collapse>  
                </Col>
                <Col xs={{ span: 2, offset: 0 }} lg={{span: 2, offset: 0 }}>
                    <CurrencySelection />
                </Col>
            </Row>

        </FiltersContext.Provider>
    );
};

export default FilterComponent;