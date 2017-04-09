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
    Alert,
    ActivityIndicator,
    ActivityIndicatorIOS,
    ProgressBarAndroid,
    Platform,
} from 'react-native'

import TimerEnhance from 'react-native-smart-timer-enhance'
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
});

class LoadingButton extends Component {
//<Image source={image_liking} style={{width: 40, height: 40, marginRight: 3, }}/>

    // 构造
    constructor(props) {
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

    render() {
        return (
            <ScrollView style={{flex: 1, marginTop: 20 + 44,}}>
                <Button
                    loading={this.state.btn_1_loading}
                    disabled={this.state.btn_1_disabled}
                    touchableType={Button.constants.touchableTypes.fade}
                    style={styles.buttonStyle}
                    textStyle={styles.buttonTextStyle}
                    renderLoadingComponent={this._renderLoadingComponent_1}
                    onPress={this._handlePress_1}>
                    loading
                </Button>

                <Button
                    loading={this.state.btn_2_loading}
                    disabled={this.state.btn_2_disabled}
                    touchableType={Button.constants.touchableTypes.fade}
                    style={styles.buttonStyle}
                    textStyle={styles.buttonTextStyle}
                    renderLoadingComponent={this._renderLoadingComponent_2}
                    onPress={this._handlePress_2}>
                    loading
                </Button>

                <Button
                    loading={this.state.btn_3_loading}
                    disabled={this.state.btn_3_disabled}
                    touchableType={Button.constants.touchableTypes.fade}
                    style={styles.buttonStyle}
                    textStyle={styles.buttonTextStyle}
                    renderLoadingComponent={this._renderLoadingComponent_3}
                    onPress={this._handlePress_3}>
                    loading
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

    _handlePress_3 = () => {
        this.setState({
            btn_3_loading: true,
            // btn_3_disabled: true,
        })
        this.setTimeout(() => {
            this.setState({
                btn_3_loading: false,
                // btn_3_disabled: false
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

    _renderLoadingComponent_3 = () => {
        return (
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text style={{
                    fontSize: 17,
                    color: 'white',
                    fontWeight: 'bold',
                    fontFamily: '.HelveticaNeueInterface-MediumP4',
                }}>loading...</Text>
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

            ) : (
                <ActivityIndicatorIOS
                    style={{margin: 10,}}
                    animating={true}
                    color={'#fff'}
                    size={'small'}/>
            )
    }

}
export default TimerEnhance(LoadingButton)