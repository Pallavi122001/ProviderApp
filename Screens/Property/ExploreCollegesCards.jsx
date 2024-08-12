
import { View, Text, TouchableOpacity, Image, StyleSheet, Dimensions } from 'react-native';
import React from 'react';

const { width } = Dimensions.get('window');
const { height} = Dimensions.get('window');
export default function ExploreCollegesCards() {
  return (
    <View>
    <View style={styles.container}>
      <Image style={styles.image} source={require('../../assets/Images/Explorecollege2.png')} />
      <Text style={styles.text}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>More Details</Text>
      </TouchableOpacity>
    </View>
    <View style={styles.container}>
      <Image style={styles.image} source={require('../../assets/Images/Explorecollege1.png')} />
      <Text style={styles.text}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>More Details</Text>
      </TouchableOpacity>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: width * 0.02,paddingTop:width * 0.01,paddingBottom:width *0.01,
    borderRadius: width * 0.05,
    margin: width * 0.02,
    marginLeft: width * 0.02,
    justifyContent:'center',
    shadowColor: 'black',
    elevation: 5,
  },
  text: {
    margin: width * 0.02,
    marginTop: 0,
    fontWeight: '100',
    fontSize: width * 0.03,
    marginRight: width * 0.15,fontFamily:'NunitoSans-Regular'
  },
  image: {
    resizeMode: 'contain',
    width: width * 0.9,
    height: width * 0.53,
  },
  button: {
    backgroundColor: '#263238',
    width: width * 0.88,
    height: width * 0.13,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: width * 0.06,
    marginTop: width * 0.005,
    marginBottom:width *0.03
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: width * 0.04,fontFamily:'Roboto-Medium'
  },
});
