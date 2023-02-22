import React from 'react';
import imgThree from '../images/imgThree.jpg'
import imgTen from '../images/imgTen.png'
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {

  const navigate = useNavigate();

  const navigateTo = () => {
    navigate("/")
  }

  return (
    <div className='.bg-image' style={{ backgroundImage: `url(${imgThree})`, backgroundSize: 'cover', position: 'fixed', minWidth: '100%', minHeight: '100%' }}>
        <div className='d-flex flex-wrap justify-content-center' style={{fontFamily:'sans-serif'}}>
          <div className='card m-5' style={{ width: 'auto'}}>
            <div className='d-flex justify-content-center mt-2'>
              <h3><b>Login Form</b></h3>
            </div>
            <div className='avatar d-flex justify-content-center'>
              <img className="card-img-top" src={imgTen} alt="Card img cap" style={{ width: '20%', marginTop: '5%' }} />
            </div>
            <form>
              <div className='col-11'><br />
                <div className="ms-5 form-group">
                  <label for="exampleInputEmail1"><h5>Roll Number </h5></label>
                  <div className='shadow'>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Roll No" />
                  </div>
                </div>
                <div className="mt-2 ms-5 form-group">
                  <label for="exampleInputPassword1"><h5>Password </h5></label>&emsp;
                  <div className='shadow'>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                  </div>
                </div>
              </div>
              <div className=' d-grid col-6 mx-auto d-flex justify-content-center'>
              <button type="submit" className="btn btn-primary mt-3 mb-2 shadow-lg" onClick={navigateTo}>Login</button>
              <div className='d-flex flex-wrap justify-content-right'>
              <a href='/registrationForm' className='d-flex mt-4 ms-3'>Sign up...</a>
              </div>
              </div>
            </form>
          </div>
        </div>
    </div>)
}

export default LoginForm;