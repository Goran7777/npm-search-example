import React, { useState } from 'react';
import { Portal, PortalWithState } from 'react-portal';
import { Provider } from 'react-redux';
import { store } from '../state';

import RepositoriesList from './RepositoriesLists';
import './app.scss';

const App = () => {
  return (
    <Provider store={store}>
      <div className="wrapper">
        <h1 className="wrapper__main">Search For Package</h1>
      </div>
      <RepositoriesList />

      <PortalWithState closeOnOutsideClick closeOnEsc>
        {({ openPortal, closePortal, isOpen, portal }) => (
          <React.Fragment>
            <button className="portalButtonOpen" onClick={openPortal}>
              Open Portal
            </button>
            {portal(
              <div className="portalWithState">
                <p>
                  This is more advanced Portal. It handles its own state. , hit
                  ESC or click outside of me.
                </p>
                <button className="portalButtonClose" onClick={closePortal}>
                  Close me!
                </button>
              </div>
            )}
          </React.Fragment>
        )}
      </PortalWithState>
    </Provider>
  );
};

export default App;
