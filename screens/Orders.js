import React, { useContext, useEffect, useState } from 'react'
import { ActivityIndicator, FlatList, Modal, StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View } from 'react-native'
import { Shop } from '../Context/ShopProvider'
import OrderItem from '../Components/OrderItem'



const Orders = () => {
  const {orders} = useContext(Shop);
  const fnRender = ({ item }) => {
    return (
      <OrderItem
        item={item}
        
      />
    )
  }
  
  return (
    <View style ={styles.container}>
  
    {orders.length !== 0 ?
      <FlatList
    
        data={orders}
        renderItem={fnRender}
        keyExtractor={item => item.id.toString()}
      />
    
      :
      <ActivityIndicator size={"large"} color={"blue"} />
    }

  </View>
  )
}

export default Orders


const styles = StyleSheet.create({
 
 
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#A6EEE6FF',
    textAlign: 'center',

  
  }

})