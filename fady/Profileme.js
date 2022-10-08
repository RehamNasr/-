
import React, { Component, createRef } from 'react';

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
import LottieView from 'lottie-react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import PermissionsAndroid from "react-native"
import * as ImagePicker from 'react-native-image-picker';
import ImageModal from 'react-native-image-modal';
import * as constf from "../constant/constf"
import ActionSheet from "react-native-actions-sheet";
import { color } from 'react-native-elements/dist/helpers';
const { height, width } = Dimensions.get("window");

export default class page2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "ريهام نصر",
            phone: "0115255454",
            date: "22/12/2000",
            start_time: "2:00",
            end_time: "5:00",
            city: "GIZA",
            contanier: [
                {
                    title: "الاسم",
                    text: "اسم المستخدم"
                }, {
                    title: "البريد الالكتروني",
                    text: "اسم المستخدم"
                },{
                    title: "رقم الهاتف",
                    text: "01158659437"
                }, {
                    title: "المدينه",
                    text: "مصر"
                }, {
                    title: "المهنه",
                    text: "نجار"
                }
            ],
            contanier2: [
                {
                    title: "الاسم",
                    text: "اسم المستخدم"
                }, {
                    title: "البريد الالكتروني",
                    text: "اسم المستخدم"
                }, {
                    title: "رقم الهاتف",
                    text: "01158659437"
                }, {
                    title: "المدينه",
                    text: "مصر"
                }, {
                    title: "المهنه",
                    text: "نجار"
                }
            ],
            password: "",
            visible: false,
            action: createRef(),
            photo_uri: "https://cdn-icons-png.flaticon.com/512/1946/1946429.png",
            photo_urid: "https://cdn-icons-png.flaticon.com/512/1946/1946429.png"
        }

    }
    async get_user_account() {
        let obj = await AsyncStorage.getItem("obj_user")
        obj = JSON.parse(obj)
        let contanier = [
            {
                title: "الاسم",
                text: obj.nameperson
            }, {
                title: "البريد الالكتروني",
                text: obj.email
            },{
                title: "رقم الهاتف",
                text: obj.phone
            }, {
                title: "المدينه",
                text: obj.city
            }, {
                title: "المهنه",
                text: obj.job
            }
        ]
        this.setState({
            contanier: contanier,
            contanier2: contanier,
            photo_urid: obj.photo_uri,
            photo_uri: obj.photo_uri
        })
    }
    async set_user_account() {
        let contanier = this.state.contanier2
        let obj = {
            nameperson: contanier[0].text,
            email: contanier[1].text,
            phone: contanier[2].text,
            city: contanier[3].text,
            job: contanier[4].text,
            password: this.state.password,
            photo_uri: this.state.photo_uri
        }
        await AsyncStorage.setItem("obj_user",JSON.stringify(obj))
    }
    requestCameraPermission = async () => {
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.CAMERA,
                {
                    title: "Cool Photo App Camera Permission",
                    message: "Cool Photo App needs access to your camera " + "so you can take awesome pictures.",
                    buttonNeutral: "Ask Me Later",
                    buttonNegative: "Cancel",
                    buttonPositive: "OK"
                });
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                console.log("You can use the camera");
            } else {
                console.log("Camera permission denied");
            }
        } catch (err) {
            console.warn(err);
        }
    };
    selectFromGallery = () => {

        let options = {
            storageOptions: {
                skipBackup: true,
                path: 'images',
            },
        };
        ImagePicker.launchImageLibrary({ options, includeBase64: true }, (res) => {
            // console.log('Response = ', res);

            if (res.didCancel) {
                console.log('User cancelled image picker');
            } else if (res.error) {
                console.log('ImagePicker Error: ', res.error);
            } else if (res.customButton) {
                console.log('User tapped custom button: ', res.customButton);
                alert(res.customButton);
            } else {

                this.setState({
                    photo_data: res.assets[0],
                    photo_uri: res.assets[0].uri,
                });
            }
        });

    }
    launchCamera = () => {
        let options = {
            storageOptions: {
                skipBackup: true,
                path: 'images',
            },
        };
        ImagePicker.launchCamera(options, (res) => {
            console.log('Response = ', res);

            if (res.didCancel) {
                console.log('User cancelled image picker');
            } else if (res.error) {
                console.log('ImagePicker Error: ', res.error);
            } else if (res.customButton) {
                console.log('User tapped custom button: ', res.customButton);
                alert(res.customButton);
            } else {
                this.setState({
                    photo_data: res.assets[0],
                    photo_uri: res.assets[0].uri
                });
            }
        });

    }
    componentDidMount() {
        this.get_user_account()
        this.requestCameraPermission()

    }
    // componentWillUnmount(){
    //     this.get_user_account()
    // }
    edit() {
        let contanier2 = this.state.contanier2
        this.setState({
            contanier: contanier2,
            photo_urid: this.state.photo_uri,
            visible: false
        })
        this.set_user_account()
        this.get_user_account()
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
                            <TouchableOpacity
                                style={{
                                    height: height * .04,
                                    width: width * .2,
                                    alignItems: "center",
                                    justifyContent: "center",
                                    backgroundColor: constf.color_1,
                                    borderRadius: 20,
                                    alignSelf: "center"
                                }}
                                onPress={() => {
                                    this.setState({ visible: true })
                                }}
                            >
                                <Text style={{
                                    fontSize: 12,
                                    //  fontFamily: constf.fontfamilytextheader,
                                    color: "#fff"
                                }}>تعديل</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{
                            marginVertical: height * .04
                            , alignItems: "center",
                            justifyContent: "center",
                            backgroundColor: "#fff",
                            alignSelf: "center"
                        }}>
                            <ImageModal
                                imageBackgroundColor="#fff"
                                style={{
                                    height: height * .18,
                                    width: width * .37,
                                    borderRadius: 250,
                                }}
                                source={{ uri: this.state.photo_urid }}
                            />
                        </View>
                        <View style={{ width: width, padding: 20, alignSelf: "center", justifyContent: "space-between" }}>
                            {
                                this.state.contanier.map((item, index) => (
                                    <View style={styles.stylerow}>
                                        <Text style={{ fontFamily: constf.fontfamilytextheader, fontSize: 13 }}>{item.title}      </Text>
                                        <Text style={styles.styletext}>{item.text}</Text>
                                    </View>
                                ))
                            }
                        </View>
                    </ScrollView>
                </View>
                <Modal visible={this.state.visible}>
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
                                        this.state.action.current?.setModalVisible();

                                    }}>
                                    <Ionicons name="close-outline" style={{ fontSize: 18 }} />
                                </TouchableOpacity>
                                <View style={{ height: height * .1, width: 200, alignItems: "center", justifyContent: "center" }}>
                                    <Text style={{ fontFamily: constf.fontfamilytextheader }}>الحساب </Text>
                                </View>
                                <TouchableOpacity
                                    style={{
                                        height: height * .04,
                                        width: width * .2,
                                        alignItems: "center",
                                        justifyContent: "center",
                                        backgroundColor: constf.color_1,
                                        borderRadius: 20,
                                        alignSelf: "center"
                                    }}
                                    onPress={() => {
                                        this.edit()
                                    }}
                                >
                                    <Text style={{
                                        fontSize: 12,
                                        //  fontFamily: constf.fontfamilytextheader 
                                        color: "#fff"
                                    }}>حفظ</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{ marginVertical: height * .04 }}>
                                <Image style={{ height: height * .18, width: width * .37, borderRadius: 250, alignSelf: "center" }}
                                    source={{ uri: this.state.photo_uri }}
                                />
                                <TouchableOpacity
                                    style={{
                                        height: height * .04,
                                        width: width * .08,
                                        alignSelf: "flex-start",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        backgroundColor: "#4fc153",
                                        borderRadius: 200,
                                        alignSelf: "center",
                                        marginTop: -height * .05,
                                        marginRight: -width * .27
                                    }}

                                    onPress={() => {
                                        this.selectFromGallery()

                                    }}>
                                    <Ionicons name="camera-outline" style={{ fontSize: 15, color: "#fff" }} />
                                </TouchableOpacity>
                            </View>
                            <View style={{ width: width, padding: 20, alignSelf: "center", justifyContent: "space-between" }}>
                                {
                                    this.state.contanier2.map((item, index) => (
                                        <View style={styles.stylerow}>
                                            <Text style={{ fontFamily: constf.fontfamilytextheader, fontSize: 13 }}>{item.title}      </Text>
                                            <TextInput
                                                style={styles.styletext}
                                                placeholder={item.text}
                                                value={item.text}
                                                onChangeText={(value) => {
                                                    let obj = item
                                                    obj.text = value
                                                    this.setState({ item: obj })
                                                }}
                                            />
                                        </View>
                                    ))
                                }
                            </View>
                        </ScrollView>
                    </View>
                </Modal>
                <ActionSheet ref={this.state.action} containerStyle={{ borderTopEndRadius: 70, borderTopLeftRadius: 70, paddingTop: 10 }}>
                    <View style={{ height: height * .4, borderRadius: 50, alignItems: "center", justifyContent: "center", }}>
                        <LottieView
                            source={require("../imagef/close")}
                            size={5}
                            style={{ height: height * .1, width: width * .4, marginTop: 5 }}
                            autoPlay
                        />
                        <Text style={{ color: "#000", fontSize: 20, margin: 0, fontFamily: constf.fontfamilytextheader }}>المغادره بدون حفظ</Text>
                        <View style={{ alignItems: "center", justifyContent: "center", width: 250 }}>
                            <Text style={{ textAlign: "center", color: "#000", fontFamily: constf.fontfamilytextheader, fontSize: 12 }}>من أجل حفظ التغييرات قبل المغادرة ، انقر فوق حفظ في الشريط العلوي.</Text>
                        </View>
                        <TouchableOpacity
                            style={{ height: height * .05, width: width * .5, backgroundColor: "#4fc153", alignItems: "center", justifyContent: "center", borderRadius: 15, marginTop: 20 }}
                            onPress={() => {
                                this.props.navigation.navigate("Homepagefre")
                            }}
                        >
                            <Text style={{ fontFamily: constf.fontfamilytextheader, color: "#fff", fontSize: 12 }}>تجاهل التغييرات</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={{ height: height * .06, width: width * .5, alignItems: "center", justifyContent: "center", marginTop: height * .01 }}
                            onPress={() => {
                                !this.state.action.current?.setModalVisible();
                            }}
                        >
                            <Text style={{ color: "#4fc153", fontFamily: constf.fontfamilytextheader }}>العوده</Text>
                        </TouchableOpacity>
                    </View>
                </ActionSheet>
            </>
        )
    }
}

const styles = StyleSheet.create({
    MainContainer: {
        // justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
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
        height: height * .05,
        width: width * .15,
        flexDirection: "row",
        borderWidth: .2
        , alignItems: "center",
        flexDirection: "row",
        borderWidth: 1,
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
        fontFamily: "Gulzar-Regular",
    },
    textinputstyle: {
        color: "#000",
        width: width * .5,
        marginTop: 4,
        height: height * .06
    },
    stylerow: {
        borderBottomWidth: .2,
        padding: 5,
        flexDirection: "row",
        height: 80,
        borderRadius: 5
    },
    styletext: {
        margin: 15,
        textAlign: "left",
        fontFamily: constf.fontfamilytextheader,
        color: "#000"
    }
});
