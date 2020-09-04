import React from 'react';
import { Button } from 'react-native';

export default () => {
    function executar() {
        console.warn("OPAAA");
    }

    return (
        <Button
            title="Executarrr"
            onPress={executar}
        />
    );
}