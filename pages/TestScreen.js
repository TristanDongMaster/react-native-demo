import React from 'react';
import {
  AppRegistry,
  Text,
  View,
  Button
} from 'react-native';
export default class TestScreen extends React.Component {
  static navigationOptions = {
    title: 'TestScreen',
  }
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Text>TestScreen</Text>
         <Button
            onPress={() => navigate('Home')}
            title="go test"
          />
      </View>
    );
  }
}