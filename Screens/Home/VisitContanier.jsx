import { View, Text,StyleSheet, TextInput,Dimensions,TouchableOpacity,FlatList} from 'react-native'
import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import CalendarStrip from 'react-native-calendar-strip';
import moment from 'moment';
const height=Dimensions.get('window').height;
const width=Dimensions.get('window').width;
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

  
export default function VisitContanier() {
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

  return (
    <View style={styles.contanier}>
    <View style={styles.selectDateContainer}>
        <Text style={styles.selectTimeText}>Select Date</Text>
        <View style={styles.calendarContainer}>
            <CalendarStrip
                style={{ height: height * 0.10, paddingTop: 10 }}
                selectedDate={moment()}
                daySelectionAnimation={{ type: 'background', duration: 300, highlightColor: '#E2F5FF' }}
                calendarColor={'#ffffff'}
                calendarHeaderStyle={{ color: 'black', fontFamily: 'NunitoSans-Regular', fontWeight: 'normal', fontSize: width * 0.03 }}
            />
        </View>
    </View>
    <View style={styles.selectDateContainer}>
        <Text style={styles.selectTimeText}>Select Time</Text>
        <View style={styles.selectDate}>
            {renderTimeSlots()}
        </View>
    </View>
    <View style={{ margin: width * 0.02 }}>
        <Text style={{ marginLeft: width * 0.03, fontFamily: 'NunitoSans-Bold' }}>Do you wish to choose sharing type?</Text>
        <View style={{
            flexDirection: 'row', alignItems: 'center', backgroundColor: '#e1ecf0',
            marginLeft: width * 0.03, marginRight: width * 0.03,
            paddingLeft: width * 0.02,
            borderRadius: 10, marginBottom: height * 0.020, marginTop: height * 0.010
        }}>
            <TextInput
                style={{ flex: 1, fontSize: 15, paddingVertical: 10, fontFamily: 'NunitoSans-Regular' }}
                placeholder='Choose sharing type (Optional) '
                placeholderTextColor='#888'
            />
            <MaterialIcons name="keyboard-arrow-down" size={24} color="black" style={{ marginRight: 10 }} />
        </View>
    </View>
    <View style={{ margin: width * 0.02,marginBottom:width * 0.1 }}>
        <Text style={{ marginLeft: width * 0.03, fontFamily: 'NunitoSans-Bold' }}>
        Number of Hostels to visit</Text>
        <View style={{
            flexDirection: 'row', alignItems: 'center', backgroundColor: '#e1ecf0',
            marginLeft: width * 0.03, marginRight: width * 0.03,
            paddingLeft: width * 0.02,
            borderRadius: 10, marginBottom: height * 0.020, marginTop: height * 0.010
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
  )
}
const styles = StyleSheet.create({
   contanier:{
    flex:1,
    backgroundColor:'white',justifyContent:'space-between'
   },btn:{
    backgroundColor: '#008CFF',paddingTop: 20, color: 'white',borderTopLeftRadius:width*0.05,
    borderTopRightRadius:width*0.05,marginTop:height*0.09,
         textAlign: 'center',
         width: width * 1.0, height: 58,fontFamily:'Roboto-Regular'
   },
   text:{
    borderColor:'gray',borderWidth:width*0.001,
    padding:width*0.02,borderRadius:width*0.03,fontFamily:'NunitoSans-Regular'
   },
   textContanier:{
    margin:width*0.02,marginTop:0
   },
   selectDate:{
     margin:width*0.03
   },
   selectTimeText:{
    marginLeft:width*0.05,fontFamily:'NunitoSans-Bold',
    marginTop:height*0.01
   },
   selectDateContainer: {
    marginHorizontal: width * 0.03,
    marginTop: height * 0.02,
  },
  cardsContainer:{
    paddingLeft:width*0.01,paddingRight:width*0.09
  },
  timeSlotsRow:{
    display:'flex',flexDirection:'row',marginRight:width*0.04
  },
  timeSlotText:{
    borderWidth:1,borderColor:'#cdd1ce',padding:width*0.02,marginRight:width*0.03,
    marginBottom:width*0.03,borderRadius:width*0.06,fontFamily:'NunitoSans-Regular'
  }
})
