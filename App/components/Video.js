import { red } from '@material-ui/core/colors';
import{ useState } from 'react';
import {StyleSheet, Text, Button ,Alert, View, TouchableOpacity, } from 'react-native';
import {TextInput, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';


const Video = (vidinfo) => {
        const [liked, setLiked] = useState(null);
        return (
            <View style={styles.wrap}>
            <Text style={styles.heading}>{vidinfo.episode}</Text>
                <View style={styles.container}>
                        
                </View>
                </View>
           
        )
      };





const styles= StyleSheet.create({
    container: {
        minHeight:200,
        maxHeight:200,
        width:'100%',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:10,
        position:'relative',
        backgroundColor:'#e0e0e0', 
        shadowColor: "#000",
        shadowOffset: {
	        width: 0,
	        height: 5,
                    },
        shadowOpacity: 0.29,
        shadowRadius: .65,
        elevation: 1,
    },
    wrap: {
        flexDirection:'column',
        alignItems:'baseline',
        justifyContent:'center',
     
    },

    heading: {
        fontSize:21,
        textAlign:'left',
        fontWeight:'normal',
        color:'#494949',
        marginBottom:12,
        lineHeight:30,
        textShadowColor: '#e0e0e0', textShadowOffset: { width: 0.1, height: 2 }, textShadowRadius: 1,
    },
});


export default Video;