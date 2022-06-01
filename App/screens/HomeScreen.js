import React, {Component, useState,useRef} from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView, StyleSheet, Text, Button ,Alert, View, Image, ImageBackground,Pressable,TouchableOpacity,FlatList, TextInput,Animated, } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useFonts } from 'expo-font';
import {FrSliderData} from '../model/data';
import { SecondSliderData } from '../model/data';
import BannerSlider from '../components/BannerSlider';
import CatSlider from '../components/CategorieSlider';
import AiringList from '../components/airing';
import CarouselSlider from '../components/Carousel';





export default function HomeScreen({ navigation}) {
  const scrollX = React.useRef(new Animated.Value(0)).current;

  const [AnimeAirTab, setAnimeAirTab] = useState(1);

  const _renderBanner = ({item,index}) => {
    
    return (
      <TouchableOpacity onPress={()=>navigation.navigate('Subsite', {item:item})}>
    <BannerSlider  data={item} />
    </TouchableOpacity>
    
    ) 
  };

  const _renderCarousel = ({item,index}) => {
    
    return (
      <TouchableOpacity onPress={()=>navigation.navigate('Subsite', {item:item})}>
    <CarouselSlider  data={item} />
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
              imageStyle={{borderRadius:50,borderColor:'#6F50DC',borderWidth:1,}}
              />
              </TouchableOpacity>
             
              <TouchableOpacity onPress={()=>navigation.navigate('Profile')}>
              <Icon style={{ fontSize: 30,color:'#6F50DC',paddingTop:10,}} name={"notifications-outline"} />
              </TouchableOpacity>
          </View>

          <View style={{
            marginVertical:4,
            flexDirection:'row',
            justifyContent:'space-between',
            }}>
            <Text style={{fontFamily:'RobotoM',fontSize:24, color:'#E3E3E3' }}>Explore</Text>
          
          </View>
         
          <View style={{flex:1,flexDirection:'row',justifyContent:'center'}}>
          <Animated.FlatList
              data={FrSliderData}
              renderItem={_renderCarousel}
              keyExtractor={(item) => item.id}
              horizontal
              onScroll={Animated.event(
                [{nativeEvent: {contentOffset: {x: scrollX}}}],
                {useNativeDriver: true}
                
                )}
              pagingEnabled
              showsHorizontalScrollIndicator={false}
            />
          </View>

          <View style={{
            marginVertical:14,
            flexDirection:'row',
            justifyContent:'space-between',
            }}>
            <Text style={{fontFamily:'RobotoM',fontSize:18, color:'#E3E3E3' }}>Genres </Text>
            <TouchableOpacity >
              <Text style={{color:'#6F50DC',fontFamily:'RobotoM'}}>See all</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.Wrapper}>
          <View style={styles.ItemsWrapper}>
            <FlatList
              pagingEnabled
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
              <Text style={{color:'#6F50DC',fontFamily:'RobotoM'}}>See all</Text>
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
              <Text style={{color:'#6F50DC',fontFamily:'RobotoM'}}>See all</Text>
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
    borderColor:'#6F50DC',
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


  BannerContainer: {
    height:210,
    width:'100%',

  },


  banner: {
    width:'100%',
    height:'100%'
  },

  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(154,106,255,0.14)',
  
},
});

