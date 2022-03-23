import { useMemo } from 'react';
import { AiFillStar } from 'react-icons/ai';

interface IQ31StarPointProp {
    amount: number;
}

export const Q31StarPoint: React.FC<IQ31StarPointProp> = ({ amount }) => {
    const point = useMemo(
        () => [...Array(5)].map((_, index) => index < amount),
        [amount]
    );

    return (
        <div className="mt-5">
            <ul className="align-items-center p-0 row row-cols-3 pb-3">
                <li className="d-flex align-items-center list-unstyled col pb-4">
                    {point.map(price => (
                        <div
                            className={`px-2 text-${
                                price ? 'warning' : 'muted'
                            }`}
                        >
                            <AiFillStar className="fs-4 fw-bold" />
                        </div>
                    ))}
                </li>
            </ul>
        </div>
    );
};
