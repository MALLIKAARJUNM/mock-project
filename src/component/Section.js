import React from "react";

const Section = () => {

    // const sectionButtons = () => {
    //     var count = 10;
    //     //var buttons = [];
    //     for(let i = 0; i < count; i++){
    //             // return (<div className="row">
    //             //     <div className="col">
    //             // <button className="btn btn-secondary" style={{borderRadius:'50%'}}>i</button>
    //             // </div>
    //             // </div>)
    //     }
    // }

    return(
        <div>
            <div className="container" style={{width:'40%', marginTop:'-27.5%', marginLeft:'62%'}}>
                <div className="card m-5">
                    <div className="card-body">
                        <div className="card-title" style={{textAlign:'center'}}>
                            <h5>Section</h5>
                        </div><hr />
                        <div>
                        <div className="row">
                    <div className="col">
                <button className="btn btn-secondary" style={{borderRadius:'50%'}}>1</button>
                </div>
                <div className="col">
                <button className="btn btn-secondary" style={{borderRadius:'50%'}}>2</button>
                </div>
                <div className="col">
                <button className="btn btn-secondary" style={{borderRadius:'50%'}}>3</button>
                </div>
                </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section;