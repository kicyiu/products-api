const mongoose = require('mongoose');
const Product = require('../models/product');

const findProducts = async function (req, res) {
    const { text } = req.params;
    let isPalindrono = true;

    if (text.length >= 3) {
        for (let i = 0; i < text.length/2; i++) {
            if (text[i] != text[text.length - i -1]) {
                isPalindrono = false;
            }
        }
    } else {
        isPalindrono = false;
    }

    const criteria = {};
    if (isNaN(text)) {
        criteria.$or = [{ brand: new RegExp(text, "g") }, { description: new RegExp(text, "g") }];
    } else {
        criteria.id = text;
    }

    const products = await Product.find(criteria);
    try {
        if (products.length > 0) {
            if (isPalindrono) {
                palindronoProducts = products.map(product => {
                    product.price = product.price / 2;
                    return product;
                })
                res.json({
                    statusCode: 200,
                    data: {
                        products: palindronoProducts,
                        palindrono: true
                    }
                });
            } else {
                console.log('el texto no es palindrono');
                res.json({
                    statusCode: 200,
                    data: {
                        products,
                        palindrono: false
                    }
                });
            }


        }
        else {
            res.json({
                statusCode: 404,
                meesage: 'Products not found'
            })
        }
    }
    catch (e) {
        console.error('findPalindronoProducts Error: ', e);
    }

}


module.exports = {
    findProducts
}