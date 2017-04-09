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
    NativeModules
} from 'react-native'

import Button from 'react-native-smart-button'

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
    buttonDisabledStyle: {
        backgroundColor: '#DDDDDD',
        borderWidth: 0,
    },
    buttonDisabledTextStyle: {
        color: '#BCBCBC',
    },
});

export default class BasicButton extends Component {

    render () {
        return (
            <ScrollView style={{flex: 1, marginTop: 20 + 44, }}>

                <Button
                    disabled={true}
                    style={styles.buttonStyle}
                    textStyle={styles.buttonTextStyle}
                    disabledStyle={styles.buttonDisabledStyle}
                    disabledTextStyle={styles.buttonDisabledTextStyle}>
                    disabled (按钮禁用)
                </Button>

                <Button
                    style={styles.buttonStyle}
                    textStyle={styles.buttonTextStyle}>
                    opacity all (按钮透明)
                </Button>

                <Button
                    touchableType={Button.constants.touchableTypes.fadeContent}
                    style={styles.buttonStyle}
                    textStyle={styles.buttonTextStyle}>
                    opacity content (内容透明)
                </Button>

                <Button
                    touchableType={Button.constants.touchableTypes.highlight}
                    underlayColor={'#C90000'}
                    style={styles.buttonStyle}
                    textStyle={styles.buttonTextStyle}>
                    highlight (背景高亮)
                </Button>

                <Button
                    touchableType={Button.constants.touchableTypes.blur}
                    style={styles.buttonStyle}
                    textStyle={styles.buttonTextStyle}>
                    blur for ios (模糊阴影)
                </Button>

            </ScrollView>
        )
    }

}