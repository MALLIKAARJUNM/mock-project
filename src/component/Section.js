import React, { useState } from 'react';

const Section = (props) => {
    //const [num, setNum] = useState(0);
    const [content, setContent] = useState([]);

    const sectionList = () => {
        //console.log(props.noOfQuestions);
        for(let num=0;num<props.noOfQuestions;num++){
            content.push(<div className='column'>
                <button className='circular ui icon button'>{num+1}</button>
                </div>)
                
}
console.log(content);
return content;
    }

    return(
        <div className='ui container' style={{marginTop:'8%', marginLeft:'20%'}}>
            <div className="ui content">
            <form className='ui form' style={{marginLeft:'80%', width:'300px'}}>
            <div className='ui info message'>
            <div className='ui header' style={{textAlign:'center'}}>
                    Section<br /><hr />
                </div>
            <div className='ui three column grid'>
            {/* <div className='column'>
                 <button className='circular ui icon button'></button>
                 </div> */}{sectionList()}
                </div>
                </div>
                </form>
                </div>

        </div>
    )
}

export default Section;