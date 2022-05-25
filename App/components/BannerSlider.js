import React from 'react';
import {View, Text, Image, TouchableOpacity,ImageBackground,StyleSheet} from 'react-native';
import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/Entypo';
Icon.loadFont();




export default function BannerSlider({data}) {
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
    <View >
        <ImageBackground 
        source={data.thumbnail}
        imageStyle={styles.ItemImage}
        style={[
          styles.Item,
          {marginLeft: data.id === '1' ? 0 : 0},
        ]}>
          <View style={[styles.overlay,{borderRadius:10,}]} />
          <Text style={[styles.ItemTitle,{overflow:'hidden'}]}>{data.maintitle}</Text>
          
          <View style={styles.ItemTypeWrapper}>
            <Icon name="video" size={18} color={'#9A6AFF'} />
            <Text style={styles.ItemType}>{data.studio}</Text>
          </View>
          
       </ImageBackground>
       
    </View>
  )
}
const styles = StyleSheet.create({
Item: {
  width: 190,
  height: 250,
  justifyContent: 'flex-end',
  paddingHorizontal: 10,
  paddingVertical: 5,
  marginRight:20,
  backgroundColor:'#ECF6FF',
  opacity:0.9,
  borderRadius: 10,
  shadowColor: "#9A6AFF",
  shadowOffset: {
    width: 0,
    height: 6,
  },
  shadowOpacity:  0.1,
  shadowRadius: 6.65,
  elevation: 6,
  marginVertical:10,
},
ItemImage: {
  borderRadius: 10,
},

ItemTitle: {
  fontFamily: 'RobotoM',
  fontSize: 18,
  color: '#E3E3E3',
  marginLeft:5,
  maxWidth:105,
  maxHeight:70,
  overflow:'hidden',
  justifyContent:'space-between'
  
},

ItemTypeWrapper: {
  flexDirection: 'row',
  alignItems: 'center',
  marginTop: 5,
  marginBottom:7,
  marginLeft:5,
  

  
},
ItemType: {
  marginLeft: 5,
  fontFamily: 'LatoB',
  fontSize: 14,
  color:'#E3E3E3',
  
},

overlay: {
  ...StyleSheet.absoluteFillObject,
  backgroundColor: 'rgba(38,62,62,0.40)',
},


});