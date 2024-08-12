import { View, Text, StyleSheet, FlatList, Image, Dimensions } from 'react-native';
import React, { useState, useEffect } from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import axios from 'axios';

const { width, height } = Dimensions.get('window');

export default function CategoryCardSliders() {
  const [Product, setProduct] = useState([]);

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

  const renderItem = ({ item }) => {
    return (
      <View style={styles.card}>
        <Image
          source={{ uri: item?.attributes?.main_image?.data?.attributes?.formats?.small?.url }}
          style={styles.image}
        />
        <Text style={styles.name} numberOfLines={1} ellipsizeMode="tail">
          {item.attributes.name}
        </Text>
        <Text style={styles.description} numberOfLines={2} ellipsizeMode="tail">
          {item.attributes.short_discription}
        </Text>
        <Text style={styles.type} numberOfLines={1} ellipsizeMode="tail">
          {item.attributes.product_types}
        </Text>
        <Text style={styles.stock}>{item.attributes.stock} pieces</Text>
        <View style={styles.priceContainer}>
          <View style={styles.price}>
            <FontAwesome name="rupee" size={10} color="black" />
            <Text style={styles.text}>{item.attributes.pricing.actual_price}</Text>
          </View>
          <View style={styles.addButton}>
            <AntDesign name="plus" size={15} color="black" />
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={Product}
        renderItem={renderItem}
        contentContainerStyle={styles.cardsContainer}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: width * 0.03,
    marginBottom: 0,
  },
  cardsContainer: {
    justifyContent: 'space-between',
    marginTop: height * 0.01,
  },
  card: {
    flex: 1,
    borderColor: '#d9cfce',
    borderWidth: 1,
    borderRadius: 15,
    width: width * 0.35,
    height: height * 0.25,
    padding: width * 0.02,
    marginRight: width * 0.02,
    justifyContent: 'space-between',
  },
  image: {
    width: width * 0.26, 
    height: height * 0.1,
    borderRadius: width*0.1, 
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  name: {
    fontFamily: 'NunitoSans-Bold',
    fontSize: width * 0.02, 
    height: height * 0.03,
  },
  description: {
    fontFamily: 'NunitoSans-Regular',
    fontSize: width * 0.025,
    height: height * 0.03,
  },
  type: {
    fontFamily: 'NunitoSans-Regular',
    fontSize: width * 0.03,
    height: height * 0.02,
  },
  stock: {
    fontFamily: 'NunitoSans-Regular',
    fontSize: width * 0.03, // Adjusted fontSize
  },
  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  price: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontFamily: 'NunitoSans-Regular',
    fontSize: width * 0.035, // Adjusted fontSize
  },
  addButton: {
    borderColor: 'black',
    borderWidth: 1,
    paddingLeft: width * 0.02,
    paddingRight: width * 0.02,
    borderRadius: 10,
  },
});

