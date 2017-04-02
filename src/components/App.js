import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Head from './common/Head';
import Header from './common/Header';
import NavBar from './common/NavBar';
import * as uiActions from '../actions/uiActions';

import '../assets/styles/index.scss';

class App extends Component {
  render() {
    const {location, children} = this.props;

    return(
      <div id="contentWrapper">
        <Head />
        <Header>
          <NavBar location={location} />
        </Header>
        <main className="App flex">
          <div className='w-100'>
            {children}
          </div>
        </main>
      </div>
    );

  }
}

function mapStateToProps(state, ownProps){
  return {
    ui: state.ui,
  };
}

function mapDispatchToProps(dispatch){
  return{
    sidenav_actions: bindActionCreators(uiActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
