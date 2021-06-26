// express app
const express = require("express");
const app = express();
// Cross origin resource sharing
const cors = require("cors");
// Parsing mongoDB object ID
const ObjectId = require("mongodb").ObjectID;
// .env vars
require("dotenv").config();

// initializing mongodb
const MongoClient = require("mongodb").MongoClient;
const uri = `mongodb+srv://${process.env.USER}:${process.env.PASS}@cluster0.hwuiv.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;
const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// Using cors and body parser to read from req.body
app.use(cors());
app.use(express.json());

// Connecting mongo client
client.connect((err) => {
    console.log("Mongo is here");

    // Defining the collections
    // Blogs
    const blogsCollection = client.db(process.env.DB_NAME).collection("blogs");
    // Admins
    const adminCollection = client.db(process.env.DB_NAME).collection("admins");

    // adding blog to blog collection
    app.post("/addBlog", (req, res) => {
        // req.body sends a title, content and cover image for the blog
        blogsCollection.insertOne(req.body).then((result) => {
            res.send(result.insertedCount > 0);
        });
    });

    // Adding an admin to the admin collection
    app.post("/makeAdmin", (req, res) => {
        // req.body sends an email and a password
        adminCollection.insertOne(req.body).then((result) => {
            res.send(result.insertedCount > 0);
        });
    });

    // Getting all the blogs
    app.get("/blogs", (req, res) => {
        blogsCollection.find({}).toArray((err, documents) => {
            if (err) res.status(500).send({ msg: error.message });
            res.status(200).send(documents);
        });
    });

    // Check if an email address and password exists in the admin collection
    app.post("/checkAdmin", (req, res) => {
        const { email, password } = req.body;
        // If the admin logs in the website will Google, he/she is authenticated,
        // but does not have a password
        if (password) {
            adminCollection
                .find({ adminEmail: email, adminPassword: password })
                .toArray((err, documents) => {
                    res.send(documents);
                });
        } else {
            adminCollection
                .find({ adminEmail: email })
                .toArray((err, documents) => {
                    res.send(documents);
                });
        }
    });

    // Get a specific blog
    app.get("/blog/:id", (req, res) => {
        // The id is sent as a parameter in the request
        const id = ObjectId(req.params.id);
        blogsCollection.find({ _id: id }).toArray((err, documents) => {
            res.send(documents);
        });
    });

    // Delete a specific blog
    app.delete("/deleteBlog/:_id", (req, res) => {
        // The id is sent as a parameter in the request
        const _id = ObjectId(req.params._id);
        blogsCollection.deleteOne({ _id: _id }).then((result) => {
            res.send(result.deletedCount > 0);
        });
    });
});

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.listen(process.env.PORT || 5000, () => {
    console.log(`Example app listening`);
});
