import React, { Component } from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from "./reducers";
import LoginForm from './components/LoginForm'
import Router from './Router';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: "AIzaSyA9B5M6kQxBR_0CYwsrVj9obvApqx7_gxw",
      authDomain: "manager-90dbe.firebaseapp.com",
      databaseURL: "https://manager-90dbe.firebaseio.com",
      projectId: "manager-90dbe",
      storageBucket: "manager-90dbe.appspot.com",
      messagingSenderId: "891184296806"
    };
    firebase.initializeApp(config);
  }
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
          <Router />
      </Provider>
    );
  }
}

export default App;
