import { View, Text, StyleSheet, TouchableOpacity, StatusBar, Dimensions } from 'react-native';
import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { SvgXml } from 'react-native-svg';
import { Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import BestOfferCards from '../Order/BestOfferCards';

const { width } = Dimensions.get('window');
const { height } = Dimensions.get('window');
export default function BestOffer() {
  const navigation = useNavigation();
  const xml = `<svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M18 5H3.83L7.41 1.41L6 0L0 6L6 12L7.41 10.58L3.83 7H18V5Z" fill="white"/>
  </svg>`;
  
  const HandleIconClick = () => {
    navigation.navigate('ExploreProperties');
  };

  return (
    <View style={{ backgroundColor: 'white', minHeight: '100%' }}>
      <StatusBar backgroundColor="#008CFF" barStyle="dark-content" translucent={true} />
      <View style={styles.mainContainer}>
        <View style={{ marginLeft: width * 0.01 }}>
          <Text style={{ fontSize: width * 0.03, color: 'white',fontFamily:'NunitoSans-Regular' }}>Hi there! Searching in</Text>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
            <View style={{ flexDirection: 'row' }}>
              <Text style={{ fontSize: width * 0.04, color: 'white',fontFamily:'NunitoSans-Semibold' }}>Noida, Sector 62</Text>
              <MaterialIcons name="keyboard-arrow-down" size={width * 0.06} color="white" style={{ marginLeft: width * 0.02 }} />
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center'}}>
              <Entypo style={{ marginRight: width * 0.02,marginLeft: width * 0.38  }} 
              name="heart-outlined" size={width * 0.05} color="white" />
              <TouchableOpacity onPress={HandleIconClick}>
                <SvgXml xml={xml}/>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
      <Text style={styles.heading}>
      Best Offers</Text>
      <BestOfferCards/>
      <BestOfferCards/>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#008CFF',
    paddingHorizontal: width*0.04,
    paddingTop:height *0.05 ,
    paddingBottom: height *0.01,
    borderRadius: 15
  },
  heading:{
    fontSize: width * 0.04, fontWeight: '600', marginTop:height * 0.010,
    marginHorizontal: width * 0.07, marginBottom: width * 0.01 ,fontFamily:'NunitoSans-Semibold'
  },
});
