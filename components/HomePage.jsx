import React from 'react'
import Link from 'next/link'

const HomePage = () => {
  return (
    <main className="ms-container home-slider">
      <div className="swiper-container">
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <div className="slide-inner" data-swiper-parallax="45%">
              <div className="overlay"></div>
              <div 
                className="slide-inner--image" 
                style={{ backgroundImage: "url('https://ik.imagekit.io/peregrinedesign/Website%20Assets/Casa%20Lulu%20Tulum/Main%20Home%20Page%20Photos/Main2.webp?updatedAt=1722566233924')" }}
              ></div>
              <div className="slide-inner--info">
                <h1>Casa Lulu<br />tulum</h1>
                <Link href="/gallery" data-type="page-transition" className="ms-btn--slider">Location: Aldea Zama</Link>
              </div>
            </div>
          </div>
          <div className="swiper-slide">
            <div className="slide-inner" data-swiper-parallax="45%">
              <div className="overlay"></div>
              <div 
                className="slide-inner--image" 
                style={{ backgroundImage: "url('https://ik.imagekit.io/peregrinedesign/Website%20Assets/Casa%20Lulu%20Tulum/Main%20Home%20Page%20Photos/Main3.webp?updatedAt=1722566233999')" }}
              ></div>
              <div className="slide-inner--info">
                <h1>a luxury<br />villa</h1>
                <Link href="/gallery" data-type="page-transition" className="ms-btn--slider">Location: Aldea Zama</Link>
              </div>
            </div>
          </div>
          <div className="swiper-slide">
            <div className="slide-inner" data-swiper-parallax="45%">
              <div className="overlay"></div>
              <div 
                className="slide-inner--image" 
                style={{ backgroundImage: "url('https://ik.imagekit.io/peregrinedesign/Website%20Assets/Casa%20Lulu%20Tulum/Main%20Home%20Page%20Photos/Main2.webp?updatedAt=1722566233924')" }}
              ></div>
              <div className="slide-inner--info">
                <h1>relaxation<br />awaits</h1>
                <Link href="/gallery" data-type="page-transition" className="ms-btn--slider">Location: Aldea Zama</Link>
              </div>
            </div>
          </div>
          <div className="swiper-slide">
            <div className="slide-inner" data-swiper-parallax="45%">
              <div className="overlay"></div>
              <div 
                className="slide-inner--image" 
                style={{ backgroundImage: "url('https://ik.imagekit.io/peregrinedesign/Website%20Assets/Casa%20Lulu%20Tulum/Main%20Home%20Page%20Photos/Main3.webp?updatedAt=1722566233999')" }}
              ></div>
              <div className="slide-inner--info">
                <h1>casa lulu<br />tulum</h1>
                <Link href="/gallery" data-type="page-transition" className="ms-btn--slider">Location: Aldea Zama</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="swiper-nav-btn">
          <div className="swiper-button-prev swiper-button-white">prev</div>
          <div className="swiper-button-next swiper-button-white">next</div>
        </div>
        <div className="expanded-timeline">
          <div className="expanded-timeline__counter"><span></span><span></span></div>
          <div className="swiper-pagination"></div>
          <div className="scroll-message">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16.5 15.98" className="scroll-svg"><title>Asset 1</title><g>
            <g data-name="Layer 1"><polygon fill="#fff" points="0 4.64 0.71 5.34 3.85 2.2 3.85 15.98 4.85 15.98 4.85 2.2 8 5.34 8.71 4.64 4.35 0.29 0 4.64"></polygon><polygon fill="#fff" points="11.65 0 11.65 13.79 8.5 10.64 7.79 11.35 12.15 15.7 16.5 11.35 15.79 10.64 12.65 13.79 12.65 0 11.65 0"></polygon></g></g></svg>Scroll
          </div>
        </div>
      </div>
    </main>
  )
}

export default HomePage
