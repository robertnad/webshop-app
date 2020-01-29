/*
-set currency from dropdown
-needs an api that will take current exchange rates
*/


export const currencyReducer = (state, action) => {
    switch (action.type) {
        case 'SET_CURRENCY':
            return action.currency;
        default:
            return state;
    }
}

/*
const demoState = {
    setCurrency: 'USD' //EUR,GBP
}
*/