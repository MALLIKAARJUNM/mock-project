import React, { useState } from 'react';
import twelve from '../images/twelve.jpg'

const Login = () => {


    return(
        <div className='image' style={{backgroundImage:`url(${twelve})`}}>
        <div className="page-login" >
  <div className="ui centered grid container" style={{marginLeft:'35%', marginRight:'35%', marginTop:'5%'}}>
    <div className="nine wide column">
      <div className="ui fluid card">
        <div className="content" >
        <form className="ui form" method="POST">
          <div className="field">
            <label>User</label>
            <input type="text" name="user" placeholder="User"/>
          </div>
          <div className="field">
            <label>Password</label>
            <input type="password" name="pass" placeholder="Password"/>
          </div>
          <button className="ui primary labeled icon button" type="submit">
            <i className="unlock alternate icon"></i>
            Login
          </button>
      </form>
    </div>
  </div>
</div>
</div>
</div>
</div>)
}

export default Login;