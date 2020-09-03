import React from 'react';
import { View, StyleSheet } from "react-native";
import Primeiro from './components/Primeiro';

export default () => {
    return (
        <View style={style.App}>
            <Primeiro />
            <Primeiro />
            <Primeiro />
        </View>
    );
}

const style = StyleSheet.create({
    App: {
        backgroundColor: 'pink',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})