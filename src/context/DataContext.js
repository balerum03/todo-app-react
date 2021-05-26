import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import md5 from 'md5';
import Cookie from 'universal-cookie';

const cookie = new Cookie();
export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [flag, setFlag] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [data, setData] = useState('');

  useEffect(() => {
    if(username !== '' && password !== ''){
      axios.get('http://localhost:3001/users', {params: {user_name: username, password: md5(password)}})
      .then(res => {
        if(res.data.length>0){
          cookie.set('userid', res.data[0].id, {path: '/'});
          cookie.set('username', res.data[0].user_name, {path: '/'});
          cookie.set('password', res.data[0].password, {path: '/'});
        }else{
          setData('Username or Password not correct. Try again.');
        }
        return(res.data[0])
      })
      .then(res => {return res.name})
      .then(res => setData(res))
      .catch(error => console.log(error))
    }
  },[flag])


  return (
    <DataContext.Provider value={{ data, flag, setFlag, username, password, setPassword, setUsername }}>
      {children}
    </DataContext.Provider>
  )
}
