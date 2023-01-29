import React, { useEffect, useState} from 'react';
import { useLocation } from 'react-router-dom';
import imgEight from '../images/imgEight.jpg';
import {useNavigate} from 'react-router-dom';


const TestPage = () => {

    const [radioCheck, setRadioCheck] = useState('');
    const location = useLocation();
    const [index, setIndex] = useState();
    //const [data, setData] = location.state.questions;
    const navigate = useNavigate();
    const [question, setQuestion] = useState("");
    const [options, setOptions] = useState([]);
    const [answer, setAnswer] = useState("");
    const [savedAnswer, setSavedAnswer] = useState("");
    const [next, setNext] = useState(true);

    const onReset = (event) => {
        setRadioCheck('');
    }

    useEffect(()=>{
        if(next){
        location.state.questions.map((element,index) => {
            console.log(element);
            setIndex(index);
            setQuestion(element.question);
        setOptions(element.options);
        setAnswer(element.answer);
        setSavedAnswer(radioCheck);
        setNext(false);
    });}
    },[next])

    const saveData = (event) => {
        //console.log(data);
        //navigate("/TestPage");
        setNext(true);
    }
     
    return(
        <div className='ui background' style={{backgroundImage:`url(${imgEight})`, backgroundSize:'cover', position:'fixed', minWidth:'100%', minHeight:'100%'}}>
        <div className='ui container' style={{marginTop:'5%', marginLeft:'20%'}}>
            <div className="ui content" style={{fontSize:'20px'}}>
                {index + " . " + question}
                </div>
                <br />
                    <form className='ui form'>
                    <div className='ui fluid card' style={{height:'50px'}}>
                    <div className='ui two column grid'>
                        <div className='column'>
                    <input type='radio' style={{marginTop:'3%', marginLeft:'2%'}} value={options[0]} checked={radioCheck===options[0]} onClick={event=>setRadioCheck(event.target.value)}/>
                    </div>
                        <label style={{marginTop:'2%', marginLeft:'-47%', textAlign:'left'}}>{options[0]}</label>
                        </div>
                    </div>
                    <div className='ui fluid card' style={{height:'50px'}}>
                    <div className='ui two column grid'>
                        <div className='column'>
                    <input type='radio' style={{marginTop:'3%', marginLeft:'2%'}} value={options[1]} checked={radioCheck===options[1]} onClick={event=>setRadioCheck(event.target.value)}/>
                    </div>
                        <label style={{marginTop:'2%', marginLeft:'-47%', textAlign:'left'}}>{options[1]}</label>
                        </div>
                    </div>
                    <div className='ui fluid card' style={{height:'50px'}}>
                    <div className='ui two column grid'>
                        <div className='column'>
                    <input type='radio' style={{marginTop:'3%', marginLeft:'2%'}} value={options[2]} checked={radioCheck===options[2]} onClick={event=>setRadioCheck(event.target.value)}/>
                    </div>
                        <label style={{marginTop:'2%', marginLeft:'-47%', textAlign:'left'}}>{options[2]}</label>
                        </div>
                    </div>
                    <div className='ui fluid card' style={{height:'50px'}}>
                    <div className='ui two column grid'>
                        <div className='column'>
                    <input type='radio' style={{marginTop:'3%', marginLeft:'2%'}} value={options[3]} checked={radioCheck===options[3]} onClick={event=>setRadioCheck(event.target.value)}/>
                    </div>
                        <label style={{marginTop:'2%', marginLeft:'-47%', textAlign:'left'}}>{options[3]}</label>
                        </div>
                    </div>
                        </form>
                    </div>
                    <div className="ui right floated buttons" style={{marginTop:'10%', marginRight:'2%'}}>
  <button className="ui button" onClick={onReset}>Reset</button>
  <div className="or"></div>
  <button className="ui positive button active" value="saveAnswer" onClick={saveData}>Save</button>
  </div>

                    </div>
            
    )
}
export default TestPage;