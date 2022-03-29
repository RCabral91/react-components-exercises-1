import { useState } from 'react';

const Q38SumInput: React.FC = () => {
    const [value1, setValue1] = useState(0);
    const [value2, setValue2] = useState(0);
    const [sum, setSum] = useState(0);
    const result = value1 + value2;

    return (
        <>
            <div className="mb-3">
                <p className="form-label">Primeiro valor</p>
                <input
                    type="text"
                    className="form-control"
                    value={value1}
                    onChange={event =>
                        setValue1(parseInt(event.target.value, 10))
                    }
                />
            </div>
            <div className="mb-3">
                <p className="form-label">Segundo valor</p>
                <input
                    type="text"
                    className="form-control"
                    value={value2}
                    onChange={event =>
                        setValue2(parseInt(event.target.value, 10))
                    }
                />
            </div>
            <div>
                <button
                    type="button"
                    className="btn btn-primary mb-3"
                    onClick={() => setSum(result)}
                >
                    Enviar
                </button>
            </div>
            <input type="text" className="form-control" value={sum} />
        </>
    );
};

export default Q38SumInput;
