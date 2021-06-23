import {ThemeProvider, 
        theme, 
        CSSReset, 
        Heading, 
        Link,
        Text,
        Code,
        Flex} from "@chakra-ui/react";
import React from 'react'

import '../styles/globals.css'

function Donate ( {Component, pageProps }) {
    return (
        <ThemeProvider theme = {theme}>
            <CSSReset/>
            <Component {...pageProps} />
        </ThemeProvider>
    )
};

export default function Donate()
{
    return (
        
    )
}