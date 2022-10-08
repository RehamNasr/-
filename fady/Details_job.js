
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
    AsyncStorage,
    Linking,
    Alert,
    ToastAndroid
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
export default class Details_job extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            namejob: "",
            city: "",
            date: "",
            start_time: "",
            end_time: "",
            details: "",
            active: false
        }
    }
    showToast() {
        ToastAndroid.show('تم التقديم بنجاح', ToastAndroid.SHORT);
      }
    componentDidMount = () => {
        let obj = this.props.navigation.getParam("obj")
        this.setState({
            namejob: obj.namejob,
            city: obj.city,
            date: obj.date,
            start_time: obj.start_time,
            end_time: obj.end_time,
            details: obj.details,
            viewdelete: false,
            active: false,
            color_2: "#4fc153",
            colortext: "#fff"
        })
    }
    render() {
        return (
            <>
                <StatusBar backgroundColor={constf.colorbutton}></StatusBar>

                <View style={{ flex: 1 }} >
                    <ScrollView>
                        <StatusBar backgroundColor={constf.colorbutton}></StatusBar>
                        <View style={styles.MainContainer}>
                            <View style={{ height: height * .1, width: width, flexDirection: "row" }}>
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
                                    <Text style={{ fontFamily: constf.fontfamilytextheader }}>الموظفين</Text>
                                </View>
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
                                        Linking.openURL('whatsapp://send?phone=${201010364069}')
                                    }}>
                                    <Image
                                        source={require("../imagef/whatsapp.png")}
                                        style={{
                                            height: height * .04,
                                            width: width * .08,
                                        }}
                                    />
                                </TouchableOpacity>
                            </View>
                            <View style={{ padding: 20 ,marginLeft:20,justifyContent:"space-around",height:450}}>
                                <Text style={{ fontFamily: constf.fontfamilytextheader, fontSize: 12, marginVertical: 5 }}>اسم الوظيفه      :{this.state.namejob} </Text>
                                <Text style={{ fontFamily: constf.fontfamilytextheader, fontSize: 12, marginVertical: 5 }}>المدينه          :{this.state.city}</Text>
                                <Text style={{ fontFamily: constf.fontfamilytextheader, fontSize: 12, marginVertical: 5 }}>التاريخ          : {this.state.date} </Text>
                                <Text style={{ fontFamily: constf.fontfamilytextheader, fontSize: 12, marginVertical: 5 }}>وقت بدايه العمل  : {this.state.start_time} </Text>
                                <Text style={{ fontFamily: constf.fontfamilytextheader, fontSize: 12, marginVertical: 5 }}>وقت نهايه العمل  : {this.state.end_time}</Text>
                                <Text style={{ fontFamily: constf.fontfamilytextheader, fontSize: 12, marginVertical: 5 }}>تفاصيل: {this.state.details}</Text>
                            </View>
                            <TouchableOpacity
                                style={{
                                    height: height * .05,
                                    width: width * .25,
                                    backgroundColor: this.state.color_2,
                                    alignItems: "center",
                                    justifyContent: "center",
                                    borderRadius: 5,
                                    alignSelf: "center",
                                    // marginTop: height * .1,

                                }}
                                // activeOpacity={true}
                                disabled={this.state.active}
                                onPress={() => {
                                    this.showToast()
                                    this.setState({ active: true, color_2: "#ccc", colortext: "#aaa" })
                                }}
                            >
                                <Text style={{ color: this.state.colortext, fontfamilytextheader: constf.fontfamilytextheader }}>التقديم</Text>
                            </TouchableOpacity>
                        </View>






                    </ScrollView>
                </View>


            </>
        )
    }
}

const styles = StyleSheet.create({
    MainContainer: {
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: '#f8f8f8',
        height: height,
        width: width,
        // padding: 20
    },
    view: {
        height: height * .07,
        width: width * .85,
        alignItems: "center",
        flexDirection: "row",
        borderRadius: 10,
        padding: 5,
        marginVertical: 20
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
        marginHorizontal: 20
    },
    stylebutton: {
        height: height * .06,
        width: width * .3,
        backgroundColor: "#a48595",
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 80
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
