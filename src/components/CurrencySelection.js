import React from 'react';
import { Select } from 'antd';

const { Option } = Select;

const handleChange = (value) => {
    console.log(`selected ${value}`);
}

const CurrencySelection = () => {
    return (
        <div>
            <Select defaultValue="USD" style={{ width: 80 }} onChange={handleChange}>
                <Option value="USD">$ USD</Option>
                <Option value="EUR">€ EUR</Option>
                <Option value="GBP">£ GBP</Option>
            </Select>
  </div>

    );
};

export default CurrencySelection;