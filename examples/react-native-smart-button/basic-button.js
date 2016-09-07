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
          disabled={true}
          style={{margin: 10, height: 40, backgroundColor: 'red', borderRadius: 3, borderWidth: StyleSheet.hairlineWidth, borderColor: 'red', justifyContent: 'center',}}
          textStyle={{fontSize: 17, color: 'white'}}
          disabledStyle={{backgroundColor: '#DDDDDD', borderWidth: 0,}}
          disabledTextStyle={{color: '#BCBCBC'}}
        >
          disabled
        </Button>

          <Button
            style={{margin: 10, height: 40, backgroundColor: 'red', borderRadius: 3, borderWidth: StyleSheet.hairlineWidth, borderColor: 'red', justifyContent: 'center',}}
            textStyle={{fontSize: 17, color: 'white'}}
          >
            opacity all
          </Button>

          <Button
            touchableType={'opacityContent'}
            style={{margin: 10, height: 40, backgroundColor: 'red', borderRadius: 3, borderWidth: StyleSheet.hairlineWidth, borderColor: 'red', justifyContent: 'center',}}
            textStyle={{fontSize: 17, color: 'white'}}
          >
            opacity content
          </Button>

          <Button
            touchableType={'highlight'}
            underlayColor={'#C90000'}
            style={{margin: 10, justifyContent: 'center', height: 40, backgroundColor: 'red', borderRadius: 3, borderWidth: StyleSheet.hairlineWidth, borderColor: 'red', justifyContent: 'center',}}
            textStyle={{fontSize: 17, color: 'white'}}
          >
            highlight
          </Button>

          <Button
            touchableType={'blur'}
            style={{margin: 10, justifyContent: 'center', height: 40, backgroundColor: 'red', borderRadius: 3, borderWidth: StyleSheet.hairlineWidth, borderColor: 'red', justifyContent: 'center',}}
            textStyle={{fontSize: 17,  color: 'white'}}

          >
            blur for ios
          </Button>

      </ScrollView>
    )
  }

}