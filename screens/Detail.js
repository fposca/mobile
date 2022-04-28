import {View, Text, StyleSheet} from 'react-native';

const Detail = ({navigation, route}) => {

  const {item} = route.params;

  return (
      <View style={styles.containertwo}> 
      <Text>{item.title}</Text>
         <Text style={styles.baseText}  >{item.description}</Text>
           <img height={100} width={'auto'} src={item.image} />
          
      </View>
  )
}

export default Detail;

const styles = StyleSheet.create({
  containertwo: {
    flex: 1,
    backgroundColor: "#7CA1B4",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: 10,
   
    
   
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
    marginTop:15,
    textAlign: 'center',
    textTransform: 'capitalize',
    marginBottom:15,
    fontSize: 10,
    fontStyle:'Italic'

  }

  
});