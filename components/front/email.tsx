import React, { useState, useRef } from 'react';
import styles from './email.module.css';

// Encode -- used to turn JSON object into encoded URI
function encode(data: { [key: string]: string }) {
	return Object.keys(data)
		.map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
		.join('&');
}

const EmailSubscribeForm = () => {
	const [subscribed, setSubscribed] = useState(false);
	const emailRef = useRef(null);

	const submitEmail = async (e) => {
		e.preventDefault();

		if (subscribed || emailRef.current.value.trim() === '') {
			return;
		}

		const serializedBody = encode({
			'form-name': 'email-subscribe',
			email: emailRef.current.value,
		});

		await fetch(e.target.action, {
			method: 'POST',
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
			body: serializedBody,
		});

		setSubscribed(true);
	};

	return (
		<>
			<form
				className={styles.emailForm}
				name="email-subscribe"
				method="POST"
				data-netlify="true"
				data-netlify-honeypot="bot-field"
				onSubmit={submitEmail}
			>
				<input
					className={styles.emailInput}
					name="email"
					type="email"
					placeholder="Email"
					aria-label="Enter your email for updates"
					ref={emailRef}
				/>
				<button className={styles.emailButton} type="submit">
					Stay Up to Date
				</button>
				<input type="hidden" name="form-name" value="email-subscribe" />
			</form>

			{subscribed && (
				<p className={styles.success}>
					Your e-mail has been successfully submitted!
				</p>
			)}
		</>
	);
};

export default EmailSubscribeForm;
