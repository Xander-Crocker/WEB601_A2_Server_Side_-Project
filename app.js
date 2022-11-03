const express = require('express')
const app = express()
const port = 3000
app.set('view engine', 'ejs')

// mock data displayed on pages
const posts = [
    {title: 'Title 1', body: 'Body 1' },
    {title: 'Title 2', body: 'Body 2' },
    {title: 'Title 3', body: 'Body 3' },
    {title: 'Title 4', body: 'Body 4' },
]
// mock user
const user = {
    firstName: 'Xander',
    lastName: 'Crocker',
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
app.get('/cart', (req, res) => {
    res.render('pages/cart', {
        user,
        title: "Cart"
    })
})

// start server
app.listen(port, () => {
    console.log(`App listening at port ${port}`)
})

// Cart functionality

// function selectLine() {
//     var productLine = document.getElementById("mySelect").value;
//     location.href = "?productLine=" + productLine;
// }