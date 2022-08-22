import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

import Flag from "./Flag";

export default ({ flagsLeft, onFlagPress, onNewGame }) => {
    return (
        <View style={styles.container}>
            <View style={styles.flagContainer}>
                <TouchableOpacity
                    onPress={onFlagPress}
                    style={styles.flagButton}
                >
                    <Flag bigger style={styles.flag} />
                    <Text style={styles.flagsLeft}>= {flagsLeft}</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity
                style={styles.button}
                onPress={onNewGame}
            >
                <Text style={styles.buttonLabel}>Novo Jogo</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#EEE',
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingTop: 20,
        paddingHorizontal: 20,
    },
    flagContainer: {
        flexDirection: 'row',
    },
    flagButton: {
        marginTop: 10,
        minWidth: 100,
        justifyContent: 'space-around',
    },
    flagsLeft: {
        fontSize: 30,
        fontWeight: 'bold',
        paddingTop: 0,
        marginLeft: 35,
        color: '#999',
    },
    button: {
        backgroundColor: '#2cb1cc',
        padding: 10,
        justifyContent: 'center',
        borderRadius: 3,
    },
    buttonLabel: {
        fontSize: 20,
        color: '#DDD',
        fontWeight: 'bold'
    }
});