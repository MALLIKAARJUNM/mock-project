import React from "react";

const Section = () => {


const sectionButtons = () => {
    var total = 30
    var buttons = [];
    var btn = 0;
    var col = "col-3";
    var space = "";
    for(let i=1;i<=total;i++){
        btn = btn+ 1;
        if(btn<10){
        space = "0";
        }
        buttons.push(
            <div className={col}>
            <button className="btn btn-secondary" style={{borderRadius:'50%'}}>{space}{btn}</button>
            </div>);
            col = "col"
        space = "";
            buttons.push(<br />)
            buttons.push(<br />)
            col = "col-3"
        

    }
    return buttons;
    

}

    return(
        <div>
            <div className="container" style={{width:'45%', marginTop:'-30%', marginRight:'-2%'}}>
                <div className="card card-inverse m-5">
                    <div className="card-body">
                        <div className="card-title d-flex justify-content-center" style={{textAlign:'center'}}>
                            <h5>Section</h5>
                        </div><hr />
                        <div>
                            <form>
                                <div className="form-control" style={{overflowY:'scroll'}}>
                                <div className="row d-flex">
                                {sectionButtons()}
                                </div>
                                </div>
                            </form>
                            
                
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section;