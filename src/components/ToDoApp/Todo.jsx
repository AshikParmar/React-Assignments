import { useState } from 'react'
import './Todo.css'

function Todo() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');


  
  const addTask = (i) => {
    if(input){
      setTasks([...tasks, { text: input, completed: false, editable: false }]);
      setInput('');
    }


  };

  const toggleTask = (index) => {
    const newTasks = tasks.map((task, i) => i === index ? {...task, completed: !task.completed } : task);
    setTasks(newTasks);
  };

  const toggleEditable = (index) => {
    const newTasks = tasks.map((task, i) => i === index ? {...task, editable: !task.editable } : task);
    setTasks(newTasks);
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };



  return (
      <div className='app'>
        <header className='header'>
          <h1>To Do List</h1>
        </header>
        <div className='input-container'>
          <input 
          type="text" 
          value={input} 
          onChange={(e) => setInput(e.target.value)} 
          placeholder='Add a new Task' 
          onKeyDown={(e)=>{
            if(e.key==="Enter")
            {
              addTask();
            }
          }}
          />

          <button onClick={addTask}>Add</button>
        </div>
        <ul className='task-list'>
          {tasks.map((task, index) => (
            <li key={index} className={task.completed ? 'task-completed task' : 'task'}>
              <span contentEditable={task.editable ? true : false} 
              className={task.editable ? "editable" : null}
              onDoubleClick={()=> toggleTask(index)} >{task.text}</span>
              <div>
                <button className='update' onClick={() => toggleEditable(index)} >update</button>
                <button onClick={() => deleteTask(index)} >Delete</button>
              </div>


            </li>
          ))}

        </ul>
      </div>
  )
}

export default Todo
