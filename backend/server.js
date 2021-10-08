const express = require('express')
const mongoose = require('mongoose')
const userModel = require('./models')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(express.json())

mongoose.connect(
    'mongodb+srv://infamous:Gopiisinfamous!@cluster0.vycjc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
)
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
    console.log("Connected successfully");
});


app.post("/addUser", async (request, response) => {
    const user = new userModel(request.body);

    try {
        await user.save();
        response.send(user);
    } catch (err) {
        response.status(500).send(err);
    }
    console.log(response);
})

app.post("/user", async (request, response) => {

    const { userName, password } = request.body;

    const user = await userModel.findOne({ userName, password });

    if (!user) {
        return response.json({ validity: "Username/Password invalid!" })
    }

    try {
        const today = new Date();
        if (today.getTime() > user.validity.getTime()) {
            response.send({
                validity: "expired"
            })
        }
        else {
            response.send({
                validity: user.validity
            })
        }
    } catch (error) {
        response.status(500).send(error);
    }
});

app.listen(5000, () => {
    console.log("Server is running at port 5000");
});