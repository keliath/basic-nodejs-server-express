const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
    res.send('<p>home page</p>');
});

module.exports = router;