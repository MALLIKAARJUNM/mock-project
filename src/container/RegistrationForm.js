import React from 'react';
import { useNavigate } from 'react-router-dom';
import imgEleven from '../images/imgEleven.png'
import imgTwo from '../images/imgTwo.jpg'

const RegistrationForm = () => {
    const navigate = useNavigate();

    const navigateTo = () => {
        navigate('/loginForm')
    }

    return(
        <div className='bg.image' style={{backgroundImage:`url(${imgTwo})`, backgroundSize:'cover', position:'fixed', minWidth:'100%', minHeight:'100%'}}>
            <div className='d-flex flex-wrap justify-content-center' style={{fontFamily:'sans-serif'}}>
                <div className='card' style={{width: 'auto'}}>
                <div className='d-flex justify-content-center mt-2'>
              <h3><b>Registration Form</b></h3>
            </div>
            <div className='avatar d-flex justify-content-center'>
              <img className="card-img-top" src={imgEleven} alt="Card img cap" style={{ width: '20%'}} />
            </div>
            <form className='form'>
            <div className='col-11'><br />
                <div className="ms-5 form-group">
                  <label for="exampleInputEmail1"><h5>User Name </h5></label>
                  <div className='shadow'>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="username..." />
                  </div>
                </div>
                <div className="mt-2 ms-5 form-group">
                  <label for="exampleInputPassword1"><h5>Roll Number </h5></label>&emsp;
                  <div className='shadow'>
                    <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Roll No..." />
                  </div>
                </div>
                <div className="mt-2 ms-5 form-group">
                  <label for="exampleInputPassword1"><h5>Email ID </h5></label>&emsp;
                  <div className='shadow'>
                    <input type="email" className="form-control" id="exampleInputPassword1" placeholder="emailId..." />
                  </div>
                </div>
                <div className="mt-2 ms-5 form-group">
                  <label for="exampleInputPassword1"><h5>Mobile Number </h5></label>&emsp;
                  <div className='shadow'>
                    <input type="number" className="form-control" id="exampleInputPassword1" placeholder="mobileNo..." />
                  </div>
                </div>
                <div className="mt-2 ms-5 form-group">
                  <label for="exampleInputPassword1"><h5>Password</h5></label>&emsp;
                  <div className='shadow'>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="password..." />
                  </div>
                </div>
                <div className=' d-grid col-6 mx-auto d-flex justify-content-center'>
              <button type="submit" className="btn btn-primary mt-2 mb-2 ms-5 shadow-lg" onClick={navigateTo}>Submit</button>
              <div className='d-flex flex-wrap justify-content-right'>
              <a href='/loginForm' className='d-flex mt-3 ms-3'>Login in...</a>
              </div>
              </div>
              </div>
            </form>
                </div>
            </div>
        </div>
    )
}

export default RegistrationForm;