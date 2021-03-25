const express = require("express")
const cors= require("cors")
const mongoose = require("mongoose");
const Todo = require("./models/Todo");

// connecting to the mongodb 
mongoose.connect("mongodb://127.0.0.1:27017/mongo",{useNewUrlParser:true});
mongoose.connection.once('open',()=>{
    console.log("Mongodb connection established successfully")
})

const PORT = 4000;

const app = express()

app.use(cors())
app.use(express.json())

//handler to get list of todo items
app.get('/',(req,res)=>{
    Todo.find((err,todos)=>{
        if(err){
            console.log(err);
        }else{
            res.json(todos);
        }
    })
  })

  // handler to create new todo items
app.post("/create",(req,res) =>{
    //console.log('made it here') // no problem connecting to server if made here
    const todo = new Todo(req.body)
    todo.save().then((todo)=>{
        console.log(todo)
        res.json(todo)
       // console.log(res)
    })
    .catch((err)=>{             // if error on todo.save then it faield connecting to the mongodb
        res.status(500).send(err.message)
    })
})

//handler to get specific todo item
app.get("/:id", (req,res)=> {
    const id = req.params.id
    Todo.findById(id, (err,todo)=>{
        res.json(todo)
    })
})

app.post("/:id", (req, res) => {
    const id = req.params.id;
    Todo.findById(id, (err, todo) => {
      if (!todo) {
        res.status(404).send("Todo not found")
      }else{
        todo.text = req.body.text;
      
        todo
          .save()
          .then((todo) => {
            res.json(todo);
          })
          .catch((err) => res.status(500).send(err.message));
      }
    });
})

app.delete("/:id", (req, res) => {
    const id = req.params.id;
    Todo.findById(id, (err, todo) => {
      if (todo) {
        
        
        todo
          .delete()
          .then((todo) => {
            res.json(todo);
          })
          .catch((err) => res.status(500).send(err.message));
      }
    });
})



app.listen(PORT, () => {
    console.log("Server is running on port " + PORT);
  })