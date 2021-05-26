import React, { useEffect, useState } from 'react';
import './ToDo.css';
import axios from 'axios';
import Cookie from 'universal-cookie';
import 'bootstrap/dist/css/bootstrap.min.css';
import Task from './Task';

const cookie = new Cookie();

const ToDo = () => {
  const [dnone, setDnone] =  useState(true);
  const [list, setList] = useState([]);
  const [Trigger, setTrigger] = useState(false);
  const [EditTrigger, setEditTrigger] =useState(false);
  const [TaskID, setTaskID] = useState(null);
  const [NewTaskName, setNewTaskName] = useState('');
  const [postTrigger, setPostTrigger] = useState(false);
  const [toEdit, setToEdit] = useState('');

  useEffect(() => {
    axios.get('http://localhost:3001/tasks', {params: {owner_id: cookie.get('userid')}})
    .then(res => {
      return res.data;
    })
    .then(res => {
      setList(res)
    })
    .catch(error => console.log(error))
  },[]);

  useEffect(() => {
    if(TaskID){
      axios.delete(`http://localhost:3001/tasks/${TaskID}`)
      .then(window.location.href='/home');
    }
  }, [Trigger]);

  useEffect(() => {
    if(TaskID) {
      axios.put(`http://localhost:3001/tasks/${TaskID}` , {id: TaskID, owner_id: Number(cookie.get('userid')), task_name: toEdit})
      .then(window.location.href='/home');
    }
  }, [EditTrigger]);

  useEffect(() => {
    if(NewTaskName !== '') {
      axios.post(`http://localhost:3001/tasks`, {id: Date.now(), owner_id: Number(cookie.get('userid')), task_name: NewTaskName})
      .then(window.location.href='/home');
    }
  }, [postTrigger])

  const deleteHandler = (e) =>{
    setTaskID(e.target.value);
    setTrigger(!Trigger);
  };

  const editHandler = (e) => {
    setTaskID(e.target.value);
    setNewTaskName(e.target.name);
    setDnone(!dnone);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setPostTrigger(!postTrigger);
  };

  const taskNameHandler = (e) => {
    setNewTaskName(e.target.value);
  };

  const saveChange = (e) => {
    e.preventDefault();
    setNewTaskName(e.target.value);
    setEditTrigger(!EditTrigger);
  };

  const changeHandler = (e) => {
    setToEdit(e.target.value);
  };

  return(
    <div className="mt-5 w-100 d-flex justify-content-center flex-column align-items-center">
      <ul className="list-group w-75">
        {list.map(e=> {
          return(
            <Task remove={deleteHandler} edit={editHandler} task_id={e.id} task_name={e.task_name} key={e.id} name={e.task_name} />
          )})}
      </ul>
      <form className="mt-3 w-25" onSubmit= {submitHandler}>
        <input className= "w-100 form-control" type= 'text' placeholder= 'Add new task' onChange={taskNameHandler}/>
      </form>
      <form className = {dnone ? "d-none" : "modal"} onSubmit = {saveChange} > 
        <input type= "text" required onChange= {changeHandler} className= "form-control w-25" placeholder= {NewTaskName} />
        <div>
          <button onClick = {saveChange} className = "btn-success btn m-3">
            Save Changes.
          </button>
          <button onClick = {editHandler} className = "btn-danger btn">
            Cancel.
          </button>
        </div>
      </form>
    </div>
  );
}

export default ToDo;