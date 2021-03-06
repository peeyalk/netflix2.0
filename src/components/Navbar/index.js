import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import './index.css';

function Nav() {
  const navigator = useNavigate();
  const [show, handleShow] = useState(false);

  const transitionNavBar = () => {
    if (window.scrollY > 50) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', transitionNavBar);
    return () => window.removeEventListener('scroll', transitionNavBar);
  }, [show]);

  return (
    <div className={`nav ${show && 'nav__black'}`}>
      <div className='nav__contents'>
        <img
          onClick={() => navigator('/')}
          className='nav__logo'
          src='https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png'
          alt='logo'
        />
        <img
          onClick={() => navigator('/edit_profile')}
          className='nav__avatar'
          src='https://avatars.githubusercontent.com/u/17343278?s=40&v=4'
          alt='avatar'
        />
      </div>
    </div>
  );
}
export default Nav;
