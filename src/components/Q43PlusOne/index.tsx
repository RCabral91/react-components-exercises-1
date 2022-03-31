import { useState } from 'react';

const Q43PlusOne: React.FC = () => {
    const [plusOne, setPlusOne] = useState(0);

    return (
        <div>
            <span id="count">{plusOne}</span>

            <button
                type="button"
                id="incrementor"
                onClick={() => setPlusOne(plusOne + 1)}
            >
                Add
            </button>
        </div>
    );
};

export default Q43PlusOne;
