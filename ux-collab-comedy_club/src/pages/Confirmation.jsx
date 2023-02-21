import Popup from '../components/Popup';
import { useState, useEffect } from 'react';
import Header from '../components/Header';

function Confirmation() {
    const [timedPopup, setTimedPopup] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setTimedPopup(true);
        }, 1000);
    }, []);

    return (
        <div>
            <Header />
            <div className='mainBodyImage'>
                <Popup trigger={timedPopup} setTrigger={setTimedPopup}>
                    <div className='popupstyle'>
                        <img className='logo sub' src="https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0595%2F0580%2F3426%2Ffiles%2FThe-Running-Joke_1_1200x1200.png%3Fv%3D1631522041" />
                        <h3 className='subTitle'>Thanks!</h3>
                        <p className='confirmP'>You have successfully subscribed.</p>
                    </div>
                </Popup>
            </div>
        </div>
    )
};

export default Confirmation;