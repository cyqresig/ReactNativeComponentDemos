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
    Alert,
    NativeAppEventEmitter,
    ActivityIndicator,
    ActivityIndicatorIOS,
    ProgressBarAndroid,
} from 'react-native'

import AMapLocation from 'react-native-smart-amap-location'
import Button from 'react-native-smart-button'
import AppEventListenerEnhance from 'react-native-smart-app-event-listener-enhance'

class AMapLocationDemo extends Component {

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {};
    }

    componentDidMount() {
        let viewAppearCallBack = (event) => {
            //初始化及设置定位
            //AMapLocation.init({
            //    //locationMode: AMapLocation.locationMode.hundredMeters,
            //    //locationTimeout: 2,
            //    //reGeocodeTimeout: 2,
            //
            //    locationMode: AMapLocation.locationMode.best,
            //    locationTimeout: 10,
            //    reGeocodeTimeout: 10,
            //})
            AMapLocation.init(null)

        }
        this.addAppEventListener(
            this.props.navigator.navigationContext.addListener('didfocus', viewAppearCallBack),
            NativeAppEventEmitter.addListener('amap.location.onLocationResult', this._onLocationResult)
        )
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
                    loadingComponent={
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                {this._renderActivityIndicator()}
                                <Text style={{fontSize: 17, color: 'white', fontWeight: 'bold', fontFamily: '.HelveticaNeueInterface-MediumP4',}}>努力定位中</Text>
                        </View>
                    }
                    onPress={this._showReGeocode}>
                    定位逆地理编码信息
                </Button>
                <Button
                    ref={ component => this._button_2 = component }
                    touchableType={Button.constants.touchableTypes.fade}
                    style={{margin: 10, width: 300, height: 40, backgroundColor: 'red', borderRadius: 3, borderWidth: StyleSheet.hairlineWidth, borderColor: 'red', justifyContent: 'center',}}
                    textStyle={{fontSize: 17, color: 'white'}}
                    loadingComponent={
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                {this._renderActivityIndicator()}
                                <Text style={{fontSize: 17, color: 'white', fontWeight: 'bold', fontFamily: '.HelveticaNeueInterface-MediumP4',}}>努力定位中</Text>
                        </View>
                    }
                    onPress={this._showLocation}>
                    定位地理编码信息
                </Button>
            </View>
        )
    }

    _onLocationResult = (result) => {
        if(result.error) {
            Alert.alert(`错误代码: ${result.error.code}, 错误信息: ${result.error.localizedDescription}`)
        }
        else {
            if(result.formattedAddress) {
                Alert.alert(`格式化地址 = ${result.formattedAddress}`)
            }
            else {
                Alert.alert(`纬度 = ${result.coordinate.latitude}, 经度 = ${result.coordinate.longitude}`)
            }
        }
        if(this._button_1.state.loading) {
            this._button_1.setState({
                loading: false,
            })
        }
        if(this._button_2.state.loading) {
            this._button_2.setState({
                loading: false,
            })
        }
    }

    //单次定位并返回逆地理编码信息
    _showReGeocode = () => {
        this._button_1.setState({
            loading: true,
        })
        AMapLocation.getReGeocode()
    }

    //单次定位并返回地理编码信息
    _showLocation = () => {
        this._button_2.setState({
            loading: true,
        })
        AMapLocation.getLocation()
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

export default AppEventListenerEnhance(AMapLocationDemo)