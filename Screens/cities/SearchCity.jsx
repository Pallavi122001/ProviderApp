import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  FlatList,
  Dimensions,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { EvilIcons, MaterialIcons, FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import { SvgXml } from "react-native-svg";

const { width, height } = Dimensions.get("window");

const xml = `<svg width="23" height="20" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.1071 12.5L25 22.3929V25H22.3929L12.5 15.1071L2.60714 25H0V22.3929L9.89286 12.5L0 2.60714V0H2.60714L12.5 9.89286L22.3929 0H25V2.60714L15.1071 12.5Z" fill="#263238"/>
</svg>`;

const numColumns = 3;

export default function SearchCity() {
  const navigation = useNavigation();
  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://api.dreamprovider.in/api/cities?populate=image"
      );
      setCities(response.data.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const HandleIconClick = () => {
    navigation.navigate("HomeScreen");
  };

  const handleCardPress = (city) => {
    setSelectedCity(city);
  };

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => handleCardPress(item)}>
        <View style={styles.cards}>
          <View style={styles.titleContainer}>
            <Image
              source={{
                uri: item.attributes.image.data.attributes.formats.thumbnail.url,
              }}
              style={styles.image}
            />
            <Text style={styles.titletext}>{item.attributes.name}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View
      style={{
        paddingTop: width * 0.1,
        backgroundColor: "white",
        padding: width * 0.06,
        flex: 1,
      }}
    >
      <StatusBar
        backgroundColor="white"
        barStyle="dark-content"
        translucent={true}
      />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text style={{ fontSize: width * 0.05, fontFamily: "NunitoSans-Semibold" }}>
          Select Your City
        </Text>
        <TouchableOpacity onPress={HandleIconClick}>
          <SvgXml xml={xml} />
        </TouchableOpacity>
      </View>
      <View style={{ marginTop: height * 0.02, marginBottom: height * 0.01 }}>
        <FlatList
          data={cities}
          renderItem={renderItem}
          numColumns={numColumns}
        />
      </View>
      {selectedCity && (
        <View>
          <Text
            style={{
              fontWeight: "600",
              fontSize: width * 0.04,
              fontFamily: "NunitoSans-Regular",
              marginTop: height * 0.03,
            }}
          >
            Select Your Locality
          </Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: "#e1ecf0",
              borderRadius: 10,
              marginBottom: height * 0.02,
              marginTop: height * 0.01,
            }}
          >
            <EvilIcons
              name="location"
              size={24}
              color="black"
              style={{ marginLeft: 5, paddingBottom: 5 }}
            />
            <TextInput
              style={{ flex: 1, fontSize: 15, paddingVertical: 10 }}
              placeholder=" "
              placeholderTextColor="#888"
            />
            <MaterialIcons
              name="keyboard-arrow-down"
              size={24}
              color="black"
              style={{ marginRight: 10 }}
            />
          </View>
          <Text style={{ fontWeight: "600", fontFamily: "NunitoSans-Regular" }}>
            Select Your College (Optional)
          </Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: "#e1ecf0",
              borderRadius: 10,
              marginBottom: height * 0.02,
              marginTop: height * 0.01,
            }}
          >
            <FontAwesome
              name="graduation-cap"
              size={24}
              color="black"
              style={{ marginLeft: 10, paddingBottom: 5 }}
            />
            <TextInput
              style={{ flex: 1, fontSize: 15, paddingVertical: 10 }}
              placeholder=" "
              placeholderTextColor="#888"
            />
            <MaterialIcons
              name="keyboard-arrow-down"
              size={24}
              color="black"
              style={{ marginRight: 10 }}
            />
          </View>
          <TouchableOpacity>
            <Text
              style={{
                backgroundColor: "#008CFF",
                borderRadius: 10,
                paddingTop: 20,
                color: "white",
                textAlign: "center",
                marginBottom: height * 0.02,
                width: width * 0.9,
                height: 58,
                fontFamily: "Roboto-Regular",
              }}
            >
              Continue
            </Text>
          </TouchableOpacity>
          <ImageBackground style={{width:width*1.0,height:height*0.3}} source={require('../../assets/Images/selectcity.png')}/>
        </View>
      )}
      <ImageBackground style={{width:width*1.0,height:height*0.3,marginTop:height*0.35}} source={require('../../assets/Images/selectcity.png')}/>
    </View>
  );
}

const styles = StyleSheet.create({
  cards: {
    marginBottom: height * 0.01,
    alignItems: "center",
    width: width / numColumns,
    paddingHorizontal: 9,
    marginLeft: -10,
  },
  titleContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: height * 0.01,
    paddingRight: width * 0.02,
    justifyContent: "center",
  },
  titletext: {
    color: "black",
    fontSize: width * 0.03,
    fontFamily: "NunitoSans-Semibold",
  },
  image: {
    width: width * 0.19,
    height: width * 0.19,
    borderRadius: 84,
  },
});
