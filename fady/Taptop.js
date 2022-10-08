

import * as React from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    Dimensions,
    ScrollView,
    AsyncStorage,
    StatusBar,
    StyleSheet,
    Image
} from 'react-native';

import * as constf from '../constant/constf'
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
const initialLayout = { width: Dimensions.get('window').width }
const { height, width } = Dimensions.get("window");
var inform_modal = false
import Apply_job from "./Apply_job"
import Apply_job2 from "./Apply_job2"
import Details_job from './Details_job'



export default function History({ navigation }) {
    const SecondRoute = () => (
        <Apply_job navigation={navigation} />
        
    );
    const thirdRoute = () => (
        <Apply_job2 navigation={navigation} />
    );
    const [index, setIndex] = React.useState(0)
    const [routes] = React.useState([
        { key: 'second', title: 'المقدمين' },
        { key: 'third', title: 'المقبولين' },
    ])
    const renderScene = SceneMap({
        second: SecondRoute,
        third: thirdRoute
    })
    const renderTabBar = () => {
        <TabBar
            style={{ marginTop: 10, backgroundColor: "white" }}
            activeColor={"#f00"}
            inactiveColor={"#000"}
            indicatorStyle={{ backgroundColor: "#f00" }}

        />
    }


    return (
        <>
            <View style={{ flex: 1, backgroundColor: "white" }}>
                <View style={{ height: height * .1, width: width, flexDirection: "row" }}>
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
                        navigation.goBack()
                        }}>
                        <MaterialIcons name="arrow-forward" style={{ fontSize: 18 }} />
                    </TouchableOpacity>
                    <View style={{ height: height * .1, width: 200, alignItems: "center", justifyContent: "center" }}>
                        <Text style={{ fontFamily: constf.fontfamilytextheader }}>الموظفين</Text>
                    </View>
                </View>

                <TabView
                    navigationState={{ index, routes }}
                    renderScene={renderScene}
                    onIndexChange={setIndex}
                    initialLayout={initialLayout}
                    style={{ backgroundColor: "#f00" }}
                    renderTabBar={renderTabBar()}
                />


            </View>




        </>
    )
}








const styles = StyleSheet.create({
    MainContainer: {
        // justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f8f8f8',
        height: height,
        width: width,
        marginTop: 10
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
        height: height * .06,
        width: width * .5,
        flexDirection: "row",
        borderWidth: 1
        , alignItems: "center",
        flexDirection: "row",
        borderWidth: 1,
        borderRadius: 10,
        borderColor: "#a48595",
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
