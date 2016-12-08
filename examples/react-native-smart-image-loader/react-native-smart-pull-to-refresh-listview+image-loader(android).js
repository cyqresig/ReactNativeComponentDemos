
import React, {
    Component,
} from 'react'
import {
    View,
    Text,
    StyleSheet,
    Alert,
    ScrollView,
    ListView,
    Image,
    ActivityIndicator,
    ProgressBarAndroid,
    ActivityIndicatorIOS,
    Platform,
} from 'react-native'

import TimerEnhance from 'react-native-smart-timer-enhance'
import PullToRefreshListView from 'react-native-smart-pull-to-refresh-listview'

import ImageLoader from 'react-native-smart-image-loader'
import imageUrls from './imageUrls'

let pageSize = 20
let itemIndex = 0

class PullToRefreshListViewDemo extends Component {

    // 构造
    constructor(props) {
        super(props);

        this._dataSource = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2,
            //sectionHeaderHasChanged: (s1, s2) => s1 !== s2,
        });

        let dataList = []

        this.state = {
            dataList: dataList,
            dataSource: this._dataSource.cloneWithRows(dataList),
        }
    }

    componentDidMount () {
        this._pullToRefreshListView.beginRefresh()
    }

    //Using ListView
    render() {
        return (
            <PullToRefreshListView
                ref={ (component) => this._pullToRefreshListView = component }
                viewType={PullToRefreshListView.constants.viewType.listView}
                contentContainerStyle={{backgroundColor: 'transparent', }}
                style={{marginTop: Platform.OS == 'ios' ? 64 : 56, }}
                initialListSize={100}
                enableEmptySections={true}
                dataSource={this.state.dataSource}
                pageSize={100}
                renderRowWithVisibility={true}
                renderRow={this._renderRow}
                //renderSeparator={(sectionID, rowID) => <View style={styles.separator} />}
                listItemProps={{overflow: 'hidden', height: 150, }}
                renderHeader={this._renderHeader}
                renderFooter={this._renderFooter}
                onRefresh={this._onRefresh}
                onLoadMore={this._onLoadMore}
                autoLoadMore={true}
                //onEndReachedThreshold={15}
            />
        )

    }

    //_renderRow = (rowData, sectionID, rowID) => {
    //    return (
    //        <View style={{flexDirection: 'row',}}>
    //            <ImageLoader
    //                style={{width: 150, height: 150}}
    //                options={{
    //                 rowID: rowID,
    //                 src: `http://o2o.doorto.cn/upload/yun-o2o/${rowData}`,
    //                 placeholder: Platform.OS == 'ios' ? 'goods-placeholder' : 'goods_placeholder',
    //                 }}
    //            />
    //            <Text style={{paddingHorizontal: 30, paddingVertical: 20}} >{rowID}</Text>
    //        </View>
    //    )
    //}

    _renderRow = (rowData, sectionID, rowID, hidden) => {
        //console.log(`hidden = ${hidden}`)
        return (
            <View style={{flexDirection: 'row',}}>
                {!hidden ?
                    <ImageLoader
                        style={{width: 150, height: 150}}
                        options={{
                         rowID: rowID,
                         src: `http://o2o.doorto.cn/upload/yun-o2o/${rowData}`,
                         placeholder: Platform.OS == 'ios' ? 'goods-placeholder' : 'goods_placeholder',
                         }}
                    /> : <Image source={{uri: 'goods-placeholder'}} style={{width: 150, height: 150}} />}
                <Text style={{paddingHorizontal: 30, paddingVertical: 20}} >{rowID}</Text>
            </View>
        )
    }

    /*

    * */

    _renderHeader = (viewState) => {
        let {pullState, pullDistancePercent} = viewState
        let {refresh_none, refresh_idle, will_refresh, refreshing,} = PullToRefreshListView.constants.viewState
        pullDistancePercent = Math.round(pullDistancePercent * 100)
        switch(pullState) {
            case refresh_none:
                return (
                    <View style={{height: 35, justifyContent: 'center', alignItems: 'center', backgroundColor: 'transparent',}}>
                        <Text>pull down to refresh</Text>
                    </View>
                )
            case refresh_idle:
                return (
                    <View style={{height: 35, justifyContent: 'center', alignItems: 'center', backgroundColor: 'transparent',}}>
                        <Text>pull down to refresh {pullDistancePercent}%</Text>
                    </View>
                )
            case will_refresh:
                return (
                    <View style={{height: 35, justifyContent: 'center', alignItems: 'center', backgroundColor: 'transparent',}}>
                        <Text>release to refresh {pullDistancePercent > 100 ? 100 : pullDistancePercent}%</Text>
                    </View>
                )
            case refreshing:
                return (
                    <View style={{flexDirection: 'row', height: 35, justifyContent: 'center', alignItems: 'center', backgroundColor: 'transparent',}}>
                        {this._renderActivityIndicator()}<Text>refreshing</Text>
                    </View>
                )
        }
    }

    _renderFooter = (viewState) => {
        let {pullState, pullDistancePercent} = viewState
        let {load_more_none, load_more_idle, will_load_more, loading_more, loaded_all, } = PullToRefreshListView.constants.viewState
        pullDistancePercent = Math.round(pullDistancePercent * 100)
        switch(pullState) {
            case load_more_none:
                return (
                    <View style={{height: 35, justifyContent: 'center', alignItems: 'center', backgroundColor: 'transparent',}}>
                        <Text>pull up to load more</Text>
                    </View>
                )
            case loading_more:
                return (
                    <View style={{flexDirection: 'row', height: 35, justifyContent: 'center', alignItems: 'center', backgroundColor: 'transparent',}}>
                        {this._renderActivityIndicator()}<Text>loading</Text>
                    </View>
                )
            case loaded_all:
                return (
                    <View style={{height: 35, justifyContent: 'center', alignItems: 'center', backgroundColor: 'transparent',}}>
                        <Text>no more</Text>
                    </View>
                )
        }
    }

    _onRefresh = () => {
        //console.log('outside _onRefresh start...')

        //simulate request data
        this.setTimeout( () => {
            itemIndex = 0
            let startIndex = itemIndex
            let endIndex = itemIndex + pageSize <= imageUrls.length ? itemIndex + pageSize : imageUrls.length - itemIndex
            let refreshedDataList = imageUrls.slice(startIndex, endIndex)
            itemIndex = endIndex

            //need to clear ListRowRefsCache manually
            this._pullToRefreshListView.clearListRowRefsCache()

            this.setState({
                dataList: refreshedDataList,
                dataSource: this._dataSource.cloneWithRows(refreshedDataList),
            })
            this._pullToRefreshListView.endRefresh()

        }, 1000)
    }

    _onLoadMore = () => {
        //console.log('outside _onLoadMore start...')

        //simulate request data
        this.setTimeout( () => {

            let startIndex = itemIndex
            let endIndex = itemIndex + pageSize <= imageUrls.length ? itemIndex + pageSize : imageUrls.length
            let addedDataList = imageUrls.slice(startIndex, endIndex)
            itemIndex = endIndex

            let newDataList = this.state.dataList.concat(addedDataList)
            this.setState({
                dataList: newDataList,
                dataSource: this._dataSource.cloneWithRows(newDataList),
            })

            let loadedAll
            if(this.state.dataList.length >= imageUrls.length) {
                loadedAll = true
                this._pullToRefreshListView.endLoadMore(loadedAll)
            }
            else {
                loadedAll = false
                this._pullToRefreshListView.endLoadMore(loadedAll)
            }

        }, 1000)
    }

    _renderActivityIndicator() {
        return ActivityIndicator ? (
            <ActivityIndicator
                style={{marginRight: 10,}}
                animating={true}
                color={'#ff0000'}
                size={'small'}/>
        ) : Platform.OS == 'android' ?
            (
                <ProgressBarAndroid
                    style={{marginRight: 10,}}
                    color={'#ff0000'}
                    styleAttr={'Small'}/>

            ) :  (
            <ActivityIndicatorIOS
                style={{marginRight: 10,}}
                animating={true}
                color={'#ff0000'}
                size={'small'}/>
        )
    }

}



const styles = StyleSheet.create({
    itemHeader: {
        height: 35,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: '#ccc',
        backgroundColor: 'blue',
        overflow: 'hidden',
        justifyContent: 'center',
        alignItems: 'center',
    },
    item: {
        height: 60,
        //borderBottomWidth: StyleSheet.hairlineWidth,
        //borderBottomColor: '#ccc',
        overflow: 'hidden',
        justifyContent: 'center',
        alignItems: 'center',
    },

    contentContainer: {
        paddingTop: 20 + 44,
    },

    separator: {
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: '#ccc',
    },

    thumbnail: {
        padding: 6,
        flexDirection: 'row',
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: '#ccc',
        overflow: 'hidden',
    },

    textContainer: {
        //height: 100,
        padding: 20,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default TimerEnhance(PullToRefreshListViewDemo)
