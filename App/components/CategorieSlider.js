import React from 'react';
import {View, Text, Image, TouchableOpacity,ImageBackground,StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function CatSlider({data})  {
    return (
      <View>
          <Image 
          source={data.image}
          style={[
            styles.Item,
            {marginLeft: data.id === 'catego-1' ? 0 : 0},
          ]}/>
           <Text style={{fontFamily:'LatoR',fontSize:16}}>{data.title}</Text>
      </View>
    )
  }
  
  const styles = StyleSheet.create({
    Item: {
      width: 120,
      height: 160,
      justifyContent: 'flex-start',
      paddingHorizontal: 10,
      paddingVertical: 5,
      marginRight:20,
      borderRadius:10,
      opacity:0.9
    },
  
    });