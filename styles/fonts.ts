import { css } from 'styled-components'

export const fonts = css`
@font-face {
    font-family: "GeneralSans";
    src: url("/fonts/GeneralSans-Regular.woff2") format("woff2"), url("/fonts/GeneralSans-Regular.woff") format("woff"),
        url("/fonts/GeneralSans-Regular.ttf") format("truetype");
    font-weight: 400;
    font-display: swap;
    font-style: normal;
}
@font-face {
    font-family: "GeneralSans";
    src: url("/fonts/GeneralSans-Medium.woff2") format("woff2"), url("/fonts/GeneralSans-Medium.woff") format("woff"),
        url("/fonts/GeneralSans-Medium.ttf") format("truetype");
    font-weight: 500;
    font-display: swap;
    font-style: normal;
}
@font-face {
    font-family: "GeneralSans";
    src: url("/fonts/GeneralSans-Semibold.woff2") format("woff2"),
        url("/fonts/GeneralSans-Semibold.woff") format("woff"),
        url("/fonts/GeneralSans-Semibold.ttf") format("truetype");
    font-weight: 600;
    font-display: swap;
    font-style: normal;
}
@font-face {
    font-family: "GeneralSans";
    src: url("/fonts/GeneralSans-Bold.woff2") format("woff2"), url("/fonts/GeneralSans-Bold.woff") format("woff"),
        url("/fonts/GeneralSans-Bold.ttf") format("truetype");
    font-weight: 700;
    font-display: swap;
    font-style: normal;
}
`