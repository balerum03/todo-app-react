import React from 'react';
import Cookie from 'universal-cookie';

const cookie = new Cookie();

const Navigation = () => {

  const sessionClosed = () => {
    cookie.remove('userid');
    cookie.remove('username');
    cookie.remove('password');
    window.location.href = '/';
  }

  return (
    <nav className="d-flex w-100 justify-content-center border-bottom border-success border-4">
      <div className="d-flex w-75 justify-content-between pb-3">  
        <p className="ms-5 mt-5 h4 ">{cookie.get('username')}</p>
        <button className="me-5 mt-5 btn btn-danger" onClick={sessionClosed}>SignOut</button>
      </div>
    </nav>
  )
}

export default Navigation;