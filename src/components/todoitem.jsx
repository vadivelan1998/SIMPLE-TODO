//import "./todo.css"
import "../App.css";
function TodoItem({data}){
    console.log(data)
    return (
        <div>
            {data.map((e,index)=>{
               return (<div className="item" key={index} >{e}</div>)   
            })}
        </div>
    )
}
export default TodoItem