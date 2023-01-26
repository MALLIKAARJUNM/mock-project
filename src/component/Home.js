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
        <div className="ui three column grid" style={{textAlign:'center'}}>
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
</div>
        </div>
    )
}

export default Home;