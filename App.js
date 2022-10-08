
// fady
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import React, { useEffect } from 'react'
import { View, ScrollView, Image, Dimensions, Text, TouchableOpacity, AsyncStorage } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { createDrawerNavigator, DrawerItems } from "react-navigation-drawer";
import SafeAreaView from "react-native-safe-area-view";
import Login from './fady/Login'
import Signup from './fady/Signup'
import Choice from './fady/Choice'
import Splash from './fady/Splash'
import Introslider from './fady/Introslider'
import Profile_person from './fady/Profile_person'
import Taptop from './fady/Taptop'
import Homepagefre from './fady/Homepagefre'
import Newjob from './fady/Newjob'
import Search from './fady/Search'
import Editjob from "./fady/Editjob"
import Profileme from './fady/Profileme'
import Apply_job from "./fady/Apply_job"
import Details_job from './fady/Details_job'
import Apply_job2 from './fady/Apply_job2'
import Jobs from './fady/Jobs'
import * as constf from './constant/constf'
const { height, width } = Dimensions.get("window");
async function setlogin() {
  await AsyncStorage.setItem("login", "0")
}
var photo_uri = "https://cdn-icons-png.flaticon.com/512/1946/1946429.png"
var name = ""
var job = ""
async function get_photo_uri() {
  let obj = await AsyncStorage.getItem("obj_user")
  obj = JSON.parse(obj)
  photo_uri = obj.photo_uri
  name = obj.nameperson
  job = obj.job
}
get_photo_uri()

const CustomDrawerContentComponent = (props) => (
  <ScrollView>
    <SafeAreaView
      style={{ flex: 1 }}
      forceInset={{ top: 'always', horizontal: 'never' }}>
      <View
        style={{
          width: "100%",
          height: height * .35,
          backgroundColor: "#fff",
          alignItems: "center",
          justifyContent: "center"
        }}>
        <Image source={{ uri: photo_uri }}
          style={{
            height: height * .18,
            width: width * .37,
            borderRadius: 250,
          }}
        >

        </Image>
        <Text style={{ marginTop: height * .02, fontFamily: constf.fontfamilytextheader }}>{name}</Text>
        <Text style={{ fontFamily: constf.fontfamilytextheader }}>{job}</Text>
      </View>
      <DrawerItems {...props} />
      <TouchableOpacity
        style={{
          width: "100%",
          height: height * .4,
          backgroundColor: "#fff",
          flexDirection: "row",
          padding: 20,
          alignItems: "center"
        }}
        onPress={({ }) => {
          setlogin()
          props.navigation.navigate("Splash")
        }}
      >
        <Ionicons name="log-out-outline" size={18} color={"#000"} />
        <Text style={{ fontSize: 12, fontWeight: "bold" }}>          تسجيل الخروج</Text>
      </TouchableOpacity>
    </SafeAreaView>
  </ScrollView>
)




const stack_1 = createStackNavigator(
  {
    Choice: { screen: Choice },
    Login: { screen: Login },
    Signup: { screen: Signup }
  }, {
  headerMode: "none"
}
)

const stack_2 = createStackNavigator(
  {
    Homepagefre: { screen: Homepagefre },
    Newjob: { screen: Newjob },
    Details_job: { screen: Details_job },
    Profile_person: { screen: Profile_person },
    Search: { screen: Search },
    Editjob: { screen: Editjob },
    Profileme: { screen: Profileme },
    Apply_job: { screen: Apply_job }
  }, {
  headerMode: "none"
}
)
const Drawer = createDrawerNavigator(
  {
    page_1: {
      screen: stack_2,
      navigationOptions: {
        drawerLabel: "الصفحه الرئيسيه",
        drawerIcon: ({ tintColor }) => (
          <View>
            <Ionicons name="ios-person-outline" size={18} color={tintColor} />
          </View>
        )
      }
    },
    page_2: {
      screen: Profileme,
      navigationOptions: {
        drawerLabel: "الملف الشخصي",
        drawerIcon: ({ tintColor }) => (
          <View>
            <Ionicons name="ios-person-outline" size={18} color={tintColor} />
          </View>
        )
      }
    }, 
    page_3: {
      screen: Jobs,
      navigationOptions: {
        drawerLabel: "الوظائف ",
        drawerIcon: ({ tintColor }) => (
          <View>
            <Ionicons name="ios-git-pull-request-outline" size={20} color={tintColor} />
          </View>
        ),
      }
    },
    page_4: {
      screen: Apply_job,
      navigationOptions: {
        drawerLabel: "المقدمين علي الوظائف",
        drawerIcon: ({ tintColor }) => (
          <View>
            <Ionicons name="ios-git-pull-request-outline" size={20} color={tintColor} />
          </View>
        ),
      }
    },
    page_5: {
      screen: Apply_job2,
      navigationOptions: {
        drawerLabel: "المقبولين ",
        drawerIcon: ({ tintColor }) => (
          <View>
            <Ionicons name="ios-git-pull-request-outline" size={20} color={tintColor} />
          </View>
        ),
      }
    },
  },
  {
    contentComponent: CustomDrawerContentComponent,
    drawerType: "slide",
    drawerWidth: width * .8,
    headerTintColor: { color: "#f00" },
    contentOptions: {
      activeTintColor: constf.color_2,
      labelStyle: {
        fontSize: 12,
        marginLeft: 5,
        fontFamily: "Gulzar-Regular",
      },
    },
  }
)

// // export default createAppContainer(drawer)


export default createAppContainer(
  createSwitchNavigator({
    Splash: Splash,
    Introslider: Introslider,
    stack_1: stack_1,
    stack_2: stack_2,
    Drawer: Drawer
  })
)





