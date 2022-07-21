import * as React from 'react';
import 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView, StyleSheet, Text, Button ,Alert, View, Image, ImageBackground,TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Subsite from './screens/Subsite';
import HomeScreen from './screens/HomeScreen'
import Profile from './screens/Profile';
import List from './screens/List'

Icon.loadFont();

const Drawer = createDrawerNavigator();




const App = (navigation, route) => {
    return (
      <NavigationContainer >
        <Drawer.Navigator >
        <Drawer.Screen 
            name="HomeScreen"
            component={HomeScreen}
            options={{headerShown: false}}
          />
          <Drawer.Screen
            name="Subsite"
            component={Subsite}
            options={{headerShown: false,drawerItemStyle:  {height: 0 }}}
          />
          <Drawer.Screen
            name="List"
            component={List}
            options={{headerShown: false}}
          />
          <Drawer.Screen
            name="Profile"
            component={Profile}
            options={{headerShown: false}}
          />
        
        </Drawer.Navigator>
      </NavigationContainer>
    );
  };

const styles = StyleSheet.create({
 
  });

export default App;
