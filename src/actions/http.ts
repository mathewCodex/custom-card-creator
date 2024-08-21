// export async function fetchAvailableImages() {
//   const response = await fetch("http://localhost:3000/places"); //unsplash image url
//   const resData = await response.json();

//   if (!response.ok) {
//     throw new Error("Failed to fetch places");
//   }

//   return resData.places;
// }
// const UNSPLASH_ACCESS_KEY = ""; // Replace with your Unsplash Access Key
//api.unsplash.com/photos/random?client_id=u5L0wd2QDqUSQrUV7RyKe4AA77Ypoxsf9sjC_Oo45Pc&count=4
// interface UnsplashPhoto {
//   id: string;
//   title: string;

//   image: {
//     src: string;
//     alt: string;
//   };
// }
interface UnsplashPhoto {
  id: string;
  description: string;
  src: string;
}

const fetchAvailableImages = async (): Promise<UnsplashPhoto[]> => {
  const count = 4;
  const UNSPLASH_ACCESS_KEY = "u5L0wd2QDqUSQrUV7RyKe4AA77Ypoxsf9sjC_Oo45Pc"; // Ensure you replace this with your actual access key
  const url = `https://api.unsplash.com/photos/random?client_id=${UNSPLASH_ACCESS_KEY}&count=${count}`;
  console.log(url);
  try {
    const response = await fetch(url);

    // Check if rate limit was exceeded or if there's any error
    if (!response.ok) {
      console.error(`Error fetching photos: ${response.statusText}`);
      return [];
    }

    const photos = await response.json();

    // Map the API response to the UnsplashPhoto interface
    const mappedPhotos: UnsplashPhoto[] = photos.map((photo: any) => ({
      id: photo.id,
      src: photo.urls.regular, // Using the 'regular' size URL
      description: photo.alt_description || "no desc",
    }));

    return mappedPhotos;
  } catch (error) {
    console.error("Error fetching photos from Unsplash:", error);
    return [];
  }
};

export default fetchAvailableImages;
