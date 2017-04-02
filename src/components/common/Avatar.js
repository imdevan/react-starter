import React from 'react';

class Avatar extends React.Component{
  render(){
    const {className, height, width, src, size} = this.props;
    const background = src ? `url(${src.attributes.sourceUrl})` : 'none';
    const defaultSize = 50;
    const loaded = src ? 'loaded' : '';

    const avatarStyles = {
        height: height || size || defaultSize,
        width: width || size || defaultSize,
        backgroundImage: background
      };

    return(
      <div className={`${className} ${loaded} avatar br-100`}
        style={avatarStyles}/>
    );
  }
}

export default Avatar;
