import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Select } from 'antd';
const { Option } = Select;

// const CurrencySelection = () => {

//     const handleChange = (value) => {
//         console.log(`${value}`);
//     }

//     return (
//         <div>
//             <Select
//                 defaultValue="EUR"
//                 onChange={handleChange}
//                 size='large'
//                 style={{ margin: '5px' }}
//             >
//                 <Option value="EUR">€ EUR</Option>
//                 <Option value="USD">$ USD</Option>
//                 <Option value="GBP">£ GBP</Option>
//             </Select>
//         </div>
//     );
// };

// export default CurrencySelection;


const CurrencySelection = () => {

    const [result, setResult] = useState(null);
    const [fromCurrency, setFromCurrency] = useState('');
    const [toCurrency, setToCurrency] = useState('HRK');
    const [amount, setAmount] = useState(1);
    const [currencies, setCurrencies] = useState([]);

    useEffect(() => {
        axios
            .get("https://api.openrates.io/latest")
            .then(response => {
                const currencyAr = [];
                console.log(currencyAr);
                console.log(response);
                for (const key in response.data.rates) {
                    currencyAr.push(key);
                }
                setCurrencies(currencyAr);

                if (response.data.base === 'EUR') {
                    console.log(`1€=${response.data.rates.GBP}£`);
                }
            })
            .catch(err => {
                console.log("whoops", err);
            })
    }, []);

    const convertHandler = () => {
        if (fromCurrency !== toCurrency) {
            axios
                .get(`https://api.openrates.io/latest?base=${fromCurrency}&symbols=${toCurrency}`)
                .then(response => {
                    const result = amount * response.data.rates[toCurrency];
                    setResult(result.toFixed(2));
                })
                .catch(error => {
                    console.log("whoops", error.message);
                })
        } else {
            setResult('You cant convert the same currency')
        }
    }

    const selectHandler = (e) => {
        if (e.target.name === 'from') {
            setFromCurrency(e.target.value)
        } else if (e.target.name === 'to') {
            setToCurrency(e.target.value)
        }
    }

    return (
        <div>
            <div>
                <input
                    name="amount"
                    type="text"
                    value={amount}
                    onChange={e => setAmount(e.target.value)}
                />
                <select
                    name="from"
                    value={fromCurrency}
                    onChange={e => selectHandler(e)}
                >
                    {currencies.map(cur => (
                        <option key={cur}>{cur}</option>
                    ))}
                </select>
                <select
                    name="to"
                    value={toCurrency}
                    onChange={e => selectHandler(e)}
                >
                    {currencies.map(cur => (
                        <option key={cur}>{cur}</option>
                    ))}
                </select>
                <button onClick={convertHandler}>Convert</button>
                {result && <h3>{result}</h3>}
            </div>
        </div>
    )
}

export default CurrencySelection;