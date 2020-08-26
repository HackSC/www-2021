import { useState } from 'react';

interface ImageProps {
	height?: number | string;
	width?: number | string;
	alt?: string;
	className?: string;
	path: string;
	type?: string;
}

const Image: React.FunctionComponent<ImageProps> = ({
	className,
	path,
	alt = '',
	width,
	height,
}) => {
	const isLoaded = useState(false);

	return (
		<picture>
			{!path.endsWith('.svg') && (
				<source srcSet={require(`images/${path}?trace`)} type="image/svg+xml" />
			)}
			<source srcSet={require(`images/${path}?webp`)} type="image/webp" />
			<img
				src={require(`images/${path}`)}
				alt={alt ? alt : ''}
				className={className}
				height={height}
				width={width}
			/>
		</picture>
	);
};

export default Image;
