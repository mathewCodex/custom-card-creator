import React from "react";

// interface ImageSrc {
//   id: string;
//   title: string;
//   // src: string;
//   alt: string;
//   regular: string;
//   src: {
//     regular: string;
//     alt: string;
//   };
// }
interface ImageSrc {
  id: string;
  description: string;
  src: string;
}

interface ImageProps {
  title: string;
  imageSrc: ImageSrc[];
  fallbackText: string;
  onSelectImage: (imgSrc: ImageSrc) => void;
  isLoading: boolean;
  loadingText: string;
}

export default function cardImage({
  title,
  imageSrc,
  fallbackText,
  onSelectImage,
  isLoading,
  loadingText,
}: ImageProps) {
  console.log(imageSrc);
  return (
    <section className="Image-display">
      <h2>{title}</h2>
      {isLoading && <p className="fallback-text">{loadingText}</p>}
      {!isLoading && imageSrc.length === 0 && (
        <p className="fallback-text">{fallbackText}</p>
      )}
      {!isLoading && imageSrc.length > 0 && (
        <ul className="images">
          {imageSrc.map((images) => (
            <li key={images.id} className="images-item">
              <button onClick={() => onSelectImage(images)}>
                {/* coming back for */}
                <img
                  src={images.src}
                  alt={"unsplash img"}
                  style={{ width: "300px", height: "auto" }}
                />
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
