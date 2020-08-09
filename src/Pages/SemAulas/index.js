import React from 'react'
import { StyleSheet, View, Text } from 'react-native'


const SemAulas = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Eae gado</Text>
            <Text style={styles.subTitle}>Tem aula essa semana não kkkkkk</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'start',
        backgroundColor: '#282A36',
        marginTop: 100,
        marginLeft: 25,
    },
    title: {
        color: '#F0F0F5',
        fontSize: 40,
    },
    subTitle: {
        color: '#F0F0F5',
        fontSize: 20,
        marginTop: 15,
    }
})

export default SemAulas