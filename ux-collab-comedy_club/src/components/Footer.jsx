import Popup from '../components/Popup';
import { useState } from 'react';

function Footer() {
    const [buttonPopup, setButtonPopup] = useState(false);

    return (
        <div className='footer'>
        <h3 className='footerH3'>Incase you missed it, click here to subscribe to our newsletter</h3>
        <button className="extraBtn" onClick={() => setButtonPopup(true)}>Subscribe</button>
            <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
                <div className='popupstyle'>
                <img className='logo sub' src="https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0595%2F0580%2F3426%2Ffiles%2FThe-Running-Joke_1_1200x1200.png%3Fv%3D1631522041" />
                    <h3 classname='subTitle'>Sign up to our mailing list</h3>
                    <p className='subP'>Get discounted tickets, line-ups and latest news about the Australian comedy world.</p>
                    <button className='subscribeBtn'>Subscribe</button>
                </div>
            </Popup>
        </div>
    )
};

export default Footer;