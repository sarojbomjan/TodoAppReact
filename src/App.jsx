import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"
import { useState, useEffect} from "react"

function App() {
 
  const [todos, setTodos] = useState([
  ])

  const [todoValue, setTodoValue] = useState('');

  //function to store data
  function persistData(newList){
    localStorage.setItem('todos', JSON.stringify( { todos: newList}))
  }
  
  //fucntion for adding new todos
  function handleAddTodos(newTodo){

    const newTodoList = [...todos, newTodo]
    persistData(newTodoList)
    setTodos(newTodoList)
  }


  //functoion for deleting

  function handleDeleteTodo(index){
      const newTodoList = todos.filter((todo, todoIndex) => {
        return todoIndex != index
      })
      persistData(newTodoList)
      setTodos(newTodoList)
  }

  //function to handle edit

  function handleEditTodo(index){
    const valueToBeEdited = todos[index]
    setTodoValue(valueToBeEdited)
    handleDeleteTodo(index)
  }

  useEffect(() => {
    if (!localStorage) {
      return
    }

    let localTodos = localStorage.getItem('todos')
    if (!localTodos){
      return
    }

    localTodos = JSON.parse(localTodos).todos
    setTodos(localTodos)
  }, [])

  return (
    <>
        <TodoInput todoValue={todoValue} setTodoValue={setTodoValue} handleAddTodos={handleAddTodos}/>
        <TodoList handleEditTodo={handleEditTodo} handleDeleteTodo={handleDeleteTodo} todos={todos}/>

    </>
  )
}

export default App
