const express = require("express");
const app = express();
const cors = require("cors");
const ObjectId = require("mongodb").ObjectID;
require("dotenv").config();

const MongoClient = require("mongodb").MongoClient;
const uri = `mongodb+srv://${process.env.USER}:${process.env.PASS}@cluster0.hwuiv.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;
const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(cors());
app.use(express.json());

client.connect((err) => {
    console.log("Mongo is here");
    const blogsCollection = client.db(process.env.DB_NAME).collection("blogs");
    const adminCollection = client.db(process.env.DB_NAME).collection("admins");

    app.post("/addBlog", (req, res) => {
        blogsCollection.insertOne(req.body).then((result) => {
            res.send(result.insertedCount > 0);
        });
    });

    app.post("/makeAdmin", (req, res) => {
        adminCollection.insertOne(req.body).then((result) => {
            res.send(result.insertedCount > 0);
        });
    });

    app.get("/blogs", (req, res) => {
        blogsCollection.find({}).toArray((err, documents) => {
            if (err) res.status(500).send({ msg: error.message });
            res.status(200).send(documents);
        });
    });

    app.get("/checkIfAdmin", (req, res) => {
        const adminEmail = req.query.email;
        adminCollection.find({ adminEmail }).toArray((err, documents) => {
            res.send(documents);
        });
    });

    app.post("/checkAdmin", (req, res) => {
        const { email, password } = req.body;

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

    app.get("/blog/:id", (req, res) => {
        const id = ObjectId(req.params.id);
        blogsCollection.find({ _id: id }).toArray((err, documents) => {
            res.send(documents);
        });
    });

    app.get("/blogs/:email", (req, res) => {
        const email = req.params.email;
        adminCollection
            .find({ adminEmail: email })
            .toArray((err, documents) => {
                if (documents[0]) {
                    blogsCollection.find({}).toArray((err, documents) => {
                        res.send(documents);
                    });
                } else {
                    blogsCollection
                        .find({ email: email })
                        .toArray((err, documents) => {
                            res.send(documents);
                        });
                }
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
