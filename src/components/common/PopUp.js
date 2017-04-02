import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class PopUp extends React.Component{
  render(){
    const {className, children} = this.props;
    const popUpContainerClass = 'pop-up__container ';

    return(
      <div className={`${defaultClass} ${className}`}>
        {children}
      </div>
    );
  }
}

export default PopUp;
