import { Button, StyleSheet, Text, View,} from 'react-native'
import React from 'react'

export default function WelcomeScreen( {navigation}: any ) {
  return (
    <View style= {styles.container}>
      <Text style={{ fontSize:40}}>Welcome</Text>
      <Button title='Login' onPress={()=> navigation.navigate("Login") } />
      <Button title='Registro' onPress={ ()=> navigation.navigate("Registro")}/>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
