import multer from 'multer';

// File filter for images only
const imageFilter = (
	req: any,
	file: Express.Multer.File,
	cb: multer.FileFilterCallback
) => {
	// Check if file is an image
	if (file.mimetype.startsWith('image/')) {
		cb(null, true);
	} else {
		cb(new Error('Only image files are allowed!'));
	}
};

// Memory storage for Cloudinary uploads
const memoryStorage = multer.memoryStorage();

// Configure multer for events
export const uploadEventImage = multer({
	storage: memoryStorage,
	fileFilter: imageFilter,
	limits: {
		fileSize: 5 * 1024 * 1024, // 5MB limit
	},
}).single('image');

// Configure multer for profiles
export const uploadProfileImage = multer({
	storage: memoryStorage,
	fileFilter: imageFilter,
	limits: {
		fileSize: 2 * 1024 * 1024, // 2MB limit
	},
}).single('image');

// Configure multer for payment proofs
export const uploadPaymentProof = multer({
	storage: memoryStorage,
	fileFilter: imageFilter,
	limits: {
		fileSize: 3 * 1024 * 1024, // 3MB limit
	},
}).single('paymentProof');

// Generic image upload
export const uploadImage = multer({
	storage: memoryStorage,
	fileFilter: imageFilter,
	limits: {
		fileSize: 5 * 1024 * 1024, // 5MB limit
	},
}).single('image');

// Multiple image upload
export const uploadMultipleImages = multer({
	storage: memoryStorage,
	fileFilter: imageFilter,
	limits: {
		fileSize: 5 * 1024 * 1024, // 5MB limit per file
	},
}).array('images', 10); // Max 10 images
