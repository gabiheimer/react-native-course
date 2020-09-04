import React from 'react';
import { View, Button } from 'react-native';
import { floor } from 'react-native-reanimated';

export default ({children, avancar, navigation, voltar}) => {
    return (
        <View style={{flex: 1}}>
            <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                {voltar &&
                    <Button 
                        title="Voltar"
                        onPress={() => {
                            navigation.goBack()
                        }}
                    />
                }

                {avancar &&
                    <Button 
                        title="Avançar"
                        onPress={() => {
                            // navigation.navigate(avancar)
                            navigation.push(
                                avancar,
                                {
                                    numero: parseInt(Math.random() * 100)
                                }
                            )
                        }}
                    />
                }
            </View>
            <View style={{flex: 1}}>
                {children}
            </View>
        </View>
    );
}