import React, { useEffect, useState } from 'react';
import axios from 'axios';


const Converter = () => {

    const [currencies, setCurrencies] = useState([]);

    useEffect(() => {
        getCurrencies();
    }, []);

    const getCurrencies = () => {
        axios
            .get("https://api.openrates.io/latest")
            .then(data => setCurrencies(data.data.data))
            .catch(err => {
                console.log(err);
                return null;
            });
    }

    return (
        <div>
            {currencies.length === 0 ? (
                <div>Loading...</div>
            ) : (
                currencies.map((c,k) => {
                    return <div key={k}>{c.rates}</div>
                })
            )}
        </div>
    )
/*
const Converter = () => {

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
                    console.log(`1€ = ${response.data.rates.GBP}£`);
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
                    setResult(result.toFixed(5));
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
            <h2>Currency converter</h2>
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
*/