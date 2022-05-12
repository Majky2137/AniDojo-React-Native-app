import React from 'react';
import {View, Text, Image, TouchableOpacity,ImageBackground} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function CatSlider({data})  {
    return (
      <View>
          <Image 
          source={data.image} 
          style={{height:165, width:120, borderRadius:10,  marginBottom:10,}}/>
           <Text style={{fontFamily:'LatoR',fontSize:16}}>{data.title}</Text>
      </View>
    )
  }
  