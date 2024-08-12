import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity,Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native'; 

const width=Dimensions.get('screen').width;
const height=Dimensions.get('screen').height;
export default function ExploreSlider() {
  const navigation = useNavigation();

  const slides = [
    {
      key: '1',
      image: require('../../assets/Images/ep1.png'),
      title: 'Explore Properties',
      screen: 'ExploreProperties', 
    },
    {
      key: '2',
      image: require('../../assets/Images/ep2.png'),
      title: 'Explore Colleges',
      screen:'ExploreColleges'
    },
    {
      key: '3',
      image: require('../../assets/Images/ep3.png'),
      title: 'Nearby University',
      
    },
    {
      key: '4',
      image: require('../../assets/Images/ep4.png'),
      title: 'Best Offers',
      screen: 'BestOffer',
    },
  ];

  const handleCardPress = (key, screen) => {
    if (screen) {
      navigation.navigate(screen, { key }); 
    }
  };

  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.cardContanier}>
      {slides.map((item, index) => (
        <TouchableOpacity key={index} onPress={() => handleCardPress(item.key, item.screen)}>
          <View style={styles.cards}>
            <Image source={item.image} style={styles.image} />
            <Text style={styles.titletext}>{item.title}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  cardContanier:{
   margin:width*0.04,marginTop:0,marginBottom:0
  },
  cards: {
    backgroundColor: 'white',
    height:height*0.13,
    width: width*0.27,
    borderRadius: 10,
    margin: height*0.01,
    marginLeft:width*0.02,
    marginRight: 1,
  },
  image: {
    width: width*0.1,
    height: height*0.03,
    resizeMode: 'contain',
    marginTop: height*0.03,
    marginLeft: width*0.03,
  },
  titletext: {
    marginLeft: width*0.03,
    marginTop: height*0.01,
    fontSize: width*0.04,
    fontWeight: '400',
    fontFamily:'NunitoSans-Regular'
  },
});
