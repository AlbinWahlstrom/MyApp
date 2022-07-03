import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';


const Task = (props) => {
    return (
        <View style={styles.item}>
            <View style={styles.itemLeft}>
            <TouchableOpacity style={styles.square}></TouchableOpacity>
                <Text style={styles.itemText}>{props.text}</Text>
            </View>
            <View style={styles.circular}></View>
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#55BCF1',
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    itemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    itemText: {
        maxWidth: '80%'
    },
    square: {
        width: 24,
        height: 24,
        backgroundColor: '#FFF',
        opacity: 0.4,
        borderRadius: 5,
        marginRight: 15,
    },
    circular: {
        width: 12,
        height: 12,
        borderColor: '#99BCF6',
        borderWidth: 2,
        borderRadius: 5,
        marginLeft: 15,
    },
});

export default Task;