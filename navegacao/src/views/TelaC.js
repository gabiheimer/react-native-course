import React from 'react';
import TextoCentral from '../components/TextoCentral';

export default (props) => {
    const num = props.route ? props.route.params.numero : 0;
    return (
        <TextoCentral corFundo='#9932cd'>
            TELA C - {props.route.params.numero}
        </TextoCentral>
    );
}