import React, {Component} from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView, StyleSheet, Text, Button ,Alert, View, Image, ImageBackground,Pressable,TouchableOpacity,FlatList, TextInput } from 'react-native';
import Carousel from 'react-native-snap-carousel'
import Icon from 'react-native-vector-icons/Ionicons';
import { useFonts } from 'expo-font';
import {FrSliderData} from '../model/data';
import { SecondSliderData } from '../model/data';
import BannerSlider from '../components/BannerSlider';
import CatSlider from '../components/CategorieSlider';
import { windowWidth, windowHeight, windowWidth2 } from '../utils/Dimensions';









export default function HomeScreen({navigation}) {

  const _renderBanner = ({item,index}) => {
    
    return (
      <TouchableOpacity onPress={()=>navigation.navigate('Subsite', {item: item})}>
    <BannerSlider data={item} />
    </TouchableOpacity>
    
    ) 
  };

  const _renderCategorie = ({item,index}) => {
    return <CatSlider data={item} />
  };

  const [loaded] = useFonts({
    RobotoM: require('../assets/fonts/Roboto-Medium.ttf'),
    RobotoB: require('../assets/fonts/Roboto-Bold.ttf'),
    LatoR: require('../assets/fonts/Lato-Regular.ttf'),
    LatoB: require('../assets/fonts/Lato-Bold.ttf'),
    LatoBL: require('../assets/fonts/Lato-Black.ttf'),
    

  });
  
  if (!loaded) {
    return null;
  }

    return (
    <SafeAreaView style={{flex:1, backgroundColor:'#f8f9fa'}}>
        <ScrollView style={{padding:20}}>
          <View style={styles.user_cont}>
            
            <Text style={{fontFamily:'LatoBL',fontSize:18,top:10, opacity:0.7,}}>Hello User!</Text>
              <ImageBackground 
              source={require('../assets/images/user-prof-pic2.jpg')} 
              style={styles.image}  
              imageStyle={{borderRadius:10,}}
              />
              
          </View>

          <View style={styles.search_container}>
            <Icon style={{marginRight:5,top:3,opacity:0.4,fontFamily:'RobotoM'}} name="search" size={20} color="#64b5f6" />
            <TextInput placeholder='Search' style={{width:'100%',color:'#64b5f6',fontFamily:'RobotoM'}}/>
          </View>
          

          <View style={{
            marginVertical:20,
            flexDirection:'row',
            justifyContent:'space-between',
            }}>
            <Text style={{fontFamily:'RobotoM',fontSize:18, opacity:0.7, }}>Popular series</Text>
            <TouchableOpacity >
              <Text style={{color:'#64b5f6',fontFamily:'RobotoM'}}>See all</Text>
            </TouchableOpacity>
          </View>
          
        <View style={styles.Wrapper}>
          <View style={styles.ItemsWrapper}>
            <FlatList
              data={FrSliderData}
              renderItem={_renderBanner}
              keyExtractor={(item) => item.id}
              horizontal
              showsHorizontalScrollIndicator={false}
              loop={true}
              autoscroll={true}
            />
          </View>
        </View>
<View style={{
            marginVertical:20,
            flexDirection:'row',
            justifyContent:'space-between',
            }}>
            <Text style={{fontFamily:'RobotoM',fontSize:18, opacity:0.7, }}>Categories</Text>
            <TouchableOpacity>
              <Text style={{color:'#64b5f6',fontFamily:'RobotoM'}}>See all</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.Wrapper}>
          <View style={styles.ItemsWrapper}>
            <FlatList
              data={SecondSliderData}
              renderItem={_renderCategorie}
              keyExtractor={(item) => item.id}
              horizontal
              showsHorizontalScrollIndicator={false}
              loop={true}
              autoscroll={true}
            />
          </View>
        </View>
          
         
        </ScrollView>
    </SafeAreaView>
    );
}

const styles = StyleSheet.create({

user_cont: {
    flex: 1,
    flexDirection:'row',
    justifyContent:'space-between',
    marginBottom:20,
  },

search_container:{
    flexDirection:'row',
    justifyContent:'space-between',
    borderWidth:0.2,
    borderColor:'#C6C6C6',
    borderRadius:15,
    paddingHorizontal:10,
    paddingVertical:8,
    marginVertical:5,
    
},

  image: {
    width:45,
    height:45,
  },
  

  rWrapper: {
    marginTop: 20,
  },
  
  ItemsWrapper: {
    paddingVertical: 20,
  },
});

