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
	return (
		<picture>
			<source srcSet={require(`images/${path}?webp`)} type="image/webp" />
			<source srcSet={require(`images/${path}`)} />
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
