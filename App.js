import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';

import HomeScreen from './Components/Home/HomeScreen';
import SignInScreen from './Components/Chat/SignInScreen';
import ChatScreen from './Components/Home/ChatScreen';

const App = StackNavigator({
  HomeScreen : {screen : HomeScreen },
  SignInScreen : {screen : SignInScreen },
  ChatScreen : {screen : ChatScreen }
},{
  initialRouteName: 'HomeScreen'
})

export default App
