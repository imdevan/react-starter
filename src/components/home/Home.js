import React from 'react';

class Home extends React.Component{
  render(){
    const {className} = this.props;
    const defaultClass = 'w-80 mw9 center ';

    return(
      <div className={`${defaultClass} ${className}`}>
        <h1>Home</h1>
      </div>
    );
  }
}

export default Home;
