import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const Button = ({name, onPress}) => {
    return (
        <TouchableOpacity style={styles.button} onPress={()=>onPress()}>
            <Text style={styles.font}>
                {name}
            </Text>
        </TouchableOpacity>
    )
}

export default Button

const styles = StyleSheet.create({
    button:{
        width:"80%",
        height:50,
        alignSelf:"center",
        borderRadius:30,
        backgroundColor:"#800080",
        alignItems:"center",
        justifyContent:"center",
    },
    font:{
        fontSize:16,
        fontWeight:"700",
        color:"#ffff"
    },
})