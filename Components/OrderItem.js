import {  Text, TouchableOpacity, View, StyleSheet } from 'react-native'

const OrderItem = ({item}) => {

  return (
    <View>
    <TouchableOpacity >
        <Text style ={styles.marginer}>Orden: {item.buyer.nombre}, {item.buyer.direccion}</Text>
    </TouchableOpacity>
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