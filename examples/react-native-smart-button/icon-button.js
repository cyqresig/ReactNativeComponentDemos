/**
 * @fileOverview
 * @author HISAME SHIZUMARU
 * @version
 * Created on 16/7/4.
 */

import React, {Component} from 'react'
import {
  ScrollView,
  View,
  StyleSheet,
  Image,
  Text,
} from 'react-native'

import Button from 'react-native-smart-button'
import image_liking from '../images/liking.png'

export default class BasicButton extends Component {

  render() {
    return (
      <ScrollView style={{flex: 1, marginTop: 20 + 44, }}>

        <Button
          touchableType={'opacity'}
          style={{margin: 10, height: 40, backgroundColor: 'red', borderRadius: 3, borderWidth: StyleSheet.hairlineWidth, borderColor: 'red', justifyContent: 'center',}}
          textStyle={{fontSize: 17, color: 'white'}}
        >
          <Image source={image_liking} style={{width: 40, height: 40, marginRight: 3, }}/>
          icon1
        </Button>

        <Button
          touchableType={'opacityContent'}
          style={{margin: 10, height: 40, backgroundColor: 'red', borderRadius: 3, borderWidth: StyleSheet.hairlineWidth, borderColor: 'red', justifyContent: 'center',}}
          textStyle={{fontSize: 17, color: 'white'}}
        >
          <Image source={image_liking} style={{width: 40, height: 40, marginRight: 3, }}/>
          icon2
        </Button>

        <Button
          touchableType={'highlight'}
          underlayColor={'#C90000'}
          style={{margin: 10, justifyContent: 'center', height: 40, backgroundColor: 'red', borderRadius: 3, borderWidth: StyleSheet.hairlineWidth, borderColor: 'red', justifyContent: 'center',}}
          textStyle={{fontSize: 17, color: 'white'}}
        >
          <Image source={image_liking} style={{width: 40, height: 40, marginRight: 3, }}/>
          icon3
        </Button>

        <Button
          touchableType={'blur'}
          style={{margin: 10, justifyContent: 'center', height: 40, backgroundColor: 'red', borderRadius: 3, borderWidth: StyleSheet.hairlineWidth, borderColor: 'red', justifyContent: 'center',}}
          textStyle={{fontSize: 17,  color: 'white'}}
        >
          <Image source={image_liking} style={{width: 40, height: 40, marginRight: 3, }}/>
          icon4
        </Button>


      </ScrollView>
    )
  }

}