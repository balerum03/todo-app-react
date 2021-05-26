import React from 'react';
import Navigation from './Navigation';

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

export default Layout;
