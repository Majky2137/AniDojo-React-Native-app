import React from 'react'
import{ useState } from 'react';
import {StyleSheet, Text, Button ,Alert, View, TouchableOpacity, } from 'react-native';
import {TextInput, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';


const LikeButton = () => {
        const [liked, setLiked] = useState(null);
        return (
            <TouchableOpacity onPress={() => setLiked((isLiked) => !isLiked)}>
            <Icon style={styles.heart} name={liked ? "ios-heart-circle-outline" : "ios-heart-dislike-circle"}
            color={liked ? "#d64161" : "grey"}/>
         </TouchableOpacity>
        )
      };


 


      const styles= StyleSheet.create({
      heart: {    
        position:'absolute',
        fontSize:55,
        alignSelf:'flex-end',
        bottom:-1.5
    },
});

export {LikeButton};










