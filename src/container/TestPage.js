import React, { useState } from "react";
import Section from "../component/Section";
import TestCard from "../component/TestCard";
import imgEight from '../images/imgEight.jpg';


const TestPage = () => {

    const [options,useOptions] = useState(['Steve Jobs','More than one person','Al Gore','William Shockley']);

    return (
        <div className="bg-image" style={{ backgroundImage: `url(${imgEight})`, backgroundSize: 'cover', backgroundAttachment:'fixed', backgroundRepeat:'no-repeat', backgroundSize:'100% 100%'}}>
            <div>
                <div className="container d-flex" style={{width:'auto', marginRight:'25%'}}>
                    <div className="card m-5">
                        &emsp;Time - 04 : 58&emsp;
                    </div>
                </div>
            </div>
            <div>
            <div><TestCard options={options} /><Section /></div>
            <div style={{marginTop:'4%'}}>
            <button className="btn btn-dark float-end me-5">  save / next  </button>
            </div>
            </div>
        </div>
    )
}

export default TestPage;