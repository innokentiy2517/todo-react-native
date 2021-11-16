import React from 'react';
import {View, Text, StyleSheet} from "react-native";

export const TodoHeader = () => {
    return (
        <View style={styles.header}>
            <Text style={styles.text}>Список задач</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    header:{
        backgroundColor: '#85d44e',
        padding: 15,
        borderRadius: 6
    },
    text:{
        fontSize: 22,
        color: '#fff',
        fontWeight: "bold"
    }
})