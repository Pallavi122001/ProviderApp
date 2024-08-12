import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TextInput, ImageBackground, TouchableOpacity, StatusBar, Dimensions, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('window');

export default function PhoneLoginPage() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [phoneNumberError, setPhoneNumberError] = useState('');
  const navigation = useNavigation();

  const handleSendOtp = async () => {
    const isValidPhoneNumber = (/^\d{10}$/g).test(phoneNumber);

    if (!isValidPhoneNumber) {
      setPhoneNumberError('Please enter a valid 10-digit phone number');
    } else {
      const fullPhoneNumber = `91${phoneNumber}`;
      try {
        const response = await fetch(`https://api.dreamprovider.in/api/otp-apis/get/${fullPhoneNumber}`);
        const data = await response.json();
        console.log(data);
        if (data.status) {
          console.log('OTP fetched successfully, navigating to OtpLogin');
          navigation.navigate('OtpLogin', { phoneNumber: fullPhoneNumber });
        } else {
          Alert.alert('Error', 'Failed to send OTP. Please try again.');
        }
      } catch (error) {
        console.error('Error fetching OTP:', error);
        Alert.alert('Error', 'An error occurred while sending the OTP. Please try again.');
      }
    }
  };

  const handlePhoneNumberChange = (text) => {
    setPhoneNumber(text);
    setPhoneNumberError('');
  };

  return (
    <ScrollView style={{ paddingTop: 10, backgroundColor: 'white' }}>
      <StatusBar backgroundColor="white" barStyle="dark-content" translucent={true} />
      <Image style={styles.topimage} source={require('../../assets/Images/phone_login.png')} />
      <View style={{ marginLeft: width * 0.05 }}>
        <Text style={{ fontSize: width * 0.06, fontWeight: '200', fontFamily: 'NunitoSans-Regular' }}>Mobile Number</Text>
        <Text style={{ fontSize: width * 0.034, color: 'gray', fontFamily: 'NunitoSans-Regular' }}>Please enter your mobile number for OTP verification</Text>
      </View>
      <View style={styles.inputContainer}>
        <Text style={{ fontSize: width * 0.040, marginLeft: width * 0.02, fontFamily: 'NunitoSans-Semibold' }}>+91 | </Text>
        <TextInput
          style={styles.textinput}
          placeholder='Mobile Number'
          placeholderTextColor="#8B8A8A"
          onChangeText={handlePhoneNumberChange}
          keyboardType='numeric'
          value={phoneNumber}
        />
      </View>
      {phoneNumberError ? <Text style={styles.errorText}>{phoneNumberError}</Text> : null}
      <TouchableOpacity onPress={handleSendOtp}>
        <Text style={styles.button}>Continue</Text>
      </TouchableOpacity>
      <ImageBackground style={styles.image} source={require('../../assets/Images/login_background.png')}>
        <Text style={{
          paddingTop: width * 0.05, textAlign: 'center', fontSize: width * 0.037,
          fontFamily: 'NunitoSans-Semibold'
        }}>
          Need Help? <Text style={{ color: '#008CFF', fontFamily: 'NunitoSans-Semibold' }}>Click Here</Text>
        </Text>
      </ImageBackground>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  topimage: {
    resizeMode: 'contain',
    width: width * 0.95,
    height: width * 0.95,
    marginTop: width * 0.1
  },
  image: {
    width: width * 0.95,
    height: width * 0.64,
    resizeMode: 'contain',
  },
  button: {
    backgroundColor: '#008CFF',
    marginLeft: width * 0.05,
    marginRight: width * 0.03,
    borderRadius: width * 0.03,
    color: 'white',
    textAlign: 'center',
    justifyContent: 'center',
    textAlignVertical: 'center',
    width: width * 0.9,
    height: width * 0.12,
    fontFamily: 'Roboto-Regular'
  },
  textinput: {
    fontSize: width * 0.04,
    fontFamily: 'NunitoSans-Regular',
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
    marginTop: width * 0.01
  },
  errorText: {
    color: 'red',
    fontSize: width * 0.04,
    fontFamily: 'NunitoSans-Regular',
    marginBottom: width * 0.02,
    marginLeft: width * 0.06
  },
});
