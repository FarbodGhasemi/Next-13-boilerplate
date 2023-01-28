import { Colors } from "./themes/Theme";

export const fontFamily = `'GeneralSans', sans-serif`;

export const mediaSizes = {
    desktopLarge: '1440px',
    desktopSmall: '1200px',
    tabletLarge: '992px',
    tabletSmall: '768px',
    mobileLarge: '576px',
    mobileSmall: '480px',
}

export type MediaSize = `${string}px`;

export const colors: Colors = {
    primary: "#F4B942",
    white: '#fff',
    orange: "#C44E31",
    darkGray: "46494C",
    lightGray: "F3F4F6",
}

export const containerPaddingLarge = '60px';
export const containerPaddingMedium = '40px';
export const containerPaddingSmall = '30px';
export const containerPaddingExtraSmall = '15px';