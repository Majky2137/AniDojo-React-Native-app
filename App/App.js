import * as React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView, StyleSheet, Text, Button ,Alert, View, Image, ImageBackground,TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { TabView } from 'react-native-tab-view';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Subsite from './screens/Subsite';
import HomeScreen from './screens/HomeScreen'
import CatSlider from './components/CategorieSlider';
import BannerSlider from './components/BannerSlider';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
          <Stack.Navigator >
              <Stack.Screen options={{headerShown: false}} component={Start} name='Start' />
              <Stack.Screen options={{headerShown: false}}component={HomeScreen} name='HomeScreen' />
              <Stack.Screen options={{headerShown: false}}component={Subsite} name='Subsite' />
          </Stack.Navigator>
      </NavigationContainer>
  );
}

const Start = ({navigation}) => {
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

const Sub =() => {
    return (
        <Subsite/>
    );
}
