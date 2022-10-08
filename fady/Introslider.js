
import React from 'react';
import { View, Text, Image, Dimensions, AsyncStorage, TouchableOpacity } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
// import { Icon } from 'react-native-vector-icons/FontAwesome5';
import Icon from 'react-native-vector-icons/Ionicons';
import LottieView from 'lottie-react-native';
import * as constf from "../constant/constf"
const { height, width } = Dimensions.get("screen");
const slides = [
    {
        key: 1,
        title: "يمكنك الحصول علي وظيفه من المنزل \nفي اي وقت",
        text: '',
        image: require("../imagef/slider1"),
        margetext:-height*.05,
        height: "90%",
        width: "70%",
    },
    {
        key: 2,
        title: "و يمكنك الحصول علي موظفين \n في اي وقت",
        image: require("../imagef/slider2"),
        text: "",
        margetext:-height*.05,
        height: "90%",
        width: "90%",
    },
    {
        key: 3,
        title: "و الحصول علي الاموال",
        text: "و الحصول علي الاموال",
        image: require("../imagef/slider3"),
        margetext:-height*.05,
        height: "90%",
        width: "70%",
    }
];

export default class Introslider extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            showRealApp: false,
            login: 0
        }
    }
    async setlogin() {
        await AsyncStorage.setItem("login", "1")
        this.props.navigation.navigate("stack_1")
    }

    _renderItem = ({ item }) => {

        return (
            <>
                <View style={{
                    flex: 1,
                    backgroundColor: "#fff"
                }}>
                    <View style={{
                        width: "100%",
                        height: height * .5,
                        flexDirection: "row",
                        marginTop: item.margimage,
                        alignItems: "center",
                        justifyContent: "center",
                        marginTop:height*.05
                    }}>

                        <LottieView
                            source={item.image}
                            style={{
                                height: item.height,
                                width: item.width,
                                borderBottomRightRadius: 20,
                                borderBottomLeftRadius: 20,
                                backgroundColor: "#fff",
                            }}
                            size={35}
                            autoPlay
                        />
                    </View>
                    <View style={{
                        width: width,
                        alignItems: "center",
                        justifyContent: "center",
                        alignSelf: "center",
                        marginTop: item.margetext,
                     
                    }}>
                        <Text
                            style={{
                                fontSize: 16,
                                textAlign: "center",
                                fontWeight: "bold",
                                color: "#000"
                            }}
                        >
                            {item.title}
                        </Text>

                    </View>

                </View>
            </>
        );
    }
    _renderNextButton = () => {
        return (
            <View style={{ flexDirection: "row", width: "90%", justifyContent: "space-between", height: height * .12, alignSelf: "center" }}>
                <TouchableOpacity style={{
                    width: 50,
                    height: 50,

                    borderRadius: 25,
                    justifyContent: 'center',
                    alignItems: 'center',
                    alignSelf: "center",
                }}
                    onPress={() => {
                        this.setlogin()
                    }}
                >

                    <Text style={{ color: "#f00", fontSize: 15 }}>تخطي</Text>
                </TouchableOpacity>
                <View style={{
                    width: 50,
                    height: 50,

                    borderRadius: 25,
                    justifyContent: 'center',
                    alignItems: 'center',
                    alignSelf: "center",
                }}

                >
                    <Text style={{ color: "#f00", fontSize: 15 }}>استمرار</Text>
                </View></View>
        );
    };
    _renderDoneButton = () => {
        return (
            <View style={{
                width: "98%",
                height: height * .12,
                borderRadius: 20,
                justifyContent: 'center',
                alignItems: 'center',
                alignSelf: "center"
            }}
                onPress={() => {
                    this.setlogin()
                }}
            >
                <Text
                    style={{ color: "#f00", fontSize: 18 }}
                >تسجيل الدخول</Text>
            </View>
        );
    };
    _onDone = () => {
        this.setlogin()
    }
    render() {
        if (this.state.showRealApp) {
            return (
                <View style={{
                    flex: 1,
                    paddingTop: (Platform.OS) === 'ios' ? 20 : 0,
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: 20
                }}>
                    <Text style={{ textAlign: 'center', fontSize: 20, color: '#000' }}>
                        welcome to my app.
                    </Text>
                </View>
            );
        } else {
            return <AppIntroSlider
                renderItem={this._renderItem}
                data={slides}
                onDone={this._onDone}
                renderDoneButton={this._renderDoneButton}
                renderNextButton={this._renderNextButton}
                bottomButton
                dotStyle={{ backgroundColor: "#ccc", height: 5, width: 5 }}
                activeDotStyle={{ backgroundColor: "#f00", height: 5, width: 20 }}
            />;
        }
    }
}


