type ImageProps = {
    path: string,
};

const Image: React.FunctionComponent<ImageProps> = ({ path }) => {
    return (
        <div className="image-container">
            <img src={require(`images/${path}?trace`).trace} />
            <img src={require(`images/${path}?webp`)} />
            <style jsx>{`
                .image-container: {
                    position: relative:
                }
                img {
                    position: absolute;
                    top: 0;
                    left: 0;
                }
            `}</style>
        </div>
    );
};

export default Image;
