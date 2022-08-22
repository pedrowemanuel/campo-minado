import React from "react";
import { View, StyleSheet } from 'react-native';

export default ({bigger}) => {
    return (
        <View style={styles.container}>
            <View style={[styles.flagpole, bigger ? styles.flagpoleBigger : null]}></View>
            <View style={[styles.flag, bigger ? styles.flagBigger : null]}></View>
            <View style={[styles.smallerBase, bigger ? styles.smallerBaseBigger : null]}></View>
            <View style={[styles.largerBase, bigger ? styles.largerBaseBigger : null]}></View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        marginTop: 2
    },
    flagpole: {
        position: "absolute",
        height: 14,
        width: 2,
        backgroundColor: '#222',
        marginLeft: 9,
    },
    flag: {
        position: "absolute",
        height: 5,
        width: 6,
        backgroundColor: "#F22",
        marginLeft: 3,
    },
    smallerBase: {
        position: "absolute",
        height: 2,
        width: 6,
        backgroundColor: "#222",
        marginLeft: 7,
        marginTop: 10,
    },
    largerBase: {
        position: "absolute",
        height: 2,
        width: 10,
        backgroundColor: "#222",
        marginLeft: 5,
        marginTop: 12,
    },
    flagpoleBigger: {
        height: 28,
        width: 4,
        marginLeft: 16,
    },
    flagBigger: {
        height: 10,
        width: 14,
    },
    smallerBaseBigger: {
        height: 4,
        width: 12,
        marginLeft: 12,
        marginTop: 20,
    },
    largerBaseBigger: {
        height: 4,
        width: 20,
        marginLeft: 8,
        marginTop: 24,
    }
})