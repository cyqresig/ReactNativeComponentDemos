
import React, {
    Component,
} from 'react'
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    ActivityIndicator,
    Modal,
    Alert,
    NativeModules,
} from 'react-native'

import Button from 'react-native-smart-button'
import TimerEnhance from 'react-native-smart-timer-enhance'
import Toast from 'react-native-smart-toast'

class LoadingToast extends Component {

    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <View style={{ paddingTop: 64, flex: 1, backgroundColor: '#fff',}}>
                <Button
                    onPress={this._showTopToast}
                    touchableType={Button.constants.touchableTypes.fadeContent}
                    style={{margin: 10, height: 40, backgroundColor: 'red', borderRadius: 3, borderWidth: StyleSheet.hairlineWidth, borderColor: 'red', justifyContent: 'center',}}
                    textStyle={{fontSize: 17, color: 'white'}}
                >
                    show top
                </Button>

                <Button
                    onPress={this._showCenterToast}
                    touchableType={Button.constants.touchableTypes.highlight}
                    underlayColor={'#C90000'}
                    style={{margin: 10, justifyContent: 'center', height: 40, backgroundColor: 'red', borderRadius: 3, borderWidth: StyleSheet.hairlineWidth, borderColor: 'red', justifyContent: 'center',}}
                    textStyle={{fontSize: 17, color: 'white'}}
                >
                    show center
                </Button>

                <Button
                    onPress={this._showBottomToast}
                    touchableType={Button.constants.touchableTypes.blur}
                    style={{margin: 10, justifyContent: 'center', height: 40, backgroundColor: 'red', borderRadius: 3, borderWidth: StyleSheet.hairlineWidth, borderColor: 'red', justifyContent: 'center',}}
                    textStyle={{fontSize: 17,  color: 'white'}}

                >
                    show bottom
                </Button>
                <Button
                    onPress={this._showFastToast}
                    style={{margin: 10, height: 40, backgroundColor: 'red', borderRadius: 3, borderWidth: StyleSheet.hairlineWidth, borderColor: 'red', justifyContent: 'center',}}
                    textStyle={{fontSize: 17, color: 'white'}}
                >
                    show fast
                </Button>
                <Button
                    onPress={this._showFastToastAndAnimatedHide}
                    style={{margin: 10, height: 40, backgroundColor: 'red', borderRadius: 3, borderWidth: StyleSheet.hairlineWidth, borderColor: 'red', justifyContent: 'center',}}
                    textStyle={{fontSize: 17, color: 'white'}}
                >
                    show fast immediate hide
                </Button>
                <Button
                    onPress={this._showImmediateToast}
                    style={{margin: 10, height: 40, backgroundColor: 'red', borderRadius: 3, borderWidth: StyleSheet.hairlineWidth, borderColor: 'red', justifyContent: 'center',}}
                    textStyle={{fontSize: 17, color: 'white'}}
                >
                    show immediate
                </Button>
                <Button
                    onPress={this._showImmediateToastAndAnimatedHide}
                    style={{margin: 10, height: 40, backgroundColor: 'red', borderRadius: 3, borderWidth: StyleSheet.hairlineWidth, borderColor: 'red', justifyContent: 'center',}}
                    textStyle={{fontSize: 17, color: 'white'}}
                >
                    show immediate animated hide
                </Button>

                <Toast
                    ref={ component => this._toast = component }
                    marginTop={64}>
                    Unable to connect to app store
                </Toast>
            </View>
        )
    }

    _showTopToast = () => {
        this._toast.show({
            position: Toast.constants.gravity.top,
        })
    }

    _showCenterToast = () => {
        this._toast.show({
            position: Toast.constants.gravity.center,
        })
    }

    _showBottomToast = () => {
        this._toast.show({
            position: Toast.constants.gravity.bottom,
        })
    }

    _showFastToast = () => {
        this._toast.show({
            position: Toast.constants.gravity.center,
            duration: 255,
        })
    }

    _showFastToastAndAnimatedHide = () => {
        this._toast.show({
            position: Toast.constants.gravity.center,
            duration: 255,
            animationEnd : () => {
                this._toast._toastAnimationToggle = this.setTimeout( () => {
                    this._toast.hide({
                        duration: 0,
                        animationEnd: () => {
                            //do sth...
                        }
                    })
                }, 3000)
            }
        })
    }

    _showImmediateToast = () => {
        this._toast.show({
            position: Toast.constants.gravity.center,
            duration: 0,
        })
    }
    _showImmediateToastAndAnimatedHide = () => {
        this._toast.show({
            position: Toast.constants.gravity.center,
            duration: 0,
            animationEnd : () => {
                this._toast._toastAnimationToggle = this.setTimeout( () => {
                    this._toast.hide({
                        animationEnd: () => {
                            //do sth...
                        }
                    })
                }, 3000)
            }
        })
    }

}


export default TimerEnhance(LoadingToast)