import { View, Text ,StyleSheet,FlatList,Image,Dimensions} from 'react-native'
import React,{useState,useEffect} from 'react'
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import axios from 'axios';

const width=Dimensions.get('window').width;
const height=Dimensions.get('window').height;
export default function ProductBottomsheetCards() {
  const [Product, setProduct] = useState([]);
  useEffect(() => {
      fetchData();
  }, []);

  const fetchData = async () => {
      try {
          const response = await axios.get('https://api.dreamprovider.in/api/products?populate=pricing');
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
          style={{
            width: width * 0.3,
            height: height * 0.2,
            resizeMode: 'contain',
            marginLeft: width * 0.04
          }}
        />
            <Text style={styles.name}>{item.attributes.name}</Text>
            <Text style={{color:'gray',fontSize:width*0.02,fontFamily:'NunitoSans-Regular'}}>{item.attributes.short_discription}</Text>
            <Text style={{color:'gray',fontSize: width * 0.02,fontFamily:'NunitoSans-Regular'}}>{item.attributes.stock}pieces</Text>
            <View style={{display:'flex',flexDirection:'row',margin:2,justifyContent:'space-between'}}>
            <View style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
            <FontAwesome name="rupee" size={10} color="black" />
          <Text style={styles.text}>{item.attributes.pricing.actual_price}</Text>
            </View> 
          <View style={{borderColor:'black',borderWidth:1,paddingLeft:6,paddingRight:6,borderRadius:10}}>
          <AntDesign name="plus" size={10} color="black" />
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
          />
        </View>
      );
    }
    
    const styles = StyleSheet.create({
      cardsContainer: {
        justifyContent: 'space-between',
        marginTop:height*0.01,
      },
      card: {
        flex: 1,
        borderColor:'#d9cfce',
        borderWidth:1,
        borderRadius:15,
        width:width*0.3,
        height:height*0.2,
        padding:width*0.02,
        marginRight:width*0.02
      },
      image: {
        width: width*0.1,
        height: height*0.07,
        borderRadius: width*0.1,
        resizeMode: 'contain'
      },
      text:{
        fontFamily:'NunitoSans-Regular'
      },
      name:{
        fontFamily:'NunitoSans-Bold',
        fontSize:width*0.02
      }
    });
    
    