import React from 'react';
import App from 'next/app';
import config from 'react-reveal/globals';
import 'styles/global.css';

// config({ ssrFadeout: true });

class MyApp extends App {
	render() {
		const { Component, pageProps } = this.props;
		return <Component {...pageProps} />;
	}
}

export default MyApp;
