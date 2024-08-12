import { View, Text, StyleSheet, FlatList, Image, Dimensions, Modal, TouchableOpacity, ScrollView } from 'react-native';
import React, { useState, useEffect } from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import ProductBottomsheetCards from '../Product/ProductBottomsheetCards';
import ProductBottomsheetImageSlider from '../Product/ProductBottomsheetImageSlider';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const CARD_MARGIN = 5;
const numColumns = 2;

export default function ProductCards() {
  const navigation=useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [Product, setProduct] = useState([]);
  const [productDetails, setProductDetails] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://api.dreamprovider.in/api/products?populate=*');
      setProduct(response.data.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const fetchProductDetails = async () => {
    try {
      const response = await axios.get(`https://api.dreamprovider.in/api/product-views`);
      console.log('Fetched product details:', response.data);
      setProductDetails(response.data.data);
      setModalVisible(true);
    } catch (error) {
      if (error.response && error.response.status === 404) {
        console.error('Product not found:', error);
      } else {
        console.error('Error fetching product details:', error);
      }
    }
  };

  const handleOpenModal = (item) => {
    setSelectedProduct(item);
    fetchProductDetails(item.id);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
    setProductDetails(null);
  };

  const renderItem = ({ item, index }) => {
    return (
      <TouchableOpacity
        style={[styles.card, { marginRight: (index + 1) % numColumns === 0 ? 0 : CARD_MARGIN }]}
        onPress={() => handleOpenModal(item)}
      >
        <Image
          source={{ uri: item?.attributes?.main_image?.data?.attributes?.formats?.small?.url }}
          style={{
            width: windowWidth * 0.3,
            height: windowHeight * 0.2,
            resizeMode: 'contain',
            marginLeft: windowWidth * 0.04
          }}
        />
        <Text style={styles.name}>{item.attributes.name}</Text>
        <Text style={{ color: 'gray', fontSize: windowWidth * 0.03, fontFamily: 'NunitoSans-Regular' }}>
          {item.attributes.short_discription}
        </Text>
        <Text style={{ color: 'gray', fontSize: windowWidth * 0.03, fontFamily: 'NunitoSans-Regular' }}>
          {item.attributes.product_types}
        </Text>
        <Text style={{ color: 'gray', fontSize: windowWidth*0.03, fontFamily: 'NunitoSans-Regular' }}>{item.attributes.stock} pieces</Text>
        <View style={{ display: 'flex', flexDirection: 'row', margin: 2, justifyContent: 'space-between' }}>
          <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            <Text style={styles.text}>
              <FontAwesome name="rupee" size={15} color="black" />
              {item.attributes.pricing.actual_price}
            </Text>
          </View>
          <View style={{ borderColor: 'black', borderWidth: 1, paddingLeft:windowWidth*0.01,paddingRight:windowWidth*0.01, borderRadius: 10 }}>
            <AntDesign name="plus" size={15} color="black" />
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={Product}
        renderItem={renderItem}
        horizontal={false}
        showsHorizontalScrollIndicator={false}
        numColumns={numColumns}
        
      />
      <Modal animationType="slide" transparent={true} visible={modalVisible} onRequestClose={handleCloseModal}>
      {productDetails && (
        <View style={styles.modalBackground}>
          <TouchableOpacity style={styles.closeButton} onPress={handleCloseModal}>
            <Feather name="x" size={24} color="white" />
          </TouchableOpacity>
          <ScrollView style={styles.modalContent}>
            <ProductBottomsheetImageSlider />
            <Text style={styles.headingText}>{productDetails?.attributes?.name || 'N/A'}</Text>
            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text style={styles.text1}>{productDetails?.attributes?.short_discription || 'N/A'}</Text>
              <Text style={styles.price}>
                <FontAwesome name="rupee" size={15} color="black" />
                {productDetails?.attributes?.pricing?.actual_price || 'N/A'}
              </Text>
            </View>
            <Text style={{ color: 'gray', fontSize: 12, fontFamily: 'NunitoSans-Regular' }}>
              {productDetails?.attributes?.stock || 'N/A'} pieces
            </Text>
            <Text style={{ fontFamily: 'NunitoSans-Semibold', marginTop: windowHeight * 0.05 }}>Product Details</Text>
            <Text style={{ fontFamily: 'NunitoSans-Regular', fontSize: windowWidth * 0.03 }}>
              {productDetails?.attributes?.description || 'N/A'}
            </Text>
            <Text style={{ fontFamily: 'NunitoSans-Semibold' }}>People also bought</Text>
            <ProductBottomsheetCards />
          </ScrollView>
          <View style={styles.bottomContainer1}>
            <View>
              <Text style={{ color: 'gray', fontSize: 12, fontFamily: 'NunitoSans-Regular' }}>
                {productDetails?.attributes?.stock || 'N/A'} pieces
              </Text>
              <Text style={{ fontFamily: 'NunitoSans-Regular' }}>
                MRP{' '}
                <Text style={styles.price}>
                  <FontAwesome name="rupee" size={15} color="black" />
                  {productDetails?.attributes?.pricing?.actual_price || 'N/A'}
                </Text>
              </Text>
              <Text style={{ color: 'gray', fontSize: 12, fontFamily: 'NunitoSans-Regular' }}>
                (inclusive of all taxes)
              </Text>
            </View>
            <TouchableOpacity style={styles.btn}>
              <Text style={styles.btnText} onPress={() => navigation.navigate('Cart')}>
                Add To Cart
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginLeft: windowWidth*0.04,
    marginBottom: 0,
    marginTop:windowHeight*0.01,
    
  },
  cardsContainer: {
    justifyContent: 'space-between',
  },
  card: {
    borderColor: '#dee3e0',
    borderWidth: 1,
    borderRadius: 15,
    height: windowHeight * 0.33,
    padding: windowWidth * 0.02,
    marginBottom: windowHeight*0.02,
    width: windowWidth * 0.45,
  },
  text: {
    fontFamily: 'NunitoSans-Regular',
  },
  modalBackground: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    paddingTop: windowHeight * 0.09,
  },
  modalContent: {
    backgroundColor: 'white',
    padding: windowWidth * 0.05,
    paddingTop: 0,
    borderTopLeftRadius: windowHeight * 0.02,
    borderTopRightRadius: windowHeight * 0.02,
  },
  closeButton: {
    alignSelf: 'center',
    marginRight: windowWidth * 0.01,
    marginTop: -windowHeight * 0.05,
    marginBottom: windowHeight * 0.02,
    backgroundColor: '#263238',
    padding: windowWidth * 0.02,
    borderRadius: 20,
  },
  bottomsheetimage: {
    width: windowWidth * 0.5,
    height: windowHeight * 0.2,
    resizeMode: 'contain',
    marginLeft: windowWidth * 0.2,
  },
  bottomContainer: {
    flexDirection: 'row',
    width: windowWidth * 1.0,
    padding: windowHeight * 0.02,
    alignItems: 'center',
    backgroundColor: 'white',
    shadowColor: '#0a0a0a',
    shadowOffset: { width: 1, height: windowHeight * 0.02 },
    shadowOpacity: 1,
    shadowRadius: 3.84,
    elevation: 10,
    marginTop: windowHeight * 0.4,
  },
  bottomContainer1: {
    flexDirection: 'row',
    width: windowWidth * 1.0,
    padding: windowHeight * 0.01,
    alignItems: 'center',
    backgroundColor: 'white',
    shadowColor: '#0a0a0a',
    shadowOffset: { width: 1, height: windowHeight * 0.02 },
    shadowOpacity: 1,
    shadowRadius: 3.84,
    elevation: 10,
    padding: windowWidth * 0.04,
    paddingTop: windowWidth * 0.02,
    paddingBottom: windowWidth * 0.02,
  },
  btn: {
    backgroundColor: '#263238',
    width: windowWidth * 0.3,
    height: windowHeight * 0.05,
    borderRadius: windowHeight * 0.01,
    marginLeft: windowWidth * 0.3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnText: {
    fontSize: windowHeight * 0.017,
    color: 'white',
    fontFamily: 'NunitoSans-Regular',
  },
  headingText: {
    fontFamily: 'NunitoSans-Semibold',
    fontSize: windowWidth * 0.03,
    color: 'black',
  },
  text1: {
    fontFamily: 'NunitoSans-Regular',
    fontSize: windowWidth * 0.04,
    color: 'gray',
  },
  text2: {
    fontFamily: 'NunitoSans-Regular',
    fontSize: windowWidth * 0.03,
    color: 'gray',
  },
  text4: {
    fontFamily: 'NunitoSans-Regular',
    fontSize: windowWidth * 0.03,
    color: 'gray',
  },
  text3: {
    fontFamily: 'NunitoSans-Regular',
    color: '#008CFF',
  },
  name: {
    fontFamily: 'NunitoSans-Bold',
    fontSize: windowWidth * 0.02,
  },
  price: {
    fontFamily: 'NunitoSans-Bold',
    fontSize: windowWidth * 0.04,
  },
});
