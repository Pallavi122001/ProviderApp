import React from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, StatusBar, Dimensions } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import StationarySlider from '../Product/StationarySlider';
import ShopByCategory from '../Product/ShopByCategory';
import { MaterialIcons } from '@expo/vector-icons';
import CategoryCardSliders from '../Product/CategoryCardSliders';
import { useNavigation } from '@react-navigation/native';

export default function Stationary() {
  const navigation = useNavigation();

  const BackNavigation = () => {
    navigation.navigate('HomeScreen');
  };

  const { width } = Dimensions.get('window');

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1, paddingTop: '12%', paddingBottom: '5%', backgroundColor: 'white' }}>
      <StatusBar backgroundColor="white" barStyle="dark-content" translucent={true} />
      <View>
        <View style={{ marginLeft: '5%' }}>
          <Text style={{ fontSize: width * 0.03, fontWeight: '100',fontFamily:'NunitoSans-Regular' }}>Stationery</Text>
          <Text style={{ fontSize: width * 0.02, fontWeight: '100',fontFamily:'NunitoSans-Regular' }}>Store</Text>
        </View>
        <View style={{ margin: '2%', marginBottom: '3%', justifyContent: 'space-between',
         flexDirection: 'row', alignItems: 'center' }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <TouchableOpacity onPress={BackNavigation}>
              <AntDesign name="arrowleft" size={width * 0.06} color="black" style={{ marginTop: '1%' }} />
            </TouchableOpacity>
            <View style={{ flexDirection: 'row', backgroundColor: '#e1ecf0', borderRadius: width * 0.05,
             alignItems: 'center', marginLeft: '3%' }}>
              <Feather name="search" size={width * 0.05} color="black" style={{ marginLeft: '3%' }} />
              <TextInput placeholder='Search For Products   ' style={{ marginRight: '40%',fontFamily:'NunitoSans-Regular',
               padding: '2%', fontWeight: '100' }} />
            </View>
          </View>
          <TouchableOpacity onPress={()=>navigation.navigate('CartCheckout')}>
          <AntDesign name="shoppingcart" size={width * 0.05} color="black" style={{marginRight:width * 0.1}} />
          </TouchableOpacity>
        </View>
      </View>
      <StationarySlider />
      <View>
        <Text style={{ fontSize: width * 0.04, fontWeight: "100", marginTop: '2%', marginLeft: '6%',fontFamily:'NunitoSans-Semibold' }}>
          Shop By Categories
        </Text>
        <ShopByCategory />
      </View>
      <View style={{ margin: '1%', marginLeft: '6%', marginRight: '5%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
        <Text style={{ fontWeight: '100', fontSize: width * 0.04,fontFamily:'NunitoSans-Semibold' }}>New in</Text>
        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', marginTop: '1%' }}>
          <Text style={{ fontWeight: '100', fontSize: width * 0.027,fontFamily:'NunitoSans-Regular' }}>See More </Text>
          <MaterialIcons name="arrow-forward-ios" size={width * 0.025} color="black" />
        </TouchableOpacity>
      </View>
      <CategoryCardSliders />
      <View style={{ margin: '1%', marginLeft: '6%', marginRight: '5%', marginBottom: '2%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
        <Text style={{ fontSize: width * 0.04,fontFamily:'NunitoSans-Semibold' }}>Most Popular</Text>
        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', marginTop: '1%' }}>
          <Text style={{ fontWeight: '100', fontSize: width * 0.027,fontFamily:'NunitoSans-Regular' }}>See More </Text>
          <MaterialIcons name="arrow-forward-ios" size={width * 0.025} color="black" />
        </TouchableOpacity>
      </View>
      <CategoryCardSliders />
    </ScrollView>
  );
}
