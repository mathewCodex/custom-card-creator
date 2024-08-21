export const UPLOAD_IMAGE = 'UPLOAD_IMAGE';

interface UploadImageAction {
    type: typeof UPLOAD_IMAGE,
    payload: string | ArrayBuffer | null
};

export type UploadImageActionTypes = UploadImageAction;

export const uploadImage = (imageURL: string | ArrayBuffer | null) : UploadImageActionTypes => ({
    type: UPLOAD_IMAGE,
    payload: imageURL
});