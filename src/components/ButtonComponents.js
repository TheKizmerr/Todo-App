// React import
import React from 'react';
// CSS imports
import './css/ButtonComponents.scss'
import './css/CommentBox.scss';

const ButtonComponents = ({ id, text, task, setTask, tasks, isComment, setIsComment }) => {

  const deleteTasks = () => {
    setTask(task.filter((taskItem) => taskItem.id !== tasks.id))
  }

  const completeTask = (id) => {
    let updatedTask = task.map(tasks => {
      if(tasks.id === id) {
        tasks.completed = !tasks.completed;
      }
      return tasks
    });
    setTask(updatedTask)
  }

  return (
    <div className="task-container" key={id}>
      <div className="button-container">
        <div className={`todo-item ${tasks.completed ? "completed" : ''}`}>
          <div className="form-control">{text}</div>
          <button className="complete-btn" onClick={() => completeTask(tasks.id)} >
            <i className="fas fa-check complete-icon"></i>
          </button>
        </div>
        <div className="buttons">
          <button className="btn btn-danger delete-button" onClick={deleteTasks}>Delete Task</button>
          <button className="btn btn-danger add-button" onClick={() => setIsComment(!isComment)}>Add Comment</button>
        </div>
        <div className="comment-area">
              {isComment ? 
                  (
                  <div className="comment-box">
                    <textarea className="comment-box-input" type="text"></textarea>
                  </div>
                  ) : ("")}
        </div>
      </div>
    </div>
  )
}

export default ButtonComponents;
