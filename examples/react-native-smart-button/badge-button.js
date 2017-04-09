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
import Badge from 'react-native-smart-badge'

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

export default class BadgeButton extends Component {

  render() {
    return (
      <ScrollView style={{flex: 1, marginTop: 20 + 44, }}>

        <Button
          touchableType={Button.constants.touchableTypes.fade}
          style={styles.buttonStyle}
          textStyle={styles.buttonTextStyle}>
          badge2
          <Badge
            style={{ backgroundColor: '#00AAEF', marginLeft: 6, }}
            textStyle={{ color: '#fff', fontSize: 12, }}>
            28
          </Badge>
        </Button>

        <Button
          touchableType={Button.constants.touchableTypes.fadeContent}
          style={styles.buttonStyle}
          textStyle={styles.buttonTextStyle}>
          badge2
          <Badge
            style={{ backgroundColor: '#00AAEF', marginLeft: 6, }}
            textStyle={{ color: '#fff', fontSize: 12, }}>
            88
          </Badge>
        </Button>

        <Button
          touchableType={Button.constants.touchableTypes.highlight}
          underlayColor={'#C90000'}
          style={styles.buttonStyle}
          textStyle={styles.buttonTextStyle}>
          badge3
          <Badge
            style={{ backgroundColor: '#00AAEF', marginLeft: 6, }}
            textStyle={{ color: '#fff', fontSize: 12, }}>
            8
          </Badge>
        </Button>

        <Button
          touchableType={Button.constants.touchableTypes.blur}
          style={styles.buttonStyle}
          textStyle={styles.buttonTextStyle}>
          badge4
          <Badge
            style={{ backgroundColor: '#00AAEF', marginLeft: 6, }}
            textStyle={{ color: '#fff', fontSize: 12, }}>
            18
          </Badge>
        </Button>


      </ScrollView>
    )
  }

}

