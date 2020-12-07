// Light Theme: Purple: #5865E0, Light Gray: #F5F6F8, White: #FFFFFF
// Dark Theme: Purple: #5865E0, Dark Blue: #131822, Light Blue: #19212D
import {createGlobalStyle} from "styled-components"

export const lightTheme = {
    body: "#fff",
    text: "#363537",
    background: "#F5F6F8"
}

export const darkTheme = {
    body: "#363537",
    text: "#fafafa",
    background: "#131822"
}

export const GlobalStyles = createGlobalStyle`
    *,
    *::after,
    *::before {
        box-sizzing: border-box
    }

    body {
        align-items: center;
        background: ${({theme}) => theme.body};
        color: ${({theme}) => theme.text};
        font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
        transition: all 0.50s linear;
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin: 0;
        padding: 0;
        transition: all 0.25s linear;
    }
`