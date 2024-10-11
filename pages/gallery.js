import Head from 'next/head'
import Footer from '../components/Footer';
import GalleryPage from '../components/GalleryPage';
import HeaderLight from '../components/HeaderLight';

const Gallery = () => {

    return (
        <>
            <Head>
                <title>Casa Lulu Tulum</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="shortcut icon" href="images/logo-light.svg" type="image/x-icon"></link>
            </Head>
            <div className="ms-main-container">
                <div className="ms-preloader"></div>
                {/* <Header /> */}
                <HeaderLight />
                <GalleryPage />
                <Footer />
            </div>

        </>
    )
}


export default Gallery