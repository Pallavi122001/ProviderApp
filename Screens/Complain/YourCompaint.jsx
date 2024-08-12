import React, { useEffect, useState } from 'react';
import { View, Text, StatusBar, StyleSheet, Dimensions, TouchableOpacity, Image, ActivityIndicator, Alert } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

export default function YourComplaint() {
  const navigation = useNavigation();
  const [complaintData, setComplaintData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchComplaintTypes = async () => {
      try {
        const response = await axios.get('https://api.dreamprovider.in/api/complaint-types?populate=*');
        setComplaintData(response.data.data);
      } catch (error) {
        setError('Failed to fetch data');
        Alert.alert('Error', 'Failed to fetch data. Please check your network connection.');
      } finally {
        setLoading(false);
      }
    };

    fetchComplaintTypes();
  }, []);

  const handleCardPress = (key, screen, title, image) => {
    if (screen) {
      navigation.navigate(screen, { key, title, image });
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="white" barStyle="dark-content" translucent={true} />
      <View style={styles.header}>
        <Text style={styles.headerText}>Raise a complaint</Text>
        <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
          <AntDesign name="arrowleft" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text1}>What’s your complaint?</Text>
        <Text style={styles.text2}>Select complaint type</Text>
      </View>
      {loading ? (
        <View style={styles.loaderContainer}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      ) : error ? (
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>{error}</Text>
        </View>
      ) : (
        <View style={styles.row}>
          {complaintData.map((item, index) => (
            item.attributes.icon.data.map((icon, iconIndex) => (
              <TouchableOpacity
                key={`${index}-${iconIndex}`}
                onPress={() => handleCardPress(item.id, 'IssueComplaint', item.attributes.name, icon.attributes.url)}
              >
                <View style={styles.card}>
                  <Image source={{ uri: icon.attributes.url }} style={styles.image} />
                  <Text style={styles.titletext}>{item.attributes.name}</Text>
                </View>
              </TouchableOpacity>
            ))
          ))}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    paddingTop: height * 0.04,
    padding: height * 0.02,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 5,
    shadowRadius: 3.84,
    elevation: 7,
  },
  headerText: {
    fontFamily: 'NunitoSans-Regular',
    fontSize: width * 0.04,
  },
  textContainer: {
    padding: width * 0.06,
  },
  text1: {
    fontFamily: 'NunitoSans-Semibold',
    fontSize: width * 0.04,
  },
  text2: {
    fontFamily: 'NunitoSans-Regular',
    fontSize: width * 0.04,
  },
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    color: 'red',
    fontSize: width * 0.04,
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    marginLeft: width * 0.05,
    marginTop: width * 0.03,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 10,
    marginRight: width * 0.05,
    marginBottom: height * 0.02,
    justifyContent: 'center',
    alignItems: 'center',
    width: (width - width * 0.1) / 3 - width * 0.04,
    height: 130,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 5,
    shadowRadius: 3.84,
    elevation: 7,
    paddingLeft: width * 0.02,
    paddingRight: width * 0.02,
  },
  image: {
    width: width * 0.1,
    height: height * 0.1,
    resizeMode: 'contain',
  },
  titletext: {
    fontWeight: '400',
    fontFamily: 'NunitoSans-Regular',
  },
});
