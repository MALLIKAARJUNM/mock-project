import React from 'react';
import imgOne from '../images/imgOne.jpg';
import Navbar from '../component/Navbar';

const Contact = () => {

    return(
        <div className='.bg-image' style={{backgroundImage:`url(${imgOne})`, backgroundSize:'cover', position:'fixed', minWidth:'100%', minHeight:'100%'}}>
        <Navbar />
        <div className='justify-content-left'>
        <div className="card m-2" style={{width:'84.5rem'}}>
            <div className='card-body'>
            <h3 className='cars-title'>
            Contact Us </h3>
            <div className='card-text' style={{fontSize:'20px'}}>
                &emsp;<p>!Welcome to contact us page</p>
        </div>
        </div>
            </div>
            </div>
            </div>
    );
}

export default Contact;