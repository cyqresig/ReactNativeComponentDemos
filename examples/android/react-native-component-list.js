/**
 * @fileOverview
 * @author HISAME SHIZUMARU
 * @version
 * Created on 16/7/4.
 */

import React, {Component} from 'react'
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ListView,
    Navigator,
    StatusBar,
    TouchableHighlight,
    TouchableOpacity,
    NativeAppEventEmitter,
} from 'react-native'

import AllButton from '../react-native-smart-button/all-buttons'
import BasicButton from '../react-native-smart-button/basic-button'
import IconButton from '../react-native-smart-button/icon-button'
import BadgeButton from '../react-native-smart-button/badge-button'
import LoadingButton from '../react-native-smart-button/loading-button'
import ThreeColumns from '../react-native-smart-sudoku-grid/three-columns'
import SortableThreeColumns from '../react-native-smart-sortable-sudoku-grid/three-columns'
import NumberBadge from '../react-native-smart-badge/number-badge'
import EmptyBadge from '../react-native-smart-badge/empty-badge'
import CustomBadge from '../react-native-smart-badge/custom-badge'
import TouchIdTest from '../react-native-smart-touch-id/touch-id-test'
import CornerLabel from '../react-native-smart-corner-label/corner-label'
import gesturePassword from '../react-native-smart-gesture-password/gesture-password'
import ParabolaDemo from '../react-native-smart-parabola/parabola-demo'
import SecurityTextDemo from '../react-native-smart-security-text/security-text'
import PullToRefreshListViewDemo from '../react-native-smart-pull-to-refresh-listview/react-native-smart-pull-to-refresh-listview-demo'
import PullToRefreshListViewDemo2 from '../react-native-smart-pull-to-refresh-listview/react-native-smart-pull-to-refresh-listview-demo2'
import PullToRefreshListViewDemo3 from '../react-native-smart-pull-to-refresh-listview/react-native-smart-pull-to-refresh-listview-demo3'
import PullToRefreshListViewDemo4 from '../react-native-smart-pull-to-refresh-listview/react-native-smart-pull-to-refresh-listview-demo4'
import PullToRefreshListViewDemo5 from '../react-native-smart-pull-to-refresh-listview/react-native-smart-pull-to-refresh-listview-demo5'
import PullToRefreshListViewDemo6 from '../react-native-smart-pull-to-refresh-listview/react-native-smart-pull-to-refresh-listview-demo6'
import PullToRefreshListViewDemo7 from '../react-native-smart-pull-to-refresh-listview/react-native-smart-pull-to-refresh-listview-demo7'
import PullToRefreshListViewDemo8 from '../react-native-smart-pull-to-refresh-listview/react-native-smart-pull-to-refresh-listview-demo8'
import PullToRefreshListViewDemo9 from '../react-native-smart-pull-to-refresh-listview/react-native-smart-pull-to-refresh-listview-demo9'
import PullToRefreshListViewDemo10 from '../react-native-smart-pull-to-refresh-listview/react-native-smart-pull-to-refresh-listview-demo10'
import PullToRefreshListViewDemo11 from '../react-native-smart-pull-to-refresh-listview/react-native-smart-pull-to-refresh-listview-demo11'
import PullToRefreshListViewDemo12 from '../react-native-smart-pull-to-refresh-listview/react-native-smart-pull-to-refresh-listview-demo12'
import PullToRefreshListViewDemo13 from '../react-native-smart-pull-to-refresh-listview/react-native-smart-pull-to-refresh-listview-demo13'
import StickyHeaderAndroidDemo from '../react-native-smart-pull-to-refresh-listview/sticky-header-android'
import StickyHeaderAndroidPullToRefreshDemo from '../react-native-smart-pull-to-refresh-listview/sticky-header-android-pull-to-refresh'
import ScrollableTabViewPullToRefreshDemo from '../react-native-smart-pull-to-refresh-listview/use-with-react-native-scrollable-tab-view'
import ListImageLoaderDemo from '../react-native-smart-image-loader/react-native-smart-pull-to-refresh-listview+image-loader'
import ListImageLoaderAndroidDemo from '../react-native-smart-image-loader/react-native-smart-pull-to-refresh-listview+image-loader(android)'
import Toast from '../react-native-smart-toast/toast-text'
import LoadingSpinnerOverLay from '../react-native-smart-loading-spinner-overlay/loading-spinner-overlay'
import Barcode from '../react-native-smart-barcode/fullscreen'
import AppEventListenerEnhanceDemo from '../react-native-smart-app-event-listener-enhance/app-event-listener-enhance'
import AMapLocationAlone from '../react-native-smart-amap-location/amap-location-alone-ios'
import AMapLocationSerial from '../react-native-smart-amap-location/amap-location-serial-android'
import AMapAlone from '../react-native-smart-amap/amap-alone'

import AppEventListenerEnhance from 'react-native-smart-app-event-listener-enhance'
import TimerEnhance from 'react-native-smart-timer-enhance'
import AMapLocation from 'react-native-smart-amap-location'

const contentPaddingLeft = 12

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'stretch',
        backgroundColor: 'white',
    },
    header: {
        //paddingTop: 20,
        //height: 20 + 44,
        height: 56,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black',
    },
    headerTitle: {
        fontSize: 20,
        color: 'white',
        //lineHeight: 44,
    },
    itemHeader: {
        paddingLeft: contentPaddingLeft,
        height: 30,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: '#ccc',
        backgroundColor: '#F9F9F9',
        overflow: 'hidden',
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    item: {
        height: 60,
        paddingLeft: contentPaddingLeft,
        //borderBottomWidth: StyleSheet.hairlineWidth,
        //borderBottomColor: '#ccc',
        overflow: 'hidden',
        justifyContent: 'center',
        alignItems: 'flex-start',
    },

    contentContainer: {
        paddingTop: 20 + 44,
    },

    separator: {
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: '#ccc',
    },

    navBarText: {
        fontSize: 16,
        marginVertical: 10,
    },
    navBarTitleText: {
        color: '#373E4D',
        fontWeight: '500',
        marginVertical: 9,
    },
    navBarLeftButton: {
        paddingLeft: 10,
    },
    navBarRightButton: {
        paddingRight: 10,
    },
    navBarButtonText: {
        color: '#5890FF',
    },
})

let componentData = {
    'button': {
        'all-buttons': {
            title: 'all-buttons',
            component: AllButton,
        },
        'basic-button': {
            title: 'basic-button',
            component: BasicButton,
        },
        'icon-button': {
            title: 'icon-button',
            component: IconButton,
        },
        'badage-button': {
            title: 'badge-button',
            component: BadgeButton,
        },
        'loading-button': {
            title: 'loading-button',
            component: LoadingButton,
        },
    },
    'sudoku-grid': {
        'sudoku-grid': {
            title: 'sudoku-grid',
            component: ThreeColumns,
        },
    },
    'sortable-sudoku-grid': {
        'sortable-sudoku-grid': {
            title: 'sortable-sudoku-grid',
            component: SortableThreeColumns,
        },
    },
    'badge': {
        'number-badge': {
            title: 'number-badge',
            component: NumberBadge,
        },
        'empty-badge': {
            title: 'empty-badge',
            component: EmptyBadge,
        },
        'custom-badge': {
            title: 'custom-badge',
            component: CustomBadge,
        },
    },
    '3D Touch': {
        'touch-id': {
            title: 'touch-id',
            component: TouchIdTest,
        },
    },
    'corner-label': {
        'corner-label': {
            title: 'corner-label',
            component: CornerLabel,
        },
    },
    'gesture-password': {
        'gesture-password ': {
            title: 'gesture-password',
            component: gesturePassword,
        },
    },
    'parabola': {
        'parabola': {
            title: 'parabola',
            component: ParabolaDemo,
        },
    },
    'security-text': {
        'security-text': {
            title: 'security-text',
            component: SecurityTextDemo,
        },
    },
    'pull-to-refresh': {
        'scrollview': {
            title: 'scrollview',
            component: PullToRefreshListViewDemo,
        },
        'listview': {
            title: 'listview',
            component: PullToRefreshListViewDemo2,
        },
        'scrollview-auto-load': {
            title: 'scrollview-auto-load',
            component: PullToRefreshListViewDemo3,
        },
        'listview-auto-load': {
            title: 'listview-auto-load',
            component: PullToRefreshListViewDemo4,
        },
        'scrollview-infinite': {
            title: 'scrollview-infinite',
            component: PullToRefreshListViewDemo5,
        },
        'listview-auto-load-infinite': {
            title: 'listview-auto-load-infinite',
            component: PullToRefreshListViewDemo6,
        },
        'listview-infinite': {
            title: 'listview-infinite',
            component: PullToRefreshListViewDemo7,
        },
        'listview-only-one-row': {
            title: 'listview-only-one-row',
            component: PullToRefreshListViewDemo8,
        },
        'listview-no-data-auto-load': {
            title: 'listview-no-data-auto-load (下拉刷新+自动加载更多+初始无数据)',
            component: PullToRefreshListViewDemo9,
        },
        'listview-no-data-2': {
            title: 'listview-no-data-2 (下拉刷新+上拉加载+初始无数据)',
            component: PullToRefreshListViewDemo12,
        },
        'listview-no-data-auto-load-2': {
            title: 'listview-no-data-auto-load-2 (下拉刷新+自动加载更多+初始无数据)',
            component: PullToRefreshListViewDemo13,
        },
        'listview-response-almost-immediately': {
            title: 'listview-response-almost-immediately (下拉刷新+上拉加载+立即响应请求)',
            component: PullToRefreshListViewDemo10,
        },
        'listview-response-almost-immediately-auto-load': {
            title: 'listview-response-almost-immediately-auto-load (下拉刷新+自动加载更多+立即响应请求)',
            component: PullToRefreshListViewDemo11,
        },
        'sticky-header': {
            title: 'sticky-header',
            component: StickyHeaderAndroidDemo,
        },
        'sticky-header-pull-to-refresh': {
            title: 'sticky-header-pull-to-refresh',
            component: StickyHeaderAndroidPullToRefreshDemo,
        },
        'use-with-react-native-scrollable-tab-view': {
            title: 'use-with-react-native-scrollable-tab-view',
            component: ScrollableTabViewPullToRefreshDemo,
        },
    },
    'toast': {
        'toast': {
            title: 'toast',
            component: Toast,
        }
    },
    'loaing-spinner-overlay': {
        'loaing-spinner-overlay': {
            title: 'loaing-spinner-overlay',
            component: LoadingSpinnerOverLay,
        }
    },
    'barcode (扫码)': {
        'fullscreen': {
            title: 'fullscreen',
            component: Barcode,
        }
    },
    'image-loader': {
        'listview-imageloader': {
            title: 'listview-imageloader',
            component: ListImageLoaderDemo,
        },
        'listview-imageloader-android': {
            title: 'listview-imageloader-android',
            component: ListImageLoaderAndroidDemo,
        },
    },
    'app-event-listener-enhance': {
        'app-event-listener-enhance': {
            title: 'app-event-listener-enhance',
            component: AppEventListenerEnhanceDemo,
        },
    },
    'amap-location (高德定位)': {
        'amap-location-alone': {
            title: '单次定位(不依赖地图)',
            component: AMapLocationAlone,
        },
        'amap-location-serial': {
            title: '连续定位(不依赖地图)',
            component: AMapLocationSerial,
        },
    },
    'amap (高德地图)': {
        'amap-alone': {
            title: '地图-单次定位',
            component: AMapAlone,
        },
    },


}
let dataSource = new ListView.DataSource({
    rowHasChanged: (r1, r2) => {
        return r1 !== r2
    },
    sectionHeaderHasChanged: (s1, s2) => {
        return s1 !== s2
    },
})

class ReactNativeComponentList extends Component {

    // 构造
    constructor (props, context) {
        super(props);
        // 初始状态
        this.state = {
            componentDataSource: dataSource.cloneWithRowsAndSections(componentData)
        };
        this._coordinate = {
            latitude: 0,
            longitude: 0,
        }
    }

    render () {
        return (
            <View style={styles.container}>
                <StatusBar backgroundColor={'black'}/>
                <View style={styles.header}>
                    <Text style={styles.headerTitle}>React Native Components</Text>
                </View>
                <ListView
                    automaticallyAdjustContentInsets={false}
                    dataSource={this.state.componentDataSource}
                    renderSectionHeader={this._renderSectionHeader}
                    renderRow={this._renderRow}
                    renderSeparator={this._renderSeperator}
                    initialListSize={10}
                    onEndReached={this._onEndReached}
                    onEndReachedThreshold={30}
                    pageSize={10}
                    onChangeVisibleRows={this._onChangeVisibleRows}
                />
            </View>
        );
    }

    componentDidMount() {
        let currentRoute = this.props.navigator.navigationContext._currentRoute
        let viewAppearCallBack = (event) => {
            //didfocus emit in componentDidMount
            if (currentRoute === event.data.route) {
                console.log("self didAppear")
            } else {
                console.log("self didDisappear, other didAppear")
            }
            //console.log(currentRoute)
            //console.log(event.data.route)
            this.setTimeout( () => {
                AMapLocation.init(null)
                AMapLocation.getLocation()
                didFocusListener.remove()
            }, 500)
        }

        let didFocusListener = this.props.navigator.navigationContext.addListener('didfocus', viewAppearCallBack)
        this.addAppEventListener(
            //this.props.navigator.navigationContext.addListener('willfocus', viewAppearCallBack),
            didFocusListener,
            NativeAppEventEmitter.addListener('amap.location.onLocationResult', this._onLocationResult)
        )
    }

    componentWillUnmount () {
        //停止并销毁定位服务
        AMapLocation.cleanUp()
    }

    _onLocationResult = (result) => {
        if(result.error) {
            console.log(`错误代码: ${result.error.code}, 错误信息: ${result.error.localizedDescription}`)
        }
        else {
            if(result.formattedAddress) {
                console.log(`格式化地址 = ${result.formattedAddress}`)
            }
            else {
                console.log(`纬度 = ${result.coordinate.latitude}, 经度 = ${result.coordinate.longitude}`)
                this._coordinate = {
                    latitude: result.coordinate.latitude,
                    longitude: result.coordinate.longitude,
                }
            }
        }
    }

    _renderSectionHeader = (sectionData, sectionID) => {
        //console.log(sectionData)
        return (
            <View style={styles.itemHeader}>
                <Text>{sectionID}</Text>
            </View>
        )
    }

    _renderRow = (rowData, sectionID, rowID) => {
        //console.log('sectionID = ' + sectionID + ' | rowID = ' + rowID)
        //console.log(rowData)
        return (
            <TouchableHighlight underlayColor={'#ccc'} style={styles.item}
                                onPress={this._onListItemPress.bind(this, rowData)}>
                <Text>{rowData.title}</Text>
            </TouchableHighlight>
        )
    }

    _renderSeperator = (sectionID, rowID) => {
        return (
            <View style={styles.separator}/>
        )
    }

    _onEndReached = () => {
        //console.log('onEndReached!')
    }

    _onChangeVisibleRows = (visibleRows, changedRows) => {
        //console.log(changedRows)
    }

    _onListItemPress (rowData) {
        let navigatorProps = {
            title: rowData.title,
            component: rowData.component,
        }
        if(rowData.component === AMapAlone) {
            navigatorProps['coordinate'] = this._coordinate
        }

        this.props.navigator.push(navigatorProps)
        //console.log('a')
        //console.log(a)
        //console.log('a.nativeEvent')
        //console.log(a.nativeEvent)
        //console.log('a._targetInst')
        //console.log(a._targetInst)
        //console.log('a.dispatchConfig')
        //console.log(a.dispatchConfig)
    }

}

export default TimerEnhance(AppEventListenerEnhance(ReactNativeComponentList))




