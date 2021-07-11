const path = require("path");

const express = require('express');

const rootDir = require('../utils/path');
const adminData = require('./admin');

const router = express.Router();

router.get('/', (req, res, next) => {
    // console.log('shop.js:', adminData.products);
    // res.sendFile(path.join(rootDir, 'views', 'shop.html'));  //render view without template engine
    const products = adminData.products;
    res.render('shop', {
        prods: products,
        pageTitle: 'Shop',
        path: '/',
        productCss: true, //hbs
        activeShop: true //hbs
    });
});

module.exports = router;