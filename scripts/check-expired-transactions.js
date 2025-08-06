#!/usr/bin/env node

/**
 * Cron job script to check and process expired transactions
 * Should be run every 5-10 minutes via cron
 *
 * Add to crontab:
 * 0,5,10,15,20,25,30,35,40,45,50,55 * * * * /path/to/node /path/to/this/script.js
 */

const API_BASE_URL = process.env.API_BASE_URL || 'http://localhost:8000';

async function processExpiredTransactions() {
	try {
		console.log(
			`[${new Date().toISOString()}] Checking for expired transactions...`
		);

		const response = await fetch(
			`${API_BASE_URL}/api/v1/enhanced/system/process-expired`,
			{
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
			}
		);

		if (response.ok) {
			const result = await response.json();
			console.log(
				`[${new Date().toISOString()}] Processed expired transactions:`,
				{
					expiredPayments: result.expired_payments,
					expiredAdminReviews: result.expired_admin_reviews,
				}
			);

			if (result.expired_payments > 0 || result.expired_admin_reviews > 0) {
				console.log(
					`[${new Date().toISOString()}] Found and processed expired transactions!`
				);
			} else {
				console.log(
					`[${new Date().toISOString()}] No expired transactions found.`
				);
			}
		} else {
			console.error(
				`[${new Date().toISOString()}] Failed to process expired transactions:`,
				response.status
			);
		}
	} catch (error) {
		console.error(
			`[${new Date().toISOString()}] Error processing expired transactions:`,
			error
		);
	}
}

// Run the function
processExpiredTransactions();
