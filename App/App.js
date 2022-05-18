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
          tabBarOptions={{
            style: styles.tabBar,
            activeTintColor: '#B3BA91',
            inactiveTintColor: 'gray',
            showLabel: false,
            showIcon: true, 
          }}>
            <Tab.Screen options={{ tabBarIcon: ({color}) => (
                <Icon name="home" size={25} color={color} />
                ),headerShown: false}}component={HomeScreen} name='HomeScreen' />

            <Tab.Screen options={{ tabBarIcon: ({color}) => (
                <Icon name="list" size={25} color={color} />
                ),headerShown: false}}component={List} name='List' />
           
            <Tab.Screen options={{tabBarIcon: ({color}) => (
                <Icon name="person-sharp" size={25} color={color} />
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
            name="Profile"
            component={Profile}
            options={{headerShown: false}}
          />
        
        </Stack.Navigator>
      </NavigationContainer>
    );
  };
const Start = ({navigation, route}) => {
    return (
        <SafeAreaView
          style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#FFF',
          }}>
              <View>
                  <Text style={{ fontSize: 30, }}>Enter</Text>
              </View>
              <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
                  <Icon style={{ fontSize: 50, }} name={"arrow-forward-circle-outline"} />
              </TouchableOpacity>
          </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    tabBar: {
    
  borderRadius:10,

   
    },
  });

export default App;
