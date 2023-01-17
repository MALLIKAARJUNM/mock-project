import React from 'react';
import studiesOne from '../images/studiesOne.jpg'

const RegistrationForm = () => {
    return(
        <div style={{backgroundImage:`url(${studiesOne})`}}>
        <div class="ui inverted segment" style={{marginLeft:'35%', marginRight:'35%', marginTop:'5%'}}>
            <h1>Registration Form</h1>
            <form class="ui inverted form">
                <div>
                    <div class="field">
                        <label>User Name</label>
                            <input type="text" placeholder="user name"/>
                    </div>
                    <div class="field">
                        <label>Roll No</label>
                            <input type="text" placeholder="roll no..."/>
                    </div>
                    <div class="field">
                        <label>Email Id</label>
                            <input type="text" placeholder="email id..."/>
                    </div>
                    <div class="field">
                        <label>Mobile No</label>
                            <input type="number" placeholder="mobile no..."/>
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