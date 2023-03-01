import React from "react";

const Section = () => {

    const sectionButtons = () => {
        var count = 7;
        var buttons = [];
        var btn = 0;
        var col = "col-3";
        var space = "";
        for(let i = 0; i < count; i++){
                for(let j=0;j<4;j++){
                    btn = btn+ 1;
                    if(btn<10){
                        space = "0";
                    }
                    buttons.push(
                    <div className={col}>
                    <button className="btn btn-secondary" style={{borderRadius:'50%'}}>{space}{btn}</button>
                    </div>);
                    col = "col-3";
                    space = "";
                }
                col = "col";
                buttons.push(<br />);
                buttons.push(<br />);
                
        }
        return buttons;
    }

    return(
        <div>
            <div className="container" style={{width:'auto', height:'auto', marginTop:'-27.5%', marginLeft:'62%'}}>
                <div className="card m-5">
                    <div className="card-body">
                        <div className="card-title" style={{textAlign:'center'}}>
                            <h5>Section</h5>
                        </div><hr />
                        <div>
                        <div className="row d-flex">
                            {sectionButtons()}
                    {/* <div className="col">
                <button className="btn btn-secondary" style={{borderRadius:'50%'}}>1</button>
                </div>
                <div className="col">
                <button className="btn btn-secondary" style={{borderRadius:'50%'}}>2</button>
                </div>
                <div className="col">
                <button className="btn btn-secondary" style={{borderRadius:'50%'}}>3</button>
                </div>
                <div className="col">
                <button className="btn btn-secondary" style={{borderRadius:'50%'}}>4</button>
                </div> */}
                </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section;