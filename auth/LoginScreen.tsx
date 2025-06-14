import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { TextInput } from 'react-native-gesture-handler'



export default function LoginScreen({ navigation }: any) {

  const [correo, setcorreo] = useState("")
  const [contrasenia, setcontrasenia] = useState("")

  function login() {
    
    

  }



  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 40 }}>Login</Text>
      <TextInput
        placeholder='Ingresar email'
        style={styles.input}
        onChangeText={(texto) => setcorreo(texto)}
        value={correo}
      />

      <TextInput
        placeholder='Ingresar contraseña'
        style={styles.input}
        onChangeText={(texto) => setcontrasenia(texto)}
        value={contrasenia}
      />

      <Button title='Login' onPress={() => login()} />

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6666',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    fontSize: 30,
    backgroundColor: 'white',
    width: "80%",
    margin: 10,
    borderRadius: 10

  }
});
