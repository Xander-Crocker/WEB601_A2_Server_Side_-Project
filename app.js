const express = require('express')
const app = express()
const port = 3000
const cors = require("cors");
const cookieSession = require("cookie-session");
const db = require("./app/models");
const Role = db.role;

app.set('view engine', 'ejs')
app.use(cors());

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.use(
    cookieSession({
        name: "web601_A2",
        secret: "COOKIE_SECRET", // used as secret environment variable
        httpOnly: true
    })
);

// mock data displayed on pages
const posts = [
    {title: 'Title 1', body: 'Body 1' },
    {title: 'Title 2', body: 'Body 2' },
    {title: 'Title 3', body: 'Body 3' },
    {title: 'Title 4', body: 'Body 4' },
]

// Mock user
const user = {
    firstName: '',
    lastName: ''
}

// get pages
app.get('/', (req, res) => {
    res.render('pages/index', {
        user,
        title: "Home Page"
    })
})
app.get('/products', (req, res) => {
    res.render('pages/products', {
        products: posts,
        title: "Products"
    })
})
app.get('/about', (req, res) => {
    res.render('pages/about', {
        user,
        title: "About"
    })
})
app.get('/cart', (req, res) => {
    res.render('pages/cart', {
        user,
        title: "Cart"
    })
})
app.get('/login', (req, res) => {
    res.render('pages/login', {
        title: "Login"
    })
})
app.get('/signup', (req, res) => {
    res.render('pages/signup', {
        title: "Signup"
    })
})

// Cart functionality

// function selectLine() {
//     var productLine = document.getElementById("mySelect").value;
//     location.href = "?productLine=" + productLine;
// }

// database

db.sequelize.sync({force: true}).then(() => {
    console.log('Drop and Resync Db');
    initial();
});

function initial() {
    Role.create({
        id: 1,
        name: "user"
    });
    
    Role.create({
        id: 2,
        name: "moderator"
    });
    
    Role.create({
        id: 3,
        name: "admin"
    });
}

// routes
require('./app/routes/auth.routes')(app);
require('./app/routes/user.routes')(app);

// start server
app.listen(port, () => {
    console.log(`App listening at port ${port}`)
})