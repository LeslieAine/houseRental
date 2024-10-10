import Head from 'next/head'
import Header from '../components/Header';
import HomePage from '../components/HomePage';

const Home = () => {

    return (
        <>
            <Head>
                <title>Casa Lulu Tulum</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="shortcut icon" href="images/logo-light.svg" type="image/x-icon"></link>
            </Head>
            <div className="ms-main-container">
                <div className="ms-preloader"></div>
                <Header />
                <HomePage />
            </div>

        </>
    )
}


export default Home;