import { Image } from '@skynexui/components';
import React from 'react';

export function Sticker(props) {
    return (
        <>
            <Image src={props.src} styleSheet={{
                maxWidth: "400px",
                width: "100%"
            }} />
        </>
    )
}