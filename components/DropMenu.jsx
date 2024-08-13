import React, { useState } from 'react';

import "../CSS/DropMenu.css";

const Login  = () => {
  

  return (
    <div className="login-dropdown">
      <form >
        <div>
          <label>Username:</label>
          <input
            type="text"
            
            
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            
            
            
          />
        </div>
        <button type="submit">Login</button>
      </form>
      
    </div>
  );
};

export default Login;
