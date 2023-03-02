import React from 'react';
import imgOne from '../images/imgOne.jpg';
import TestInstCard from '../component/TestInstCard';
import Navbar from '../component/Navbar';

const Home = () => {


    return (
        <div className='.bg-image' style={{ backgroundImage: `url(${imgOne})`, backgroundSize: 'cover', position: 'fixed', minWidth: '100%', minHeight: '100%' }}>
            <Navbar />
            <div className='d-flex justify-content-center' style={{ marginTop: '10%', marginLeft: '30%', marginRight: '30%' }}>
                <div className="input-group rounded">
                    <input type="search" className="form-control rounded shadow" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
                    <span className="input-group-text border-0" id="search-addon">
                        <i className="bi-search"></i>
                    </span>
                </div>
            </div>
            <div>
            <TestInstCard />
            </div>
            
        </div>
    )
}

export default Home;