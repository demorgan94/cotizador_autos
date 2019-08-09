import React from 'react';

const Header = (props) => {
   return (
      <header>
         <nav className="navbar navbar-lg-expand navbar-dark bg-dark">
            <a className="navbar-brand mx-auto" href="/">{props.titulo}</a>
         </nav>
      </header>
   )
}

export default Header;