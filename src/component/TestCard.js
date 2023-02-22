import React from 'react'
import imgFour from '../images/imgFour.png';

const TestCard = () => {
    <div>
        <div className='card m-5' style={{ fontFamily: 'sans-serif', width: 'auto', textAlign: 'center' }}>
                <div className='col-7'><h3 className='model-title'>Test1</h3>
                    <img className="card-img-top" src={imgFour} alt="Card img cap" style={{ width: '5%' }} />
                </div>
                <div>

                </div>
            </div>
    </div>
}

export default TestCard;