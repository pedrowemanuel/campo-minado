import React from "react";
import {
    View,
    StyleSheet,
    Text,
    TouchableOpacity,
    Modal,
} from 'react-native';

export default ({ onLevelSelected, isVisible, onCancel }) => {
    const ButtonLevel = ({ styles, level, label }) => {
        return (
            <TouchableOpacity
                style={styles}
                onPress={() => onLevelSelected(level)}
            >
            <Text style={styles.buttonLabel}>{label}</Text>
        </TouchableOpacity>
        )
    }

    return (
        <Modal
            onRequestClose={onCancel}
            visible={isVisible}
            animationType='slide'
            transparent={true}
        >
            <View style={styles.frame}>
                <View style={styles.container}>
                    <Text style={styles.title}>Selecione o Nível</Text>
                    <ButtonLevel
                        styles={[styles.button, styles.bgEasy]}
                        level={0.1}
                        label="Fácil"
                    />
                    <ButtonLevel
                        styles={[styles.button, styles.bgNormal]}
                        level={0.2}
                        label="Intermidiário"
                    />
                    <ButtonLevel
                        styles={[styles.button, styles.bgHard]}
                        level={0.3}
                        label="Difícil"
                    />
                </View>
            </View>
        </Modal>
    )
}


const styles = StyleSheet.create({
    frame: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
    },
    container: {
        backgroundColor: '#EEE',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 15,
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: "#999"
    },
    button: {
        marginTop: 10,
        padding: 5,
    },
    buttonLabel: {
        fontSize: 20,
        color: '#EEE',
        fontWeight: 'bold',
    },
    bgNormal: {
        backgroundColor: '#49b65d',
    },
    bgEasy: {
        backgroundColor: '#2765F7',
    },
    bgHard: {
        backgroundColor: '#E26337',
    },
});