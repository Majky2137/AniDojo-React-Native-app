import { red } from '@material-ui/core/colors';
import{ useState, useCallback, useRef,onStateChange  } from 'react';
import YoutubePlayer from "react-native-youtube-iframe";
import {StyleSheet, Text, Button ,Alert, View, TouchableOpacity, } from 'react-native';
import {TextInput, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';



const Video = (vidinfo) => {
    const [playing, setPlaying] = useState(false);

  const onStateChange = useCallback((state) => {
    if (state === "unstarted") {
      setPlaying(false);
      Alert.alert("video has finished playing!");
    }
  }, []);

  const togglePlaying = useCallback(() => {
    setPlaying((prev) => !prev);
  }, []);
        return (
                  <YoutubePlayer 
                    height={'100%'}
                    width={'100%'}
                    borderRadius={'20'}
                    play={playing}
                    videoId={vidinfo.id}/> 
        )
      };

const styles= StyleSheet.create({
   
    player: {
        borderRadius:40,
        position:'relative',
    },


    heading: {
        fontSize:21,
        textAlign:'left',
        fontWeight:'normal',
        color:'#494949',
        marginBottom:20,
        lineHeight:30,
        textShadowColor: '#e0e0e0', textShadowOffset: { width: 0.1, height: 2 }, textShadowRadius: 1,
    },
});


export default Video;