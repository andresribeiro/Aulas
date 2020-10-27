import React from 'react'
import { View, Text, StyleSheet, Image, FlatList } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';

import andresaImg from '../../assets/andresa.jpg'
import noneImg from '../../assets/none.png'
import gilzeImg from '../../assets/gilze.jpg'
import fernandaImg from '../../assets/fernanda.jpg'
import gusthavoImg from '../../assets/gusthavo.jpg'
import isabelImg from '../../assets/isabel.jpg'
import julieteImg from '../../assets/juliete.jpg'
import paulaImg from '../../assets/paula.jpg'
import helaineImg from '../../assets/helaine.jpg'
import renataImg from '../../assets/renata.jpg'

const segundaJson = [
  {
    name: "Fund. e Man. de Computadores",
    date: "08:00 - 08:45",
    type: "Síncrona",
    prof: "helaine",
  },
  {
    name: "Fund. e Man. de Computadores",
    date: "08:45 - 09:30",
    type: "Síncrona",
    prof: "helaine",
  },
  {
    name: "Língua Portuguesa",
    date: "09:50 - 10:35",
    type: "Síncrona",
    prof: "andresa",
  },
  {
    name: "Língua Portuguesa",
    date: "10:35 - 11:20",
    type: "Síncrona",
    prof: "andresa",
  },
  {
    name: "Filosofia",
    date: "11:20 - 12:05",
    type: "Assíncrona",
    prof: "joao uilson",
  },
  {
    name: "Química",
    date: "13:15 - 14:00",
    type: "Síncrona",
    prof: "gilze",
  },
  {
    name: "Química",
    date: "14:00 - 14:45",
    type: "Síncrona",
    prof: "gilze",
  },
  {
    name: "Web Design",
    date: "15:00 - 15:45",
    type: "Síncrona",
    prof: "helaine",
  },
  {
    name: "Web Design",
    date: "15:45 - 16:30",
    type: "Síncrona",
    prof: "helaine",
  },
]

const tercaJson = [
  {
    name: "Geografia",
    date: "08:00 - 08:45",
    type: "Síncrona",
    prof: "paula",
  },
  {
    name: "Geografia",
    date: "08:45 - 09:30",
    type: "Síncrona",
    prof: "paula",
  },
  {
    name: "Língua Portuguesa",
    date: "09:50 - 10:35",
    type: "Assíncrona",
    prof: "andresa",
  },
  {
    name: "Matemática",
    date: "10:35 - 11:20",
    type: "Síncrona",
    prof: "renata",
  },
  {
    name: "Matemática",
    date: "11:20 - 12:05",
    type: "Síncrona",
    prof: "renata",
  },
  {
    name: "Lógica de Programação",
    date: "13:15 - 14:00",
    type: "Síncrona",
    prof: "juliete",
  },
  {
    name: "Lógica de Programação",
    date: "14:00 - 14:45",
    type: "Assíncrona",
    prof: "juliete",
  },
  {
    name: "Informática Básica",
    date: "15:00 - 15:45",
    type: "Assíncrona",
    prof: "helaine",
  },
]

const quartaJson = [
  {
    name: "Física",
    date: "08:00 - 08:45",
    type: "Síncrona",
    prof: "isabel",
  },
  {
    name: "Física",
    date: "08:45 - 09:30",
    type: "Síncrona",
    prof: "isabel",
  },
  {
    name: "Química",
    date: "09:50 - 10:35",
    type: "Síncrona",
    prof: "gilze",
  },
  {
    name: "Língua Inglesa",
    date: "10:35 - 11:20",
    type: "Síncrona",
    prof: "fernanda",
  },
  {
    name: "Língua Inglesa",
    date: "11:20 - 12:05",
    type: "Síncrona",
    prof: "fernanda",
  },
  {
    name: "Matemática",
    date: "13:15 - 14:00",
    type: "Assíncrona",
    prof: "renata",
  },
  {
    name: "Matemática",
    date: "14:00 - 14:45",
    type: "Assíncrona",
    prof: "renata",
  },
]

const quintaJson = [
  {
    name: "Língua Portuguesa",
    date: "08:00 - 08:45",
    type: "Síncrona",
    prof: "andresa",
  },
  {
    name: "Língua Portuguesa",
    date: "08:45 - 09:30",
    type: "Síncrona",
    prof: "andresa",
  },
  {
    name: "Sociologia",
    date: "09:50 - 10:35",
    type: "Assíncrona",
    prof: "joao uilson",
  },
  {
    name: "Fund. e Man. de Computadores",
    date: "10:35 - 11:20",
    type: "Assíncrona",
    prof: "helaine",
  },
  {
    name: "Fund. e Man. de Computadores",
    date: "11:20 - 12:05",
    type: "Assíncrona",
    prof: "helaine",
  },
  {
    name: "História",
    date: "13:15 - 14:00",
    type: "Síncrona",
    prof: "paula",
  },
  {
    name: "História",
    date: "14:00 - 14:45",
    type: "Síncrona",
    prof: "paula",
  },
  {
    name: "Biologia",
    date: "15:00 - 15:45",
    type: "Assíncrona",
    prof: "martinez",
  },
]

const sextaJson = [
  {
    name: "Biologia",
    date: "08:00 - 08:45",
    type: "Síncrona",
    prof: "martinez",
  },
  {
    name: "Biologia",
    date: "08:45 - 09:30",
    type: "Síncrona",
    prof: "martinez",
  },
  {
    name: "Educação Física",
    date: "09:50 - 10:35",
    type: "Assíncrona",
    prof: "gusthavo",
  },
  {
    name: "Educação Física",
    date: "10:35 - 11:20",
    type: "Síncrona",
    prof: "gusthavo",
  },
  {
    name: "Física",
    date: "11:20 - 12:05",
    type: "Síncrona",
    prof: "isabel",
  },
]

const LessonsList = () => {

  const navigation = useNavigation()
  const route = useRoute()
  const { dayParam } = route.params

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <AntDesign style={styles.backIcon} name="back" size={24} color="#FFF" onPress={() => { navigation.goBack() }} />
        <Text style={styles.headerText}>{dayParam}</Text>
      </View>
      <View style={styles.flatView}>
        <FlatList
          data={
            dayParam == 'Segunda'
              ? segundaJson : dayParam == 'Terça'
                ? tercaJson : dayParam == 'Quarta'
                  ? quartaJson : dayParam == 'Quinta'
                    ? quintaJson : sextaJson
          }
          keyExtractor={item => item.date}
          renderItem={({ item }) => <View style={styles.lesson}>
            <Image source={
              item.prof == 'helaine'
                ? helaineImg : item.prof == 'andresa'
                  ? andresaImg : item.prof == 'gilze'
                    ? gilzeImg : item.prof == 'fernanda'
                      ? fernandaImg : item.prof == 'gusthavo'
                        ? gusthavoImg : item.prof == 'isabel'
                          ? isabelImg : item.prof == 'juliete'
                            ? julieteImg : item.prof == 'paula'
                              ? paulaImg : item.prof == 'renata'
                                ? renataImg : noneImg
            } style={styles.img} />
            <View style={styles.textView}>
              <Text style={styles.lessonName}>{item.name}</Text>
              <Text style={styles.lessonType}>{item.type}</Text>
              <Text style={styles.lessonDate}>{item.date}</Text>
            </View>
          </View>
          }
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#282a36',
  },
  header: {
    backgroundColor: '#373949',
    width: '100%',
    height: 220,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -70,
    marginBottom: 70,
  },
  backIcon: {
    alignSelf: 'flex-start',
    marginVertical: 30,
    marginLeft: 20,
  },
  headerText: {
    color: '#F0F0F5',
    fontSize: 21,
  },
  flatView: {
    marginTop: -100,
    marginBottom: 20,
  },
  lesson: {
    flexDirection: 'row',
    backgroundColor: '#44475a',
    height: 90,
    marginBottom: 6,
    marginHorizontal: '3%',
    paddingTop: 10,
    borderRadius: 5,
  },
  img: {
    width: 45,
    height: 45,
    resizeMode: 'contain',
    borderRadius: 22,
    marginTop: '1%',
    marginLeft: '3%',
  },
  textView: {
    flex: 1,
    marginRight: '1.6%',
    alignItems: 'center',
  },
  lessonName: {
    color: '#F0F0F5',
    fontSize: 18,
  },
  lessonType: {
    color: '#F0F0F5',
    alignSelf: 'center',
    fontSize: 17,
  },
  lessonDate: {
    color: '#F0F0F5',
    fontSize: 17,
  },
});

export default LessonsList
