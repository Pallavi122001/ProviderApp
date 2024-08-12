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

export default function HomeSlider() {
  const sliderRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentIndex < slides.length - 1) {
        setCurrentIndex(prevIndex => prevIndex + 1);
        sliderRef.current?.goToSlide(currentIndex + 1);
      } else {
        setCurrentIndex(0);
        sliderRef.current?.goToSlide(0);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex]);

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
        onSlideChange={({ index }) => setCurrentIndex(index)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  sliderContainer: {
    position: 'relative',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1,
    height: height*0.15,
  },
  slide: {
    alignItems: 'center',
  },
  sliderImage: {
    width:width*0.9,height:height*0.15,
        borderRadius: width*0.06,
        resizeMode: 'cover',
  },
});
