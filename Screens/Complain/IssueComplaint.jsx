import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, Image, ScrollView, ActivityIndicator } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

export default function IssueComplaint() {
  const [complaintData, setComplaintData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedIssue, setSelectedIssue] = useState(null); 
  const navigation = useNavigation();

  useEffect(() => {
    fetch('https://api.dreamprovider.in/api/complaint-types?populate=*')
      .then(response => response.json())
      .then(data => {
        if (data && data.data && data.data.length > 0) {
          setComplaintData(data.data[0]);
        }
        setIsLoading(false); 
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setIsLoading(false);
      });
  }, []);

  const handleIssueSelect = (issue) => {
    setSelectedIssue(issue);
  };

  const handleSubmitButton = () => {
    if (selectedIssue) {
      navigation.navigate('IssueExplainContinue');
    }
  };

  if (isLoading) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

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
      <ScrollView>
        {complaintData &&
          complaintData.attributes.complaint_sub_types.data.map((subType, index) => (
            <View key={index}>
              <Text style={styles.title}>{subType.attributes.Name}</Text>
              <View style={{ marginLeft: width * 0.02 }}>
                <View style={styles.radioContainer}>
                  {subType.attributes.issue.map((issue, i) => (
                    <TouchableOpacity
                      key={i}
                      onPress={() => handleIssueSelect(issue)}
                      style={[
                        styles.radioButton,
                        selectedIssue === issue && styles.selectedRadioButton,
                      ]}
                    >
                      <Text
                        style={[
                          styles.text,
                          selectedIssue === issue && styles.selectedText,
                        ]}
                      >
                        {issue}
                      </Text>
                    </TouchableOpacity>
                  ))}
                </View>
              </View>
            </View>
          ))}
      </ScrollView>
      <View>
        <TouchableOpacity
          style={[styles.btn, !selectedIssue && styles.disabledBtn]}
          onPress={handleSubmitButton}
          disabled={!selectedIssue}
        >
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
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
  radioButton: {
    marginRight: width * 0.03,
    borderColor: '#cbd0d6',
    borderWidth: 1,
    padding: width * 0.05,
    borderRadius: width * 0.9,
    paddingTop: width * 0.02,
    paddingBottom: width * 0.02,
    marginTop: height * 0.01,
  },
  selectedRadioButton: {
    borderColor: '#008CFF',
    backgroundColor: '#008CFF',
  },
  text: {
    fontFamily: 'NunitoSans-Regular',
  },
  selectedText: {
    color: 'white',
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
  disabledBtn: {
    backgroundColor: '#008CFF',
  },
  btnText: {
    fontSize: width * 0.05,
    color: 'white',
    fontFamily: 'Roboto-Medium',
  },
});
