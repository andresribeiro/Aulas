import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios'

export default function All() {

  const navigation = useNavigation()
  
  axios.get('https://api.ipify.org').then(resp => {

    const ip = resp.data;
    axios.get(`https://aulas-app-backend.herokuapp.com/${ip}`).then(response => {

      console.log(response.data);
    })
  })

  return(
    <View style={styles.container} >
    <MaterialIcons name="today" size={65} color="#7159C1" />
      <RectButton style={styles.day} onPress={() => {navigation.navigate('Segunda')}} >
        <Text style={styles.dayText}>Segunda</Text>
      </RectButton>
      <RectButton style={styles.day} onPress={() => {navigation.navigate('Terca')}} >
        <Text style={styles.dayText}>Terça</Text>
      </RectButton>
      <RectButton style={styles.day} onPress={() => {navigation.navigate('Quarta')}} >
        <Text style={styles.dayText}>Quarta</Text>
      </RectButton>
      <RectButton style={styles.day} onPress={() => {navigation.navigate('Quinta')}} >
        <Text style={styles.dayText}>Quinta</Text>
      </RectButton>
      <RectButton style={styles.day} onPress={() => {navigation.navigate('Sexta')}} >
        <Text style={styles.dayText}>Sexta</Text>
      </RectButton>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F0F0F5',
  },
  day: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 300,
    height: 45,
    backgroundColor: '#7159C1',
    borderRadius: 4,
    marginTop: 20,
  },
  dayText: {
    color: '#F0F0F5',
    fontSize: 17,
  },
})
