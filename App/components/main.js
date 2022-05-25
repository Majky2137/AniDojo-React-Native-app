import React, { useState } from 'react';
import {StyleSheet, Text, Button ,Alert, View, TouchableOpacity,TextInput, ScrollView } from 'react-native';

import {LikeButton, RatingButton} from './Buttons.js';
import Video from './Video.js';
import Tabs from './Tabs.js';
import FrSliderData from '../model/data'







const Main = (items) => {
    return (
        
        <View style={styles.main}>
        <View style={styles.wrapper}>
        <View style={styles.stat_cont}>
        <Text style={styles.upheading}>{items.status}</Text>
        </View>
        <LikeButton/>
            <View style={styles.desc_cont}>
                
            <View style={styles.tit}>
                
            <Text style={[styles.heading,{color:items.color}]}>{items.maintitle}</Text>
          <Text style={styles.heading2}>{items.title}</Text>
          </View>
        
          </View>
            <View style={styles.descwrapper}>
                    <ScrollView nestedScrollEnabled={true}>
                    <Text style={styles.info}>{items.description}</Text>
                    </ScrollView>   
            </View>  
        </View>
        <Tabs/>
        </View>    
    )
};




const styles= StyleSheet.create({

    main: {
      
        flexDirection:'column',
        backgroundColor:'#1E2029',
        height:'100%',
        position:'relative',
        width:'100%',
        left:0,
        opacity:1,
        paddingHorizontal:25,
        position:'relative'
    },

    wrapper: {
        flexDirection:'column',
        
    },
 
    descwrapper: {
        maxHeight:130,
        minHeight:130,
        width:'100%',
        flexDirection:'column',
        alignItems:'baseline',
        borderRadius:10,
        position:'relative',
        
    },
  
    desc_cont:{
        flex: 1,
        flexDirection:'row',
        justifyContent:'space-between',
        marginBottom:30,
    },
    stat_cont:{
        flex: 1,
        flexDirection:'row',
        justifyContent:'space-between',

    },

    
    
    upheading: {
        marginTop:20,
        fontSize:16,
        fontWeight:'bold',
        marginBottom:13,
        color:'#FFFFFF',
        backgroundColor:'#9A6AFF',
        paddingHorizontal:10,
        paddingVertical:2,
        borderRadius:12,
        position:'relative',
        textShadowColor: '#000', textShadowOffset: { width: 0.5, height: 0.5 }, textShadowRadius: 0.2,
  },

  heading: {
    fontSize:25,
    textAlign:'left',
    fontWeight:'bold',
    marginBottom:4,
    color:'#FFF',
    textShadowColor: '#000', textShadowOffset: { width: 0.5, height: 1 }, textShadowRadius: 0.01,
  
  },


  heading2: {
    fontSize:18,
    textAlign:'left',
    fontWeight:'bold',
    marginBottom:0,
    maxWidth:230,
    color:'#bdbdbd',
   
  },

    info: {
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
        position:'relative',
        textAlign:'justify',
        lineHeight:24,
        fontSize:16,
        fontFamily:'LatoR',
        color:'grey',
        zIndex:99,
    
      
    },

    

  
     
});

export default Main;