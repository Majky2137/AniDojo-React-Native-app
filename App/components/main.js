import React, { useState } from 'react';
import {StyleSheet, Text, Button ,Alert, View, TouchableOpacity,TextInput, ScrollView } from 'react-native';

import {LikeButton, RatingButton} from './Buttons.js';
import Video from './Video.js';
import TabViewExample from './Tabs.js';
import FrSliderData from '../model/data'







const Main = (items) => {
    return (
        
        <View style={styles.main}>
        <View style={styles.wrapper}>
            
            <View style={styles.desc_cont}>
            <Text style={styles.title}>{items.title}</Text>
            
          </View>
            
            <View style={styles.descwrapper}>
                    <ScrollView nestedScrollEnabled={true}>
                    <Text style={styles.info}>{items.description}</Text>
                    </ScrollView>   
            </View>  
        </View>
        <TabViewExample/>
        </View>    
    )
};




const styles= StyleSheet.create({

    main: {
        borderRadius:35,
        flexDirection:'column',
        backgroundColor:'#f8f9fa',
        height:'100%',
        position:'relative',
        top:'-2.35%',
        width:'100%',
        left:0,
        opacity:1,
        shadowColor: "#000",
        shadowOffset: {
	    width: 0,
	    height: 7,
                    },
        shadowOpacity: 0.41,
        shadowRadius: 9.11,
        elevation: 5,
        paddingHorizontal:20,
    },

    wrapper: {
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
    },
 
    descwrapper: {
        maxHeight:130,
        width:'100%',
        flexDirection:'column',
        alignItems:'baseline',
        borderRadius:10,
        position:'relative',
        
    },
  
    desc_cont:{
        flex: 1,
    flexDirection:'row',
    alignSelf:'flex-start'
    

    },

    title: {
        fontSize:22,
        paddingVertical:15,
        fontFamily:'LatoR',
        color:'#494949',
        
        opacity:0.9,
       
       
    },

    info: {
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
        position:'relative',
        textAlign:'justify',
        lineHeight:20,
        fontSize:16,
        fontFamily:'LatoR',
        color:'#bdbdbd',
        maxHeight:200,
        zIndex:99,
        paddingHorizontal:10, 
        textShadowColor: '#e0e0e0', textShadowOffset: { width: 0.1, height: 1.2 }, textShadowRadius: 1,
      
    },

    

  
     
});

export default Main;