import React from 'react';

class About extends React.Component{
  render(){
    const {className} = this.props;
    const defaultClass = 'w-80 mw8 center ';

    return(
      <div className={`${defaultClass} ${className}`}>
        <h1>
          About
        </h1>
      </div>
    );
  }
}

export default About;
