interface ImageProps {
	height?: number | string;
	width?: number | string;
	alt?: string;
	className?: string;
	path: string;
	type?: string;
	style?: any;
}

const Image: React.FunctionComponent<ImageProps> = ({
	className,
	path,
	alt = '',
	width,
	height,
	style,
}) => {
	return (
		<picture>
			{!path.endsWith('.svg') && (
				<source srcSet={require(`images/${path}?webp`)} type="image/webp" />
			)}
			<source srcSet={require(`images/${path}`)} />
			<img
				src={require(`images/${path}`)}
				alt={alt ? alt : ''}
				className={className}
				height={height}
				width={width}
				style={style}
			/>
		</picture>
	);
};

export default Image;
