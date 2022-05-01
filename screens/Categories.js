import { useEffect, useState } from 'react';
import { Text, Button, View, FlatList, TouchableOpacity, ActivityIndicator, StyleSheet } from 'react-native'
import { fetching } from '../Services/fetch';

const Categories = ({ navigation }) => {

  const [categories, setCategories] = useState([]);

  useEffect(() => {

    (async () => {
      const data = await fetching('https://fakestoreapi.com/products/categories');
      setCategories(data);
    })()

  }, [])

  const handleCategory = (categoryID) => {
    //console.log(categoryID);
    navigation.navigate('Products', {
      category: categoryID
    })
  }

  return (
    <View style={styles.containertwo}>
      
      {categories.length !== 0 ? 
        <FlatList
        numColumns={2}
          data={categories}
          renderItem={( {item} ) => {
            return <TouchableOpacity
              onPress={() => handleCategory(item)}
            >
              <View style={styles.main}>
              <Text style={styles.baseText}>
                {item}  
              </Text>
              
              </View>

              
            
            </TouchableOpacity>
          }
          }
          keyExtractor={item => item.toString()}
        />
        :
        <ActivityIndicator size={"large"} color={"blue"}/>
      }
    </View>
  )
}

export default Categories;

const styles = StyleSheet.create({
  containertwo: {
    flex: 1,
    backgroundColor: "#7CA1B4",
    alignItems: "center",
    justifyContent: "center",
    flexDirection:'column-reverse',
  
 
   
  },
  main : {
  width: 150,
  backgroundColor: "#fff",
  height: 70,
  padding: 15,
  marginTop:15,
  marginRight:10,

  shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    borderRadius: 8,
  
    justifyContent:'center'
  

  },
 
  baseText: {
   
  
    textAlign:'center',
    textTransform:'capitalize',
    fontSize:12
    

  }

  
});