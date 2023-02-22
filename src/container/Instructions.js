import React from 'react';
import imgSeven from '../images/imgSeven.jpg';
import Navbar from '../component/Navbar';


const Instructions = () => {


    return(
        <div className='ui background' style={{backgroundImage:`url(${imgSeven})`, backgroundSize:'cover', position:'fixed', minWidth:'100%', minHeight:'100%'}}>
            <Navbar />
            <div className='ui container'>
        <h1 className='ui header' style={{fontSize:'50px', textAlign:'center'}}>
            Instructions
        </h1>
        <hr style={{borderBlockColor:'black'}} />
        </div>
        <p className='ui description' style={{marginLeft:'10%', color:'blue'}}>
            <ul>
        <li>There are total 30 questions and total duration of the test is 90 minutes.</li><br />
        <li>Each question carries 1 mark. There is no negative marking.</li><br />
        <li>Mark your answer by clicking the appropriate radio button to Save your answer. To change your answer, please click the radio button that you think is appropriate.</li><br />
<li>Click on Reset button to unselect answer.</li><br />
<li>Clicking Save will take you to Next Question. The answer selected can be edited at any point in time before submitting a section. You can navigate between the questions by clicking the question number.</li><br />
<li>Once done click on Finish test  to end the test.</li><br />
<li>Click on Start to proceed.</li><br />
</ul>
All the best!!
            </p>
            {/* <a href='/TestPage' > */}
                <button className="positive ui button" style={{marginLeft:'47%'}}>Start</button>
                {/* </a> */}
        </div>
    )
}

export default Instructions;