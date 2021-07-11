const path = require('path');

const express = require('express');

const rootDir = require('../utils/path');

const router = express.Router();

const products = []; //share request in server across all users

router.get('/add-product', (req, res, next) => {
    // res.sendFile(path.join(rootDir, "views", 'add-product.html'));

    res.render('add-product', {
        pageTitle: "add-product",
        path: "/admin/add-product"
    });
});

//use post or get (or put, patch) to trigger the middleware when only post or get data request
router.post('/add-product', (req, res, next) => {
    products.push({
        title: req.body.title
    });
    res.redirect('/');
});

exports.routes = router;
exports.products = products;