import React from 'react';

const Footer = ({}) => {

 return (

  <footer className="footer footer-center h-20 bg-gradient-to-t from-white to-transparent text-base-content p-4">
  <aside>
    <p className='font-bold text-neutral text-md'>Copyright © {new Date().getFullYear()} - All right reserved by Odd</p>
  </aside>
</footer>
 );

}

export default Footer;