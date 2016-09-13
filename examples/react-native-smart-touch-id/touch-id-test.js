/**
 * @fileOverview
 * @author HISAME SHIZUMARU
 * @version
 * Created on 16/7/21.
 */


import React, {
  Component
} from 'react'
import {
  StyleSheet,
  View,
  Text,
  Alert,
} from 'react-native'

import TouchId from 'react-native-smart-touch-id'
import Button from 'react-native-smart-button'

export default class TouchIdTest extends Component {

  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', }}>
        <Button
          touchableType={Button.constants.touchableTypes.blur}
          style={{marginVertical: 10, width: 300, justifyContent: 'center', height: 40, backgroundColor: 'red', borderRadius: 3, borderWidth: StyleSheet.hairlineWidth, borderColor: 'red', justifyContent: 'center',}}
          textStyle={{fontSize: 17,  color: 'white'}}
          onPress={this._isSupported}>
          verify if touchId is supported
        </Button>
        <Button
          touchableType={Button.constants.touchableTypes.blur}
          style={{marginVertical: 10, width: 300, justifyContent: 'center', height: 40, backgroundColor: 'red', borderRadius: 3, borderWidth: StyleSheet.hairlineWidth, borderColor: 'red', justifyContent: 'center',}}
          textStyle={{fontSize: 17,  color: 'white'}}
          onPress={this._trggerTouchId}>
          trigger touch id
        </Button>
      </View>
    )
  }

  _isSupported = () => {
    TouchId.isSupported( (error) => {
      if (error) {
        Alert.alert('TouchId is not supported!')
      } else {
        Alert.alert('TouchId is supported!')
      }
    })
  }

  _trggerTouchId = () => {
    let description = 'Verify the existing mobile phone fingerprint using the home key'
    //let title       //fallback button title will be default as 'Enter Password'(localized)
    //let title = ""  //fallback button will be hidden
    let title = "Verify Password"   //fallback button title will be 'Verify Password'(unlocalized)
    TouchId.verify( description, title, (error) => {
      if (error) {
        if(error.message == '-3') {
            //fallback button is pressed
          Alert.alert('errorCode: ' + error.message + ' verify failed, user wants to ' + title)
        }
        else {
          Alert.alert('errorCode: ' + error.message + ' verify failed')
        }
      } else {
        Alert.alert('verify succeeded')
      }
    })
  }

}