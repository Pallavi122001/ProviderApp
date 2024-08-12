import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, StatusBar, TextInput, Dimensions } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

export default function ListProperty() {
    const navigation = useNavigation();

    const HandleIconClick = () => {
        navigation.navigate('HomeScreen');
    }
    const HandleSubmitButton= () => {
        navigation.navigate('PropertyComplete');
    }

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="white" barStyle="dark-content" translucent={true} />
            <View>
            <View style={styles.header}>
            <Text style={styles.headtext}>List Property</Text>
            <TouchableOpacity onPress={HandleIconClick}>
                <AntDesign name="arrowleft" size={24} color="black" />
            </TouchableOpacity>
        </View>
        <View style={styles.topsection}>
            <View >
                <Text style={styles.text1}>Provider Property </Text>
                <Text style={styles.text1}>Listing Form</Text>
                <View style={{ marginTop: screenHeight*0.01 }}>
                    <Text style={styles.text2}>Fill this form to get your</Text>
                    <Text style={styles.text2}>property listed on our </Text>
                    <Text style={styles.text2}>platform</Text>
                </View>
            </View>
            <View>
                <Image source={require('../../assets/Images/listroom.png')} style={styles.image} />
            </View>
        </View>
        <View style={{ marginTop: screenHeight*0.01 }}>
            <TextInput placeholder='Property Name' style={styles.inputContainer} />
            <TextInput placeholder='Owner Name' style={styles.inputContainer} />
            <TextInput placeholder='Property Address' multiline={true} numberOfLines={4} 
            style={styles.inputContainer1} />
            <Text style={styles.text3}>Please enter the complete address of property.</Text>
            <TextInput placeholder='Mobile Number' style={styles.inputContainer} />
            <Text style={styles.text4}>Type of Property</Text>
            <View style={styles.radioContainer}>
                <Text style={styles.radioText}>Hostel</Text>
                <Text style={styles.radioText}>PG</Text>
                <Text style={styles.radioText}>Flat</Text>
                <Text style={styles.radioText}>Room</Text>
            </View>
            <View style={{ marginTop: screenHeight*0.01  }}>
                <View style={styles.inputContainer2}>
                    <TextInput style={styles.inputContainer3} placeholder='Number of Beds' placeholderTextColor='#888' />
                    <MaterialIcons name="keyboard-arrow-down" size={24} color="gray" style={{ marginRight: 10 }} />
                </View>
            </View>
        </View>  
            </View>
            <View>
            <TouchableOpacity style={styles.btn}>
                    <Text  
                    style={styles.btnText} onPress={ HandleSubmitButton}>Submit</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',flex:1,justifyContent:'space-between'
    },
    header: {
        paddingTop: screenHeight*0.04,
        padding:screenHeight*0.02 ,
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 5,
        shadowRadius: 3.84,
        elevation: 7,
    },
    headtext: {
        fontSize: 18,
        marginLeft: 10,
        fontFamily: 'NunitoSans-Semibold'
    },
    topsection: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        marginTop: screenHeight*0.01
    },
    text1: {
        fontSize: 20,
        fontFamily: 'NunitoSans-Semibold'
    },
    text2: {
        fontSize: 16,
        color: 'gray',
        fontFamily: 'NunitoSans-Regular'
    },
    image: {
        resizeMode: 'contain',
        width: screenWidth * 0.4,
        height: screenWidth * 0.4
    },
    inputContainer: {
        width: screenWidth * 0.9,
        height: screenHeight*0.05,
        backgroundColor: '#e1ecf0',
        marginHorizontal: 20,
        marginBottom: 10,
        borderRadius: 15,
        paddingLeft: 20,
        fontFamily: 'NunitoSans-Regular'
    },
    inputContainer1: {
        width: screenWidth * 0.9,
        height: screenHeight * 0.09,
        backgroundColor: '#e1ecf0',
        marginHorizontal: 20,
        marginBottom: 10,
        borderRadius: 15,
        paddingLeft: 20,
        fontFamily: 'NunitoSans-Regular',
        textAlignVertical: 'top',paddingTop:screenHeight*0.01
      }
,      
    text3: {
        marginLeft: 20,
        fontFamily: 'NunitoSans-Regular',
        paddingBottom:screenHeight*0.01
    },
    text4: {
        fontSize: 18,
        marginLeft: 20,
        fontFamily: 'NunitoSans-Semibold'
    },
    radioContainer: {
        flexDirection: 'row',
        marginLeft: 20,
        marginTop: screenHeight*0.01
    },
    radioText: {
        paddingVertical: 5,
        paddingHorizontal: 10,
        backgroundColor: 'white',
        marginRight: 10,
        borderWidth: 1,
        borderColor: '#d5dfe3',
        borderRadius: 15,
        fontSize: 16,
        fontFamily: 'NunitoSans-Regular'
    },
    inputContainer2: {
        flexDirection: 'row',
        width: screenWidth * 0.9,
        height: screenHeight*0.05,
        backgroundColor: '#e1ecf0',
        marginHorizontal: 20,
        marginBottom: screenHeight*0.099,
        borderRadius: 15,
        alignItems: 'center'
    },
    inputContainer3: {
        flex: 1,
        paddingLeft: 20,
        fontFamily: 'NunitoSans-Regular'
    },
    btn: {
        width: screenWidth,
        height: screenHeight*0.08,
        backgroundColor: '#008CFF',
        justifyContent: 'center',
        alignItems: 'center',
       borderTopLeftRadius:15, borderTopRightRadius:15,
        marginHorizontal: 0,     
    },
    
    btnText: {
        fontSize: 20,
        color: 'white',
        fontFamily: 'Roboto-Medium'
    }
});
