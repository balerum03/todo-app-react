import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Task = (props) => {
  const {remove, edit, task_id, task_name, name} = props;
  return (
    <li key={task_id} className="list-group-item d-flex justify-content-between">
      {task_name}
      <div>
        <button 
        className="btn btn-success px-5 me-3"
        value= {task_id}
        onClick= {edit}
        name= {name}>
          Edit
        </button>
        <button 
        className="btn btn-danger px-5 ms-3"
        value= {task_id}
        onClick= {remove}>
          Delete
        </button>
      </div>
    </li>
  );
}

export default Task;
