import { View, Text, Image, StyleSheet, TouchableOpacity, Dimensions } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default function Complete() {
  const navigation = useNavigation();

  return (
    <View style={styles.contanier}>
      <View>
      <Image source={require('../../assets/Images/complete.png')} style={styles.image} />
      <View style={{ alignItems: 'center' }}>
        <Text style={styles.text1}>Complaint raised successfully</Text>
        <Text style={styles.text2}>We’ll notify you once the operator</Text>
        <Text style={styles.text2}>has assigned someone.</Text>
        </View>
      </View>
        <View>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btntext} onPress={() => navigation.navigate('HomeScreen')}>Done</Text>
        </TouchableOpacity>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  contanier:{
      backgroundColor:'white',alignItems:'center',flex:1,justifyContent:'space-between'
  },
image:{
  resizeMode:'contain',marginTop:height*0.2,marginBottom:0
},
text1:{
  fontSize:width *0.05,fontFamily:'NunitoSans-Bold'
},
text2:{
  fontSize:width *0.04,fontFamily:'NunitoSans-Regular'
},
btn:{
  width:width,height:height*0.08,backgroundColor:'#008CFF',
  justifyContent:'center',alignItems:'center',
  borderTopLeftRadius:15,borderTopRightRadius:15,
}
,btntext:{
  color:'white',fontSize:16,fontFamily:'Roboto-Medium'
}
})
