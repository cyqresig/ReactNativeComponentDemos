
import React, {
    Component,
} from 'react'
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    TouchableOpacity,
    NativeModules,
    NativeAppEventEmitter,
    Alert,
    ProgressBarAndroid,
    ActivityIndicatorIOS,
    ActivityIndicator,
} from 'react-native'

import AppEventListenerEnhance from 'react-native-smart-app-event-listener-enhance'
import Button from 'react-native-smart-button'
import AliPay from 'react-native-smart-alipay'

class PaymentDemo extends Component {

    constructor (props) {
        super(props)
        this.state = {}

        this._xhr = null
    }

    componentWillMount () {
        this.addAppEventListener(
            NativeAppEventEmitter.addListener('alipay.mobile.securitypay.pay.onPaymentResult', this._onPaymentResult) //alipay
        )
    }

    render () {
        return (
            <ScrollView style={{flex: 1, marginTop: 20 + 44, }}>
                <Button
                    ref={ component => this._button_alipay = component }
                    touchableType={Button.constants.touchableTypes.fade}
                    style={{margin: 10, height: 40, backgroundColor: 'red', borderRadius: 3, borderWidth: StyleSheet.hairlineWidth, borderColor: 'red', justifyContent: 'center',}}
                    textStyle={{fontSize: 17, color: 'white'}}
                    loadingComponent={
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            {this._renderActivityIndicator()}
                            <Text style={{fontSize: 17, color: 'white', fontWeight: 'bold', fontFamily: '.HelveticaNeueInterface-MediumP4',}}>正在支付...</Text>
                        </View>
                    }
                    onPress={ this._getAlipayParams }>
                    支付宝支付
                </Button>
            </ScrollView>
        )
    }

    componentWillUnmount () {
        this._xhr && this._xhr.abort();
    }

    _getAlipayParams = () => {
        this._button_alipay.setState({
            loading: true,
        })

        //http请求服务获取支付参数及RSA数字签名信息
        this._xhr && this._xhr.abort()

        var xhr = this._xhr || new XMLHttpRequest()
        this._xhr = xhr

        xhr.onerror = ()=> {
            this._button_alipay.setState({
                loading: false,
            })
            Alert.alert(
                '请求出错',
                `状态码: ${xhr.status}, 错误信息: ${xhr.responseText}`
            )
        }

        xhr.ontimeout = () => {
            this._button_alipay.setState({
                loading: false,
            })
            Alert.alert(
                '',
                '请求超时'
            )
        }

        //let server_api_url = '获取支付宝参数信息的服务器接口url地址'
        //let params = '提交的参数, 例如订单号信息'
        //let appScheme = 'ios对应URL Types中的URL Schemes的值, 会影响支付成功后是否能正确的返回app'
        let server_api_url = 'http://f154876m19.imwork.net:16374/nAdvanceOrder/payAli'  //服务器地址需要根据情况自行配置, 这个测试地址无法在公网访问
        let params = 'oid=3428a92f55bff7920155c2e4cc790060' //参数需要根据情况自行配置
        let appScheme = 'reactnativecomponentdemo'

        xhr.open('POST', server_api_url)
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
        xhr.onload = () => {
            if (xhr.status !== 200) {
                this._button_alipay.setState({
                    loading: false,
                })
                Alert.alert(
                    '请求失败',
                    `HTTP状态码: ${xhr.status}`
                )
                return
            }
            if (!xhr.responseText) {
                this._button_alipay.setState({
                    loading: false,
                })
                Alert.alert(
                    '请求失败',
                    '没有返回信息'
                )
                return
            }
            let responseJSON = JSON.parse(xhr.responseText)
            let orderText = decodeURIComponent(responseJSON.result)
            console.log(`响应信息: ${xhr.responseText}`)
            /*
             * 服务端获取支付宝SDK快捷支付功能所需参数字串示例(对应下面的orderText)
             * partner="2088021133166364"&seller_id="ko@sh-defan.net"&out_trade_no="160707414842102"&subject="到途订单-160707414842102"&body="营养快线水果酸奶饮品（椰子味）,500ml,4;正宗凉茶,310ML,4;原味味奶茶,80g,6;"&total_fee="0.01"&notify_url="http://f154876m19.imwork.net:16374/pay/paymentCompletion"&service="mobile.securitypay.pay"&payment_type="1"&_input_charset="utf-8"&it_b_pay="-644885m"&return_url="m.alipay.com"&sign="iW5aK2dEsIj8nGg%2BEOOlMcyL081oX%2F2zHNcoJRrlO3qWmoVkXJM%2B2cHH9rSDyGYAeKxRD%2BYwrZK3H3QYb%2Fxi6Jl%2BxJVcvguluXbKvmpKjuuBv2gcOyqtydUMHwpQAVN%2BTwbQ6Zt8LU9xLweua7n%2FLuTFdjyePwf5Zb72r21v5dw%3D"&sign_type="RSA"
             */
            console.log(`获取支付宝参数成功, decodeURIComponent -> orderText = ${orderText}`);
            console.log(`AliPay ->`)
            console.log(AliPay)
            AliPay.payOrder({
                orderText,
                appScheme,
            });

        }

        xhr.timeout = 30000
        xhr.send(params)
    }

    _onPaymentResult = (result) => {
        //console.log(`result -> `)
        //console.log(result)
        console.log(`result.resultStatus = ${result.resultStatus}`)
        console.log(`result.memo = ${result.memo}`)
        console.log(`result.result = ${result.result}`)
        this._button_alipay.setState({
            loading: false,
        })
        Alert.alert(
            '',
            `${result.resultStatus == 9000 ? '支付成功' : '支付失败'} `
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


export default AppEventListenerEnhance(PaymentDemo)