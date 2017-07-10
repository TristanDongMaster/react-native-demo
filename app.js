import React from 'react';
import {
  AppRegistry,
  Text,
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import HomeScreen from './pages/index.js'
import ChatScreen from './pages/ChatScreen.js'
import TestScreen from './pages/TestScreen.js'
import WebViewExample from './pages/WebView.js'

const AwesomeProject = StackNavigator({
  Home: { screen: HomeScreen },
  Chat: { screen: ChatScreen },
  Test: { screen: TestScreen },
  WebView: { screen: WebViewExample },
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
