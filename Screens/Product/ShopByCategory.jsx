import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
const { width } = Dimensions.get('window');
const cardWidth = (width - 40) / 4;

const slides = [
  { key: '1', image: require('../../assets/Images/category.png'), title: 'Office' },
  { key: '2', image: require('../../assets/Images/category.png'), title: 'Office' },
  { key: '3', image: require('../../assets/Images/category.png'), title: 'Office' },
  { key: '4', image: require('../../assets/Images/category.png'), title: 'Office' },
  { key: '5', image: require('../../assets/Images/category.png'), title: 'Office' },
  { key: '6', image: require('../../assets/Images/category.png'), title: 'Office' },
  { key: '7', image: require('../../assets/Images/category.png'), title: 'Office' },
  { key: '8', image: require('../../assets/Images/category.png'), title: 'Office' },
];

export default function ShopByCategory() {
  const navigation=useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.cardsContainer}>
        {slides.map(item => (
          <View key={item.key} style={styles.card}>
            <TouchableOpacity onPress={()=>navigation.navigate('ProductPage')}>
            <Image source={item.image} style={styles.image} /></TouchableOpacity>
            <Text style={styles.title}>{item.title}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginBottom: 0,
  },
  cardsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  card: {
    width: cardWidth,
    alignItems: 'center',
    marginBottom: 10,
  },
  image: {
    width: cardWidth - 20, 
    height: cardWidth - 20,
    borderRadius: 10,
    resizeMode: 'contain',
  },
  title: {
    textAlign: 'center',
    marginTop: 10,
    fontWeight: '100',fontFamily:'NunitoSans-Regular'
  },
});
