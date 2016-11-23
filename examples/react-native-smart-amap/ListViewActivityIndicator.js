/**
 * @fileOverview
 * @author HISAME SHIZUMARU
 * @version
 * Created on 16/11/21.
 */

import React, {
    PropTypes,
    Component,
} from 'react'
import {
    ActivityIndicator,
    ProgressBarAndroid,
    ActivityIndicatorIOS,
    Platform,
    View,
} from 'react-native'

export default class ListViewActivityIndicator extends Component {

    static defaultProps = {
        color: '#ccc',
        size: 'small',
    }

    static propTypes = {
        ...View.PropTypes,
        color: PropTypes.string,
        size: PropTypes.oneOf(['small', 'large']),
    }

    constructor(props) {
        super(props)
        this.state = {
            visible: true,
        }
    }

    render() {
        if(this.state.visible) {
            return ActivityIndicator ? (
                <ActivityIndicator
                    {...this.props}
                    animating={true} />
            ) : Platform.OS == 'android' ?
                (
                    <ProgressBarAndroid
                        {...this.props}
                        styleAttr={this.props.size}/>

                ) :  (
                <ActivityIndicatorIOS
                    {...this.props}
                    animating={true}/>
            )
        }
        else {
            return null
        }
    }

}