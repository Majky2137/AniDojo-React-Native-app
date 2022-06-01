import * as React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView, StyleSheet, Text, Button ,Alert, View, Image, ImageBackground,TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Subsite from './screens/Subsite';
import HomeScreen from './screens/HomeScreen'
import Profile from './screens/Profile';
import List from './screens/List'

Icon.loadFont();

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigator = (navigation,route) => {
  return (
        <Tab.Navigator 
          screenOptions={{
            tabBarActiveTintColor: '#6F50DC',
            tabBarInactiveTintColor: '#E3E3E3',
            tabBarShowLabel: false,
            tabBarIcon: true,
            tabBarStyle: 
            {
              position:'absolute',
              borderTopWidth: 0,
              bottom:25,
              left:20,
              right:20,
              elevation:3,
              backgroundColor:'#181818',
              borderRadius:25,
              height:70,
              
            },      
}}>
            <Tab.Screen options={{ tabBarIcon: ({color}) => (
                <Icon name="home" size={22} color={color} />
                ),headerShown: false}}component={HomeScreen} name='HomeScreen' />

            <Tab.Screen options={{ tabBarIcon: ({color}) => (
                <Icon name="list" size={23} color={color} />
                ),headerShown: false}}component={List} name='List' />
           
            <Tab.Screen options={{tabBarIcon: ({color}) => (
                <Icon name="person-sharp" size={22} color={color} />
                ),headerShown: false}}component={Profile} name='Profile' />
        </Tab.Navigator>
 
  );
}


const App = ({navigation}) => {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="TabNavigator"
            component={TabNavigator}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Subsite"
            component={Subsite}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="List"
            component={List}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Profile"
            component={Profile}
            options={{headerShown: false}}
          />
        
        </Stack.Navigator>
      </NavigationContainer>
    );
  };

const styles = StyleSheet.create({
 
  });

export default App;
