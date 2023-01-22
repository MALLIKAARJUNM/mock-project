import React, { useState } from 'react';
import imgTwo from '../images/imgTwo.jpg'
import { useEffect } from 'react';

const RegistrationForm = () => {

    const [student,setStudent] = useState({})
    const [userName,setUserName] = useState("");
    const [rollNo,setRollNo] = useState("");
    const [emailId,setEmailId] = useState("");
    const [mobileNo,setMobileNO] = useState(0);
    useEffect(()=>{
        setStudent({userName:userName, rollNo:rollNo, emailId:emailId, mobileNo:mobileNo});
    },[userName,rollNo,emailId,mobileNo])
    const register = (event) => {
        event.preventDefault();
        //axios.post("url",student);
        console.log(student);
    }

    return(
        <div className='ui background' style={{backgroundImage:`url(${imgTwo})`, backgroundSize:'cover', position:'fixed', minWidth:'100%', minHeight:'100%'}}>
            <div className="ui centered grid container" style={{marginLeft:'35%', marginRight:'35%', marginTop:'5%'}}>
    <div className="nine wide column">
      <div className="ui fluid card">
        <div className="ui inverted segment">
            <h1>Registration Form</h1>
            <form className="ui inverted form" action="/Login" onSubmit={register}>
                <div>
                    <div className="field">
                        <label>User Name</label>
                            <input type="text" placeholder="user name" onChange={event=>{setUserName(event.target.value)}} value={userName}/>
                    </div>
                    <div className="field">
                        <label>Roll No</label>
                            <input type="text" placeholder="roll no..." onChange={event=>{setRollNo(event.target.value)}} value={rollNo}/>
                    </div>
                    <div className="field">
                        <label>Email Id</label>
                            <input type="text" placeholder="email id..." onChange={event=>{setEmailId(event.target.value)}} value={emailId}/>
                    </div>
                    <div className="field">
                        <label>Mobile No</label>
                            <input type="number" placeholder="mobile no..." onChange={event=>{setMobileNO(event.target.value)}} value={mobileNo}/>
                    </div>
                </div>
                <div className="field" style={{marginLeft:'25%', marginRight:'15%'}}><br/>
                <button className="ui button" type="submit" style={{marginRight:'20%'}}><a href="/LoginForm">Register</a></button>
                <button className="ui button" style={{marginRight:'5%'}}><a href="/LoginForm">Login</a></button>
                </div>
            </form>
            </div>
            </div>
            </div>
        </div>
        </div>
    )
}

export default RegistrationForm;