import Document, { Html, Head, Main, NextScript } from 'next/document';
import React from 'react';

export default class MyDocument extends Document {
	static async getInitialProps(ctx) {
		const initialProps = await Document.getInitialProps(ctx);
		return { ...initialProps };
	}

	render() {
		return (
			<Html lang="en">
				{/* https://stackoverflow.com/a/57888310 - Firefox rendering fix */}
				<script>0</script>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
