export const getTodos = () => fetch("http://localhost:4000/").then(res => res.json())

export const createTodo = (todo) => fetch("http://localhost:4000/create", {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(todo)
})  
// 
//
//
export const updateTodo = (todo, id) => fetch(`http://localhost:4000/${id}`, {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(todo)
})  

export const getTodo = (id) => fetch(`http://localhost:4000/${id}`).then(res => res.json())

export const deleteTodo = (id) => fetch(`http://localhost:4000/${id}`, {method: "DELETE"}).then(res => res.json())
  
// pulled this example from stackoverflow to figure out how to delete todo
/*export async function deleteStudent(id) {
  const response = await fetch(`/students/${id}`, {
    method: "DELETE"
  });
  return response.json();
}
*/