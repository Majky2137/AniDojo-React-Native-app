import React from 'react';
import {View, Text, Image, TouchableOpacity,ImageBackground} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


export default function BannerSlider({data}) {
  return (
    <View>
        <ImageBackground 
        source={data.image}
        imageStyle={{ borderRadius: 10}}
        style={{height:200, width:350,  marginBottom:10,}}>
       </ImageBackground>
    </View>
  )
}

