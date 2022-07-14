import * as React from 'react';
import { View, StyleSheet, Dimensions, StatusBar,SectionList,Animated, TouchableOpacity,Text } from 'react-native';
import{ useState, useCallback, useRef,  } from 'react';
import YoutubePlayer from "react-native-youtube-iframe";
import Video from './Video.js';

import Constants from 'expo-constants';


const Tabs = () => {
  const [toggleState, setToggle] = useState(1);

  const initTab = (index) => {
    setToggle(index);
  };

  return (
    <View style={styles.item_tabs_container}>
      <View style={styles.item_tabs}>
        <TouchableOpacity >
          <Text style={toggleState === 1 ? [styles.item_tabs, styles.item_tabs_text_active] : styles.item_tabs} onPress={() => initTab(1)}>Episodes</Text>
        </TouchableOpacity>
        <TouchableOpacity >
        <Text style={toggleState === 2 ? [styles.item_tabs, styles.item_tabs_text_active] : styles.item_tabs} onPress={() => initTab(2)}>Characters</Text>
        </TouchableOpacity>
        <TouchableOpacity >
         <Text style={toggleState === 3 ? [styles.item_tabs, styles.item_tabs_text_active] : styles.item_tabs} onPress={() => initTab(3)}>Related</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.item_tab_results}>
        <View
          style={toggleState === 1 ? styles.items & styles.active_item : styles.items}>
<Video style={[styles.scene, { backgroundColor: '#02b97f' }]} episode= "Trailer"/> 
        </View>

        <View
          style={toggleState === 2 ? styles.items & styles.active_item : styles.items}
        >

        </View>

        <View
          style={toggleState === 3 ? styles.items & styles.active_item : styles.items}
        >

        </View>
      </View>

    </View>
  );
}

export default Tabs;

const styles = StyleSheet.create({

  item_tab_results: {
    display:'flex',
    marginTop:2,
    height:'100%',
},

item_tabs_container: {
    height:'100%',
    marginTop:20,
    minHeight:300,
},
item_tabs: {
    display: 'flex',
    flexDirection:'row',
    height:60,
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 17,
    padding: 12,
    color:'#E3E3E3'
},
items: {
  display:'none',
  flexDirection: 'column',
  borderRadius: 15,
  backgroundColor: '#1a1a1a31',
  width: '100%',
  maxHeight: 60,
  overflow: 'scroll',
},
active_item: {
  display: 'block'
},
item_tabs_text_active: {
  color:'#02b97f',
}
});
