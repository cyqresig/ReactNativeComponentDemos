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

const styles = StyleSheet.create({
    buttonStyle: {
        margin: 10,
        height: 40,
        backgroundColor: 'red',
        borderRadius: 3,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: 'red',
        justifyContent: 'center',
    },
    buttonTextStyle: {
        fontSize: 17,
        color: 'white'
    },
});

export default class BasicButton extends Component {

  render() {
    return (
      <ScrollView style={{flex: 1, marginTop: 20 + 44, }}>

        <Button
          touchableType={Button.constants.touchableTypes.fade}
          style={styles.buttonStyle}
          textStyle={styles.buttonTextStyle}>
          <Image source={image_liking} style={{width: 40, height: 40, marginRight: 3, }}/>
          icon1
        </Button>

        <Button
          touchableType={Button.constants.touchableTypes.fadeContent}
          style={styles.buttonStyle}
          textStyle={styles.buttonTextStyle}>
          <Image source={image_liking} style={{width: 40, height: 40, marginRight: 3, }}/>
          icon2
        </Button>

        <Button
          touchableType={Button.constants.touchableTypes.highlight}
          underlayColor={'#C90000'}
          style={styles.buttonStyle}
          textStyle={styles.buttonTextStyle}>
          <Image source={image_liking} style={{width: 40, height: 40, marginRight: 3, }}/>
          icon3
        </Button>

        <Button
          touchableType={Button.constants.touchableTypes.blur}
          style={styles.buttonStyle}
          textStyle={styles.buttonTextStyle}>
          <Image source={image_liking} style={{width: 40, height: 40, marginRight: 3, }}/>
          icon4
        </Button>


      </ScrollView>
    )
  }

}