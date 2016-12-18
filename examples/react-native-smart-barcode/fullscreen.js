import React, {
    Component,
} from 'react'
import {
    View,
    StyleSheet,
    Alert,
    ActivityIndicator,
    ProgressBarAndroid,
    ActivityIndicatorIOS,
    Dimensions,
} from 'react-native'

import Barcode from 'react-native-smart-barcode'
import TimerEnhance from 'react-native-smart-timer-enhance'

//const { width: deviceWidth, height: deviceHeight } = Dimensions.get('window')

class BarcodeTest extends Component {

    // 构造
    constructor (props) {
        super(props);
        // 初始状态
        this.state = {
            viewAppear: false,
        };
    }

    render () {

        return (
            <View style={{flex: 1, backgroundColor: 'black', justifyContent: 'center', alignItems: 'center',}}>
                {this.state.viewAppear ? <Barcode style={{flex: 1, alignSelf: 'stretch', }}
                                                  ref={ component => this._barCode = component }
                                                  onBarCodeRead={this._onBarCodeRead}/> : null}

                {!this.state.viewAppear ? this._renderActivityIndicator() : null}
            </View>
        )
    }
//
//{!this.state.viewAppear ?
//<View style={{ position: 'absolute', left: 0, top: 0, width: deviceWidth, deviceHeight: deviceHeight, justifyContent: 'center', alignItems: 'center'}}>
//{this._renderActivityIndicator()}
//</View> : null}

    componentDidMount () {
        let viewAppearCallBack = (event) => {
            this.setTimeout(() => {
                this.setState({
                    viewAppear: true,
                })
            }, 255)

        }
        this._listeners = [
            this.props.navigator.navigationContext.addListener('didfocus', viewAppearCallBack)
        ]

    }

    componentWillUnmount () {
        this._listeners && this._listeners.forEach(listener => listener.remove());
    }

    _onBarCodeRead = (e) => {
        console.log(`e.nativeEvent.data.type = ${e.nativeEvent.data.type}, e.nativeEvent.data.code = ${e.nativeEvent.data.code}`)
        this._stopScan()
        Alert.alert(e.nativeEvent.data.type, e.nativeEvent.data.code, [
            { text: 'OK', onPress: () => this._startScan() },
        ])
    }

    _startScan = (e) => {
        this._barCode.startScan()
    }

    _stopScan = (e) => {
        this._barCode.stopScan()
    }

    _renderActivityIndicator () {
        return ActivityIndicator ? (
            <ActivityIndicator
                style={{position: 'relative', left: 1, top: 1,}}
                animating={true}
                size={'large'}/>
        ) : Platform.OS == 'android' ?
            (
                <ProgressBarAndroid
                    styleAttr={'large'}/>

            ) : (
            <ActivityIndicatorIOS
                animating={true}
                size={'large'}/>
        )
    }
}

export default TimerEnhance(BarcodeTest)