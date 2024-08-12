import { View, Text ,StatusBar,TextInput,StyleSheet,Dimensions,TouchableOpacity,Image, ScrollView} from 'react-native'
import React from 'react'
import { SvgXml } from 'react-native-svg';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons} from '@expo/vector-icons';
import CalendarStrip from 'react-native-calendar-strip';
import moment from 'moment';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const Time = [
  {
    key: '1',
    Text:'10:00-11:00 AM'
  },
  {
      key: '2',
      Text:'11:00-12:00 PM'
  },
  {
      key: '3',
      Text:'12:00-01:00 PM'
  },
  {
      key: '4',
      Text:'01:00-02:00 PM'
    },
    {
        key: '5',
        Text:'02:00-03:00 PM'
    },
    {
        key: '6',
        Text:'03:00-04:00 PM'
    },
];

export default function PremiumVisit() {
    const navigation = useNavigation();
    const handleBackArrow = () => {
      navigation.navigate('HomeScreen');
    };
    const renderTimeSlots = () => {
      const timeSlotsRows = [];
      for (let i = 0; i < Time.length; i += 3) {
        timeSlotsRows.push(Time.slice(i, i + 3));
      }
  
      return timeSlotsRows.map((row, index) => (
        <View key={index} style={styles.timeSlotsRow}>
          {row.map((item) => (
            <TouchableOpacity key={item.key} style={styles.timeSlot}>
              <Text style={styles.timeSlotText}>{item.Text}</Text>
            </TouchableOpacity>
          ))}
        </View>
      ));
    };
    const xml = `
      <svg width="25" height="15" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18 5H3.83L7.41 1.41L6 0L0 6L6 12L7.41 10.58L3.83 7H18V5Z" fill="black"/>
      </svg>
    `;
  return (
    <ScrollView contentContainerStyle={styles.contanier}>
    <StatusBar backgroundColor={'white'} translucent={true} barStyle={'dark-content'}/>
<View>
<View style={styles.header}>
<Text style={styles.text}>Hi there! Searching in</Text>
<View style={styles.heading}>
  <View style={styles.location}>
    <Text style={styles.locationText}>Noida, Sector 62</Text>
    <MaterialIcons name="keyboard-arrow-down" size={windowWidth * 0.05} color="black" />
  </View>
  <TouchableOpacity onPress={handleBackArrow}>
    <SvgXml xml={xml} style={styles.backIcon} />
  </TouchableOpacity>
</View>
</View>
<View style={styles.Contanier1}>
<Text style={styles.Text}>Schedule Visit</Text>
</View>
<View style={styles.selectDateContainer}>
        <Text style={styles.selectDateText}>Select Date</Text>
        <View style={styles.calendarContainer}>
            <CalendarStrip
                style={{ height: windowHeight * 0.10, paddingTop: windowWidth*0.01,marginBottom:-windowWidth*0.07 }}
                selectedDate={moment()}
                daySelectionAnimation={{ type: 'background', duration: 300, highlightColor: '#E2F5FF' }}
                calendarColor={'#ffffff'}
                calendarHeaderStyle={{ color: 'black', fontFamily: 'NunitoSans-Regular', fontWeight: 'normal', fontSize: windowWidth * 0.03 }}
            />
        </View>
    </View>
    <View style={styles.selectDateContainer}>
        <Text style={styles.selectTimeText}>Select Time</Text>
        <View style={styles.selectDate}>
            {renderTimeSlots()}
        </View>
    </View>
    <View style={{ margin: windowWidth* 0.02 }}>
        <Text style={{ marginLeft: windowWidth * 0.03, fontFamily: 'NunitoSans-Bold' }}>Do you wish to choose sharing type?</Text>
        <View style={{
            flexDirection: 'row', alignItems: 'center', backgroundColor: '#e1ecf0',
            marginLeft: windowWidth * 0.03, marginRight: windowWidth * 0.03,
            paddingLeft: windowWidth * 0.02,
            borderRadius: 10, marginBottom: windowHeight * 0.020, marginTop: windowHeight * 0.010
        }}>
            <TextInput
                style={{ flex: 1, fontSize: 15, paddingVertical: 10, fontFamily: 'NunitoSans-Regular' }}
                placeholder='Choose sharing type (Optional) '
                placeholderTextColor='#888'
            />
            <MaterialIcons name="keyboard-arrow-down" size={24} color="black" style={{ marginRight: 10 }} />
        </View>
    </View>
    <View style={{ margin: windowWidth * 0.02,marginBottom:windowWidth * 0.1 }}>
        <Text style={{ marginLeft: windowWidth * 0.03, fontFamily: 'NunitoSans-Bold' }}>
        Number of Hostels to visit</Text>
        <View style={{
            flexDirection: 'row', alignItems: 'center', backgroundColor: '#e1ecf0',
            marginLeft: windowWidth* 0.03, marginRight: windowWidth * 0.03,
            paddingLeft: windowWidth * 0.02,
            borderRadius: 10, marginBottom: windowHeight * 0.020, marginTop: windowHeight * 0.010
        }}>
            <TextInput
                style={{ flex: 1, fontSize: 15, paddingVertical: 10, fontFamily: 'NunitoSans-Regular' }}
                placeholder='Choose number of hostels to visit '
                placeholderTextColor='#888'
            />
            <MaterialIcons name="keyboard-arrow-down" size={24} color="black" style={{ marginRight: 10 }} />
        </View>
    </View>
</View>
 <View>
   <View style={{ flexDirection: 'row'}}>
   <TouchableOpacity style={styles.selectRoomButton} >
     <Text style={styles.selectRoomBtnText}>Book Now</Text>
     
   </TouchableOpacity>

   <TouchableOpacity style={styles.scheduleVisitButton} >
     <View style={{ flexDirection: 'row', alignItems: 'center' }}>
     
       <Image source={require('../../assets/Images/selectroom.png')} 
       style={{marginLeft:windowWidth*0.2}}/>
     </View>  
   </TouchableOpacity>
 </View>
</View>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  contanier:{
    flex:1,backgroundColor:'white',paddingTop:windowHeight*0.04,justifyContent:'space-between'
  },
  header:{
  margin:windowWidth*0.05
  },
Contanier1:{
    borderColor:'gray',borderWidth:windowWidth*0.001,marginBottom:windowHeight*0.04,
    padding:windowWidth*0.03,borderRadius:windowWidth*0.03,marginLeft:windowWidth*0.04,
    marginRight:windowWidth*0.5,paddingLeft:windowWidth*0.1,paddingRight:windowWidth*0.1
  },
  text: {
    fontSize: windowWidth * 0.03,
    color: 'black',fontFamily:'NunitoSans-Regular'
  },
  heading: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginRight: windowWidth * 0.04,
  },
  location: {
    flexDirection: 'row',
  },
  Text:{
    fontFamily:'NunitoSans-Regular'
  },
  locationText: {
    fontSize: windowWidth * 0.04,
    color: 'black',
    marginRight: windowWidth * 0.02,fontFamily:'NunitoSans-Bold'
  },
  backIcon: {
    marginLeft:windowWidth*0.45
  },
  inputsContainer: {
    flexDirection: 'row',
    marginTop: windowHeight * 0.01,
    marginBottom: windowHeight * 0.01,
  },
  selectRoomBtnText:{
    color:'white',textAlign:'center',fontFamily:'Roboto-Medium'
 },
 selectRoomButton: {
    backgroundColor: '#008CFF',
    height: windowHeight*0.07,
    borderTopLeftRadius: 20,
    justifyContent: 'center',
    marginRight: 10,width:200
  },
  scheduleVisitButton: {
    backgroundColor: 'white',
    height: windowHeight*0.07,
    borderTopRightRadius: 20,
    justifyContent: 'center',width:200
  },
  btn:{
    backgroundColor: '#008CFF',paddingTop: 20, color: 'white',borderTopLeftRadius:windowWidth*0.05,
    borderTopRightRadius:windowWidth*0.05,marginTop:windowHeight*0.09,
         textAlign: 'center',
         windowWidth: windowWidth * 1.0, height: 58,fontFamily:'Roboto-Regular'
   },
   text:{
    borderColor:'gray',
    padding:windowWidth*0.02,borderRadius:windowWidth*0.03,fontFamily:'NunitoSans-Regular'
   },
   textContanier:{
    margin:windowWidth*0.02,marginTop:0
   },
   selectDate:{
     marginTop:windowWidth*0.03,marginBottom:0
   },
   selectDateText:{
    marginLeft:windowWidth*0.05,fontFamily:'NunitoSans-Bold'
   },
   selectTimeText:{
    marginLeft:windowWidth*0.05,fontFamily:'NunitoSans-Bold',
    marginTop:windowHeight*0.04
   },
   selectDateContainer: {
    marginHorizontal: windowWidth * 0.04,marginBottom:windowWidth * 0.02
  },
  cardsContainer:{
    paddingLeft:windowWidth*0.01,paddingRight:windowWidth*0.09
  },
  timeSlotsRow:{
    display:'flex',flexDirection:'row',margin:windowWidth*0.01,marginBottom:0
  },
  timeSlotText:{
    borderColor:'#cdd1ce',padding:windowWidth*0.02,marginRight:windowWidth*0.03,borderWidth:1,
    marginBottom:windowWidth*0.03,borderRadius:windowWidth*0.06,
    fontFamily:'NunitoSans-Regular',fontSize:windowWidth*0.03
  },
  selectDateText:{
    marginLeft:windowWidth*0.05,fontFamily:'NunitoSans-Bold',
    
  }
})
