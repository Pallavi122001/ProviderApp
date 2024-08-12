import { View, StyleSheet, Image, Dimensions } from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import AppIntroSlider from 'react-native-app-intro-slider';
import axios from 'axios';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


export default function StationarySlider() {
  const sliderRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [homeimage, setHomeImages] = useState([]);

  useEffect(() => {
      fetchData();
  }, []);

  const fetchData = async () => {
      try {
          const response = await axios.get('https://api.dreamprovider.in/api/products-banners?populate=image');
          setHomeImages(response.data.data);
      } catch (error) {
          console.error('Error fetching data:', error);
      }
  };
  useEffect(() => {
    const interval = setInterval(() => {
      if (currentIndex < homeimage.length - 1) {
        setCurrentIndex((prevIndex) => prevIndex + 1);
        sliderRef.current?.goToSlide(currentIndex + 1);
      } else {
        setCurrentIndex(0);
        sliderRef.current?.goToSlide(0);
      }
    },2000); 

    return () => clearInterval(interval);
  }, [currentIndex]);

  const renderItem = ({ item }) => {
    return (
      <View>
        <Image source={{ uri: item.attributes.image.data.attributes.formats.large.url }} style={styles.sliderImage} />
      </View>
    );
  };

  return (
    <View style={styles.sliderContainer}>
      <AppIntroSlider
        ref={sliderRef}
        data={homeimage}
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
    left: windowWidth*0.04,
    right: 0,
    bottom: 0,
    height: windowHeight * 0.37,
    marginBottom:-windowHeight*0.04
  },
  sliderImage: {
    width: windowWidth * 0.93,
    height: windowHeight * 0.3,
    borderRadius:windowWidth * 0.15,
    resizeMode: 'contain',
  },
  dot: {
    width: windowWidth * 0.05,
    height: windowHeight * 0.01,
    borderRadius: 4,
    backgroundColor: '#ccc',
    marginHorizontal: windowWidth * 0.02,
     marginTop:windowWidth * 0.03
  },
  activeDot: {
    width: windowWidth * 0.05,
    height: windowHeight * 0.01,
    borderRadius: 4,
    backgroundColor: '#008CFF',
    marginTop:windowWidth * 0.03
  },
});