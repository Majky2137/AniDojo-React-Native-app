import React from 'react';
import {View, Text, Image, TouchableOpacity,ImageBackground,StyleSheet,ScrollView, Dimensions} from 'react-native';
import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/Entypo';
import {useState, useEffect, useRef} from 'react';
import { windowWidth } from '../utils/Dimensions';

Icon.loadFont();




export default function HeroSlider({navigation,data}) {
  const [loaded] = useFonts({
    RobotoM: require('../assets/fonts/Roboto-Medium.ttf'),
    RobotoB: require('../assets/fonts/Roboto-Bold.ttf'),
    LatoR: require('../assets/fonts/Lato-Regular.ttf'),
    LatoB: require('../assets/fonts/Lato-Bold.ttf'),
    LatoBL: require('../assets/fonts/Lato-Black.ttf'),
    

  });
  



  const [banActive, setbanActive] = useState (0);

  onchange = (nativeEvent) => {
    if (nativeEvent) {
      const slide= Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasure.width);
      if (slide !=banActive) {
        setbanActive(slide);
      }
  }
  }


  return (
    
     
        <ImageBackground
          source={data.mainimage}
          imageStyle={{ alignitems:'center',justifyContent:'center',borderRadius:10,margin:0,}}
          style={styles.wrap}>
          <View style={[styles.overlay,{borderRadius:10,}]} />
         </ImageBackground>
      

  )
}
const styles = StyleSheet.create({

overlay: {
  ...StyleSheet.absoluteFillObject,
  backgroundColor: '(154,106,255,0.14)',
},
wrap: {
  width:353.5 ,
  height: 200,
  marginVertical:12
}


});