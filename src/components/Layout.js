import React from 'react';
import Navigation from './Navigation';
// import SessionCheck from '../HOCs/SessionCheck';

const Layout = ({component}) => {
  return(
    <div>
      <Navigation />
      <div>
        {component}
      </div>
    </div>
  );
}


// const ExtendedLayout = SessionCheck(Layout);
export default Layout;