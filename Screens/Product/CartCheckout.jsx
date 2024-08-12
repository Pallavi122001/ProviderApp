import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image,Dimensions, TextInput,} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { SvgXml } from 'react-native-svg';
import { useNavigation } from '@react-navigation/native';
import Carditem from '../Product/Carditem';
import { MaterialIcons } from '@expo/vector-icons';
const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

export default function CartCheckout() {
    const navigation = useNavigation();
    const [orderDetails, setOrderDetails] = useState(null);

    useEffect(() => {
        fetchOrderDetails();
    }, []);

    const fetchOrderDetails = async () => {
        try {
            const response = await axios.get('https://api.dreamprovider.in/api/orders');
            setOrderDetails(response.data);
        } catch (error) {
            console.error('Error fetching order details:', error);
        }
    };

    const xml1 = `<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="7" cy="7" r="6.5" stroke="#263238"/>
    <circle cx="7" cy="7" r="5" fill="#263238"/>
    </svg>`;

    return (
        <View style={styles.container}>
            <View>
                <View>
                    <Text style={styles.text1}>Stationery</Text>
                    <Text style={styles.text2}>Store</Text>
                </View>
                <View style={styles.top}>
                    <TouchableOpacity onPress={() => navigation.navigate('Stationary')}>
                        <Feather name="arrow-left" size={windowWidth * 0.05} color="black" style={{ marginRight: windowWidth*0.01}} />
                    </TouchableOpacity>
                    <Text style={styles.text3}>Checkout</Text>
                </View>
                <Text style={styles.headText}>Your Cart</Text>
                <View style={styles.addCard}>
                   <Carditem/>
                   <Carditem/>
                   <Carditem/>
                </View>
                <View style={styles.InputMainContanier}>
                <TextInput placeholder='Type coupon code here    ' style={styles.inputContanier}/>
                <TouchableOpacity style={styles.Button}>
                <Text style={styles.ButtonText}>Apply</Text>
                </TouchableOpacity>
                </View>
                <View style={styles.paymentCard}>
                <View>
                 <Text style={{fontFamily:'NunitoSans-Semibold'}}>Bill Details</Text>
               <View style={{flexDirection:'row',justifyContent:'space-between'}}> 
               <Text style={{fontFamily:'NunitoSans-Regular'}}>Item total</Text>
               <Text style={{fontFamily:'NunitoSans-Semibold'}}><MaterialIcons name="currency-rupee" size={12} color="black" />100</Text>
               </View>
               <View style={{flexDirection:'row',justifyContent:'space-between'}}> 
               <Text style={{fontFamily:'NunitoSans-Regular'}}>Delivery charges</Text>
               <Text style={{fontFamily:'NunitoSans-Semibold'}}><MaterialIcons name="currency-rupee" size={12} color="black" />30</Text>
               </View>
               <View style={{flexDirection:'row',justifyContent:'space-between'}}> 
               <Text style={{fontFamily:'NunitoSans-Semibold'}}>Grand total</Text>
               <Text style={{fontFamily:'NunitoSans-Semibold'}}><MaterialIcons name="currency-rupee" size={12} color="black" />130</Text>
               </View>
                </View>
            </View>
            <View style={styles.paymentCardbottom}> 
            <Text style={{padding:windowWidth*0.01,
                fontFamily:'NunitoSans-Semibold',paddingLeft:windowWidth*0.05,
                fontSize:windowHeight*0.01,color:'#008CFF'}}>
            You total savings</Text>
            <Text style={{padding:windowWidth*0.01,
                fontFamily:'NunitoSans-Semibold',paddingLeft:windowWidth*0.05,
                fontSize:windowHeight*0.01,color:'#008CFF'}}>
                <MaterialIcons name="currency-rupee" size={10} color="#008CFF" />30</Text>
            </View>
                <View style={styles.addressCard}>
                    <View style={styles.cardContainer}>
                      <Text style={{fontFamily:'NunitoSans-Regular'}}>Cancellation Policy</Text> 
                      <Text style={{color:'gray',fontSize:windowWidth*0.03,fontFamily:'NunitoSans-Regular'}}>
                      Order cannot be canceled once packed for delivery. In case of unexpected delays, a refund will
                      be provided, if applicable.</Text> 
                    </View>
                   
                   
                </View>
                   <View style={styles.Card}>
                    <View style={{justifyContent:'space-evenly',flexDirection:'row'}}>
                        <View><Image source={require('../../assets/Images/home.png')}  /></View>
                        <View style={{ marginLeft: windowWidth * 0.02}}>
                            <Text style={styles.cardText}>Delivering to Home</Text>
                            <Text style={styles.text4}>Ayush Dubey, 708, 8th floor, above hero shop, azadnagar, west costa, 110236</Text>
                        </View>
                        <Text style={styles.editButton}>Change</Text>
                    </View>
                   
                </View>
            </View>
            <View style={styles.bottomContainer}>
                <TouchableOpacity style={styles.btn}>
                  <View style={{ flexDirection: 'row', alignItems: 'center',
                  justifyContent:'space-between' }}>
                    <View style={{marginRight:windowWidth*0.09}}>
                    <Text style={styles.btnText}>130</Text>
                    <Text style={styles.btnText}>Total</Text>
                    </View>
                  <Text style={styles.btnText}>Place order</Text>
                   
                  </View>
                </TouchableOpacity>
              </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: windowHeight * 0.04,
        backgroundColor: 'white',
        flex: 1,justifyContent:'space-between'
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
   
    headText:{
        fontSize: windowHeight * 0.02,
        fontWeight: '100',marginTop:-windowHeight*0.01,
        fontFamily: 'NunitoSans-Regular',
        marginLeft:windowWidth*0.06,marginBottom:windowHeight*0.01
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
    text4:{
        fontSize: windowHeight * 0.01, fontFamily: 'NunitoSans-Regular'
    },
    addCard: {
        width: windowWidth * 0.92,
        height: windowHeight * 0.31,
        borderColor: '#9aa19d',
        borderWidth: 0.5,
        borderRadius: windowHeight * 0.015,
        alignSelf: 'center',
        alignItems: 'center',
        fontFamily: 'NunitoSans-Regular',
    },
    Card:{
        width: windowWidth,
        height: windowHeight * 0.06,
        shadowColor: '#0a0a0a',
        shadowOffset: { width: 1, height: windowHeight * 0.02 },
        shadowOpacity: 1,
        shadowRadius: 3.84,
        elevation: 1,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent:'center',
        fontFamily: 'NunitoSans-Regular',
      
    },
    addressCard: {
        margin: windowHeight * 0.03,width: windowWidth * 0.88,
        height: windowHeight * 0.15,marginTop:0
    },
    paymentCard:{
        borderColor: '#9aa19d',
        borderWidth: 0.5,width: windowWidth * 0.92,
        margin:windowWidth*0.04,marginTop:windowHeight*0.02,marginBottom:windowHeight*0.02,
        borderRadius: windowHeight * 0.015,
        padding:windowWidth*0.02
    },
    paymentCardbottom:{
        flexDirection:'row',justifyContent:'space-between',marginTop:-16,width: windowWidth * 0.92,
        marginBottom:windowHeight*0.01,backgroundColor:'#e1ecf0',margin:windowWidth*0.04,
        borderBottomLeftRadius:windowWidth*0.03, borderBottomRightRadius:windowWidth*0.03
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
        color: '#008CFF',borderBottomWidth:1,borderBottomColor:'#008CFF',marginTop:12,
        marginLeft:windowWidth*0.02,
    },
    inputContanier:{ 
      fontFamily:'NunitoSans-Regular',paddingLeft:windowWidth*0.03,
      marginBottom:windowHeight*0.02
    },
    InputMainContanier:{
     display:'flex',flexDirection:'row',justifyContent:'space-between',backgroundColor:'#e1ecf0',
     borderRadius:10,padding:4,margin:windowWidth*0.03,marginBottom:0
    },
    cardContainer: {
        padding: windowWidth * 0.040,
        borderColor: '#9aa19d',
        borderWidth: 0.5,
        borderRadius: windowHeight * 0.015,
        
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
      elevation: 17,
    
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
    Button:{
    backgroundColor:'#008CFF',padding:windowWidth*0.07,paddingTop:windowWidth*0.01,
    paddingBottom:windowWidth*0.01,borderRadius:windowWidth*0.5,justifyContent:'center',
    margin:windowWidth*0.01,
    },
    ButtonText:{
    color:'white',fontSize:windowWidth*0.03,fontFamily:'NunitoSans-Semibold'
    },
    btn: {
      backgroundColor: '#263238',
      width: windowWidth * 0.5,
      borderRadius: windowHeight * 0.01,
      marginLeft:windowWidth*0.4,
      alignItems: 'center',
      height:windowHeight*0.05,
      justifyContent: 'center',
    },
    btnText: {
      fontSize: windowHeight * 0.017,
      color: 'white',fontFamily:'NunitoSans-Regular'
    },
});
