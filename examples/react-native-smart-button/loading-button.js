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
import image_liking from '../images/liking.png'

class LoadingButton extends Component {
//<Image source={image_liking} style={{width: 40, height: 40, marginRight: 3, }}/>

    // 构造
    constructor (props) {
        super(props)
        // 初始状态
        this.state = {}
    }

    render () {
        return (
            <ScrollView style={{flex: 1, marginTop: 20 + 44, }}>

                <Button
                    ref={ component => this._button_1 = component }
                    touchableType={Button.constants.touchableTypes.fade}
                    style={{margin: 10, height: 40, backgroundColor: 'red', borderRadius: 3, borderWidth: StyleSheet.hairlineWidth, borderColor: 'red', justifyContent: 'center',}}
                    textStyle={{fontSize: 17, color: 'white'}}
                    loadingComponent={
                        this._renderActivityIndicator()
                    }
                    onPress={ () => {
                        this._button_1.setState({
                            loading: true,
                            //disabled: true,
                        })
                        this.setTimeout( () => {
                            this._button_1.setState({
                                loading: false,
                                //disabled: false
                            })
                        }, 3000)
                    }}>
                    loading
                </Button>

                <Button
                    ref={ component => this._button_2 = component }
                    touchableType={Button.constants.touchableTypes.fade}
                    style={{margin: 10, height: 40, backgroundColor: 'red', borderRadius: 3, borderWidth: StyleSheet.hairlineWidth, borderColor: 'red', justifyContent: 'center',}}
                    textStyle={{fontSize: 17, color: 'white'}}
                    loadingComponent={
                            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                {this._renderActivityIndicator()}
                                <Text style={{fontSize: 17, color: 'white', fontWeight: 'bold', fontFamily: '.HelveticaNeueInterface-MediumP4',}}>loading</Text>
                            </View>
                    }
                    onPress={ () => {
                        this._button_2.setState({
                            loading: true,
                            //disabled: true,
                        })
                        this.setTimeout( () => {
                            this._button_2.setState({
                                loading: false,
                                //disabled: false
                            })
                        }, 3000)
                    }}>
                    loading
                </Button>

                <Button
                    ref={ component => this._button_3 = component }
                    touchableType={Button.constants.touchableTypes.fade}
                    style={{margin: 10, height: 40, backgroundColor: 'red', borderRadius: 3, borderWidth: StyleSheet.hairlineWidth, borderColor: 'red', justifyContent: 'center',}}
                    textStyle={{fontSize: 17, color: 'white'}}
                    loadingComponent={
                            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                <Text style={{fontSize: 17, color: 'white', fontWeight: 'bold', fontFamily: '.HelveticaNeueInterface-MediumP4',}}>loading...</Text>
                            </View>
                    }
                    onPress={ () => {
                        this._button_3.setState({
                            loading: true,
                            //disabled: true,
                        })
                        this.setTimeout( () => {
                            this._button_3.setState({
                                loading: false,
                                //disabled: false
                            })
                        }, 3000)
                    }}>
                    loading
                </Button>

            </ScrollView>
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

export default TimerEnhance(LoadingButton)