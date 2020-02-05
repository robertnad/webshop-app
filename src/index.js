import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
// import 'normalize.css/normalize.css';
// import './styles/styles.scss';
import 'antd/dist/antd.css';
import * as serviceWorker from './serviceWorker';

// import { useEffect, useState } from 'react';
// import axios from 'axios';

// /* Link to
// https://medium.com/better-programming/how-to-use-async-await-with-axios-in-react-e07daac2905f
// */
// const Converter = () => {

//     const [currencies, setCurrencies] = useState([]);

//     useEffect(() => {
//         getCurrencies();
//     }, []);

//     const getCurrencies = () => {
//         axios
//             .get("https://api.openrates.io/latest")
//             .then(data => setCurrencies(data.data.data))
//             .catch(err => {
//                 console.log(err);
//                 return null;
//             });
//     }

//     return (
//         <div>
//             {currencies.length === 0 ? (
//                 <div>Loading...</div>
//             ) : (
//                 currencies.map((c,k) => {
//                     return <div key={k}>{c.rates}</div>
//                 })
//             )}
//         </div>
//     )
// }

// ReactDOM.render(<Converter />, document.getElementById('root'));

ReactDOM.render(<AppRouter />, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();