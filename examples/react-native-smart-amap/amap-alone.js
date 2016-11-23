/**
 * @fileOverview
 * @author HISAME SHIZUMARU
 * @version
 * Created on 16/11/9.
 */

import React, {
    Component,
} from 'react'
import {
    StyleSheet,
    View,
    Text,
    Image,
    NativeAppEventEmitter,
    TouchableHighlight,
    ListView,
    Dimensions,
    Alert,
    Platform,
} from 'react-native'

import AMapLocation from 'react-native-smart-amap-location'
import AMap from 'react-native-smart-amap'
import Button from 'react-native-smart-button'
import AppEventListenerEnhance from 'react-native-smart-app-event-listener-enhance'
import PullToRefreshListView from 'react-native-smart-pull-to-refresh-listview'
import TimerEnhance from 'react-native-smart-timer-enhance'
import AMapALoneNearByList from './amp-alone-nearby-list'
import ListViewActivityIndicator from './ListViewActivityIndicator'

const {width: deviceWidth, height: deviceHeight} = Dimensions.get('window')

class AMapDemo extends Component {

    constructor(props) {
        super(props);

        this._amap = null
        this._page = 0
        this._coordinate = this.props.navigator.navigationContext._currentRoute.coordinate
        console.log(`this._coordinate -> `)
        console.log(this._coordinate)
        this._keywords = '商务住宅|学校'
        this._onDidMoveByUserTimer = null
    }

    componentDidMount() {
        this.addAppEventListener(
            NativeAppEventEmitter.addListener('amap.location.onLocationResult', this._onLocationResult),
            NativeAppEventEmitter.addListener('amap.onPOISearchDone', this._onPOISearchDone)
            //NativeAppEventEmitter.addListener('amap.onPOISearchFailed', this._onPOISearchFailed)
        )
    }

    render () {
        //console.log(`amap-alone render...`)
        return (
                <View style={{marginTop: (Platform.OS == 'ios' ? 20 + 44 : 56), flex: 1, }}>
                    <View style={{position: 'relative', height: (deviceHeight - (Platform.OS == 'ios' ? 64 : 56)) - 50 * 5,}}>
                        <AMap
                        ref={ component => this._amap = component }
                        style={{flex: 1, }}
                        options={{
                            frame: {
                                width: deviceWidth,
                                height: (deviceHeight - 64) - 50 * 5
                            },
                            showsUserLocation: false,
                            userTrackingMode: Platform.OS == 'ios' ? AMap.constants.userTrackingMode.none : null,
                            centerCoordinate: {
                                latitude: this._coordinate.latitude,
                                longitude: this._coordinate.longitude,
                            },
                            zoomLevel: 18.1,
                            centerMarker: Platform.OS == 'ios' ? 'icon_location' : 'poi_marker',
                        }}
                        onLayout={this._onLayout}
                        onDidMoveByUser={this._onDidMoveByUser}
                        />
                        <Button
                            touchableType={Button.constants.touchableTypes.highlight}
                            underlayColor={'#ccc'}
                            style={{padding: 5, position: 'absolute', left: 10, bottom: 20, backgroundColor: '#fff', justifyContent: 'center', borderRadius: 3, borderWidth: StyleSheet.hairlineWidth, borderColor: '#ffffff', justifyContent: 'center', }}
                            onPress={ () => {
                                AMapLocation.init(null)
                                AMapLocation.getLocation()
                                //this._activityIndicator.setState({ visible: true,})
                            }}>
                            <Image source={{uri: Platform.OS == 'ios' ? 'gpsStat1' : 'gps_stat1'}} style={{width: 28, height: 28,}}/>
                        </Button>
                   </View>
                    <View style={{flex: 1, position: 'relative',}}>
                        <AMapALoneNearByList
                            ref={ (component) => this._amapALoneNearByList = component }
                            onRefresh={this._onRefresh}
                            onLoadMore={this._onLoadMore}
                        />
                        <ListViewActivityIndicator
                            ref={ (component) => this._activityIndicator = component }
                            style={{marginRight: 10, position:'absolute', left: (deviceWidth - 20) / 2, top: (50 * 5 - 20) / 2, }}
                            color={'#a9a9a9'}/>
                    </View>
                </View>
        )
    }

    _onDidMoveByUser = (e) => {
        //console.log(`_onDidMoveByUser....`)
        if(this._onDidMoveByUserTimer) {
            this.clearTimeout(this._onDidMoveByUserTimer)
            this._onDidMoveByUserTimer = null
        }
        let { longitude, latitude, } = e.nativeEvent.data.centerCoordinate
        this._onDidMoveByUserTimer = this.setTimeout( ()=> {
            let {refresh_none, refresh_idle, load_more_none, load_more_idle, loaded_all,} = PullToRefreshListView.constants.viewState
            if((this._amapALoneNearByList._pullToRefreshListView._refreshState == refresh_none || this._amapALoneNearByList._pullToRefreshListView._refreshState == refresh_idle)
                && (this._amapALoneNearByList._pullToRefreshListView._loadMoreState == load_more_none
                || this._amapALoneNearByList._pullToRefreshListView._loadMoreState == load_more_idle
                || this._amapALoneNearByList._pullToRefreshListView._loadMoreState == loaded_all)) {
                console.log(`beginRefresh(true)....`)
                this._coordinate = {
                    longitude,
                    latitude,
                }
                this._activityIndicator.setState({ visible: true,})
                this._amapALoneNearByList._pullToRefreshListView._scrollView.scrollTo({ y: 0, animated: false, })
                this._amapALoneNearByList._pullToRefreshListView.beginRefresh(true)
                //this._amapALoneNearByList._pullToRefreshListView.beginRefresh()
                this._beginRefresh = true
            }
        }, 300)
    }

    _onLocationResult = (result) => {
        if(result.error) {
            console.log(`map-错误代码: ${result.error.code}, map-错误信息: ${result.error.localizedDescription}`)
        }
        else {
            if(result.formattedAddress) {
                console.log(`map-格式化地址 = ${result.formattedAddress}`)
            }
            else {
                console.log(`map-纬度 = ${result.coordinate.latitude}, map-经度 = ${result.coordinate.longitude}`)
                this._coordinate = {
                    latitude: result.coordinate.latitude,
                    longitude: result.coordinate.longitude,
                }
                this._amap.setOptions({
                    zoomLevel: 18.1,
                })
                this._amap.setCenterCoordinate(this._coordinate)
            }
        }
    }

    //_onPOISearchFailed = (e) => {
    //    //console.log(`_onPOISearchFailed...`)
    //    //console.log(e)
    //    //console.log(e.error)
    //    this._page--;
    //}

    _onPOISearchDone = (result) => {
        console.log(`_onPOISearchDone...`)

        if(Platform.OS == 'ios') {
            this._endSearch(result)
        }
        else {
            this.setTimeout( () => {
                this._endSearch(result)
            }, 255)
        }
    }

    _endSearch = (result) => {
        let { searchResultList, error } = result

        console.log(result.error)

        if(error) {
            if(this._page == 1) {
                this._page--
                this._amapALoneNearByList._pullToRefreshListView.endRefresh(this._beginRefresh)
                //this._amapALoneNearByList._pullToRefreshListView.endRefresh()
                this._beginRefresh = false
                this._activityIndicator.setState({ visible: false,})
            }
            else {
                this._amapALoneNearByList._pullToRefreshListView.endLoadMore(false)
            }
            return
        }

        console.log(`this._page = ${this._page}`)

        //onRefresh
        if(this._page == 1) {
            this._amapALoneNearByList.setState({
                dataList: searchResultList,
                dataSource: this._amapALoneNearByList._dataSource.cloneWithRows(searchResultList),
            })
            this._amapALoneNearByList._pullToRefreshListView.endRefresh(this._beginRefresh)
            //this._amapALoneNearByList._pullToRefreshListView.endRefresh()
            this._beginRefresh = false
            this._activityIndicator.setState({ visible: false,})
        }
        //onLoadMore
        else {
            let newDataList = this._amapALoneNearByList.state.dataList.concat(searchResultList)
            this._amapALoneNearByList.setState({
                dataList: newDataList,
                dataSource: this._amapALoneNearByList._dataSource.cloneWithRows(newDataList),
            })
            let loadedAll
            if(searchResultList.length == 100) {
                loadedAll = true
                this._amapALoneNearByList._pullToRefreshListView.endLoadMore(loadedAll)
            }
            else {
                loadedAll = false
                this._amapALoneNearByList._pullToRefreshListView.endLoadMore(loadedAll)
            }
        }
    }

    _searchNearBy = (searchParams)=> {
        this._amap.searchPoiByCenterCoordinate(searchParams)
    }

    _onRefresh = () => {
        console.log(`outer _onRefresh...`)
        this._searchNearBy({
            page: (this._page = 1),
            coordinate: this._coordinate,
            keywords: this._keywords,
        })
    }

    _onLoadMore = () => {
        console.log(`outer _onLoadMore...`)
        this._searchNearBy({
            page: ++this._page,
            coordinate: this._coordinate,
            keywords: this._keywords,
        })
    }

}

export default TimerEnhance(AppEventListenerEnhance(AMapDemo))