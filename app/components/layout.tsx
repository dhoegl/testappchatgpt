import React from 'react';
import Navbar from './navbar';

const Layout: React.FC = ({ children }) => {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
      <footer>
        <p>© 2024 My Website</p>
      </footer>
    </div>
  );
};

export default Layout;