import Head from 'next/head'
import Footer from '../components/Footer';
import HeaderLight from '../components/HeaderLight';
import AboutPage from '../components/AboutPage';

const About = () => {

    return (
        <>
            <Head>
                <title>Casa Lulu Tulum</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="shortcut icon" href="images/logo-light.svg" type="image/x-icon"></link>
            </Head>
            <div className="ms-main-container">
                <div className="ms-preloader"></div>
                <HeaderLight />
                <AboutPage />
                <Footer />
            </div>

        </>
    )
}


export default About;