import React, { useState, useRef } from 'react';
import styles from './email.module.css';

function emailIsValid(email: string) {
	return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

const EmailSubscribeForm = ({ subscribed, setSubscribed }) => {
	const [error, setError] = useState('');

	const emailRef = useRef(null);

	const submitEmail = async (e) => {
		e.preventDefault();
		setError('');
		const email = emailRef.current.value;
		if (subscribed || email.trim() === '') {
			setError('Please enter a valid email.');
			setSubscribed(false);
			return;
		}

		if (!emailIsValid(email)) {
			setSubscribed(false);
			setError('Please enter a valid email.');
			return;
		}

		const res = await fetch(`/api/email?email=${email}`, {
			method: 'POST',
		});

		const json = await res.json();
		if (json['error']) {
			setSubscribed(false);
			if (json['error'] === 'Email already exists in the database.') {
				setError('This email has already been submit.');
			}
			setError('An unexpected error has occured.');
			return;
		}

		setSubscribed(true);
	};

	return (
		<>
			<form
				className={styles.emailForm}
				name="email-subscribe"
				method="POST"
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
			</form>
			<p className={styles.disclaimer}>
				Subscribe to be notified of HackSC 2021 events, including when our
				application opens.
			</p>

			{subscribed && (
				<p className={styles.success}>
					Your e-mail has been successfully submitted!
				</p>
			)}

			{error && <p className={styles.error}>Error: {error}</p>}
		</>
	);
};

export default EmailSubscribeForm;
