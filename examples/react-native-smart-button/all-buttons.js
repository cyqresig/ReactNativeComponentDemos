/**
 * @fileOverview
 * @author HISAME SHIZUMARU
 * @version
 * Created on 16/7/25.
 */

import React, {Component} from 'react'
import {
    ScrollView,
    View,
    StyleSheet,
    Image,
    Text,
    ActivityIndicator,
    ActivityIndicatorIOS,
    ProgressBarAndroid,
    Platform,
} from 'react-native'

import TimerEnhance from 'react-native-smart-timer-enhance'
import Button from 'react-native-smart-button'
import image_liking from '../images/liking.png'
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
    buttonDisabledStyle: {
        backgroundColor: '#DDDDDD',
        borderWidth: 0,
    },
    buttonDisabledTextStyle: {
        color: '#BCBCBC',
    },
});

class AllButton extends Component {

    // 构造
    constructor (props) {
        super(props)
        // 初始状态
        this.state = {
            btn_1_loading: false,
            btn_2_loading: false,
            btn_3_loading: false,
            btn_1_disabled: false,
            btn_2_disabled: false,
            btn_3_disabled: false,
        }
    }

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

                <Button
                    loading={this.state.btn_1_loading}
                    disabled={this.state.btn_1_disabled}
                    touchableType={Button.constants.touchableTypes.fade}
                    style={styles.buttonStyle}
                    textStyle={styles.buttonTextStyle}
                    renderLoadingComponent={this._renderLoadingComponent_1}
                    onPress={this._handlePress_1}>
                    loading (加载器)
                </Button>

                <Button
                    loading={this.state.btn_2_loading}
                    disabled={this.state.btn_2_disabled}
                    touchableType={Button.constants.touchableTypes.fadeContent}
                    style={styles.buttonStyle}
                    textStyle={styles.buttonTextStyle}
                    renderLoadingComponent={this._renderLoadingComponent_2}
                    onPress={this._handlePress_2}>
                    loading (加载器+文字)
                </Button>

                <Button
                    touchableType={Button.constants.touchableTypes.highlight}
                    underlayColor={'#C90000'}
                    style={styles.buttonStyle}
                    textStyle={styles.buttonTextStyle}>
                    <Image source={image_liking} style={{width: 40, height: 40, marginRight: 3, }}/>
                    icon (图标)
                </Button>

                <Button
                    touchableType={Button.constants.touchableTypes.blur}
                    style={styles.buttonStyle}
                    textStyle={styles.buttonTextStyle}>
                    badge (徽章)
                    <Badge
                        style={{ backgroundColor: '#00AAEF', marginLeft: 6, }}
                        textStyle={{ color: '#fff', fontSize: 12, }}>
                        8
                    </Badge>
                </Button>

            </ScrollView>
        )
    }

    _handlePress_1 = () => {
        this.setState({
            btn_1_loading: true,
            // btn_1_disabled: true,
        })
        this.setTimeout(() => {
            this.setState({
                btn_1_loading: false,
                // btn_1_disabled: false
            })
        }, 3000)
    }

    _handlePress_2 = () => {
        this.setState({
            btn_2_loading: true,
            // btn_2_disabled: true,
        })
        this.setTimeout(() => {
            this.setState({
                btn_2_loading: false,
                // btn_2_disabled: false
            })
        }, 3000)
    }

    _renderLoadingComponent_1 = () => {
        return this._renderActivityIndicator()
    }

    _renderLoadingComponent_2 = () => {
        return (
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                {this._renderActivityIndicator()}
                <Text style={{
                    fontSize: 17,
                    color: 'white',
                    fontWeight: 'bold',
                    fontFamily: '.HelveticaNeueInterface-MediumP4',
                }}>loading</Text>
            </View>
        )
    }

    _renderActivityIndicator() {
        return ActivityIndicator ? (
            <ActivityIndicator
                style={{margin: 10,}}
                animating={true}
                color={'#fff'}
                size={'small'}/>
        ) : Platform.OS == 'android' ?
            (
                <ProgressBarAndroid
                    style={{margin: 10,}}
                    color={'#fff'}
                    styleAttr={'Small'}/>

            ) :  (
            <ActivityIndicatorIOS
                style={{margin: 10,}}
                animating={true}
                color={'#fff'}
                size={'small'}/>
        )


    }

}

export default TimerEnhance(AllButton)