import * as React from 'react';
import * as ReactDOM from 'react-dom';

// AppContainer is a necessary wrapper component for HMR (hot module replacement)
import { AppContainer } from 'react-hot-loader';

import { AppComponent } from './components/app.component';

// global styles: scss variables, resets, and global media queries
import './components/shared/global-styles/main.scss';

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('root')
  );
};

render(AppComponent);

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./components/app.component', () => {
    render(AppComponent)
  });
}