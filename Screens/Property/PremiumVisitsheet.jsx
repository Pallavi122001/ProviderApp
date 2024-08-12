import { View, Text,StyleSheet,Dimensions,TouchableOpacity} from 'react-native'
import React from 'react';
import VisitContanier from '../Property/VisitContanier';
const height=Dimensions.get('window').height;
const width=Dimensions.get('window').width;
export default function PremiumVisitsheet() {
  return (
    <View style={styles.contanier}>
    <VisitContanier/>
     <View>
     <TouchableOpacity>
     <Text style={styles.btn}>Schedule Free Visit</Text>
 </TouchableOpacity>
     </View>
    </View>
  )
}
const styles = StyleSheet.create({
   contanier:{
    flex:1,
    backgroundColor:'white',justifyContent:'space-between'
   },btn:{
    backgroundColor: '#008CFF',paddingTop: 20, color: 'white',borderTopLeftRadius:width*0.05,
    borderTopRightRadius:width*0.05,marginTop:height*0.09,
         textAlign: 'center',
         width: width * 1.0, height: 58,fontFamily:'Roboto-Regular'
   },
   text:{
    borderColor:'gray',borderWidth:width*0.001,
    padding:width*0.02,borderRadius:width*0.03
   },
   textContanier:{
    margin:width*0.02,marginTop:0
   },
   selectDate:{
    marginTop:width*0.03,marginBottom:0
   },
   selectTimeText:{
    marginLeft:width*0.05,fontFamily:'NunitoSans-Bold',
    marginTop:height*0.01
   },
   selectDateContainer: {
    marginHorizontal: width * 0.03,
    marginTop: height * 0.02,
  },
})
