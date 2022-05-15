import { useContext } from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import { Shop } from '../Context/ShopProvider';

const Detail = ({navigation, route}) => {

  const {item} = route.params;

  const {addCart} = useContext(Shop);

  const handleAdd = () => {
    addCart(item, 1)
    console.log('agregaste', item.name);
    alert('producto agregado')
  }

  return (
      <View style ={styles.container}>
          <Text style ={styles.myTit}>{item.name}</Text>
          <Image 
            source={{uri: item.image}}
            style = {{
              height: 200,
              width: '95%',
              borderRadius:15
            }}
            resizeMode = "cover"
          />
          <Text style ={styles.myprice}>Precio: {item.price}</Text>
          <TouchableOpacity onPress={handleAdd}>
            <Text style ={styles.buttoner}>Add to cart</Text>
          </TouchableOpacity>
      </View>
  )
}

export default Detail


const styles = StyleSheet.create({
 
  buttoner: {
    backgroundColor:'#fcfcfc',
    padding: 20,
    marginTop:50,
    width: 200,
    bottom: 20,
    position: 'relative',
    borderRadius:15, 
    textAlign:'center'

  },

  myTit: {
    fontSize:20,
    fontWeight:'bold',
    margin:20, 
  },
  myprice: {
    padding: 15,
    fontWeight:'bold'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#A6EEE6FF',
    textAlign: 'center'
  
  }

})