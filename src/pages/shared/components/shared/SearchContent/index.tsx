import React from "react";

interface SearchContentProps {
  state: string;
  setState: React.Dispatch<React.SetStateAction<string>>;
  handleSearch: () => void
}

const SearchContent: React.FC<SearchContentProps> = ({ state, setState, handleSearch }) => {
  return (
    <div className="bg-gray-100 rounded-lg w-full">
      {state.length ? (
        <h1 className="content-title">Resultados da pesquisa para `{state}`</h1>
      ) : (
        <h1 className="content-title" id="servicos">
          Serviços disponíveis
        </h1>
      )}

      <div className=" mt-5 flex flex-col w-60">
        <label className="block text-md mb-2">Digite uma palavra-chave</label>
        <input
          type="text"
          value={state}
          onChange={(e) => setState(e.target.value)}
          placeholder="Digite sua pesquisa..."
          className="min-w-60 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          onClick={handleSearch}
          className="bg-primary w-full mt-3 rounded details-button p-2 text-background text-sm">Pesquisar</button>
      </div>
    </div>
  );
};

export default SearchContent;
