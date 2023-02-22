import React from 'react';
import Navbar from '../component/Navbar';
import imgOne from '../images/imgOne.jpg';

const About = () => {

    return(
        <div className='.bg-image' style={{backgroundImage:`url(${imgOne})`, backgroundSize:'cover', position:'fixed', minWidth:'100%', minHeight:'100%'}}>
        <Navbar />
        <div className='justify-content-left'>
        <div className="card m-2" style={{width:'84.5rem'}}>
        <div className='card-body'>
            <h3 className='cars-title'>
            About Us </h3>
            <div className='card-text' style={{fontSize:'20px'}}>
                &emsp;<p>!Welcome to about us page</p>
        </div>
        </div>
            </div>
            </div>
            </div>
    );
}

export default About;