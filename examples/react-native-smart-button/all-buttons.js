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

import Button from 'react-native-smart-button'
import image_liking from '../images/liking.png'
import Badge from 'react-native-smart-badge'

import TimerEnhance from 'react-native-smart-timer-enhance'

class AllButton extends Component {

    // 构造
    constructor (props) {
        super(props);
        // 初始状态
        this.state = {
            btn_1_isLoading: false,
            btn_2_isLoading: false,
        };
    }

    render () {
        return (
            <ScrollView style={{flex: 1, marginTop: 20 + 44, }}>

                <Button
                    disabled={true}
                    style={{margin: 10, height: 40, backgroundColor: 'red', borderRadius: 3, borderWidth: StyleSheet.hairlineWidth, borderColor: 'red', justifyContent: 'center',}}
                    textStyle={{fontSize: 17, color: 'white'}}
                    disabledStyle={{backgroundColor: '#DDDDDD', borderWidth: 0,}}
                    disabledTextStyle={{color: '#BCBCBC'}}
                >
                    disabled (按钮禁用)
                </Button>

                <Button
                    style={{margin: 10, height: 40, backgroundColor: 'red', borderRadius: 3, borderWidth: StyleSheet.hairlineWidth, borderColor: 'red', justifyContent: 'center',}}
                    textStyle={{fontSize: 17, color: 'white'}}
                >
                    opacity all (按钮透明)
                </Button>

                <Button
                    touchableType={'opacityContent'}
                    style={{margin: 10, height: 40, backgroundColor: 'red', borderRadius: 3, borderWidth: StyleSheet.hairlineWidth, borderColor: 'red', justifyContent: 'center',}}
                    textStyle={{fontSize: 17, color: 'white'}}
                >
                    opacity content (内容透明)
                </Button>

                <Button
                    touchableType={'highlight'}
                    underlayColor={'#C90000'}
                    style={{margin: 10, justifyContent: 'center', height: 40, backgroundColor: 'red', borderRadius: 3, borderWidth: StyleSheet.hairlineWidth, borderColor: 'red', justifyContent: 'center',}}
                    textStyle={{fontSize: 17, color: 'white'}}
                >
                    highlight (背景高亮)
                </Button>

                <Button
                    touchableType={'blur'}
                    style={{margin: 10, justifyContent: 'center', height: 40, backgroundColor: 'red', borderRadius: 3, borderWidth: StyleSheet.hairlineWidth, borderColor: 'red', justifyContent: 'center',}}
                    textStyle={{fontSize: 17,  color: 'white'}}

                >
                    blur for ios (模糊阴影)
                </Button>

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
                    loading (加载器)
                </Button>

                <Button
                    isLoading={this.state.btn_2_isLoading}
                    touchableType={'opacityContent'}
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
                    loading (加载器+文字)
                </Button>

                <Button
                    touchableType={'highlight'}
                    underlayColor={'#C90000'}
                    style={{margin: 10, justifyContent: 'center', height: 40, backgroundColor: 'red', borderRadius: 3, borderWidth: StyleSheet.hairlineWidth, borderColor: 'red', justifyContent: 'center',}}
                    textStyle={{fontSize: 17, color: 'white'}}
                >
                    <Image source={image_liking} style={{width: 40, height: 40, marginRight: 3, }}/>
                    icon (图标)
                </Button>

                <Button
                    touchableType={'blur'}
                    style={{margin: 10, justifyContent: 'center', height: 40, backgroundColor: 'red', borderRadius: 3, borderWidth: StyleSheet.hairlineWidth, borderColor: 'red', justifyContent: 'center',}}
                    textStyle={{fontSize: 17,  color: 'white'}}
                >
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