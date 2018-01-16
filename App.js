import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import reducers from './src/store';
import Router from './src/Router';

class App extends Component {

    componentWillMount() {
        const config = {
            apiKey: "AIzaSyDKRDPiDtXfu3nPbNg2ErIn4EuWL2lpzF8",
            authDomain: "stackathon-1e257.firebaseapp.com",
            databaseURL: "https://stackathon-1e257.firebaseio.com",
            projectId: "stackathon-1e257",
            storageBucket: "stackathon-1e257.appspot.com",
            messagingSenderId: "166274831906"
        };
        firebase.initializeApp(config);
    }

    render() {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk))
        return (
            <Provider store={store}>
                <Router />
            </Provider>
        )
    }
}

export default App;
