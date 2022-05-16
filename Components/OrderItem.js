import {  Text, TouchableOpacity, View, StyleSheet } from 'react-native'

const OrderItem = ({item}) => {

  return (
    <View>
        <Text  style ={styles.bold}>Orden</Text>
        <Text style ={styles.marginer}>Comprador: {item.buyer.nombre}, Lugar:{item.buyer.direccion}</Text>
 
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
    bold: {
      fontWeight:'bold',
      margin:20
    }


  })