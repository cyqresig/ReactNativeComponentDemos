/**
 * @fileOverview
 * @author HISAME SHIZUMARU
 * @version
 * Created on 16/11/11.
 */

import React, {
    Component
} from 'react'
import {
    StyleSheet,
    View,
    Text,
    NativeAppEventEmitter,
} from 'react-native'

import AMapLocation from 'react-native-smart-amap-location'
import Button from 'react-native-smart-button'
import AppEventListenerEnhance from 'react-native-smart-app-event-listener-enhance'

class AMapLocationDemo extends Component {

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            updatedTime: null,
            locationResult: null,
        };
    }

    componentDidMount() {
        //let viewAppearCallBack = (event) => {
        //    //初始化及设置定位
        //    //AMapLocation.init({
        //    //    //locationMode: AMapLocation.locationMode.hundredMeters,
        //    //    //locationTimeout: 2,
        //    //    //reGeocodeTimeout: 2,
        //    //
        //    //    locationMode: AMapLocation.locationMode.best,
        //    //    locationTimeout: 10,
        //    //    reGeocodeTimeout: 10,
        //    //})
        //    AMapLocation.init(null)
        //
        //}
        this.addAppEventListener(
            //this.props.navigator.navigationContext.addListener('didfocus', viewAppearCallBack),
            NativeAppEventEmitter.addListener('amap.location.onLocationResult', this._onLocationResult)
        )
        AMapLocation.init(null)
        AMapLocation.setOptions({
            allowsBackgroundLocationUpdates: true,
            gpsFirst: false,
            onceLocation: false,
            onceLocationLatest: false,
            interval: 2000,
        })
    }

    componentWillUnmount () {
        //停止并销毁定位服务
        AMapLocation.cleanUp()
    }

    render() {
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', }}>
                <Button
                    ref={ component => this._button_1 = component }
                    touchableType={Button.constants.touchableTypes.fade}
                    style={{margin: 10, width: 300, height: 40, backgroundColor: 'red', borderRadius: 3, borderWidth: StyleSheet.hairlineWidth, borderColor: 'red', justifyContent: 'center',}}
                    textStyle={{fontSize: 17, color: 'white'}}
                    onPress={this._startUpdatingLocation}>
                    开始连续定位
                </Button>
                <Button
                    ref={ component => this._button_2 = component }
                    touchableType={Button.constants.touchableTypes.fade}
                    style={{margin: 10, width: 300, height: 40, backgroundColor: 'red', borderRadius: 3, borderWidth: StyleSheet.hairlineWidth, borderColor: 'red', justifyContent: 'center',}}
                    textStyle={{fontSize: 17, color: 'white'}}
                    onPress={this._stopUpdatingLocation}>
                    结束连续定位
                </Button>
                <View>
                    <Text>定位信息:</Text>
                    <Text>更新时间:{this.state.updatedTime}</Text>
                    <Text>{this.state.locationResult}</Text>
                </View>
            </View>
        )
    }

    _onLocationResult = (result) => {
        //console.log(`serial _onLocationResult...`)
        //console.log(result)
        let locationResult
        let updatedTime = (new Date()).toLocaleTimeString()
        if(result.error) {
            locationResult = `错误代码: ${result.error.code}, 错误信息: ${result.error.localizedDescription}`
        }
        else {
            if(result.formattedAddress) {
                locationResult = `格式化地址 = ${result.formattedAddress}`
            }
            else {
                locationResult = `纬度 = ${result.coordinate.latitude}, 经度 = ${result.coordinate.longitude}`
            }
        }
        this.setState({
            locationResult,
            updatedTime,
        })
    }

    //开始连续定位
    _startUpdatingLocation = () => {
        AMapLocation.startUpdatingLocation()
    }

    //结束连续定位
    _stopUpdatingLocation = () => {
        AMapLocation.stopUpdatingLocation()
    }
}

export default AppEventListenerEnhance(AMapLocationDemo)