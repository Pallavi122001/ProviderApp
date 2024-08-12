import { View, Text, StyleSheet, Image, TextInput, ScrollView, ImageBackground, TouchableOpacity, 
  TouchableWithoutFeedback, StatusBar, Dimensions, Alert } from 'react-native';
import { SimpleLineIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';

const { width } = Dimensions.get('window');
const { height } = Dimensions.get('window');

export default function PhoneUserDetail() {
  const route = useRoute();
  const { phoneNumber, otp } = route.params; 
  const [selectedGender, setSelectedGender] = useState(null);
  const [fullName, setFullName] = useState('');
  const [referralCode, setReferralCode] = useState('');
  const [showError, setShowError] = useState(false);

  const handleGenderSelect = (gender) => {
    setSelectedGender(gender);
    setShowError(false);
  };

  const navigation = useNavigation();

  const handleBtnClick = async () => {
    if (!selectedGender || !fullName) {
      setShowError(true);
      return;
    }

    const genderValue = selectedGender === 'female' ? 2 : 1;

    const requestBody = {
      number: phoneNumber,
      otp: otp,
      name: fullName,
      gender: genderValue,
      referral_code: referralCode,
    };

    try {
      const response = await fetch('https://api.dreamprovider.in/api/otp-apis/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      });

      const data = await response.json();
      console.log('API Response:', data);

      if (data.status) {
        // Handle successful response
        navigation.navigate('HomeScreen');
      } else {
        Alert.alert('Error', 'Failed to submit user details. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting user details:', error);
      Alert.alert('Error', 'An error occurred while submitting user details. Please try again.');
    }
  };

  return (
    <ScrollView style={{ backgroundColor: 'white' }}>
      <StatusBar backgroundColor="white" barStyle="dark-content" translucent={true} />
      <Image style={styles.Topimage} source={require('../../assets/Images/user_detail.png')} />
      <View style={{ marginLeft: width * 0.05 }}>
        <Text style={{ fontSize: width * 0.06, fontWeight: '200', fontFamily: 'NunitoSans-Regular' }}>User Details</Text>
        <Text style={{ fontSize: width * 0.04, color: 'gray', marginBottom: width * 0.02, fontFamily: 'NunitoSans-Regular' }}>
          Your mobile number is {phoneNumber}.
          <Text style={{ color: '#008CFF' }}>Change</Text>
        </Text>
      </View>
      <View style={styles.inputContainer}>
        <SimpleLineIcons name="user" size={width * 0.04} color="black" style={{ marginHorizontal: width * 0.02 }} />
        <TextInput
          style={{ flex: 1, fontSize: width * 0.035, paddingVertical: width * 0.03, fontFamily: 'NunitoSans-Regular' }}
          placeholder='Full Name '
          placeholderTextColor='#888'
          onChangeText={setFullName}
        />
      </View>
      {showError && !fullName && <Text style={styles.errorText}>Please enter your full name.</Text>}
      <View style={{ marginLeft: width * 0.05 }}>
        <Text style={{ fontWeight: '200', fontSize: width * 0.04, fontFamily: 'NunitoSans-Regular' }}>Looking For</Text>
        <View style={styles.textContainer}>
          <TouchableWithoutFeedback onPress={() => handleGenderSelect('female')}>
            <Text
              style={[
                styles.text,
                selectedGender === 'female' && { backgroundColor: '#008CFF', color: 'white' }
              ]}
            >
              Female
            </Text>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={() => handleGenderSelect('male')}>
            <Text
              style={[
                styles.text,
                selectedGender === 'male' && { backgroundColor: '#008CFF', color: 'white' }
              ]}
            >
              Male
            </Text>
          </TouchableWithoutFeedback>
        </View>
        {showError && !selectedGender && <Text style={styles.errorText}>Please select a gender.</Text>}
      </View>
      <Text style={{ marginLeft: width * 0.05, fontWeight: '200', marginVertical: width * 0.02, fontFamily: 'NunitoSans-Regular' }}>
        Do you have a Referral code?
      </Text>
      <View style={styles.inputContainer}>
        <MaterialCommunityIcons name="gift-outline" size={width * 0.06} color="black" style={{ marginHorizontal: width * 0.02 }} />
        <TextInput
          style={{ flex: 1, fontSize: width * 0.035, paddingVertical: width * 0.03, fontFamily: 'NunitoSans-Regular' }}
          placeholder='Referral Code (Optional)'
          placeholderTextColor='#888'
          onChangeText={setReferralCode}
        />
      </View>
      <ImageBackground style={styles.image} source={require('../../assets/Images/login_background.png')}>
        <Text style={styles.bottomText}>
          By clicking on verify, I accept all the terms and conditions.
        </Text>
        <TouchableOpacity onPress={handleBtnClick}>
          <Text style={styles.button}>Continue</Text>
        </TouchableOpacity>
        <Text style={{ paddingTop: width * 0.015, textAlign: 'center', fontSize: width * 0.035, fontFamily: 'NunitoSans-Semibold' }}>
          Need Help? <Text style={{ color: '#008CFF' }}>Click Here</Text>
        </Text>
      </ImageBackground>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  Topimage: {
    resizeMode: 'contain',
    width: width * 0.95,
    height: width * 0.9,
  },
  image: {
    width: '100%',
    height: width * 0.90,
    resizeMode: 'contain',
  },
  button: {
    backgroundColor: '#008CFF',
    marginLeft: width * 0.05,
    marginRight: width * 0.02,
    borderRadius: 10,
    paddingTop: width * 0.04,
    width: width * 0.9,
    height: width * 0.12,
    color: 'white',
    textAlign: 'center',
    fontSize: width * 0.045,
    fontFamily: 'Roboto-Medium',
  },
  textContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 0, 
    marginTop: 0, 
    alignItems: 'center',
  },
  text: {
    backgroundColor: '#e1ecf0',
    width: width * 0.3,
    height: width * 0.09,
    borderRadius: 50,
    fontSize: width * 0.035,
    textAlign: 'center',
    lineHeight: width * 0.1,
    marginRight: 5,
    fontFamily: 'NunitoSans-Semibold',
    color: '#000000',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#e1ecf0',
    borderRadius: 10,
    width: width * 0.9,
    height: width * 0.12,
    marginHorizontal: width * 0.040,
    marginBottom: width * 0.025,
  },
  bottomText: {
    fontWeight: '200',
    marginLeft: width * 0.06,
    marginBottom: width * 0.02,
    marginTop: width * 0.01,
    fontFamily: 'NunitoSans-Regular',
    textAlign: 'left',
    fontSize: width * 0.032,
  },
  errorText: {
    color: 'red',
    fontSize: width * 0.035,
    fontFamily: 'NunitoSans-Regular',
    marginTop: height * 0.01,
  },
});
