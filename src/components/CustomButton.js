import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';


const CustomButton = ({title, onPress, ...restProps}) => {
    return (
        <TouchableOpacity onPress={onPress} style={STYLE.button} {...restProps}>
            <Text style={STYLE.title}>{title}</Text>
        </TouchableOpacity>
    );
};


const STYLE = StyleSheet.create({
    button: {
        backgroundColor: 'black',
        padding: 16,
        marginVertical: 16,
        borderRadius: 42,
        width: '50%',
        alignSelf: 'centre'
    },
    title: {
        textAlign: 'centre',
        color: '#fff';
    },
});

export default CustomButton;