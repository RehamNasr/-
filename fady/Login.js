
import React from 'react';
import {
    View,
    Image,
    StyleSheet,
    Text,
    Dimensions,
    StatusBar,
    TouchableOpacity,
    Linking,
    AsyncStorage
} from 'react-native'

import LottieView from 'lottie-react-native';
const { height, width } = Dimensions.get("window")
import * as constf from "../constant/constf"
import { TextInput } from 'react-native-paper';
import { RadioButton } from 'react-native-paper';
export default class app extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            erroremail: "",
            phone: "",
            errorphone: "",
            password: "",
            errorpassword: "",
            confirmpassword: "",
            errorconfirmpassword: "",
            job: "",
            checked: "first",
            coloremail: "#ccd",
            colorphone: "#ccd",
            colorpassword: "#ccd",
            colorconfirm: "#ccd",
            count: 0,
            success: 0
        }
    }
    async setlogin() {
        await AsyncStorage.setItem("login", "2")
        this.props.navigation.navigate("Drawer")
    }
    email(value) {
        let emailAccount = value;
        let errorEmail = this.state.erroremail;
        if (emailAccount.trim() === "") {
            errorEmail = "";
            this.setState({ coloremail: "#f00" })
        } else if (!emailAccount.includes("@") || !emailAccount.includes(".")) {
            errorEmail = "error";
            this.setState({ coloremail: "#f00" })
        } else if (
            emailAccount.indexOf("@") + 1 == emailAccount.lastIndexOf(".") ||
            emailAccount.lastIndexOf(".") < emailAccount.indexOf("@")
        ) {
            errorEmail = "error";
            this.setState({ coloremail: "#f00" })
        } else if (
            !emailAccount.includes("gmail.com") &&
            !emailAccount.includes("yahoo.com") &&
            !emailAccount.includes("facebook.com")
        ) {
            errorEmail = "error";
            this.setState({ coloremail: "#f00" })
        } else {
            errorEmail = "done";
            this.setState({ coloremail: constf.color_2 })
        }
    }
    phone(value) {
        let phone = value;
        let errorphone = this.state.errorphone;


        let start = phone.substr(0, 3)
        if ((start == "012" || start == "011" || start == "010") && phone.length == 11) {
            errorphone = "done"
            this.setState({ colorphone: constf.color_2 })
        } else {
            errorphone = "error"
            this.setState({ colorphone: constf.color_1 })
        }


    }



    password(value) {
        let passAccount = value;
        let errorPass = this.state.errorpassword;
        if (passAccount == "") {
            errorPass = "error";
            this.setState({ colorpassword: constf.color_1 })

        } else if (passAccount.length < 6) {
            errorPass = "error";
            this.setState({ colorpassword: constf.color_1 })

        } else {
            errorPass = "done";
            this.setState({ colorpassword: constf.color_2 })
        }


    }
    confirmpassword(value) {
        let passAccount = this.state.password;
        let confirmpassword = value
        let errorconfirmpassword = this.state.errorconfirmpassword
        if (passAccount == confirmpassword && passAccount.length > 6) {
            errorconfirmpassword = "done"
            this.setState({ colorconfirm: constf.color_2 })

        } else {
            errorconfirmpassword = "error"
            this.setState({ colorconfirm: constf.color_1 })

        }

    }
    singup() {
        let emailAccount = this.state.name;
        let errorEmail = this.state.erroremail;
        let phone = this.state.phone;
        let errorphone = this.state.errorphone;
        let passAccount = this.state.password;
        let confirmpassword = this.state.confirmpassword
        let errorconfirmpassword = this.state.errorconfirmpassword
        let errorPass = this.state.errorpassword;
        let count = this.state.count;

        if (emailAccount.trim() === "") {
            errorEmail = "";
            this.setState({ coloremail: "#f00" })
            count++;
        } else if (!emailAccount.includes("@") || !emailAccount.includes(".")) {
            errorEmail = "error";
            this.setState({ coloremail: "#f00" })
            count++;
        } else if (
            emailAccount.indexOf("@") + 1 == emailAccount.lastIndexOf(".") ||
            emailAccount.lastIndexOf(".") < emailAccount.indexOf("@")
        ) {
            errorEmail = "error";
            this.setState({ coloremail: "#f00" })
            count++;
        } else if (
            !emailAccount.includes("gmail.com") &&
            !emailAccount.includes("yahoo.com") &&
            !emailAccount.includes("facebook.com")
        ) {
            errorEmail = "error";
            this.setState({ coloremail: "#f00" })
            count++;
        } else {
            errorEmail = "done";
            this.setState({ coloremail: "#0f0" })
        }

        if (passAccount == "") {
            errorPass = "error";
            this.setState({ colorpassword: "#f00" })
            count++;
        } else if (passAccount.length < 6) {
            errorPass = "error";
            this.setState({ colorpassword: "#f00" })
            count++;
        } else {
            errorPass = "done";
            this.setState({ colorpassword: "#0f0" })
        }
        let start = phone.substr(0, 3)
        if ((start == "012" || start == "011" || start == "010") && phone.length == 11) {
            errorphone = "done"
            this.setState({ colorphone: "#0f0" })
        } else {
            errorphone = "error"
            this.setState({ colorphone: "#f00" })
            count++
        }
        if (passAccount == confirmpassword && passAccount.length > 6) {
            errorconfirmpassword = "done"
            this.setState({ colorconfirm: "#0f0" })

        } else {
            errorconfirmpassword = "error"
            this.setState({ colorconfirm: "#f00" })
            count++
        }
        if (count == 0) {
            this.setlogin()
            this.set_user_account()
        } else {
            this.setState({
                erroremail: errorEmail,
                errorphone: errorphone,
                errorpassword: errorPass,
                errorconfirmpassword: errorconfirmpassword
            })
        }
    }
    async  set_user_account(){
        // obj_user
        let obj={
            nameperson:this.state.name,
            email:this.state.name,
            phone:this.state.phone,
            city:"مصر",
            job:this.state.job,
            password:this.state.password,
            photo_uri: "https://cdn-icons-png.flaticon.com/512/1946/1946429.png"
        }
        await AsyncStorage.setItem("obj_user",JSON.stringify(obj))
    }
    render(props) {
        return (
            <>
                <StatusBar backgroundColor={"#fff"} />
                <View style={style.contanier}>
                    <View
                        style={{
                            height: height * .1,
                            width: width,
                            alignItems: "center",
                            justifyContent: "center"
                        }}>
                        <Text style={{ fontSize: 17, fontFamily: constf.fontfamilytextheader }}>تسجيل حساب </Text>
                    </View>

                    <TextInput
                        label=" البريد الالكتروني"
                        value={this.state.name}
                        style={{
                            height: height * .08,
                            width: width * .88,
                            marginVertical: height * .01,
                            backgroundColor: constf.colortext,
                            fontSize: 13
                        }}
                        onChangeText={(value) => {
                            this.setState({ name: value })
                            this.email(value)
                        }}
                        // selectTextOnFocus={"#fff"}
                        selectionColor={"#baf5be"}
                        // mode="outlined"
                        // activeOutlineColor={this.state.coloremail}
                        // outlineColor={this.state.coloremail}
                        activeUnderlineColor={this.state.coloremail}
                        underlineColor={this.state.coloremail}
                    />

                    <TextInput
                        label={"رقم الهاتف"}
                        value={this.state.phone}
                        style={{
                            height: height * .08,
                            width: width * .88,
                            backgroundColor: constf.colortext,
                            fontSize: 13

                        }}
                        selectionColor={"#baf5be"}
                        onChangeText={(value) => {
                            this.setState({ phone: value })
                            this.phone(value)
                        }}
                        // mode="outlined"
                        // activeOutlineColor={this.state.colorphone}
                        // outlineColor={this.state.colorphone}
                        activeUnderlineColor={this.state.colorphone}
                        underlineColor={this.state.colorphone}
                    />
                    <TextInput
                        label="المهنه"
                        value={this.state.job}
                        style={{
                            height: height * .08,
                            width: width * .88,
                            marginVertical: height * .01,
                            backgroundColor: constf.colortext,
                            fontSize: 13
                        }}
                        selectionColor={"#baf5be"}
                        onChangeText={(value) => {
                            this.setState({ job: value })
                        }}
                        // mode="outlined"
                        // activeOutlineColor={constf.color_2}
                        // outlineColor={this.state.colorpassword}
                        activeUnderlineColor={constf.color_2}
                        underlineColor={"#ccd"}
                    />
                    <TextInput
                        label="كلمه السر"
                        value={this.state.password}
                        style={{
                            height: height * .08,
                            width: width * .88,
                            // marginVertical: height * .01,
                            backgroundColor: constf.colortext,
                            fontSize: 13
                        }}
                        selectionColor={"#baf5be"}
                        onChangeText={(value) => {
                            this.setState({ password: value })
                            this.password(value)
                        }}
                        // mode="outlined"
                        // activeOutlineColor={this.state.colorpassword}
                        // outlineColor={this.state.colorpassword}
                        underlineColor={this.state.colorpassword}
                        activeUnderlineColor={this.state.colorpassword}
                    />
                    <TextInput
                        label={"تاكيد كلمه السر"}
                        value={this.state.confirmpassword}
                        style={{
                            height: height * .08,
                            width: width * .88,
                            backgroundColor: constf.colortext,
                            marginVertical: height * .01,
                            fontSize: 13,

                        }}
                        selectionColor={"#baf5be"}
                        onChangeText={(value) => {
                            this.setState({ confirmpassword: value })
                            this.confirmpassword(value)
                        }}
                        // mode="outlined"
                        // activeOutlineColor={this.state.colorconfirm}
                        // outlineColor={this.state.colorconfirm}
                        activeUnderlineColor={this.state.colorconfirm}
                        underlineColor={this.state.colorconfirm}
                    />



                    <TouchableOpacity
                        style={{
                            height: height * .07,
                            width: width * .9,
                            alignItems: "center",
                            justifyContent: "center"
                            // borderWidth: .2
                            , marginVertical: height * .05,
                            borderRadius: 5,
                            backgroundColor: constf.color_2

                        }}
                        onPress={() => {
                            this.singup()
                        }}
                    >
                        <Text style={{ color: "#fff" }}>تسجيل الحساب</Text>
                    </TouchableOpacity>

                    <View
                        style={{
                            height: height * .1,
                            width: width,
                            alignItems: "center",
                            justifyContent: "center",
                            marginBottom: 5
                        }}>
                        <Text style={{ fontSize: 14, fontFamily: constf.fontfamilytextheader }}>أو</Text>
                        <Text style={{ fontSize: 14, fontFamily: constf.fontfamilytextheader, marginTop: -height * .02 }}>قم بالتسجيل عن طريق</Text>
                    </View>
                    <View style={style.viewlogo}>
                        <TouchableOpacity
                            onPress={() => {
                                Linking.openURL('https://www.facebook.com/')
                            }}
                        >
                            <Image
                                source={require("../image/facebook.png")}
                                style={style.logo}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => {
                                Linking.openURL('https://www.google.com/')
                            }}
                        >
                            <Image
                                source={require("../imagef/google.png")}
                                style={style.logo}
                            />
                        </TouchableOpacity>
                        
                    </View>

                    <View style={{
                        height: height * .05,
                        width: width,
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "center"
                    }}>
                        <Text style={{ fontSize: 13, fontFamily: constf.fontfamilytextheader }}>هل لديك حساب؟  </Text>
                        <TouchableOpacity
                            onPress={() => {
                                this.props.navigation.navigate("Signup")
                            }}
                        >
                            <Text style={{ fontSize: 13, fontFamily: constf.fontfamilytextheader, textDecorationLine: "underline", color: constf.color_2 }}>تسجيل الدخول </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </>
        )
    }
}
const style = StyleSheet.create(
    {
        contanier: {
            backgroundColor: "#fff",
            height: height * 1,
            width: width * 1,
            alignItems: "center",
            // justifyContent: "center",
        },
        contaniertextview: {
            height: height * .1,
            width: width * 1,
            alignItems: "center",
            justifyContent: "center",
            marginTop: height * .15
        }, text: {
            fontSize: 30,
            color: "#000",
            fontFamily: "Amiri-Italic",
        }, viewlogo: {
            height: height * .08,
            width: width * .78,
            flexDirection: "row",
            justifyContent: "space-around",
        }, logo: {
            height: height * .05,
            width: width * .10,
        },
        styleradio: {
            height: height * .07,
            width: width * .2,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center"
        }
    }
)
