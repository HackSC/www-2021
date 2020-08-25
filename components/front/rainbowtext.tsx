import React, { FunctionComponent } from 'react'; // importing FunctionComponent

type TextProps = {
	text: string;
};

export const RainbowText: FunctionComponent<TextProps> = ({ text }) => {
	return (
		<h2
			style={{
				width: 400,
				marginBottom: 5,
				fontSize: 48,
				fontWeight: 300,
				lineHeight: 1.2,
				letterSpacing: 1,
				textTransform: 'uppercase',
				display: 'inline-block',
				backgroundImage: 'linear-gradient(45deg, #f3ec78, #af4261)',
				backgroundClip: 'text',
				WebkitTextFillColor: 'transparent',
			}}
		>
			{text}
		</h2>
	);
};
