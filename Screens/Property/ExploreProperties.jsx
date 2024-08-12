import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, Image, ScrollView, ActivityIndicator, TextInput } from 'react-native';
import { MaterialIcons, FontAwesome, MaterialCommunityIcons, AntDesign,Ionicons } from '@expo/vector-icons';
import { SvgXml } from 'react-native-svg';
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPropertyDataRequest, fetchPropertyDataSuccess, fetchPropertyDataFailure } from '../store/Action/PropertyAction';
const xml1=`<svg width="15" height="12" viewBox="0 0 15 12" fill="white"  xmlns="http://www.w3.org/2000/svg">
<path d="M13.1152 11.725H2.02646C1.89335 11.725 1.7854 11.6157 1.7854 11.4807V2.19837C1.7854 2.06344 1.89335 1.9541 2.02646 1.9541H13.1152C13.2483 1.9541 13.3562 2.06344 13.3562 2.19837V11.4807C13.3562 11.6157 13.2483 11.725 13.1152 11.725ZM2.26752 11.2365H12.8741V2.44265H2.26752V11.2365Z" fill="white"/>
<path d="M14.3204 2.44273H0.821137C0.688024 2.44273 0.580078 2.33339 0.580078 2.19846V0.244273C0.580078 0.109337 0.688024 0 0.821137 0H14.3204C14.4536 0 14.5615 0.109337 14.5615 0.244273V2.19846C14.5615 2.33339 14.4536 2.44273 14.3204 2.44273ZM1.0622 1.95418H14.0794V0.488546H1.0622V1.95418Z" fill="white"/>
<path d="M9.49937 11.725H5.64243C5.50931 11.725 5.40137 11.6156 5.40137 11.4807V5.86244C5.40137 5.7275 5.50931 5.61816 5.64243 5.61816H9.49937C9.63253 5.61816 9.74042 5.7275 9.74042 5.86244V11.4807C9.74042 11.6156 9.63253 11.725 9.49937 11.725ZM5.88348 11.2364H9.25831V6.10671H5.88348V11.2364Z" fill="white"/>
<path d="M13.1152 10.0154H9.49936C9.3662 10.0154 9.2583 9.90606 9.2583 9.77113C9.2583 9.63619 9.3662 9.52686 9.49936 9.52686H13.1152C13.2484 9.52686 13.3563 9.63619 13.3563 9.77113C13.3563 9.90606 13.2484 10.0154 13.1152 10.0154Z" fill="white"/>
<path d="M5.64234 10.0154H2.02646C1.89335 10.0154 1.7854 9.90606 1.7854 9.77113C1.7854 9.63619 1.89335 9.52686 2.02646 9.52686H5.64234C5.77545 9.52686 5.8834 9.63619 5.8834 9.77113C5.8834 9.90606 5.77545 10.0154 5.64234 10.0154Z" fill="white"/>
<path d="M13.8646 11.7249H1.13542C1.06064 11.7249 1 11.6155 1 11.4806C1 11.3457 1.06064 11.2363 1.13542 11.2363H13.8646C13.9394 11.2363 14 11.3457 14 11.4806C14 11.6155 13.9394 11.7249 13.8646 11.7249Z" fill="white"/>
<path d="M5.28063 4.64142H2.99057C2.85746 4.64142 2.74951 4.53208 2.74951 4.39715V3.42005C2.74951 3.28512 2.85746 3.17578 2.99057 3.17578H5.28063C5.41374 3.17578 5.52169 3.28512 5.52169 3.42005V4.39715C5.52169 4.53208 5.41374 4.64142 5.28063 4.64142ZM3.23163 4.15287H5.03957V3.66433H3.23163V4.15287Z" fill="white"/>
<path d="M7.57067 4.64142H5.28061C5.1475 4.64142 5.03955 4.53208 5.03955 4.39715V3.42005C5.03955 3.28512 5.1475 3.17578 5.28061 3.17578H7.57067C7.70383 3.17578 7.81173 3.28512 7.81173 3.42005V4.39715C7.81173 4.53208 7.70383 4.64142 7.57067 4.64142ZM5.52167 4.15287H7.32961V3.66433H5.52167V4.15287Z" fill="white"/>
<path d="M9.86095 4.64142H7.57089C7.43778 4.64142 7.32983 4.53208 7.32983 4.39715V3.42005C7.32983 3.28512 7.43778 3.17578 7.57089 3.17578H9.86095C9.99411 3.17578 10.102 3.28512 10.102 3.42005V4.39715C10.102 4.53208 9.99411 4.64142 9.86095 4.64142ZM7.81195 4.15287H9.61989V3.66433H7.81195V4.15287Z" fill="white"/>
<path d="M12.151 4.64142H9.86093C9.72777 4.64142 9.61987 4.53208 9.61987 4.39715V3.42005C9.61987 3.28512 9.72777 3.17578 9.86093 3.17578H12.151C12.2842 3.17578 12.392 3.28512 12.392 3.42005V4.39715C12.392 4.53208 12.2842 4.64142 12.151 4.64142ZM10.102 4.15287H11.9099V3.66433H10.102V4.15287Z" fill="white"/>
<path d="M7.57089 11.725C7.43778 11.725 7.32983 11.6156 7.32983 11.4807V5.86244C7.32983 5.7275 7.43778 5.61816 7.57089 5.61816C7.70405 5.61816 7.81195 5.7275 7.81195 5.86244V11.4807C7.81195 11.6156 7.70405 11.725 7.57089 11.725Z" fill="white"/>
</svg>
`;
const xml2=`<svg width="13" height="15" viewBox="0 0 13 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.2037 0C0.541016 0 0 0.543701 0 1.20968V13.7903C0 14.4563 0.541016 15 1.2037 15H11.7963C12.459 15 13 14.4563 13 13.7903V1.20968C13 0.543701 12.459 0 11.7963 0H1.2037ZM1.2037 0.483871H11.7963C12.2006 0.483871 12.5185 0.803396 12.5185 1.20968V13.7903C12.5185 14.1966 12.2006 14.5161 11.7963 14.5161H1.2037C0.799429 14.5161 0.481481 14.1966 0.481481 13.7903V3.3871H11.5556C11.5875 3.38755 11.6191 3.38163 11.6487 3.36967C11.6783 3.35772 11.7053 3.33997 11.728 3.31746C11.7507 3.29495 11.7688 3.26812 11.7811 3.23854C11.7934 3.20897 11.7997 3.17722 11.7997 3.14516C11.7997 3.1131 11.7934 3.08136 11.7811 3.05178C11.7688 3.0222 11.7507 2.99538 11.728 2.97286C11.7053 2.95035 11.6783 2.93261 11.6487 2.92065C11.6191 2.9087 11.5875 2.90277 11.5556 2.90323H0.481481V1.20968C0.481481 0.803396 0.799429 0.483871 1.2037 0.483871ZM1.92593 0.967742C1.52991 0.967742 1.2037 1.29556 1.2037 1.69355C1.2037 2.09153 1.52991 2.41935 1.92593 2.41935C2.32195 2.41935 2.64815 2.09153 2.64815 1.69355C2.64815 1.29556 2.32195 0.967742 1.92593 0.967742ZM4.09259 0.967742C3.69657 0.967742 3.37037 1.29556 3.37037 1.69355C3.37037 2.09153 3.69657 2.41935 4.09259 2.41935C4.48861 2.41935 4.81482 2.09153 4.81482 1.69355C4.81482 1.29556 4.48861 0.967742 4.09259 0.967742ZM1.92593 1.45161C2.06173 1.45161 2.16667 1.55707 2.16667 1.69355C2.16667 1.83003 2.06173 1.93548 1.92593 1.93548C1.79012 1.93548 1.68519 1.83003 1.68519 1.69355C1.68519 1.55707 1.79012 1.45161 1.92593 1.45161ZM4.09259 1.45161C4.2284 1.45161 4.33333 1.55707 4.33333 1.69355C4.33333 1.83003 4.2284 1.93548 4.09259 1.93548C3.95678 1.93548 3.85185 1.83003 3.85185 1.69355C3.85185 1.55707 3.95678 1.45161 4.09259 1.45161ZM6.5 4.59677C4.10962 4.59677 2.16667 6.54937 2.16667 8.95161C2.16667 11.3539 4.10962 13.3065 6.5 13.3065C8.89038 13.3065 10.8333 11.3539 10.8333 8.95161C10.8333 6.54937 8.89038 4.59677 6.5 4.59677ZM6.5 5.08065C8.46815 5.08065 10.0793 6.56213 10.3142 8.4753C9.93065 8.49673 9.67265 8.62507 9.44155 8.73236C9.18942 8.84941 8.94561 8.95161 8.42593 8.95161C7.99193 8.95161 7.77286 8.85169 7.51562 8.73236C7.25839 8.61303 6.95547 8.46774 6.5 8.46774C6.04453 8.46774 5.74161 8.61303 5.48438 8.73236C5.22714 8.85169 5.00807 8.95161 4.57407 8.95161C4.05439 8.95161 3.79773 8.84974 3.53588 8.73236C3.30365 8.62826 3.05005 8.50284 2.68576 8.4753C2.92074 6.56213 4.53185 5.08065 6.5 5.08065ZM6.5 8.95161C6.8608 8.95161 7.04819 9.04826 7.3125 9.17087C7.57681 9.29348 7.91054 9.43548 8.42593 9.43548C9.01528 9.43548 9.37569 9.29575 9.64468 9.17087C9.89408 9.05508 10.0538 8.9716 10.3519 8.95917C10.3477 11.0964 8.62762 12.8226 6.5 12.8226C4.37238 12.8226 2.65227 11.0964 2.64815 8.95917C2.92437 8.97742 3.09381 9.06038 3.34028 9.17087C3.61813 9.29542 3.98472 9.43548 4.57407 9.43548C5.08946 9.43548 5.42319 9.29348 5.6875 9.17087C5.95181 9.04826 6.1392 8.95161 6.5 8.95161Z" fill="#263238"/>
</svg>
`
const xml = `
<svg width="25" height="15" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M18 5H3.83L7.41 1.41L6 0L0 6L6 12L7.41 10.58L3.83 7H18V5Z" fill="white"/>
</svg>
`;
const xml3=`<svg width="11" height="14" viewBox="0 0 11 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.42492 12.9375C4.70616 13.0687 5.00616 13.125 5.3249 13.125C5.6249 13.125 5.90614 13.0687 6.18739 12.9562L6.28114 12.9187C9.01859 11.7563 10.7998 9.0938 10.7998 6.11261V2.47518C10.7998 2.32518 10.7248 2.17518 10.6123 2.06268L10.5373 1.98768C7.61236 -0.693518 3.05619 -0.656018 0.168747 2.06268C0.0562489 2.17518 0 2.32518 0 2.47518V6.18761C0 9.11255 1.74372 11.775 4.42492 12.9375ZM1.12498 2.73767C3.56244 0.600209 7.23737 0.600209 9.67482 2.73767V6.13136C9.67482 8.64381 8.17485 10.9125 5.84989 11.8875L5.75615 11.9063C5.4749 12.0188 5.15616 12.0188 4.87491 11.9063C2.6062 10.9125 1.12498 8.66256 1.12498 6.18761V2.73767Z" fill="#28E3A0"/>
<path d="M4.25622 8.09993C4.27497 8.11868 4.27497 8.13743 4.29372 8.13743C4.31247 8.15618 4.33122 8.15618 4.34997 8.17493C4.36872 8.17493 4.38747 8.19368 4.38747 8.19368C4.40622 8.21243 4.44372 8.21243 4.46247 8.21243C4.48122 8.21243 4.48122 8.21243 4.49997 8.23118C4.53747 8.23118 4.57497 8.24993 4.61247 8.24993C4.64997 8.24993 4.66872 8.24993 4.70622 8.24993C4.72496 8.24993 4.72496 8.24993 4.74371 8.24993C4.76246 8.24993 4.78121 8.24993 4.79996 8.23118C4.81871 8.23118 4.81871 8.21243 4.83746 8.21243C4.85621 8.21243 4.87496 8.19368 4.89371 8.19368C4.91246 8.19368 4.91246 8.17493 4.93121 8.17493C4.94996 8.15618 4.96871 8.15618 4.96871 8.13743L7.96866 5.69997C8.2124 5.51248 8.2499 5.15623 8.04365 4.91249C7.85616 4.66874 7.49992 4.63124 7.25617 4.83749L4.70622 6.89995L3.76873 5.81247C3.56249 5.56873 3.20624 5.54998 2.98125 5.75622C2.7375 5.96247 2.71875 6.31871 2.925 6.54371L4.21872 8.06243C4.23747 8.06243 4.23747 8.08118 4.25622 8.09993Z" fill="#28E3A0"/>
</svg>
`;
const xml4=`<svg width="17" height="11" viewBox="0 0 17 11" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.1784 0H0.821762C0.36856 0 0 0.352141 0 0.785154V8.73483C0 9.16785 0.36856 9.51999 0.821762 9.51999H5.82075L4.62221 10.6649C4.56345 10.7211 4.54578 10.8055 4.57763 10.8789C4.60947 10.9523 4.68446 11 4.76745 11H11.9965C12.0795 11 12.1545 10.9521 12.1863 10.8789C12.2182 10.8055 12.2005 10.7211 12.1417 10.6649L10.9432 9.51999H16.1782C16.6314 9.51999 17 9.16785 17 8.73483V0.785154C17.0002 0.352338 16.6316 0 16.1784 0ZM10.3745 9.53176L11.5006 10.6074H5.26359L6.38961 9.53176C6.39331 9.52823 6.39434 9.52372 6.39783 9.51999H10.3665C10.3698 9.52372 10.371 9.52823 10.3745 9.53176ZM16.5893 8.73483C16.5893 8.95134 16.405 9.12741 16.1784 9.12741H0.821762C0.595161 9.12741 0.410881 8.95134 0.410881 8.73483V0.785154C0.410881 0.568647 0.595161 0.392577 0.821762 0.392577H16.1784C16.405 0.392577 16.5893 0.568647 16.5893 0.785154V8.73483Z" fill="#263238"/>
</svg>
`;


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const ExploreProperties = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const property = useSelector((state) => state.property);
  const [selectedPropertyType, setSelectedPropertyType] = useState('All');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      dispatch(fetchPropertyDataRequest());
      try {
        const response = await fetch('https://api.dreamprovider.in/api/properties?populate=*');
        const data = await response.json();
        dispatch(fetchPropertyDataSuccess(data.data));
      } catch (error) {
        dispatch(fetchPropertyDataFailure(error.toString()));
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [dispatch]);

  const handleNavigate = (propertyDetail) => {
    navigation.navigate('PropertiesMoreDetails', { propertyId: propertyDetail.id });
  };

  const handleBackArrow = () => {
    navigation.navigate('HomeScreen');
  };

  const handlePropertyTypeSelection = (propertyType) => {
    setSelectedPropertyType(propertyType);
  };

  if (loading) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text>Loading...</Text>
      </View>
    );
  }

  if (property.status === 'failed') {
    return <Text>Error: {property.error}</Text>;
  }

  const properties = property.data || [];

  return (
    <View style={styles.container}>
      <View style={styles.mainContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>Hi there! Searching in</Text>
          <View style={styles.heading}>
            <View style={styles.location}>
              <Text style={styles.locationText}>Noida, Sector 62</Text>
              <MaterialIcons name="keyboard-arrow-down" size={windowWidth * 0.05} color="white" />
            </View>
            <TouchableOpacity onPress={handleBackArrow}>
              <SvgXml xml={xml} style={styles.backIcon} />
            </TouchableOpacity>
          </View>
          <View style={styles.inputsContainer}>
            <View style={styles.inputContainer}>
              <TextInput style={styles.input} placeholder="Choose College" placeholderTextColor="#888" />
              <MaterialIcons name="keyboard-arrow-down" size={windowWidth * 0.07} color="black" style={styles.arrowIcon} />
            </View>
            <View style={styles.inputContainer}>
              <TextInput style={styles.input} placeholder="Gender" placeholderTextColor="#888" />
              <MaterialIcons name="keyboard-arrow-down" size={windowWidth * 0.07} color="black" style={styles.arrowIcon} />
            </View>
          </View>
          <Text style={styles.resultText}>Yay! 5 results found</Text>
        </View>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity
            style={[styles.button, selectedPropertyType === 'All' && styles.selectedButton]}
            onPress={() => handlePropertyTypeSelection('All')}
          >
            <Text style={[styles.buttonText, selectedPropertyType === 'All' && styles.selectedButtonText]}>All</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, selectedPropertyType === 'Hostel' && styles.selectedButton]}
            onPress={() => handlePropertyTypeSelection('Hostel')}
          >
            <Text style={[styles.buttonText, selectedPropertyType === 'Hostel' && styles.selectedButtonText]}>
              <MaterialCommunityIcons name="bed-outline" size={windowWidth * 0.03} color={selectedPropertyType === 'Hostel' ? 'white' : '#7d7878'} style={{ padding: windowWidth * 0.005 }} />
              Hostel
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, selectedPropertyType === 'PG' && styles.selectedButton]}
            onPress={() => handlePropertyTypeSelection('PG')}
          >
            <Text style={[styles.buttonText, selectedPropertyType === 'PG' && styles.selectedButtonText]}>
              <MaterialCommunityIcons name="bed-outline" size={windowWidth * 0.03} color={selectedPropertyType === 'PG' ? 'white' : '#7d7878'} style={{ padding: windowWidth * 0.005 }} />
              PG
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, selectedPropertyType === 'Rooms' && styles.selectedButton]}
            onPress={() => handlePropertyTypeSelection('Rooms')}
          >
            <Text style={[styles.buttonText, selectedPropertyType === 'Rooms' && styles.selectedButtonText]}>
              <MaterialCommunityIcons name="bed-outline" size={windowWidth * 0.03} color={selectedPropertyType === 'Rooms' ? 'white' : '#7d7878'} style={{ padding: windowWidth * 0.005 }} />
              Rooms
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, selectedPropertyType === 'Flat' && styles.selectedButton]}
            onPress={() => handlePropertyTypeSelection('Flat')}
          >
            <Text style={[styles.buttonText, selectedPropertyType === 'Flat' && styles.selectedButtonText]}><Ionicons name="home-outline" size={windowWidth * 0.03} color="black" />Flat</Text>
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView style={{ marginTop: windowHeight * 0.07 }}>
        {properties.length > 0 ? (
          properties.map((item) => (
            <View key={item.id} style={styles.card}>
              <View style={styles.details}>
                <ScrollView horizontal>
                  {item.attributes.images.data.map((image) => (
                    <Image key={image.id} source={{ uri: image.attributes.url }} style={styles.propertyImage} />
                  ))}
                </ScrollView>
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                  <Text style={styles.name}>{item.attributes.name}</Text>
                  <Text style={styles.StartText}>Starting From</Text>
                </View>
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                  <Text style={styles.address}>{item.attributes.address}</Text>
                  <Text style={styles.price}> <FontAwesome name="rupee" size={15} color="black" />{item.attributes.price[0].price}/bed</Text>
                </View>
              </View>
              <View style={styles.providerContainer}>
                <View style={{ display: 'flex', flexDirection: 'row' }}>
                  <SvgXml xml={xml3} style={{ margin: windowWidth * 0.007, marginTop: 0 }} />
                  <Text style={{ fontSize: windowWidth * 0.030, fontWeight: '600', fontFamily: 'Handlee-Regular' }}>Provider Verified</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                  <SvgXml xml={xml4} style={{ marginRight: windowWidth * 0.013 }} />
                  <SvgXml xml={xml2} style={{ marginRight: windowWidth * 0.013 }} />
                  <AntDesign name="wifi" size={windowWidth * 0.026} color="black" style={{ marginRight: windowWidth * 0.013 }} />
                  <Text style={{ fontSize: windowWidth * 0.024 }}>4+</Text>
                </View>
              </View>
              <View style={styles.border} />
              <TouchableOpacity onPress={() => handleNavigate(item)} style={styles.btn}>
                <Text style={{ textAlign: 'center', color: 'white', padding: windowWidth*0.01, fontSize: windowWidth*0.04, fontFamily: 'Roboto-Medium' }}>More Details</Text>
              </TouchableOpacity>
            </View>
          ))
        ) : (
          <Text>No properties found</Text>
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0,
    backgroundColor: 'white',
    position: 'relative' 
  },
  loaderContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    zIndex: 10
  },
  mainContainer: {
    backgroundColor: '#008CFF',
    height: windowHeight * 0.18,
    borderRadius: windowWidth * 0.06,
  },
  textContainer: {
    paddingTop: windowHeight * 0.035,
    paddingLeft: windowWidth * 0.04,
  },
  text: {
    fontSize: windowWidth * 0.03,
    color: 'white',
    fontFamily: 'NunitoSans-Regular'
  },
  heading: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginRight: windowWidth * 0.04,
  },
  location: {
    flexDirection: 'row',
  },
  locationText: {
    fontSize: windowWidth * 0.04,
    color: 'white',
    marginRight: windowWidth * 0.02,
    fontFamily: 'NunitoSans-Bold'
  },
  backIcon: {
    marginRight: windowWidth * 0.01,
  },
  inputsContainer: {
    flexDirection: 'row',
    marginTop: windowHeight * 0.01,
    marginBottom: windowHeight * 0.01,
    marginRight: windowWidth * 0.2
  },
  inputContainer: {
    flexDirection: 'row',
    backgroundColor: '#e1ecf0',
    borderRadius: windowWidth * 0.02,
    marginRight: windowWidth * 0.02,
  },
  input: {
    fontSize: windowWidth * 0.033,
    marginLeft: windowWidth * 0.015,
    fontFamily: 'NunitoSans-Regular',
    paddingRight: windowWidth * 0.2
  },
  arrowIcon: {
    marginRight: windowWidth * 0.00,
  },
  resultText: {
    color: 'white',
    fontSize: windowWidth * 0.037,
    fontWeight: '100',
    fontFamily: 'NunitoSans-Regular'
  },
  buttonsContainer: {
    flexDirection: 'row',
    marginLeft: windowWidth * 0.05,
    marginTop: windowHeight * 0.02
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: windowWidth * 0.015,
    borderRadius: windowWidth * 0.02,
    marginRight: windowWidth * 0.01,
    marginTop: windowHeight * 0.01,
    borderWidth: windowWidth * 0.005,
    borderColor: '#babdc2',
    fontWeight: '100',
    fontFamily: 'NunitoSans-Regular',
    fontSize: 10
  },
  selectedButton: {
    backgroundColor: '#263238'
  },
  selectedButtonText: {
    color: 'white',
    backgroundColor: '#263238'
  },
  buttonText: {
    fontFamily: 'NunitoSans-Regular',
    fontSize: 10
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: windowWidth * 0.04,
    marginVertical: 10,
    marginHorizontal: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  details: {
    marginTop: windowWidth * 0.02
  },
  name: {
    fontSize: windowWidth * 0.044,
    marginTop: windowHeight * 0.01,
    fontFamily: 'NunitoSans-Semibold',
    textTransform: 'capitalize'
  },
  address: {
    fontSize: windowWidth * 0.030,
    fontWeight: '100',
    color: 'gray',
    marginTop: windowWidth * 0.01,
    fontFamily: 'NunitoSans-Regular',
    textTransform: 'capitalize'
  },
  price: {
    fontSize: windowWidth * 0.035,
    fontWeight: '100',
    marginTop: windowWidth * 0.01
  },
  btn: {
    backgroundColor: '#263238',
    padding: 10,
    borderRadius: 12,
    marginTop: windowWidth * 0.02,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10
  },
  providerContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: windowWidth * 0.014
  },
  border: {
    borderBottomWidth: 0.5,
    marginTop: windowHeight * 0.01,
    borderColor: '#9A9999'
  },
  StartText: {
    fontFamily: 'NunitoSans-Regular',
    fontSize: windowWidth * 0.03,
    marginTop: windowHeight * 0.01,
    color: '#8B8A8A',
    textTransform: 'capitalize'
  },
  propertyImage: {
    width: windowWidth * 0.7,
    height: windowHeight * 0.2,
    resizeMode: 'cover',
    borderRadius: 10,
    marginRight: windowWidth * 0.02
  }
});

export default ExploreProperties;
