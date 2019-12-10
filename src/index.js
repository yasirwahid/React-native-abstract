//Navigations here
import { Image, View } from 'react-native'
import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
// import { createBottomTabNavigator } from 'react-navigation-tabs';

import {
  Login,
  Signup,
  Home,


} from './containers';

// import { Transition } from './config';

const AuthNavigator = createStackNavigator(
  {
    Login: { screen: Login },
    Signup: { screen: Signup },
    // ForgotPassword: { screen: ForgotPassword },
  },

  {
    initialRouteName: 'Login',
    headerMode: 'none',
  }
)
const AppNavigator = createStackNavigator(
  {
    Home: { screen: Home },
  },

  {
    initialRouteName: 'Home',
    headerMode: 'none',
  }
)


const RootStack = createAppContainer(createSwitchNavigator({
  Auth: AuthNavigator,
  App: AppNavigator,
},
  {
    initialRouteName: 'Auth'
  }
));

export default RootStack