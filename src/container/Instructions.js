import React from 'react';
import imgSeven from '../images/imgSeven.jpg';
import { useNavigate } from 'react-router-dom';
import Navbar from '../component/Navbar';


const Instructions = () => {

    const navigate = useNavigate();

    const navigateTo = () => {
        navigate('/TestPage');
    }


    return(
        <div className='bg-image' style={{backgroundImage:`url(${imgSeven})`, backgroundSize:'cover', position:'fixed', minWidth:'100%', minHeight:'100%'}}>
            <Navbar />
            <div className='container' style={{overflow:'auto'}}>
        <h1 className='card-title' style={{fontSize:'50px', textAlign:'center'}}>
            Instructions
        </h1>
        <hr style={{borderBlockColor:'black'}} />
        </div>
        <p className='card-text text-primary' style={{marginLeft:'10%'}}>
            <ul>
        <li>There are total 30 questions and total duration of the test is 35 minutes.</li><br />
        <li>Each question carries 1 mark. There is no negative marking.</li><br />
        <li>Mark your answer by clicking the appropriate radio button to Save your answer. To change your answer, please click the radio button that you think is appropriate.</li><br />
<li>Click on Reset button to unselect answer.</li><br />
<li>Clicking Save will take you to Next Question. The answer selected can be edited at any point in time before submitting a section. You can navigate between the questions by clicking the question number.</li><br />
<li>Once done click on Finish test  to end the test.</li><br />
<li>Click on Start to proceed.</li><br />
</ul>
All the best!!
            </p>
                <button className="btn btn-success" style={{marginLeft:'47%'}} onClick={navigateTo}>Start</button>
        </div>
    )
}

export default Instructions;