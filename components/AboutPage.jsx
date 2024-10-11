import React from 'react'

const AboutPage = () => {
    return (
        <main className="ms-container">
            <div className="ms-section__block">
                <div className="ms-page-title">
                    <h2 className="page-header">Casa Lulu Tulum</h2>
                    <p className="page-desc">Located in Aldea Zama in Tulum, Mexico, is a vibrant and eco-friendly community blending luxury living with nature, known for its lush landscapes, modern amenities, and proximity to stunning Caribbean beaches.</p>
                </div>
            </div>
            <div className="ms-section__block">
                <div id="about" className="row">
                    <div className="about__img col-md-12">
                        <p><img src="https://ik.imagekit.io/peregrinedesign/Website%20Assets/Casa%20Lulu%20Tulum/Main%20Home%20Page%20Photos/Main4.webp?updatedAt=1722566233866" alt="img" /></p>
                    </div>
                    <div className=" center-block">
                        <div className="about__info col-md-8">
                            <p className="about-title" style={{ color: '#df1f29' }}>welcome</p>
                            <p>Welcome to your home in Tulum. Casa Lulu is a beautifully
                                curated tropical sanctuary featuring 4 bedrooms and 3
                                stunning full bathrooms. The villa is located in Tulum&apos;s
                                premiere upscale neighborhood Aldea Zama, centrally
                                located between the town and the beach.
                                Casa Lulu delivers the compete luxury experience with all of
                                the amenities you should expect in a modern home, while
                                surrounding you in lush flora and fauna allowing you to
                                embrace all of the natural beauty that Tulum has to offer.
                            </p>

                            <p className="about-title" style={{ color: '#df1f29' }}>property details</p>
                            <div className="property-specs">
                                <ul>
                                    <li>Location: Aldea Zama</li>
                                    <li>Lot size: 405sqm</li>
                                    <li>Square footage: 347sqm</li>
                                    <li>Bedrooms: 4</li>
                                    <li>Bathrooms: 3</li>
                                    <li>Parking spaces: 2</li>
                                    <li>Swimming pool: 10sqm</li>
                                    <li>32 Solar panels</li>
                                    <li>Surveillance system</li>
                                    <li>Completely turn key</li>
                                    <li className="price">$1,499,000 USD</li>
                                </ul>
                            </div>

                            <p className="about-title" style={{ color: '#df1f29' }}>buying and renting casa lulu</p>

                            <p>Casa Lulu has been hosting and creating memories for the last six years.
                                Casa Lulu is completely turn key, sold with all its curated finishes.
                                Rental records are available on demand.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default AboutPage