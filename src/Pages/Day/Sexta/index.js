import React from 'react'
import { View, Text, StyleSheet, ScrollView, SafeAreaView, Dimensions } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'

export default function Sexta() {
  return(
    <SafeAreaView>
      <ScrollView styles={styles.scrollView}>
        <View style={styles.container} >
          <Text style={styles.dayText}>Sexta-feira</Text>
          <RectButton style={styles.lesson}>
            <Text style={styles.lessonName}>Biologia</Text>
            <Text style={styles.lessonDate}>08:00 - 08:45</Text>
            <Text style={styles.lessonType}>Síncrona</Text>
          </RectButton>
          <RectButton style={styles.lesson}>
            <Text style={styles.lessonName}>Biologia</Text>
            <Text style={styles.lessonDate}>08:45 - 09:30</Text>
            <Text style={styles.lessonType}>Síncrona</Text>
          </RectButton>
          <RectButton style={styles.lesson}>
            <Text style={styles.lessonName}>Educação Física</Text>
            <Text style={styles.lessonDate}>09:50 - 10:35</Text>
            <Text style={styles.lessonType}>Síncrona</Text>
          </RectButton>
          <RectButton style={styles.lesson}>
            <Text style={styles.lessonName}>Educação Física</Text>
            <Text style={styles.lessonDate}>10:35 - 11:20</Text>
            <Text style={styles.lessonType}>Síncrona</Text>
          </RectButton>
          <RectButton style={styles.lesson}>
            <Text style={styles.lessonName}>Física</Text>
            <Text style={styles.lessonDate}>11:20 - 12:05</Text>
            <Text style={styles.lessonType}>Síncrona</Text>
          </RectButton>
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
  scrollView: {
    height: Dimensions.get('window').height,
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
