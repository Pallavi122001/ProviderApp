import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const width=Dimensions.get('screen').width;
const height=Dimensions.get('screen').height;

export default function ValueAdded() {
  const navigation = useNavigation();

  const slides = [
    {
      key: '1',
      image: require('../../assets/Images/stationery.png'),
      title: 'Stationery',
      text: 'wide range of items from pens and paper to diaries and desk organizers.',
      screen:'Stationary'
    },
    {
      key: '2',
      image: require('../../assets/Images/Premiumvisit.png'),
      title: 'Premium Visit',
      screen:'PremiumVisit'
    },
    {
      key: '3',
      image: require('../../assets/Images/Zerodeposit.png'),
      title: 'Zero Deposit',
      
    },
    {
      key: '4',
      image: require('../../assets/Images/Internship.png'),
      title: 'Internship',
      
    },
    {
      key: '5',
      image: require('../../assets/Images/Offers.png'),
      title: 'Offers',
      screen:'Offer'
    },
    {
      key: '6',
      image: require('../../assets/Images/Courses.png'),
      title: 'Courses',
     
    },
    {
      key: '7',
      image: require('../../assets/Images/RoomEssentials.png'),
      title: 'Room Essentials',
      
    },
  ];
  const handleCardPress = (key, screen) => {
    if (screen) {
      navigation.navigate(screen, { key }); 
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        {slides.map((item, index) => (
          <TouchableOpacity key={index} onPress={() => handleCardPress(item.key, item.screen)}>
            <View key={index} style={styles.card}>
              <Image source={item.image} style={styles.image} />
              <Text style={styles.titletext}>{item.title}</Text>
              {item.text && <Text style={styles.text}>{item.text}</Text>}
            </View>
          </TouchableOpacity>
))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: width*0.05,
    marginBottom: height*0.01,
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 10,
    marginBottom: height*0.02,
    width: Dimensions.get('window').width / 3 - 20,
    alignItems:'flex-start',
    height:height*0.17,
  },
  image: {
    width: width*0.1,
    height: height*0.04,
    resizeMode: 'contain',
    marginTop: height*0.03,
    marginLeft:width*0.03
  },
  titletext: {
    marginTop: height*0.02,
    marginLeft: width*0.03,
    fontWeight: '400',
    marginRight:width*0.02,
    fontFamily:'NunitoSans-Regular'
  },
  text: {
    fontSize: width*0.02,
    textAlign: 'left',
    margin: height*0.01,
    marginTop:0,
    marginLeft: width*0.03,
    marginRight: width*0.03,
    fontWeight: '500',
    fontFamily:'Roboto-Regular'
  },
});
