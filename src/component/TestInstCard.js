import React from 'react'
import { useNavigate } from 'react-router-dom';
import imgFour from '../images/imgFour.png';

const TestInstCard = () => {

    const navigate = useNavigate();

    const navigateTo = () => {
        navigate('/instructions');
    }

    return (
        <div className='d-flex justify-content-center'>
            <div className='card m-5' style={{ fontFamily: 'sans-serif', width: 'auto', textAlign: 'center' }}>
                <div className='card-body'>
                    <div className='col-7' style={{marginLeft:'25%'}}><h3 className='model-title d-flex justify-content-center'>Test1&emsp;<img className="col-7 card-img-top img-responsive" src={imgFour} alt="Card img cap" style={{ width: '25%' }} />
                    </h3>
                    </div>
                    <hr />
                    <h5 className='card-subtitle text-primary'>Mathematics Questions</h5>
                    <p className='card-text'>test contains 30 questions each carries one mark, duration 35min</p>
                </div>
                <div>
                <button className='btn btn-success mb-2' onClick={navigateTo}>GO</button>
                </div>
            </div>
            
        </div>
    )
}

export default TestInstCard;