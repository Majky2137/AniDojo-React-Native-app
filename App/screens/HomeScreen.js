import * as React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView, StyleSheet, Text, Button ,Alert, View, Image, ImageBackground,TouchableOpacity, TextInput } from 'react-native';
import Carousel from 'react-native-snap-carousel'
import Icon from 'react-native-vector-icons/Ionicons';
import { useFonts } from 'expo-font';
import {FrSliderData} from '../model/data';
import { SecondSliderData } from '../model/data';
import BannerSlider from '../components/BannerSlider';
import CatSlider from '../components/CategorieSlider';
import { windowWidth, windowHeight, windowWidth2 } from '../utils/Dimensions';
import {LogBox} from "react-native";
import PropTypes from 'prop-types';








export default function HomeScreen({navigation}) {

  const renderBanner = ({item,index}) => {
    return <BannerSlider data={item} /> 
  };

  const renderCategorie = ({item,index}) => {
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
    <SafeAreaView style={{flex:1, backgroundColor:'#fff'}}>
        <ScrollView style={{padding:20}}>
          <View style={styles.user_cont}>
            <Text style={{fontFamily:'LatoBL',fontSize:18,top:6, opacity:0.7}}>Hello User!</Text>
              <ImageBackground 
              source={require('../assets/images/user-prof-pic2.jpg')} 
              style={styles.image}  
              imageStyle={{borderRadius:30,}}
              />
              
          </View>

          <View style={styles.search_container}>
            <Icon style={{marginRight:5,top:3,}} name="search" size={20} color="#C6C6C6" />
            <TextInput placeholder='Search' style={{width:'100%'}}/>
          </View>

          <View style={{
            marginVertical:20,
            flexDirection:'row',
            justifyContent:'space-between',
            }}>
            <Text style={{fontFamily:'LatoBL',fontSize:18, opacity:0.7, }}>Upcoming Series</Text>
            <TouchableOpacity >
              <Text style={{color:'#0aada8'}}>See all</Text>
            </TouchableOpacity>
          </View>
          <Carousel
          layout='default'
          data={FrSliderData}
          renderItem={renderBanner}
          sliderWidth={windowWidth}
          itemWidth={350+40}
          loop={true}
          autoplay={true}
          autoplayDelay={3000}
          autoplayInterval={7000}
          enableMomentum={false}
          lockScrollWhileSnapping={true}
          inactiveSlideOpacity={0.4}
          />
<View style={{
            marginVertical:20,
            flexDirection:'row',
            justifyContent:'space-between',
            }}>
            <Text style={{fontFamily:'LatoBL',fontSize:18, opacity:0.7, }}>Categories</Text>
            <TouchableOpacity>
              <Text style={{color:'#0aada8'}}>See all</Text>
            </TouchableOpacity>
          </View>
          <Carousel 
          layout='default'
          data={SecondSliderData}
          renderItem={renderCategorie}
          sliderWidth={windowWidth2}
          itemWidth={165-20}
          lockScrollWhileSnapping={true}
          inactiveSlideOpacity={1}
          inactiveSlideScale={1}
          activeSlideAlignment={'start'}
          />
          <TouchableOpacity onPress={() => navigation.navigate('Subsite')}>
                 <Text> See the subsite design <Icon style={{ fontSize: 50, }} name={"arrow-forward-circle-outline"} /></Text>
              </TouchableOpacity>
         
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
    borderWidth:0.3,
    borderColor:'#C6C6C6',
    borderRadius:8,
    paddingHorizontal:10,
    paddingVertical:8,
    
},

  image: {
    width:35,
    height:35,
  },
});