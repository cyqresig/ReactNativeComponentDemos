/**
 * @fileOverview
 * @author HISAME SHIZUMARU
 * @version
 * Created on 16/11/30.
 */

import React, {
    Component,
} from 'react'
import {
    View,
    Text,
    ListView,
    StyleSheet,
    TouchableHighlight,
    Alert,
    ActivityIndicator,
    ProgressBarAndroid,
    ActivityIndicatorIOS,
} from 'react-native'

import TimerEnhance from 'react-native-smart-timer-enhance'
import PullToRefreshListView from 'react-native-smart-pull-to-refresh-listview'


class StickyHeaderAndroidPullToRefreshTest extends Component {

    constructor (props) {
        super(props)
        this._dataSource = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2,
            sectionHeaderHasChanged: (s1, s2) => s1 !== s2,
        });
        this.state = {
            sectionDataCollection: {},
            componentDataSource: this._dataSource.cloneWithRowsAndSections({}),
        }
        this._pageIndex = 1
    }

    componentDidMount () {
        this._pullToRefreshListView.beginRefresh()
    }

    render () {
        return (
            <View style={styles.container}>
                <PullToRefreshListView
                    ref={ (component) => this._pullToRefreshListView = component }
                    viewType={PullToRefreshListView.constants.viewType.listView}
                    contentContainerStyle={{backgroundColor: 'transparent', }}
                    //initialListSize={100}
                    //enableEmptySections={true}
                    dataSource={this.state.componentDataSource}
                    //pageSize={100}
                    renderSectionHeader={this._renderSectionHeader}
                    renderRow={this._renderRow}
                    renderSeparator={this._renderSeperator}
                    //renderSeparator={(sectionID, rowID) => <View style={styles.separator} />}
                    renderHeader={this._renderHeader}
                    renderFooter={this._renderFooter}
                    onRefresh={this._onRefresh}
                    onLoadMore={this._onLoadMore}
                    autoLoadMore={true}
                    //onEndReachedThreshold={15}
                />
            </View>
        )
    }

    _renderSectionHeader = (sectionData, sectionID) => {
        //console.log(sectionData)
        return (
            <View style={styles.itemHeader}>
                <Text>{sectionID}</Text>
            </View>
        )
    }

    _renderRow = (rowData, sectionID, rowID, hidden) => {
        //console.log('sectionID = ' + sectionID + ' | rowID = ' + rowID)
        //this.rowIdentities = [];
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

    _onListItemPress (rowData) {
        let navigatorProps = {
            title: rowData.title,

        }
        console.log(`rowData.title = ${rowData.title}`)
    }

    _renderHeader = (viewState) => {
        let {pullState, pullDistancePercent} = viewState
        let {refresh_none, refresh_idle, will_refresh, refreshing,} = PullToRefreshListView.constants.viewState
        pullDistancePercent = Math.round(pullDistancePercent * 100)
        switch(pullState) {
            case refresh_none:
                return (
                    <View style={{height: 35, justifyContent: 'center', alignItems: 'center', backgroundColor: 'pink',}}>
                        <Text>pull down to refresh</Text>
                    </View>
                )
            case refresh_idle:
                return (
                    <View style={{height: 35, justifyContent: 'center', alignItems: 'center', backgroundColor: 'pink',}}>
                        <Text>pull down to refresh {pullDistancePercent}%</Text>
                    </View>
                )
            case will_refresh:
                return (
                    <View style={{height: 35, justifyContent: 'center', alignItems: 'center', backgroundColor: 'pink',}}>
                        <Text>release to refresh {pullDistancePercent > 100 ? 100 : pullDistancePercent}%</Text>
                    </View>
                )
            case refreshing:
                return (
                    <View style={{flexDirection: 'row', height: 35, justifyContent: 'center', alignItems: 'center', backgroundColor: 'pink',}}>
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
                    <View style={{height: 35, justifyContent: 'center', alignItems: 'center', backgroundColor: 'pink',}}>
                        <Text>pull up to load more</Text>
                    </View>
                )
            case loading_more:
                return (
                    <View style={{flexDirection: 'row', height: 35, justifyContent: 'center', alignItems: 'center', backgroundColor: 'pink',}}>
                        {this._renderActivityIndicator()}<Text>loading</Text>
                    </View>
                )
            case loaded_all:
                return (
                    <View style={{height: 35, justifyContent: 'center', alignItems: 'center', backgroundColor: 'pink',}}>
                        <Text>no more</Text>
                    </View>
                )
        }
    }

    _onRefresh = () => {
        //console.log('outside _onRefresh start...')

        //simulate request data
        this.setTimeout( () => {

            this._pageIndex = 1

            //need to clear ListRowRefsCache manually
            this._pullToRefreshListView.clearListRowRefsCache()

            //console.log('outside _onRefresh end...')
            let refreshedSectionDataCollection = Object.assign({}, componentData)

            this.setState({
                sectionDataCollection: refreshedSectionDataCollection,
                componentDataSource: this._dataSource.cloneWithRowsAndSections(refreshedSectionDataCollection),
            })
            this._pullToRefreshListView.endRefresh()

        }, 3000)
    }

    _onLoadMore = () => {
        //console.log('outside _onLoadMore start...')

        this._pageIndex++

        this.setTimeout( () => {

            //console.log('outside _onLoadMore end...')


            let addedDataList

            let newSectionDataCollection
            if(this._pageIndex == 2) {
                newSectionDataCollection = Object.assign(this.state.sectionDataCollection, componentData_2)
                console.log(`newSectionDataCollection pageIndex = ${this._pageIndex}`)
                console.log(newSectionDataCollection)
            }
            else if(this._pageIndex == 3) {
                newSectionDataCollection = Object.assign(this.state.sectionDataCollection, componentData_3)
                console.log(`newSectionDataCollection pageIndex = ${this._pageIndex}`)
                console.log(newSectionDataCollection)
            }

            this.setState({
                sectionDataCollection: newSectionDataCollection,
                componentDataSource: this._dataSource.cloneWithRowsAndSections(newSectionDataCollection)
            })

            let loadedAll
            if(this._pageIndex == 3) {
                loadedAll = true
                this._pullToRefreshListView.endLoadMore(loadedAll)
            }
            else {
                loadedAll = false
                this._pullToRefreshListView.endLoadMore(loadedAll)
            }

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

let componentData = {
    //button
    'button (按钮)': [
        {
            title: 'all-button (所有按钮)',
        },
        {
            title: 'basic-button (普通按钮)',
        },
        {
            title: 'icon-button (带图标按钮)',
        },
        {
            title: 'badge-button (带数字的按钮)',
        },
        {
            title: 'loading-button (带加载中的按钮)',
        },
    ],
    'sudoku-grid (九宫格)': [
        {
            title: 'sudoku-grid (3列)',
        },
        {
            title: 'sudoku-grid (4列)',
        },
        {
            title: 'icon-button (5列)',
        },
    ],
    'badge (徽章)': [
        {
            title: 'number-badge (数字徽章)',
        },
        {
            title: 'empty-badge (无内容的徽章)',
        },
        {
            title: 'custom-badge (定制内容的徽章)',
        },
    ],
    'corner-label (角标)': [
        {
            title: 'corner-label (角标)',
        },
        {
            title: 'image-corner-label (图片角标)',
        },
    ],
    'gesture-password (手势密码)': [
        {
            title: 'gesture-password  (手势密码)',
        },
    ],
}

let componentData_2 = {
    'parabola (抛物线)': [
        {
            title: 'parabola (抛物线)',
        },
    ],
    'security-text (保密文本)': [
        {
            title: 'security-text (保密文本)',
        },
    ],
    //'refresh-infinite-control (上拉刷新,下拉加载)': [
    //    {
    //        title: 'refresh-infinite-scrollview (上拉刷新,下拉加载)',
    //    },
    //],
    'timer-enhance (es6 timer mixin)': [
        {
            title: 'timer-enhance(es6 timer mixin)',
        },
    ],
    'pull-to-refresh (下拉刷新+上拉加载)': [
        {
            title: 'scrollview (下拉刷新+上拉加载更多)',
        },
        {
            title: 'listview (下拉刷新+上拉加载更多)',
        },
        {
            title: 'scrollview-auto-load (下拉刷新+自动加载更多)',
        },
        {
            title: 'listview-auto-load (下拉刷新+自动加载更多)',
        },
        {
            title: 'scrollview-infinite (下拉刷新+上拉加载+无限)',
        },
        {
            title: 'listview-auto-load-infinite (下拉刷新+自动加载更多+无限)',
        },
        {
            title: 'listview-infinite (下拉刷新+加载更多+无限)',
        },
    ],

    'toast (帮助信息提示)': [
        {
            title: 'toast (帮助信息提示)',
        },
    ],
    'loaing-spinner-overlay (加载信息提示)': [
        {
            title: 'loaing-spinner-overlay (加载信息提示)',
        },
    ],
}

let componentData_3 = {
    'barcode (扫码)': [
        {
            title: 'fullscreen (全屏扫描)',
        },
    ],
    'image-loader (图片懒加载)': [
        {
            title: 'listview-imageloader (下拉刷新+加载更多+图片加载)',
        },
        {
            title: 'listview-imageloader-android (下拉刷新+加载更多+图片加载)',
        },
    ],
    'amap-location (高德定位)': [
        {
            title: '单次定位(不依赖地图)',
        },
        {
            title: '连续定位(不依赖地图)',
        },
    ],
    'app-event-listener-enhance': [
        {
            title: 'app-event-listener-enhance',
        },
    ],
    'amap (高德地图)': [
        {
            title: '标准,卫星二种类型',
        },
        {
            title: '显示路况',
        },
        {
            title: '与地图交互',
        },
        {
            title: '地图-单次定位',
        },
    ],
    'jpush (极光推送)': [
        {
            title: 'jpush',
        },
    ],
    'image-test (图片测试)': [
        {
            title: 'image-cache (图片缓存)',
        },
        {
            title: 'image-cache-list (图片缓存列表)',
        },
    ],
    'request (网络请求)': [
        {
            title: 'fetch',
        },
    ]
}

const contentPaddingLeft = 12

const styles = StyleSheet.create({
    container: {
        marginTop: 64,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'stretch',
        backgroundColor: 'white',
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
        flex: 1,
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

export default TimerEnhance(StickyHeaderAndroidPullToRefreshTest)