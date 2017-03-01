import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router';

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
  /* remove AppContainer in production */
  <AppContainer>
    <Router history={browserHistory}>
      <Route path="/" component={LandingView} />
      <Route path="/error" component={ErrorView} />
      <Route path="/chat" component={ChatView} />
      <Route path="/profile" component={ProfileView} />
    </Router>
  </AppContainer>

), document.getElementById("root") );

activateHMR();