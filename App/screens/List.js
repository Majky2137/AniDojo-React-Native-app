import React, {Component, useState} from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView, StyleSheet, Text, Button ,Alert, View, Image, ImageBackground,Pressable,TouchableOpacity,TouchableHighlight ,FlatList, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import { useFonts } from 'expo-font';
import { FollowButton } from '../components/Buttons';
import UserList from '../components/UserList';
import {FrSliderData} from '../model/data';
import AiringList from '../components/airing';
import {useRoute} from '@react-navigation/native';
import ListMain from '../components/ListMain'


Icon.loadFont();

export default function List ({navigation}) {



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
      <SafeAreaView style={styles.wrapper}>
      <ScrollView style={styles.container}>
      <View style={styles.user_cont}>
          <TouchableOpacity onPress={()=>navigation.navigate('Profile')}>
              <ImageBackground 
              source={require('../assets/images/user-prof-pic2.jpg')} 
              style={styles.user_image}  
              imageStyle={{borderRadius:50,borderColor:'#6F50DC',borderWidth:1,}}
              />
              </TouchableOpacity>
             
              <TouchableOpacity onPress={()=>navigation.navigate('Profile')}>
              <Icon style={{ fontSize: 30,color:'#6F50DC',paddingTop:10,}} name={"notifications-outline"} />
              </TouchableOpacity>
          </View>
  
          <View style={styles.search_container}>
            <Icon style={{marginRight:5,top:3,fontFamily:'LatoR'}} name="search-outline" size={20} color='#6F50DC'  />
            <TextInput placeholderTextColor={'#E3E3E3' }placeholder='Search' style={{width:'100%',color:'#263E3E',fontFamily:'LatoR'}}/>
          </View>

        

          <View style={{flex: 1,
          marginBottom:105,
    flexDirection:'row',
    justifyContent: 'center',
    maxWidth:'100%',
    marginTop:10,
    padding:8,       
    flexWrap:'wrap',}}>
          {
          FrSliderData.map(item => (
            <TouchableOpacity onPress={()=>navigation.navigate('Subsite', {item:item})}>
          <ListMain key={item.id}
              data={item}/>
                  </TouchableOpacity>
              ))}
           
              </View>

         
              </ScrollView>
        
        </SafeAreaView>
    )
  }


const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    height:'auto',
    zIndex:-1,
    backgroundColor:'#1E2029',
  },

  container: {
    zIndex:-1,
    position:'relative',
    width:'100%',
    
  },


  user_cont: {
    flex: 1,
    flexDirection:'row',
    justifyContent:'space-between',
    marginBottom:20,
    padding:20,
  },
  user_image: {
    width:50,
    height:50,
  },

  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(30,32,41,0.46)',
    borderBottomLeftRadius:45,
    borderBottomRightRadius:45
},

  image: {
    width:'100%',
    height:390,
    position:"relative",
    zIndex:-1,
    
  
},




search_container:{
  flexDirection:'row',
  justifyContent:'space-between',
  borderColor:'#6F50DC',
  borderWidth:0.3,
  borderRadius:10,
  paddingHorizontal:10,
  paddingVertical:10,
  marginVertical:20,
  width:'85%',
  alignSelf:'center',
  },


})