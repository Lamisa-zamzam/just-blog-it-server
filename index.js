const express = require("express");
const app = express();
require("dotenv").config();

const MongoClient = require("mongodb").MongoClient;
const uri = `mongodb+srv://${process.env.USER}:${process.env.PASS}@cluster0.hwuiv.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;
const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
client.connect((err) => {
    console.log("Mongo is here");
    const blogsCollection = client.db(process.env.DB_NAME).collection("blogs");
    const adminCollection = client.db(process.env.DB_NAME).collection("admins");

    app.post("/addBlog", (req, res) => {
        const { content, blogTitle, imageURL } = req.body;
        const blog = { content, blogTitle, imageURL };
        blogsCollection.insertOne(blog).then((result) => {
            res.send(result.insertedCount > 0);
        });
    });

    app.post("/makeAdmin", (req, res) => {
        const { email } = req.body;
        const admin = { email };
        adminCollection.insertOne(admin).then((result) => {
            res.send(result.insertedCount > 0);
        });
    });

    app.get("/blogs", (req, res) => {
        blogsCollection.find({}).toArray((err, documents) => {
            res.send(documents);
        });
    });

    app.get("/checkIfAdmin", (req, res) => {
        const email = req.query.email;

        adminCollection.find({ email: email }).toArray((err, documents) => {
            res.send(documents);
        });
    });

    app.get("/blog/:id", (req, res) => {
        const id = ObjectId(req.params.id);
        blogsCollection.find({ _id: id }).toArray((err, documents) => {
            res.send(documents);
        });
    });

    app.get("/blog", (req, res) => {
        const blogName = req.query.blogName;
        blogsCollection
            .find({ blogName: blogName })
            .toArray((err, documents) => {
                res.send(documents);
            });
    });

    app.delete("/deleteBlog/:_id", (req, res) => {
        const _id = ObjectId(req.params._id);
        console.log(_id);
        blogsCollection.deleteOne({ _id: _id }).then((result) => {
            console.log(result.deletedCount);
            res.send(result.deletedCount > 0);
        });
    });
});

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.listen(process.env.PORT || 9000, () => {
    console.log(`Example app listening`);
});
