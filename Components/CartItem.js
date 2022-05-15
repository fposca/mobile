import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React from 'react'

const CartItem = ({item, handleRemove}) => {
  return (
    <View style={styles.marginer}>
      <Text style={styles.marginer}>{item.name}</Text>
      
      <Image 
            source={{uri: item.image}}
            style = {{
              height: 100,
              width: '95%',
              borderRadius:15, 
              marginTop:10
            }}
            resizeMode = "cover"
          />
          <Text style={styles.marginer}> Cantidad: {item.quantity} </Text>
      <Text style={styles.marginer}>Total: ${item.price * item.quantity}</Text>
      <TouchableOpacity onPress={()=> handleRemove(item.id)}>
          <Text style={styles.btn}>Eliminar</Text>
      </TouchableOpacity>
    </View>
  )
}

export default CartItem


const styles = StyleSheet.create({
  marginer: {
      marginTop: 5,
    
      
  },
  btn: {
      padding: 15,
      margin: 20,
      backgroundColor:'#FB6467FF',
      borderRadius:15, 
      color: 'white',
      fontWeight:'bold', 
      width: 200
  }
 
})