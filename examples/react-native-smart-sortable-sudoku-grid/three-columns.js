/**
 * @fileOverview
 * @author HISAME SHIZUMARU
 * @version
 * Created on 16/12/12.
 */

import React, {
    Component,
} from 'react'
import {
    ScrollView,
    StyleSheet,
    View,
    Image,
    Text,
    TouchableOpacity,
    TouchableWithoutFeedback,
    Alert,
    Animated,
} from 'react-native'

import SortableSudokuGrid from 'react-native-smart-sortable-sudoku-grid'

import image_cash from '../images/cash.png'
import image_credit from '../images/credit.png'
import image_transfer from '../images/transfer.png'
import image_loan from '../images/loan.png'
import image_charge from '../images/charge.png'
import image_payment from '../images/payment.png'
import image_shopping from '../images/shopping.png'
import image_service from '../images/service.png'
import image_donate from '../images/donate.png'

import image_add from '../images/add.png'
import image_remove from '../images/remove.png'
import image_locked from '../images/locked.png'

const dataList = [
    {
        icon: image_cash,
        title: 'cash',
    },
    {
        icon: image_credit,
        title: 'credit',
    },
    {
        icon: image_transfer,
        title: 'transfer',
    },
    {
        icon: image_loan,
        title: 'loan',
    },
    {
        icon: image_charge,
        title: 'charge',
    },
    {
        icon: image_payment,
        title: 'payment',
    },
    {
        icon: image_shopping,
        title: 'shopping',
    },
    {
        icon: image_service,
        title: 'service',
    },
    {
        icon: image_donate,
        title: 'donate',
    },
]

const columnCount = 3

export default class ThreeColumns extends Component {

    constructor (props) {
        super(props)
        this.state = {
            dataSource: [ ...dataList ],
            candidates: [],
            sortable: false,
            scrollEnabled: true,
            disabled: false,
            managementButtonText: 'Manage',
            opacity: new Animated.Value(0),
        }
        this._sortableSudokuGrid = null
    }

    render () {
        return (
            <ScrollView
                scrollEnabled={this.state.scrollEnabled}
                style={{marginTop: 44 + 20, }}>
                <View
                    style={{height: 50, paddingHorizontal: 10, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', }}>
                    <View style={{flex: 1, justifyContent: 'center',}}>
                        <Text>My Applications: </Text>
                    </View>
                    <TouchableOpacity
                        onPress={this._onPressManagementButton}>
                        <View style={{flex: 1, justifyContent: 'center',}}>
                            <Text>{this.state.managementButtonText}</Text>
                        </View>
                    </TouchableOpacity>

                </View>
                <SortableSudokuGrid
                    ref={ component => this._sortableSudokuGrid = component }
                    containerStyle={{ backgroundColor: '#fff',}}
                    columnCount={columnCount}
                    dataSource={this.state.dataSource}
                    renderCell={this._renderGridCell}
                    sortable={this.state.sortable}
                />
                <View
                    style={{height: 50, paddingHorizontal: 10, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', }}>
                    <View style={{flex: 1, justifyContent: 'center',}}>
                        <Text>Candidates: </Text>
                    </View>
                </View>
                <SortableSudokuGrid
                    ref={ component => this._candidatesSudokuGrid = component }
                    containerStyle={{ backgroundColor: '#fff',}}
                    columnCount={columnCount}
                    dataSource={this.state.candidates}
                    renderCell={this._renderCandidateCell}
                    sortable={false}
                />
            </ScrollView>
        )
    }

    _renderGridCell = (data, component) => {
        //console.log(`rerender!!! _renderGridCell`)
        return (
            <TouchableOpacity
                disabled={this.state.disabled}
                style={{flex: 1, padding: 6, position: 'relative', }}
                onPress={ this._onPressCell.bind(this, data) }>
                <View style={{ overflow: 'hidden', backgroundColor: '#fff',
                          justifyContent: 'center', alignItems: 'center', flex: 1,
                          borderWidth: StyleSheet.hairlineWidth, borderColor: '#eee', }}>
                    <Image source={data.icon} style={{width: 30, height: 30, marginHorizontal: 10, marginBottom: 10,}}/>
                    <Text>{data.title}</Text>
                </View>
                <TouchableOpacity
                    disabled={!this.state.disabled}
                    style={{position: 'absolute', right: 8, top: 8, width: 30, height: 30, }}
                    onPress={this._onRemoveCellButtonPress.bind(this, component)}>
                    <Animated.View
                        style={{flex: 1, opacity: this.state.opacity, justifyContent: 'center', alignItems: 'center', }}>
                        <View
                            style={{ borderRadius: 10, borderWidth: StyleSheet.hairlineWidth, borderColor: '#FF7F7F', width: 22, height: 22, justifyContent: 'center', alignItems: 'center', overflow: 'hidden', }}>
                            <Image source={image_remove} style={{width: 20, height: 20, }}/>
                        </View>
                    </Animated.View>
                </TouchableOpacity>
            </TouchableOpacity>
        )
    }

    _renderCandidateCell = (data, component) => {
        //console.log(`rerender!!! _renderCandidates`)
        return (
            <TouchableOpacity
                disabled={this.state.disabled}
                style={{flex: 1, padding: 6, position: 'relative', }}
                onPress={ this._onPressCandidateCell.bind(this, data) }>
                <View style={{ overflow: 'hidden', backgroundColor: '#fff',
                          justifyContent: 'center', alignItems: 'center', flex: 1,
                          borderWidth: StyleSheet.hairlineWidth, borderColor: '#eee', }}>
                    <Image source={data.icon} style={{width: 30, height: 30, marginHorizontal: 10, marginBottom: 10,}}/>
                    <Text>{data.title}</Text>
                </View>
                <TouchableOpacity
                    disabled={!this.state.disabled}
                    style={{position: 'absolute', right: 8, top: 8, width: 30, height: 30, }}
                    onPress={this._onRemoveCandidatesCellButtonPress.bind(this, component)}>
                    <Animated.View
                        style={{flex: 1, opacity: this.state.opacity, justifyContent: 'center', alignItems: 'center', }}>
                        <View
                            style={{ borderRadius: 10, borderWidth: StyleSheet.hairlineWidth, borderColor: '#5CC46C', width: 22, height: 22, justifyContent: 'center', alignItems: 'center', overflow: 'hidden', }}>
                            <Image source={image_add} style={{width: 20, height: 20, }}/>
                        </View>
                    </Animated.View>
                </TouchableOpacity>
            </TouchableOpacity>
        )
    }

    _onPressCell = (data) => {
        Alert.alert('clicked grid cell -> ' + data.title)
    }

    _onPressCandidateCell = (data) => {
        Alert.alert('clicked candidate cell -> ' + data.title)
    }

    _onPressManagementButton = () => {
        let scrollEnabled = !this.state.scrollEnabled
        let disabled = !this.state.disabled
        let managementButtonText = this.state.managementButtonText == 'Manage' ? 'Complete' : 'Manage'
        let sortable = !this.state.sortable
        let opacity = sortable ? new Animated.Value(1) : new Animated.Value(0)
        this.setState({
            scrollEnabled,
            managementButtonText,
            disabled,
            sortable,
            opacity,
        })
        if (!sortable) {
            let sortedDataSource = this._sortableSudokuGrid.getSortedDataSource()
            console.log(`_onPressManagementButton get sorted/added/removed DataSource`)
            console.log(sortedDataSource)
            let candidateDataSource = this._candidatesSudokuGrid.getSortedDataSource()
            console.log(`_onPressManagementButton get sorted/added/removed candidateDataSource`)
            console.log(candidateDataSource)
        }
    }

    _onRemoveCellButtonPress = (component) => {
        let cellIndex = this._sortableSudokuGrid._cells.findIndex((cell) => {
            return cell.component === component
        })
        //console.log(`_onRemoveCellButtonPress cellIndex = ${cellIndex}`)

        this._sortableSudokuGrid.removeCell({
            cellIndex,
            callback: (removedDataList) => {
                //let sortedDataSource = this._sortableSudokuGrid.getSortedDataSource()
                //console.log(`_onRemoveCellButtonPress get sortedDataSource`)
                //console.log(sortedDataSource)
                if(removedDataList.length > 0) {
                    let data = removedDataList[0]
                    this._candidatesSudokuGrid.addCell({
                        data,
                    })
                }
            }
        })
    }

    _onRemoveCandidatesCellButtonPress = (component) => {
        let cellIndex = this._candidatesSudokuGrid._cells.findIndex((cell) => {
            return cell.component === component
        })
        //console.log(`_onRemoveCandidatesCellButtonPress cellIndex = ${cellIndex}`)

        this._candidatesSudokuGrid.removeCell({
            cellIndex,
            callback: (removedDataList) => {
                //let sortedDataSource = this._candidatesSudokuGrid.getSortedDataSource()
                //console.log(`_onRemoveCandidatesCellButtonPress get sortedDataSource`)
                //console.log(sortedDataSource)
                if(removedDataList.length > 0) {
                    let data = removedDataList[0]
                    this._sortableSudokuGrid.addCell({
                        data,
                    })
                }
            }
        })
    }

}