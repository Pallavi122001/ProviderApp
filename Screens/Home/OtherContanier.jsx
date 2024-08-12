import React, { useRef } from 'react';
import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import RBSheet from 'react-native-raw-bottom-sheet';
import ComplaintSheet from '../Complain/ComplaintSheet';

const width=Dimensions.get('screen').width;
const height=Dimensions.get('screen').height;

export default function ValueAdded() {
  const navigation = useNavigation();
  const refRBSheet = useRef(null);

  const handleCardPress = (key) => {
    if (key === '1') {
      refRBSheet.current.open();
    } else if (key === '2') {
      navigation.navigate('ReferEarn');
    } else if (key === '3') {
      navigation.navigate('ListProperty');
    }
  };

  const slides = [
    {
      key: '1',
      image: require('../../assets/Images/Complaints.png'),
      title: 'Complaints',
    },
    {
      key: '2',
      image: require('../../assets/Images/ReferEarn.png'),
      title: 'Refer & Earn',
    },
    {
      key: '3',
      image: require('../../assets/Images/Maskgroup.png'),
      title: 'List Property',
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        {slides.map((item, index) => (
          <TouchableOpacity key={index} onPress={() => handleCardPress(item.key)}>
            <View key={index} style={styles.card}>
              <Image source={item.image} style={styles.image} />
              <Text style={styles.titletext}>{item.title}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
      <RBSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        height={135}
        openDuration={250}
        draggable={true}
        customStyles={{
          container: {
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            backgroundColor:'white'
          },
          wrapper: {
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
          },
        }}
      >
        <ComplaintSheet />
      </RBSheet>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: width*0.05,
    marginBottom: height*0.01,
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 10,
    marginBottom: height*0.02,
    width: Dimensions.get('window').width / 3 - 20,
    alignItems: 'flex-start',
    height:height*0.17,
  },
  image: {
    width: width*0.1,
    height: height*0.04,
    resizeMode: 'contain',
    marginTop: height*0.03,
    marginLeft:width*0.03
  },
  titletext: {
    marginTop: height*0.02,
    marginLeft: width*0.03,
    fontWeight: '400',
    marginRight:width*0.02,
    fontFamily:'NunitoSans-Regular'
  },
});
