import React from 'react';
import {View, Text, Image, TouchableOpacity,ImageBackground,StyleSheet,ScrollView, Dimensions} from 'react-native';
import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/Entypo';
import {useState, useEffect, useRef} from 'react';
import { windowWidth } from '../utils/Dimensions';

Icon.loadFont();




export default function PopularSlider({navigation,data}) {
    const [loaded] = useFonts({
        InterR: require('../assets/fonts/Roboto-Medium.ttf'),
        RobotoB: require('../assets/fonts/Roboto-Bold.ttf'),
        LatoR: require('../assets/fonts/Lato-Regular.ttf'),
        LatoB: require('../assets/fonts/Lato-Bold.ttf'),
        LatoBL: require('../assets/fonts/Lato-Black.ttf'),
        InterR: require('../assets/fonts/Inter-Regular.ttf'),
        InterB: require('../assets/fonts/Inter-SemiBold.ttf'),
        
    
      });
      



  const [banActive, setbanActive] = useState (0);

  onchange = (nativeEvent) => {
    if (nativeEvent) {
      const slide= Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasure.width);
      if (slide !=banActive) {
        setbanActive(slide);
      }
  }
  }


  return (
    
     
        <ImageBackground
          source={data.mainimage}
          imageStyle={{borderRadius:10}}
          style={styles.wrap}>
          <View style={styles.image_details_view}>
            <Text style={{fontFamily: 'InterR', color:"#D9D9D9", maxWidth:'40%', fontSize:18, }}>{data.status} </Text>
            <Text style={{fontFamily: 'InterR', color:'#D9D9D9', maxWidth:'30%',fontSize:15,marginBottom:2, backgroundColor:'#BE4242', padding:2,borderRadius:4, textAlign: 'center'}}>{data.studio}</Text>
            <Text style={{fontFamily: 'InterB', color:'#D9D9D9', maxWidth:'100%', fontSize:19,marginBottom:8, }}>{data.title}</Text>
            </View>
            
         </ImageBackground>
      

  )
}
const styles = StyleSheet.create({

overlay: {
  ...StyleSheet.absoluteFillObject,
  backgroundColor: '(154,106,255,0.14)',
},
wrap: {
  width:287 ,
  height: 225,
  marginVertical:12,
  marginRight:18
},
image_details_view: {
    padding:12,
    position:'absolute',
    display:'flex',
    width:'100%',
    bottom:0,
    left:0,
    flexDirection:'column',
    fontFamily: 'InterB'
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(24, 24, 24, 0.43)',
  },
});