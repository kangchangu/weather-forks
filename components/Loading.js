import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { StyleSheet, Text, View, StatusBar } from "react-native";

export default function Loading() {
    return ( 
        <LinearGradient
            colors={["#FC354C", "#0ABFBC"]}
            style={styles.container}
        >
        <View>
            <StatusBar/>
            <Text style={styles.text}>위치 정보를 확인중 입니다..</Text>
        </View>
        </LinearGradient>
    );
 }

const styles = StyleSheet.create({
    container : {
        flex : 1,
        justifyContent : "flex-end",
        paddingHorizontal : 30,
        paddingVertical : 100,
        backgroundColor : "#FDF6AA"
    },

    text : {
        color : "white",
        fontSize : 25
    }
});