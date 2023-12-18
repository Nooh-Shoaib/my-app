export const generateEndpoint = (id) => {
        return id === 'products-all'
                ? 'allproducts/data/' + id
                : id === 'cbd-packaging'
                        ? 'catalog/data/' + id
                        : 'products/products/' + id;
};
