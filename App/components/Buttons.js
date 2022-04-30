import React from 'react'
import{ useState } from 'react';
import {StyleSheet, Text, Button ,Alert, View, TouchableOpacity, } from 'react-native';
import {TextInput, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';


const LikeButton = () => {
        const [liked, setLiked] = useState(null);
        return (
            <TouchableOpacity onPress={() => setLiked((isLiked) => !isLiked)}>
            <Icon style={styles.heart} name={liked ? "heart-circle-sharp" : "heart-dislike-circle"}
            color={liked ? "red" : "#64b5f6"}/>
         </TouchableOpacity>
        )
      };


 
const RatingButton = () => {
        const [liked, setLiked] = useState(null);
        return (
            <TouchableOpacity onPress={() => setLiked((isLiked) => !isLiked)}>
            <Icon style={styles.heart} name={liked ? "heart-circle-sharp" : "heart-dislike-circle"}
            color={liked ? "red" : "#64b5f6"}/>
         </TouchableOpacity>
        )
      };

      const styles= StyleSheet.create({
      heart: {    
        opacity:0.7,
        fontSize:65,
        textShadowColor: '#e0e0e0', textShadowOffset: { width: 0, height: 3 }, textShadowRadius: 3,
    },
});


export {LikeButton, RatingButton};










