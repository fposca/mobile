import { Text, TouchableOpacity, View, StyleSheet, Image, FlatList } from 'react-native'

const OrderItem = ({ item }) => {


  const fnRender = ({ item }) => {
    return (
      <>
        <Text style={styles.bold}>
          Nombre: {item.name}
        </Text>


        <Image
          source={{ uri: item.image }}
          style={{
            height: 100,
            width: '95%',
            borderRadius: 15,
            marginTop: 5,
            marginBottom: 5
          }}
          resizeMode="cover"
        />
      </>
    )
  }


  const numbers = [0];
  return (



    <View style={styles.marginer}>

      <FlatList

        data={item.items}
        renderItem={fnRender}
        keyExtractor={item => item.id.toString()}
      />









      <Text style={styles.mar}>
        Comprador: {item.buyer.nombre}
      </Text>

      <Text style={styles.mar}>
        Dirección:  {item.buyer.direccion}
      </Text>

      <Text style={styles.mar}>
        Hora: {item.createdAt}
      </Text>

      <Text style={styles.mar}>
        Cantidad: {item.items[numbers].quantity}
      </Text>

      <Text style={styles.bold}>
        Total: {item.total}
      </Text>



    </View>
  )
}

export default OrderItem;



const styles = StyleSheet.create({

  marginer: {
    marginTop: 25,
    padding: 15,
    backgroundColor: '#FAFD7CFF',
    borderRadius: 15,
    textAlign: 'center'

  },
  bold: {
    fontWeight: 'bold',
    margin: 5
  },
  mar: {

    marginBottom: 5
  }


})