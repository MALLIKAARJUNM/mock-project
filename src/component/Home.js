import React from 'react';
import imgOne from '../images/imgOne.jpg';
import imgFour from '../images/imgFour.png';
import imgFive from '../images/imgFive.png';
import imgSix from '../images/imgSix.png';

const Home = () => {


    return(
        <div className='ui background' style={{backgroundImage:`url(${imgOne})`, backgroundSize:'cover', position:'fixed', minWidth:'100%', minHeight:'100%'}}>
        <div className='ui container'>
        <h1 className='ui header' style={{fontSize:'100px', textAlign:'center'}}>
            Modern World 
            <div className='ui brown header' style={{fontSize:'25px'}}>
                !Welcome to Home Page
        </div>
        </h1>
        </div>
        <div class="ui three column grid" style={{textAlign:'center'}}>
  <div class="column" style={{marginLeft:'5%'}}>
      <a href="/InstructionPage">
    <div class="ui card">
      <div class="image">
        <img src={imgFour}/>
      </div>
      <div class="content">
        <a class="header">Logical</a>
      </div>
    </div>
    </a>
  </div>
  <div class="column">
    <div class="ui card">
      <div class="image">
        <img src={imgFive} />
      </div>
      <div class="content">
        <a class="header">Verbal</a>
      </div>
    </div>
  </div>
  <div class="column" style={{marginRight:'-5%'}}>
    <div class="ui card">
      <div class="image">
        <img src={imgSix} />
      </div>
      <div class="content">
        <a class="header">Numerical</a>
      </div>
    </div>
  </div>
</div>
        </div>
    )
}

export default Home;