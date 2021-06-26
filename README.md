# Just Blog It Server

Welcome to my server!!! Here you can request a number of data which is basically the data of "Blogs" from this server. By calling [The Root API](https://powerful-springs-02476.herokuapp.com/), you can get a simple "Hello World" which is not necessarily useful, but root URL is always important. So, I wanted to make you know that.

## [Visit My Root API](https://powerful-springs-02476.herokuapp.com/)

## My client side code: [https://github.com/Lamisa-zamzam/zamzams-collection](https://github.com/Lamisa-zamzam/zamzams-collection)

## My live site: [https://full-stack-sport-grocery.web.app/](https://full-stack-sport-grocery.web.app/)

Secondly, if you call [The Products API](https://powerful-springs-02476.herokuapp.com/products), you will get the data of several jerseys to be sold in an array. The array contains an object for each jersey and each object contains some properties, namely: \_id, id, product(title of the jersey), price, detail and image(URL to the picture of the jersey). Though they are not real ones, however, that could work great as placeholders.

If you want to get the information of a specific product, you're gonna do that with [https://powerful-springs-02476.herokuapp.com/product/:id](https://powerful-springs-02476.herokuapp.com/product/:id). But wait!!! You have to replace :id with the id of the product you want to get and also this API is private, so you are not going to get the info until you are logged in in My Website [Zamzam's Collection](https://full-stack-sport-grocery.web.app/). Actually, this server was made only for this website, so this website has a power over this server. You can [add product to this server](https://powerful-springs-02476.herokuapp.com/addProduct), [add an order for your chosen jersey](https://powerful-springs-02476.herokuapp.com/addOrder) and even [delete](https://powerful-springs-02476.herokuapp.com/deleteProduct/:_id) or [Edit](https://powerful-springs-02476.herokuapp.com/editProduct/:product) a product form here using that website. But again, you have to be logged in in that website and have the id of the specific product in the cases you need it.

My project includes:

1.  [Node.js](https://nodejs.org/en/),
2.  [MongoDB](https://www.mongodb.com/),
3.  [Express.js](https://expressjs.com/),
4.  [Cross Origin Resource Sharing (CORS)](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) ,
5.  [Environment Variables](https://www.npmjs.com/package/dotenv) and
6.  [Heroku Deployment](https://devcenter.heroku.com/categories/reference).

### Roadmap

=> Considering adding Mongoose

### Contributing

Pull requests are welcome. For major changes, open an issue first and let's discuss what you want to change.
