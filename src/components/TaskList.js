// React import
import React from 'react';
// Components imports
import ButtonComponents from './ButtonComponents';
// CSS7SASS imports
import './css/TaskListStyle.scss';
// Bootstrap import
import 'bootstrap/dist/css/bootstrap.min.css';

const TaskList = ({task, setTask, tasks, setTasks, isComment, setIsComment }) => {

  const handleSubmit = (e) => {
    e.preventDefault()

    // taskProperties appends properties to created tasks

    const taskProperties = {
      id: Math.floor(Math.random()*100),
      text: tasks,
      completed: false
    }
    setTask([...task].concat(taskProperties))
    setTasks("");
  }

  const inputTargetValue = (e) => {
    setTasks(e.target.value)
  }

  return (
    <div className="taskList">
      <div className="taskList-container">
      <form className="form" onSubmit={handleSubmit}>
        <input className="form-control" onChange={inputTargetValue} value={tasks} required type="text"/>
        <button className="btn btn-secondary add-button" type="submit">Add Task</button>
      </form>
      </div>
      {task.map((tasks) => 
        <ButtonComponents 
          setTask={setTask}
          setTasks={setTasks}
          key={tasks.id}
          task={task}
          tasks={tasks}
          text={tasks.text}
          completed={tasks.completed}
          isComment={isComment}
          setIsComment={setIsComment}
        />
      )}
    </div>
  )
}

export default TaskList;
