import React, {useState, useContext } from 'react';
import ProductsContext from '../context/products-context'
// import axios from 'axios';
import { Select } from 'antd';
const { Option } = Select;

const CurrencySelection = () => {

    const { dispatchFilters } = useContext(ProductsContext);

    const [value, /*setValue*/] = useState('EUR');

    const onChange = (value) => {
        dispatchFilters({
            type: 'SET_CURRENCY',
            currency: value
        });
        console.log(value);
        // getData(value);
    }

    // const getData = async (value) => {
    //     let response = await axios
    //         .get(`https://api.openrates.io/latest?base=EUR&symbols=${value}`)
    //     console.log(response.data.rates[value]);    
    // }

    return (
        <div>
            <Select
                defaultValue={value}
                onChange={onChange}
                size='large'
                style={{ margin: '5px' }}
            >
                <Option value='EUR'>€ EUR</Option>
                <Option value='USD'>$ USD</Option>
                <Option value='GBP'>£ GBP</Option>
            </Select>
        </div>
    );
}

export default CurrencySelection;


// const CurrencySelection = () => {

//     const [result, setResult] = useState(null);
//     const [fromCurrency, setFromCurrency] = useState('GBP');
//     const [toCurrency, setToCurrency] = useState('HRK');
//     const [amount, setAmount] = useState(1);
//     const [currencies, setCurrencies] = useState([]);

//     useEffect(() => {
//         getData();
//     }, []);

//     const getData = async () => {
//         let response = await axios
//             .get("https://api.openrates.io/latest?base=CAD")
//         const currencyAr = [];
//         for (const key in response.data.rates) {
//             currencyAr.push(key);
//     }
//     setCurrencies(currencyAr);
//     console.log(response.data);    
//     }

//     const convertHandler = async () => {
//         if (fromCurrency !== toCurrency) {
//             let response = await axios
//                 .get(`https://api.openrates.io/latest?base=${fromCurrency}&symbols=${toCurrency}`)
//             const result = amount * response.data.rates[toCurrency];
//             setResult(result.toFixed(2));
//         } else {
//             setResult('You cant convert the same currency')
//         }
//     }

//     const selectHandler = (e) => {
//         if (e.target.name === 'from') {
//             setFromCurrency(e.target.value)
//         } else if (e.target.name === 'to') {
//             setToCurrency(e.target.value)
//         }
//     }

//     return (
//         <div>
//             <div>
//                 <input
//                     name="amount"
//                     type="text"
//                     value={amount}
//                     onChange={e => setAmount(e.target.value)}
//                 />
//                 <select
//                     name="from"
//                     value={fromCurrency}
//                     onChange={e => selectHandler(e)}
//                 >
//                     {currencies.map(cur => (
//                         <option key={cur}>{cur}</option>
//                     ))}
//                 </select>
//                 <select
//                     name="to"
//                     value={toCurrency}
//                     onChange={e => selectHandler(e)}
//                 >
//                     {currencies.map(cur => (
//                         <option key={cur}>{cur}</option>
//                     ))}
//                 </select>
//                 <button onClick={convertHandler}>Convert</button>
//                 {result && <h3>{result}</h3>}
//             </div>
//         </div>
//     )
// }

// export default CurrencySelection;