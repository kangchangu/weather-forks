import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Loading from './components/Loading';
import MapLocation from './components/MapLocation';
import * as Location from "expo-location"; // 로케이션 컴포넌트
import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA7fihTtbRkSoxk0zgDuUUZu-yKyvme6P4",
  authDomain: "test-3ea83.firebaseapp.com",
  databaseURL: "https://test-3ea83.firebaseio.com",
  projectId: "test-3ea83",
  storageBucket: "test-3ea83.appspot.com",
  messagingSenderId: "644634267449",
  appId: "1:644634267449:web:88bf81880fefbaf21be2e8",
  measurementId: "G-D8X5X3J57X"
};
if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}

export default class extends React.Component{

  state = { 
    isLoading : true ,  
    latitude : null,
    longitude : null,
    speed : null
  };

  getLocation = async() => { 
    await Location.requestPermissionsAsync();
    const {
      coords : {
        latitude , longitude , speed 
      }
    } = await Location.getCurrentPositionAsync();
    this.setState({
      isLoading:false,
      latitude : latitude ,
      longitude : longitude , 
      speed : speed
    })
    this.saveLocation(latitude,longitude, speed);
  } 

  saveLocation = (latitude,longitude, speed ) => {
    firebase.database().ref('location/').push({
      latitude:latitude ,
      longitude: longitude,
      speed : speed
      
    }).then((data) => { 
      console.log('data', data);
    }).catch((error) => {
      console.log("error" , error);
    }); 
  }  
  componentDidMount() {
    
    this.getLocation();
    
  }
  
  render(){  
    const { isLoading , latitude , longitude , speed } = this.state;
 
    return isLoading ? ( <Loading/> ): (<MapLocation latitude={latitude} longitude={longitude} speed={speed} />);
    
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 100,
    paddingVertical:100
  }
});
