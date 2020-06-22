import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function All() {

  const navigation = useNavigation()

  return(
    <View style={styles.container} >
    <MaterialIcons name="today" size={65} color="#7159C1" />
      <RectButton style={styles.day} onPress={() => {navigation.navigate('Segunda')}} >
        <Text style={styles.dayText}>Segunda-feira</Text>
      </RectButton>
      <RectButton style={styles.day} onPress={() => {navigation.navigate('Terca')}} >
        <Text style={styles.dayText}>Terça-feira</Text>
      </RectButton>
      <RectButton style={styles.day} onPress={() => {navigation.navigate('Quarta')}} >
        <Text style={styles.dayText}>Quarta-feira</Text>
      </RectButton>
      <RectButton style={styles.day} onPress={() => {navigation.navigate('Quinta')}} >
        <Text style={styles.dayText}>Quinta-feira</Text>
      </RectButton>
      <RectButton style={styles.day} onPress={() => {navigation.navigate('Sexta')}} >
        <Text style={styles.dayText}>Sexta-feira</Text>
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
