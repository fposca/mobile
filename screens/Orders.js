import React, { useContext, useEffect, useState } from 'react'
import { Image, FlatList, Modal, StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View } from 'react-native'
import { Shop } from '../Context/ShopProvider'
import OrderItem from '../Components/OrderItem'
import { collection, getDocs, query, where } from "firebase/firestore";

import { db } from "../Firebase/config";



const Orders = () => {
  const {usuario} = useContext(Shop);
  const [orders,setOrders]= useState([]);

  useEffect(()=> {

    (async ()=>{

        const queryCollectionOrders = query(collection(db, "orders"),where("usuario", "==", usuario));
   
        const querySnapshotOrders = await getDocs(queryCollectionOrders)

        const ordenes=[]
        querySnapshotOrders.forEach((doc)=> {
          const orden = {id: doc.id, ...doc.data()}
          ordenes.push(orden)
      })
        setOrders([...ordenes])
        
    })()

}, [orders])

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
      <>
      <Image
      style={{ width: 300, height: 150, marginBottom: 15, borderRadius:15 }}
      source={require("../assets/empty2.gif")}
    />
    <Text>No hay ordenes</Text></>
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