import React, { useState } from "react";
import Section from "../component/Section";
import TestCard from "../component/TestCard";
import imgEight from '../images/imgEight.jpg';


const TestPage = () => {

    const [options,useOptions] = useState(['Steve Jobs','More than one perso','Al Gore','William Shockley']);

    return (
        <div className="bg-image" style={{ backgroundImage: `url(${imgEight})`, backgroundSize: 'cover', position: 'fixed', minWidth: '100%', minHeight: '100%' }}>
            <div>
            <div><TestCard options={options} /></div>
            <div>
                <Section />
            </div>
            <div>
            <button className="btn btn-success float-end me-5">  next  </button>
            </div>
            </div>
        </div>
    )
}

export default TestPage;