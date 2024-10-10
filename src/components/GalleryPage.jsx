import React from 'react'
import data from '../../public/gallery.json'

const GalleryPage = () => {

    const galleryItems = data.gallery || [];

    return (
        <main className="ms-container">
            <div className="ms-section__block">
                <div className="ms-page-title">
                    <h2 className="page-header">Casa Lulu Tulum</h2>
                    <p className="page-desc">4 Bedrooms, 3 Bathrooms</p>
                </div>
            </div>
            <div className="ms-section__block">
                <div id="gallery">
                    {galleryItems.length > 0 ? (
                        galleryItems.map((item, index) => (
                            <img
                                key={index}
                                alt={`image ${index + 1}`}
                                src={item.url}
                                data-image={item.url}
                                data-description={item.description}
                            />
                        ))
                    ) : (
                        <p>No images to display</p>
                    )}
                </div>
            </div>
            {/* <div className="ms-section__block center-block">
                <a href="#" className="ms-button" data-title="load more">load more</a>
            </div> */}
        </main>
    )
}

export default GalleryPage;