import { Text, StyleSheet, View , Button, TouchableOpacity} from 'react-native'
import React, { Component } from 'react'

import{ useState, useCallback, useRef,  } from 'react';



function Rating() {

    const [count, setCount] = useState(0);
  
    function decrementCount() {
      setCount(prevCount => prevCount - 1)
    }

    function incrementCount() {
        setCount(prevCount => prevCount + 1)
      }
    return (
        <View style={{flex:1, flexDirection:'row',}}>
        <TouchableOpacity onPress= {decrementCount}> <Text>- </Text></TouchableOpacity>
        <Text>{count}</Text>
        <TouchableOpacity onPress= {incrementCount}><Text> + </Text></TouchableOpacity>
        </View>
    )
    };
  


const styles = StyleSheet.create({})

export default Rating;