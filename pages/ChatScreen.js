import React from 'react';
import {
  AppRegistry,
  Text,
  View,
  Button
} from 'react-native';
export default class ChatScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: `Chat from ${navigation.state.params.from}`,
  })
  render() {
  	const { navigate } = this.props.navigation;
    return (
      <View>
        <Text>Chat with Lucy</Text>
        <Button
	          onPress={() => navigate('Test')}
	          title="go test"
	        />
      </View>
    );
  }
}