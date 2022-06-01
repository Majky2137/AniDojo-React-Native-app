import React from 'react';
import {View, Text, Image, TouchableOpacity,ImageBackground,StyleSheet} from 'react-native';
import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/Entypo';
Icon.loadFont();





  


export default function CarouselSlider({data}) {
    const [loaded] = useFonts({
        RobotoM: require('../assets/fonts/Roboto-Medium.ttf'),
        RobotoB: require('../assets/fonts/Roboto-Bold.ttf'),
        LatoR: require('../assets/fonts/Lato-Regular.ttf'),
        LatoB: require('../assets/fonts/Lato-Bold.ttf'),
        LatoBL: require('../assets/fonts/Lato-Black.ttf'),
        
    
      });
      
      if (!loaded) {
        return null;
      };

  return (
    <View>
        <ImageBackground
        source={data.mainimage}
        imageStyle={styles.ItemImage}
        style={
          styles.Item
        }>
        <View style={[styles.overlay,{borderRadius:10,}]} />
        </ImageBackground>
        
    </View>
  )
}

const styles = StyleSheet.create({
  Item: {
    width: 353,
    height: 210,
    resizeMode:'cover',
    alignItems:'center',
    flexDirection:'row',
    justifyContent:'center',
    backgroundColor:'#ECF6FF',
    borderRadius: 10,
    shadowColor: "#6F50DC",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity:  0.1,
    shadowRadius: 6.65,
    elevation: 6,
    marginVertical:18,
  },
  ItemImage: {
    borderRadius: 10,
    width:'100%'
  },

  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(154,106,255,0.14)',
  },
})