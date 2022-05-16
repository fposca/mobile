import {  Text, TouchableOpacity, View, StyleSheet } from 'react-native'

const OrderItem = ({item}) => {

  return (
    <View>
 
        <Text style ={styles.marginer}>Orden: {item.buyer.nombre}, {item.buyer.direccion}</Text>
 
  </View>
  )
}

export default OrderItem;



const styles = StyleSheet.create({

    marginer: {
        marginTop: 25,
        padding: 15,
        backgroundColor:'#FAFD7CFF',
        borderRadius:15,
        textAlign:'center'
        
    },


  })