import { config } from 'dotenv';
import App from './app';

// Load environment variables first
config();

const main = () => {
	const app = new App();
	app.start();
};

main();
