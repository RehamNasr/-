
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
            contain1: [
                {
                    nameperson: "ريهام نصر",
                    phone: "0115255454",
                    city: "القاهره",
                    job: "مهندسه برمجه",
                    photo_uri: "https://assets.bizjournals.com/static/img/potm/marketing/team-success-img.jpg",
                    type: false,
                    shows: false
                },
                {
                    nameperson: "ابراهيم اشرف",
                    phone: "01280705434",
                    city: "القاهره",
                    job: "نجار",
                    photo_uri: "https://media.istockphoto.com/photos/laughter-man-picture-id649754038?b=1&k=20&m=649754038&s=170667a&w=0&h=_gERC77iWbCjZvcvLsRM6NHc_ppzrkVrTWzc4unOx48=",
                    type: false,
                    shows: false
                },
                {
                    nameperson: "ابراهيم اشرف",
                    phone: "01280705434",
                    city: "القاهره",
                    job: "نجار",
                    photo_uri: "https://media.istockphoto.com/photos/laughter-man-picture-id649754038?b=1&k=20&m=649754038&s=170667a&w=0&h=_gERC77iWbCjZvcvLsRM6NHc_ppzrkVrTWzc4unOx48=",
                    type: true,
                    shows: false
                }
            ]
        }
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
                                <View style={{ height: height * .1, width: width * .6, alignItems: "center", justifyContent: "center" }}>
                                    <Text style={{ fontFamily: constf.fontfamilytextheader }}>المقدمين علي الوظائف</Text>
                                </View>

                            </View>
                            {this.state.contain1.map((item, index) => (
                                item.type ?
                                <TouchableOpacity
                                style={{
                                    height: height * .22,
                                    width: width * .9,
                                    borderRadius: 5,
                                    // elevation: 1,
                                    // shadowColor: "#a48595",
                                    shadowOpacity: .01,
                                    padding: 10,
                                    flexDirection: "row",
                                    borderWidth: .1,
                                    marginVertical: 5
                                }}
                                onPress={() => {
                                    this.props.navigation.navigate("Profile_person")

                                }}
                            >
                                <View style={{ flex: 2 }}>
                                    <Text style={{ fontFamily: constf.fontfamilytextheader, fontSize: 12 }}>اسم العامل  :  {item.nameperson}</Text>
                                    <Text style={{ fontFamily: constf.fontfamilytextheader, fontSize: 12 }}>رقم الهاتف  :  {item.phone}</Text>
                                    <Text style={{ fontFamily: constf.fontfamilytextheader, fontSize: 12 }}>المدينه     :  {item.city}</Text>
                                    <Text style={{ fontFamily: constf.fontfamilytextheader, fontSize: 12 }}>الوظيفه :  {item.job}</Text>
                                </View>
                                <View style={{ flex: 1.3, alignItems: "center", justifyContent: "center" }}>
                                    <Image style={{ height: height * .09, width: width * .18, borderRadius:200 }}
                                        source={{ uri: item.photo_uri }}
                                    />
                                    {/* <View style={{ height: height * .03, width: width * .2, flexDirection: "row", alignItems: "center" }}>
                                        <Ionicons name='md-star-sharp' style={{ color: "#ffd403" }}></Ionicons>
                                        <Ionicons name='md-star-sharp' style={{ color: "#ffd403" }}></Ionicons>
                                        <Ionicons name='md-star-sharp' style={{ color: "#ffd403" }}></Ionicons>
                                        <Ionicons name='md-star-half-sharp' style={{ color: "#ffd403" }}></Ionicons>
                                        <Ionicons name='md-star-outline' style={{ color: "#ffd403" }}></Ionicons>
                                    </View> */}
                                    <TouchableOpacity
                                        style={{
                                            height: height * .045,
                                            width: width * .23,
                                            backgroundColor: constf.colorbutton,
                                            borderRadius: 5,
                                            alignItems: "center",
                                            justifyContent: "center",
                                            marginVertical: height * .02
                                        }}>
                                        <Text
                                            style=
                                            {{
                                                fontFamily: constf.fontfamilytextheader,
                                                fontSize: 12, color: constf.colortext
                                            }}
                                        >تم قبول الموظف </Text>

                                    </TouchableOpacity>
                                </View>
                            </TouchableOpacity>
                                    : null
                            ))
                            }
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
        alignItems: 'center',
        backgroundColor: '#f8f8f8',
        height: height,
        width: width
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
