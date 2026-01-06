import Head from "next/head";
import HeaderLight from "../components/HeaderLight";
import Footer from "../components/Footer";
import AboutSection from "../components/AboutSection";

export async function getStaticProps() {
  const res = await fetch(
    `https://cdn.builder.io/api/v3/content/page?apiKey=${process.env.NEXT_PUBLIC_BUILDER_API_KEY}&userAttributes.urlPath=/about`
  );

  const json = await res.json();

  return {
    props: {
      page: json?.results?.[0] || null,
    },
    revalidate: 60,
  };
}

export default function About({ page }) {
  const data = page?.data || {};

  return (
    <>
      <Head>
        <title>{data.title || "Casa Lulu Tulum"}</title>
      </Head>

      <HeaderLight />

      <AboutSection {...data} />

      <Footer />
    </>
  );
}




// import Head from 'next/head'
// import Footer from '../components/Footer';
// import HeaderLight from '../components/HeaderLight';
// import AboutPage from '../components/AboutSection';

// const About = () => {

//     return (
//         <>
//             <Head>
//                 <title>Casa Lulu Tulum</title>
//                 <meta name="viewport" content="width=device-width, initial-scale=1" />
//                 <link rel="shortcut icon" href="images/logo-light.svg" type="image/x-icon"></link>
//             </Head>
//             <div className="ms-main-container">
//                 <div className="ms-preloader"></div>
//                 <HeaderLight />
//                 <AboutPage />
//                 <Footer />
//             </div>

//         </>
//     )
// }


// export default About;