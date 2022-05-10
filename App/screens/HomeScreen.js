import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView, StyleSheet, Text, Button ,Alert, View, Image, ImageBackground,TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';




export default function HomeScreen({navigation}) {
    return (
    <SafeAreaView>
        <ScrollView>
        <View style={styles.wrapper}>
            <View style={styles.cont}>
              <Text>This Home screen is [WIP] to see my work go forward</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Subsite')}>
                  <Icon style={{ fontSize: 50, }} name={"arrow-forward-circle-outline"} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('Start')}>
                  <Icon style={{ fontSize: 50, }} name={"arrow-back-circle-outline"} />
              </TouchableOpacity>
            </View>
        </View>
        </ScrollView>
    </SafeAreaView>
    );
}

const styles = StyleSheet.create({

cont: {
    flex: 1,
    zIndex:-1,
    position:'relative',
    width:'100%',
    height:'100%',
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'center'
  },
  wrapper: {
    flex: 1,
    backgroundColor:'white',
    height:'auto',
    zIndex:-1,
  },
});