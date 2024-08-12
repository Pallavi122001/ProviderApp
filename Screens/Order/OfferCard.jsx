import { View, Text ,Image,StyleSheet, Dimensions,TouchableOpacity,Modal} from 'react-native'
import React,{useState} from 'react';
import { Feather } from '@expo/vector-icons';

const width=Dimensions.get('window').width;
const height=Dimensions.get('window').height;
export default function OfferCard() {
    const [modalVisible, setModalVisible] = useState(false);
    const handleOpenModal = () => {
        setModalVisible(true);
    };

    const handleCloseModal = () => {
        setModalVisible(false);
    };
  return (
    <View style={styles.contanier}>
    <TouchableOpacity style={styles.card} onPress={handleOpenModal}>
    <Image source={require('../../assets/Images/offer.png')} style={styles.image}/>
    <Text style={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
    sed do eiusmod tempor incididunt ut labore et dolore
    magna aliqua. </Text>
    </TouchableOpacity>
    <Modal
    animationType="slide"
    transparent={true}
    visible={modalVisible}
    onRequestClose={handleCloseModal}
>
    <View style={styles.modalBackground}>
        <TouchableOpacity style={styles.closeButton} onPress={handleCloseModal}>
            <Feather name="x" size={24} color="white" />
        </TouchableOpacity>
        <View style={styles.modalContent}>
        <View style={styles.TopContent}>
        <Image source={require('../../assets/Images/offer.png')} style={styles.image}/>
       <View >
       <Text style={styles.headerText}>How to Redeem</Text>
       <Text style={styles.itemText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
       <View style={styles.listItem}>
       <Text style={styles.bullet}>•</Text>
       <Text style={styles.itemText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
     </View>
     <View style={styles.listItem}>
       <Text style={styles.bullet}>•</Text>
       <Text style={styles.itemText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
     </View>
       </View>
       <TouchableOpacity style={styles.btn}>
      <Text style={styles.shareText}>Tap To Share</Text>
      <Image style={styles.btnimage} source={require('../../assets/Images/whatsapp.png')}/>
      <Image style={styles.btnimage} source={require('../../assets/Images/facebook.png')}/>
      <Image style={styles.btnimage} source={require('../../assets/Images/next.png')}/>
      </TouchableOpacity>
      
        </View>
        <View>
      <TouchableOpacity style={styles.button}>
                    <Text  
                    style={styles.buttonText}>Generate a Coupon Code</Text>
                </TouchableOpacity>
      </View>
         </View>
        
    </View>
</Modal>
  </View>
  )
}
const styles = StyleSheet.create({
  contanier:{
    flex:1,backgroundColor:'white'
  },
  card:{
    backgroundColor: 'white',
    borderRadius: width * 0.05,
    margin: width * 0.02,
    marginLeft: width * 0.02,
    justifyContent:'center',
    shadowColor: 'black',
    elevation: 5,
    padding:width*0.04
  },
  image: {
    resizeMode: 'contain',
    width:width*0.89
  },
  text:{
    margin: width * 0.02,
    marginTop: 0,
    fontWeight: '100',
    fontSize: width * 0.03,
    marginRight: width * 0.15,fontFamily:'NunitoSans-Regular'
  },
  TopContent:{
      margin:width*0.05
  },
  modalBackground: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)'
},
modalContent: {
    backgroundColor: 'white',
    padding: width * 0.05,paddingLeft:0,paddingBottom:0,
    borderTopLeftRadius: height * 0.02,
    borderTopRightRadius: height * 0.02,justifyContent:'space-between'
},
closeButton: {
    alignSelf: 'center',
    marginRight: width * 0.01,
    marginTop: -height * 0.05,
    marginBottom:height*0.02,
    backgroundColor:'#263238',padding:width*0.02,borderRadius:20
},
listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,marginLeft:width*0.04
  },
  bullet: {
    fontSize: 20,
    marginRight: 10,
  },
  itemText: {
    margin: width * 0.02,
    marginTop: 0,
    fontWeight: '100',
    fontSize: width * 0.03,
    marginRight: width * 0.14,fontFamily:'NunitoSans-Regular'
  },
  headerText:{
    fontFamily:'NunitoSans-Semibold',margin:height*0.02,fontSize:width*0.04
  },
  btn:{
    backgroundColor:'#263238',display:'flex',flexDirection:'row',marginTop:width *0.01,
    alignItems:'center',justifyContent:'center',padding:height *0.01,
    borderRadius:width *0.02,marginBottom:width *0.04,marginLeft:width*0.04
   },
   imageGif:{
    width:width*0.08,height:height *0.04,marginRight:width*0.02
   },
   btnimage:{
    width:width *0.05,
    height:width *0.05,
    marginRight:width *0.01,marginLeft:width *0.02
   },
   shareText:{
    color:'white', fontFamily:'Roboto-Medium'
    },
    button: {
        width: width,
        height: height*0.08,
        backgroundColor: '#008CFF',
        justifyContent: 'center',
        alignItems: 'center',
       borderTopLeftRadius:15, borderTopRightRadius:15,
        marginHorizontal: 0,     
    },
    
    buttonText: {
        fontSize: 20,
        color: 'white',
        fontFamily: 'Roboto-Medium'
    }
})
