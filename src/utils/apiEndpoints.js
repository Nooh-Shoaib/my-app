export const generateEndpoint = (id) => {
        return id === 'products-all'
                ? 'allproducts/data/' + id
                : id === 'cbd-packaging'
                        ? 'catalog/cbdData/' + id
                        : 'products/products/' + id;
};
