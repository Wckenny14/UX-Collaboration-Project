import MobileNavigation from './MobileNavigation';
import Navigation from './Navigation';

const Header = () => {
  return (

      <div className="header">
          <div className="logo">
            {/* <img></img> */}
          </div>
          <div className='NavBar'>
            <MobileNavigation />
            <Navigation />
          </div>
      </div>
  );
}

export default Header;


