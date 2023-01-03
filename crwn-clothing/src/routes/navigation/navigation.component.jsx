
import { Fragment } from 'react';
import { Outlet, Link } from 'react-router-dom';
import SignIn from '../sign-in/sign-in.component';

import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';

import './navigation.styles.scss';

const Navigation = () => {
	return (
		<Fragment>
      <div className='navigation'>
        <Link className='logo-container' to='/'>
          <CrwnLogo className='logo' />
        </Link>
        <div className='nav-links-container'>
          <Link className='nav-link' to='/shop'>
            SHOP
          </Link>
          <Link className='nav-link' to='/sign-in'>
            SIGN IN
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

// import { Outlet } from 'react-router-dom';
// import { Fragment, Link } from 'react';

// const Navigation = () => {
//   return (
//     <Fragment>
//       <div className='navigation'>
//         <Link className='logo-container' to='/'>
//           <div>Logo</div>
//         </Link>
//         <div className='nav-links-container'>
//           <Link className='nav-link' to='/shop'>
//             SHOP
//           </Link>
//         </div>
//       </div>
//       <Outlet />
//     </Fragment>
//   );
// };

// export default Navigation;
export default Navigation;