import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function All() {

  const navigation = useNavigation()

  return (
    <View style={styles.container} >
      <MaterialIcons name="today" size={65} color="#8e9abe" />
      <RectButton style={styles.day} onPress={() => { navigation.navigate('Segunda') }} >
        <Text style={styles.dayText}>Segunda</Text>
      </RectButton>
      <RectButton style={styles.day} onPress={() => { navigation.navigate('Terca') }} >
        <Text style={styles.dayText}>Terça</Text>
      </RectButton>
      <RectButton style={styles.day} onPress={() => { navigation.navigate('Quarta') }} >
        <Text style={styles.dayText}>Quarta</Text>
      </RectButton>
      <RectButton style={styles.day} onPress={() => { navigation.navigate('Quinta') }} >
        <Text style={styles.dayText}>Quinta</Text>
      </RectButton>
      <RectButton style={styles.day} onPress={() => { navigation.navigate('Sexta') }} >
        <Text style={styles.dayText}>Sexta</Text>
      </RectButton>
      <Text style={styles.week}>Horário referente à semana do dia 03/08 - 07/08</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#282A36',
  },
  day: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 300,
    height: 45,
    backgroundColor: '#6272a4',
    borderRadius: 4,
    marginTop: 20,
  },
  dayText: {
    color: '#F0F0F5',
    fontSize: 17,
  },
  week: {
    color: '#F0F0F5',
    marginTop: 20,
  },
})
