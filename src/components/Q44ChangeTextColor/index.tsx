import { useState } from 'react';

const Q44ChangeTextColor: React.FC = () => {
    const [color, setColor] = useState('');
    const [text, setText] = useState('');

    return (
        <>
            <div>
                <span style={{ color }}>{text}</span>
            </div>
            <div>
                <input
                    type="text"
                    value={text}
                    onChange={ev => setText(ev.target.value)}
                />

                <button
                    type="submit"
                    className="btn btn-success mx-2"
                    onClick={() => setColor(color)}
                >
                    Verde
                </button>

                <button type="submit" className="btn btn-danger">
                    Vermelho
                </button>

                <button type="submit" className="btn btn-warning mx-2">
                    Amarelo
                </button>

                <button type="submit" className="btn btn-dark">
                    Preto
                </button>

                <button type="submit" className="btn btn-primary mx-2">
                    Azul
                </button>
            </div>
        </>
    );
};

export default Q44ChangeTextColor;
