import React from 'react';
import {View, Text, Image, TouchableOpacity,ImageBackground,StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


export default function BannerSlider({data}) {
  return (
    <View>
        <ImageBackground 
        source={data.thumbnail}
        imageStyle={styles.ItemImage}
        style={[
          styles.Item,
          {marginLeft: data.id === 'anime-1' ? 0 : 0},
        ]}>
       </ImageBackground>
    </View>
  )
}
const styles = StyleSheet.create({
Item: {
  width: 190,
  height: 250,
  justifyContent: 'flex-start',
  paddingHorizontal: 10,
  paddingVertical: 5,
  marginRight:20,
  opacity:0.9
},
ItemImage: {
  borderRadius: 10,
},


});