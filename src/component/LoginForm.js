import React from 'react';
import imgThree from '../images/imgThree.jpg'

const LoginForm = () => {


    return(
        <div className='ui background' style={{backgroundImage:`url(${imgThree})`, backgroundSize:'cover', position:'fixed', minWidth:'100%', minHeight:'100%'}}>
        <div className="page-login" >
  <div className="ui centered grid container" style={{marginLeft:'35%', marginRight:'35%', marginTop:'10%'}}>
    <div className="nine wide column">
      <div className="ui fluid card">
        <div className="ui inverted segment" >
        <form className="ui inverted form" method="POST">
          <div className="field">
            <label>User</label>
            <input type="text" name="user" placeholder="User"/>
          </div>
          <div className="field">
            <label>Password</label>
            <input type="password" name="pass" placeholder="Password"/>
          </div>
          <div  className="field" style={{marginLeft:'25%', marginRight:'15%'}}>
          <button className="ui button" type="submit" style={{marginRight:'20%'}}>
            <a href="/Home">Login</a>
          </button>
          <button className="ui button" type="submit" style={{marginRight:'20%'}}><a href="/RegistrationForm">Sign up</a></button>
          </div>
      </form>
    </div>
  </div>
</div>
</div>
</div>
</div>)
}

export default LoginForm;