import React from 'react';
import {View, Text, Image, TouchableOpacity,ImageBackground,StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font';


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
      <View >
      <View
  
      imageStyle={styles.ItemImage} style={[
        styles.Item,
        { borderRadius:10,marginLeft: data.id === '1' ? 7 : 0},
     ]}>
       <View style={styles.overlay} />
          <Text style={{fontFamily: 'RobotoM',fontSize:16,opacity:1,textAlign:'center',color:'white'}}>{data.title}</Text> 
      </View>
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
      borderColor:'#B3BA91',
      borderWidth:0.3,
    },

    ItemImage: {
      borderRadius: 10,
    },

    overlay: {
      ...StyleSheet.absoluteFillObject,
      backgroundColor: '#B3BA91',
      borderRadius:10
    },
  
 
  
    });