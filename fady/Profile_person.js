
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
const countries_1 = ["1", "2", "3", "4", "5"]
export default class page2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nameperson: "ابراهيم اشرف",
            phone: "01280705434",
            city: "القاهره",
            job: "نجار",
            photo_uri: "https://assets.bizjournals.com/static/img/potm/marketing/team-success-img.jpg",
            type: true,
            shows: false

        }
    }

    render() {
        return (
            <>
                <StatusBar backgroundColor={constf.colorbutton}></StatusBar>

                <View style={styles.MainContainer}>
                    <ScrollView >
                        <View style={{ height: height * .1, width: width, flexDirection: "row", alignSelf: "center" }}>
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
                                <Text style={{ fontFamily: constf.fontfamilytextheader }}>الحساب </Text>
                            </View>
                        </View>
                        <Image style={{ height: height * .15, width: width * .3, borderRadius: 200, alignSelf: "center" }}
                            source={{ uri: this.state.photo_uri }}
                        />
                        <View style={{ height: height * .25, width: width, padding: 20, alignSelf: "center" }}>
                            <Text style={{ fontFamily: constf.fontfamilytextheader, fontSize: 13 }}>اسم العامل  :      {this.state.nameperson}</Text>
                            <Text style={{ fontFamily: constf.fontfamilytextheader, fontSize: 13 }}>رقم الهاتف  :      {this.state.phone}</Text>
                            <Text style={{ fontFamily: constf.fontfamilytextheader, fontSize: 13 }}>الوظيفه :  {this.state.job}</Text>
                            <Text style={{ fontFamily: constf.fontfamilytextheader, fontSize: 13 }}>المدينه     :       {this.state.city}</Text>
                        </View>
                        {/* <View style={{ height: height * .06, width: width * .8, alignSelf: "center" }}>
                            <Text style={{ fontFamily: constf.fontfamilytextheader ,fontSize:12}}>أراء الاشخاص </Text>
                        </View> */}
                        {/* <View
                            style={{ height: height * .2, width: width * .8, padding: 10, borderRadius: 5, alignSelf: "center" }}
                        >
                            <View style={{ flex: 2, flexDirection: "row" }}>
                                <Image style={{ height: height * .045, width: width * .12 }}
                                    source={require("../imagef/logor-removebg-preview.png")}
                                />
                                <View style={{ height: height * .04, width: width * .15, alignItems: "center", marginTop: -height * .009 }}>
                                    <Text style={{ fontFamily: constf.fontfamilytextheader }}>ريهام جمال</Text>
                                </View>
                            </View>
                            <View style={{ flex: 1, flexDirection: "row", padding: 5 }}>
                                <View style={{ height: height * .02, width: width * .2, flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
                                    <Ionicons name='md-star-sharp' style={{ color: "#ffd403" }}></Ionicons>
                                    <Ionicons name='md-star-sharp' style={{ color: "#ffd403" }}></Ionicons>
                                    <Ionicons name='md-star-sharp' style={{ color: "#ffd403" }}></Ionicons>
                                    <Ionicons name='md-star-half-sharp' style={{ color: "#ffd403" }}></Ionicons>
                                    <Ionicons name='md-star-outline' style={{ color: "#ffd403" }}></Ionicons>
                                </View>
                                <View style={{ height: height * .02, width: width * .2, alignItems: "center", justifyContent: "center" }}>
                                    <Text style={{ fontSize: 12 }}>22/7/2020</Text>
                                </View>
                            </View>
                            <View style={{ flex: 2, marginLeft: 20 }}>
                                <Text style={{ fontSize: 12, width: width * .8 }} >شخص محترم جدا و شغله ممتاز</Text>
                            </View>
                        </View> */}
                        <View style={{ height: height * .06, width: width * .8, alignSelf: "center" }}>
                            <Text style={{ fontFamily: constf.fontfamilytextheader, fontSize: 14, textDecorationLine: "underline", color: constf.color_2 }}>اضافه رأيك</Text>
                        </View>
                        <View style={{
                            height: height * .1,
                            width: width * .8,
                            alignSelf: "center",
                            marginBottom: 50,
                            // borderWidth: .1,
                            borderRadius: 5,
                            alignItems: "center",
                            justifyContent: "center",
                        }}>
                            {/* <TextInput
                                placeholder='اكتب رأيك'
                                placeholderTextColor={"#ccc"}
                                color={"#000"}
                                style={{
                                    height: height * .09,
                                    width: width * .8,
                                    fontSize:12

                                }}
                            ></TextInput> */}
                            <View style={{
                                height: height * .1,
                                width: width * .9,
                                flexDirection: "row",
                                alignSelf: "center",
                                alignItems: "center",
                                justifyContent: "center",
                                // marginBottom: 20
                            }}>
                                <Text style={{ color: "#000", fontSize: 12 }} >     عدد النجوم</Text>
                                <SelectDropdown
                                    data={countries_1}
                                    onSelect={(selectedItem, index) => {
                                        this.setState({ numb_sta: selectedItem })
                                    }}
                                    buttonTextAfterSelection={(selectedItem, index) => {
                                        return selectedItem
                                    }}
                                    rowTextForSelection={(item, index) => {
                                        return item
                                    }}
                                    defaultButtonText="1"
                                    buttonStyle={styles.stylebox}
                                    buttonTextStyle={{ fontSize: 14 }}
                                    dropdownStyle={{ height: height * .2 }}
                                    rowStyle={{
                                        borderColor: "#fff",
                                        height: height * .05,
                                    }}
                                    rowTextStyle={{ fontSize: 14 }}
                                />
                                <TouchableOpacity
                                    style={{
                                        height: height * .05,
                                        width: width * .25,
                                        backgroundColor: constf.color_2,
                                        alignItems: "center",
                                        justifyContent: "center",
                                        borderRadius: 10
                                    }}
                                >
                                    <Text style={{ color: "#fff", fontSize: 12 }}>اضافه التعليق</Text>
                                </TouchableOpacity>
                            </View>
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
        width: width,
        marginBottom: height * .2

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
        height: height * .04,
        width: width * .13,
        flexDirection: "row"
        , alignItems: "center",
        flexDirection: "row",
        borderRadius: 10,
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
