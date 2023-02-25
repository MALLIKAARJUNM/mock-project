import React from "react";
import Section from "../component/Section";
import imgEight from '../images/imgEight.jpg';


const TestPage = () => {


    return (
        <div className="bg-image" style={{ backgroundImage: `url(${imgEight})`, backgroundSize: 'cover', position: 'fixed', minWidth: '100%', minHeight: '100%' }}>
            <div className="container" style={{ width: '65%', marginTop: '7%', marginLeft: '3%' }}>
                <div className="card card-inverse m-5">
                    <div className="card-body">
                        <div className="card-title">
                            <h4>1.Who invented the Internet?</h4>
                        </div><hr />
                        <div className="form">
                            <form>
                                <div className="form-control">
                                <label for='exampleInputRadio1' className="form-text"><input type='radio' id='exampleInputRadio1' className="primary" />&emsp;<b>Steve Jobs</b></label>
                                </div><br />
                                <div className="form-control">
                                <label for='exampleInputRadio2' className="form-text"><input type='radio' id='exampleInputRadio2' className="primary" />&emsp;<b>More than one person</b></label>
                                </div><br />
                                <div className="form-control">
                                <label for='exampleInputRadio3' className="form-text"><input type='radio' id='exampleInputRadio3' className="primary" />&emsp;<b>Al Gore</b></label>
                                </div><br />
                                <div className="form-control">
                                <label for='exampleInputRadio4' className="form-text"><input type='radio' id='exampleInputRadio4' className="primary" />&emsp;<b>William Shockley</b></label>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="">
                <Section />
            </div>
        </div>
    )
}

export default TestPage;