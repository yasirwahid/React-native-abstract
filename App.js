
import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Alert, KeyboardAvoidingView, SafeAreaView, KeyboardAvoidingViewComponent } from 'react-native';
import Root from './src';
import { Provider } from "react-redux"
import Store from "./src/store"
import NavigationService from './src/config/NavigationService'
import { Colors } from './src/config';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userType: ""
    }
  }


  MainView = () => (
    <Provider store={Store}>
        <Root
          ref={navigatorRef => {
            NavigationService.setTopLevelNavigator(navigatorRef);
          }}
        />
  </Provider>
  )

  render() {
    const { MainView } = this;
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: Colors.Black }}>
        {Platform.OS === "ios" ?
          <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding" >
            <MainView />
          </KeyboardAvoidingView>
          :
          <MainView />
        }
      </SafeAreaView>
    );

  }
}

export default App;
