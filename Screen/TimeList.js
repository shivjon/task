import { FlatList, StyleSheet, Text, View , Image, StatusBar} from 'react-native'
import React, { useState, useEffect, memo } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import * as authAction from "../redux/actions/authAction";
import { Colors } from 'react-native/Libraries/NewAppScreen';
import moment from 'moment';
import 'moment-timezone';


const TimeList = (props) => {
    const dispatch = useDispatch();
    const listTimeZone = useSelector(state => state?.auth?.listTimeZone);
    const [listZone, setlistZone] = useState([]);

    useEffect(() => {
        if (listTimeZone.lenght != 0) {
            setlistZone(listTimeZone);
        }
    }, [listTimeZone])

    useEffect(() => {
        setInterval(function () {
            dispatch(authAction.ListTimeZone())
        }, 60000);
    }, [])

    const renderItem = ({ item, index }) => (
        <View style={styles.cardContainer}>
            <View>
                <Text style={styles.headerText}>
                    {item.value}
                </Text>
                <Text style={styles.desText}>
                    {item.text}
                </Text>
            </View>
            <View>
                {item.zones.length != 0 ?
                    <Text style={styles.timeStyle}>
                        {moment().tz(item.zones[0]).format("hh:mm")}
                        <Text style={styles.clocktype}>
                            {moment().tz(item.zones[0]).format("A")}
                        </Text>
                    </Text>
                    : null}
            </View>
        </View>
    )


    return (
        <View style={styles.conatiner}>
            <StatusBar backgroundColor={"#fffdf5"} barStyle="dark-content"  />
            <FlatList
                data={listZone}
                // data={listZone.filter((item)=>item.zones.length!=0)}
                renderItem={renderItem}
                ListHeaderComponent={()=>(
                    <View style={styles.headerView}>
                    <Image 
                        source={require("../assets/glob.png")}
                        style={styles.image}
                        resizeMode="contain"
                    />
                    <Text style={styles.timeZone}>
                        Timezone
                    </Text>
                </View>
                
                )}
                keyExtractor={(item, index) => (item + index).toString()}
                ItemSeparatorComponent={() => <View style={styles.line} />}
            />
        </View>
    )
}

export default TimeList

const styles = StyleSheet.create({
    conatiner: {
        flex: 1,
        backgroundColor: "#fffdf5",
    },
    timeZone:{
        fontSize:18,
        fontWeight:"700",
        color:"#000"
    },
    headerView:{
        marginHorizontal:30,
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
    },
    image:{
        width:150,
        height:100,
    },
    clocktype: {
        fontSize: 16
    },
    headerText: {
        fontSize: 16,
        fontWeight: "900",
        lineHeight: 30,
        color: "#000",
        letterSpacing: .8,
    },
    desText: {
        fontSize: 12,
        fontWeight: "600",
        width: "80%",
        color: "#818886",
        letterSpacing: .5,
    },
    line: {
        height: 1,
        width: "100%",
        backgroundColor: "#edece4",
    },
    timeStyle: {
        fontSize: 30,
        fontWeight: "bold",
        color: "#122123"
    },
    cardContainer: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 20,
        alignItems: "center",
        backgroundColor: "#fffdf5",
        paddingVertical: 20,
        // elevation: 5,
    },
})