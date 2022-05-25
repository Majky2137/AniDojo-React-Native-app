import * as React from 'react';
import { View, StyleSheet, Dimensions, StatusBar,SectionList,Animated, TouchableOpacity } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import{ useState, useCallback, useRef,  } from 'react';
import YoutubePlayer from "react-native-youtube-iframe";
import Video from './Video.js';

import Constants from 'expo-constants';


const FirstRoute = () => (
  
  <Video style={[styles.scene, { backgroundColor: '#673ab7' }]} episode= "Trailer"/> 
);

const SecondRoute = () => (
  <View style={[styles.scene, { backgroundColor: '#673ab7' }]} />
);
const ThirdRoute = () => (
  <View style={[styles.scene, { backgroundColor: '#ff4081' }]} />
);

const initialLayout = { width: Dimensions.get('window').width };

export default class Tabs extends React.Component {
  state = {
    index: 0,
    routes: [
      { key: 'first', title: 'Trailer' },
      { key: 'second', title: 'Relations'},
      {key: 'third', title: 'Characters' },
    ],
  };

  _handleIndexChange = (index) => this.setState({ index });

  _renderTabBar = (props) => {
    const inputRange = props.navigationState.routes.map((x, i) => i);

    return (
      <View style={styles.tabBar}>
        {props.navigationState.routes.map((route, i) => {
          const opacity = props.position.interpolate({
            inputRange,
            outputRange: inputRange.map((inputIndex) =>
              inputIndex === i ? 1 : 0.5
            ),
          });

          return (
            <TouchableOpacity
              style={styles.tabItem}
              onPress={() => this.setState({ index: i })}>
              <Animated.Text style={{ opacity, color:'white' }}>{route.title}</Animated.Text>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };

  _renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
    third: ThirdRoute,
  });

  render() {
    return (
      <TabView
        navigationState={this.state}
        renderScene={this._renderScene}
        renderTabBar={this._renderTabBar}
        onIndexChange={this._handleIndexChange}
        initialLayout={initialLayout}
        style={styles.container}
      />
    );
  }
}


const styles = StyleSheet.create({
  container: {
    minHeight:260,
    maxHeight:260,
    justifyContent:'center',
    borderRadius:10,
    overflow: 'hidden',
    position:'relative',
    marginBottom:30,
    
  },
  tabBar: {
    flexDirection: 'row',
   

    
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
    
  },
 
  
  scene: {
    flex: 1,
    
    
  },
});
