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

export default class BadgeButton extends Component {

  render() {
    return (
      <ScrollView style={{flex: 1, marginTop: 20 + 44, }}>

        <Button
          touchableType={'opacity'}
          style={{margin: 10, height: 40, backgroundColor: 'red', borderRadius: 3, borderWidth: StyleSheet.hairlineWidth, borderColor: 'red', justifyContent: 'center',}}
          textStyle={{fontSize: 17, color: 'white'}}
        >
          badge2
          <Badge
            style={{ backgroundColor: '#00AAEF', marginLeft: 6, }}
            textStyle={{ color: '#fff', fontSize: 12, }}>
            28
          </Badge>
        </Button>

        <Button
          touchableType={'opacityContent'}
          style={{margin: 10, height: 40, backgroundColor: 'red', borderRadius: 3, borderWidth: StyleSheet.hairlineWidth, borderColor: 'red', justifyContent: 'center',}}
          textStyle={{fontSize: 17, color: 'white'}}
        >
          badge2
          <Badge
            style={{ backgroundColor: '#00AAEF', marginLeft: 6, }}
            textStyle={{ color: '#fff', fontSize: 12, }}>
            88
          </Badge>
        </Button>

        <Button
          touchableType={'highlight'}
          underlayColor={'#C90000'}
          style={{margin: 10, justifyContent: 'center', height: 40, backgroundColor: 'red', borderRadius: 3, borderWidth: StyleSheet.hairlineWidth, borderColor: 'red', justifyContent: 'center',}}
          textStyle={{fontSize: 17, color: 'white'}}
        >
          badge3
          <Badge
            style={{ backgroundColor: '#00AAEF', marginLeft: 6, }}
            textStyle={{ color: '#fff', fontSize: 12, }}>
            8
          </Badge>
        </Button>

        <Button
          touchableType={'blur'}
          style={{margin: 10, justifyContent: 'center', height: 40, backgroundColor: 'red', borderRadius: 3, borderWidth: StyleSheet.hairlineWidth, borderColor: 'red', justifyContent: 'center',}}
          textStyle={{fontSize: 17,  color: 'white'}}
        >
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

