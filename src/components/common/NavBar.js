import React from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as uiActions from '../../actions/uiActions';

class NavBar extends React.Component{
  constructor(props, context){
    super(props, context);

    this.state = {
      links: [
        {
          link: '/',
          label: 'Home'
        },
        {
          link: '/about',
          label: 'About'
        }
      ]
    };
  }


  render(){
    const {pathname} = this.props.location;
    const {links} = this.state;
    const defaultClass = 'w-80 mw9 center pv3';
    console.log('location', location);

    return(
        <div className={defaultClass}>
          <ul className='list flex pl0'>
            {links.map((link, i) => <li key={i}
              className={`${i + 1 === links.length ? '' :'mr5'}`}>
              <Link to={link.link}
                className={`${pathname === link.link ? 'active': ''} link`}>
                  {link.label}
                </Link>
            </li>)}
          </ul>
        </div>
    );
  }
}

function mapStateToProps(state, ownProps){
  return {
    ui: state.ui
  };
}

function mapDispatchToProps(dispatch){
  return{
    ui_actions: bindActionCreators(uiActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
