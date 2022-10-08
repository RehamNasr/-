
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
export default class app extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "",
      password: "",
      colorname: "#ddd",
      colorpassword: "#ddd"
    }
  }
  async setlogin() {
    await AsyncStorage.setItem("login", "2")
    this.props.navigation.navigate("Drawer")
  }
  signcheck() {
    let name = this.state.name
    let password = this.state.password
    if (name == "eng.rehamnasr1@gmail.com" && password == "12345467") {
      this.setState({ colorname: constf.color_2, colorpassword: constf.color_2 })
      this.setlogin()
    } else if (name != "eng.rehamnasr1@gmail.com" && password != "12345467") {
      this.setState({ colorname:constf.color_1, colorpassword:constf.color_1 })
    } else if (password != "12345467") {
      this.setState({ colorpassword: constf.color_1 })
    } else {
      this.setState({ colorname:constf.color_1 })
    }
  }
  render(props) {
    return (
      <>
        <StatusBar backgroundColor={"#fff"} />
        <View style={style.contanier}>
          <View
            style={{
              height: height * .12,
              width: width,
              alignItems: "center",
              justifyContent: "center"
            }}>
            <Text style={{ fontSize: 17, fontFamily: constf.fontfamilytextheader }}>تسجيل الدخول </Text>
          </View>

          <TextInput
            label=" البريد الالكتروني"
            value={this.state.name}
            style={{
              height: height * .08,
              width: width * .88,
              marginVertical: 10,
              backgroundColor: constf.colortext,
              fontSize: 13,
              marginTop:height*.05
            }}
            selectionColor={"#baf5be"}
            onChangeText={(value) => {
              this.setState({ name: value })
            }}
            // mode="outlined"
            // activeOutlineColor={"#000"}
            // outlineColor={this.state.colorname}
            activeUnderlineColor={constf.colorbutton}
            underlineColor={this.state.colorname}
          />

          <TextInput
            label="كلمه السر"
            value={this.state.password}
            style={{
              height: height * .06,
              width: width * .9,
              marginVertical: height * .02,
              backgroundColor: constf.colortext,
              fontSize: 13
            }}
            selectionColor={"#baf5be"}
            onChangeText={(value) => {
              this.setState({ password: value })
            }}
            // mode="outlined"

            // activeOutlineColor={"#000"}
            // outlineColor={this.state.colorpassword}
            activeUnderlineColor={constf.colorbutton}
            underlineColor={this.state.colorpassword}
          />

          <TouchableOpacity
            style={{
              height: height * .06,
              width: width * .9,
              alignItems: "center",
              justifyContent: "center"
              // borderWidth: .2
              , marginVertical: height * .08,
              borderRadius: 5,
              backgroundColor:constf.color_2

            }}
            onPress={() => {
              this.signcheck()
            }}
          >
            <Text style={{color:"#fff"}}>تسجيل الدخول</Text>
          </TouchableOpacity>

          <View
            style={{
              height: height * .12,
              width: width,
              alignItems: "center",
              justifyContent: "center",
              marginTop:height*.05
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
            height: height * .12,
            width: width,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center"
          }}>
            <Text style={{ fontSize: 13, fontFamily: constf.fontfamilytextheader }}>ليس لديك حساب؟  </Text>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate("Login")
              }}
            >
              <Text style={{ fontSize: 13, fontFamily: constf.fontfamilytextheader, textDecorationLine: "underline", color: constf.color_2}}>تسجيل جديد </Text>
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
      height: height * .09,
      width: width * .78,
      flexDirection: "row",
      justifyContent: "space-around",
    }, logo: {
      height: height * .05,
      width: width * .10,
    }
  }
)
