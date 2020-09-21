import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';

const Home = () => {

  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Escolha um dia para ver as aulas</Text>
      <View style={styles.daysContainer}>

        <RectButton style={styles.dayButton} onPress={() => { navigation.navigate('LessonsList', { dayParam: 'Segunda' }) }}>
          <Text style={styles.dayText}>Segunda</Text>
        </RectButton>

        <RectButton style={styles.dayButton} onPress={() => { navigation.navigate('LessonsList', { dayParam: 'Terça' }) }}>
          <Text style={styles.dayText}>Terça</Text>
        </RectButton >

        <RectButton style={styles.dayButton} onPress={() => { navigation.navigate('LessonsList', { dayParam: 'Quarta' }) }}>
          <Text style={styles.dayText}>Quarta</Text>
        </RectButton>

        <RectButton style={styles.dayButton} onPress={() => { navigation.navigate('LessonsList', { dayParam: 'Quinta' }) }}>
          <Text style={styles.dayText}>Quinta</Text>
        </RectButton>

        <RectButton style={styles.dayButton} onPress={() => { navigation.navigate('LessonsList', { dayParam: 'Sexta' }) }}>
          <Text style={styles.dayText}>Sexta</Text>
        </RectButton>

      </View>
      <View style={styles.footer}>
        <Text style={styles.week}>21/09 - 25/09</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#282a36',
    justifyContent: 'space-around',
  },
  title: {
    color: '#F0F0F5',
    fontSize: 25,
    maxWidth: 190,
    marginLeft: '5%',
  },
  daysContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: -100,
  },
  dayButton: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '30%',
    height: 60,
    backgroundColor: '#373949',
    borderRadius: 4,
    marginHorizontal: '1%',
    marginBottom: '3%',
  },
  dayText: {
    color: '#F0F0F5',
    fontSize: 16,
  },
  footer: {
    alignItems: 'center',
  },
  week: {
    color: '#F0F0F5',
    fontSize: 19,
  },
  download: {
    color: '#F0F0F5',
    fontSize: 19,
  },
})

export default Home
