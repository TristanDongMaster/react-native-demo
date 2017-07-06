/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

var Header = React.createClass({
    render: function(){
        return (
            <View style={styles.container}>
                <Text style={styles.text}>{this.props.name}</Text>
            </View>
        );
    }
});

const styles = StyleSheet.create({
  container: {
    flex:1,
    height:50,
    borderBottomWidth: 1,
    borderColor: '#222',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#222',
    fontSize: 20,
  },
});

export default Header