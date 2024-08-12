import { View, Text, StyleSheet,Dimensions } from 'react-native'
import React from 'react'

const width=Dimensions.get('screen').width;
const height=Dimensions.get('screen').height;
export default function Headings({ text, isViewAll = false }) {
    return (
        <View style={styles.contanier}>
            <Text style={styles.heading}>{text}</Text>
            {isViewAll && <Text style={{color:'#1350FF',marginRight:width*0.04,
            fontFamily:'NunitoSans-Semibold',marginTop:height*0.02}}>View All</Text>}
        </View>
    )
}
const styles = StyleSheet.create({
    heading: {
        fontSize: width*0.04,
        color:'black',
        fontWeight:'600',
        fontFamily:'NunitoSans-Semibold',
        marginTop:height*0.02 ,
    },
    contanier: {
        marginTop:height*0.001 ,
        display: 'flex',
        flexDirection: 'row',
        textAlign: 'center',
        justifyContent: 'space-between',
        marginLeft:width*0.08
    }
})
