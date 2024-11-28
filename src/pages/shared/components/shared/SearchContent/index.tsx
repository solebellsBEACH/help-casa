import React from 'react';

interface SearchContentProps {
    state: string;
    setState: React.Dispatch<React.SetStateAction<string>>;
}

const SearchContent: React.FC<SearchContentProps> = ({ state, setState }) => {
    return (
        <div className="bg-gray-100 rounded-lg w-full">
            {state.length ? (
                <h1 className="content-title">
                    Resultados da pesquisa para "{state}"
                </h1>
            ) : (
                <h1 className="content-title">
                    Serviços disponíveis
                </h1>
            )}

            <div className="w-full mt-5">
                <label className="block text-lg mb-2">
                    Digite uma palavra-chave
                </label>
                <input
                    type="text"
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                    placeholder="Digite sua pesquisa..."
                    className="min-w-60 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
            </div>
        </div>
    );
};

export default SearchContent;
