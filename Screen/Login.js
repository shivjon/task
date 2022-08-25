import { StyleSheet, Text, TextInput, ToastAndroid, TouchableOpacity, View } from 'react-native'
import React, { useState , useEffect} from 'react'
import Button from '../components/Button';
import { useDispatch, useSelector } from 'react-redux';
import * as authAction from "../redux/actions/authAction";

const Login = (props) => {
    const dispatch = useDispatch();
    const islogin =useSelector(state => state.auth.isLogin);
    const [account, setaccount] = useState("");
    const [passowrd, setpassowrd] = useState("");

    useEffect(() => {
        console.log("res", islogin);
        if(islogin){
           props.navigation.navigate("TimeList");
           setaccount("");
           setpassowrd("");
        }
    }, [islogin])  

    const onSubmit = () =>{
        if(account.trim() == ""){
            alert("Please enter account.");
            return;
        }else if(passowrd.trim() == ""){
            alert("Please enter passowrd.")
            return;   
        }
        dispatch(authAction.Login(account, passowrd)).then((result) => {
            if(result.code != 0){
                ToastAndroid.show("Login Fail.", ToastAndroid.SHORT);
            }
        })
    }

    return (
        <View style={styles.container}>
            <Text style={styles.textLogin}>
                Login
            </Text>
            <View style={styles.inputContainer}>
            <TextInput 
                placeholder='Account'
                value={account}
                onChangeText={(t)=>setaccount(t)}
                style={styles.inputStyle}
            />
            </View>
            <View style={styles.inputContainer}>
            <TextInput 
                placeholder='Password'
                value={passowrd}
                onChangeText={(t)=>setpassowrd(t)}
                style={styles.inputStyle}
            />
            </View>
            <TextInput />
            <Button name="Login" onPress={onSubmit} />
        </View>
    )
}

export default Login

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#fff",
        alignItems:"center", justifyContent:"center",
        
    },
    textLogin:{
        fontSize:30,
        fontWeight:"900",
        color:"#000",
        marginBottom:20,
    },
    inputContainer:{
        borderWidth:1,
        borderRadius:20,
        width:"80%",
        height:50,
        padding:0,
        paddingHorizontal:20,
        justifyContent:"center",
        marginVertical:10,
    },
    inputStyle:{
        padding:0,
        height:"100%",
        width:"100%",
        // backgroundColor:"#000",
        alignItems:"center",
        justifyContent:"center",
    },
})