import { View, Text ,Image,StyleSheet, Dimensions} from 'react-native'
import React from 'react'

const width=Dimensions.get('window').width;
export default function RedeemedCard() {
  return (
    <View>
    <View style={styles.card}>
    <Image source={require('../../assets/Images/offer.png')} style={styles.image}/>
      <Text style={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
      sed do eiusmod tempor incididunt ut labore et dolore
      magna aliqua. </Text>
    </View>
    </View>
  )
}
const styles = StyleSheet.create({
  contanier:{
    flex:1,backgroundColor:'white'
  },
  card:{
    backgroundColor: 'white',
    borderRadius: width * 0.05,
    margin: width * 0.02,
    marginLeft: width * 0.02,
    justifyContent:'center',
    shadowColor: 'black',
    elevation: 5,
    padding:width*0.04
  },
  image: {
    resizeMode: 'contain',
    width:width*0.89
  },
  text:{
    margin: width * 0.02,
    marginTop: 0,
    fontWeight: '100',
    fontSize: width * 0.03,
    marginRight: width * 0.15,fontFamily:'NunitoSans-Regular'
  }
})
