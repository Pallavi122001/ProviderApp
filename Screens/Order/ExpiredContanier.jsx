import {StyleSheet,ScrollView} from 'react-native'
import React from 'react'
import ExpiredCard from '../Order/ExpiredCard'

export default function ExpiredContanier() {
  return (
    <ScrollView style={styles.contanier}>
      <ExpiredCard/>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  contanier:{
    flex:1
  }
  
})