import { View, Text ,StyleSheet,Dimensions,Image,TouchableOpacity} from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons';
const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;
export default function Carditem() {
  return (
    <View style={{marginBottom:-windowHeight*0.01}}>
    <View style={styles.carditem}>
    <View style={styles.cardImageContanier}>
    <Image source={require('../../assets/Images/apasara.png')} style={styles.cardimage}/>
    </View>
    <View style={{margin:windowWidth*0.03}}>
    <Text style={styles.cardTextHeader}>Apsara</Text>
    <Text style={styles.cardText}>Platinum Extra Dark Pencil</Text>
    <Text style={styles.cardText}>10 pieces</Text>
    </View>
    <View>
    <Text style={{marginLeft:windowWidth*0.04,fontFamily:'NunitoSans-Semibold'}}>
    <FontAwesome name="rupee" size={14} color="black" 
    style={{marginRight:windowWidth*0.06,fontSize:windowWidth*0.03}} />59</Text>
    <TouchableOpacity style={styles.cardbutton}>
    <Text style={styles.cardbuttonText}>- 1 + </Text>
    </TouchableOpacity>
    </View>
    </View>
    </View>
  )
}
const styles = StyleSheet.create({
    carditem:{
        display:'flex',flexDirection:'row',
        justifyContent:'space-between',padding:windowWidth*0.04,
        paddingBottom:0
    },
    cardImageContanier:{
        borderColor: '#9aa19d',
        borderWidth: 0.5,
        borderRadius: windowHeight * 0.010,
        paddingTop:windowWidth*0.06,paddingBottom:windowWidth*0.06,
        padding:windowWidth*0.02
    },
    cardbutton:{
        backgroundColor:'#008CFF',paddingLeft:windowWidth*0.03,paddingTop:windowWidth*0.01,
        borderRadius:windowWidth*0.02,paddingRight:windowWidth*0.03,paddingBottom:windowWidth*0.01,
         },
         cardbuttonText:{
             color:'white'
         },
         cardText:{
          fontFamily:'NunitoSans-Regular',fontSize:windowWidth*0.03
         },
         cardTextHeader:{
          fontFamily:'NunitoSans-Bold',fontSize:windowWidth*0.03
         },
         cardimage:{
          width:windowWidth*0.2,
          height:windowHeight*0.02
         }
        
})
