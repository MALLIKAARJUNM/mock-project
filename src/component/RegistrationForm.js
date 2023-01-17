import React, { useState } from 'react';
import studiesOne from '../images/studiesOne.jpg'

const RegistrationForm = () => {

    const [student,setStudent] = useState({})
    const [userName,setUserName] = useState("");
    const [rollNo,setRollNo] = useState("");
    const [emailId,setEmailId] = useState("");
    const [mobileNo,setMobileNO] = useState(0);

    const register = () => {
        setStudent({
        userName : this.userName,
        rollNo : this.rollNo,
        emailId : this.emailId,
        mobileNo : this.mobileNo
        })
        console.log(student);
    }

    return(
        <div class='image' style={{backgroundImage:`url(${studiesOne})`}}>
        <div class="ui inverted segment" style={{marginLeft:'35%', marginRight:'35%', marginTop:'5%'}}>
            <h1>Registration Form</h1>
            <form class="ui inverted form">
                <div>
                    <div class="field">
                        <label>User Name</label>
                            <input type="text" placeholder="user name" onChange={e=>setUserName(e.target.value)}/>
                    </div>
                    <div class="field">
                        <label>Roll No</label>
                            <input type="text" placeholder="roll no..." onChange={e=>setRollNo(e.target.value)}/>
                    </div>
                    <div class="field">
                        <label>Email Id</label>
                            <input type="text" placeholder="email id..." onChange={e=>setEmailId(e.target.value)}/>
                    </div>
                    <div class="field">
                        <label>Mobile No</label>
                            <input type="number" placeholder="mobile no..." onChange={e=>setMobileNO(e.target.value)}/>
                    </div>
                </div>
                <div class="field"><br/>
                <button class="ui button" type="submit" style={{marginLeft:'35%', marginRight:'35%'}}>Register</button>
                </div>
            </form>
        </div>
        </div>
    )
}

export default RegistrationForm;