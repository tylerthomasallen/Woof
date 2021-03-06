import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

import * as AuthApi from './util/api/auth_util';
import * as UserApi from './util/api/user_util';
import { login, retrieveUser } from './actions/session_actions';
import { retrieveDog } from './actions/dog_actions';

document.addEventListener('DOMContentLoaded', () => {

  let store;

  if (window.currentUser) {
    const userId = window.currentUser.currentUser.id;
    const preloadState = {
      entities: {
        users: { [window.currentUser.currentUser.id]: window.currentUser.currentUser}
      },
      session: { id: window.currentUser.currentUser.id }
    };

    store = configureStore(preloadState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  // for testing
  window.AuthApi = AuthApi;
  window.retrieveDog = retrieveDog;
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.login = login;
  window.UserApi = UserApi;
  window.retrieveUser = retrieveUser;
  // end for testing
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, root);
});
