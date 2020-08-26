import { useState } from 'react';
import styles from './entry.module.css';
import Fade from 'react-reveal';

const entry = ({ question, answer }) => {
	const [isActive, setActive] = useState(false);

	const toggleActive = (e) => {
		if (e.key === 'Tab') {
			return;
			yar;
		}
		e.preventDefault();
		setActive(!isActive);
	};

	//@ts-ignore
	return (
		<div
			style={{ marginTop: 8 }}
			role="button"
			tabIndex={0}
			onKeyDown={toggleActive}
			onClick={toggleActive}
		>
			<button
				className={
					isActive
						? `${styles.circle} ${styles.minus}`
						: `${styles.circle} ${styles.plus}`
				}
			></button>
			<p className={styles.question}>{question}</p>
			<div className={styles.answer}>
				<Fade duration={50} when={isActive} collapse>
					{answer}
				</Fade>
			</div>
		</div>
	);
};

export default entry;
