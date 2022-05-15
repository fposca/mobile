import { useContext, useEffect, useState } from 'react';
import {Text, View, ActivityIndicator, FlatList, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { Shop } from '../Context/ShopProvider';
import { fetching } from '../Services/fetch';

const Products = ({navigation, route}) => {
  const {category} = route.params;

  const {products} = useContext(Shop);

  const [productFilter, setProductFilter] = useState([])

  useEffect(()=> {

    (async ()=>{
      const productFilter = products.filter(product => product.species === category)
      setProductFilter(productFilter);
    })()

  }, [category])

  const handleDetail = (item) => {
    navigation.navigate('Detail', {
      id: item.id,
      title: item.name,
      item: item,
    })
  }

  return (
    <View  style ={styles.container}>
      {products.length !== 0 ? 
        <FlatList
          data={productFilter}
          renderItem={( {item} ) => {
            return <TouchableOpacity
              onPress={() => handleDetail(item)}
            >
              <Text style={{padding: 10, fontSize:15}}>
                {item.name}
              </Text>
            
              <Image 
            source={{uri: item.image}}
            style = {{
              height: 130,
              
              borderRadius:15,
            }}
            resizeMode = "cover"
          />



              

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

export default Products



const styles = StyleSheet.create({
 
  buttoner: {
    backgroundColor:'#fcfcfc',
    padding: 20,
    marginTop:50,
    width: 200,
    bottom: 20,
    position: 'relative',
    borderRadius:15

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
    textAlign: 'center',

    
   
  
  }

})