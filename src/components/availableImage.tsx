import React from "react";
import CardImage from "./ui/cardImage";
import Error from "./ui/error";

import { useFetch } from "../hooks/useFetch";
import fetchAvailableImages from "../actions/http";
// interface Image {
//   id: string;
//   title: string;
//   image: {
//     src: string;
//     alt: string;
//   };
// }
interface Image {
  id: string;
  description: string;
  src: string;
}

interface AvailableImagesProps {
  onSelectImage: (image: Image) => void;
}

async function fetchSortedImages() {
  const images = fetchAvailableImages();
  return images;
}

const AvailableImages: React.FC<AvailableImagesProps> = ({
  onSelectImage,
}: AvailableImagesProps) => {
  const {
    isFetching,
    error,
    fetchedData: availableImages,
  } = useFetch<Image[]>(fetchSortedImages, []);

  if (error) {
    return <Error title="An error occurred!" message={error.message} />;
  }
  return (
    <div className="Image-cont">
      <CardImage
        title="Available Images"
        imageSrc={availableImages}
        isLoading={isFetching}
        loadingText="Fetching Images data..."
        fallbackText="No Images available."
        onSelectImage={onSelectImage}
      />
    </div>
  );
};

export default AvailableImages;
