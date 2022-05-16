import { ActivityIndicator, FlatList, Modal, StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View, Image } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { Shop } from '../Context/ShopProvider'
import CartItem from '../Components/CartItem'
import { addDoc, collection, doc, getDoc, writeBatch } from 'firebase/firestore'
import { db } from '../Firebase/config'

const Cart = () => {

  const [total, setTotal] = useState(0);
  const [modalVisible, setModalVisible] = useState(false)
  const [nombre, setNombre] = useState("")
  const [direccion, setDireccion] = useState("")
  const [checkoutText, setCheckoutText] = useState("")
  const [loadingCheckout, setLoadingCheckout] = useState(false)

  const value = useContext(Shop);
  
  const fnRender = ({ item }) => {
    return (
      <CartItem
        item={item}
        handleRemove={value.removeItem}
      />
    )
  }

  useEffect(() => {
    setTotal(value.sumaTotal())
  }, [value.cart])

  const handlePurchase = () => {
    // console.log("Se realizo la compra");
    // console.log(nombre, direccion);
    if (nombre === "" || direccion === "") {
      return
    }
    const orderGenerada = {
      buyer: {
        nombre: nombre,
        direccion: direccion
      },
      usuario:value.usuario,
      items: value.cart
      ,
      total: total,
      createdAt: new Date().toLocaleString()
    }

    //Primer paso: abrir un batch
    const batch = writeBatch(db)//ver en qué level colocarlo

    //Array auxiliar que me define si hay productos fuera de stock
    const outOfStock = []

    //Chequear el stock del producto en nuestra db y restarlo a la cantidad, si corresponde
    value.cart.forEach((prod) => {
      setLoadingCheckout(true)
      getDoc(doc(db, 'productos', prod.id))
        .then((documentSnapshot) => {
          if (documentSnapshot.data().stock >= prod.quantity) {
            batch.update(doc(db, 'productos', documentSnapshot.id), {
              stock: documentSnapshot.data().stock - prod.quantity
            })
          } else {
            outOfStock.push({ id: documentSnapshot.id, ...documentSnapshot.data() })
          }
          console.log(outOfStock);

          if (outOfStock.length === 0) {
            addDoc(collection(db, 'orders'), orderGenerada).then(({ id }) => {
              batch.commit().then(() => {
                setCheckoutText(`Se genero la order con id:  + ${id}`)
              })
            }).catch((err) => {
              console.log(`Error: ${err.message}`);
              setCheckoutText(`Error: ${err.message}`)
            })
          } else {
            let mensaje = ''
            for (const producto of outOfStock) {
              mensaje += `${producto.name} `
            }
            setCheckoutText(`Productos fuera de stock: ${mensaje}`)
          }

          setLoadingCheckout(false)
        })
    })
  }

  return (
    <View style={styles.container}>
      {value.cart.length !== 0 ?
        <>
     
          <FlatList
            data={value.cart}
            keyExtractor={item => item.id}
            renderItem={fnRender}
          >
          </FlatList>
          <View>
            <Text style={styles.tot}>Total: {(total.toFixed(1))}</Text>
            <TouchableOpacity onPress={() => setModalVisible(true)}>
              <Text style={styles.buttoner}>Purchase</Text>
            </TouchableOpacity>
          </View>
        </>
        :
        <>
        <Image
          style={{ width: 300, height: 150, marginBottom: 15, borderRadius:15 }}
          source={require("../assets/empty.gif")}
        />
        <Text>No hay compras</Text>
        </>
      }
      {/* Este modal debería ser un componente aparte */}
      <Modal
        animationType='slide'
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false)
        }}
      >
        <View style={styles.modalParent}>
          <View style={styles.modalContainer}>
            <TouchableOpacity onPress={() => setModalVisible(false)}>
              <Text style={styles.close} >X</Text>
            </TouchableOpacity>
            <TextInput  style={styles.input} 
              placeholder='Ingresar nombre'
              onChangeText={setNombre}
              value={nombre}
            />
            <TextInput style={styles.input} 
              placeholder='Ingresar direccion'
              onChangeText={setDireccion}
              value={direccion}
            />
            <Text style={styles.marginer} >¿Quieres confirmar la compra?</Text>
            <TouchableOpacity  onPress={() => setModalVisible(false)}>
              <Text style={styles.btn} >Cancelar</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handlePurchase}>
              <Text style={styles.buttoner} >Confirmar</Text>
            </TouchableOpacity>
            {loadingCheckout && <ActivityIndicator size={'small'} color={"green"}/>}
            {!loadingCheckout && <Text>{checkoutText}</Text>}
          </View>
        </View>
      </Modal>
    </View>
  )
}

export default Cart

const styles = StyleSheet.create({
  modalParent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  modalContainer: {
    height: 500,
    width: 320,
    backgroundColor: '#B7E4F9FF',
    padding: 20 ,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20
  },
  btn: {
    padding: 15,

    backgroundColor:'#FB6467FF',
    borderRadius:15,
    width : 200,
    textAlign:'center',
    color: 'white',
    fontWeight:'bold',
    textAlign:'center',
    marginTop:20
},
  tot:{
    fontWeight:'bold',
    fontSize:20

  },
  close:{
    fontWeight:'bold',
    fontSize:20,
    textAlign:'right',
    width: 250,

  },

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#A6EEE6FF',
    textAlign: 'center'
  
  }, 
  buttoner: {
    backgroundColor:'#fcfcfc',
    padding: 15,
    marginTop:50,
    width: 200,
    textAlign:'center',
    bottom: 20,
    position: 'relative',
    borderRadius:15
  },
  input: {
    display: 'flex',
justifyContent: 'flex-start',
alignItems: 'center',
flexDirection: 'row',
padding: 15,
backgroundColor:'#FAFD7CFF',
borderRadius: 15,
color: 'black',
margin: 10,
width: 200

},
marginer: {
  marginTop:20
}
})