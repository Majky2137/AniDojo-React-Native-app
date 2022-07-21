import Main from '../components/main';
import { ScrollView, StyleSheet, Text, Button ,Alert, View, Image,SafeAreaView, ImageBackground,TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import { LikeButton } from '../components/Buttons';





export default function Subsite({ navigation,route })  {
  const {item} = route.params;
  return (
    <View style={styles.wrapper}>
    <ScrollView style={styles.cont} >
        <View >
          <ImageBackground source={item.mainimage} resizeMode="cover" imageStyle={{borderBottomLeftRadius:45,borderBottomRightRadius:45}} style={styles.image}>
            <View style={styles.overlay} />
              <TouchableOpacity style={{top:30, left:15, padding:15,position:'absolute',opacity:0.5,}} onPress={() => navigation.goBack('HomeScreen')}>
                  <Icon style={{ fontSize: 20,color:'#D9D9D9', backgroundColor:'grey',borderRadius:10,padding:10,}} name={"chevron-thin-left"} />
              </TouchableOpacity>
          </ImageBackground>

          <Main 
          status={item.status}
          title={item.title} 
          maintitle={item.maintitle}
          color={item.color}
          description={item.description}>
          </Main>  
        </View> 
  </ScrollView>
  </View>    
  );
  
}


const styles = StyleSheet.create({
 
  
  cont: {
    flex: 1,
    zIndex:-1,
    position:'relative',
    width:'100%',


    
  },

  wrapper: {
    flex: 1,
    height:'auto',
    zIndex:-1,
    backgroundColor:'#1E1E1E',
  },

  image: {
    width:'100%',
    height:430,
    position:"relative",
    zIndex:-1,
    
  },



overlay: {
  ...StyleSheet.absoluteFillObject,
  backgroundColor: 'rgba(24, 24, 24, 0.30)',
  borderBottomLeftRadius:45,
  borderBottomRightRadius:45
}

});

