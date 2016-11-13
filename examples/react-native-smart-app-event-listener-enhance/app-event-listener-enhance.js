import React, {
    Component,
} from 'react'

import AppEventListenerEnhance from 'react-native-smart-app-event-listener-enhance'

class AppEventListenerEnhanceDemo extends Component {

    componentDidMount() {
        //you can use like this
        //this.addAppEventListener(
        //    this.props.navigator.navigationContext.addListener('didfocus', this._didFocus)
        //).addAppEventListener(
        //    this.props.navigator.navigationContext.addListener('didfocus', this._didFocus)
        //)

        //or you can use like this
        //this.addAppEventListener(
        //    this.props.navigator.navigationContext.addListener('didfocus', this._didFocus),
        //    this.props.navigator.navigationContext.addListener('didfocus', this._didFocus)
        //)

        this.addAppEventListener(
            this.props.navigator.navigationContext.addListener('didfocus', this._didFocus)
        )
    }

    render() {
        return null
    }

    _didFocus = () => {
        console.log(`didfocus`)
    }
}

export default AppEventListenerEnhance(AppEventListenerEnhanceDemo)
