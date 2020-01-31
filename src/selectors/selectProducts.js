const selectProducts = (products, filters) => {
    return products.filter((product) => {
        
        const nameMatch = product.name.toLowerCase().includes(searchText.toLowerCase());

        return nameMatch;
    })
}

export default selectProducts;