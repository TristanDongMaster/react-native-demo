
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
var Swiper = require('react-native-swiper');
var sliderImgs = [
    'http://images3.c-ctrip.com/SBU/apph5/201505/16/app_home_ad16_640_128.png',
    'http://images3.c-ctrip.com/rk/apph5/C1/201505/app_home_ad49_640_128.png',
    'http://images3.c-ctrip.com/rk/apph5/D1/201506/app_home_ad05_640_128.jpg'
];
var Slider = React.createClass({
    render: function(){
    return (
      <Swiper  showsButtons={false} autoplay={true} height={150} showsPagination={false}>
       
      </Swiper>
    );
  }
});
export default Slider

