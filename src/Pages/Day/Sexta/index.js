import React from 'react'
import { View, Text, StyleSheet, ScrollView, SafeAreaView, FlatList } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'

export default function Sexta() {

  const lessonsJson = [
    {
      name: "Biologia",
      date: "08:00 - 08:45",
      type: "Assíncrona",
    },
    {
      name: "Biologia",
      date: "08:45 - 09:30",
      type: "Assíncrona",
    },
    {
      name: "Educação Física",
      date: "09:50 - 10:35",
      type: "Assíncrona",
    },
    {
      name: "Educação Física",
      date: "10:35 - 11:20",
      type: "Assíncrona",
    },
    {
      name: "Física",
      date: "11:20 - 12:05",
      type: "Síncrona",
    },
  ]

  return(
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container} >
          <Text style={styles.dayText}>Sexta-feira</Text>
          <FlatList 
            data={lessonsJson}
            keyExtractor={item => item.id}
            renderItem={( {item}) => <RectButton style={styles.lesson}>
              <Text style={styles.lessonName}>{item.name}</Text>
              <Text style={styles.lessonDate}>{item.date}</Text>
              <Text style={styles.lessonType}>{item.type}</Text>
            </RectButton>
            }
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F0F0F5',
    marginTop: 25,
    marginBottom: 20,
  },
  dayText: {
    color: '#7159C1',
    fontSize: 25,
    marginTop: 20,
    marginBottom: 10,
  },
  lesson: {
    backgroundColor: '#7159C1',
    width: 310,
    height: 73,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    marginTop: 10,
  },
  lessonName: {
    color: '#F0F0F5',
    fontSize: 18,
  },
  lessonDate: {
    color: '#F0F0F5',
    fontSize: 17,
  },
  lessonType: {
    color: '#F0F0F5',
    fontSize: 17,
  },
})
