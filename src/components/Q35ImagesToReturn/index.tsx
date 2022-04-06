interface IQ35ImagesToReturnProps {
    urls: string[];
    size: number;
}

const Q35ImagesToReturn: React.FC<IQ35ImagesToReturnProps> = ({
    urls,
    size,
}) => {
    return (
        <div className="d-flex">
            {urls.map(url => (
                <img
                    className="m-3"
                    height={size}
                    width={size}
                    src={url}
                    alt="foto"
                />
            ))}
        </div>
    );
};

export default Q35ImagesToReturn;

// 35. Crie um componente que recebe um array de urls de imagens,
//                 uma segunda prop <b>size</b> e retorna essas imagens em formato
//                 quadrado do tamanho de <b>size</b>, lado a lado
