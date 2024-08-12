import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, Image, TextInput, Alert } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

export default function IssueComplaint() {
  const [complaintData, setComplaintData] = useState(null);
  const [notes, setNotes] = useState('');
  const navigation = useNavigation();

  useEffect(() => {
    fetch('http://api.dreamprovider.in/api/complaint-types?populate=*')
      .then(response => response.json())
      .then(data => {
        if (data && data.data && data.data.length > 0) {
          setComplaintData(data.data[0]);
        }
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const handleTextInputChange = (text) => {
    setNotes(text);
  };

  const handleSubmitButton = () => {
    const complaint = {
      data: {
        notes: notes,
      },
    };

    fetch('https://api.dreamprovider.in/api/complaints', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(complaint),
    })
      .then(response => response.json())
      .then(data => {
        console.log('API Response:', data);
        if (data) {
          Alert.alert('Success', 'Your complaint has been submitted.');
          navigation.navigate('Complete');
        }
      })
      .catch(error => {
        console.error('Error submitting complaint:', error);
        Alert.alert('Error', 'There was an error submitting your complaint.');
      });
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Raise a complaint</Text>
        <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
          <AntDesign name="arrowleft" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <View style={styles.topContainer}>
        <View style={styles.textContainer}>
          {complaintData && (
            <Text style={styles.text1}>{complaintData.attributes.name}</Text>
          )}
          <Text style={styles.text2}>Please select your issue.</Text>
        </View>
        {complaintData && (
          <Image style={styles.image} source={{ uri: complaintData.attributes.icon.data[0].attributes.url }} />
        )}
      </View>
      <View>
        <Text style={styles.addText}>Add notes (Optional)</Text>
        <TextInput
          placeholder='Describe the problem'
          multiline={true}
          numberOfLines={4}
          style={styles.inputContainer}
          value={notes}
          onChangeText={handleTextInputChange}
        />
      </View>
      <View style={{ marginLeft: width * 0.05 }}>
        <Text style={styles.uploadText}>Upload photos (Optional)</Text>
        <Text style={styles.text}>You can add a maximum of 3 photos</Text>
      </View>
      <View style={styles.imageContainer}>
        <Image source={require('../../assets/Images/camera.png')} />
      </View>
      <View>
        <TouchableOpacity style={styles.btn} onPress={handleSubmitButton}>
          <Text style={styles.btnText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'space-between',
  },
  radioContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    borderColor: '#9747FF',
    borderWidth: width * 0.005,
    paddingBottom: height * 0.02,
    borderStyle: 'dashed',
    borderRadius: width * 0.03,
    alignItems: 'center',
    marginBottom: width * 0.07,
    marginLeft: width * 0.01,
    marginRight: width * 0.02,
    padding: width * 0.02,
  },
  text: {
    marginRight: width * 0.03,
    borderColor: '#cbd0d6',
    borderWidth: 1,
    padding: width * 0.05,
    borderRadius: width * 0.9,
    paddingTop: width * 0.02,
    paddingBottom: width * 0.02,
    fontFamily: 'NunitoSans-Regular',
    marginTop: height * 0.01,
  },
  title: {
    marginLeft: width * 0.1,
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
  topContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: width * 0.05,
    marginTop: width * 0.01,
    marginLeft: 0,
    marginRight: 0,
    padding: width * 0.03,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    backgroundColor: 'white',
  },
  image: {
    marginRight: width * 0.06,
    width: width * 0.1,
    height: height * 0.1,
    resizeMode: 'contain',
  },
  text1: {
    fontFamily: 'NunitoSans-Semibold',
    fontSize: width * 0.04,
  },
  text2: {
    fontFamily: 'NunitoSans-Regular',
    fontSize: width * 0.03,
  },
  textContainer: {
    paddingTop: width * 0.03,
    paddingLeft: width * 0.03,
  },
  btn: {
    width: width,
    height: height * 0.07,
    backgroundColor: '#008CFF',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    marginHorizontal: 0,
  },
  btnText: {
    fontSize: width * 0.05,
    color: 'white',
    fontFamily: 'Roboto-Medium',
  },
  addText: {
    fontFamily: 'NunitoSans-Regular',
    marginLeft: width * 0.05,
  },
  text: {
    fontFamily: 'NunitoSans-Regular',
  },
  uploadText: {
    fontFamily: 'NunitoSans-Regular',
    fontWeight: '600',
    marginBottom: height * 0.01,
  },
  imageContainer: {
    borderWidth: 2,
    borderColor: '#f0eeeb',
    height: width * 0.35,
    justifyContent: 'center',
    width: width * 0.3,
    padding: width * 0.05,
    marginRight: width * 0.7,
    borderRadius: 10,
    margin: width * 0.05,
    marginBottom: height * 0.09,
  },
  inputContainer: {
    width: width * 0.90,
    height: height * 0.15,
    backgroundColor: '#e1ecf0',
    marginBottom: 10,
    borderRadius: 15,
    paddingLeft: 20,
    margin: width * 0.05,
    fontFamily: 'NunitoSans-Regular',
    textAlignVertical: 'top',
    paddingTop: height * 0.01,
  },
});
