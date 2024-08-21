import React, { useRef, useState } from "react";
import { useFetch } from "../../hooks/useFetch";
import fetchAvailableImages from "../../actions/http";
// import CardImage from "../ui/cardImage";
import AvailableImages from "../availableImage";
interface Props {
  src: string;
}
interface Image {
  id: string;
  description: string;
  src: string;
}

interface ErrorObject {
  message: string;
}
// interface ImageProps {
//   onSelectImage: (imgSrc: Image) => void;
//   userImage: Image[];
//   setUserImage: React.Dispatch<React.SetStateAction<Image[]>>;
//   setErrorUpdatingImage: React.Dispatch<
//     React.SetStateAction<ErrorObject | null>
//   >;
// }
const ImageContent: React.FC<Props> = () => {
  // const selectedImage = useRef();

  const {
    isFetching,
    error,
    fetchedData: userImage,
    setFetchedData: setUserImage,
  } = useFetch(fetchAvailableImages, []);

  async function handleSelectImage(
    selectedImage: Image,

    setUserImage: React.Dispatch<React.SetStateAction<Image[]>>
  ) {
    // Update the local state first
    setUserImage((prevPickedImage) => {
      if (!prevPickedImage) {
        prevPickedImage = [];
      }
      if (prevPickedImage.some((image) => image.id === selectedImage.id)) {
        return prevPickedImage;
      }
      localStorage.setItem("uploadedImage", selectedImage.src);
      return [selectedImage, ...prevPickedImage];
    });
  }
  const wrappedSelectImage = (selectedImage: Image) => {
    handleSelectImage(selectedImage, setUserImage);
  };
  return (
    <div>
      <header>
        <h1>Image Picker</h1>
        <p>Create your personal collection of card you would like.</p>
      </header>
      <main>
        {error && "Error Loading data"}

        <AvailableImages onSelectImage={wrappedSelectImage} />
      </main>
    </div>
  );
};

export default ImageContent;
