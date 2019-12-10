/**
 * @format
 */
// "react-native-swiper": "^1.5.14",
import React, { Component } from 'react'
import { AppRegistry, KeyboardAvoidingView, SafeAreaView } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import { Colors } from './src/config';
console.disableYellowBox = false

class AppView extends Component {
    render() {
        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: Colors.Green }}>
                <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding" >
                    <App />
                </KeyboardAvoidingView>
            </SafeAreaView>
        )
    }
}

AppRegistry.registerComponent(appName, () => AppView);
