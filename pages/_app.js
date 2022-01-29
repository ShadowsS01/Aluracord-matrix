import Head from 'next/head';
import appConfig from '../config.json';

function GlobalStyle() {
    return (
        <style global jsx>{`
            @import url('https://fonts.googleapis.com/css2?family=Outfit&display=swap');

            * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            list-style: none;
            }

            body {
                font-family: 'Outfit', sans-serif;
            }

            li {
                overflow-wrap: break-word;
            }

            /* App fit Height */ 
            html, body, #__next {
            min-height: 100vh;
            display: flex;
            flex: 1;
            }
            #__next {
            flex: 1;
            }
            #__next > * {
            flex: 1;
            }
            /* ./App fit Height */
            
            ::-webkit-scrollbar-track {
	            background-color: #0003;
                border-radius: 3px;
            }
            ::-webkit-scrollbar {
                width: 8px;
                background-color: transparent;
            }
            ::-webkit-scrollbar-thumb {
                background-color: #0004;
                border-radius: 3px;
            }
        `}</style>
    );
}

export default function CustomApp({ Component, pageProps }) {
    // console.log('Roda em todas as páginas!');
    return (
        <>
            <GlobalStyle />
                <Head>
                    <title>{appConfig.name}</title>
                    <link rel='icon' href='https://github.com/ShadowsS01.png' />
                </Head>
            <Component {...pageProps} />
        </>
    );
}