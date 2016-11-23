/**
 * @fileOverview
 * @author HISAME SHIZUMARU
 * @version
 * Created on 16/11/18.
 */

import React, {
    Component,
    PropTypes,
} from 'react'
import {
    View,
    Text,
    StyleSheet,
    Alert,
    ScrollView,
    ListView,
    Image,
    Platform,
    TouchableHighlight,
} from 'react-native'

import PullToRefreshListView from 'react-native-smart-pull-to-refresh-listview'
import ListViewActivityIndicator from './ListViewActivityIndicator'

export default class AMapALoneNearByList extends Component {

    static PropTypes = {
        onRefresh: PropTypes.func.isRequired,
        onLoadMore: PropTypes.func.isRequired,
    }

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

    //Using ListView
    render() {
        //console.log(`AMapALoneNearByList render...`)
        return (
            <PullToRefreshListView
                ref={ (component) => this._pullToRefreshListView = component }
                viewType={PullToRefreshListView.constants.viewType.listView}
                contentContainerStyle={{backgroundColor: '#fff',}}
                initialListSize={20}
                enableEmptySections={true}
                dataSource={this.state.dataSource}
                pageSize={20}
                renderRow={this._renderRow}
                renderSeparator={(sectionID, rowID) => <View style={{borderBottomWidth: StyleSheet.hairlineWidth,borderBottomColor: '#ccc',}} />}
                //listItemProps={{overflow: 'hidden', height: 50, }}
                renderHeader={this._renderHeader}
                renderFooter={this._renderFooter}
                onRefresh={this._onRefresh}
                onLoadMore={this._onLoadMore}
                autoLoadMore={false}
                //onEndReachedThreshold={15}
            />
        )

    }

    _onSearchResultListItemPress = (rowData, e) => {
        Alert.alert(`${rowData.name}`, `${rowData.address}`)
    }

    _renderRow = (rowData, sectionID, rowID) => {
        return (
            <TouchableHighlight
                style={{height: 50, paddingHorizontal: 30, paddingVertical: 10, overflow: 'hidden',}}
                activeOpacity={8}
                underlayColor={'#ccc'}
                onPress={this._onSearchResultListItemPress.bind(this, rowData)}>
                <View>
                    <Text style={{fontSize: 14,}}>{rowData.rowID}{rowData.name}</Text>
                    <Text style={{fontSize: 12, color: '#ccc',}}>{rowData.address}</Text>
                </View>
            </TouchableHighlight>
        )
    }

    _renderHeader = (viewState) => {
        let {pullState, pullDistancePercent} = viewState
        let {refresh_none, refresh_idle, will_refresh, refreshing,} = PullToRefreshListView.constants.viewState
        pullDistancePercent = Math.round(pullDistancePercent * 100)
        switch(pullState) {
            case refresh_none:
                return (
                    <View style={{height: 35, justifyContent: 'center', alignItems: 'center', backgroundColor: '#f4f4f4',}}>
                        <Text>下拉刷新</Text>
                    </View>
                )
            case refresh_idle:
                return (
                    <View style={{height: 35, justifyContent: 'center', alignItems: 'center', backgroundColor: '#f4f4f4',}}>
                        <Text>下拉刷新{pullDistancePercent}%</Text>
                    </View>
                )
            case will_refresh:
                return (
                    <View style={{height: 35, justifyContent: 'center', alignItems: 'center', backgroundColor: '#f4f4f4',}}>
                        <Text>释放刷新 {pullDistancePercent > 100 ? 100 : pullDistancePercent}%</Text>
                    </View>
                )
            case refreshing:
                return (
                    <View style={{flexDirection: 'row', height: 35, justifyContent: 'center', alignItems: 'center', backgroundColor: '#f4f4f4',}}>
                        <ListViewActivityIndicator style={{marginRight: 10,}} color={'#a9a9a9'}/><Text>正在刷新</Text>
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
                    <View style={{height: 35, justifyContent: 'center', alignItems: 'center', backgroundColor: '#f4f4f4',}}>
                        <Text>上拉加载更多</Text>
                    </View>
                )
            case load_more_idle:
                return (
                    <View style={{height: 35, justifyContent: 'center', alignItems: 'center', backgroundColor: '#f4f4f4',}}>
                        <Text>上拉加载更多 {pullDistancePercent}%</Text>
                    </View>
                )
            case will_load_more:
                return (
                    <View style={{height: 35, justifyContent: 'center', alignItems: 'center', backgroundColor: '#f4f4f4',}}>
                        <Text>释放加载更多 {pullDistancePercent > 100 ? 100 : pullDistancePercent}%</Text>
                    </View>
                )
            case loading_more:
                return (
                    <View style={{flexDirection: 'row', height: 35, justifyContent: 'center', alignItems: 'center', backgroundColor: '#f4f4f4',}}>
                        <ListViewActivityIndicator style={{marginRight: 10,}} color={'#a9a9a9'}/><Text>正在加载更多</Text>
                    </View>
                )
            case loaded_all:
                return (
                    <View style={{height: 35, justifyContent: 'center', alignItems: 'center', backgroundColor: '#f4f4f4',}}>
                        <Text>没有更多了</Text>
                    </View>
                )
        }
    }

    _onRefresh = () => {
        this.props.onRefresh()
    }

    _onLoadMore = () => {
        this.props.onLoadMore()
    }

}
