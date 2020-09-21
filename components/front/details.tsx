import Fade from 'react-reveal/Fade';
import Image from '@/components/image';
import FAQ from '@/components/front/faq';
import styles from './details.module.css';

const Details = () => (
	<section className={styles.details}>
		<Image className={styles.nodelogo} height="375" path="nodelogo.png" />
		<h2 className={styles.detailsHeading}> Details </h2>
		<div className={styles.detailsWrapper}>
			<div style={{ flexDirection: 'column' }}>
				<p>
					<strong>Want to connect the world?</strong> This year we are focused
					on ideas/solutions that will help connect our world during this time.
					Get ready for a weekend full of innovation, connection, and education.
					In an interdisciplinary endeavor, join together with 1000+ visionaries
					to engage in workshops, listen to speakers, and develop programs,
					tools, and relationships that can last for life. We hope to have you
					join us!
				</p>
				<FAQ />
			</div>
		</div>
		<div className={styles.hand}>
			<Fade right>
				<Image
					alt="The world is in your hands at HackSC."
					width="500"
					path="handglobe.png"
				/>
			</Fade>
		</div>
	</section>
);
export { Details };
