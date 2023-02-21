import {GiHamburgerMenu} from 'react-icons/gi'
import {FaShoppingCart} from 'react-icons/fa'

const hamburger = <GiHamburgerMenu className='burger'
    size='25px' color='white'
    cursor='pointer'
    onClick={() => window.location.href = `/adminpage`}/>;

const trolley = <FaShoppingCart className='burger'
    size='20px' color='white'
    cursor='pointer'
    onClick={() => window.location.href = `/adminpage`}/>;

const Header = () => {
  
  return (
      <div className="header">
        <div className='burgerMenu'>
          {hamburger}
        </div>
        <div className="logo">
            <a href="/"><img className='logo' src="https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0595%2F0580%2F3426%2Ffiles%2FThe-Running-Joke_1_1200x1200.png%3Fv%3D1631522041" /></a>
        </div>
        <div className='trollyIcon'>
          {trolley}
        </div>
      </div>
  );
}

export default Header;
