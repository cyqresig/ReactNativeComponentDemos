/**
 * @fileOverview
 * @author HISAME SHIZUMARU
 * @version
 * Created on 16/7/22.
 */

import React, {
  Component,
} from 'react'
import {
  StyleSheet,
  View,
  Image,
  Text,
} from 'react-native'

import CornerLabel from 'react-native-smart-corner-label'

import image_shopping from '../images/shopping.png'

export default class CornerLabelDemo extends Component {

  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff',}}>
        <View style={{ overflow: 'hidden', //don't forget to set this
                       justifyContent: 'center', alignItems: 'center', height: 100, width: 100,
                       borderWidth: StyleSheet.hairlineWidth, borderColor: '#eee', margin: 5}}>
          <Image source={image_shopping} style={{width: 30, height: 30, marginHorizontal: 10, marginBottom: 10,}}/>
          <Text>shopping</Text>
          <CornerLabel
            cornerRadius={36}
            style={{backgroundColor: 'red', }}
            textStyle={{fontSize: 10, color: '#fff', }}>
            New
          </CornerLabel>
        </View>
        <View style={{ overflow: 'hidden', //don't forget to set this
                       justifyContent: 'center', alignItems: 'center', height: 100, width: 100,
                       borderWidth: StyleSheet.hairlineWidth, borderColor: '#eee', margin: 5}}>
          <Image source={image_shopping} style={{width: 30, height: 30, marginHorizontal: 10, marginBottom: 10,}}/>
          <Text>购物</Text>
          <CornerLabel
            alignment={'right'}
            cornerRadius={36}
            style={{backgroundColor: 'red', }}
            textStyle={{fontSize: 12, color: '#fff', }}>
            新
          </CornerLabel>
        </View>
        <View style={{ overflow: 'hidden', //don't forget to set this
                       justifyContent: 'center', alignItems: 'center', height: 100, width: 100,
                       borderWidth: StyleSheet.hairlineWidth, borderColor: '#eee', margin: 5}}>
          <Image source={image_shopping} style={{width: 30, height: 30, marginHorizontal: 10, marginBottom: 10,}}/>
          <Text>shopping</Text>
          <CornerLabel
            cornerRadius={54}
            style={{backgroundColor: 'red', height: 24,}}
            textStyle={{color: '#fff', }}>
            30% off
          </CornerLabel>
        </View>
        <View style={{ overflow: 'hidden', //don't forget to set this
                       justifyContent: 'center', alignItems: 'center', height: 100, width: 100,
                       borderWidth: StyleSheet.hairlineWidth, borderColor: '#eee', margin: 5}}>
          <Image source={image_shopping} style={{width: 30, height: 30, marginHorizontal: 10, marginBottom: 10,}}/>
          <Text>购物</Text>
          <CornerLabel
            cornerRadius={54}
            alignment={'right'}
            style={{backgroundColor: 'red', height: 24,}}
            textStyle={{color: '#fff', fontSize: 12,}}>
            7折优惠
          </CornerLabel>
        </View>
      </View>
    )
  }

}