import React from 'react';
import {
  Text, 
  View,
  SafeAreaView, TouchableOpacity, } from 'react-native';

import Carousel from 'react-native-snap-carousel';


export const FrSliderData = [
  {
      id:'anime-1',
      video:'VQGCKyvzIM4',
      title:'Kimetsu no Yaiba',
      maintitle:'Demon Slayer',
      status:'Finished airing',
      description:"A family is attacked by demons and only two members survive - Tanjiro and his sister Nezuko, who is turning into a demon slowly. Tanjiro sets out to become a demon slayer to avenge his family and cure his sister.",
      thumbnail:{uri:'https://i.ibb.co/HpLvFRt/Demon-Slayer-cover.jpg'},
      mainimage:{uri:'https://i.ibb.co/PhFrLH5/bx101922-PEn1-CTc93bl-C.jpg'},
      color:'#64b5f6',
  },
  
  {
      id:'anime-2',
      video:'9N8VGaf4img',
      title:'Gintama: THE VERY FINAL',
      maintitle:'Gintama: THE FINAL',
      status:'Finished airing',
      description:"Gintama: THE FINAL is the 3rd and final film adaptation of the remainder of the Silver Soul arc and is the series finale.",
      thumbnail:{uri:'https://i.ibb.co/Y7dKjp8/bx114129-RLg-Suh6-Ybe-Yx.jpg'},
      mainimage:{uri:'https://i.ibb.co/6ByFW5Y/bx114129-RLg-Suh6-Ybe-Yx-1.jpg'},
      color:'#00FA9A',
  },

  {
    id:'anime-3',
    video:'9N8VGaf4img',
    title:'High School DxD',
    maintitle:'High School DxD',
    status:'Finished airing',
    description:"High school student Issei Hyoudou is your run-of-the-mill pervert who does nothing productive with his life, peeping on women and dreaming of having his own harem one day. Things seem to be looking up for Issei when a beautiful girl asks him out on a date, although she turns out to be a fallen angel who brutally kills him! However, he gets a second chance at life when beautiful senior student Rias Gremory, who is a top-class devil, revives him as her servant, recruiting Issei into the ranks of the school's Occult Research club Slowly adjusting to his new life Issei must train and fight in order to survive in the violent world of angels and devils Each new adventure leads to many hilarious and risqué moments with his new comrades all the while keeping his new life a secret from his friends and family in High School DxD",
    thumbnail:{uri:'https://i.ibb.co/jhTgH32/nx11617-nmx-MU9-Zh3-H5-R.jpg'},
    mainimage:{uri:'https://i.ibb.co/mqNYhNB/bx20745-Hz-WTPFv0-P13-I.jpg'},
    color:'#B0E0E6',
},
  

  
  ];
  
  export const SecondSliderData = [
      {
          id:'catego-1',
          title:'Harem',
          image:{uri:'https://i.ibb.co/jhTgH32/nx11617-nmx-MU9-Zh3-H5-R.jpg'},
      },
      
      {
          id:'catego-2',
          title:'Action',
          image:{uri:'https://i.ibb.co/HpLvFRt/Demon-Slayer-cover.jpg'},
      },
      
      {
          id:'catego-3',
          title:'Romance',
          image:{uri:'https://i.ibb.co/cNBJfZc/bx2167-ub-U2875-AFRTH.jpg'},
      },
  
      {
          id:'catego-4',
          title:'Ecchi',
          image:require('../assets/images/home/cat1.jpg'),
      },
      
      ];
  