'use server';

import nodemailer from 'nodemailer';
import { z } from 'zod';

// Schema for validation
const schema = z.object({
	name: z.string().min(2, { message: 'Name must be at least 2 characters' }),
	email: z.string().email({ message: 'Invalid email address' }),
	subject: z.string().min(3, { message: 'Subject must be at least 3 characters' }),
	message: z.string().min(10, { message: 'Message must be at least 10 characters' }),
	token: z.string().min(1, { message: 'Verification failed' }),
	// Honeypot field (must be empty)
	company_fax: z.string().optional(),
});

type FormState = {
	success: boolean;
	message: string;
	errors?: Record<string, string[]>;
} | null;

export async function sendEmail(prevState: FormState, formData: FormData) {
	const data = {
		name: formData.get('name'),
		email: formData.get('email'),
		subject: formData.get('subject'),
		message: formData.get('message'),
		token: formData.get('token'),
		company_fax: formData.get('company_fax'),
	};

	// 1. Honeypot check
	// If the hidden field is filled, it's likely a bot.
	// We return success to fool the bot.
	if (data.company_fax) {
		return { success: false, message: 'Please check the form for errors.' };
	}

	// 2. Zod Validation
	const validatedFields = schema.safeParse(data);

	if (!validatedFields.success) {
		return {
			success: false,
			errors: validatedFields.error.flatten().fieldErrors,
			message: 'Please check the form for errors.',
		};
	}

	// 3. Cloudflare Turnstile Verification
	const turnstileSecret = process.env.TURNSTILE_SECRET_KEY;
	if (turnstileSecret) {
		try {
			const verifyResponse = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({
					secret: turnstileSecret,
					response: validatedFields.data.token,
				}),
			});

			const verifyData = await verifyResponse.json();
			if (!verifyData.success) {
				return { success: false, message: 'Bot verification failed. Please try again.' };
			}
		} catch {
			return { success: false, message: 'Verification service unavailable.' };
		}
	}

	// 4. Send Email via Nodemailer
	const { name, email, subject, message } = validatedFields.data;

	const transporter = nodemailer.createTransport({
		host: process.env.SMTP_HOST,
		port: Number(process.env.SMTP_PORT) || 587,
		secure: false, // true for 465, false for other ports
		auth: {
			user: process.env.SMTP_USER,
			pass: process.env.SMTP_PASSWORD,
		},
	});

	try {
		await transporter.sendMail({
			from: `"Portfolio Contact" <${process.env.SMTP_USER}>`,
			to: 'p.nowecki@gmail.com', // Target email (you can also use env var for this)
			replyTo: email,
			subject: `[Portfolio] ${subject}`,
			text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
			html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2>New Contact Message</h2>
          <p><strong>From:</strong> ${name} (<a href="mailto:${email}">${email}</a>)</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <hr />
          <p style="white-space: pre-wrap;">${message}</p>
        </div>
      `,
		});

		return { success: true, message: 'Message sent successfully!' };
	} catch {
		return { success: false, message: 'Failed to send email. Please try again later.' };
	}
}
