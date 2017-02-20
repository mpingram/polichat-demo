import * as React from 'react';
import * as ReactDOM from 'react-dom';

// AppContainer is a necessary wrapper component for HMR (hot module replacement)
import { AppContainer } from 'react-hot-loader';
// module is global 
declare const module: any;

import { AppComponent } from './components/app.component';

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Component name="Michael"/>
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