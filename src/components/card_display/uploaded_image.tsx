import React from 'react';

interface Props {
    src: string
}

const UploadedImage : React.FC<Props> = ({ src }) => {
    const uploadedImage = React.useRef<HTMLImageElement>(null);
    if (uploadedImage.current !== null) {
        uploadedImage.current.style.height = String(uploadedImage.current.height);
        uploadedImage.current.style.width = String(uploadedImage.current.width); 
    }

    return (
        <div className='uploaded-img-container'>
            <img ref={uploadedImage} className='uploaded-img' src={src} alt='upload-img' /> 
        </div>
    )
};

export default UploadedImage;