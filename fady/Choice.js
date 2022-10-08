
import React from 'react';
import {
  View,
  Image,
  StyleSheet,
  Text,
  Dimensions,
  StatusBar,
  TouchableOpacity
} from 'react-native'

import LottieView from 'lottie-react-native';
const { height, width } = Dimensions.get("window")
import * as constf from "../constant/constf"
export default class app extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  render(props) {
    return (
      <>
        <StatusBar backgroundColor={"#fff"} />
        <View style={style.contanier}>
          <View
            style={{
              height: height * .14,
              width: width,
              alignItems: "center",
              justifyContent: "center",
            }}>
            <Text style={{ fontSize: 17, fontFamily: constf.fontfamilytextheader }}>تسجيل الدخول</Text>
          </View>
          <LottieView
            source={require("../imagef/choice")}
            style={{
              height: height * .5,
              width: width * .6,
            }}
            size={35}
            autoPlay
          />
         
          <View style={{height:height*.07,
          width:width,
          alignItems:"center",
          justifyContent:"space-around",
          flexDirection:"row",
          marginTop:height*.1
        }}>
          <TouchableOpacity
            style={{
              height: height * .06,
              width: width * .42,
              alignItems: "center",
              justifyContent: "center",
              marginVertical: height * .03,
              backgroundColor: constf.colorbutton,
              borderRadius: 5,
            }}
            onPress={() => {
              this.props.navigation.navigate("Login")
            }}
          >
            <Text style={{ fontFamily: constf.fontfamilytextheader, color: constf.colortext,fontSize:12 }}>صاحب عمل</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              height: height * .06,
              width: width * .42,
              borderWidth: .4,
              borderRadius: 10,
              alignItems: "center",
              justifyContent: "center",
              // backgroundColor:"#f00"
            }}
            onPress={() => {
              this.props.navigation.navigate("Login")
            }}

          >
            <Text style={{ 
              fontFamily: constf.fontfamilytextheader,
              fontSize:12,
              // color:"#fff" 
              }}>فاضي شويه</Text>
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
      // justifyContent:"space-around"
    },
    contaniertextview: {
      height: height * .1,
      width: width * 1,
      alignItems: "center",
      justifyContent: "center",
      // marginTop: height * .15
    }, text: {
      fontSize: 30,
      color: "#000",
      fontFamily: "Amiri-Italic",
    }
  }
)
