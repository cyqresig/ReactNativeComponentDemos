import React from 'react';
import {
    Text,
    TouchableHighlight,
    ScrollView,
    View,
} from 'react-native';
import TimerMixin from 'react-timer-mixin';
import ScrollableTabView, { ScrollableTabBar, } from 'react-native-scrollable-tab-view';
import PullToRefreshListViewDemo2 from './react-native-smart-pull-to-refresh-listview-demo2'

const Child = React.createClass({
    onEnter() {
        console.log('enter: ' + this.props.i); // eslint-disable-line no-console
    },

    onLeave() {
        console.log('leave: ' + this.props.i); // eslint-disable-line no-console
    },

    render() {
        const i = this.props.i;
        return <PullToRefreshListViewDemo2/>;
    },
});

const ScrollableTabViewDemo = React.createClass({
    mixins: [TimerMixin, ],
    children: [],

    getInitialState() {
        return {
            tabs: [1, 2],
            enabled: true,
        };
    },

    componentDidMount() {
        this.setTimeout(
            () => { this.setState({ tabs: [1, 2, 3, 4, 5, 6, ], }); },
            100
        );
    },

    handleChangeTab({i, ref, from, }) {
        this.children[i].onEnter();
        this.children[from].onLeave();
    },

    renderTab(name, page, isTabActive, onPressHandler, onLayoutHandler) {
        return <TouchableHighlight
            key={`${name}_${page}`}
            onPress={() => onPressHandler(page)}
            onLayout={onLayoutHandler}
            style={{flex: 1, width: 100, }}
            underlayColor="#aaaaaa"
        >
            <Text>{name}</Text>
        </TouchableHighlight>;
    },

    render() {
        return <ScrollableTabView
            style={{marginTop: 64, }}
            renderTabBar={() => <ScrollableTabBar renderTab={this.renderTab}/>}
            onChangeTab={this.handleChangeTab}
            locked={!this.state.enabled}
        >
            {this.state.tabs.map((tab, i) => {
                return <Child
                    ref={(ref) => (this.children[i] = ref)}
                    tabLabel={`tab${i}`}
                    i={i}
                    key={i}
                />;
            })}
        </ScrollableTabView>;
    },

});

export default ScrollableTabViewDemo
