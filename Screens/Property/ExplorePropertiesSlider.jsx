import React, { useEffect, useRef, useState } from 'react';
import { View, StyleSheet, Image, Dimensions } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';

const width=Dimensions.get('screen').width;
const height=Dimensions.get('screen').height;

const slides = [
  {
    key: '1',
    image: require('../../assets/Images/exploredetail.png'),
  },
  {
    key: '2',
    image: require('../../assets/Images/exploredetail.png'),
  },
  {
    key: '3',
    image: require('../../assets/Images/exploredetail.png'),
  },
];

export default function ExplorePropertiesSlider() {
  const sliderRef = useRef(null);
  const renderItem = ({ item }) => {
    return (
      <View style={styles.slide}>
        <Image source={item.image} style={styles.sliderImage} />
      </View>
    );
  };

  return (
    <View style={styles.sliderContainer}>
      <AppIntroSlider
        ref={sliderRef}
        data={slides}
        renderItem={renderItem}
        showNextButton={false}
        showDoneButton={false}
        renderPagination={() => null}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  slide: {
    alignItems: 'center',marginLeft:-width*0.1
  },
  sliderImage: {
    width:width*0.8,height:height*0.10,
        borderRadius: width*0.06,
        resizeMode: 'contain',
  },
});
