import React, { useState } from 'react';
import { View, Text, TouchableOpacity ,StyleSheet,Dimensions,StatusBar} from 'react-native';
import OfferContanier from '../Order/OfferContanier';
import { AntDesign } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';
import RedeemedContanier from '../Order/RedeemedContanier';
import ExpiredContanier from '../Order/ExpiredContanier';
import { useNavigation } from '@react-navigation/native';
const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

function OfferContent() {
  return (
    <View>
     <OfferContanier/>
    </View>
  );
}

function ExpiredContent() {
  return (
    <View>
      <ExpiredContanier/>
    </View>
  );
}

function RedeemedContent() {
  return (
    <View>
     <RedeemedContanier/>
    </View>
  );
}

export default function Offer() {
  const [offerState, setOfferState] = useState('offer'); 
  const navigation = useNavigation();
  const handleOfferSelection = (selectedOffer) => {
    setOfferState(selectedOffer);
  };
  
  const renderContent = () => {
    switch (offerState) {
      case 'offer':
        return <OfferContent />;
      case 'expired':
        return <ExpiredContent />;
      case 'redeemed':
        return <RedeemedContent />;
      default:
        return null;
    }
  };

  return (
    <ScrollView style={styles.container}>
      <StatusBar backgroundColor={'white'} translucent={true} />
      <View style={styles.Header}>
        <Text style={styles.headerText}>Best Offers</Text>
        <View style={styles.btn}>
          <AntDesign name="arrowleft" size={24} color="black" onPress={()=>navigation.navigate('HomeScreen')}/>
          <TouchableOpacity
            style={[styles.button, offerState === 'offer' && styles.selectedButton]}
            onPress={() => handleOfferSelection('offer')}
          >
            <Text> Offers</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, offerState === 'redeemed' && styles.selectedButton]}
            onPress={() => handleOfferSelection('redeemed')}
          >
            <Text> Redeemed</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, offerState === 'expired' && styles.selectedButton]}
            onPress={() => handleOfferSelection('expired')}
          >
            <Text> Expired</Text>
          </TouchableOpacity>
        </View>
        </View>  
      {renderContent()}
      
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  btn: {
    flexDirection: 'row',
    marginTop: height * 0.02,
  },
  button: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginHorizontal: 5,
  },
  selectedButton: {
    borderBottomWidth: 1,
  },
  headerText: {
    fontFamily: 'NunitoSans-Semibold'
  },
  Header: {
        paddingTop: height*0.04,
        padding:height*0.02 ,
        width:width,
        backgroundColor: 'white',
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 5,
        shadowRadius: 3.84,
        elevation: 7,
  }, 
});
