
import React, {
    Component,
} from 'react'
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    Modal,
    ActivityIndicator,
    ActivityIndicatorIOS,
    ProgressBarAndroid,
} from 'react-native'

import Button from 'react-native-smart-button'
import TimerEnhance from 'react-native-smart-timer-enhance'
import LoadingSpinnerOverlay from 'react-native-smart-loading-spinner-overlay'

class LoadingSpinnerOverLayDemo extends Component {

    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <View style={{ paddingTop: 64, flex: 1, backgroundColor: '#fff',}}>
                <Button
                    onPress={this._showModalLoadingSpinnerOverLay}
                    touchableType={Button.constants.touchableTypes.fadeContent}
                    style={{margin: 10, height: 40, backgroundColor: 'red', borderRadius: 3, borderWidth: StyleSheet.hairlineWidth, borderColor: 'red', justifyContent: 'center',}}
                    textStyle={{fontSize: 17, color: 'white'}}
                >
                    show modal loading spinner (模态)
                </Button>
                <Button
                    onPress={this._showPartModalLoadingSpinnerOverLay}
                    touchableType={Button.constants.touchableTypes.highlight}
                    underlayColor={'#C90000'}
                    style={{margin: 10, justifyContent: 'center', height: 40, backgroundColor: 'red', borderRadius: 3, borderWidth: StyleSheet.hairlineWidth, borderColor: 'red', justifyContent: 'center',}}
                    textStyle={{fontSize: 17, color: 'white'}}
                >
                    [part modal]can click header (导航栏允许点击)
                </Button>
                <Button
                    onPress={this._showNoModalLoadingSpinnerOverLay}
                    touchableType={Button.constants.touchableTypes.blur}
                    style={{margin: 10, justifyContent: 'center', height: 40, backgroundColor: 'red', borderRadius: 3, borderWidth: StyleSheet.hairlineWidth, borderColor: 'red', justifyContent: 'center',}}
                    textStyle={{fontSize: 17,  color: 'white'}}
                >
                    show no modal loading spinner (非模态)
                </Button>

                <Button
                    onPress={this._showImmediateLoadingSpinnerOverLayAndImmediateHide}
                    touchableType={Button.constants.touchableTypes.fade}
                    style={{margin: 10, justifyContent: 'center', height: 40, backgroundColor: 'red', borderRadius: 3, borderWidth: StyleSheet.hairlineWidth, borderColor: 'red', justifyContent: 'center',}}
                    textStyle={{fontSize: 17,  color: 'white'}}
                >
                    show and hide immediately (无渐变)
                </Button>

                <Button
                    onPress={this._showModal_2_LoadingSpinnerOverLay}
                    touchableType={Button.constants.touchableTypes.fadeContent}
                    style={{margin: 10, height: 40, backgroundColor: 'red', borderRadius: 3, borderWidth: StyleSheet.hairlineWidth, borderColor: 'red', justifyContent: 'center',}}
                    textStyle={{fontSize: 17, color: 'white'}}
                >
                    custom content (自定义内容)
                </Button>

                <LoadingSpinnerOverlay
                    ref={ component => this._modalLoadingSpinnerOverLay = component }/>
                <LoadingSpinnerOverlay
                    ref={ component => this._partModalLoadingSpinnerOverLay = component }
                    modal={true}
                    marginTop={64}/>
                <LoadingSpinnerOverlay
                    ref={ component => this._LoadingSpinnerOverLay = component }
                    modal={false}/>
                <LoadingSpinnerOverlay
                    ref={ component => this._modalImmediateLoadingSpinnerOverLay = component }/>
                <LoadingSpinnerOverlay
                    ref={ component => this._modal_2_LoadingSpinnerOverLay = component }>
                    {this._renderActivityIndicator()}
                </LoadingSpinnerOverlay>
            </View>
        )
    }




    _showModalLoadingSpinnerOverLay = () => {
        this._modalLoadingSpinnerOverLay.show()
        //simulate http request
        this.setTimeout( () => {
            this._modalLoadingSpinnerOverLay.hide()
        }, 3000)
    }

    _showPartModalLoadingSpinnerOverLay = () => {
        this._partModalLoadingSpinnerOverLay.show()
        //simulate http request
        this.setTimeout( () => {
            this._partModalLoadingSpinnerOverLay.hide()
        }, 3000)
    }

    _showNoModalLoadingSpinnerOverLay = () => {
        this._LoadingSpinnerOverLay.show()
        //simulate http request
        this.setTimeout( () => {
            this._LoadingSpinnerOverLay.hide()
        }, 3000)
    }

    _showImmediateLoadingSpinnerOverLayAndImmediateHide = () => {
        this._modalImmediateLoadingSpinnerOverLay.show({
            duration: 0,
            children: this._renderActivityIndicator(),
        })
        //simulate http request
        this.setTimeout( () => {
            this._modalImmediateLoadingSpinnerOverLay.hide({
                duration: 0,
            })
        }, 3000)
    }

    _showModal_2_LoadingSpinnerOverLay = () => {
        this._modal_2_LoadingSpinnerOverLay.show()
        //simulate http request
        this.setTimeout( () => {
            this._modal_2_LoadingSpinnerOverLay.hide()
        }, 3000)
    }

    _renderActivityIndicator() {
        return ActivityIndicator ? (
            <ActivityIndicator
                animating={true}
                color={'#ff0000'}
                size={'small'}/>
        ) : Platform.OS == 'android' ?
            (
                <ProgressBarAndroid
                    color={'#ff0000'}
                    styleAttr={'small'}/>

            ) :  (
            <ActivityIndicatorIOS
                animating={true}
                color={'#ff0000'}
                size={'small'}/>
        )
    }

}


export default TimerEnhance(LoadingSpinnerOverLayDemo)