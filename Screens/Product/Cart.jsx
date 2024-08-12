import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Dimensions, Modal, TextInput } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { SvgXml } from 'react-native-svg';
import { useNavigation } from '@react-navigation/native';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

export default function Cart() {
    const navigation = useNavigation();
    const [modalVisible, setModalVisible] = useState(false);

    const xml1 = `<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="7" cy="7" r="6.5" stroke="#263238"/>
    <circle cx="7" cy="7" r="5" fill="#263238"/>
    </svg>`;

    const handleOpenModal = () => {
        setModalVisible(true);
    };

    const handleCloseModal = () => {
        setModalVisible(false);
    };
    
    const [selectedOption, setSelectedOption] = useState(null);
    const [selectedOption1, setSelectedOption1] = useState(null);
    const handleOptionChange = (option) => {
      setSelectedOption(option);
    };
    const handleOptionChange1 = (option) => {
      setSelectedOption1(option);
    };
    return (
        <View style={styles.container}>
            <View>
                <View>
                    <Text style={styles.text1}>Stationery</Text>
                    <Text style={styles.text2}>Store</Text>
                </View>
                <View style={styles.top}>
                    <TouchableOpacity onPress={() => navigation.navigate('Stationary')}>
                        <Feather name="arrow-left" size={windowWidth * 0.05} color="black" style={{ marginRight: 10 }} />
                    </TouchableOpacity>
                    <Text style={styles.text3}>Select Address</Text>
                </View>
                <View style={styles.addCard}>
                    <View style={{ alignItems: 'center', marginTop: windowHeight * 0.05 }}>
                        <TouchableOpacity onPress={handleOpenModal}>
                            <Fontisto name="plus-a" size={windowHeight * 0.035} color="black" />
                        </TouchableOpacity>
                        <Text style={{ fontSize: windowHeight * 0.02,fontFamily:'NunitoSans-Regular' }}>Add a new address</Text>
                    </View>
                </View>
                <Text style={styles.text4}>Your saved addresses</Text>
                <View style={styles.addressCard}>
                    <View style={styles.cardContainer}>
                        <Image source={require('../../assets/Images/home.png')} style={styles.image} />
                        <View style={{ marginLeft: windowWidth * 0.02, marginTop: windowHeight * 0.012 }}>
                            <Text style={{ fontSize: windowHeight * 0.018,fontFamily:'NunitoSans-Regular' }}>Home</Text>
                            <Text style={styles.cardText}>Ayush Dubey, 708, 8th floor, above hero shop, azad</Text>
                            <Text style={styles.cardText}>nagar, west costa, 110236</Text>
                            <Text style={styles.editButton}>Edit</Text>
                        </View>
                        <SvgXml xml={xml1}  />
                    </View>
                   
                </View>
                <View style={styles.bottomContainer}>
                <TouchableOpacity style={styles.btn} onPress={()=>navigation.navigate('CartCheckout')}>
                  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={styles.btnText}>Next</Text>
                    <Feather name="arrow-right" size={windowWidth * 0.050} color="white" />
                  </View>
                </TouchableOpacity>
              </View>
            </View>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={handleCloseModal}
            >
                <View style={styles.modalBackground}>
                    <TouchableOpacity style={styles.closeButton} onPress={handleCloseModal}>
                        <Feather name="x" size={24} color="white" />
                    </TouchableOpacity>
                    <View style={styles.modalContent}>
                     <Text style={{fontFamily:'NunitoSans-Bold'}}>Add Address Details</Text>
                       <Text style={{fontFamily:'NunitoSans-Regular'}}>Who are you ordering for</Text>
                       <View style={{ flexDirection: 'row' }}>
                       <TouchableOpacity
                         style={[styles.optionButton, selectedOption === 'Myself' && styles.selectedOption]}
                         onPress={() => handleOptionChange('Myself')}
                       >
                         <Text style={[styles.optionText, selectedOption === 'Myself' && styles.selectedOptionText]}>Myself</Text>
                       </TouchableOpacity>
                       <TouchableOpacity
                         style={[styles.optionButton, selectedOption === 'Someone Else' && styles.selectedOption]}
                         onPress={() => handleOptionChange('Someone Else')}
                       >
                         <Text style={[styles.optionText, selectedOption === 'Someone Else' && styles.selectedOptionText]}>Someone Else</Text>
                       </TouchableOpacity>
                     </View>
                     <TextInput placeholder='House No. & Floor'  style={styles.inputContanier}/>
                     <TextInput placeholder='Landmark & Area Name (Optional)'  style={styles.inputContanier}/>
                     <TextInput placeholder='Address (Distt Code, State)'  style={styles.inputContanier}/>
                     <TextInput placeholder='Pincode'  style={styles.inputContanier}/>
                     <TextInput placeholder='Alternative Phone Number' style={styles.inputContanier}/>
                     <View style={{ flexDirection: 'row' ,paddingBottom:windowHeight*0.06}}>
                     <TouchableOpacity
                       style={[styles.optionButton, selectedOption1 === 'Home' && styles.selectedOption1]}
                       onPress={() => handleOptionChange1('Home')}
                     >
                       <Text style={[styles.optionText, selectedOption1 === 'Home' && styles.selectedOptionText]}>Home</Text>
                     </TouchableOpacity>
                     <TouchableOpacity
                       style={[styles.optionButton, selectedOption1 === 'College' && styles.selectedOption1]}
                       onPress={() => handleOptionChange1('College')}
                     >
                       <Text style={[styles.optionText, selectedOption1 === 'College' && styles.selectedOptionText]}>College</Text>
                     </TouchableOpacity>
                     <TouchableOpacity
                       style={[styles.optionButton, selectedOption1 === 'Other' && styles.selectedOption1]}
                       onPress={() => handleOptionChange1('Other')}
                     >
                       <Text style={[styles.optionText, selectedOption1 === 'Other' && styles.selectedOptionText]}>Other</Text>
                     </TouchableOpacity>
                   </View>
                   
                     </View>
                     <View style={styles.bottomContainer1}>
                   <TouchableOpacity style={styles.btn}>
                       <Text style={styles.btnText}>Save address</Text>
                   </TouchableOpacity>
                 </View>
                </View>
            </Modal>
            
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: windowHeight * 0.05,
        backgroundColor: 'white',
        flex: 1,
    },
    text1: {
        fontSize: windowHeight * 0.018,
        fontWeight: '100',
        fontFamily: 'NunitoSans-Regular',
        marginLeft:windowWidth*0.05
    },
    text2: {
        fontSize: windowHeight * 0.012,
        fontWeight: '100',
        fontFamily: 'NunitoSans-Regular',
        marginLeft:windowWidth*0.05
    },
    top: {
        flexDirection: 'row',
        marginTop: windowHeight * 0.01,
        marginBottom: windowHeight * 0.025,marginLeft:windowWidth*0.05
    },
    text3: {
        fontSize: windowHeight * 0.025,
        fontWeight: '600',
        fontFamily: 'NunitoSans-Regular'
    },
    addCard: {
        width: windowWidth * 0.88,
        height: windowHeight * 0.15,
        borderColor: '#9aa19d',
        borderWidth: 0.5,
        borderRadius: windowHeight * 0.015,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: windowHeight * 0.02,
        fontFamily: 'NunitoSans-Regular'
    },
    text4: {
        fontSize: windowHeight * 0.015,
        marginTop: windowHeight * 0.02,
        marginBottom: windowHeight * 0.01,
        marginLeft: windowWidth * 0.09,
        fontFamily: 'NunitoSans-Regular'
    },
    addressCard: {
        margin: windowHeight * 0.03,width: windowWidth * 0.88,
        height: windowHeight * 0.15,marginTop:0
    },
    cardContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: windowWidth * 0.041,
        marginTop: windowHeight * 0.02,
        borderColor: '#9aa19d',
        borderWidth: 0.5,
        borderRadius: windowHeight * 0.015,
    },
    image: {
        marginTop: windowHeight * 0.03,
        width: windowWidth * 0.090,
        height: windowHeight * 0.045
    },
    cardText: {
        fontSize: windowHeight * 0.015,
        fontFamily: 'NunitoSans-Regular'
    },
    editButton: {
        color: '#008CFF',fontFamily:'NunitoSans-Regular'
    },
    modalBackground: {
        flex: 1,
        justifyContent: 'flex-end',
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
    },
    modalContent: {
        backgroundColor: 'white',
        padding: windowWidth * 0.05,
        borderTopLeftRadius: windowHeight * 0.02,
        borderTopRightRadius: windowHeight * 0.02,
    },
    closeButton: {
        alignSelf: 'center',
        marginRight: windowWidth * 0.01,
        marginTop: -windowHeight * 0.05,
        marginBottom:windowHeight*0.02,
        backgroundColor:'#263238',padding:windowWidth*0.02,borderRadius:20
    },
    optionButton: {
      padding: 10,paddingRight:windowWidth*0.06,paddingLeft:windowWidth*0.06,
      margin: 5,
      backgroundColor: '#e1ecf0',
      borderRadius: 20,
    },
    selectedOption: {
      backgroundColor: '#008CFF',
    },
    selectedOption1: {
      backgroundColor: '#008CFF',
    },
    optionText: {
      color: 'black',fontFamily:'NunitoSans-Regular'
    },
    selectedOptionText: {
      color: 'white',
    },
    inputContanier:{
      backgroundColor:'#e1ecf0',borderRadius:10,padding:7,
      fontFamily:'NunitoSans-Regular',paddingLeft:windowWidth*0.03,
      marginBottom:windowHeight*0.02
    },
    bottomContainer: {
      flexDirection: 'row',
      width:windowWidth*1.0,
      padding: windowHeight * 0.02,
      alignItems: 'center',
      backgroundColor: 'white',
      shadowColor: '#0a0a0a',
      shadowOffset: { width: 1, height: windowHeight * 0.02 },
      shadowOpacity: 1,
      shadowRadius: 3.84,
      elevation: 10,
      marginTop:windowHeight*0.4,
    },
    bottomContainer1:{
      flexDirection: 'row',
      width:windowWidth*1.0,
      padding: windowHeight * 0.01,
      alignItems: 'center',
      backgroundColor: 'white',
      shadowColor: '#0a0a0a',
      shadowOffset: { width: 1, height: windowHeight * 0.02 },
      shadowOpacity: 1,
      shadowRadius: 3.84,
      elevation: 10,
     
    },
    btn: {
      backgroundColor: '#263238',
      width: windowWidth * 0.3,
      height: windowHeight * 0.05,
      borderRadius: windowHeight * 0.01,
      marginLeft:windowWidth*0.6,
      alignItems: 'center',
      justifyContent: 'center',
    },
    btnText: {
      fontSize: windowHeight * 0.017,
      color: 'white',fontFamily:'NunitoSans-Regular'
    },
});
