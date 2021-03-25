/* 

i'm currently getting TypeError: Cannot read property 'map' of undefined
 I've attempted to copy the tutorial word for word and i've ended
 up witht the same error

 The Error must've been a simple colon or parenthesis because now everything is working as its supposed to
 this at least makes me feel like I was on the right path

*/




  
import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import { getTodos,deleteTodo } from "./api"



export const TodoList = () => {
  const [items, setItems] = useState([])

  useEffect(() => {
    const fetchItems = async () =>{
      const todos =await getTodos ()
      setItems(todos)
    }
    fetchItems()
    },[])

    
  return (
    <div className="container">
      <div className="mt-3">
        <h3>Todo List</h3>
        <table className="table table-striped mt-3">
          <thead>
            <tr>
              <th>Text</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              items.map(todo => (
                <tr key={todo._id}>


                  <td>
                    {todo.text}
                  </td>
                  <td>
                    <Link to={`/edit/${todo._id}`}>Edit</Link>
                  </td>

                  <td>

                  <button className="btn btn-primary" onClick= {()=>deleteTodo(todo._id)}>Delete</button>
                
                    
                  </td>


                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};