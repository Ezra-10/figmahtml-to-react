import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // For navigation
import '../assets/Login.css';// Make sure the CSS file is properly linked

const Register = () => {
  // State hooks for form fields
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // Form submission handler
  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add your form submission logic here
    console.log('Form submitted:', { email, password, confirmPassword });
  };

  return (
    <div className="div1">
      <div className="div2">
        <h1>Login</h1>
        <form className="form" onSubmit={handleSubmit}>
          <label htmlFor="username">Email</label><br />
          <input
            type="text"
            id="username"
            name="username"
            className="input"
            style={{ marginBottom: '10px' }}
            value={email}
            onChange={(e) => setEmail(e.target.value)} // Handle input changes
          /><br />
          <label htmlFor="pwd">Password</label><br />
          <input
            type="password"
            id="pwd"
            name="pwd"
            className="input"
            style={{ marginBottom: '10px' }}
            value={password}
            onChange={(e) => setPassword(e.target.value)} // Handle input changes
          /><br />
          
          <br />
          <button className="btn" type="submit"><a href="/">Submit</a></button>
        </form>
        <p style={{ textAlign: 'center' }}>
          Dont have an account? <Link to="/register">Come Here</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
