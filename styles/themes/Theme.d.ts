declare module 'styled-components' {
    export interface DefaultTheme extends Theme { }
}

export default interface Theme {
    colors: (Colors),
}

type Colors = {
    primary: string
    white: string
    orange: string
    darkGray: string
    lightGray: string
}

type Color = string
