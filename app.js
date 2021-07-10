const express = require('express');

const app = express();

const adminRoute = require('./routes/admin');
const shopRoute = require('./routes/shop');

//middleware
// app.use((req, res, next) => {
//     console.log('middleware');
//     next(); //allows te request continue to the next middleware in line
// });


// Browsers will by default try to request /favicon.ico from the root of a hostname, in order to show an icon in the browser tab.
// If you want to avoid this request returning a 404, you can either:
app.get('/favicon.ico', (req, res) => res.status(204)); //with this the console with not print twice


//updated bodyParser for parse body request
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

app.use(adminRoute);
app.use(shopRoute);


app.listen(3000);