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
    View,
    Text,
    Image,
} from 'react-native'

import SecurityText from 'react-native-smart-security-text'
import Button from 'react-native-smart-button'
import image_eye_open from '../images/eye_open.png'
import image_eye_close from '../images/eye_close.png'

export default class SecurityTextDemo extends Component {

    // 构造
      constructor(props) {
        super(props)
        // 初始状态
        this.state = {
            isSecurity: false,
        }
      }

    render() {
        return (
            <View style={{marginTop: 64, flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff',}}>
                <Button
                    style={{margin: 10, justifyContent: 'center', height: 40, justifyContent: 'center',}}
                    onPress={this._onSecurityChange}
                >
                    <Image source={this.state.isSecurity ? image_eye_close : image_eye_open} style={{width: 40, height: 40, marginRight: 3, }}/>
                </Button>
                <SecurityText
                    securityOptions={{
                        isSecurity: this.state.isSecurity,
                        startIndex: 3,
                        endIndex: 7,
                    }}
                    style={{margin:10, fontSize: 16, color: 'red',}}>
                    15912390987
                </SecurityText>
                <SecurityText
                    securityOptions={{
                        isSecurity: this.state.isSecurity,
                        startIndex: 0,
                        endIndex: 1,
                    }}
                    style={{margin:10, fontSize: 16, color: 'red',}}>
                    15912390987
                </SecurityText>
                <SecurityText
                    securityOptions={{
                        isSecurity: this.state.isSecurity,
                        startIndex: 0,
                        endIndex: 12,
                    }}
                    style={{margin:10, fontSize: 16, color: 'red',}}>
                    15912390987
                </SecurityText>
                <SecurityText
                    securityOptions={{
                        isSecurity: this.state.isSecurity,
                        startIndex: 11,
                        endIndex: 12,
                    }}
                    style={{margin:10, fontSize: 16, color: 'red',}}>
                    15912390987
                </SecurityText>
                <SecurityText
                    securityOptions={{
                        isSecurity: this.state.isSecurity,
                        startIndex: -7,
                        endIndex: -3,
                    }}
                    style={{margin:10, fontSize: 16, color: 'red',}}>
                    15912390987
                </SecurityText>
                <SecurityText
                    securityOptions={{
                        isSecurity: this.state.isSecurity,
                        length: 4,
                    }}
                    style={{margin:10, fontSize: 16, color: 'red',}}>
                    username
                </SecurityText>
                <SecurityText
                    securityOptions={{
                        isSecurity: this.state.isSecurity,
                        length: 10,
                    }}
                    style={{margin:10, fontSize: 16, color: 'red',}}>
                    address
                </SecurityText>
            </View>
        )
    }

    _onSecurityChange = () => {
        let isSecurity = !this.state.isSecurity
        this.setState({
            isSecurity,
        })
    }

}