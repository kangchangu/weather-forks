import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Loading from './components/Loading';
import MapLocation from './components/MapLocation';
import * as Location from "expo-location"; // 로케이션 컴포넌트
import * as firebase from "firebase";


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
