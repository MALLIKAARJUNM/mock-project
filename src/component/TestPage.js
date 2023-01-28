import React, { useState} from 'react';
import { useLocation } from 'react-router-dom';
import imgEight from '../images/imgEight.jpg';

const TestPage = () => {

    const [radioCheck, setRadioCheck] = useState('');
    var questions = useState("");
    const location = useLocation();

    const onReset = (event) => {
        setRadioCheck('');
    }
     
    return(
        <div className='ui background' style={{backgroundImage:`url(${imgEight})`, backgroundSize:'cover', position:'fixed', minWidth:'100%', minHeight:'100%'}}>
        <div className='ui container' style={{marginTop:'5%', marginLeft:'20%'}}>
            <div className="ui content" style={{fontSize:'20px'}}>
                {location.state.questions.question}
                </div>
                <br />
                    <form className='ui form'>
                    <div className='ui fluid card' style={{height:'50px'}}>
                    <div className='ui two column grid'>
                        <div className='column'>
                    <input type='radio' style={{marginTop:'3%', marginLeft:'2%'}} value={'radioCheckOne'} checked={radioCheck==='radioCheckOne'} onClick={event=>setRadioCheck(event.target.value)}/>
                    </div>
                        <label style={{marginTop:'2%', marginLeft:'-47%', textAlign:'left'}}> {location.state.questions.options[0]}</label>
                        </div>
                    </div>
                    <div className='ui fluid card' style={{height:'50px'}}>
                    <div className='ui two column grid'>
                        <div className='column'>
                    <input type='radio' style={{marginTop:'3%', marginLeft:'2%'}} value={'radioCheckTwo'} checked={radioCheck==='radioCheckTwo'} onClick={event=>setRadioCheck(event.target.value)}/>
                    </div>
                        <label style={{marginTop:'2%', marginLeft:'-47%', textAlign:'left'}}>  {location.state.questions.options[1]}</label>
                        </div>
                    </div>
                    <div className='ui fluid card' style={{height:'50px'}}>
                    <div className='ui two column grid'>
                        <div className='column'>
                    <input type='radio' style={{marginTop:'3%', marginLeft:'2%'}} value={'radioCheckThree'} checked={radioCheck==='radioCheckThree'} onClick={event=>setRadioCheck(event.target.value)}/>
                    </div>
                        <label style={{marginTop:'2%', marginLeft:'-47%', textAlign:'left'}}> {location.state.questions.options[2]}</label>
                        </div>
                    </div>
                    <div className='ui fluid card' style={{height:'50px'}}>
                    <div className='ui two column grid'>
                        <div className='column'>
                    <input type='radio' style={{marginTop:'3%', marginLeft:'2%'}} value={'radioCheckFour'} checked={radioCheck==='radioCheckFour'} onClick={event=>setRadioCheck(event.target.value)}/>
                    </div>
                        <label style={{marginTop:'2%', marginLeft:'-47%', textAlign:'left'}}> {location.state.questions.options[3]}</label>
                        </div>
                    </div>
                        </form>
                    </div>
                    <div className="ui right floated buttons" style={{marginTop:'10%', marginRight:'2%'}}>
  <button className="ui button" onClick={onReset}>Reset</button>
  <div className="or"></div>
  <button className="ui positive button active">Save</button>
  </div>

                    </div>
            
    )
}
export default TestPage;