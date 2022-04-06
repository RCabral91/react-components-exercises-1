import { useState } from 'react';

const Q39UpperInInput: React.FC = () => {
    const [text, setText] = useState('');
    const [resultText, setResultText] = useState('');

    return (
        <>
            <div className="mb-3">
                <p className="form-label">Texto</p>
                <input
                    type="text"
                    className="form-control"
                    value={text}
                    onChange={event => setText(event.target.value)}
                />
            </div>

            <input
                readOnly
                className="form-control"
                value={resultText.toLocaleUpperCase()}
            />

            <div>
                <button
                    type="button"
                    className="btn btn-primary mb-3"
                    onClick={() => setResultText(text)}
                >
                    Enviar
                </button>
            </div>
        </>
    );
};

export default Q39UpperInInput;
