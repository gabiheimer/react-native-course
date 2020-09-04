import React from 'react';
import { View, Text } from 'react-native';

export default ({children, corFundo, corTexto}) => {
    return (
        <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: corFundo || '#000'
        }}>
            <Text style={{fontSize: 50, color: corTexto || '#FFF'}}>
                {children}
            </Text>
        </View>
    );
}