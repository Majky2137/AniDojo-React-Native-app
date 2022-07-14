import React from 'react';
import {View, Text, Image, TouchableOpacity,ImageBackground,StyleSheet,ScrollView} from 'react-native';
import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/Entypo';
import { windowWidth } from '../utils/Dimensions';

Icon.loadFont();




export default function AiringList({navigation,data}) {
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



    if (data.status !== "Airing") {
      return AiringList;
    }
    


  return (
 
    <View style={{
      flexDirection:'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 30,
     
      
      
    }}>
      <View style={{flexDirection: 'row', alignItems: 'center', flex: 1, backgroundColor: 'rgba(30,32,41,0.87)', maxHeight:100, borderRadius:10, padding:10,}}>
        
        <ImageBackground
          source={data.mainimage}
          imageStyle={{ borderRadius:10}}
          style={{width: 80, height: 80, borderRadius: 10, marginRight: 20}}
        >
          <View style={[styles.overlay,{borderRadius:10,}]} />
         </ImageBackground>
        <View style={{minWidth:220,maxHeight:80}} >
          <Text
            style={{
              color: '#E3E3E3',
              fontFamily: 'LatoB',
              fontSize: 15,
              maxWidth:170
            }}>
            {data.title}
          </Text>
          <Text
            numberOfLines={1}
            style={{
              color: '#02b97f',
              fontFamily: 'RobotoM',
              fontSize: 14,
           
            }}>
            {data.status}
          </Text>
        </View>
      </View>
        
    </View>

  )
}
const styles = StyleSheet.create({

overlay: {
  ...StyleSheet.absoluteFillObject,
  backgroundColor: '(154,106,255,0.14)',
},


});