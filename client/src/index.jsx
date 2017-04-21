import React from 'react';
import { render } from 'react-dom';
//import { Router, Route, Link, browserHistory } from 'react-router';
import { Router, Route, Link, hashHistory } from 'react-router';

// DEVELOPMENT
// ----------
// AppContainer is a necessary wrapper component for HMR (hot module replacement)
import { AppContainer } from 'react-hot-loader';
import activateHMR from './hmr.dev';
// ----------

// document-level styles
import "./shared/styles/main.scss";

// routes
import LandingView from "./landing/landing.view";
import ProfileView from "./profile/profile.view";
import ChatView from "./chat/chat.view";
import ErrorView from "./error/error.view";


render( (

  // TODO: remove AppContainer in production
  // TODO: switch hashHistory --> browserHistory in production
  <AppContainer>
    <Router history={hashHistory}>
      <Route path="/" component={LandingView} />
      <Route path="/chat" component={ChatView} />
      <Route path="/profile" component={ProfileView} />
      <Route path="/*" component={ErrorView} />
    </Router>
  </AppContainer>

), document.getElementById("root") );

// remove activateHMR call in production
activateHMR();