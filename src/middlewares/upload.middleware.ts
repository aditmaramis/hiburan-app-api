import multer from 'multer';
import path from 'path';
import fs from 'fs';

// Ensure upload directories exist
const ensureDirectoryExists = (dirPath: string) => {
	if (!fs.existsSync(dirPath)) {
		fs.mkdirSync(dirPath, { recursive: true });
	}
};

// Storage configuration for events
const eventStorage = multer.diskStorage({
	destination: (req, file, cb) => {
		const uploadPath = path.join(__dirname, '../../uploads/events');
		ensureDirectoryExists(uploadPath);
		cb(null, uploadPath);
	},
	filename: (req, file, cb) => {
		// Generate unique filename
		const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
		const extension = path.extname(file.originalname);
		cb(null, `event-${uniqueSuffix}${extension}`);
	},
});

// Storage configuration for profiles
const profileStorage = multer.diskStorage({
	destination: (req, file, cb) => {
		const uploadPath = path.join(__dirname, '../../uploads/profiles');
		ensureDirectoryExists(uploadPath);
		cb(null, uploadPath);
	},
	filename: (req, file, cb) => {
		// Generate unique filename
		const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
		const extension = path.extname(file.originalname);
		cb(null, `profile-${uniqueSuffix}${extension}`);
	},
});

// Storage configuration for payment proofs
const paymentProofStorage = multer.diskStorage({
	destination: (req, file, cb) => {
		const uploadPath = path.join(__dirname, '../../uploads/payment-proofs');
		ensureDirectoryExists(uploadPath);
		cb(null, uploadPath);
	},
	filename: (req, file, cb) => {
		// Generate unique filename
		const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
		const extension = path.extname(file.originalname);
		cb(null, `payment-proof-${uniqueSuffix}${extension}`);
	},
});

// File filter for images only
const imageFilter = (
	req: any,
	file: Express.Multer.File,
	cb: multer.FileFilterCallback
) => {
	// Accept images only
	if (!file.originalname.match(/\.(jpg|JPG|jpeg|JPEG|png|PNG|gif|GIF)$/)) {
		req.fileValidationError = 'Only image files are allowed!';
		return cb(null, false);
	}
	cb(null, true);
};

// Configure multer for events
export const uploadEventImage = multer({
	storage: eventStorage,
	fileFilter: imageFilter,
	limits: {
		fileSize: 5 * 1024 * 1024, // 5MB limit
	},
}).single('image');

// Configure multer for profiles
export const uploadProfileImage = multer({
	storage: profileStorage,
	fileFilter: imageFilter,
	limits: {
		fileSize: 2 * 1024 * 1024, // 2MB limit
	},
}).single('image');

// Configure multer for payment proofs
export const uploadPaymentProof = multer({
	storage: paymentProofStorage,
	fileFilter: imageFilter,
	limits: {
		fileSize: 3 * 1024 * 1024, // 3MB limit
	},
}).single('paymentProof');

// General upload for any image
export const uploadImage = multer({
	storage: multer.memoryStorage(),
	fileFilter: imageFilter,
	limits: {
		fileSize: 5 * 1024 * 1024, // 5MB limit
	},
}).single('image');
