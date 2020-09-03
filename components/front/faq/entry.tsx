import { useState } from 'react';
import styles from './entry.module.css';
import Fade from 'react-reveal';

const entry = ({ question, answer }) => {
	const [isActive, setActive] = useState(false);

	const toggleActive = (e) => {
		if (e.key === 'Tab') {
			return;
		}
		e.preventDefault();
		setActive(!isActive);
	};

	return (
		<div
			className={styles.entry}
			role="button"
			tabIndex={0}
			onKeyDown={toggleActive}
			onClick={toggleActive}
		>
			<button
				aria-label="expand"
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
