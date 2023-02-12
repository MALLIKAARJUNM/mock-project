import React, { useEffect, useState} from 'react';
import { useLocation } from 'react-router-dom';
import imgEight from '../images/imgEight.jpg';
import {useNavigate} from 'react-router-dom';
import Section from './Section';


const TestPage = () => {

    const [radioCheck, setRadioCheck] = useState('');
    const location = useLocation();
    const [index, setIndex] = useState();
    const navigate = useNavigate();
    const [question, setQuestion] = useState("");
    const [options, setOptions] = useState([]);
    const [correctAnswered, setCorrectAnswered] = useState([]);
    const [answer,setAnswer] = useState("");
    const [savedAnswer, setSavedAnswer] = useState([""]);
    const [next, setNext] = useState("saveAnswer");
    const [count, setCount] = useState(0);
    const [resultObj, setResultObj] = useState({});
    const [noOfQuestions, setNoOfQuestions] = useState();

    const onReset = (event) => {
        setRadioCheck('');
    }

    useEffect(()=>{
        //console.log(savedAnswer);
        if(next == "saveAnswer" && count<location.state.questions.length){
            setIndex(count+1);
            setQuestion(location.state.questions[count].question);
            setAnswer(location.state.questions[count].answer);
        setOptions(location.state.questions[count].options);
        setNext("");
        
    }
    else if(count==location.state.questions.length){
        for(var countTwo=0;countTwo<location.state.questions.length;countTwo++){
            // console.log(location.state.questions[countTwo].answer);
            //          console.log(savedAnswer[countTwo]);
                    if(location.state.questions[countTwo].answer==savedAnswer[countTwo]){
                        correctAnswered.push(countTwo);
                        //console.log(correctAnswered);
                    }
                    // console.log(location.state.questions[countTwo].answer);
                    // console.log(savedAnswer[countTwo]);
                }
                moveFinish(location.state.questions.length, correctAnswered);
    }
    },[next, count])

    useEffect(()=>{
        setNoOfQuestions(location.state.questions.length);
    },[])

    useEffect(()=>{
        //console.log(savedAnswer);
        savedAnswer[count] = radioCheck;
        //console.log(savedAnswer);
    },[radioCheck])

    const moveFinish = (questionsCount, marks) =>{
        //calculateResult();
        console.log(questionsCount);
        console.log(marks);
        setResultObj({correctAnswered:correctAnswered});
        console.log(resultObj);
        navigate("/CompletedPage",{state:{resultObj:resultObj}});
    }

    // const calculateResult = () =>{
    //     for(count=0;count<location.state.questions.length;count++){
    //         if(location.state.questions[count].answer==savedAnswer[count]){
    //             setCorrectAnswered(correctAnswered+1);
    //         }
    //     }
    // }

    const saveData = (event) => {
        //console.log(data);
        //navigate("/TestPage");
        setRadioCheck('');
        setNext(event.target.value);
        setCount(count+1);
    }
     
    return(
        <div className='ui background' style={{backgroundImage:`url(${imgEight})`, backgroundSize:'cover', position:'fixed', minWidth:'100%', minHeight:'100%'}}>
            <Section noOfQuestions={noOfQuestions}>
            
                </Section>
        <div className='ui container' style={{marginTop:'-15%', marginLeft:'20%'}}>
            <div className="ui content" style={{fontSize:'20px', fontWeight:'bold'}}>
                {index + " . " + question}
                </div>
                <br />
                    <form className='ui form' style={{width:'800px'}}>
                        <div className='ui info message' style={{color:'black'}}>
                            {options.map((element)=>{
                                
                                return <div className='ui fluid card' style={{height:'50px'}} >
                            <div className='ui two column grid'>
                        <div className='column'>
                    <input type='radio' style={{marginTop:'5%', marginLeft:'2%'}} checked={radioCheck===element}/>
                    </div>
                        <label style={{marginTop:'3%', marginLeft:'-47%', textAlign:'left'}}>&emsp;{element}</label>
                        </div>                    </div>
})}
                    {/* <div className='ui fluid card' style={{height:'50px'}}>
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
                    </div> */}
                    </div>
                        </form>
                    </div>
                    <div className="ui right floated buttons" style={{marginTop:'8%', marginRight:'2%'}}>
                    <button className="ui button" style={{marginRight:'5%'}}>section</button>              
  <button className="ui button" onClick={onReset}>Reset</button>
  <div className="or"></div>
  <button className="ui positive button active" value="saveAnswer" onClick={saveData}>Save</button>
  </div>

                    </div>
            
    )
}
export default TestPage;