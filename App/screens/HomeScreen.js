import React, {Component, useState,useRef} from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView, StyleSheet, Text, Button ,Alert, View, Image, ImageBackground,Pressable,TouchableOpacity,FlatList, TextInput,Animated, } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useFonts } from 'expo-font';
import {FrSliderData} from '../model/data';
import { SecondSliderData } from '../model/data';
import HeroSlider from '../components/HeroSlider';
import CatSlider from '../components/CategorieSlider';
import AiringList from '../components/airing';
import PopularSlider from '../components/PopularSlider';





export default function HomeScreen({ navigation}) {
  const scrollX = React.useRef(new Animated.Value(0)).current;

  const [AnimeAirTab, setAnimeAirTab] = useState(1);

  



  const _renderCategorie = ({item,index}) => {
   
    return <CatSlider data={item} />
  };


  const [loaded] = useFonts({
    InterR: require('../assets/fonts/Roboto-Medium.ttf'),
    RobotoB: require('../assets/fonts/Roboto-Bold.ttf'),
    LatoR: require('../assets/fonts/Lato-Regular.ttf'),
    LatoB: require('../assets/fonts/Lato-Bold.ttf'),
    LatoBL: require('../assets/fonts/Lato-Black.ttf'),
    InterR: require('../assets/fonts/Inter-Regular.ttf'),
    InterB: require('../assets/fonts/Inter-SemiBold.ttf'),
    

  });
  
  if (!loaded) {
    return null;
  }

    return (
    <SafeAreaView style={{flex:1, backgroundColor: '#1E1E1E',}}>
        <ScrollView contentContainerStyle={{flexGrow: 1}} style={{paddingHorizontal:20,marginTop:25 }}>
          <View style={styles.user_cont}>
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
              <Icon style={{ fontSize: 40,color:'#D9D9D9',}} name={"menu-outline"} />
              </TouchableOpacity>
          <TouchableOpacity onPress={()=>navigation.navigate('Profile')}>
              <ImageBackground 
              source={require('../assets/images/user-prof-pic2.jpg')} 
              style={styles.image}  
              imageStyle={{borderRadius:50,borderColor:'#BE4242',borderWidth:1,}}
              />
              </TouchableOpacity>
          </View>

          <View style={{flexDirection:'row',justifyContent:'space-between',}}>
            <Text style={{fontFamily:'InterR',fontSize:25, color:'#D9D9D9' }}>Discover</Text>
          </View>
         
          <View style={styles.wrap}>
          <ScrollView onScroll={({nativeEvent}) => onchange=(nativeEvent)}
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          horizontal
          style={styles.wrap}
        >
         {FrSliderData.map(item => (
            <TouchableOpacity onPress={()=>navigation.navigate('Subsite', {item:item})}>
            <HeroSlider style={{}}
            key={item.id}
              data={item}
            />
              </TouchableOpacity>
          ))}
       </ScrollView>
         </View>

          <View style={{
            flexDirection:'row',
            justifyContent:'space-between',
            }}>
            <Text style={{fontFamily:'InterR',fontSize:20, color:'#D9D9D9' }}>Genres </Text>
            <TouchableOpacity >
              <Text style={{color:'#BE4242',fontSize:16,fontFamily:'InterR'}}>See all</Text>
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
            flexDirection:'row',
            justifyContent:'space-between',
            }}>
            <Text style={{fontFamily:'InterR',fontSize:20, color:'#D9D9D9' }}>Popular now</Text>
            <TouchableOpacity >
              <Text style={{color:'#BE4242',fontSize:16,fontFamily:'InterR'}}>See all</Text>
            </TouchableOpacity>
          </View>
          
        <View style={styles.Wrapper}>
          <View style={styles.ItemsWrapper}>
          <View style={styles.wrap}>
          <ScrollView onScroll={({nativeEvent}) => onchange=(nativeEvent)}
          showsHorizontalScrollIndicator={false}
          horizontal
          style={styles.wrap}
        >
         {FrSliderData.map(item => (
            <TouchableOpacity onPress={()=>navigation.navigate('Subsite', {item:item})}>
            <PopularSlider style={{}}
            key={item.id}
              data={item}
            />
              </TouchableOpacity>
          ))}
       </ScrollView>
         </View>
          </View>
        </View>

        <View style={{
            flexDirection:'row',
            justifyContent:'space-between',
            }}>
            <Text style={{fontFamily:'InterR',fontSize:20, color:'#D9D9D9' }}>Now airing </Text>
            <TouchableOpacity >
              <Text style={{color:'#BE4242',fontSize:16,fontFamily:'InterR'}}>See all</Text>
            </TouchableOpacity>
          </View>
         
          <View style={{marginBottom:40,marginVertical:12,flex: 1, width:'100%', height:'100%'}}>
          <View nestedScrollEnabled={true} style={{marginVertical:4,flexDirection: "row",
    flexWrap: "wrap", width:'100%', alignItems:'center', justifyContent:'space-between'}}>
         {AnimeAirTab == 1 &&
          FrSliderData.map(item => (
            <TouchableOpacity onPress={()=>navigation.navigate('Subsite', {item:item})}>
            <AiringList style={{}}
            key={item.id}
              data={item}
            />
              </TouchableOpacity>
          ))}
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
    borderColor:'#BE4242',
    borderWidth:0.3,
    borderRadius:10,
    paddingHorizontal:10,
    paddingVertical:10,
    marginVertical:12,
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
    backgroundColor: 'rgba(24, 24, 24, 0.43)',
  
},
});

