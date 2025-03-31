import { createGlobalStyle } from 'styled-components'

const GlobalFontStyle = createGlobalStyle`
    @font-face {
        font-family: 'Pretendard';
        src: url('./woff2-subset/Pretendard-Black.subset.woff2') format('font-woff2');
        font-weight: 900;
        font-style: normal;
    }

    @font-face {
        font-family: 'Pretendard';
        src: url('./woff2-subset/Pretendard-ExtraBold.subset.woff2') format('font-woff2');
        font-weight: 800;
        font-style: normal;
    }

    @font-face {
        font-family: 'Pretendard';
        src: url('./woff2-subset/Pretendard-Bold.subset.woff2') format('font-woff2');
        font-weight: 700;
        font-style: normal;
    }

    @font-face {
        font-family: 'Pretendard';
        src: url('./woff2-subset/Pretendard-SemiBold.subset.woff2') format('font-woff2');
        font-weight: 600;
        font-style: normal;
    }

    @font-face {
        font-family: 'Pretendard';
        src: url('./woff2-subset/Pretendard-Medium.subset.woff2') format('font-woff2');
        font-weight: 500;
        font-style: normal;
    }

    @font-face {
        font-family: 'Pretendard';
        src: url('./woff2-subset/Pretendard-Regular.subset.woff2') format('font-woff2');
        font-weight: 400;
        font-style: normal;
    }

    @font-face {
        font-family: 'Pretendard';
        src: url('./woff2-subset/Pretendard-Light.subset.woff2') format('font-woff2');
        font-weight: 300;
        font-style: normal;
    }

    @font-face {
        font-family: 'Pretendard';
        src: url('./woff2-subset/Pretendard-ExtraLight.subset.woff2') format('font-woff2');
        font-weight: 200;
        font-style: normal;
    }

    @font-face {
        font-family: 'Pretendard';
        src: url('./woff2-subset/Pretendard-Thin.subset.woff2') format('font-woff2');
        font-weight: 100;
        font-style: normal;
    }

    body, * {
        font-family: Pretendard, sans-serif;
    }
`

export default GlobalFontStyle
