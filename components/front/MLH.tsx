const MLH = () => (
	<a
		id="mlh-trust-badge"
		href="https://mlh.io/seasons/2021/events?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2021-season&utm_content=black"
		target="_blank"
		rel="noreferrer"
	>
		<img
			src="https://s3.amazonaws.com/logged-assets/trust-badge/2021/mlh-trust-badge-2021-black.svg"
			alt="Major League Hacking 2021 Hackathon Season"
		/>
		<style jsx>{`
			#mlh-trust-badge {
				width: 115px;
				margin-top: 115px;
				position: fixed;
				right: 0;
				z-index: 10;
			}

			#mlh-trust-badge img {
				width: 115px;
			}
		`}</style>
	</a>
);

export default MLH;
