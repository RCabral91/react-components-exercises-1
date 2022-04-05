import { useCallback, useState } from 'react';
import axios from 'axios';

const api = axios.create({
    baseURL: 'https://viacep.com.br/ws',
});

const Q46Cep: React.FC = () => {
    const [cep, setCep] = useState('');
    const [address, setAddress] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const getAddress = useCallback(async () => {
        try {
            setIsLoading(true);
            const { data } = await api.get(`/${cep}/json`);
            const { logradouro, bairro, localidade, uf } = data;
            setAddress(`${logradouro}, ${bairro}, ${localidade}, ${uf}`);
        } catch {
            setAddress('Não foi possível encontrar seu endereço');
        } finally {
            setIsLoading(false);
        }
    }, [cep]);

    return (
        <div className="m-3 d-flex flex-column">
            <div className="d-flex">
                <div style={{ width: 200 }}>
                    <input
                        type="search"
                        className="form-control"
                        onChange={e => setCep(e.target.value)}
                    />
                </div>

                <button
                    type="submit"
                    className="btn btn-primary"
                    onClick={getAddress}
                >
                    enviar
                </button>
            </div>
            <span>{isLoading ? 'Loading' : address}</span>
        </div>
    );
};

export default Q46Cep;

// 46. Crie um componente que tem um input de CEP, um span vazio e um botão, ao clicar no botão o componente
// deve fazer uma
//                 pesquisa na API de CEP (https://viacep.com.br/ws/XXXXXXXX/json/,
//                 substituir os X pelo CEP, sem hífen) e escrever o endereço
//                 encontrado dentro do span (logradouro, bairro, cidade, estado).
//                 Obs: Deve ser exibido um ícone de loading enquanto a API estiver
//                 buscando o CEP
