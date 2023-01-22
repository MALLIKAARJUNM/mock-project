import React from 'react';
import imgOne from '../images/imgOne.jpg';

const Contact = () => {

    return(
        <div className='ui background' style={{backgroundImage:`url(${imgOne})`, backgroundSize:'cover', position:'fixed', minWidth:'100%', minHeight:'100%'}}>
        <div className="ui container">
            <h1 className='ui header' style={{fontSize:'100px'}}>
            Contact Us 
            <div className='ui paragraph' style={{fontSize:'25px'}}>
                !Welcome to contact us page
        </div>
        </h1>
            </div>
            </div>
    );
}

export default Contact;