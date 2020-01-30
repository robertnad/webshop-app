/*
-actions:
ADD PRODUCT (ADMIN)
EDIT PRODUCT (ADMIN)
*EDIT PRODUCT DISCOUNT (ADMIN)
DELETE PRODUCT (ADMIN)
SEARCH PRODUCT (FILTER BY TEXT)
FILTER BY PRICE
FILTER BY PRICE RANGE
FILTER BY DISCOUNT
FILTER BY DATE ADDED
FILTER BY MANUFACTURER
FILTER BY POPULARITY
ADD TO CART
REMOVE FROM CART
ADD TO WISHLIST
REMOVE FROM WISHLIST
*/

const filtersReducerDefaultState = {
    filters: {
        searchText: '',
        filterBy: '', //price,discount,manufacturer,dateAdded,popular
        priceRangeLowerLimit: undefined,
        priceRangeHigherLimit: undefined
    }
}

export const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        case 'SEARCH_PRODUCT':
            return {
                ...state,
                searchText: action.searchText
            };
        case 'FILTER_BY_PRICE':
            return {
                ...state,
                filterBy: 'price'
            };
        case 'FILTER_BY_PRICE_RANGE_LOW':
            return {
                ...state,
                priceRangeLowerLimit: action.priceRangeLowerLimit
            }
        case 'FILTER_BY_PRICE_RANGE_HIGH':
            return {
                ...state,
                priceRangeHigherLimit: action.priceRangeHigherLimit
            }
        default:
            return state;
    }
}