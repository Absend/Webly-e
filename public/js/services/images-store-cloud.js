const data = new Data();
const imagesStoreCloud = {};

data.getCloudinaryParams()
	.then((data) => {
		imagesStoreCloud.params = {
			CLOUDINARY_URL: data.CLOUDINARY_URL,
			CLOUDINARY_UPLOAD_PRESET: data.CLOUDINARY_UPLOAD_PRESET
		}
		// console.log(imagesStoreCloud.params.CLOUDINARY_URL);
		// console.log(imagesStoreCloud.params.CLOUDINARY_UPLOAD_PRESET);
	});