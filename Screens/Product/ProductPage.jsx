import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import ProductCards from '../Product/ProductCards';
import { useNavigation } from '@react-navigation/native';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;
export default function ProductPage() {
  const navigation = useNavigation();
   const BackNavigation = () => {
    navigation.navigate('HomeScreen');
  }; 
  return (
    <View style={styles.mainContainer}>
      <View style={{ marginLeft: windowWidth * 0.05 }}>
        <Text style={{ fontSize: windowHeight * 0.02, fontWeight: '100',fontFamily:'NunitoSans-Regular' }}>Stationery</Text>
        <Text style={{ fontSize: windowHeight * 0.015, fontWeight: '100',fontFamily:'NunitoSans-Regular' }}>Store</Text>
      </View>
      <View style={{ margin: '2%', marginBottom: '1%', justifyContent: 'space-between',
      flexDirection: 'row', alignItems: 'center' }}>
       <View style={{ flexDirection: 'row', alignItems: 'center' }}>
         <TouchableOpacity onPress={BackNavigation}>
           <AntDesign name="arrowleft" size={windowWidth * 0.06} color="black" style={{ marginTop: '1%' }} />
         </TouchableOpacity>
         <View style={{ flexDirection: 'row', backgroundColor: '#e1ecf0', borderRadius: windowWidth * 0.05,
          alignItems: 'center', marginLeft: '3%' }}>
           <Feather name="search" size={windowWidth * 0.05} color="black" style={{ marginLeft: '3%' }} />
           <TextInput placeholder='Search For Products   ' style={{ marginRight: '40%',fontFamily:'NunitoSans-Regular',
            padding: '2%', fontWeight: '100' }} />
         </View>
       </View>
       <TouchableOpacity onPress={()=>navigation.navigate('CartCheckout')}>
       <AntDesign name="shoppingcart" size={windowWidth * 0.05} color="black" style={{marginRight:windowWidth * 0.1}} />
       </TouchableOpacity>
     </View>
      <View style={styles.headingText}>
        <Text style={{ fontWeight: '100', fontSize: windowHeight * 0.020,fontFamily:'NunitoSans-Semibold' }}>Buy Office Products</Text>
        <View style={styles.header}>
          <MaterialIcons name="sort" size={windowHeight * 0.015} color="black" />
          <Text style={{ fontWeight: '100', fontSize: windowHeight * 0.015,fontFamily:'NunitoSans-Regular' }}>Sort </Text>
        </View>
      </View>
      <View style={{ height: '75%' }}>
        <ProductCards />
      </View>
      <View style={styles.bottomContainer}>
        <Text style={styles.text}>No of Items : 2</Text>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnText} onPress={() => navigation.navigate('Cart')}>Go To Cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    paddingTop: Dimensions.get('window').height * 0.05,
    backgroundColor: 'white',
    flex: 1,
  },
  searchHeader: {
    margin: Dimensions.get('window').height * 0.01,
    marginBottom: Dimensions.get('window').height * 0.01,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center'
  },
  headingText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: Dimensions.get('window').height * 0.005,
    marginLeft: Dimensions.get('window').width * 0.05,
    marginTop: Dimensions.get('window').height * 0.01,
    marginRight: Dimensions.get('window').width * 0.05
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#9aa19d',
    borderWidth: 0.5,
    borderRadius: 5,
    padding: Dimensions.get('window').height * 0.005
  },
  search: {
    flexDirection: 'row',
    backgroundColor: '#e1ecf0',
    borderRadius: 15,
    alignItems: 'center',
    marginLeft: Dimensions.get('window').width * 0.02
  },
  btn: {
    backgroundColor: '#263238',
    width: Dimensions.get('window').width * 0.25,
    height: Dimensions.get('window').height * 0.05,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily:'NunitoSans-Regular'
  },
  btnText: {
    fontSize: Dimensions.get('window').height * 0.015,
    color: 'white'
  },
  text: {
    fontSize: Dimensions.get('window').height * 0.013,fontFamily:'NunitoSans-Semibold'
  },
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: Dimensions.get('window').height * 0.03,
    alignItems: 'center',
  }
});

