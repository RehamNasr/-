
import React, { Component } from 'react';

import {
    StyleSheet,
    Text,
    View,
    Image,
    Dimensions,
    TouchableOpacity,
    ScrollView,
    ImageBackground,
    StatusBar,
    Modal,
    TextInput,
    AsyncStorage
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Fontisto from "react-native-vector-icons/Fontisto"
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import DateTimePicker from '@react-native-community/datetimepicker'
import moment from 'moment';
import * as constf from "../constant/constf"
import { createIconSetFromFontello } from 'react-native-vector-icons';
const { height, width } = Dimensions.get("window");
import SelectDropdown from 'react-native-select-dropdown'
const countries_1 = ["نجار", "ميكانيكي", "خراط", "مكوجي"]
const countries_2 = ["القاهره", "طنطا", "زفتي", "ميت غمر"]
export default class page2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            namejob: "",
            city: "",
            date: "",
            start_time: "",
            end_time: "",
            details: "",
            showdate: false,
            showtimestart: false,
            showtimeend: false,
            stampdate: "",
            stamptimestart: "",
            stamptimeend: "",
            contanier_job: this.props.navigation.getParam("contanier_job")

        }
    }
    componentDidMount() {
        let obj = this.props.navigation.getParam("obj")
        this.setState({
            namejob: obj.namejob,
            city: obj.city,
            date: obj.date,
            start_time: obj.start_time,
            end_time: obj.end_time,
            details: obj.details,
            viewdelete: false
        })
    }

    async setdata() {
        this.setState({
            namejob: this.state.namejob,
            city: this.state.city,
            date: this.state.date,
            start_time: this.state.start_time,
            end_time: this.state.end_time,
            details: this.state.details
        })
        let index = this.props.navigation.getParam("index")
        let arr = this.props.navigation.getParam("contanier_job")
        let newobj = {
            namejob: this.state.namejob,
            city: this.state.city,
            date: this.state.date,
            start_time: this.state.start_time,
            end_time: this.state.end_time,
            details: this.state.details
        }

        arr[index] = newobj
        await AsyncStorage.setItem("contanier_job", JSON.stringify(arr))
        this.props.navigation.goBack()
    }

    componentWillUnmount() {
        let ref = this.props.navigation.getParam("ref")
        ref()
    }

    render() {
        return (
            <>
                <StatusBar backgroundColor={constf.colorbutton}></StatusBar>

                <View style={styles.MainContainer}>
                    <ScrollView >

                        <View style={{
                            height: height * .1,
                            width: width,
                            flexDirection: "row",
                            alignSelf: "center"
                        }}>
                            <TouchableOpacity
                                style={{
                                    height: height * .1,
                                    width: width * .2,
                                    alignSelf: "flex-start",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    // backgroundColor: "#fff"
                                }}

                                onPress={() => {
                                    this.props.navigation.goBack()
                                }}>
                                <MaterialIcons name="arrow-forward" style={{ fontSize: 18 }} />
                            </TouchableOpacity>
                            <View style={{ height: height * .1, width: 200, alignItems: "center", justifyContent: "center" }}>
                                <Text style={{ fontFamily: constf.fontfamilytextheader }}>تعديل الوظيفة</Text>
                            </View>
                        </View>
                        <View
                            style={styles.view}>
                            <Text style={styles.styletext}>اسم الوظيفة  :    </Text>
                            <SelectDropdown
                                data={countries_1}
                                onSelect={(selectedItem, index) => {
                                    this.setState({ namejob: selectedItem })
                                }}
                                buttonTextAfterSelection={(selectedItem, index) => {
                                    return selectedItem
                                }}
                                rowTextForSelection={(item, index) => {
                                    return item
                                }}

                                defaultButtonText={this.state.namejob}
                                buttonStyle={styles.stylebox}
                                buttonTextStyle={{ fontSize: 14 }}
                                dropdownStyle={{ height: height * .2 }}
                                rowStyle={{
                                    borderWidth: 0,
                                    borderColor: "#fff",
                                    height: height * .05,
                                }}
                                rowTextStyle={{ fontSize: 14 }}
                            />
                        </View>
                        <View
                            style={styles.view}>
                            <Text style={styles.styletext}>المدينه          :   </Text>
                            <SelectDropdown
                                data={countries_2}
                                onSelect={(selectedItem, index) => {
                                    this.setState({ city: selectedItem })
                                }}
                                buttonTextAfterSelection={(selectedItem, index) => {
                                    return selectedItem
                                }}
                                rowTextForSelection={(item, index) => {
                                    return item
                                }}
                                defaultButtonText={this.state.city}
                                buttonStyle={styles.stylebox}
                                buttonTextStyle={{ fontSize: 14 }}
                                dropdownStyle={{ height: height * .2 }}
                                rowStyle={{
                                    borderWidth: 0,
                                    borderColor: "#fff",
                                    height: height * .05,
                                }}
                                rowTextStyle={{ fontSize: 14 }}
                            />
                        </View>
                        <View
                            style={styles.view}>
                            <Text style={styles.styletext}>التاريخ         :   </Text>
                            <View
                                style={styles.stylebox}>
                                <TouchableOpacity
                                    onPress={() => {
                                        this.setState({ showdate: true })
                                    }}
                                    style={{ flexDirection: "row", width: width * .45, justifyContent: "space-between" }}

                                >
                                    <Text style={{ marginHorizontal: width * .1 }}>{this.state.date}</Text>
                                    <Fontisto name="date"
                                        style={{ fontSize: 15, alignSelf: "flex-end" }}
                                    />
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View
                            style={styles.view}>
                            <Text style={styles.styletext}>بدايه العمل    :   </Text>
                            <View
                                style={styles.stylebox}>
                                <TouchableOpacity
                                    style={{ flexDirection: "row", width: width * .45, alignItems: "center", justifyContent: "space-between" }}
                                    onPress={() => {
                                        this.setState({ showtimestart: true })
                                    }}

                                >
                                    <Text style={{ marginHorizontal: width * .15 }}>{this.state.start_time}</Text>
                                    <Ionicons name="timer-outline"
                                        style={{ fontSize: 15, alignSelf: "flex-end" }}
                                    />
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View
                            style={styles.view}>
                            <Text style={styles.styletext}>نهايه العمل    :   </Text>
                            <View
                                style={styles.stylebox}>
                                <TouchableOpacity
                                    style={{ flexDirection: "row", width: width * .45, justifyContent: "space-between" }}
                                    onPress={() => {
                                        this.setState({ showtimeend: true })
                                    }}

                                >
                                    <Text style={{ marginHorizontal: width * .15 }}>{this.state.end_time}</Text>
                                    <Ionicons name="timer-outline"
                                        style={{ fontSize: 15, alignSelf: "flex-end" }}
                                    />
                                </TouchableOpacity></View>
                        </View>

                        <View
                            style={{
                                height: height * .2,
                                width: width * .85,
                                borderRadius: 10,
                                padding: 5,
                                marginVertical: 20,
                                flexDirection: "row",
                                alignSelf: "center"
                            }}>
                            <Text style={styles.styletext}>تفاصيل         :   </Text>

                            <TextInput
                                style={{
                                    height: height * .2,
                                    width: width * .6,
                                    borderWidth: 1,
                                    borderRadius: 10,
                                    borderColor: "#a48595",
                                    color: "#000",
                                }}
                                value={this.state.details}
                                onChangeText={(value) => {
                                    this.setState({ details: value })
                                }}
                                multiline={true}
                                textAlign="right"
                            >

                            </TextInput>

                        </View>

                        <TouchableOpacity
                            style={styles.stylebutton}
                            onPress={() => {
                                // this.setdata()
                                // this.setState({ visible: false })

                                this.setdata()

                            }}
                        >
                            <Text style={{ color: "#fff", fontSize: 15, fontFamily: constf.fontfamilytextheader }}>حفظ</Text>

                        </TouchableOpacity>




                        {
                            this.state.showdate ?
                                <DateTimePicker
                                    testID='dateTimePicker'
                                    value={this.state.stampdate ? this.state.stampdate : new Date()}
                                    mode={'date'}
                                    minimumDate={new Date()}
                                    is24Hour={false}
                                    display="default"
                                    onChange={(data, time) => {
                                        let dateFinal = data.nativeEvent.timestamp
                                        let date_format = moment(dateFinal).format('YYYY/MM/DD')
                                        this.setState({
                                            date: date_format,
                                            stampdate: dateFinal,
                                            showdate: false,
                                            dateinput: date_format
                                        })
                                    }}
                                >
                                </DateTimePicker>
                                : null
                        }
                        {
                            this.state.showtimestart ?
                                <DateTimePicker
                                    testID='dateTimePicker'
                                    value={this.state.stamptimestart ? this.state.stamptimestart : new Date()}
                                    mode={'time'}
                                    minimumDate={new Date()}
                                    is24Hour={false}
                                    display="default"
                                    onChange={(data, time) => {
                                        let dateFinal = data.nativeEvent.timestamp
                                        let time_format = moment(dateFinal).format('hh:mm')
                                        this.setState({
                                            start_time: time_format,
                                            stamptimestart: dateFinal,
                                            showtimestart: false,
                                            start_timeinput: time_format
                                        })
                                    }}
                                >
                                </DateTimePicker>
                                : null
                        }
                        {
                            this.state.showtimeend ?
                                <DateTimePicker
                                    testID='dateTimePicker'
                                    value={this.state.stamptimeend ? this.state.stamptimeend : new Date()}
                                    mode={'time'}
                                    minimumDate={new Date()}
                                    is24Hour={false}
                                    display="default"
                                    onChange={(data, time) => {
                                        let dateFinal = data.nativeEvent.timestamp
                                        let time_format = moment(dateFinal).format('hh:mm')
                                        this.setState({
                                            end_time: time_format,
                                            stamptimeend: dateFinal,
                                            showtimeend: false,
                                            end_timeinput: time_format
                                        })
                                    }}
                                >
                                </DateTimePicker>
                                : null
                        }


                    </ScrollView>
                </View>


            </>
        )
    }
}

const styles = StyleSheet.create({
    MainContainer: {
        // justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f8f8f8',
        height: height,
        width: width,
        alignSelf: "center",
    },
    view: {
        height: height * .07,
        width: width * .85,
        alignItems: "center",
        flexDirection: "row",
        borderRadius: 10,
        padding: 5,
        marginVertical: 20,
        alignSelf: "center"
    },
    stylebox: {
        height: height * .06,
        width: width * .5,
        flexDirection: "row",
        borderWidth: 1
        , alignItems: "center",
        flexDirection: "row",
        borderWidth: 1,
        borderRadius: 10,
        borderColor: "#a48595",
        padding: 5,
        marginHorizontal: 20,
        alignSelf: "center"
    },
    stylebutton: {
        height: height * .06,
        width: width * .3,
        backgroundColor: constf.colorbutton,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        marginVertical: 20,
        alignSelf: "center"
    },
    styletext: {
        fontFamily: "Gulzar-Regular"
    },
    textinputstyle: {
        color: "#000",
        width: width * .5,
        marginTop: 4,
        height: height * .06
    }
});
