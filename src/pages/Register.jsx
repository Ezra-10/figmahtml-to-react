import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/Login.css';


const Register = () => {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log('Form submitted:', { email, password, confirmPassword });
  };

  return (
    <div className="div1">
      <div className="div2">
        <h1>Register</h1>
        <form className="form" onSubmit={handleSubmit}>
          <label htmlFor="username">Email</label><br />
          <input
            type="text"
            id="username"
            name="username"
            className="input"
            style={{ marginBottom: '10px' }}
            value={email}
            onChange={(e) => setEmail(e.target.value)} 
          /><br />
          <label htmlFor="pwd">Password</label><br />
          <input
            type="password"
            id="pwd"
            name="pwd"
            className="input"
            style={{ marginBottom: '10px' }}
            value={password}
            onChange={(e) => setPassword(e.target.value)} 
          /><br />
          <label htmlFor="confirm-pwd">Confirm Password</label><br />
          <input
            type="password"
            id="confirm-pwd"
            name="confirm-pwd"
            className="input"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)} 
          /><br />
          <button className="btn" type="submit"><a href="/">Submit</a></button>
        </form>
        <p style={{ textAlign: 'center' }}>
          Have an account? <Link to="/login">Come Here</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
