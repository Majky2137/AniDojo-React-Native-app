import Main from '../components/main';
import { ScrollView, StyleSheet, Text, Button ,Alert, View, Image,SafeAreaView, ImageBackground,TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';





export default function Subsite({route, navigation})  {

  const {item} = route.params;
  return (
    <SafeAreaView style={styles.wrapper}>
    <ScrollView style={styles.cont}>
        <View >
          
          <ImageBackground source={item.mainimage} resizeMode="cover" style={styles.image}>
          <View style={styles.overlay} />
          <TouchableOpacity style={{top:30, padding:15,position:'absolute',}} onPress={() => navigation.goBack('HomeScreen')}>
                  <Icon style={{ fontSize: 30,color:'white'}} name={"chevron-thin-left"} />
              </TouchableOpacity>
          <View style={styles.tit}>
          <Text style={[styles.upheading,{color: item.color}]}>{item.title}</Text>
          <Text style={styles.heading}>{item.maintitle}</Text>
          <Text style={styles.heading2}>{item.status}</Text>
        
          </View>
          </ImageBackground>
          
          <Main 
          title="Description" 
          description={item.description}>
          </Main>  
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
    
  },
  wrapper: {
    flex: 1,
    backgroundColor:'#e9ecef',
    height:'auto',
    zIndex:-1,
    
  },

  image: {
    width:'100%',
    height:450,
    position:"relative",
    zIndex:-1,
    
  },

  heading: {
    fontSize:35,
    textAlign:'left',
    fontWeight:'bold',
    marginBottom:0,
    color:'#FFF',
    textShadowColor: '#000', textShadowOffset: { width: 0.5, height: 1 }, textShadowRadius: 6,
  
  },

  heading2: {
    fontSize:20,
    textAlign:'left',
    fontWeight:'bold',
    marginBottom:0,
    color:'#DCDCDC',
    textShadowColor: '#000', textShadowOffset: { width: 0.5, height: 0.5 }, textShadowRadius: 0.2,
  },

  upheading: {
    fontSize:22,
    textAlign:'left',
    fontWeight:'bold',
    marginBottom:0,
    textShadowColor: '#000', textShadowOffset: { width: 0.7, height: 0.7 }, textShadowRadius: 3,
  },
  

  tit: {
  width:'100%',
  flexDirection:'column',
  alignItems:'baseline',
  justifyContent:'center',
  borderRadius:25,
  top:'60%',
  paddingHorizontal:20,
  position:'relative',
  textAlign:'justify',
  textDecorationStyle:'stroke'
 


},
overlay: {
  ...StyleSheet.absoluteFillObject,
  backgroundColor: 'rgba(0,0,0,0.25)'
}

});

