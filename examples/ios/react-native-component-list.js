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
} from 'react-native'

import AllButton from '../react-native-smart-button/all-buttons'
import BasicButton from '../react-native-smart-button/basic-button'
import IconButton from '../react-native-smart-button/icon-button'
import BadgeButton from '../react-native-smart-button/badge-button'
import LoadingButton from '../react-native-smart-button/loading-button'
import ThreeColumns from '../react-native-smart-sudoku-grid/three-columns'
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
import Toast from '../react-native-smart-toast/toast-text'
import LoadingSpinnerOverLay from '../react-native-smart-loading-spinner-overlay/loading-spinner-overlay'

const contentPaddingLeft = 12

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'stretch',
        backgroundColor: 'white',
    },
    header: {
        paddingTop: 20,
        height: 20 + 44,
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
    },
    'toast': {
        'toast': {
            title: 'toast',
            component: Toast,
        }
    },
    'loaing-spinner-overlay (加载信息提示)': {
        'loaing-spinner-overlay': {
            title: 'loaing-spinner-overlay (加载信息提示)',
            component: LoadingSpinnerOverLay,
        }
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

export default class ReactNativeComponentList extends Component {

    // 构造
    constructor (props, context) {
        super(props);
        // 初始状态
        this.state = {
            componentDataSource: dataSource.cloneWithRowsAndSections(componentData)
        };
    }

    render () {
        return (
            <View style={styles.container}>
                <StatusBar barStyle={'light-content'} backgroundColor={'white'}/>
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
        this.props.navigator.push({
            title: rowData.title,
            component: rowData.component,
        })
    }

}




