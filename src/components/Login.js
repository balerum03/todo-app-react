import React, { useContext, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { DataContext } from '../context/DataContext';
import Cookie from 'universal-cookie';

const cookie = new Cookie();

const Loging = () => {
	const {flag, setFlag, username, password, setUsername, setPassword, data} = useContext(DataContext);

	useEffect (() => {
		if(cookie.get('username')){
			window.location.href = '/home'
		}
	}, [])

	const submitHandler = (e) => {
		e.preventDefault();
		setFlag(!flag);
	}

	const usernameHandler = (e) => {
		setUsername(e.target.value);
	}

	const passwordHandler = (e) => {
		setPassword(e.target.value);
	}

	if(data && data !== 'Username or Password not correct. Try again.') {
		return (
			<div className="container d-flex justify-content-center align-items-center vh-100 flex-column">
				<p>{`Welcome ${data}`}</p>
				<div className="spinner-border text-info"></div>
				<p className="mt-2">Loading...</p>
				<span className="d-none">{ window.location.href = '/home' }</span>
			</div>
		)
	}else{ 
		return (
			<div className="container d-flex w-100 justify-content-center align-items-center vh-100 flex-column">
				<h1 className="mb-3">LogIn</h1>
				<form onSubmit={submitHandler} className="border p-5 border-primary rounded-3 w-25">
					<div className="form-group">
						<label>Email address</label>
						<input 
						type="text" 
						className="form-control" 
						placeholder="Enter email"
						name="username"
						value={username}
						onChange={usernameHandler} />
					</div>
					<div className="form-group my-3">
						<label>Password</label>
						<input type="password" 
						className="form-control" 
						placeholder="Password"
						name="password"
						value={password}
						onChange={passwordHandler} />
					</div>
					<div className="text-center">
						<button className="btn btn-primary w-75">Submit</button>
						<p className={data ? "d-block text-danger mt-2" : "d-none"}>{data}</p>
					</div>
				</form>
			</div>
		)
	}
}

export default Loging;
