import React, {Component, useState} from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView, StyleSheet, Text, Button ,Alert, View, Image, ImageBackground,Pressable,TouchableOpacity,TouchableHighlight ,FlatList, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import { useFonts } from 'expo-font';
import { FollowButton } from '../components/Buttons';
import {useRoute} from '@react-navigation/native';

Icon.loadFont();


  

export default function UserList({navigation,data}) {
    

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
      
    <View style={styles.ListWrapper}>
        
        <View style={styles.ListItem}>
        <ImageBackground 
        source={data.mainimage}
        imageStyle={styles.ItemImage}
        style={
          {width: '100%', height: '100%',}
        }>
        <View style={[styles.overlay,{borderRadius:10,}]} />
       </ImageBackground>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({

wrapper: {
     padding:20,
     height:'auto',
     zIndex:-1,
    },

ListItem: {
        width: 105,
        height: 150,
        margin:10,
        backgroundColor:'#D9D9D9',
        opacity:0.9,
        borderRadius: 10,
        shadowColor: "#BE4242",
        shadowOffset: {
          width: 0,
          height: 6,
        },
        shadowOpacity:  0.1,
        shadowRadius: 6.65,
        elevation: 6,
},

ItemImage: {
    borderRadius: 10,
  },
  

  
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(24, 24, 24, 0.43)',
  },




})