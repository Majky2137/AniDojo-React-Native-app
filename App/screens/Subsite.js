import Main from '../components/main';
import { ScrollView, StyleSheet, Text, Button ,Alert, View, Image,SafeAreaView, ImageBackground,TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';




const image = { uri: "https://i.ibb.co/chjCVxV/KIMNYA.jpg" };

export default function Subsite({navigation})  {
  return (
    <SafeAreaView style={styles.wrapper}>
    <ScrollView style={styles.cont}>
        <View >
          <ImageBackground source={image} resizeMode="cover" style={styles.image}>
          <TouchableOpacity style={{top:30, padding:15,position:'absolute',}} onPress={() => navigation.goBack('HomeScreen')}>
                  <Icon style={{ fontSize: 30,color:'white'}} name={"chevron-thin-left"} />
              </TouchableOpacity>
          <View style={styles.tit}>
          <Text style={styles.upheading}>Kimetsu no Yaiba</Text>
          <Text style={styles.heading}>Demon Slayer</Text>
          <Text style={styles.heading2}>Season 1</Text>
        
          </View>
          </ImageBackground>
          <Main 
          title="Description" 
          description="Ever since the death of his father, the burden of supporting the family has fallen upon Tanjirou Kamado's shoulders.
          Though living impoverished on a remote mountain, the Kamado family are able to enjoy a relatively peaceful and happy life.
          One day, Tanjirou decides to go down to the local village to make a little money selling charcoal.
          On his way back, night falls, forcing Tanjirou to take shelter in the house of a strange man, who warns him of the existence of flesh-eating demons that lurk in the woods at night.
          When he finally arrives back home the next day, he is met with a horrifying sight—his whole family has been slaughtered.
          Worse still, the sole survivor is his sister Nezuko, who has been turned into a bloodthirsty demon.
          Consumed by rage and hatred, Tanjirou swears to avenge his family and stay by his only remaining sibling.
          Alongside the mysterious group calling themselves the Demon Slayer Corps, Tanjirou will do whatever it takes to slay the demons and protect the remnants of his beloved sister's humanity.">
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
    backgroundColor:'white',
    height:'auto',
    zIndex:-1,
    
  },

  image: {
    width:'100%',
    height:450,
    position:"relative",
    zIndex:-1,
    opacity:0.9 
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
    color:'orange',
    textShadowColor: '#000', textShadowOffset: { width: 0.2, height: 0.2 }, textShadowRadius: 0.2,
  },

  upheading: {
    fontSize:22,
    textAlign:'left',
    fontWeight:'bold',
    marginBottom:0,
    color:'#FFF',
    textShadowColor: '#000', textShadowOffset: { width: 0.5, height: 0.5 }, textShadowRadius: 2,
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
  
},

});

