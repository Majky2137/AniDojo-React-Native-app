import React, {Component, useState} from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView, StyleSheet, Text, Button ,Alert, View, Image, ImageBackground,Pressable,TouchableOpacity,FlatList, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useFonts } from 'expo-font';
import {FrSliderData} from '../model/data';
import { SecondSliderData } from '../model/data';
import BannerSlider from '../components/BannerSlider';
import CatSlider from '../components/CategorieSlider';
import AiringList from '../components/airing';




export default function HomeScreen({ navigation}) {
  const [AnimeAirTab, setAnimeAirTab] = useState(1);

  const _renderBanner = ({item,index}) => {
    
    return (
      <TouchableOpacity onPress={()=>navigation.navigate('Subsite', {item:item})}>
    <BannerSlider  data={item} />
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
    <SafeAreaView style={{flex:1, backgroundColor: '#1E2029',}}>
        <ScrollView contentContainerStyle={{flexGrow: 1}} style={{padding:20, }}>
          <View style={styles.user_cont}>
          <TouchableOpacity onPress={()=>navigation.navigate('Profile')}>
              <ImageBackground 
              source={require('../assets/images/user-prof-pic2.jpg')} 
              style={styles.image}  
              imageStyle={{borderRadius:50,borderColor:'#9A6AFF',borderWidth:1,}}
              />
              </TouchableOpacity>
             
              <TouchableOpacity onPress={()=>navigation.navigate('Profile')}>
              <Icon style={{ fontSize: 30,color:'#9A6AFF',paddingTop:10,}} name={"notifications-outline"} />
              </TouchableOpacity>
            
            
          </View>
          <View style={{
            marginVertical:14,
            flexDirection:'row',
            justifyContent:'space-between',
            }}>
            <Text style={{fontFamily:'RobotoM',fontSize:24, color:'#E3E3E3' }}>Explore</Text>
          
          </View>
          <View style={styles.search_container}>
            <Icon style={{marginRight:5,top:3,fontFamily:'LatoR'}} name="search-outline" size={20} color='#9A6AFF'  />
            <TextInput placeholderTextColor={'#E3E3E3' }placeholder='Search' style={{width:'100%',color:'#263E3E',fontFamily:'LatoR'}}/>
          </View>
         
          <View style={{
            marginVertical:14,
            flexDirection:'row',
            justifyContent:'space-between',
            }}>
            <Text style={{fontFamily:'RobotoM',fontSize:18, color:'#E3E3E3' }}>Genres</Text>
            <TouchableOpacity>
              <Text style={{color:'#9A6AFF',fontFamily:'RobotoM'}}>See all</Text>
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
            />
          </View>
        </View>

          <View style={{
            marginVertical:14,
            flexDirection:'row',
            justifyContent:'space-between',
            }}>
            <Text style={{fontFamily:'RobotoM',fontSize:18, color:'#E3E3E3' }}>Trending Now </Text>
            <TouchableOpacity >
              <Text style={{color:'#9A6AFF',fontFamily:'RobotoM'}}>See all</Text>
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
            marginVertical:16,
            flexDirection:'row',
            justifyContent:'space-between',
            }}>
            <Text style={{fontFamily:'RobotoM',fontSize:18, color:'#E3E3E3' }}>Now Airing </Text>
            <TouchableOpacity >
              <Text style={{color:'#9A6AFF',fontFamily:'RobotoM'}}>See all</Text>
            </TouchableOpacity>
          </View>
         
          <View style={{marginBottom:105, maxHeight:400, minHeight:260}}>
          <ScrollView nestedScrollEnabled={true}>
         {AnimeAirTab == 1 &&
          FrSliderData.map(item => (
            <TouchableOpacity onPress={()=>navigation.navigate('Subsite', {item:item})}>
            <AiringList
            key={item.id}
              data={item}
            />
              </TouchableOpacity>
          ))}
           </ScrollView>
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
    borderColor:'#9A6AFF',
    borderWidth:0.3,
    borderRadius:10,
    paddingHorizontal:10,
    paddingVertical:10,
    marginVertical:10,
    width:'95%',
    alignSelf:'center',
 
},

  image: {
    width:50,
    height:50,
  },
  
  
  ItemsWrapper: {
    paddingVertical: 5,

  },
});

