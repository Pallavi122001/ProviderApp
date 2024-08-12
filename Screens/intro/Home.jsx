import React from 'react';
import { View, StyleSheet, Image, Text, ImageBackground, TouchableOpacity, StatusBar, Platform, Dimensions } from 'react-native';
import Swiper from 'react-native-swiper';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const slides = [
  {
    key: '1',
    title: 'Find Perfect Stay',
    color: '#F38587',
    image: require('../../assets/Images/slider1.png'),
    text: ' PGs, hostels, flats, and rooms—all in one place.  ',
    BottomImage: require('../../assets/Images/intro1.png')
  },
  {
    key: '2',
    title: 'Tailored Choices',
    color: '#0BC4A2',
    image: require('../../assets/Images/slider2.png'),
    text: ' Handpicked listings to match your budget and preferences.  ',
    BottomImage: require('../../assets/Images/intro2.png')
  },
  {
    key: '3',
    title: 'Peace of Mind',
    color: '#008CFF',
    image: require('../../assets/Images/slider3.png'),
    text: ' Verified listings and straightforward communication with hosts.  ',
    BottomImage: require('../../assets/Images/intro3.png')
  },
];

export default function Home() {
  const swiperRef = React.useRef(null);
  const navigation = useNavigation();

  const handleNextSlide = () => {
    if (swiperRef.current) {
      swiperRef.current.scrollBy(1);
    }
  };

  const handleGetStarted = () => {
    navigation.navigate('HomeScreen');
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="white" barStyle="dark-content" translucent={true} />
      <Swiper
        ref={swiperRef}
        style={styles.wrapper}
        showsButtons={false}
        loop={false}
        showsPagination={false}
      >
        {slides.map((slide, index) => (
          <View key={slide.key} style={styles.slide}>
            <ImageBackground source={require('../../assets/Images/slider_top.png')} style={styles.Image}>
              <Text style={[styles.title, { color: slide.color }]}>{slide.title}</Text>
            </ImageBackground>
            <Image source={slide.image} style={styles.sliderImage} />
            <Image source={slide.BottomImage} style={styles.image} />
            <Text style={styles.slidetext}>{slide.text}</Text>
            <ImageBackground source={require('../../assets/Images/slider_bottom.png')} style={styles.backgroundImage}>
              {index === slides.length - 1 ? (
                <TouchableOpacity style={styles.getStartedButton} onPress={handleGetStarted}>
                  <Text style={styles.getStartedText}>Get Started</Text>
                </TouchableOpacity>
              ) : (
                <TouchableOpacity onPress={handleNextSlide} style={styles.iconContainer}>
                <Ionicons name="arrow-forward-circle" size={56} color="#263238" style={styles.icon} />
                </TouchableOpacity>
              )}
            </ImageBackground>
          </View>
        ))}
      </Swiper>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  wrapper: {},
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Image: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height * 0.3,
    justifyContent: 'center',
    alignItems: 'center',marginTop:100
  },
  image:{
    width: Dimensions.get('window').width*0.15,
    height: Dimensions.get('window').height * 0.007,
    borderRadius:5
  },
  title: {
    fontSize: 21,
    marginTop: Dimensions.get('window').height * 0.08,
    fontFamily:'NunitoSans-Semibold',
  },
  sliderImage: {
    width: Dimensions.get('window').width * 0.9,
    height: Dimensions.get('window').height * 0.30,
    resizeMode: 'contain',
    marginBottom: Dimensions.get('window').height * 0.01,
  },
  icon: {
    marginLeft: Dimensions.get('window').width * 0.8,
    top: Dimensions.get('window').height * 0.03,
  },
  backgroundImage: {
    width: Dimensions.get('window').width * 1.05,
    height: Dimensions.get('window').height * 0.35,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconContainer: {
    position: 'absolute',
    left: Dimensions.get('window').width * 0.05,
    top: Dimensions.get('window').height * 0.16,
  },
  getStartedButton: {
    backgroundColor: '#263238',
    paddingHorizontal: Dimensions.get('window').width * 0.05,
    paddingVertical: Dimensions.get('window').height * 0.02,
    borderRadius: Dimensions.get('window').width * 0.08,
    marginLeft: Dimensions.get('window').width * 0.5,
    top: Dimensions.get('window').height * 0.05,
    left: Dimensions.get('window').width * 0.05,
  },
  getStartedText: {
    fontSize: Dimensions.get('window').width * 0.045,
    color: 'white',
    fontFamily:'Roboto-Medium'
  },
  slidetext: {
    fontSize: Dimensions.get('window').width * 0.031,
    marginTop: Dimensions.get('window').height * 0.02,
    textAlign: 'center',
    fontFamily: 'NunitoSans-Regular'
  },
  
});
