import React,{useState} from "react";
import "./App.css";
// import { library } from '@fortawesome/fontawesome-svg-core';
// import {faTrash}from'@fortawesome/free-solid-svg-icons';
// library.add(faTrash);


// import Header from"./components/Header";

function App() {

  const[tasks,setTasks]= useState([{title:"aller se faire voir",isDone:false},
  {title:"aller ranger ses chaussures",isDone:false},
  {title:"aller boire un verre",isDone:true}])

  const[newTaskInput,setNewTaskInput]=useState("")

  return (
    <div className="containerTodoList">
    
      {tasks.map((task,index)=>{
      return(
      <div>
        <input 
        type ="checkbox"
        checked ={task.isDone}
        onClick={()=>{
          const newTasks=[...tasks];
         newTasks[index].isDone=!newTasks[index].isDone;
        
        
          setTasks(newTasks)
        }}

        />
        <span className={task.isDone=== true?"checked":""}
        >{task.title}</span>
        <button
        onClick={()=>{
          const newTasks=[...tasks]
          newTasks.splice(index,1)
          setTasks(newTasks);

        }}>
        {/* <FontAwesomeIcon icon="trash"/> */}
        SUPPRIMER
        </button>
      </div>
      )

      })}
     
    

     <form 
     onSubmit={(event)=>{
     event.preventDefault();

     const newTasks=[...tasks]
     newTasks.push({
       title:newTaskInput,
       isDone:false,
     })
     setTasks(newTasks);
     setNewTaskInput("");
     }}>
      <div >
      <input 
       type="text"
       placeholder="new task"
       value={newTaskInput}
       onChange={(event)=>{
         const value= event.target.value
         setNewTaskInput(value)
       }}
       />
      </div>
       
       <button type="submit">ADD TASK</button>
     </form>
    </div>
  );
}

export default App;
