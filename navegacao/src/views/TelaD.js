import React from 'react';
import TextoCentral from '../components/TextoCentral';
import { View, Button, Platform, StatusBar } from 'react-native';

export default ({ navigation }) => {
    let paddingTop = Platform.OS == 'android' ? StatusBar.currentHeight : 0;

    return (
        <View style={{flex: 1, paddingTop: paddingTop}}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Button 
                    title='Abrir'
                    onPress={() => navigation.openDrawer()}
                />
                
            </View>

            <View style={{flex: 1}}>
                <TextoCentral corFundo='#33fa72' corTexto='#000'>
                    TELA D
                </TextoCentral>
            </View>
        </View>
    );
}