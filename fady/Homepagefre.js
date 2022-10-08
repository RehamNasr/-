


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
    AsyncStorage
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
            contanier_job: [
            ],
            coloricon: "#76b74c",
            index: 0,
            namejob: "مهندس",
            date: "22/12/2000",
            start_time: "2:00",
            end_time: "5:00",

        }
    }
    get_contanier_job = async () => {
        let arr = await AsyncStorage.getItem("contanier_job")
        if (!arr) {
            arr = []
            this.setState({ contanier_job: arr })
        }
        else {
            arr = JSON.parse(arr)
            this.setState({ contanier_job: arr })
        }
    }

    componentDidMount() {
        this.get_contanier_job()
    }
    async set_contanier_job(contanier_job) {
        await AsyncStorage.setItem("contanier_job", JSON.stringify(contanier_job))
    }
    deletejob(index) {
        let contanier_job = this.state.contanier_job
        contanier_job.splice(index, 1)
        this.setState({ contanier_job: contanier_job })
        this.set_contanier_job(contanier_job)
    }

    render() {
        return (
            <>
                <StatusBar backgroundColor={constf.color_2}></StatusBar>
                <View style={styles.MainContainer}>
                    <ScrollView style={{ height: height, width: width, }}>

                        <View style={{
                            height: height * .07,
                            width: width,
                            backgroundColor: constf.color_2,
                            flexDirection: "row",
                            alignItems: "center"
                        }}>
                            <TouchableOpacity
                                onPress={() => {
                                    this.props.navigation.openDrawer();
                                    // this.props.navigation.dispatch(DrawerActions.openDrawer());
                                    // this.props.navigation.navigate('page_1')
                                }}
                                style={{
                                    height: height * .05,
                                    width: width * .15,
                                    alignItems: "center",
                                    justifyContent: "center"
                                }}

                            >
                                <Ionicons name="menu-outline"
                                    style={{ fontSize: 18, color: "#fff" }}
                                />

                            </TouchableOpacity>
                            <TouchableOpacity
                                style={{
                                    height: height * .05,
                                    width: width * .1,
                                    alignItems: "center",
                                    justifyContent: "center"
                                }}

                                onPress={() => {
                                    this.props.navigation.navigate("Newjob", {
                                        contanier_job: this.state.contanier_job,
                                        ref: this.get_contanier_job
                                    })
                                }}
                            >
                                <Fontisto name="plus-a"
                                    style={{ fontSize: 13, color: "#fff" }}
                                />
                            </TouchableOpacity>
                            <View style={{ height: height * .05, width: width * .52, alignItems: "center", justifyContent: "center" }}>
                                <Text style={{ alignSelf: "center", color: "#fff", fontSize: 17 }}>الصفحة الرئيسيه</Text>
                            </View>

                            <TouchableOpacity
                                style={{
                                    height: height * .05,
                                    width: width * .24,
                                    alignItems: "center",
                                    justifyContent: "center"
                                }}
                                onPress={() => {
                                    this.props.navigation.navigate("Search")
                                }}
                            >
                                <Ionicons name="ios-search-outline"
                                    style={{ fontSize: 17, color: "#fff" }}
                                />

                            </TouchableOpacity>
                        </View>
                        <View style={{ padding: 20, flexDirection: "row", flexWrap: "wrap", backgroundColor: "#fff" }}>
                            {
                                this.state.contanier_job.map((item, index) => (
                                    <TouchableOpacity
                                        style={{
                                            height: height * .26,
                                            width: width * .9,
                                            borderRadius: 3,
                                            // elevation: 1,
                                            // shadowColor: "#a48595",
                                            shadowOpacity: .01,
                                            padding: 10,
                                            flexDirection: "row",
                                            borderWidth: .1,
                                            marginVertical: 5
                                        }}
                                        onPress={() => {
                                            
                                            this.props.navigation.navigate("Details_job", {
                                                obj: item,
                                                index: index,
                                                ref: this.get_contanier_job,
                                                contanier_job: this.state.contanier_job
                                            })
                                        }}
                                        onLongPress={() => {
                                            let contanier_job = this.state.contanier_job
                                            contanier_job[index].viewdelete = true
                                            this.setState({ contanier_job: contanier_job })
                                        }}
                                    >
                                        <View style={{ flex: 1 }}>
                                            <Text style={{ fontFamily: constf.fontfamilytextheader, fontSize: 12, color: "#000" }}>اسم الوظيفه  :  {item.namejob}</Text>
                                            <Text style={{ fontFamily: constf.fontfamilytextheader, fontSize: 12, color: "#000" }}>المدينه  :  {item.city}</Text>
                                            <Text style={{ fontFamily: constf.fontfamilytextheader, fontSize: 12 }}>التاريخ     :  {item.date}</Text>
                                            <Text style={{ fontFamily: constf.fontfamilytextheader, fontSize: 12 }}>وقت بدايه العمل :  {item.start_time}</Text>
                                            <Text style={{ fontFamily: constf.fontfamilytextheader, fontSize: 12 }}>وقت نهايه العمل :  {item.end_time}</Text>
                                        </View><View style={{ flex: .7}}>
                                            {item.viewdelete ?

                                                <View style={{ flex:.1, flexDirection: "row", justifyContent: "flex-end" }}>
                                                    <TouchableOpacity
                                                        style={{
                                                            height: height * .05,
                                                            width: width * .09,
                                                            alignItems: "center",
                                                            justifyContent: "center"
                                                        }}
                                                        onPress={() => {
                                                            this.deletejob(index)
                                                        }}
                                                    >
                                                        <Ionicons name="trash"
                                                            style={{ fontSize: 16, color: "#000" }}
                                                        />
                                                    </TouchableOpacity>
                                                    <TouchableOpacity
                                                        style={{
                                                            height: height * .05,
                                                            width: width * .09,
                                                            alignItems: "center",
                                                            justifyContent: "center"
                                                        }}
                                                        onPress={() => {
                                                            this.props.navigation.navigate("Editjob", {
                                                                obj: item,
                                                                index: index,
                                                                ref: this.get_contanier_job,
                                                                contanier_job: this.state.contanier_job
                                                            })
                                                        }}
                                                    >
                                                        <Ionicons name="ios-create-outline"
                                                            style={{ fontSize: 16, color: "#000" }}
                                                        />

                                                    </TouchableOpacity>
                                                </View>
                                                :
                                                <View style={{ flex:.1, flexDirection: "row" }}>

                                                </View>}
                                            <View style={{ flex: 2, alignItems: "center", justifyContent: "center" }}>
                                                <TouchableOpacity
                                                    style={{
                                                        height: height * .05,
                                                        width: width * .25,
                                                        backgroundColor: constf.color_2,
                                                        alignItems: "center",
                                                        justifyContent: "center",
                                                        borderRadius: 5
                                                    }}>
                                                    <Text style={{ color: "#fff", fontfamilytextheader: constf.fontfamilytextheader }}>التقديم</Text>
                                                </TouchableOpacity>
                                            </View></View>
                                    </TouchableOpacity>
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
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        height: height,
        width: width
    },



});
