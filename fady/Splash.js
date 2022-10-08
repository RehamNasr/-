
import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  Dimensions,
  StatusBar,
  AsyncStorage
} from 'react-native'
import LottieView from 'lottie-react-native';
const { height, width } = Dimensions.get("window")
import * as constf from "../constant/constf"
export default class app extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      login: 0,
    }
  }
  async getlogin() {
    let login = await AsyncStorage.getItem("login")
    if (login == null) {
      login = 0
      this.setState({ login: login })
    } else {
      this.setState({ login: JSON.parse(login) })
    }
  }
  componentDidMount() {
    this.getlogin()
    setTimeout(() => {
      if (this.state.login == 0) {
        this.props.navigation.navigate("Introslider")
      }
      else if (this.state.login == 1) {
        this.props.navigation.navigate("stack_1")
      } else {
        this.props.navigation.navigate("Drawer")
      }
    }, 500
    );
  }
  render(props) {
    return (
      <>
        <StatusBar backgroundColor={"#fff"} />
        <View style={style.contanier}>
          <View style={{ height: height * .85, alignItems: "center", justifyContent: "center", backgroundColor: "#fff" }}>
            <View style={{ height:height*.15, width: width,alignItems:"center",justifyContent:"center" }}>
              {/* <View style={{ height: 49, width: 45, backgroundColor: constf.color_1, margin: 2, borderTopLeftRadius: 15 }}></View>
              <View style={{ height: 49, width: 45, backgroundColor: constf.color_2, margin: 2, borderTopRightRadius: 15 }}></View>
              <View style={{ height: 49, width: 45, backgroundColor: constf.color_2, margin: 2, borderBottomLeftRadius: 15 }}></View>
              <View style={{ height: 49, width: 45, backgroundColor: constf.color_1, margin: 2, borderBottomRightRadius: 15 }}></View> */}
            <LottieView
              source={require("../imagef/splash")}
              size={50}
              style={{height:height*.7,width:width*.5}}
              autoPlay
            />
            </View> 
            
            <View style={style.contaniertextview
            }>
              <Text style={style.text}>فاضي شويه</Text>
            </View>
          </View>
          <View style={{
            backgroundColor: "#fff",
            height: height * .05, width: width,
          }}>
            <Text style={{ textAlign: "center", fontFamily: constf.fontfamilytextheader }}>by CTA</Text>
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
      justifyContent: "center",
      justifyContent: "space-around"
    },
    contaniertextview: {
      height: height * .1,
      width: width * 1,
      alignItems: "center",
      justifyContent: "center",
      marginTop: height * .02
    }, text: {
      fontSize:22,
      color: "#000",
      fontFamily: "Gulzar-Regular",
    }
  }
)
