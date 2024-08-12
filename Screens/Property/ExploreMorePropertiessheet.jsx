import React, { useRef } from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, Image } from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import VisitBottomSheet from '../Property/VisitBottomSheet';
import PremiumVisitsheet from '../Property/PremiumVisitsheet';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default function ExploreMorePropertiesSheet() {
  const refFreeVisitSheet = useRef(null);
  const refPremiumVisitSheet = useRef(null);

  const handleFreeVisitPress = () => {
    if (refFreeVisitSheet.current) {
      refFreeVisitSheet.current.open();
    }
  };

  const handlePremiumVisitPress = () => {
    if (refPremiumVisitSheet.current) {
      refPremiumVisitSheet.current.open();
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.button}>
        <TouchableOpacity style={styles.buttonStyle} onPress={handleFreeVisitPress}>
          <Image style={styles.image} source={require('../../assets/Images/visit.png')} />
          <Text style={styles.btnText}>Free Visit</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonStyle} onPress={handlePremiumVisitPress}>
          <Image style={styles.image} source={require('../../assets/Images/premium.png')} />
          <Text style={styles.btnText}>Premium Visit</Text>
        </TouchableOpacity>
      </View>

      <RBSheet
        ref={refFreeVisitSheet}
        closeOnDragDown={true}
        height={600}
        openDuration={250}
        draggable={true}
        customStyles={{
          container: {
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            backgroundColor: 'white'
          },
          wrapper: {
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
          },
        }}
      >
      <VisitBottomSheet/>
      </RBSheet>

      <RBSheet
        ref={refPremiumVisitSheet}
        closeOnDragDown={true}
        height={600}
        openDuration={250}
        draggable={true}
        customStyles={{
          container: {
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            backgroundColor: 'white'
          },
          wrapper: {
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
          },
        }}
      >
        <PremiumVisitsheet/>
      </RBSheet>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'center', 
    backgroundColor:'#dae1f0',paddingBottom:height*0.04,paddingTop:height*0.02,
    marginTop:height*0.89,borderTopLeftRadius:width*0.06,borderTopRightRadius:width*0.06
  },
  buttonStyle: {
    borderColor: '#929396',
    borderRadius: width * 0.03,
    backgroundColor: 'white',
    borderWidth: 0.5,
    marginRight: width * 0.02,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  btnText: {
    padding: width * 0.06,
    paddingLeft: width * 0.02,
    paddingRight: width * 0.07,
    fontFamily: 'NunitoSans-Regular',
  },
  image: {
    marginLeft: width * 0.09,
    paddingLeft: width * 0.06
  }
});
