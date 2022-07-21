import React, { useState } from 'react';
import {StyleSheet, Text, Button ,Alert, View, TouchableOpacity,TextInput, ScrollView } from 'react-native';

import {LikeButton, RatingButton} from './Buttons.js';
import Video from './Video.js';
import Tabs from './Tabs.js';
import FrSliderData from '../model/data'
import Rating from './rating.js';







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
        <View style={styles.item_page_container}>
        <Tabs/>
        </View>
        </View>    
    )
};




const styles= StyleSheet.create({

    main: {
      
        flexDirection:'column',
        backgroundColor:'#1E1E1E',
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

    item_page_container: {
        margin: 0,
        minWidth: 320,
        width: '100%',
        minHeight: 90,
        position: 'relative',
    },
    
    upheading: {
        marginTop:20,
        fontSize:16,
        fontWeight:'bold',
        marginBottom:13,
        color:'#D9D9D9',
        backgroundColor:'#BE4242',
        paddingHorizontal:10,
        paddingVertical:2,
        borderRadius:12,
        position:'relative',
        textShadowColor: '#000', textShadowOffset: { width: 0.5, height: 0.5 }, textShadowRadius: 0.2,
  },

  heading: {
    fontSize:22,
    textAlign:'left',
     fontFamily:'InterB',
    marginBottom:4,
    color:'#D9D9D9',
    textShadowColor: '#000', textShadowOffset: { width: 0.5, height: 1 }, textShadowRadius: 0.01,
  
  },


  heading2: {
    fontSize:16.5,
    textAlign:'left',
    fontFamily:'InterB',
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
       fontFamily:'InterR',
        color:'grey',
        zIndex:99,
    
      
    },

    

  
     
});

export default Main;