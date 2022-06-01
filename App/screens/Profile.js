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


Icon.loadFont();

export default function Profile ({navigation}) {



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
      <View style={styles.wrapper}>
      <ScrollView style={styles.container}>
        <View>
      <ImageBackground source={require('../assets/images/home/cat3.jpg')} resizeMode="cover" imageStyle={{borderBottomLeftRadius:45,borderBottomRightRadius:45}} blurRadius={3} style={styles.image}>
        <View style={styles.overlay} />
          <View style={styles.buttons}>
             <TouchableOpacity style={{top:30, paddingHorizontal:25,opacity:0.7,}} onPress={() => navigation.goBack('HomeScreen')}>
                  <Entypo style={{ fontSize: 20,color:'white', backgroundColor:'grey',borderRadius:10,padding:10,}} name={"chevron-thin-left"} />
              </TouchableOpacity>
              <TouchableOpacity style={{top:30,  paddingHorizontal:25,opacity:0.7,}} >
                  <Icon style={{ fontSize: 20,color:'white', backgroundColor:'grey',borderRadius:10,padding:10,}} name={"settings-outline"} />
              </TouchableOpacity>
          </View>

        <View style={{flex:1, flexDirection:'column'}}>
          <View style={styles.user_cont}>
              <ImageBackground 
              source={require('../assets/images/user-prof-pic2.jpg')} 
              style={styles.user_image}  
              imageStyle={{borderRadius:50, borderColor:'#6F50DC',borderWidth:2,}}
              />
          </View>

        <View style={styles.info_cont}>
                <View style={{flexDirection:'column'} }>
                  <Text style={{fontFamily:'LatoR',fontSize:17,color:'#FFFFFF',padding:10,marginHorizontal:4, borderRadius:5,textAlign:'center'}}>678</Text>
                  <Text style={{fontFamily:'LatoR',fontSize:15,padding:2,color:'#C8C8C8',textAlign:'center', margin:6,}}>Following</Text>
                </View>

                <View style={{flexDirection:'column'} }>
                  <Text style={{fontFamily:'LatoR',fontSize:17,color:'#FFFFFF',padding:10,marginHorizontal:4, borderRadius:5,textAlign:'center'}}>95</Text>
                  <Text style={{fontFamily:'LatoR',fontSize:15,padding:2,color:'#C8C8C8',textAlign:'center', margin:6,}}>Planned</Text>
                </View>

                <View style={{flexDirection:'column'} }>
                  <Text style={{fontFamily:'LatoR',fontSize:17,color:'#FFFFFF',padding:10,marginHorizontal:4, borderRadius:5,textAlign:'center'}}>123</Text>
                  <Text style={{fontFamily:'LatoR',fontSize:15,padding:2,color:'#C8C8C8',textAlign:'center', margin:6,}}>Watched</Text>
                </View>
          </View>
                <View style={styles.buttons_container}>
                  <TouchableOpacity style={styles.button}>
                  <Text style={styles.but_title}>Chat</Text>
                  </TouchableOpacity>
                 <FollowButton></FollowButton>
                </View>
            </View>
        </ImageBackground>
          </View>
          <View style={styles.search_container}>
            <Icon style={{marginRight:5,top:3,fontFamily:'LatoR'}} name="search-outline" size={20} color='#6F50DC'  />
            <TextInput placeholderTextColor={'#E3E3E3' }placeholder='Search' style={{width:'100%',color:'#263E3E',fontFamily:'LatoR'}}/>
          </View>

          <View style={{
          
            flexDirection:'row',
            justifyContent:'space-between',
            paddingHorizontal:20,
            }}>
            <Text style={{fontFamily:'RobotoM',fontSize:18, color:'#E3E3E3' }}>List of yours </Text>
          
          </View>

          <View style={{flex: 1,
          marginBottom:105,
    flexDirection:'row',
    justifyContent: 'center',
    maxWidth:'100%',
    marginTop:10,
  
    flexWrap:'wrap',}}>
          {
          FrSliderData.map(item => (
            <TouchableOpacity onPress={()=>navigation.navigate('Subsite', {item:item})}>
          <UserList key={item.id}
              data={item}/>
                  </TouchableOpacity>
              ))}
           
              </View>

         
      </ScrollView>
      </View>
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
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center'
  },

  info_cont: {
    flexDirection:'row',
    justifyContent:'center',
    position:'relative',
    marginVertical:10,
 
  },

  buttons_container : {
      flexDirection: 'row',
      justifyContent:'center',
 
  },

  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    margin:10,
    borderRadius: 4,
    backgroundColor: 'rgba(30,32,41,0.67)',
  },
  but_title: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
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

  user_image: {
    width:90,
    height:90,
    position:'relative',
    marginBottom:10,
    left:2
  

},

  buttons: {
    flexDirection:'row',
    justifyContent:'space-between',
    position:'relative',
    paddingBottom:40,
    paddingTop:10,
    marginBottom:10,
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