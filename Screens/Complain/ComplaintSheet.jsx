import { View, Text,StyleSheet ,Dimensions, TouchableOpacity,Image} from 'react-native'
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const width=Dimensions.get('window').width;
const height=Dimensions.get('window').height;

export default function ComplaintSheet() {
  const navigation=useNavigation();
  return (
    <View>
      <View style={styles.button}>
      <TouchableOpacity style={styles.buttonStyle} onPress={()=>navigation.navigate('YourCompaint')}>
      <Image style={styles.image}  source={require('../../assets/Images/complaint1.png')}/>
     <Text style={styles.btnText}>Raise A Complaint</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonStyle}>
      <Image style={styles.image}  source={require('../../assets/Images/complaint2.png')}/>
      <Text style={styles.btnText}>All Complaint</Text>
       </TouchableOpacity>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  contanier:{
    flex:1,
  },
  button:{
    display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'center', 
    backgroundColor:'#dae1f0',padding:height*0.01,paddingBottom:height*0.04,
  },
  buttonStyle:{
      borderColor: '#929396',borderRadius:width *0.03,backgroundColor:'white',
      borderWidth: 0.5, marginRight:width *0.02  ,display:'flex',flexDirection:'row' ,
      alignItems:'center',
  },
  btnText:{
   padding:width*0.06,paddingLeft:width*0.02,fontFamily:'NunitoSans-Regular'
  },
  image:{
    marginLeft:width*0.03,paddingLeft:width*0.06
  }
})
