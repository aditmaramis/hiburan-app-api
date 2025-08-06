import { v2 as cloudinary } from 'cloudinary';
import { Request } from 'express';

// Configure Cloudinary
cloudinary.config({
	cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
	api_key: process.env.CLOUDINARY_API_KEY,
	api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Debug logging for Cloudinary config
console.log('Cloudinary Config:', {
	cloud_name: process.env.CLOUDINARY_CLOUD_NAME ? 'SET' : 'NOT SET',
	api_key: process.env.CLOUDINARY_API_KEY ? 'SET' : 'NOT SET',
	api_secret: process.env.CLOUDINARY_API_SECRET ? 'SET' : 'NOT SET',
});

export interface UploadResult {
	secure_url: string;
	public_id: string;
	width: number;
	height: number;
	format: string;
	bytes: number;
}

export class CloudinaryService {
	/**
	 * Upload an image buffer to Cloudinary
	 */
	static async uploadImage(
		buffer: Buffer,
		options: {
			folder: string;
			filename?: string;
			transformation?: object;
		}
	): Promise<UploadResult> {
		return new Promise((resolve, reject) => {
			const uploadOptions: any = {
				folder: options.folder,
				resource_type: 'image',
			};

			if (options.filename) {
				uploadOptions.public_id = `${options.folder}/${options.filename}`;
			}

			if (options.transformation) {
				uploadOptions.transformation = options.transformation;
			}

			console.log('Cloudinary upload options:', uploadOptions);

			cloudinary.uploader
				.upload_stream(uploadOptions, (error, result) => {
					if (error) {
						console.error('Cloudinary upload error:', error);
						reject(error);
					} else if (result) {
						resolve({
							secure_url: result.secure_url,
							public_id: result.public_id,
							width: result.width,
							height: result.height,
							format: result.format,
							bytes: result.bytes,
						});
					} else {
						reject(new Error('Upload failed - no result'));
					}
				})
				.end(buffer);
		});
	}

	/**
	 * Delete an image from Cloudinary
	 */
	static async deleteImage(publicId: string): Promise<void> {
		try {
			await cloudinary.uploader.destroy(publicId);
		} catch (error) {
			console.error('Error deleting image from Cloudinary:', error);
			// Don't throw here - we don't want deletion failures to break the app
		}
	}

	/**
	 * Generate optimized image URL with transformations
	 */
	static getOptimizedUrl(
		publicId: string,
		options: {
			width?: number;
			height?: number;
			crop?: string;
			quality?: string;
			format?: string;
		} = {}
	): string {
		return cloudinary.url(publicId, {
			...options,
			secure: true,
		});
	}

	/**
	 * Upload multiple images
	 */
	static async uploadMultipleImages(
		files: Array<{ buffer: Buffer; originalname: string }>,
		folder: string
	): Promise<UploadResult[]> {
		const uploadPromises = files.map((file) =>
			this.uploadImage(file.buffer, {
				folder,
				filename: file.originalname.split('.')[0],
			})
		);

		return Promise.all(uploadPromises);
	}
}

export default CloudinaryService;
