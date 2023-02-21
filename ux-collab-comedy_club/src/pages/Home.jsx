import Popup from '../components/Popup';
import { useState, useEffect } from 'react';
import Header from '../components/Header';

function Home() {
    const [timedPopup, setTimedPopup] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setTimedPopup(true);
        }, 2000);
    }, []);

    return (
        <div>
            <Header />
            <div className='mainBodyImage'>
                <h3 className="mainBodyText">THE RUNNING JOKE</h3>
                <h1 className='mainBodyTitle'>Sydney's #1 Comedy Club</h1>
                <button className="ticketBtn">BUY TICKETS</button>
                <Popup trigger={timedPopup} setTrigger={setTimedPopup}>
                    <div className='popupstyle'>
                        <img className='logo sub' src="https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0595%2F0580%2F3426%2Ffiles%2FThe-Running-Joke_1_1200x1200.png%3Fv%3D1631522041" />
                        <h3 className='subTitle'>Sign up to our mailing list</h3>
                        <p className='subP'>Get discounted tickets, line-ups and the latest news about the Australian comedy world.</p>
                        <a className='subscribeLink' href='/newsletter'>
                            <button className='subscribeBtn'>
                                Subscribe
                            </button>
                        </a>
                    </div>
                </Popup>
            </div>
        </div>
    )
};


export default Home;