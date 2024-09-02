import React, {useState} from 'react'
import { FaArrowUp, FaArrowDown } from 'react-icons/fa';
function ToDoList(){

  const[tasks, setTask]=useState(["Eat breakfast" , " Take a shower"]);
  const [newTask , setNewTask]= useState("");

function handleInputchange(event){
setNewTask(event.target.value);
}
function AddTask(){

    if(newTask.trim() !==""){
             setTask(t =>  [...t, newTask]);
             setNewTask('');
    }
}
function RemoveTask(index){

    const updatedTask= tasks.filter(( _ , i) => i !== index);
    setTask(updatedTask);
}
function MoveTaskUp(index){
  if(index >0 ){
              const updatedTask =[...tasks];
             [updatedTask[index], updatedTask[index-1]  ] = 
             [updatedTask[index-1] ,updatedTask[index] ];
            setTask(updatedTask);

  }
}
function MoveTaskDown(index){
    if(index < tasks.length -1){
        const updatedTask =[...tasks];
       [updatedTask[index], updatedTask[index+1]  ] = 
       [updatedTask[index+1] ,updatedTask[index] ];
      setTask(updatedTask);

}
}


    return(
        <div className="to-do-list">
            <h2>Task Manager</h2>
             <div>
                <input   type='text'
                         placeholder='Enter a task....'
                         value={newTask}
                         onChange={handleInputchange}/>
                 <button className='button-add'
                 onClick={AddTask}>Add 
                </button>
            </div>

            <ol>
                {tasks.map((task, index) =>  
                    <li key={index}> 
                       <span className='text'>{task}</span>
                       <button className='delete-button' onClick={() => RemoveTask(index)}> Delete</button>
                       <button className='up-button' onClick={() => MoveTaskUp(index)}> Up  <FaArrowUp /></button>
                       <button className='down-button' onClick={() => MoveTaskDown(index)}> Down <FaArrowDown /></button>
                    </li>)}
            </ol>
         </div>
           
    )
}

export default ToDoList