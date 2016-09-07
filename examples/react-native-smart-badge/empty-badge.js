/**
 * @fileOverview
 * @author HISAME SHIZUMARU
 * @version
 * Created on 16/7/18.
 */

import React, {
    Component,
} from 'react'
import {
    StyleSheet,
    View,
    Text,
} from 'react-native'

import Badge from 'react-native-smart-badge'

export default class EmptyBadge extends Component {

    render () {
        return (
            <View style={{marginTop: 20 + 44, flex: 1, justifyContent: 'center', alignItems: 'center', }}>
                <Badge
                    style={{marginTop: 10, borderRadius: 3, width: 6, height: 6, backgroundColor: 'red', }}>
                </Badge>
                <Badge
                    style={{marginTop: 10, borderRadius: 5, width: 10, height: 10, backgroundColor: 'red', }}>
                </Badge>
                <Badge
                    style={{marginTop: 10, borderRadius: 8, width: 16, height: 16, backgroundColor: 'red', }}>
                </Badge>
            </View>
        )
    }

}