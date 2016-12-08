
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
            first: true,
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
                initialListSize={20}
                enableEmptySections={true}
                dataSource={this.state.dataSource}
                pageSize={30}
                renderRow={this._renderRow}
                //renderSeparator={(sectionID, rowID) => <View style={styles.separator} />}

                renderHeader={this._renderHeader}
                renderFooter={this._renderFooter}
                onRefresh={this._onRefresh}
                onLoadMore={this._onLoadMore}
                autoLoadMore={true}
                //onEndReachedThreshold={15}
            />
        )

    }

    _renderRow = (rowData, sectionID, rowID) => {
        ////console.log('_renderRow')

        //let imgSource = (!rowData.loaded ? {uri: rowData.img} : null)

        ////console.log('rowID = ' + rowID)
        ////console.log('rowData.loaded = ' + rowData.loaded)
        ////console.log('imgSource = ' + imgSource)

        return (
            <View style={styles.thumbnail}>
                <View style={styles.textContainer}>
                    <Text>{rowData.text}</Text>
                </View>
            </View>
        )
    }

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
        console.log('outside _onRefresh start...')

        //simulate request data
        this.setTimeout( () => {

            //console.log('outside _onRefresh end...')
            let addNum = 20
            let refreshedDataList = []
            for(let i = 0; i < addNum; i++) {
                refreshedDataList.push({
                    text: `item-${i}`
                })
            }

            this.setState({
                dataList: refreshedDataList,
                dataSource: this._dataSource.cloneWithRows(refreshedDataList),
            })
            this._pullToRefreshListView.endRefresh()

        }, 3000)
    }

    _onLoadMore = () => {
        console.log('outside _onLoadMore start...')

        this.setTimeout( () => {

            //console.log('outside _onLoadMore end...')

            let length = this.state.dataList.length
            let addNum = 20
            let addedDataList = []
            //if(length >= 100) {
            //    addNum = 3
            //}
            for(let i = length; i < length + addNum; i++) {
                addedDataList.push({
                    text: `item-${i}`
                })
            }
            let newDataList = this.state.dataList.concat(addedDataList)
            this.setState({
                dataList: newDataList,
                dataSource: this._dataSource.cloneWithRows(newDataList),
            })

            //let loadedAll
            //if(length >= 100) {
            //    loadedAll = true
            //    this._pullToRefreshListView.endLoadMore(loadedAll)
            //}
            //else {
            //    loadedAll = false
            //    this._pullToRefreshListView.endLoadMore(loadedAll)
            //}

            this._pullToRefreshListView.endLoadMore()

        }, 3000)
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
        padding: 20,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default TimerEnhance(PullToRefreshListViewDemo)
