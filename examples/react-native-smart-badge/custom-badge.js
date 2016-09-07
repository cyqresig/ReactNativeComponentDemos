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

export default class CustomBadge extends Component {

    render () {
        return (
            <View style={{marginTop: 20 + 44, flex: 1, justifyContent: 'center', alignItems: 'center', }}>
                <Badge
                    minHeight={18}
                    style={{ marginTop: 10, backgroundColor: 'red', }}
                    textStyle={{ color: '#fff', fontSize: 8, }}>
                    ●●●
                </Badge>
                <Badge
                    style={{ marginTop: 10, backgroundColor: 'red', }}
                    textStyle={{ color: '#fff', fontSize: 12, }}>
                    99+
                </Badge>
            </View>
        )
    }

}