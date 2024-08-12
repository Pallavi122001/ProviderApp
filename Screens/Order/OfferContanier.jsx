import { View, Text,StyleSheet,ScrollView,Dimensions ,TouchableOpacity} from 'react-native'
import React,{useState} from 'react'
import OfferCard from '../Order/OfferCard'

const width=Dimensions.get('window').width;
 const height=Dimensions.get('window').height;
export default function OfferContanier() {
  const [selectedOption, setSelectedOption] = useState(null);
  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };
  return (
    <ScrollView style={styles.contanier}>
    <View style={{ flexDirection: 'row' ,paddingBottom:height*0.02,marginLeft:width*0.05}}>
        <TouchableOpacity
          style={[styles.optionButton, selectedOption === 'All' && styles.selectedOption]}
          onPress={() => handleOptionChange('All')}
        >
          <Text style={[styles.optionText, selectedOption === 'All' && styles.selectedOptionText]}>All</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.optionButton, selectedOption === 'Food' && styles.selectedOption]}
          onPress={() => handleOptionChange('Food')}
        >
          <Text style={[styles.optionText, selectedOption=== 'Food' && styles.selectedOptionText]}>Food</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.optionButton, selectedOption === 'Shopping' && styles.selectedOption]}
          onPress={() => handleOptionChange('Shopping')}
        >
          <Text style={[styles.optionText, selectedOption === 'Shopping' && styles.selectedOptionText]}>Shopping</Text>
        </TouchableOpacity>
      </View> 
      <OfferCard/>
      <OfferCard/>
      <OfferCard/>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  contanier:{
    flex:1
  },selectedOption: {
    backgroundColor: 'black',color:'white',marginRight:width*0.02
  },
  optionText: {
    color: 'black',marginRight:width*0.02,borderColor:'gray',
    borderWidth:1,padding:height*0.01,paddingTop:0,paddingBottom:0
  },
  selectedOptionText: {
    color: 'white',
  },
  optionButton:{
    marginTop:height*0.02
  }
})
