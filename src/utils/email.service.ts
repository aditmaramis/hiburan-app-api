import nodemailer from 'nodemailer';

interface EmailOptions {
	to: string;
	subject: string;
	html: string;
}

// Create transporter (using Gmail SMTP as an example)
const createTransporter = () => {
	return nodemailer.createTransport({
		service: 'gmail',
		auth: {
			user: process.env.MAIL_USER || 'your-email@gmail.com',
			pass: process.env.EMAIL_PASSWORD || 'your-app-password',
		},
	});
};

export const sendEmail = async (options: EmailOptions): Promise<void> => {
	try {
		const transporter = createTransporter();

		const mailOptions = {
			from: process.env.EMAIL_FROM || 'noreply@hiburanapp.com',
			to: options.to,
			subject: options.subject,
			html: options.html,
		};

		const result = await transporter.sendMail(mailOptions);
		// Email sent successfully with messageId: result.messageId
	} catch (error) {
		console.error('Error sending email:', error);
		throw error;
	}
};

export const sendBookingConfirmationEmail = async (
	customerEmail: string,
	customerName: string,
	event: any,
	booking: any,
	pointsUsed: number = 0,
	couponUsed: string | null = null
): Promise<void> => {
	const html = `
		<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
			<h2 style="color: #333;">Booking Confirmation - Payment Required</h2>
			<p>Dear ${customerName || 'Customer'},</p>
			<p>Your booking has been created successfully and is pending payment confirmation.</p>
			
			<div style="background-color: #f8f9fa; padding: 20px; margin: 20px 0; border-radius: 8px;">
				<h3 style="margin-top: 0; color: #333;">Event Details:</h3>
				<ul style="list-style: none; padding: 0;">
					<li style="margin: 8px 0;"><strong>Event:</strong> ${event.title}</li>
					<li style="margin: 8px 0;"><strong>Date:</strong> ${new Date(event.date).toLocaleDateString()}</li>
					<li style="margin: 8px 0;"><strong>Time:</strong> ${event.time}</li>
					<li style="margin: 8px 0;"><strong>Location:</strong> ${event.location}</li>
					<li style="margin: 8px 0;"><strong>Quantity:</strong> ${booking.quantity} ticket(s)</li>
					<li style="margin: 8px 0;"><strong>Total Amount:</strong> IDR ${parseFloat(booking.total_price).toLocaleString()}</li>
				</ul>
				
				${pointsUsed > 0 ? `<p style="margin: 8px 0;"><strong>Points Used:</strong> ${pointsUsed} points</p>` : ''}
				${couponUsed ? `<p style="margin: 8px 0;"><strong>Coupon Applied:</strong> ${couponUsed}</p>` : ''}
			</div>
			
			<p>Please upload your payment proof to complete the booking process.</p>
			<p>The organizer will review and confirm your payment.</p>
			
			<p style="margin-top: 30px;">Thank you for using our platform!</p>
			
			<div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; color: #666; font-size: 12px;">
				<p>This is an automated email. Please do not reply to this email.</p>
			</div>
		</div>
	`;

	await sendEmail({
		to: customerEmail,
		subject: 'Booking Confirmation - Payment Required',
		html,
	});
};

export const sendOrganizerNotificationEmail = async (
	organizerEmail: string,
	organizerName: string,
	event: any,
	customerName: string,
	booking: any
): Promise<void> => {
	const html = `
		<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
			<h2 style="color: #333;">New Booking - Payment Pending</h2>
			<p>Dear ${organizerName || 'Organizer'},</p>
			<p>You have received a new booking for your event that requires payment confirmation.</p>
			
			<div style="background-color: #f8f9fa; padding: 20px; margin: 20px 0; border-radius: 8px;">
				<h3 style="margin-top: 0; color: #333;">Booking Details:</h3>
				<ul style="list-style: none; padding: 0;">
					<li style="margin: 8px 0;"><strong>Event:</strong> ${event.title}</li>
					<li style="margin: 8px 0;"><strong>Customer:</strong> ${customerName}</li>
					<li style="margin: 8px 0;"><strong>Quantity:</strong> ${booking.quantity} ticket(s)</li>
					<li style="margin: 8px 0;"><strong>Total Amount:</strong> IDR ${parseFloat(booking.total_price).toLocaleString()}</li>
					<li style="margin: 8px 0;"><strong>Booking Date:</strong> ${new Date(booking.booking_date).toLocaleDateString()}</li>
				</ul>
			</div>
			
			<p>Please review the payment proof once uploaded by the customer and update the transaction status.</p>
			<p>You can manage transactions from your organizer dashboard.</p>
			
			<div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; color: #666; font-size: 12px;">
				<p>This is an automated email. Please do not reply to this email.</p>
			</div>
		</div>
	`;

	await sendEmail({
		to: organizerEmail,
		subject: 'New Booking - Payment Pending',
		html,
	});
};

export const sendPaymentStatusEmail = async (
	customerEmail: string,
	customerName: string,
	event: any,
	booking: any,
	status: 'accepted' | 'rejected',
	pointsRestored: number = 0,
	couponRestored: string | null = null
): Promise<void> => {
	const isAccepted = status === 'accepted';

	const html = `
		<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
			<h2 style="color: ${isAccepted ? '#28a745' : '#dc3545'};">
				Payment ${isAccepted ? 'Accepted' : 'Rejected'}
			</h2>
			<p>Dear ${customerName || 'Customer'},</p>
			<p>
				Your payment for the booking has been ${isAccepted ? 'accepted' : 'rejected'} by the organizer.
			</p>
			
			<div style="background-color: #f8f9fa; padding: 20px; margin: 20px 0; border-radius: 8px;">
				<h3 style="margin-top: 0; color: #333;">Booking Details:</h3>
				<ul style="list-style: none; padding: 0;">
					<li style="margin: 8px 0;"><strong>Event:</strong> ${event.title}</li>
					<li style="margin: 8px 0;"><strong>Date:</strong> ${new Date(event.date).toLocaleDateString()}</li>
					<li style="margin: 8px 0;"><strong>Time:</strong> ${event.time}</li>
					<li style="margin: 8px 0;"><strong>Location:</strong> ${event.location}</li>
					<li style="margin: 8px 0;"><strong>Quantity:</strong> ${booking.quantity} ticket(s)</li>
					<li style="margin: 8px 0;"><strong>Total Amount:</strong> IDR ${parseFloat(booking.total_price).toLocaleString()}</li>
				</ul>
			</div>
			
			${
				isAccepted
					? `
				<div style="background-color: #d4edda; padding: 15px; margin: 20px 0; border-radius: 8px; border-left: 4px solid #28a745;">
					<p style="margin: 0; color: #155724;"><strong>Congratulations!</strong> Your booking is confirmed.</p>
					<p style="margin: 8px 0 0 0; color: #155724;">You can view your tickets in your dashboard.</p>
				</div>
			`
					: `
				<div style="background-color: #f8d7da; padding: 15px; margin: 20px 0; border-radius: 8px; border-left: 4px solid #dc3545;">
					<p style="margin: 0; color: #721c24;"><strong>Payment Rejected</strong></p>
					<p style="margin: 8px 0 0 0; color: #721c24;">The organizer has rejected your payment. Please contact them for more information.</p>
				</div>
				
				${
					pointsRestored > 0 || couponRestored
						? `
					<div style="background-color: #d1ecf1; padding: 15px; margin: 20px 0; border-radius: 8px; border-left: 4px solid #17a2b8;">
						<p style="margin: 0; color: #0c5460;"><strong>Refund Information:</strong></p>
						${pointsRestored > 0 ? `<p style="margin: 8px 0 0 0; color: #0c5460;">• ${pointsRestored} points have been restored to your account</p>` : ''}
						${couponRestored ? `<p style="margin: 8px 0 0 0; color: #0c5460;">• Coupon "${couponRestored}" has been restored and can be used again</p>` : ''}
						<p style="margin: 8px 0 0 0; color: #0c5460;">• Event seats have been made available again</p>
					</div>
				`
						: ''
				}
			`
			}
			
			<p style="margin-top: 30px;">Thank you for using our platform!</p>
			
			<div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; color: #666; font-size: 12px;">
				<p>This is an automated email. Please do not reply to this email.</p>
			</div>
		</div>
	`;

	await sendEmail({
		to: customerEmail,
		subject: `Payment ${isAccepted ? 'Accepted' : 'Rejected'} - ${event.title}`,
		html,
	});
};

export const sendPaymentProofNotification = async (
	organizerEmail: string,
	organizerName: string,
	eventTitle: string,
	bookingId: number,
	customerName: string
): Promise<void> => {
	const html = `
		<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
			<h2 style="color: #333;">Payment Proof Submitted</h2>
			<p>Dear ${organizerName},</p>
			
			<p>A customer has submitted payment proof for your event <strong>"${eventTitle}"</strong>.</p>
			
			<div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
				<h3 style="margin-top: 0; color: #333;">Booking Details</h3>
				<p><strong>Booking ID:</strong> #${bookingId}</p>
				<p><strong>Customer:</strong> ${customerName}</p>
				<p><strong>Status:</strong> Waiting for Admin Confirmation</p>
			</div>
			
			<p>Please review the payment proof and approve or reject the payment within 3 days.</p>
			
			<div style="text-align: center; margin: 30px 0;">
				<a href="${process.env.FRONTEND_URL}/admin/bookings/${bookingId}" 
				   style="background-color: #007bff; color: white; padding: 12px 30px; text-decoration: none; border-radius: 5px; display: inline-block;">
					Review Payment
				</a>
			</div>
			
			<p style="color: #666; font-size: 14px;">
				This is an automated email. Please do not reply to this message.
			</p>
		</div>
	`;

	await sendEmail({
		to: organizerEmail,
		subject: `Payment Proof Submitted - ${eventTitle}`,
		html,
	});
};

export const sendPaymentConfirmation = async (
	customerEmail: string,
	customerName: string,
	eventTitle: string,
	bookingId: number
): Promise<void> => {
	const html = `
		<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
			<h2 style="color: #28a745;">Payment Confirmed! 🎉</h2>
			<p>Dear ${customerName},</p>
			
			<p>Great news! Your payment has been confirmed and your booking is now complete.</p>
			
			<div style="background-color: #d4edda; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #28a745;">
				<h3 style="margin-top: 0; color: #155724;">Booking Confirmed</h3>
				<p><strong>Event:</strong> ${eventTitle}</p>
				<p><strong>Booking ID:</strong> #${bookingId}</p>
				<p><strong>Status:</strong> Confirmed</p>
			</div>
			
			<p>You will receive your event ticket(s) closer to the event date. Please keep this confirmation email for your records.</p>
			
			<div style="text-align: center; margin: 30px 0;">
				<a href="${process.env.FRONTEND_URL}/dashboard/bookings/${bookingId}" 
				   style="background-color: #28a745; color: white; padding: 12px 30px; text-decoration: none; border-radius: 5px; display: inline-block;">
					View Booking Details
				</a>
			</div>
			
			<p style="color: #666; font-size: 14px;">
				Thank you for choosing our platform! We hope you enjoy the event.
			</p>
		</div>
	`;

	await sendEmail({
		to: customerEmail,
		subject: `Payment Confirmed - ${eventTitle}`,
		html,
	});
};

export const sendPaymentRejection = async (
	customerEmail: string,
	customerName: string,
	eventTitle: string,
	bookingId: number,
	reason: string
): Promise<void> => {
	const html = `
		<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
			<h2 style="color: #dc3545;">Payment Rejected</h2>
			<p>Dear ${customerName},</p>
			
			<p>We regret to inform you that your payment proof for <strong>"${eventTitle}"</strong> has been rejected.</p>
			
			<div style="background-color: #f8d7da; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #dc3545;">
				<h3 style="margin-top: 0; color: #721c24;">Booking Details</h3>
				<p><strong>Event:</strong> ${eventTitle}</p>
				<p><strong>Booking ID:</strong> #${bookingId}</p>
				<p><strong>Reason:</strong> ${reason}</p>
			</div>
			
			<p>Your booking has been canceled and any points or coupons used have been restored to your account.</p>
			
			<p>If you believe this is an error, please contact customer support or try submitting a new payment proof.</p>
			
			<div style="text-align: center; margin: 30px 0;">
				<a href="${process.env.FRONTEND_URL}/support" 
				   style="background-color: #dc3545; color: white; padding: 12px 30px; text-decoration: none; border-radius: 5px; display: inline-block;">
					Contact Support
				</a>
			</div>
			
			<p style="color: #666; font-size: 14px;">
				We apologize for any inconvenience caused.
			</p>
		</div>
	`;

	await sendEmail({
		to: customerEmail,
		subject: `Payment Rejected - ${eventTitle}`,
		html,
	});
};

export const sendTransactionCanceled = async (
	customerEmail: string,
	customerName: string,
	eventTitle: string,
	bookingId: number,
	reason: string
): Promise<void> => {
	const html = `
		<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
			<h2 style="color: #ffc107;">Booking Canceled</h2>
			<p>Dear ${customerName},</p>
			
			<p>Your booking for <strong>"${eventTitle}"</strong> has been canceled.</p>
			
			<div style="background-color: #fff3cd; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #ffc107;">
				<h3 style="margin-top: 0; color: #856404;">Cancellation Details</h3>
				<p><strong>Event:</strong> ${eventTitle}</p>
				<p><strong>Booking ID:</strong> #${bookingId}</p>
				<p><strong>Reason:</strong> ${reason}</p>
			</div>
			
			<p>Any points or coupons used for this booking have been restored to your account, and the reserved seats have been released.</p>
			
			<div style="text-align: center; margin: 30px 0;">
				<a href="${process.env.FRONTEND_URL}/dashboard/bookings" 
				   style="background-color: #007bff; color: white; padding: 12px 30px; text-decoration: none; border-radius: 5px; display: inline-block;">
					View My Bookings
				</a>
			</div>
			
			<p style="color: #666; font-size: 14px;">
				Thank you for your understanding.
			</p>
		</div>
	`;

	await sendEmail({
		to: customerEmail,
		subject: `Booking Canceled - ${eventTitle}`,
		html,
	});
};

export const sendTransactionExpired = async (
	customerEmail: string,
	customerName: string,
	eventTitle: string,
	bookingId: number,
	reason: string
): Promise<void> => {
	const html = `
		<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
			<h2 style="color: #6c757d;">Booking Expired</h2>
			<p>Dear ${customerName},</p>
			
			<p>Your booking for <strong>"${eventTitle}"</strong> has expired due to non-payment.</p>
			
			<div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #6c757d;">
				<h3 style="margin-top: 0; color: #495057;">Expiration Details</h3>
				<p><strong>Event:</strong> ${eventTitle}</p>
				<p><strong>Booking ID:</strong> #${bookingId}</p>
				<p><strong>Reason:</strong> ${reason}</p>
			</div>
			
			<p>Any points or coupons used for this booking have been restored to your account, and the reserved seats have been released for other customers.</p>
			
			<p>You can create a new booking if tickets are still available.</p>
			
			<div style="text-align: center; margin: 30px 0;">
				<a href="${process.env.FRONTEND_URL}/events" 
				   style="background-color: #007bff; color: white; padding: 12px 30px; text-decoration: none; border-radius: 5px; display: inline-block;">
					Browse Events
				</a>
			</div>
			
			<p style="color: #666; font-size: 14px;">
				Thank you for your interest in our events.
			</p>
		</div>
	`;

	await sendEmail({
		to: customerEmail,
		subject: `Booking Expired - ${eventTitle}`,
		html,
	});
};
