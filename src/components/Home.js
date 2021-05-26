import React, { useEffect } from 'react';
import Cookie from 'universal-cookie';
import Layout from './Layout';
import ToDo from './ToDo';

const cookie = new Cookie();
const Home = () => {
  useEffect(() => {
    if(!cookie.get('username')) {
      window.location.href = '/'
    }
  }, [])

  return (
    <div>
      <Layout component={<ToDo />}/>
    </div>
  );
}

export default Home;
