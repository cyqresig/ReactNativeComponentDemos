/**
 * @fileOverview
 * @author HISAME SHIZUMARU
 * @version
 * Created on 16/7/18.
 */

import React, {
    Component,
} from 'react'
import {
    StyleSheet,
    View,
    Text,
} from 'react-native'

import Badge from 'react-native-smart-badge'
import Button from 'react-native-smart-button'

export default class NumberBadge extends Component {

    // 构造
    constructor (props) {
        super(props);
        // 初始状态
        this.state = {
            num1: 2,
            num2: 15,
            num3: 328,
        };
    }

    render () {
        return (
            <View style={{marginTop: 20 + 44, flex: 1, justifyContent: 'center', alignItems: 'center', }}>
                <Badge minWidth={18} minHeight={18} textStyle={{color: '#fff',}}>
                    {this.state.num1}
                </Badge>
                <Badge textStyle={{color: '#fff',}} style={{marginTop: 10,}}>
                    {this.state.num2}
                </Badge>
                <Badge textStyle={{color: '#fff',}} style={{marginTop: 10,}}>
                    {this.state.num3}
                </Badge>

                <Button
                    touchableType={'blur'}
                    style={{marginTop: 10, width: 300, justifyContent: 'center', height: 40, backgroundColor: '#00AAEF', borderRadius: 3, borderWidth: StyleSheet.hairlineWidth, borderColor: '#00AAEF', justifyContent: 'center',}}
                    textStyle={{fontSize: 17,  color: 'white'}}
                    onPress={this._addNum}>
                    click to plus num(点击增加数字)
                </Button>
            </View>
        )
    }

    _addNum = () => {
        this.setState({
            num1: this.state.num1 + 3,
            num2: this.state.num2 + 30,
            num3: this.state.num3 + 300,
        })
    }

}