const require = require('postman-request');

const baseURL = 'http//localhost:3001';

const getAllProducts = (callback) => {
    request(`${baseUrl}/products`, (err, res) => {
        if(err) return callback(err, undefined);
        const allProducts = res.body;
        return callback(undefined, allProducts)

    });

}

const getSingleProduct = (callback) => {
    request(`${baseUrl}/products/123`, (err,res) => {
        if(err) return callback(err,undefined);
        const singleProduct = JSON.parse(res.body);
        return callback (undefined, singleProduct)
    });
};

module.exports = {getAllProducts, getSingleProduct}