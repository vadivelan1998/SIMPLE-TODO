import { useState } from "react"
import TodoList from "./todolist.jsx"
//import "./todo.css"
import "../App.css";
function Todo(){
    const [data,setData]=useState("")
    const [arr,setarr]=useState([])
    //console.log(data)
    //console.log(arr);
    const handle=(e)=>{
     //console.log(e.target.value)
     setData(e.target.value);
    }
    return (
      <div id="todo">
        <input onChange={handle} placeholder="Enter Todo"></input>
        <button onClick={() => {
            setarr([...arr,data])
            
        }}>+</button>
        <TodoList val={arr} />
      </div>
    );
}
export default Todo