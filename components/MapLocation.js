import React from "react";
import { View, Text, StyleSheet } from 'react-native';
import MapView from 'react-native-maps';
import { LinearGradient } from 'expo-linear-gradient';
import { useEffect, useState } from 'react';

export default function MapLocation({latitude , longitude , speed}){
    useEffect(()=>{
       // 위치 정보 저장 처리
      console.warn(latitude , longitude , speed); 
    })
    return ( 
        <LinearGradient
        style={styles.lineGradient}
        colors={["#7F7FD5", "#86A8E7","#91EAE4"]}
        >
        <View style={styles.mapView}>
            <MapView />
        </View>
        <View>
            <Text>위도 : {latitude}</Text> 
            <Text>경도 : {longitude}</Text>
            <Text>속도 : {speed}</Text>
        </View>
        </LinearGradient>
    )
} 

const styles = StyleSheet.create({
    lineGradient : {
        flex : 1,
        justifyContent : "flex-end",
        paddingHorizontal : 30,
        paddingVertical : 100,
        backgroundColor : "#FDF6AA"
    },
    mapView : {
        flex: 1,
        width:500,
        height:500,
        backgroundColor : "#FDF6AA"
    },
    container : {
        flex : 1,
        justifyContent : "flex-end",
        paddingHorizontal : 30,
        paddingVertical : 100,
        backgroundColor : "#FDF6AA"
    },
    mainTest : {
        fontSize: 20
    }
});