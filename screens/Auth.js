import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from 'react-native'
import React, { useState } from 'react'
import { auth } from '../Firebase/config';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

const Auth = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [loginView, setLoginView] = useState(false);

    const handleSignup = () => {
        if (email !== "" && password != ""){
            createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    // Signed in 
                    console.log(userCredential)
                    const user = userCredential.user;
                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log(errorCode, errorMessage);
                    // ..
                    setEmail("");
                    setPassword("");
                })
               
        }
    }

    const handleLogin = () => {
        if (email !== "" && password != ""){
            signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    console.log(user);
                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log(errorCode, errorMessage);
                    setEmail("");
                    setPassword("");
                })
            
        }
    }

    return (
        <View style={styles.container}>
           
            <Image
          style={{ width: 320, height: 220, marginBottom: 25, borderRadius:25, marginTop:60, }}
          source={require("../assets/cry.gif")}
        />
                <Text style={{ textAlign:'center', marginBottom:20, fontWeight:'bold' }}>{loginView ? 'Login' : 'Registro de usuario'}</Text>
                <TextInput
                    style={styles.input}
                    value={email}
                    onChangeText={setEmail}
                    placeholder="Ingrese email"
                ></TextInput>
                <TextInput
                    style={styles.input}
                    secureTextEntry={true}
                    value={password}
                    onChangeText={setPassword}
                    placeholder="Ingrese password"
                ></TextInput>
                {loginView ?
                    <TouchableOpacity onPress={handleLogin}>
                        <Text style={styles.btn}>Login</Text>
                    </TouchableOpacity>
                    :
                    <TouchableOpacity onPress={handleSignup}>
                        <Text style={styles.btn}>Sign up</Text>
                    </TouchableOpacity>
                }
                <View style={styles.container}>
                    <Text style={{ marginTop:20, marginBottom:20 }}>{loginView ? 'No tienes usuario?' : 'Ya tienes usuario?'}</Text>
                    <TouchableOpacity
                        onPress={() => setLoginView(!loginView)}>
                        <Text style={styles.btn2}>
                            {loginView ? 'Sign up' : 'Sign in'}
                        </Text>
                    </TouchableOpacity>
                </View>
            
        </View>
    )
}

export default Auth

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#A6EEE6FF',
        textAlign: 'center',
        marginTop:0
       
    },
    container2: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
      
       
    },
    marginer: {
        marginTop: 25,
        fontWeight:'bold'
        
    },
    btn: {
        padding: 15,
        margin: 10,
        backgroundColor:'#fafafa',
        borderRadius:15,
        width : 300,
        color: '#666',
        fontWeight:'bold', 
        textAlign:'center',
       
    },

    btn2: {
        padding: 15,
        margin: 10,
        backgroundColor:'#69C8ECFF',
        borderRadius:15,
        width : 300,
        color: 'white',
        fontWeight:'bold', 
        textAlign:'center',
       
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
    textAlign:'center',
    width: 300

    },
})