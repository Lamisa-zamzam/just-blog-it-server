# Just Blog It Server

Welcome to my server!!! This server is made for my MERN stack website [Just blog It](https://mighty-inlet-09591.herokuapp.com/).

Here you can request a number of data which is basically the data of "Blogs" from this server. By calling [The Root API](https://frozen-coast-84516.herokuapp.com/), you can get a simple "Hello World" which is not necessarily useful, but root URL is always important. So, I wanted to make you know that.

## [Visit My Root API: https://frozen-coast-84516.herokuapp.com/](https://frozen-coast-84516.herokuapp.com/)

## My client side code: [https://github.com/Lamisa-zamzam/just-blog-it/](https://github.com/Lamisa-zamzam/just-blog-it/)

## My live site: [https://mighty-inlet-09591.herokuapp.com/](https://mighty-inlet-09591.herokuapp.com/)

Secondly, if you call [The Blogs API](https://frozen-coast-84516.herokuapp.com/blogs), you will get the data of several blogs published in my website. The array contains an object for each blog and each object contains some properties, namely: \_id, title(title of the jersey), content (body) and cover image(cover image of the blog).

If you want to get the information of a specific blog, you're gonna do that with [https://frozen-coast-84516.herokuapp.com/blog/:id](https://frozen-coast-84516.herokuapp.com/blog/:id). But wait!!! You have to replace :id with the id of the blog you want. You can [add blog to the DB](https://frozen-coast-84516.herokuapp.com/addBlog) and [delete](https://frozen-coast-84516.herokuapp.com/deleteBlog/:_id) a blog form here using my website.

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
