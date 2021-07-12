const path = require("path");

const express = require('express');

const app = express();
// const expressHbr = require('express-handlebars');

// app.engine('hbs', expressHbr({ layoutsDir: 'views/layouts/', defaultLayout: 'main-layout', extname: 'hbs' })); //handlebars template engine --- views/layouts/ its the dafault value

// app.set('view engine', 'pug'); 
// app.set('view engine', 'hbs');
app.set('view engine', 'ejs');
app.set('views', 'views'); //type views it wouldnt necessary because its already the deafult value

const adminData = require('./routes/admin');
const shopRoute = require('./routes/shop');
const exp = require("constants");

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
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminData.routes);
app.use(shopRoute);

app.use((req, res, next) => {
    // res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
    res.status(404).render('404', { pageTitle: '404 error' });
});


app.listen(3000);