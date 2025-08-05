import { config } from 'dotenv';
import { resolve } from 'path';

export const NODE_ENV = process.env.NODE_ENV || 'development';

// Always load the main .env file first
config({ path: resolve(__dirname, '../.env') });

// Then load environment-specific files if they exist
const envFile = NODE_ENV === 'development' ? '.env.development' : '.env';
config({ path: resolve(__dirname, `../${envFile}`), override: false });
config({ path: resolve(__dirname, `../${envFile}.local`), override: true });

// Load all environment variables from `.env` file
export const PORT = process.env.PORT || 8000;
export const DATABASE_URL = process.env.DATABASE_URL || '';
