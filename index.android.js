/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Navigator,
    Text,
    TouchableOpacity,
    NativeModules,
} from 'react-native';

import ReactNativeComponentList from './examples/android/react-native-component-list'

//import SplashScreen from 'react-native-smart-splash-screen'


class ReactNativeComponentDemos extends Component {

  // 构造
  constructor(props, context) {
    super(props);
  }

  componentDidMount () {
    //SplashScreen.close('scale', 1000, 500)
  }

  render() {
    return (
        <Navigator style={styles.container}
                   initialRoute={{
                      component: ReactNativeComponentList,
                      title: 'React Native Component'
                    }}
                   sceneStyle={styles.navigatorBg}
                   renderScene={(route, navigator) => {
                        let Component = route.component;
                        return (
                          <Component
                            navigator={navigator}
                            {...route.passProps}
                          />
                        )
                     }}
                   navigationBar={
                      <Navigator.NavigationBar
                        ref={(navigationBar) => {
                          this.navigationBar = navigationBar
                        }}
                        routeMapper={NavigationBarRouteMapper}
                        style={styles.navBar}
                      />
                    }
        />
    );
  }
}

let NavigationBarRouteMapper = {

  //LeftButton: function(route, navigator, index, navState) {
  //  if (index === 0) {
  //    return null;
  //  }
  //
  //  var previousRoute = navState.routeStack[index - 1];
  //  return (
  //      <TouchableOpacity
  //          onPress={() => navigator.pop()}
  //          style={styles.navBarLeftButton}>
  //        <Text style={[styles.navBarText, styles.navBarButtonText]}>
  //          返回
  //        </Text>
  //      </TouchableOpacity>
  //  );
  //},

  RightButton: function(route, navigator, index, navState) {
    return null
  },

  Title: function(route, navigator, index, navState) {
    return (
        <Text style={[styles.navBarText, styles.navBarTitleText]}>
          {route.title}
        </Text>
    )
  },

};

const styles = StyleSheet.create({
  navigatorBg: {
    backgroundColor: '#F4F4F4',
  },
  navBar: {
    backgroundColor: 'black',
  },
  navBarText: {
    fontSize: 16,
    margin: 10,
    color: 'white',
  },
  navBarTitleText: {
    color: 'white',
    fontWeight: '500',
    marginVertical: 9,
  },
})

AppRegistry.registerComponent('ReactNativeComponentDemos', () => ReactNativeComponentDemos);
