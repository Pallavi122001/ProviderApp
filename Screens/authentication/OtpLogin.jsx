import React, { useRef, useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput, ScrollView, ImageBackground, TouchableOpacity, StatusBar, Dimensions, Alert } from 'react-native';
import { useNavigation, useFocusEffect, useRoute } from '@react-navigation/native';

const { width } = Dimensions.get('window');

export default function OtpLogin() {
    const navigation = useNavigation();
    const route = useRoute();
    const { phoneNumber } = route.params; 
    const [otp, setOTP] = useState(Array(6).fill(''));
    const inputRefs = Array.from({ length: 6 }).map(() => useRef(null));

    const handleVerifyOTP = async () => {
        const otpString = otp.join('');
        if (otpString.length === 6) {
            try {
                const response = await fetch(`https://api.dreamprovider.in/api/otp-apis/verify/${phoneNumber}/${otpString}`);
                const data = await response.json();
                if (data.status) {
                    navigation.navigate('PhoneUSerDetail', { phoneNumber: phoneNumber, otp: otpString });
                } else if (data.msg === "RESEND_OTP") {
                    Alert.alert('Error', 'Something went wrong, resending OTP.');
                    handleResendOTP(); 
                } else {
                    Alert.alert('Error', 'Failed to verify OTP. Please try again.');
                }
            } catch (error) {
                console.error('Error verifying OTP:', error);
                Alert.alert('Error', 'An error occurred while verifying the OTP. Please try again.');
            }
        } else {
            Alert.alert('Error', 'Please enter a 6-digit OTP.');
        }
    };
    
    const handleResendOTP = async () => {
        try {
            const response = await fetch(`https://api.dreamprovider.in/api/otp-apis/resend/${phoneNumber}`);
            const data = await response.json();
            if (data.success) {
                Alert.alert('Success', 'OTP has been resent.');
            } else {
                Alert.alert('Error', 'Failed to resend OTP. Please try again.');
            }
        } catch (error) {
            console.error('Error resending OTP:', error);
            Alert.alert('Error', 'An error occurred while resending the OTP. Please try again.');
        }
    };

    const focusNextInput = (index, text) => {
        if (text && index < inputRefs.length - 1) {
            inputRefs[index + 1].current.focus();
        }
    };

    useEffect(() => {
        const clearInputs = () => {
            inputRefs.forEach(ref => {
                if (ref.current) {
                    ref.current.clear();
                }
            });
        };

        return () => {
            clearInputs();
        };
    }, []);

    useFocusEffect(
        React.useCallback(() => {
            const clearInputs = () => {
                inputRefs.forEach(ref => {
                    if (ref.current) {
                        ref.current.clear();
                    }
                });
            };
            clearInputs();
        }, [])
    );

    return (
        <ScrollView style={{ paddingTop: width * 0.02, backgroundColor: 'white' }}>
            <StatusBar backgroundColor="white" barStyle="dark-content" translucent={true} />
            <Image style={styles.Topimage} source={require('../../assets/Images/otp_login.png')} />
            <View style={{ marginLeft: width * 0.05 }}>
                <Text style={{ fontSize: width * 0.06, fontWeight: '200', fontFamily: 'NunitoSans-Regular' }}>Enter Code</Text>
                <Text style={{ fontSize: width * 0.04, color: 'gray', fontFamily: 'NunitoSans-Regular' }}>Please enter 6 digit code </Text>
            </View>
            <View style={styles.textContanier}>
                {otp.map((value, index) => (
                    <TextInput
                        key={index}
                        ref={inputRefs[index]}
                        style={styles.inputText}
                        placeholder=''
                        keyboardType='numeric'
                        onChangeText={(text) => {
                            const newOtp = [...otp];
                            newOtp[index] = text;
                            setOTP(newOtp);
                            focusNextInput(index, text);
                        }}
                        value={value}
                        maxLength={1}
                    />
                ))}
            </View>
            <TouchableOpacity onPress={handleVerifyOTP}>
                <Text style={styles.button}>Continue</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleResendOTP}>
                <Text style={styles.reset}>Resend OTP</Text>
            </TouchableOpacity>
            <ImageBackground style={styles.image} source={require('../../assets/Images/login_background.png')}>
                <Text style={{ paddingTop: width * 0.073, textAlign: 'center', fontSize: width * 0.037, fontFamily: 'NunitoSans-Semibold' }}>
                    Need Help? <Text style={{ color: '#008CFF', }}>Click Here</Text>
                </Text>
            </ImageBackground>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    Topimage: {
        resizeMode: 'contain',
        width: width * 0.95,
        height: width * 0.95,
        marginTop: width * 0.0
    },
    button: {
        backgroundColor: '#008CFF',
        marginLeft: width * 0.05,
        marginRight: width * 0.03,
        borderRadius: width * 0.03,
        color: 'white',
        textAlign: 'center',
        textAlignVertical: 'center',
        width: width * 0.9,
        height: width * 0.12,
        fontFamily: 'Roboto-Medium'
    },
    textContanier: {
        margin: width * 0.02,
        marginLeft: width * 0.05,
        display: 'flex',
        flexDirection: 'row',
    },
    image: {
        width: width * 0.95,
        height: width * 0.64,
        resizeMode: 'contain'
    },
    inputText: {
        backgroundColor: '#e1ecf0',
        width: width * 0.12,
        height: width * 0.12,
        borderRadius: width * 0.03,
        fontSize: width * 0.05,
        marginRight: width * 0.02,
        textAlign: 'center'
    },
    reset: {
        marginLeft: width * 0.69,
        marginBottom: width * 0.005,
        fontSize: width * 0.04,
        fontWeight: '600',
        marginTop: width * 0.055,
        fontFamily: 'NunitoSans-Semibold'
    }
});
