import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const productGallery = cloudinary.galleryWidget({
      container: "#product-gallery",
      cloudName: "nefejames",
      mediaAssets: [{ tag: "dog-picture", mediaType: "image" }],
    });

    productGallery.render();
  }, []);

  return (
    <div className="container">
      <h1>Remix Ecommerce Product Gallery</h1>
      <div className="gallery-container">
        <div id="product-gallery"></div>
      </div>
    </div>
  );
}
