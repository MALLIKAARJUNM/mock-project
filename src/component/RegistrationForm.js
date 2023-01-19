import React, { useState } from 'react';
import studiesOne from '../images/studiesOne.jpg'
import { useEffect } from 'react';

const RegistrationForm = () => {

    const [student,setStudent] = useState({uName:'',rollNum:'',emailID:'',mobileNum:0})
    const [userName,setUserName] = useState("");
    const [rollNo,setRollNo] = useState("");
    const [emailId,setEmailId] = useState("");
    const [mobileNo,setMobileNO] = useState(0);

    useEffect(()=>{
        setStudent({
            uName:userName,
            rollNum:rollNo,
            emailID:emailId,
            mobileNum:mobileNo
        });
        console.log(student);
    },[userName,rollNo,emailId,mobileNo])

    return(
        <div className='image' style={{backgroundImage:`url(${studiesOne})`}}>
        <div className="ui inverted segment" style={{marginLeft:'35%', marginRight:'35%', marginTop:'5%'}}>
            <h1>Registration Form</h1>
            <form className="ui inverted form">
                <div>
                    <div className="field">
                        <label>User Name</label>
                            <input type="text" placeholder="user name" onChange={(event)=>setUserName(event.target.value)} value={userName}/>
                    </div>
                    <div className="field">
                        <label>Roll No</label>
                            <input type="text" placeholder="roll no..." onChange={event=>setRollNo(event.target.value)} value={rollNo}/>
                    </div>
                    <div className="field">
                        <label>Email Id</label>
                            <input type="text" placeholder="email id..." onChange={event=>setEmailId(event.target.value)} value={emailId}/>
                    </div>
                    <div className="field">
                        <label>Mobile No</label>
                            <input type="number" placeholder="mobile no..." onChange={event=>setMobileNO(event.target.value)} value={mobileNo}/>
                    </div>
                </div>
                <div className="field"><br/>
                <button className="ui button" type="submit" style={{marginLeft:'35%', marginRight:'35%'}}>Register</button>
                </div>
            </form>
        </div>
        </div>
    )
}

export default RegistrationForm;