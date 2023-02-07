import React from 'react';
import { useLocation } from 'react-router-dom';
import imgNine from '../images/imgNine.jpg';


const CompletedPage = ()=>{

    const location = useLocation();
    //{location.state.resultObj.marks}/{location.state.resultObj.questionsCount}
    const display = ()=>{
        console.log(location.state.resultObj);
        //console.log(location.state.resultObj.questionsCount);
        return(<div className='content'>
            <div className='description'>
                25/30
            </div>

        </div>)
    }


    return(
        <div className='ui background' style={{backgroundImage:`url(${imgNine})`, backgroundSize:'cover', position:'fixed', minWidth:'100%', minHeight:'100%'}}>
        <div className='ui fluid container'>
        <div className='ui fluid header' style={{textAlign:'center', marginTop:'5%'}}>
            <h3>Test Completed Successfully!!!</h3>
        </div>
        </div>
        <div style={{marginTop:'7%', marginLeft:'44%'}}>
        <button class="ui inverted button" style={{color:'black', fontSize:'20px'}} onClick={display}>
  Show Result
</button>
        </div>
        <div className='ui olive label' style={{marginTop:'4%',marginLeft:'47%'}}>
            <div className='ui large label'>
                25/30
            </div>

        </div>
        </div>
    )
}

export default CompletedPage;