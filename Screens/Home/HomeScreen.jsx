import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, StatusBar, TextInput, TouchableOpacity, ImageBackground, Dimensions, Animated } from 'react-native';
import { FontAwesome, MaterialCommunityIcons, MaterialIcons, FontAwesome5 } from '@expo/vector-icons';
import Headings from '../Components/Headings';
import ExploreSlider from '../Home/ExploreSlider';
import HomeSlider from '../Home/HomeSlider';
import TrendingSlider from '../Home/TrendingSlider';
import OtherContanier from '../Home/OtherContanier';
import ValueAdded from '../Home/ValueAdded';
import { useNavigation,useRoute } from '@react-navigation/native';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

export default function HomeScreen() {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const route = useRoute();
const { fullName ,phoneNumber} = route.params ? route.params : {}; 
  useEffect(() => {
    setModalVisible(false);
  }, []);

  const handleScroll = (event) => {
    const offsetY = event.nativeEvent.contentOffset.y;
    if (offsetY > 0 && !modalVisible) {
      setModalVisible(true);
    } else if (offsetY <= 0 && modalVisible) {
      setModalVisible(false);
    }
  };
const handleProfiles=()=>{
  if(fullName && phoneNumber){
    navigation.navigate('Logout',{ fullName: fullName ,phoneNumber:phoneNumber})
  }else{
    navigation.navigate('Profile')
  }
}
  return (
    <View>
      {modalVisible && (
        <View style={styles.modal}>  
        <View style={styles.groupbtn}>
        <View style={styles.btn}>
          <FontAwesome5 name="bed" size={10} color="white" />
          <TouchableOpacity style={styles.touchableOpacity}>
            <Text style={styles.btntext}>Hostel</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.btn}>
    <FontAwesome5 name="bed" size={10} color="white" />
    <TouchableOpacity style={styles.touchableOpacity}>
      <Text style={styles.btntext}>PG</Text>
    </TouchableOpacity>
  </View><View style={styles.btn}>
  <FontAwesome5 name="bed" size={10} color="white" />
  <TouchableOpacity style={styles.touchableOpacity}>
    <Text style={styles.btntext}>Rooms</Text>
  </TouchableOpacity>
</View><View style={styles.btn}>
<FontAwesome5 name="home" size={10} color="white" />
<TouchableOpacity style={styles.touchableOpacity}>
  <Text style={styles.btntext}>Flat</Text>
</TouchableOpacity>
</View>
<FontAwesome  name="bell-o" size={21} color="white" style={{marginLeft:width*0.07}} />
<TouchableOpacity onPress={handleProfiles}>
  <Image  source={require('../../assets/Images/profile.png')} style={{marginLeft:width*0.02}} />
</TouchableOpacity>  
    </View>
    <View style={styles.ModalInputContainer}>
    <TextInput
      style={{ flex: 1, fontSize: height * 0.015, height: height * 0.055, paddingLeft: 10, fontFamily: 'Roboto-Regular' }}
      placeholder='Search city, locality, landmark, ...'
      placeholderTextColor='#888'
    />
    <FontAwesome name="search" size={height * 0.017} color="white" style={{ backgroundColor: '#b86246', padding: 5, borderRadius: 5, marginRight: 5 }} />
  </View>
        </View>
      )}
      <ScrollView
        style={styles.container}
        onScroll={handleScroll}
        scrollEventThrottle={16}
      >
        <StatusBar backgroundColor="#008CFF" barStyle="dark-content" translucent={true} />
        <ImageBackground style={styles.backgroundImage} source={require('../../assets/Images/background_room.png')}>
          <View style={styles.Modalheader}>
            <FontAwesome style={{ marginTop: 7 }} name="bell-o" size={21} color="white" />
            <TouchableOpacity onPress={handleProfiles}>
              <Image style={styles.profileImage} source={require('../../assets/Images/profile.png')} />
            </TouchableOpacity>
          </View>
          <View style={styles.textContainer}>
            <Text style={{ fontSize: height * 0.015, color: 'white', fontFamily: 'NunitoSans-Regular' }}>Hi there! Searching in</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text onPress={()=>navigation.navigate('SearchCity')} style={styles.text}> Select Location</Text>
              <MaterialIcons name="keyboard-arrow-down" size={height * 0.025} color="white" style={{ marginRight: 10 }} />
            </View>
            <View style={styles.groupbtn}>
            <View style={styles.btn}>
              <FontAwesome5 name="bed" size={10} color="white" />
              <TouchableOpacity style={styles.touchableOpacity}>
                <Text style={styles.btntext}>Hostel</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.btn}>
        <FontAwesome5 name="bed" size={10} color="white" />
        <TouchableOpacity style={styles.touchableOpacity}>
          <Text style={styles.btntext}>PG</Text>
        </TouchableOpacity>
      </View><View style={styles.btn}>
      <FontAwesome5 name="bed" size={10} color="white" />
      <TouchableOpacity style={styles.touchableOpacity}>
        <Text style={styles.btntext}>Rooms</Text>
      </TouchableOpacity>
    </View><View style={styles.btn}>
    <FontAwesome5 name="home" size={10} color="white" />
    <TouchableOpacity style={styles.touchableOpacity}>
      <Text style={styles.btntext}>Flat</Text>
    </TouchableOpacity>
    </View>
            
          </View>
            <View style={styles.inputContainer}>
              <TextInput
                style={{ flex: 1, fontSize: height * 0.015, height: height * 0.055, paddingLeft: 10, fontFamily: 'Roboto-Regular' }}
                placeholder='Search city, locality, landmark, ...'
                placeholderTextColor='#888'
              />
              <FontAwesome name="search" size={height * 0.017} color="white" style={{ backgroundColor: '#b86246', padding: 5, borderRadius: 5, marginRight: 5 }} />
            </View>
            <HomeSlider />
          </View>
        </ImageBackground>

        {/* Explore Properties Slider */}
        <View style={{ marginTop: height * 0.16 }}>
          <Headings text={'Explore Properties'} isViewAll={false} />
          <ExploreSlider />
        </View>

        {/* Trending Slider */}
        <View style={{ marginLeft: width * 0.025, marginTop: height*0.00 }}>
          <Headings text={'Trending'} isViewAll={true} />
          <TrendingSlider />
        </View>

        {/* Value Added Services */}
        <View>
          <Headings text={'Value Added Services'} isViewAll={false} />
          <ValueAdded />
        </View>

        {/* Others */}
        <View>
          <Headings text={'Others'} />
          <OtherContanier />
        </View>
        <Text style={{ textAlign: 'center', fontFamily: 'NunitoSans-Regular', paddingBottom: 15 }}>About Us | Why choose us</Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ebf0ed',
  },
  backgroundImage: {
    width: '100%',
    resizeMode: 'contain',
    height: height * 0.49,
    zIndex: -1
  },
  header: {
    paddingTop: height * 0.05,
    marginLeft: width * 0.75,
    flexDirection: 'row'
  },
  textContainer: {
    paddingLeft: width * 0.05, fontFamily: 'NunitoSans-Bold',marginTop:-15
  },
  text: {
    color: 'white',
    fontSize: height * 0.02,
    fontFamily: 'NunitoSans-Semibold'
  },
  groupbtn: {
    flexDirection: 'row',
    marginBottom: height * 0.01,
  },
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#2e60b0',
    padding: height*0.005,
    paddingLeft:width*0.02,
    paddingRight:width*0.02,
    borderRadius:4,
    marginRight: height * 0.01,
    marginTop: height * 0.01
  },
  btntext: {
    fontSize: 13, color: 'white', fontFamily: 'Roboto-Regular'
  },
  touchableOpacity: {
    marginLeft: height * 0.003,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#e1ecf0',
    borderRadius: height * 0.015,
    marginTop: height * 0.001,
    marginRight: width * 0.05
  },
  profileImage: {
    width: width * 0.12,
    height: height * 0.06,
    marginLeft: width * 0.03
  },
  bottomcontanier: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    borderRadius: height * 0.01,
    height: height * 0.065,
    width: width * 0.99,
    paddingTop: height * 0.01,
    paddingLeft: width * 0.05,
    paddingRight: width * 0.04,
    borderTopLeftRadius: height * 0.025,
    borderTopRightRadius: height * 0.025,
    alignSelf: 'center',
    marginBottom: height * 0.02
  },
  btnText: {
    fontFamily: 'NunitoSans-Semibold', color: 'gray', padding: 2
  },
  modal: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: height * 0.19,
    backgroundColor: '#008CFF',
    zIndex: 999,
    elevation: 10,
    paddingHorizontal: width * 0.05,
    paddingTop: height * 0.05,
    borderBottomLeftRadius:15,
    borderBottomRightRadius:15,
  },
  Modalheader:{
    paddingTop: height * 0.05,
    marginLeft: width * 0.75,
    flexDirection: 'row'
  },
  modal_header:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'flex-end'
  },
  ModalInputContainer:{
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#e1ecf0',
    borderRadius: height * 0.015,
    marginTop: height * 0.002,
    marginRight: width * 0.01
  },
 
});

