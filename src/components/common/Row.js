import React from 'react';

class Row extends React.Component{
  render(){
    const {className, children} = this.props;
    const defaultClass = 'row';

    return(
        <div className={`${defaultClass} ${className}`}>
          {children}
        </div>
    );
  }
}

export default Row;
