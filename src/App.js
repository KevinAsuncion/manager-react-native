import React, { Component } from "react";
import { View, Text } from "react-native";
import { Provider } from "react-redux";
import { createStore } from "redux";
import firebase from 'firebase';
import reducers from "./reducers";
import LoginForm from './components/LoginForm'

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
    return (
      <Provider store={createStore(reducers)}>
        <View>
          <LoginForm />
        </View>
      </Provider>
    );
  }
}

export default App;
