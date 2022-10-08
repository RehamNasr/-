


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
    AsyncStorage,
    TextInput,
    Modal
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { captureScreen } from "react-native-view-shot";
const { height, width } = Dimensions.get("window");
import Ionicons from 'react-native-vector-icons/Ionicons'
import Fontisto from 'react-native-vector-icons/Fontisto'
import * as constf from '../constant/constf'

export default class page1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            coloricon: "#76b74c",
            index: 0,
            containtop: [
                {
                    name: "الكل",
                    show: true
                }, {
                    name: "الوظائف",
                    show: false
                }, {
                    name: "المقدمين ",
                    show: false
                }, {
                    name: "المقبولين",
                    show: false
                }
            ],
            contain1: [
                {
                    nameperson: "ريهام نصر",
                    phone: "0115255454",
                    date: "22/12/2000",
                    start_time: "2:00",
                    end_time: "5:00",
                    type: false,
                    shows: false
                },
                {
                    nameperson: "ريهام نصر",
                    phone: "0115255454",
                    date: "22/12/2000",
                    start_time: "2:00",
                    end_time: "5:00",
                    type: true,
                    shows: false
                },
                {
                    nameperson: "ريهام نصر",
                    phone: "0115255454",
                    date: "22/12/2000",
                    start_time: "2:00",
                    end_time: "5:00",
                    type: false,
                    shows: false
                }
            ],
            contanier_job: [{
                namejob: "مهندس",
                city: "giza",
                date: "22/12/2000",
                start_time: "2:00",
                end_time: "5:00",
                details: ""
            }, {
                namejob: "دكتور",
                city: "giza",
                date: "22/12/2000",
                start_time: "2:00",
                end_time: "5:00",
                details: ""
            }
            ],
            modal1: false,
            modal2: false,
            modal3: false,
            searchkey: ""
        }
    }
    // getdata = async () => {
    //     let arr = await AsyncStorage.getItem("contanier")
    //     if (!arr) {
    //         arr = [
    //             {
    //                 nameimage: "  require('../imagef/engineer.png')",
    //                 jobname: "مهندس",
    //                 city: "  Giza",
    //                 date: "  12/7/2020",
    //                 start_time: "  2:00",
    //                 end_time: "  8:00",
    //             }
    //         ]
    //         this.setState({ contanier: arr })
    //     }
    //     else {
    //         arr = JSON.parse(arr)
    //         this.setState({ contanier: arr })
    //     }
    // }
    // componentDidMount() {
    //     this.getdata()
    // }
    move(index) {
        if (index == 0) {
            this.setState({ modal1: false, modal2: false, modal3: false })
        } else if (index == 1) {
            this.setState({ modal1: true, modal2: false, modal3: false })
        } else if (index == 2) {
            this.setState({ modal1: false, modal2: true, modal3: false })
        } else {
            this.setState({ modal1: false, modal2: false, modal3: true })
        }

    }
    search(searchkey) {
        // nameperson
        // namejob
        let list1 = this.state.contain1
        let list2 = this.state.contanier_job
        for (var i = 0; i < list1.length; i++) {
            if (list1[i].nameperson.includes(searchkey) && searchkey != "") {
                list1[i].shows = true
            } else {
                list1[i].shows = false
            }
        }
        for (var i = 0; i < list2.length; i++) {
            if (list2[i].namejob.includes(searchkey) && searchkey != "") {
                list2[i].shows = true
            } else {
                list2[i].shows = false
            }
        }
        this.setState({ contain1: list1, contanier_job: list2 })
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
                            alignItems: "center",
                            // justifyContent:"center",
                            backgroundColor: "#fff",
                        }}
                        >

                            <TouchableOpacity
                                style={{
                                    height: height * .1,
                                    width: width * .23,
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
                            <View style={{
                                height: height * .055,
                                width: width * .65,
                                alignItems: "center",
                                justifyContent: "center",
                                borderWidth: .5,
                                flexDirection: "row",
                                borderRadius: 10,

                                backgroundColor: "#fff"
                            }}>
                                <TextInput
                                    value={this.state.searchkey}
                                    onChangeText={(value) => {
                                        this.setState({ searchkey: value })
                                        this.search(value)
                                    }}
                                    style={{
                                        height: height * .05,
                                        width: width * .48,
                                        backgroundColor: "#fff",
                                        borderRadius: 10,
                                        color: "#000",
                                        fontSize: 13
                                    }}

                                >


                                </TextInput>

                                <TouchableOpacity
                                    style={{
                                        height: height * .05,
                                        width: width * .1,
                                        alignItems: "center",
                                        justifyContent: "center"
                                    }}
                                    onPress={() => {
                                        this.setState({ searchkey: "" })
                                        this.search("")
                                    }}
                                >
                                    <Ionicons name="close-outline"
                                        style={{ fontSize: 18, color: "#000" }}
                                    />

                                </TouchableOpacity>
                            </View>


                        </View>
                        <View
                            style={{
                                height: height * .1,
                                width: width,
                                alignItems: "center",
                                justifyContent: "center",
                                backgroundColor: "#fff",
                                flexDirection: "row",
                                padding: 10
                            }}
                        >
                            <ScrollView horizontal>
                                {
                                    this.state.containtop.map((item, index) => (
                                        <TouchableOpacity
                                            style={{
                                                height: height * .05,
                                                width: width * .22,
                                                backgroundColor: index == 0 ?constf.color_2 : "#fff",
                                                borderRadius: 10,
                                                alignItems: "center",
                                                justifyContent: "center",
                                                margin: 3,
                                                borderWidth: index == 0 ? 0 : .3
                                            }}
                                            onPress={() => {
                                                this.move(index)
                                            }}
                                        >
                                            <Text
                                                style=
                                                {{
                                                    fontFamily: constf.fontfamilytextheader,
                                                    color: index == 0 ? "#fff" : "#f00",
                                                    fontSize:12
                                                }}>
                                                {item.name}
                                            </Text>
                                        </TouchableOpacity>
                                    ))
                                }
                            </ScrollView>
                        </View>
                        <View style={{ height: height, width: width, padding: 20, flexDirection: "row", flexWrap: "wrap", backgroundColor: "#fff", marginBottom: 100 }}>

                            {
                                this.state.contanier_job.map((item, index) => (
                                    item.shows ?
                                        <TouchableOpacity
                                            style={{
                                                height: height * .23,
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
                                                this.props.navigation.navigate("Taptop")
                                            }}
                                        >
                                            <View style={{ flex: 1 }}>
                                                <Text style={{ fontFamily: constf.fontfamilytextheader, fontSize: 12 }}>اسم الوظيفه  :  {item.namejob}</Text>
                                                <Text style={{ fontFamily: constf.fontfamilytextheader, fontSize: 12 }}>التاريخ     :  {item.date}</Text>
                                                <Text style={{ fontFamily: constf.fontfamilytextheader, fontSize: 12 }}>وقت بدايه العمل :  {item.start_time}</Text>
                                                <Text style={{ fontFamily: constf.fontfamilytextheader, fontSize: 12 }}>وقت نهايه العمل :  {item.end_time}</Text>
                                            </View>

                                        </TouchableOpacity>
                                        : null
                                ))
                            }

                            {this.state.contain1.map((item, index) => (
                                !item.type && item.shows ?
                                    <TouchableOpacity
                                        style={{
                                            height: height * .28,
                                            width: width * .9,
                                            borderRadius: 5,
                                            // elevation: 1,
                                            // shadowColor: "#a48595",
                                            shadowOpacity: .01,
                                            padding: 10,
                                            flexDirection: "row",
                                            borderWidth: .1
                                        }}
                                        onPress={() => {
                                            // props.navigation.navigate("Profile_person")

                                        }}
                                    >
                                        <View style={{ flex: 2 }}>
                                            <Text style={{ fontFamily: constf.fontfamilytextheader, fontSize: 12 }}>اسم العامل  :  {item.nameperson}</Text>
                                            <Text style={{ fontFamily: constf.fontfamilytextheader, fontSize: 12 }}>رقم الهاتف  :  {item.phone}</Text>
                                            <Text style={{ fontFamily: constf.fontfamilytextheader, fontSize: 12 }}>التاريخ     :  {item.date}</Text>
                                            <Text style={{ fontFamily: constf.fontfamilytextheader, fontSize: 12 }}>وقت بدايه العمل :  {item.start_time}</Text>
                                            <Text style={{ fontFamily: constf.fontfamilytextheader, fontSize: 12 }}>وقت نهايه العمل :  {item.end_time}</Text>
                                        </View>
                                        <View style={{ flex: 1.3, alignItems: "center", justifyContent: "center" }}>
                                            <Image style={{ height: height * .1, width: width * .2, borderRadius: 25 }}
                                                source={require("../imagef/logor-removebg-preview.png")}
                                            />
                                            <View style={{ height: height * .03, width: width * .2, flexDirection: "row", alignItems: "center" }}>
                                                <Ionicons name='md-star-sharp' style={{ color: "#ffd403" }}></Ionicons>
                                                <Ionicons name='md-star-sharp' style={{ color: "#ffd403" }}></Ionicons>
                                                <Ionicons name='md-star-sharp' style={{ color: "#ffd403" }}></Ionicons>
                                                <Ionicons name='md-star-half-sharp' style={{ color: "#ffd403" }}></Ionicons>
                                                <Ionicons name='md-star-outline' style={{ color: "#ffd403" }}></Ionicons>
                                            </View>
                                            <TouchableOpacity
                                                style={{
                                                    height: height * .05,
                                                    width: width * .3,
                                                    backgroundColor: constf.colorbutton,
                                                    borderRadius: 5,
                                                    alignItems: "center",
                                                    justifyContent: "center",
                                                    marginVertical: height * .009
                                                }}>
                                                <Text
                                                    style=
                                                    {{
                                                        fontFamily: constf.fontfamilytextheader,
                                                        fontSize: 12, color: constf.colortext
                                                    }}
                                                >قبول الموظف</Text>

                                            </TouchableOpacity>
                                        </View>
                                    </TouchableOpacity>
                                    : null
                            ))
                            }

                            {this.state.contain1.map((item, index) => (
                                item.type && item.shows ?
                                    <TouchableOpacity
                                        style={{
                                            height: height * .28,
                                            width: width * .9,
                                            borderRadius: 5,
                                            // elevation: 1,
                                            // shadowColor: "#a48595",
                                            shadowOpacity: .01,
                                            padding: 10,
                                            flexDirection: "row",
                                            borderWidth: .1,
                                            marginTop: 5
                                        }}
                                        onPress={() => {
                                            // props.navigation.navigate("Profile_person")

                                        }}
                                    >
                                        <View style={{ flex: 2 }}>
                                            <Text style={{ fontFamily: constf.fontfamilytextheader, fontSize: 12 }}>اسم العامل  :  {item.nameperson}</Text>
                                            <Text style={{ fontFamily: constf.fontfamilytextheader, fontSize: 12 }}>رقم الهاتف  :  {item.phone}</Text>
                                            <Text style={{ fontFamily: constf.fontfamilytextheader, fontSize: 12 }}>التاريخ     :  {item.date}</Text>
                                            <Text style={{ fontFamily: constf.fontfamilytextheader, fontSize: 12 }}>وقت بدايه العمل :  {item.start_time}</Text>
                                            <Text style={{ fontFamily: constf.fontfamilytextheader, fontSize: 12 }}>وقت نهايه العمل :  {item.end_time}</Text>
                                        </View>
                                        <View style={{ flex: 1.3, alignItems: "center", justifyContent: "center" }}>
                                            <Image style={{ height: height * .1, width: width * .2, borderRadius: 25 }}
                                                source={require("../imagef/logor-removebg-preview.png")}
                                            />
                                            <View style={{ height: height * .03, width: width * .2, flexDirection: "row", alignItems: "center" }}>
                                                <Ionicons name='md-star-sharp' style={{ color: "#ffd403" }}></Ionicons>
                                                <Ionicons name='md-star-sharp' style={{ color: "#ffd403" }}></Ionicons>
                                                <Ionicons name='md-star-sharp' style={{ color: "#ffd403" }}></Ionicons>
                                                <Ionicons name='md-star-half-sharp' style={{ color: "#ffd403" }}></Ionicons>
                                                <Ionicons name='md-star-outline' style={{ color: "#ffd403" }}></Ionicons>
                                            </View>
                                            <TouchableOpacity
                                                style={{
                                                    height: height * .05,
                                                    width: width * .3,
                                                    backgroundColor: constf.colorbutton,
                                                    borderRadius: 5,
                                                    alignItems: "center",
                                                    justifyContent: "center",
                                                    marginVertical: height * .009
                                                }}>
                                                <Text
                                                    style=
                                                    {{
                                                        fontFamily: constf.fontfamilytextheader,
                                                        fontSize: 12, color: constf.colortext
                                                    }}
                                                >تم قبول الموظف</Text>

                                            </TouchableOpacity>
                                        </View>
                                    </TouchableOpacity>
                                    : null
                            ))
                            }

                        </View>

                        <Modal visible={this.state.modal1}>

                            <View style={{
                                height: height * .1,
                                width: width,
                                flexDirection: "row",
                                alignItems: "center",
                                // justifyContent:"center",
                                backgroundColor: "#fff",
                            }}
                            >

                                <TouchableOpacity
                                    style={{
                                        height: height * .1,
                                        width: width * .23,
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
                                <View style={{
                                    height: height * .055,
                                    width: width * .65,
                                    alignItems: "center",
                                    justifyContent: "center",
                                    borderWidth: .5,
                                    flexDirection: "row",
                                    borderRadius: 10,

                                    backgroundColor: "#fff"
                                }}>
                                    <TextInput
                                        style={{
                                            height: height * .05,
                                            width: width * .48,
                                            backgroundColor: "#fff",
                                            borderRadius: 10,
                                            color: "#000",
                                            fontSize: 13
                                        }}
                                        value={this.state.searchkey}
                                        onChangeText={(value) => {
                                            this.setState({ searchkey: value })
                                            this.search(value)
                                        }}
                                    >


                                    </TextInput>

                                    <TouchableOpacity
                                        style={{
                                            height: height * .05,
                                            width: width * .1,
                                            alignItems: "center",
                                            justifyContent: "center"
                                        }}
                                        onPress={() => {
                                            this.setState({ searchkey: "" })
                                            this.search("")
                                        }}
                                    >
                                        <Ionicons name="close-outline"
                                            style={{ fontSize: 18, color: "#000" }}
                                        />

                                    </TouchableOpacity>
                                </View>


                            </View>
                            <View
                                style={{
                                    height: height * .1,
                                    width: width,
                                    alignItems: "center",
                                    justifyContent: "center",
                                    backgroundColor: "#fff",
                                    flexDirection: "row",
                                    padding: 10
                                }}
                            >
                                <ScrollView horizontal>
                                    {
                                        this.state.containtop.map((item, index) => (
                                            <TouchableOpacity
                                                style={{
                                                    height: height * .05,
                                                    width: width * .22,
                                                    backgroundColor: index == 1 ? constf.color_2 : "#fff",
                                                    borderRadius: 10,
                                                    alignItems: "center",
                                                    justifyContent: "center",
                                                    margin: 3,
                                                    borderWidth: index == 1 ? 0 : .3
                                                }}
                                                onPress={() => {
                                                    this.move(index)
                                                }}
                                            >
                                                <Text
                                                    style=
                                                    {{
                                                        fontFamily: constf.fontfamilytextheader,
                                                        color: index == 1 ? "#fff" : "#f00",
                                                        fontSize:12
                                                    }}>
                                                    {item.name}
                                                </Text>
                                            </TouchableOpacity>
                                        ))
                                    }
                                </ScrollView>
                            </View>
                            <View style={{ height: height, width: width, padding: 20, flexDirection: "row", flexWrap: "wrap", backgroundColor: "#fff", marginBottom: 100 }}>

                                {
                                    this.state.contanier_job.map((item, index) => (
                                        item.shows ?
                                            <TouchableOpacity
                                                style={{
                                                    height: height * .23,
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
                                                    this.props.navigation.navigate("Taptop")
                                                }}
                                            >
                                                <View style={{ flex: 1 }}>
                                                    <Text style={{ fontFamily: constf.fontfamilytextheader, fontSize: 12 }}>اسم الوظيفه  :  {item.namejob}</Text>
                                                    <Text style={{ fontFamily: constf.fontfamilytextheader, fontSize: 12 }}>التاريخ     :  {item.date}</Text>
                                                    <Text style={{ fontFamily: constf.fontfamilytextheader, fontSize: 12 }}>وقت بدايه العمل :  {item.start_time}</Text>
                                                    <Text style={{ fontFamily: constf.fontfamilytextheader, fontSize: 12 }}>وقت نهايه العمل :  {item.end_time}</Text>
                                                </View>

                                            </TouchableOpacity> :
                                            null
                                    ))
                                }
                            </View>
                        </Modal>
                        <Modal visible={this.state.modal2}>

                            <View style={{
                                height: height * .1,
                                width: width,
                                flexDirection: "row",
                                alignItems: "center",
                                // justifyContent:"center",
                                backgroundColor: "#fff",
                            }}
                            >

                                <TouchableOpacity
                                    style={{
                                        height: height * .1,
                                        width: width * .23,
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
                                <View style={{
                                    height: height * .055,
                                    width: width * .65,
                                    alignItems: "center",
                                    justifyContent: "center",
                                    borderWidth: .5,
                                    flexDirection: "row",
                                    borderRadius: 10,

                                    backgroundColor: "#fff"
                                }}>
                                    <TextInput
                                        style={{
                                            height: height * .05,
                                            width: width * .48,
                                            backgroundColor: "#fff",
                                            borderRadius: 10,
                                            color: "#000",
                                            fontSize: 13
                                        }}
                                        value={this.state.searchkey}
                                        onChangeText={(value) => {
                                            this.setState({ searchkey: value })
                                            this.search(value)
                                        }}
                                    >


                                    </TextInput>

                                    <TouchableOpacity
                                        style={{
                                            height: height * .05,
                                            width: width * .1,
                                            alignItems: "center",
                                            justifyContent: "center"
                                        }}
                                        onPress={() => {
                                            this.setState({ searchkey: "" })
                                            this.search("")
                                        }}
                                    >
                                        <Ionicons name="close-outline"
                                            style={{ fontSize: 18, color: "#000" }}
                                        />

                                    </TouchableOpacity>
                                </View>


                            </View>
                            <View
                                style={{
                                    height: height * .1,
                                    width: width,
                                    alignItems: "center",
                                    justifyContent: "center",
                                    backgroundColor: "#fff",
                                    flexDirection: "row",
                                    padding: 10
                                }}
                            >
                                <ScrollView horizontal>
                                    {
                                        this.state.containtop.map((item, index) => (
                                            <TouchableOpacity
                                                style={{
                                                    height: height * .05,
                                                    width: width * .22,
                                                    backgroundColor: index == 2 ?constf.color_2 : "#fff",
                                                    borderRadius: 10,
                                                    alignItems: "center",
                                                    justifyContent: "center",
                                                    margin: 3,
                                                    borderWidth: index == 2 ? 0 : .3
                                                }}
                                                onPress={() => {
                                                    this.move(index)
                                                }}
                                            >
                                                <Text
                                                    style=
                                                    {{
                                                        fontFamily: constf.fontfamilytextheader,
                                                        color: index == 2 ? "#fff" : "#f00",
                                                        fontSize:12
                                                    }}>
                                                    {item.name}
                                                </Text>
                                            </TouchableOpacity>
                                        ))
                                    }
                                </ScrollView>
                            </View>
                            <View style={{ height: height, width: width, padding: 20, flexDirection: "row", flexWrap: "wrap", backgroundColor: "#fff", marginBottom: 100 }}>

                                {this.state.contain1.map((item, index) => (
                                    !item.type && item.shows ?
                                        <TouchableOpacity
                                            style={{
                                                height: height * .28,
                                                width: width * .9,
                                                borderRadius: 5,
                                                // elevation: 1,
                                                // shadowColor: "#a48595",
                                                shadowOpacity: .01,
                                                padding: 10,
                                                flexDirection: "row",
                                                borderWidth: .1
                                            }}
                                            onPress={() => {
                                                // props.navigation.navigate("Profile_person")

                                            }}
                                        >
                                            <View style={{ flex: 2 }}>
                                                <Text style={{ fontFamily: constf.fontfamilytextheader, fontSize: 12 }}>اسم العامل  :  {item.nameperson}</Text>
                                                <Text style={{ fontFamily: constf.fontfamilytextheader, fontSize: 12 }}>رقم الهاتف  :  {item.phone}</Text>
                                                <Text style={{ fontFamily: constf.fontfamilytextheader, fontSize: 12 }}>التاريخ     :  {item.date}</Text>
                                                <Text style={{ fontFamily: constf.fontfamilytextheader, fontSize: 12 }}>وقت بدايه العمل :  {item.start_time}</Text>
                                                <Text style={{ fontFamily: constf.fontfamilytextheader, fontSize: 12 }}>وقت نهايه العمل :  {item.end_time}</Text>
                                            </View>
                                            <View style={{ flex: 1.3, alignItems: "center", justifyContent: "center" }}>
                                                <Image style={{ height: height * .1, width: width * .2, borderRadius: 25 }}
                                                    source={require("../imagef/logor-removebg-preview.png")}
                                                />
                                                <View style={{ height: height * .03, width: width * .2, flexDirection: "row", alignItems: "center" }}>
                                                    <Ionicons name='md-star-sharp' style={{ color: "#ffd403" }}></Ionicons>
                                                    <Ionicons name='md-star-sharp' style={{ color: "#ffd403" }}></Ionicons>
                                                    <Ionicons name='md-star-sharp' style={{ color: "#ffd403" }}></Ionicons>
                                                    <Ionicons name='md-star-half-sharp' style={{ color: "#ffd403" }}></Ionicons>
                                                    <Ionicons name='md-star-outline' style={{ color: "#ffd403" }}></Ionicons>
                                                </View>
                                                <TouchableOpacity
                                                    style={{
                                                        height: height * .05,
                                                        width: width * .3,
                                                        backgroundColor: constf.colorbutton,
                                                        borderRadius: 5,
                                                        alignItems: "center",
                                                        justifyContent: "center",
                                                        marginVertical: height * .009
                                                    }}>
                                                    <Text
                                                        style=
                                                        {{
                                                            fontFamily: constf.fontfamilytextheader,
                                                            fontSize: 12, color: constf.colortext
                                                        }}
                                                    >قبول الموظف</Text>

                                                </TouchableOpacity>
                                            </View>
                                        </TouchableOpacity>
                                        : null
                                ))
                                }
                            </View>
                        </Modal>
                        <Modal visible={this.state.modal3}>

                            <View style={{
                                height: height * .1,
                                width: width,
                                flexDirection: "row",
                                alignItems: "center",
                                // justifyContent:"center",
                                backgroundColor: "#fff",
                            }}
                            >

                                <TouchableOpacity
                                    style={{
                                        height: height * .1,
                                        width: width * .23,
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
                                <View style={{
                                    height: height * .055,
                                    width: width * .65,
                                    alignItems: "center",
                                    justifyContent: "center",
                                    borderWidth: .5,
                                    flexDirection: "row",
                                    borderRadius: 10,

                                    backgroundColor: "#fff"
                                }}>
                                    <TextInput
                                        style={{
                                            height: height * .05,
                                            width: width * .48,
                                            backgroundColor: "#fff",
                                            borderRadius: 10,
                                            color: "#000",
                                            fontSize: 13
                                        }}
                                        value={this.state.searchkey}
                                        onChangeText={(value) => {
                                            this.setState({ searchkey: value })
                                            this.search(value)
                                        }}
                                    >


                                    </TextInput>

                                    <TouchableOpacity
                                        style={{
                                            height: height * .05,
                                            width: width * .1,
                                            alignItems: "center",
                                            justifyContent: "center"
                                        }}
                                        onPress={() => {
                                            this.setState({ searchkey: "" })
                                            this.search("")
                                        }}
                                    >
                                        <Ionicons name="close-outline"
                                            style={{ fontSize: 18, color: "#000" }}
                                        />

                                    </TouchableOpacity>
                                </View>


                            </View>
                            <View
                                style={{
                                    height: height * .1,
                                    width: width,
                                    alignItems: "center",
                                    justifyContent: "center",
                                    backgroundColor: "#fff",
                                    flexDirection: "row",
                                    padding: 10
                                }}
                            >
                                <ScrollView horizontal>
                                    {
                                        this.state.containtop.map((item, index) => (
                                            <TouchableOpacity
                                                style={{
                                                    height: height * .05,
                                                    width: width * .22,
                                                    backgroundColor: index == 3 ?constf.color_2 : "#fff",
                                                    borderRadius: 10,
                                                    alignItems: "center",
                                                    justifyContent: "center",
                                                    margin: 3,
                                                    borderWidth: index == 3 ? 0 : .3
                                                }}
                                                onPress={() => {
                                                    this.move(index)
                                                }}
                                            >
                                                <Text
                                                    style=
                                                    {{
                                                        fontFamily: constf.fontfamilytextheader,
                                                        color: index == 3 ? "#fff" : "#f00",
                                                        fontSize:12
                                                    }}>
                                                    {item.name}
                                                </Text>
                                            </TouchableOpacity>
                                        ))
                                    }
                                </ScrollView>
                            </View>
                            <View style={{ height: height, width: width, padding: 20, flexDirection: "row", flexWrap: "wrap", backgroundColor: "#fff", marginBottom: 100 }}>

                                {this.state.contain1.map((item, index) => (
                                    item.type && item.shows ?
                                        <TouchableOpacity
                                            style={{
                                                height: height * .28,
                                                width: width * .9,
                                                borderRadius: 5,
                                                // elevation: 1,
                                                // shadowColor: "#a48595",
                                                shadowOpacity: .01,
                                                padding: 10,
                                                flexDirection: "row",
                                                borderWidth: .1,
                                                marginTop: 5
                                            }}
                                            onPress={() => {
                                                // props.navigation.navigate("Profile_person")

                                            }}
                                        >
                                            <View style={{ flex: 2 }}>
                                                <Text style={{ fontFamily: constf.fontfamilytextheader, fontSize: 12 }}>اسم العامل  :  {item.nameperson}</Text>
                                                <Text style={{ fontFamily: constf.fontfamilytextheader, fontSize: 12 }}>رقم الهاتف  :  {item.phone}</Text>
                                                <Text style={{ fontFamily: constf.fontfamilytextheader, fontSize: 12 }}>التاريخ     :  {item.date}</Text>
                                                <Text style={{ fontFamily: constf.fontfamilytextheader, fontSize: 12 }}>وقت بدايه العمل :  {item.start_time}</Text>
                                                <Text style={{ fontFamily: constf.fontfamilytextheader, fontSize: 12 }}>وقت نهايه العمل :  {item.end_time}</Text>
                                            </View>
                                            <View style={{ flex: 1.3, alignItems: "center", justifyContent: "center" }}>
                                                <Image style={{ height: height * .1, width: width * .2, borderRadius: 25 }}
                                                    source={require("../imagef/logor-removebg-preview.png")}
                                                />
                                                <View style={{ height: height * .03, width: width * .2, flexDirection: "row", alignItems: "center" }}>
                                                    <Ionicons name='md-star-sharp' style={{ color: "#ffd403" }}></Ionicons>
                                                    <Ionicons name='md-star-sharp' style={{ color: "#ffd403" }}></Ionicons>
                                                    <Ionicons name='md-star-sharp' style={{ color: "#ffd403" }}></Ionicons>
                                                    <Ionicons name='md-star-half-sharp' style={{ color: "#ffd403" }}></Ionicons>
                                                    <Ionicons name='md-star-outline' style={{ color: "#ffd403" }}></Ionicons>
                                                </View>
                                                <TouchableOpacity
                                                    style={{
                                                        height: height * .05,
                                                        width: width * .3,
                                                        backgroundColor: constf.colorbutton,
                                                        borderRadius: 5,
                                                        alignItems: "center",
                                                        justifyContent: "center",
                                                        marginVertical: height * .009
                                                    }}>
                                                    <Text
                                                        style=
                                                        {{
                                                            fontFamily: constf.fontfamilytextheader,
                                                            fontSize: 12, color: constf.colortext
                                                        }}
                                                    >تم قبول الموظف</Text>

                                                </TouchableOpacity>
                                            </View>
                                        </TouchableOpacity>
                                        : null
                                ))
                                }
                            </View>
                        </Modal>
                    </ScrollView>
                </View>

            </>
        )
    }
}

const styles = StyleSheet.create({
    MainContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        height: height,
        width: width,
    },
    stylebutton: {
        height: height * .06,
        width: width * .3,
        backgroundColor: constf.colorbutton,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 80
    }



});
