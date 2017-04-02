import React from 'react';

class Col extends React.Component{
  render(){
    const {className, children, size} = this.props;
    const defaultClass = size ? `col-${size}` : 'col';

    return(
        <div className={`${defaultClass} ${className}`}>
          {children}
        </div>
    );
  }
}

export default Col;
