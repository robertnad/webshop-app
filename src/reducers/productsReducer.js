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
FILTER BY POPULAR
ADD TO CART
REMOVE FROM CART
ADD TO WISHLIST
REMOVE FROM WISHLIST
*/

export const productsReducer = (state, action) => {
    switch (action.type) {
        case 'POPULATE_PRODUCTS':
            return action.products;
        case 'ADD_PRODUCT':
            return [
                ...state,
                {
                    id: action.id,
                    name: action.name,
                    price: action.price,
                    discount: action.discount,
                    manufacturer: action.manufacturer,
                    dateAdded: action.dateAdded,
                    description: action.description
                }
            ];
        case 'REMOVE_PRODUCT':
            return state.filter((product) => product.id !== action.id );
        case 'EDIT_PRODUCT':
            return state.map((product) => {
                if (product.id === action.id) {
                    return {
                        ...product,
                        name: action.name,
                        price: action.price,
                        discount: action.discount,
                        manufacturer: action.manufacturer,
                        // dateAdded: action.dateAdded,
                        description: action.description
                        // ...action.updates
                    } 
                } else {
                    return product;
                }
            })
        default:
            return state;
    }
}

/*
const demoState = {
    products: [{
        id: '',
        name: '',
        manufacturer: '',
        description: '',
        price: undefined,
        discount: 0, 
        addedDate: undefined,
    }],
    filters: {
        searchText: '',
        filterBy: '', //price,discount,manufacturer,dateAdded,popular
        priceRangeLowerLimit: undefined,
        priceRangeHigherLimit: undefined
    }
}
*/