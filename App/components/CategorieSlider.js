import React from 'react';
import {View, Text, Image, TouchableOpacity,ImageBackground,StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font';
import { useState } from 'react';

export default function CatSlider({data})  {
  const [loaded] = useFonts({
    RobotoM: require('../assets/fonts/Roboto-Medium.ttf'),
    RobotoB: require('../assets/fonts/Roboto-Bold.ttf'),
    LatoR: require('../assets/fonts/Lato-Regular.ttf'),
    LatoB: require('../assets/fonts/Lato-Bold.ttf'),
    LatoBL: require('../assets/fonts/Lato-Black.ttf'),
    

  });
  
  if (!loaded) {
    return null;
  }



    return (
      <View style={{marginVertical:12,}}>
        <TouchableOpacity >
      <View style={[ styles.Item, { borderRadius:4,marginLeft: data.id === '1' ? 6: 0, backgroundColor: data.id === '1' ? '#BE4242' : 'transparent' }]}>
          <Text style={{fontFamily: 'InterR',fontSize:16,opacity:1,textAlign:'center',color:'#D9D9D9'}}>{data.title}</Text> 
      </View>
      </TouchableOpacity>
      </View>
    )
  }
  
  const styles = StyleSheet.create({
    Item: {
      width: 100,
      height: 45,
      justifyContent: 'center',
      paddingHorizontal: 5,
      alignItems:'center',
      marginRight:20,
      textAlign:'center',
      borderColor:'#BE4242',
      borderWidth:0.3,
      backgroundColor:'transparent',
      
    },

    ItemImage: {
      borderRadius: 10,
    },

 
  
 
  
    });