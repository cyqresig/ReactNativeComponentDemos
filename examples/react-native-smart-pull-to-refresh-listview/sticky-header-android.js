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
} from 'react-native'

import PullToRefreshListView from 'react-native-smart-pull-to-refresh-listview'


export default class StickyHeaderAndroidTest extends Component {

    constructor (props) {
        super(props)
        this.state = {
            componentDataSource: dataSource.cloneWithRowsAndSections(componentData),
        }
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
                    renderRowWithVisibility={true}
                    listItemProps={{height: 60, overflow: 'hidden', }}
                    renderHeader={this._renderHeader}
                    renderFooter={this._renderFooter}
                    onRefresh={this._onRefresh}
                    onLoadMore={this._onLoadMore}
                    //autoLoadMore={true}
                    //onEndReachedThreshold={15}
                    enabledPullUp={false}
                    enabledPullDown={false}
                    renderFloatSectionHeader={this._renderFloatSectionHeader}
                    listSectionProps={{height: 30, overflow: 'hidden', }}
                    pageTop={56}
                />
            </View>
        )
    }

    _renderFloatSectionHeader = (sectionID) => {
        return (
            <View style={styles.itemHeader}>
                <Text>{sectionID}</Text>
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

}

let componentData = {
    //button
    'button (按钮)': {
        'all-button': {
            title: 'all-button (所有按钮)',

        },
        'basic-button': {
            title: 'basic-button (普通按钮)',

        },
        'icon-button': {
            title: 'icon-button (带图标按钮)',

        },
        'badage-button': {
            title: 'badge-button (带数字的按钮)',

        },
        'loading-button': {
            title: 'loading-button (带加载中的按钮)',

        },
    },
    'sudoku-grid (九宫格)': {
        'sudoku-grid': {
            title: 'sudoku-grid (3列)',

        },
        'badage-button2': {
            title: 'sudoku-grid (4列)',
            //BadageButton,
        },
        'icon-button2': {
            title: 'icon-button (5列)',
            //IconButton,
        },
    },
    'badge (徽章)': {
        'number-badge': {
            title: 'number-badge (数字徽章)',

        },
        'empty-badge': {
            title: 'empty-badge (无内容的徽章)',

        },
        'custom-badge': {
            title: 'custom-badge (定制内容的徽章)',

        },
    },
    'corner-label (角标)': {
        'corner-label': {
            title: 'corner-label (角标)',

        },
        'image-corner-label': {
            title: 'image-corner-label (图片角标)',
            //BadageButton,
        },
    },
    'gesture-password (手势密码)': {
        'gesture-password ': {
            title: 'gesture-password  (手势密码)',

        },
    },
    'parabola (抛物线)': {
        'parabola': {
            title: 'parabola (抛物线)',

        },
    },
    'security-text (保密文本)': {
        'security-text': {
            title: 'security-text (保密文本)',

        },
    },
    'refresh-infinite-control (上拉刷新,下拉加载)': {
        'refresh-infinite-scrollview': {
            title: 'refresh-infinite-scrollview (上拉刷新,下拉加载)',

        },
    },
    'timer-enhance (es6 timer mixin)': {
        'timer-enhance': {
            title: 'timer-enhance(es6 timer mixin)',

        },
    },
    'pull-to-refresh (下拉刷新+上拉加载)': {
        'scrollview': {
            title: 'scrollview (下拉刷新+上拉加载更多)',

        },
        'listview': {
            title: 'listview (下拉刷新+上拉加载更多)',

        },
        'scrollview-auto-load': {
            title: 'scrollview-auto-load (下拉刷新+自动加载更多)',

        },
        'listview-auto-load': {
            title: 'listview-auto-load (下拉刷新+自动加载更多)',

        },
        'scrollview-infinite': {
            title: 'scrollview-infinite (下拉刷新+上拉加载+无限)',

        },
        'listview-auto-load-infinite': {
            title: 'listview-auto-load-infinite (下拉刷新+自动加载更多+无限)',

        },
        'listview-infinite': {
            title: 'listview-infinite (下拉刷新+加载更多+无限)',

        },
    },

    'toast (帮助信息提示)': {
        'toast': {
            title: 'toast (帮助信息提示)',

        }
    },
    'loaing-spinner-overlay (加载信息提示)': {
        'loaing-spinner-overlay': {
            title: 'loaing-spinner-overlay (加载信息提示)',

        }
    },
    'barcode (扫码)': {
        'fullscreen': {
            title: 'fullscreen (全屏扫描)',

        },
    },
    'image-loader (图片懒加载)': {
        'listview-imageloader': {
            title: 'listview-imageloader (下拉刷新+加载更多+图片加载)',

        },
        'listview-imageloader-android': {
            title: 'listview-imageloader-android (下拉刷新+加载更多+图片加载)',

        },
    },
    'amap-location (高德定位)': {
        'amap-location-alone': {
            title: '单次定位(不依赖地图)',

        },
        'amap-location-serial': {
            title: '连续定位(不依赖地图)',

        },

    },
    'app-event-listener-enhance': {
        'app-event-listener-enhance': {
            title: 'app-event-listener-enhance',

        },
    },
    'amap (高德地图)': {
        //'amap-maptype': {
        //    title: '标准,卫星二种类型',
        //    component: AMapMapType,
        //},
        //'amap-showtraffic': {
        //    title: '显示路况',
        //    component: AMapShowTraffic,
        //},
        //'amap-interaction': {
        //    title: '与地图交互',
        //    component: AMapInterAction,
        //},
        'amap-alone': {
            title: '地图-单次定位',

        },
    },
    'jpush (极光推送)': {
        'jpush': {
            title: 'jpush',

        }
    },
    'image-test (图片测试)': {
        'image-cache': {
            title: 'image-cache (图片缓存)',

        },
        'image-cache-list': {
            title: 'image-cache-list (图片缓存列表)',

        },
    },
    'request (网络请求)': {
        'fetch': {
            title: 'fetch',

        }
    }
}

let dataSource = new ListView.DataSource({
    rowHasChanged: (r1, r2) => {
        return r1 !== r2
    },
    sectionHeaderHasChanged: (s1, s2) => {
        return s1 !== s2
    },
})

const contentPaddingLeft = 12

const styles = StyleSheet.create({
    container: {
        marginTop: 56,
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
        //height: 30,
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