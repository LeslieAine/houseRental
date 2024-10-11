import React from 'react';
import '../public/styles/plugins.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../public/styles/style.css';
import Script from 'next/script';

export default function App({ Component, pageProps }) {
    return (
        <>
            <Component {...pageProps} />

            <Script src="/js/jquery-3.2.1.min.js" strategy="beforeInteractive" />
            <Script src="/js/plugins.min.js" strategy="beforeInteractive" />

            <Script src="/js/main.js" strategy="afterInteractive" />
        </>
    );
}



