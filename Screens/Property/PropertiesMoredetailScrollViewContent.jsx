import { View, Text, StyleSheet, Dimensions } from 'react-native'
import React, { useEffect, useState } from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { SvgXml } from 'react-native-svg';
import { useSelector } from 'react-redux';
import { useNavigation,useRoute } from '@react-navigation/native';
import axios from 'axios';

const width=Dimensions.get('window').width;
const height=Dimensions.get('window').height;
export default function PropertiesMoredetailScrollViewContent() {
  const route = useRoute();
  const { propertyId } = route.params;
  const property = useSelector((state) =>
    state.property.data.find((item) => item.id === propertyId)
  );
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null);

  const xml8 = `<svg width="41" height="22" viewBox="0 0 41 22" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M37.654 5.024C37.1785 5.02475 36.7086 5.12805 36.2762 5.32691V4.98938C36.2762 3.66686 35.7537 2.39845 34.8236 1.46288C33.8935 0.527318 32.6318 0.00114702 31.3158 0H9.47233C8.15861 0.0045803 6.90026 0.532267 5.97293 1.46746C5.04561 2.40265 4.52491 3.66911 4.52492 4.98938V5.27498C3.70888 4.97298 2.80815 5.00042 2.01181 5.35153C1.21546 5.70264 0.585419 6.35013 0.253922 7.15809C-0.0775755 7.96605 -0.0847494 8.87165 0.233906 9.68481C0.552561 10.498 1.17227 11.1555 1.96295 11.5193V19.5767C1.96295 19.6915 2.00831 19.8015 2.08906 19.8827C2.16981 19.9638 2.27934 20.0094 2.39353 20.0094H4.63687V21.5673C4.63687 21.682 4.68224 21.7921 4.76299 21.8733C4.84374 21.9544 4.95326 22 5.06746 22H7.8275C7.89915 22.0003 7.96975 21.9827 8.03291 21.9487C8.09607 21.9147 8.14978 21.8654 8.18919 21.8053L9.35176 20.0094H31.2211L32.3837 21.8053C32.4231 21.8654 32.4768 21.9147 32.54 21.9487C32.6031 21.9827 32.6737 22.0003 32.7454 22H35.5054C35.6196 22 35.7291 21.9544 35.8099 21.8733C35.8906 21.7921 35.936 21.682 35.936 21.5673V20.0094H38.5195C38.6337 20.0094 38.7432 19.9638 38.824 19.8827C38.9047 19.8015 38.9501 19.6915 38.9501 19.5767V11.5193C39.6624 11.2157 40.2488 10.6745 40.6104 9.98693C40.9719 9.2994 41.0864 8.50761 40.9347 7.74508C40.7829 6.98255 40.3742 6.29594 39.7773 5.80104C39.1805 5.30614 38.4321 5.03322 37.6583 5.02832L37.654 5.024ZM5.38609 4.98938C5.38723 3.89715 5.81947 2.84998 6.58796 2.07765C7.35646 1.30533 8.39843 0.870933 9.48524 0.869788H31.3158C32.4026 0.870933 33.4446 1.30533 34.2131 2.07765C34.9816 2.84998 35.4138 3.89715 35.415 4.98938V5.89811C34.7536 6.49828 34.3544 7.33639 34.3041 8.23053V12.0862H6.61325V8.19158C6.58559 7.7264 6.46226 7.27203 6.25104 6.85717C6.03982 6.44231 5.74531 6.07596 5.38609 5.78127V4.98938ZM34.2955 12.9516V15.3316H6.61756V12.9516H34.2955ZM7.59929 21.1389H5.49804V20.0138H8.32697L7.59929 21.1389ZM35.0748 21.1389H32.9736L32.2416 20.0138H35.0705L35.0748 21.1389ZM38.3946 10.8053C38.3031 10.833 38.2234 10.8907 38.168 10.969C38.1127 11.0474 38.0848 11.142 38.0889 11.238V19.144H2.82412V11.2164C2.8282 11.1204 2.80037 11.0257 2.74502 10.9474C2.68966 10.869 2.60993 10.8114 2.5184 10.7836C2.08359 10.6493 1.69346 10.3984 1.38997 10.0578C1.08648 9.7173 0.881122 9.30004 0.795993 8.85096C0.710864 8.40188 0.749184 7.93797 0.90683 7.50915C1.06448 7.08032 1.33548 6.70281 1.69069 6.41723C2.0459 6.13164 2.47187 5.9488 2.92277 5.88836C3.37366 5.82793 3.83242 5.89219 4.24969 6.07423C4.66696 6.25628 5.02694 6.54922 5.2909 6.92153C5.55487 7.29385 5.71282 7.73145 5.74778 8.18725V15.7254C5.74778 15.8402 5.79314 15.9502 5.87389 16.0314C5.95464 16.1125 6.06416 16.1581 6.17836 16.1581H34.7261C34.8403 16.1581 34.9498 16.1125 35.0305 16.0314C35.1113 15.9502 35.1566 15.8402 35.1566 15.7254V8.21322C35.184 7.75599 35.3353 7.315 35.5942 6.93803C35.8531 6.56107 36.2098 6.26249 36.6255 6.07467C37.0412 5.88684 37.5001 5.81692 37.9525 5.87248C38.4049 5.92805 38.8335 6.10698 39.192 6.38989C39.5505 6.6728 39.825 7.0489 39.986 7.47743C40.147 7.90597 40.1882 8.3706 40.1051 8.82099C40.0221 9.27138 39.818 9.69034 39.515 10.0325C39.2119 10.3746 38.8215 10.6269 38.386 10.762L38.3946 10.8053Z" fill="#263238"/>
    </svg>
    `;
  const xml10 = `<svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.2192 13.7982C12.3671 14.8428 12.8931 15.8054 13.709 16.496C15.5342 18.0409 18.2662 17.8136 19.811 15.9884C21.0431 14.5328 21.6471 13.0426 21.6471 11.5C21.6471 5.89593 17.1041 1.35294 11.5 1.35294C5.89593 1.35294 1.35294 5.89593 1.35294 11.5C1.35294 17.1041 5.89593 21.6471 11.5 21.6471C11.8736 21.6471 12.1765 21.9499 12.1765 22.3235C12.1765 22.6971 11.8736 23 11.5 23C5.14873 23 0 17.8513 0 11.5C0 5.14873 5.14873 0 11.5 0C17.8513 0 23 5.14873 23 11.5C23 13.3802 22.2732 15.1737 20.8437 16.8625C18.8161 19.2581 15.2304 19.5563 12.8349 17.5287C11.7185 16.5838 11.0157 15.2507 10.8576 13.8124C9.1089 13.508 7.77941 11.9828 7.77941 10.1471V9.80882C7.40581 9.80882 7.10294 9.50596 7.10294 9.13235C7.10294 8.75875 7.40581 8.45588 7.77941 8.45588H9.13235V6.42647C9.13235 6.05287 9.43522 5.75 9.80882 5.75C10.1824 5.75 10.4853 6.05287 10.4853 6.42647V8.45588H12.5147V6.42647C12.5147 6.05287 12.8176 5.75 13.1912 5.75C13.5648 5.75 13.8676 6.05287 13.8676 6.42647V8.45588H15.2206C15.5942 8.45588 15.8971 8.75875 15.8971 9.13235C15.8971 9.50596 15.5942 9.80882 15.2206 9.80882V10.1471C15.2206 11.9558 13.9299 13.4632 12.2192 13.7982ZM9.13235 9.80882V10.1471C9.13235 11.4547 10.1924 12.5147 11.5 12.5147C12.8076 12.5147 13.8676 11.4547 13.8676 10.1471V9.80882H9.13235Z" fill="#263238"/>
    </svg>
    `;
  const xml3 = `<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6.00008 9.074L9.60508 11.2498L8.64842 7.149L11.8334 4.38984L7.63925 4.02817L6.00008 0.166504L4.36091 4.02817L0.166748 4.38984L3.34591 7.149L2.39508 11.2498L6.00008 9.074Z" fill="#ECDA93"/>
    </svg>
    `;
  return (
    <View style={{paddingBottom:height*0.1}}>
      <View>
        <Text style={{ fontSize:width*0.03 , fontWeight: '100', fontFamily: 'NunitoSans-Regular', fontWeight: '600' }}>Description</Text>
         <Text style={styles.description}>{property.attributes.description}</Text>
      </View>
      <View style={{ marginTop: height*0.01 }}>
        <Text style={{ marginBottom: height*0.02, fontFamily: 'NunitoSans-Regular', fontWeight: '600' }}>Amenities</Text>
        <View style={{ display: 'flex', flexDirection: 'row' }}>
          <View style={{ marginRight: width*0.03, alignItems: 'center' }}>
            <FontAwesome name="tv" size={24} color="black" />
            <Text style={styles.itemText}>TV</Text>
          </View>
          <View style={{ marginRight: width*0.03, alignItems: 'center' }}>
            <MaterialCommunityIcons name="washing-machine" size={24} color="black" />
            <Text style={styles.itemText}>Washing </Text>
            <Text style={styles.itemText}>Machine</Text>
          </View>
          <View style={{ marginRight: width*0.03, alignItems: 'center' }}>
            <AntDesign name="wifi" size={24} color="black" />
            <Text style={styles.itemText}>Wifi</Text>
          </View>
          <View style={{ marginRight: width*0.03, alignItems: 'center' }}>
            <SvgXml xml={xml8} />
            <Text style={styles.itemText}>Furniture</Text>
          </View>
          <View style={{ marginRight: width*0.03, alignItems: 'center' }}>
            <Text style={{ fontSize: width*0.04, fontWeight: '100',fontFamily: 'NunitoSans-Regular' }}>4+</Text>
          </View>
        </View>
      </View>
      <View>
        <Text style={{ marginBottom: height*0.01,marginTop: height*0.02, fontWeight: '100', fontSize: 14, fontFamily: 'NunitoSans-Regular', fontWeight: '600' }}>Bills Included</Text>
        <View style={{ display: 'flex', flexDirection: 'row',marginTop: height*0.01 }}>
          <View style={{ marginRight: width*0.03, alignItems: 'center' }}>
            <AntDesign name="wifi" size={24} color="black" />
            <Text style={styles.itemText}>wifi</Text>
          </View>
          <View style={{ marginRight: width*0.03, alignItems: 'center' }}>
            <SvgXml xml={xml10} />
            <Text style={styles.itemText}>Electricity </Text>
          </View>
          <View style={{ marginRight: width*0.03, alignItems: 'center' }}>
            <MaterialCommunityIcons name="gas-cylinder" size={24} color="black" />
            <Text style={styles.itemText}>Gas</Text>
          </View>
          <View style={{ marginRight: width*0.03, alignItems: 'center' }}>
            <Ionicons name="water-outline" size={24} color="black" />
            <Text style={styles.itemText}>water</Text>
          </View>
          <View style={{ marginRight: width*0.03, alignItems: 'center' }}>
            <Text style={{ fontSize: width*0.04, fontWeight: '100',fontFamily: 'NunitoSans-Regular' }}>3+</Text>
          </View>
        </View>
      </View>
      <Text style={{marginTop: height*0.02,marginBottom: height*0.01, fontFamily: 'NunitoSans-Regular', fontWeight: '600' }}>Security & Safety</Text>
      <View style={{ display: 'flex', flexDirection: 'row' }}>
        <View style={{ marginRight: width*0.03}}>
          <AntDesign name="videocamera" size={24} color="black" />
          <Text style={{ fontSize: 10, fontFamily: 'NunitoSans-Regular', fontWeight: '600' }}>Camera</Text>
        </View>
        <View>
          <MaterialCommunityIcons name="boom-gate-alert-outline" size={24} color="black" />
          <Text style={{ fontSize: 10, fontFamily: 'NunitoSans-Regular', fontWeight: '600' }}>Gates</Text>
        </View>
      </View>
      <View>
        <Text style={{ marginTop: height*0.02, marginBottom: height*0.01, fontFamily: 'NunitoSans-Regular', fontWeight: '600' }}>Payment Information</Text>
        <Text style={styles.listText}>1. The listed price are per person per year.</Text>
        <Text style={styles.listText}>2. The rent need to send by Bank Transfer.</Text>
        <Text style={styles.listText}>3. The rent may be paid monthly, half yearly, or annually.</Text>
        <Text style={styles.listText}>4. Rent may be paid in advance by 7th of every month if monthly isadopted.</Text>
      </View>
      <View>
        <Text style={{ marginTop: height*0.02, marginBottom: height*0.01, fontFamily: 'NunitoSans-Regular', fontWeight: '600' }}>Cancellation Policy</Text>
        <Text style={styles.listText}>1. The listed price are per person per year.</Text>
        <Text style={styles.listText}>2. The rent need to send by Bank Transfer.</Text>
        <Text style={styles.listText}>3. The rent may be paid monthly, half yearly, or annually.</Text>
        <Text style={styles.listText}>4. Rent may be paid in advance by 7th of every month if monthly isadopted.</Text>
      </View>
      <View style={{ display: 'flex', flexDirection: 'row', marginTop: height*0.02, alignItems: 'center' }}>
        <View style={{ display: 'flex', flexDirection: 'row' }}>
          <SvgXml xml={xml3} style={{ marginRight: width*0.01 }} />
          <SvgXml xml={xml3} style={{ marginRight: width*0.01 }} />
          <SvgXml xml={xml3} style={{ marginRight: width*0.01 }} />
          <SvgXml xml={xml3} style={{ marginRight: width*0.01 }} />
          <SvgXml xml={xml3} style={{ marginRight: width*0.01 }} />
          <Text style={{ fontSize: 14,fontFamily:'NunitoSans-Semibold' }}>5.0</Text>
        </View>
      </View>
      <Text style={{ fontSize: width*0.03, fontWeight: '100', marginTop: width*0.04 ,fontFamily:'NunitoSans-Regular'}}>
        Based on 1 review</Text>
      <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', margin: width*0.01, marginTop: height*0.02, 
  
      }}>
        <View style={{ display: 'flex', flexDirection: 'row', marginRight: width*0.03 }}>
          <Text style={styles.ratingText}>Amenities</Text>
          <SvgXml xml={xml3} style={{ marginRight: width*0.01 }} />
          <SvgXml xml={xml3} style={{ marginRight: width*0.01 }} />
          <SvgXml xml={xml3} style={{ marginRight: width*0.01 }} />
          <SvgXml xml={xml3} style={{ marginRight: width*0.01 }} />
          <SvgXml xml={xml3} style={{ marginRight: width*0.01 }} />
        </View>
        <View style={{ display: 'flex', flexDirection: 'row', marginRight: width*0.03}}>
          <Text style={styles.ratingText}>Room Quality</Text>
          <SvgXml xml={xml3} style={{ marginRight: width*0.01 }} />
          <SvgXml xml={xml3} style={{ marginRight: width*0.01 }} />
          <SvgXml xml={xml3} style={{ marginRight: width*0.01 }} />
          <SvgXml xml={xml3} style={{ marginRight: width*0.01 }} />
          <SvgXml xml={xml3} style={{ marginRight: width*0.01 }} />
        </View>
      </View>
      <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', margin: 5 }}>
        <View style={{ display: 'flex', flexDirection: 'row', marginRight: width*0.03}}>
          <Text style={styles.ratingText}>Connecitivity</Text>
          <SvgXml xml={xml3} style={{ marginRight: width*0.01 }} />
          <SvgXml xml={xml3} style={{ marginRight: width*0.01 }} />
          <SvgXml xml={xml3} style={{ marginRight: width*0.01 }} />
          <SvgXml xml={xml3} style={{ marginRight: width*0.01 }} />
          <SvgXml xml={xml3} style={{ marginRight: width*0.01 }} />
        </View>
        <View style={{ display: 'flex', flexDirection: 'row', marginRight: width*0.03}}>
          <Text style={styles.ratingText}>Safety Security</Text>
          <SvgXml xml={xml3} style={{ marginRight: width*0.01 }} />
          <SvgXml xml={xml3} style={{ marginRight: width*0.01 }} />
          <SvgXml xml={xml3} style={{ marginRight: width*0.01 }} />
          <SvgXml xml={xml3} style={{ marginRight: width*0.01 }} />
          <SvgXml xml={xml3} style={{ marginRight: width*0.01 }} />
        </View>
      </View>
      <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', margin: width*0.01 }}>
        <View style={{ display: 'flex', flexDirection: 'row', marginRight: width*0.03}}>
          <Text style={styles.ratingText}>Location</Text>
          <SvgXml xml={xml3} style={{ marginRight: width*0.01 }} />
          <SvgXml xml={xml3} style={{ marginRight: width*0.01 }} />
          <SvgXml xml={xml3} style={{ marginRight: width*0.01 }} />
          <SvgXml xml={xml3} style={{ marginRight: width*0.01 }} />
          <SvgXml xml={xml3} style={{ marginRight: width*0.01 }} />
        </View>
        <View style={{ display: 'flex', flexDirection: 'row', marginRight: width*0.03}}>
          <Text style={styles.ratingText}>Value For Money</Text>
          <SvgXml xml={xml3} style={{ marginRight: width*0.01 }} />
          <SvgXml xml={xml3} style={{ marginRight: width*0.01 }} />
          <SvgXml xml={xml3} style={{ marginRight: width*0.01 }} />
          <SvgXml xml={xml3} style={{ marginRight: width*0.01 }} />
          <SvgXml xml={xml3} style={{ marginRight: width*0.01 }} />
        </View>
      </View>
      <View style={{ display: 'flex', flexDirection: 'row', marginRight: width*0.03, marginTop: height*0.02 }}>
        <SvgXml xml={xml3} style={{ marginRight: width*0.01 }} />
        <SvgXml xml={xml3} style={{ marginRight: width*0.01 }} />
        <SvgXml xml={xml3} style={{ marginRight: width*0.01 }} />
        <SvgXml xml={xml3} style={{ marginRight: width*0.01 }} />
        <SvgXml xml={xml3} style={{ marginRight: width*0.01 }} />
        <Text style={{ fontSize: 14,fontFamily: 'NunitoSans-Semibold' }}>5.0</Text>
      </View>
      <Text style={{ fontFamily: 'NunitoSans-Regular', marginBottom: height*0.09 }}>Aayush Dubey</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  itemText: {
    fontSize: width*0.03, fontFamily: 'NunitoSans-Regular', fontWeight: '600'
  },
  listText: {
    fontSize: width*0.03, fontFamily: 'NunitoSans-Regular'
  },
  ratingText: {
    fontSize: width*0.03, fontFamily: 'NunitoSans-Regular',marginRight:width*0.01

  },
  description:{
    fontFamily:'NunitoSans-Regular',fontSize:width*0.03
  }
})

