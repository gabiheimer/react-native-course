import React from 'react';
import TextoCentral from '../components/TextoCentral';
import PassoStack from '../components/PassoStack';

export default ({navigation}) => {
    return (
        <PassoStack avancar='TelaB' navigation={navigation}>
            <TextoCentral corFundo='#e53935'>
                TELA A
            </TextoCentral>
        </PassoStack>
    );
}