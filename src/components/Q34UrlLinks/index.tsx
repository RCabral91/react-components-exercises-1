import { ExternalLinks } from '../../@types/ExternalLinks';

interface IQ34UrlLinksProps {
    oneArray: ExternalLinks[];
}

const Q34UrlLinks: React.FC<IQ34UrlLinksProps> = ({ oneArray }) => {
    return (
        <ul>
            {oneArray.map(item => (
                <li key={item.label}>
                    <a href={item.url} target="_blank" rel="noreferrer">
                        {item.label}
                    </a>
                </li>
            ))}
        </ul>
    );
};

export default Q34UrlLinks;
