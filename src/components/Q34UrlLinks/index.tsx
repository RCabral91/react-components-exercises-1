import { ExternalLinkType } from '../../@types/ExternalLink';

interface IQ34UrlLinksProps {
    links: ExternalLinkType[];
}

const Q34UrlLinks: React.FC<IQ34UrlLinksProps> = ({ links }) => (
    <ul>
        {links.map(item => (
            <li key={item.label}>
                <a href={item.url} target="_blank" rel="noreferrer">
                    {item.label}
                </a>
            </li>
        ))}
    </ul>
);

export default Q34UrlLinks;
