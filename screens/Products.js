import { useEffect, useState } from 'react';
import {Text, View, ActivityIndicator, FlatList, TouchableOpacity, StyleSheet} from 'react-native';
import { fetching } from '../Services/fetch';

const Products = ({navigation, route}) => {
  const {category} = route.params;

  const [products, setProducts] = useState([])

  useEffect(()=> {

    (async ()=>{
      const data = await fetching('https://fakestoreapi.com/products/category/' + category)
      setProducts(data);
    })()

  }, [category])

  const handleDetail = (item) => {
    navigation.navigate('Detail', {
      id: item.id,
      title: item.title,
      item: item,
    })
  }

  return (
    <View style={styles.containertwo}>
    
      {products.length !== 0 ? 
        <FlatList
          data={products}
          renderItem={( {item} ) => {
            return <TouchableOpacity
              onPress={() => handleDetail(item)}
            >
              <Text style={styles.baseText}>
                {item.title}
              </Text>
            </TouchableOpacity>
          }
          }
          keyExtractor={item => item.id.toString()}
        />
        :
        <ActivityIndicator size={"large"} color={"blue"}/>
      }
    </View>
  )
}

export default Products;


const styles = StyleSheet.create({
  containertwo: {
    flex: 1,
    backgroundColor: "#7CA1B4",
    alignItems: "center",
    justifyContent: "center",
   
  },
  main : {
  width: 100,
  backgroundColor: "#7cb48f",
  width: 100,
  height: 100,
  margin: 4,
  },
 
  baseText: {
    color: '#333',
    padding: 15,
    textAlign: 'left',
    textTransform: 'capitalize',
    backgroundColor: "#fff",
    borderRadius:10,
    padding: 20,
    margin: 10,
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    fontSize:12


  }

  
});