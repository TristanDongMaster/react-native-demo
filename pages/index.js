import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  Button,
  Alert,
  ScrollView,
  RefreshControl,
  Linking,
} from 'react-native';
import Header from '../component/Header.js'

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  constructor(props) {
    super(props);
    this._onRefresh = this._onRefresh.bind(this)
    this.onButtonPress = this.onButtonPress.bind(this)
    this.state = {
      text: '',
      URL:2324,
      isRefreshing: false,
      loaded: 0,
      refreshTime:0,
      refreshData:'0次' + ' - ' +  (new Date()).getTime(),
      movies:[]
    };
  }
  componentDidMount(){
 	
  }
  _onRefresh() {
    this.setState({isRefreshing: true});
    setTimeout(() => {
      this.setState({
        loaded: this.state.loaded + 10,
        isRefreshing: false,
        refreshTime:this.state.refreshTime + 1,
        refreshData: this.state.refreshTime + 1 +  '次' + ' - ' +  (new Date()).getTime(),
      });
    }, 1000);
    fetch('https://facebook.github.io/react-native/movies.json')
    .then((response) => response.json())
    .then((responseJson) => {
      this.setState({movies:Object.assign([],this.state.movies,responseJson.movies)}) 
    })
    .catch((error) => {
      console.error(error);
    });
  }
  onButtonPress(){
    Alert.alert('Button has been pressed!');
  }
  render() {
    const { navigate } = this.props.navigation;
    return (
    	<View style={styles.container}>
        <ScrollView contentContainerStyle={styles.contentContainer} refreshControl={
          <RefreshControl
            refreshing={this.state.isRefreshing}
            onRefresh={this._onRefresh}
            tintColor="#ff0000"
            title="Loading..."
            titleColor="#00ff00"
            colors={['#ff0000', '#00ff00', '#0000ff']}
            progressBackgroundColor="#ffff00"
          />} >
          <View style={styles.row}>
            <Image source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}
            style={{flex:1, height: 50}} />
          </View>
	        <Button
	          onPress={() => navigate('Chat',{ from: 'home' })}
	          title="Chat with Lucy"
	        />
	        <Button
	          onPress={() => navigate('WebView',{ from: 'home',user:'2222',url:"https://mi.ebatong.com/wallet"})}
	          title="go to wallet"
	        />
	        <Button
	          onPress={() => navigate('WebView',{ from: 'home',user:'2222',url:"https://baidu.com"})}
	          title="go to baidu"
	        />
	        <Button
	          onPress={() => {
	          	Linking.openURL('https://baidu.com').catch(err => console.error('An error occurred', err));
	          }}
	          title="link url"
	        />
	        
          <View style={styles.row}>
            <Header name='头部-首页'/>
          </View>
          {
          	this.state.movies.map((item,index)=>{
          		return (
          			<Text key={index}>{item.title}</Text>
          			)
          	})
          }
          
          <Button
            onPress={this.onButtonPress}
            title="Learn More"
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
          />
          <View style={styles.row}>
            <Text style={styles.welcome1}>
                123123
            </Text>
            <Text style={styles.welcome2}>
                {this.state.refreshData}
            </Text>
          </View>
          <TextInput
            style={{height: 40,width:200,}}
            placeholder="Type here to translate!"
            onChangeText={(text) => this.setState({text})}
          />
          <Text style={styles.welcome2}>
          The British and Irish Lions have named an unchanged team and bench for the third and decisive Test against New Zealand.
          It means they will field the same starting XV in consecutive Tests for the first time since 1993.

          Sam Warburton again captains the side from the blind-side flank.

          Victory on Saturday at Eden Park - where New Zealand have not lost since 1994 - would give the Lions only their second ever series win in New Zealand.

          Listen: 5 live reaction to Lions selection with Ugo Monye
          Jordie handed first NZ start to complete Barrett brothers trio
          Deciding Test might be tougher than World Cup final, says NZ's 'Professor'
          Lions head coach Warren Gatland, who saw his side win 24-21 win in Wellington last week to level the series, said: "It is not very often on a Lions tour that you get to pick the same 23 for the following game.
          The British and Irish Lions have named an unchanged team and bench for the third and decisive Test against New Zealand.

          It means they will field the same starting XV in consecutive Tests for the first time since 1993.

          Sam Warburton again captains the side from the blind-side flank.
          Victory on Saturday at Eden Park - where New Zealand have not lost since 1994 - would give the Lions only their second ever series win in New Zealand.
          Listen: 5 live reaction to Lions selection with Ugo Monye
          Jordie handed first NZ start to complete Barrett brothers trio
          Deciding Test might be tougher than World Cup final, says NZ's 'Professor'
          Lions head coach Warren Gatland, who saw his side win 24-21 win in Wellington last week to level the series, said: "It is not very often on a Lions tour that you get to pick the same 23 for the following game.
          </Text>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: 'flex-start',
    //alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  row:{
    flexDirection:'row',
    borderWidth: 1,
    borderColor: '#F0F0F0',
  },
  welcome1: {
    flex:1,
    fontSize: 20,
    backgroundColor: 'red',
    textAlign: 'center',
  },
  welcome2: {
    flex:2,
    fontSize: 20,
    backgroundColor: 'green',
  },
  header:{
    flexDirection:'row',
    borderWidth: 1,
    borderColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText:{
    flex:1,
    fontSize: 20,
    color: '#222',
    borderColor:'#222',
    textAlign: 'center',
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
   contentContainer: {
      paddingVertical: 0
    }
});