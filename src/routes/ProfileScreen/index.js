import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { selectAuthUser } from '../../redux/authUserReducer';
import Nav from '../../components/Navbar';
import { auth } from '../../FirebaseApp';
import './index.css';

function ProfileScreen() {
  const navigator = useNavigate();
  const currentUser = useSelector(selectAuthUser);

  const handleLogout = () => {
    auth.signOut();
    navigator('/');
  };
  return (
    <div className='profileScreen'>
      {/* Nav */}
      <Nav />

      <div className='profileScreen_body'>
        <h1>Edit Profile</h1>
        <div className='profileScreen__info'>
          <img
            src='https://avatars.githubusercontent.com/u/17343278?v=4'
            alt='avatar'
          />
          <div className='profileScreen_details'>
            <h2>{currentUser.email}</h2>
            <div className='profileScreen_plans'>
              <h3>Plans (Current Plan: None)</h3>
              <button onClick={handleLogout} className='profileScreen_signOut'>
                Sign out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ProfileScreen;
