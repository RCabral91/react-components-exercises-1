interface IQ35ImagesToReturnProps {
    images: string[];
    size: number;
}

const Q35ImagesToReturn: React.FC<IQ35ImagesToReturnProps> = ({
    images,
    size,
}) => {
    return (
        <div className="d-flex">
            {images.map(image => (
                <div>
                    <img
                        className="m-3"
                        height={size}
                        width={size}
                        src={image}
                        alt="foto"
                    />
                </div>
            ))}
        </div>
    );
};

export default Q35ImagesToReturn;
