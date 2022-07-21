import React from 'react'
import{ useState } from 'react';
import {StyleSheet, Text, Button ,Alert, View, TouchableOpacity, onClick} from 'react-native';
import {TextInput, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';


const LikeButton = () => {
        const [liked, setLiked] = useState();
   
        return (
          
            <TouchableOpacity onPress={() => setLiked((isLiked) => !isLiked)}>
            <Icon style={styles.heart} name={liked ? "ios-heart-dislike-circle" : "ios-heart-circle-outline"}
            color={liked ? "grey" : "#d64161"}/>
         </TouchableOpacity>
        )
        
      };

      const FollowButton = () => {
        const [followed, setFollowed] = useState();
   
        return (
          
            <TouchableOpacity onPress={() => setFollowed((isFollowed) => !isFollowed)}>
              <View style={styles.button} backgroundColor={followed ? "grey" : "#BE4242"}>
                  <Text style={styles.but_title}>{followed ? "UnFollow" : "Follow"}</Text>
                  </View>
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

    button: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 12,
      paddingHorizontal: 32,
      margin:10,
      borderRadius: 4,
      fontFamily:'InterB',
      letterSpacing: 0.5,
      backgroundColor: 'rgba(24, 24, 24, 0.43)',
    },
    but_title: {
      fontSize: 16,
      lineHeight: 21,
      fontFamily:'InterB',
      letterSpacing: 0.5,
      color: '#D9D9D9',
    },
});

export {LikeButton,FollowButton};










