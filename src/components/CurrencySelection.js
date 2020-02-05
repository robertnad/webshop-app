import React, { useState, useEffect } from 'react';
import { Select } from 'antd';
const { Option } = Select;

const CurrencySelection = () => {

    const [currency, setCurrency] = useState('USD');
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [rates, setRates] = useState({});

    useEffect(() => {
        fetch("https://api.exchangeratesapi.io/latest?base=USD&symbols=EUR,GBP")
            .then(res => res.json())
            .then(
                result => {
                    setIsLoaded(true);
                    setRates(result.rates);
                },
                error => {
                    setIsLoaded(true);
                    setError(error);
                }
            );
    }, []);

    const handleChange = (value) => {
        
        console.log(`${value}`);
    }

    return (
        <div>
            <Select
                defaultValue="EUR"
                onChange={handleChange}
                size='large'
                style={{ margin: '5px' }}
            >
                <Option value="EUR">€ EUR</Option>
                <Option value="USD">$ USD</Option>
                <Option value="GBP">£ GBP</Option>
            </Select>
        </div>
    );
};

export default CurrencySelection;