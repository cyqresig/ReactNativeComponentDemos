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

import Button from 'react-native-smart-button'
import image_liking from '../images/liking.png'

import TimerEnhance from 'react-native-smart-timer-enhance'

class LoadingButton extends Component {
//<Image source={image_liking} style={{width: 40, height: 40, marginRight: 3, }}/>

    // 构造
    constructor (props) {
        super(props)
        // 初始状态
        this.state = {
            btn_1_isLoading: false,
            btn_2_isLoading: false,
            btn_3_isLoading: false,
        }
    }

    render () {
        return (
            <ScrollView style={{flex: 1, marginTop: 20 + 44, }}>

                <Button
                    isLoading={this.state.btn_1_isLoading}
                    touchableType={'opacity'}
                    style={{margin: 10, height: 40, backgroundColor: 'red', borderRadius: 3, borderWidth: StyleSheet.hairlineWidth, borderColor: 'red', justifyContent: 'center',}}
                    textStyle={{fontSize: 17, color: 'white'}}
                    loadingComponent={
                        this._renderActivityIndicator()
                    }
                    onPress={ () => {
                        this.setState({
                            btn_1_isLoading: true
                        })
                        this.setTimeout( () => {
                            this.setState({
                                btn_1_isLoading: false
                            })
                        }, 3000)
                    }}>
                    loading
                </Button>

                <Button
                    isLoading={this.state.btn_2_isLoading}
                    touchableType={'opacity'}
                    style={{margin: 10, height: 40, backgroundColor: 'red', borderRadius: 3, borderWidth: StyleSheet.hairlineWidth, borderColor: 'red', justifyContent: 'center',}}
                    textStyle={{fontSize: 17, color: 'white'}}
                    loadingComponent={
                            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                {this._renderActivityIndicator()}
                                <Text style={{fontSize: 17, color: 'white', fontWeight: 'bold', fontFamily: '.HelveticaNeueInterface-MediumP4',}}>loading</Text>
                            </View>
                    }
                    onPress={ () => {
                        this.setState({
                            btn_2_isLoading: true
                        })
                        this.setTimeout( () => {
                            this.setState({
                                btn_2_isLoading: false
                            })
                        }, 3000)
                    }}>
                    loading
                </Button>

                <Button
                    isLoading={this.state.btn_3_isLoading}
                    touchableType={'opacity'}
                    style={{margin: 10, height: 40, backgroundColor: 'red', borderRadius: 3, borderWidth: StyleSheet.hairlineWidth, borderColor: 'red', justifyContent: 'center',}}
                    textStyle={{fontSize: 17, color: 'white'}}
                    loadingComponent={
                            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                <Text style={{fontSize: 17, color: 'white', fontWeight: 'bold', fontFamily: '.HelveticaNeueInterface-MediumP4',}}>loading...</Text>
                            </View>
                    }
                    onPress={ () => {
                        this.setState({
                            btn_3_isLoading: true
                        })
                        this.setTimeout( () => {
                            this.setState({
                                btn_3_isLoading: false
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