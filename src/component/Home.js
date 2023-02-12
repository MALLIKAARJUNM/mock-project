import React from 'react';
import imgOne from '../images/imgOne.jpg';
import imgFour from '../images/imgFour.png';
import imgFive from '../images/imgFive.png';
import imgSix from '../images/imgSix.png';
import Navbar from './Navbar';

const Home = () => {


    return(
        <div className='ui background' style={{backgroundImage:`url(${imgOne})`, backgroundSize:'cover', position:'fixed', minWidth:'100%', minHeight:'100%'}}>
          <Navbar />
        <div className='ui container'>
        <h1 className='ui inverted header' style={{fontSize:'100px', textAlign:'center'}}>
            Modern MCQ
            <div className='ui header' style={{fontSize:'20px', fontWeight:'bold'}}>
                Welcome to Home Page
        </div>
        </h1>
        </div>
        <div className='ui container'>
          <form className='ui big icon input'  style={{marginTop:'5%', marginLeft:'38%'}}>
          <div class="ui action input">
  <input type="text" placeholder="Search..." />
  <button class="ui icon button">
    <i class="search icon"></i>
  </button>
</div>
          </form>
        </div>
        <div className='ui container'>
<div class="ui inverted cards"  style={{marginTop:'4%', marginLeft:'36.5%'}}>
  <div class="card">
    <div class="content">
      <img class="right floated mini ui image" src={imgFour} />
      <div class="header" style={{textAlign:'center'}}>
        Test1
      </div>
      <div class="blue ui header">
      Mathematics questions
      </div>
      <div class="description" style={{fontWeight:'bold'}}>
      Number of Questions 30 and duration 50min
      </div>
    </div>
    <div class="extra content">
      <div>
        <a href="/Instructions"><button className='fluid positive ui button'>Start Test</button></a>
      </div>
    </div>
  </div>
  </div>
        </div>
        {/* <div className="ui three column grid" style={{textAlign:'center'}}>
  <div className="column" style={{marginLeft:'5%'}}>
      <a href="/Instructions">
    <div className="ui card">
      <div className="ui image">
        <img src={imgFour}/>
      </div>
      <div className="ui content">
        <a className="ui header">Test-1</a>
      </div>
    </div>
    </a>
  </div>
  <div className="column">
    <div className="ui card">
      <div className="ui image">
        <img src={imgFive} />
      </div>
      <div className="ui content">
        <a className="ui header">Test-2</a>
      </div>
    </div>
  </div>
  <div className="column" style={{marginRight:'-5%'}}>
    <div className="ui card">
      <div className="ui image">
        <img src={imgSix} />
      </div>
      <div className="ui content">
        <a className="ui header">Test-3</a>
      </div>
    </div>
  </div>
</div> */}
        </div>
    )
}

export default Home;