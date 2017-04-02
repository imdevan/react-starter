import React from 'react';
import NavBar from './NavBar';

class Header extends React.Component{
  render(){
    const {className, children} = this.props;
    const defaultClass = '';

    return(
      <div className={`${defaultClass} ${className}`}>
        {children}
      </div>
    );
  }
}

export default Header;
