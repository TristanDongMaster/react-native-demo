import React, { Component } from 'react';  
import {  
  StyleSheet,  
  View,  
  WebView,  
  TouchableOpacity,
  Dimensions,  
  AppRegistry,
  Text,
  Alert,
  BackAndroid,
  Button,
  BackHandler
} from 'react-native';  
  
const {width, height} = Dimensions.get('window');  

var WEBVIEW_REF = 'webview';
  
const url = "https://mi.ebatong.com/wallet";  
export default class WebViewExample extends Component {  
  static navigationOptions = ({ navigation }) => {
    const {state, setParams} = navigation;
    var isInfo = state.params.mode === 'info';
    const {user} = state.params;
    return {
      title: isInfo ? `${user}'s Contact Info` : `Chat with ${state.params.user}`,
      headerRight: (
        <Button
          title={isInfo ? 'Done' : `${user}'s info`}
          onPress={() => {
            setParams({ mode: isInfo ? 'none' : 'info'});
            navigation.state.params.switchView()
          }}
        />
      ),
    };
  };
  constructor(props) {  
    super(props);  
    this.switchView = this.switchView.bind(this)
    this.state = {
      time:0
    }
    this.url = this.props.navigation.state.params.url
  }  
  componentWillMount(){
    this.props.navigation.setParams({
      user: 0,
      switchView:this.switchView,
    })
  }  
  switchView() {  
    this.setState({
      time:++this.state.time
    })
    this.props.navigation.setParams({
      user: this.state.time,
    })
    Alert.alert('Button!:' +  this.props.navigation.state.params.user);
  }  
  render() {  
    return (  
      <View style={styles.container}> 
        <WebView  
          style={{width:width,height:height,backgroundColor:'gray'}}  
          ref={WEBVIEW_REF}          
          onNavigationStateChange = {this.onNavigationStateChange}
          source={{uri:this.url}}  
          javaScriptEnabled={true}  
          domStorageEnabled={true}            
          />         
      </View>  
    );  
  }  
  
  onNavigationStateChange = (navState) => {
    this.setState({
        backButtonEnabled: navState.canGoBack,
    });
  };
  
  componentDidMount(){
    BackHandler.addEventListener('hardwareBackPress', this.backHandler);
  }
    
  componentWillUnmount(){
    BackHandler.removeEventListener('hardwareBackPress', this.backHandler);
  }
  
  backHandler = () => {
    if(this.state.backButtonEnabled) {
        this.refs[WEBVIEW_REF].goBack();
        return true;
    }
  }
}  
  
const styles = StyleSheet.create({  
  container: {  
    flex: 1,  
    backgroundColor: '#f2f2f2'    
  },  
});  