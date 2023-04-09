import React from "react";

const TestCard = (props) => {


    const displayOptions = () => {
        var optionsList = [];
        for(let i=0;i<props.options.length;i++){
            optionsList.push(<div className="form-control">
            <label for='exampleInputRadio1' className="form-text text-danger" ><input type='radio' id='exampleInputRadio1' className="primary"  key={i} />&emsp;<b>{props.options[i]}</b></label>
            </div>)
            optionsList.push(<br />)
        }
        return optionsList;
    }

    return(
        <div className="container" style={{ width: '65%', marginTop: '-4%', marginRight:'45%' }}>
                <div className="card card-inverse m-5">
                    <div className="card-body">
                        <div className="card-title">
                            <h4>1.Who invented the Internet?</h4>
                        </div><hr />
                        <div className="form">
                            <form>
                                {displayOptions()}
                            </form>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default TestCard;