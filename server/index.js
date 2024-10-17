const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors")
const todo = require("./Models/todo")
const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://lalo:lalo123@todo.b2zg7.mongodb.net/?retryWrites=true&w=majority&appName=todo')
try {
    console.log("sucess")
}
catch (err) {
    console.log(err);
}
app.post('/add', (req, res) => {
    const task = req.body.task;
    todo.create({
        task: task
    }).then(result => res.json(result))
        .catch(err => res.json(err))

})

app.get('/get', (req, res) => {
    todo.find()
        .then(result => res.json(result))
        .catch(err => res.json(err))
})

app.put('/update/:id', (req, res) => {
    const { id } = req.params;
    todo.findByIdAndUpdate({ _id: id }, { done: true })
        .then(result => res.json(result))
        .catch(err => res.json(err))

})
app.delete('/delete/:id', (req, res) => {
    const { id } = req.params;
    console.log(id);
    todo.findByIdAndDelete({ _id: id })
        .then(result => res.json(result))
        .catch(err => res.json(err))
})

app.listen(3001, () => {
    console.log("port connects")
})