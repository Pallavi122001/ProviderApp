import { View, StyleSheet, Image, Dimensions } from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import AppIntroSlider from 'react-native-app-intro-slider';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const slides = [
  {
    key: '1',
    image: require('../../assets/Images/apasara.png'),
  },
  {
    key: '2',
    image: require('../../assets/Images/apasara.png'),
  },
  {
    key: '3',
    image: require('../../assets/Images/apasara.png'),
  },
];

export default function ProductBottomsheetImageSlider() {
  const sliderRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentIndex < slides.length - 1) {
        setCurrentIndex((prevIndex) => prevIndex + 1);
        sliderRef.current?.goToSlide(currentIndex + 1);
      } else {
        setCurrentIndex(0);
        sliderRef.current?.goToSlide(0);
      }
    }, 4000); 

    return () => clearInterval(interval);
  }, [currentIndex]);

  const renderItem = ({ item }) => {
    return (
      <View>
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
        dotStyle={styles.dot}
        activeDotStyle={styles.activeDot}
        onSlideChange={(index) => setCurrentIndex(index)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  sliderContainer: { 
    right: 0,
    bottom: 0,
    height: windowHeight * 0.36,
  },
  sliderImage: {
    width: windowWidth * 0.74,
    height: windowHeight * 0.4,
    borderRadius: 30,
    marginLeft:windowWidth*0.09,
    resizeMode: 'contain',
  },
  dot: {
    width: windowWidth * 0.05,
    height: windowHeight * 0.01,
    borderRadius: 4,
    backgroundColor: '#ccc',
    marginHorizontal: windowWidth * 0.02,
     marginTop:windowWidth * 0.01
  },
  activeDot: {
    width: windowWidth * 0.05,
    height: windowHeight * 0.01,
    borderRadius: 4,
    backgroundColor: '#008CFF',
    marginTop:windowWidth * 0.01
  },
});


