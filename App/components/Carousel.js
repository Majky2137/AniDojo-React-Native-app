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
          <View style={styles.image_details_view}>
            <Text style={{fontFamily: 'RobotoM', color:"#02b97f", maxWidth:'40%', fontSize:18, }}>{data.status} </Text>
            <Text style={{fontFamily: 'RobotoM', color:'white', maxWidth:'40%',fontSize:15,marginBottom:2, }}>{data.studio}  <Icon style={{ marginLeft:8 }} name="video" size={18} color={data.color} /></Text>
            <Text style={{fontFamily: 'RobotoM', color:'#ECF6FF', maxWidth:'100%', fontSize:19,marginBottom:8, }}>{data.title}</Text>
            </View>
   
        </ImageBackground>
        
    </View>
  )
}

const styles = StyleSheet.create({
  Item: {
    width: 353,
    height: 210,
    resizeMode:'cover',
    alignItems:'flex-end',
    flexDirection:'row',
    justifyContent:'center',
    backgroundColor:'#ECF6FF',
    borderRadius: 10,
    shadowColor: "#02b97f",
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
  image_details_view: {
    padding:12,
    position:'relative',
    display:'flex',
    width:'100%',
    bottom:0,
    left:0,
    flexDirection:'column',
    fontFamily: 'RobotoM'
  },

  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(24, 24, 24, 0.43)',
  },
})