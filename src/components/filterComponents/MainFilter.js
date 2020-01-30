import React from 'react';
import SearchProduct from './SearchProduct';
import FilterBy from './FilterBy';
import PriceRangeSelector from './PriceRangeSelector';
import CurrencySelection from '../CurrencySelection';
import { Collapse, Row, Col } from 'antd';
const { Panel } = Collapse;

const FilterComponent = () => {

    /* DONT NEED THIS CAUSE THERES ONLY ONE KEY (ONE HEADER) ? */
    // const callback = (key) => {
    //     console.log(key);        
    // }

    
    return (
        <div>
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
        </div>
    );
};

export default FilterComponent;